import open3d as o3d
import numpy as np
import pandas as pd
import os
from pathlib import Path
from scipy.spatial import cKDTree
import time
import warnings

# 屏蔽 Open3D 非致命警告
warnings.filterwarnings("ignore")

def normalize_to_unit_cube(pcd):
    """
    【精度核心 - 保持不变】LDIF 规范空间转换：
    将点云平移至原点并缩放到单位立方体 (Unit Cube)。
    """
    pts = np.asarray(pcd.points)
    if pts.shape[0] == 0:
        return pcd
    
    min_bound = pts.min(axis=0)
    max_bound = pts.max(axis=0)
    center = (min_bound + max_bound) / 2.0
    scale = np.max(max_bound - min_bound)
    
    if scale > 0:
        normalized_pts = (pts - center) / scale
        pcd.points = o3d.utility.Vector3dVector(normalized_pts)
    
    return pcd

def load_robust_pcd(path, n_points=100000):
    """
    【加载核心 - 保持不变】兼容性加载逻辑：采样 100k 点，确保 NC 计算法线对齐。
    """
    path_str = str(path)
    mesh = o3d.io.read_triangle_mesh(path_str)
    
    if len(mesh.triangles) > 0:
        mesh.compute_vertex_normals()
        pcd = mesh.sample_points_uniformly(number_of_points=n_points)
    else:
        pcd = o3d.io.read_point_cloud(path_str)
        if len(pcd.points) > n_points:
            pcd = pcd.random_down_sample(n_points / len(pcd.points))
    
    pcd = normalize_to_unit_cube(pcd)
    
    if not pcd.has_normals():
        pcd.estimate_normals(search_param=o3d.geometry.KDTreeSearchParamHybrid(radius=0.1, max_nn=30))
    pcd.normalize_normals()
    
    return pcd

def compute_metrics(recon_path, gt_path, n_points=100000, thresholds=[0.005, 0.01, 0.02]):
    """
    【计算核心 - 保持不变】CD, Chamfer-L1 (p=1), NC, F-Score 计算。
    """
    pcd_recon = load_robust_pcd(recon_path, n_points)
    pcd_gt = load_robust_pcd(gt_path, n_points)

    pts_r = np.asarray(pcd_recon.points)
    pts_g = np.asarray(pcd_gt.points)
    nls_r = np.asarray(pcd_recon.normals)
    nls_g = np.asarray(pcd_gt.normals)

    tree_g = cKDTree(pts_g)
    tree_r = cKDTree(pts_r)

    # Chamfer-L2 (CD)
    dist_r_to_g_l2, idx_r_to_g = tree_g.query(pts_r, k=1, p=2, workers=-1)
    dist_g_to_r_l2, _ = tree_r.query(pts_g, k=1, p=2, workers=-1)
    cd_l2 = (np.mean(dist_r_to_g_l2) + np.mean(dist_g_to_r_l2)) / 2

    # Chamfer-L1 (使用 p=1)
    dist_r_to_g_l1, _ = tree_g.query(pts_r, k=1, p=1, workers=-1)
    dist_g_to_r_l1, _ = tree_r.query(pts_g, k=1, p=1, workers=-1)
    cd_l1 = (np.mean(dist_r_to_g_l1) + np.mean(dist_g_to_r_l1)) / 2

    # Normal Consistency
    nearest_nls_g = nls_g[idx_r_to_g]
    nc = np.mean(np.abs(np.sum(nls_r * nearest_nls_g, axis=1)))

    results = {
        "CD": cd_l2,
        "Chamfer-L1": cd_l1,
        "Chamfer-L2": cd_l2,
        "NC": nc
    }
    
    for t in thresholds:
        precision = np.mean(dist_r_to_g_l2 < t)
        recall = np.mean(dist_g_to_r_l2 < t)
        f1 = (2 * precision * recall / (precision + recall)) if (precision + recall) > 0 else 0
        results[f"F1-{t}"] = f1

    results["F-Score"] = results["F1-0.01"]
    return results

def batch_evaluate(recon_dir, gt_dir, output_dir):
    """
    【修改部分：仅优化文件匹配逻辑】
    """
    recon_path_obj = Path(recon_dir)
    gt_path_obj = Path(gt_dir)
    out_path_obj = Path(output_dir)
    
    # --- 关键修改：扫描 GT 目录下的所有 .ply 和 .obj 文件 ---
    gt_files = list(gt_path_obj.glob("*.ply")) + list(gt_path_obj.glob("*.obj"))
    
    # --- 关键修改：建立更灵活的匹配字典 ---
    # 支持 04.ply 匹配到 04.obj 或 04_pseudo_gt.obj
    gt_dict = {}
    for f in gt_files:
        full_stem = f.stem.lower()
        # 存入全名映射
        gt_dict[full_stem] = f
        # 存入去掉后缀的前缀映射（如 04_pseudo_gt -> 04）
        short_stem = full_stem.split('_')[0]
        if short_stem not in gt_dict:
            gt_dict[short_stem] = f
    
    out_path_obj.mkdir(parents=True, exist_ok=True)
    csv_file = out_path_obj / "Full_Metric_Results.csv"
    
    # 输入模型支持 .ply 和 .obj
    recon_files = sorted(list(recon_path_obj.glob("*.ply")) + list(recon_path_obj.glob("*.obj")))
    all_results = []

    print("\n" + "="*115)
    print(f"{'Filename':<30} | {'CD':<10} | {'C-L1':<10} | {'NC':<10} | {'F-Score':<10} | {'F1-0.01':<10}")
    print("-" * 115)

    for r_file in recon_files:
        r_stem = r_file.stem.lower()
        r_short = r_stem.split('_')[0]
        
        # 匹配逻辑：优先找全名一致的，找不到则按数字前缀找
        g_file = gt_dict.get(r_stem) or gt_dict.get(r_short)

        if g_file:
            try:
                metrics = compute_metrics(r_file, g_file)
                metrics["Filename"] = r_file.name
                metrics["Scene"] = r_short
                all_results.append(metrics)
                
                print(f"{r_file.name:<30} | {metrics['CD']:<10.6f} | "
                      f"{metrics['Chamfer-L1']:<10.6f} | {metrics['NC']:<10.4f} | "
                      f"{metrics['F-Score']:<10.4f} | {metrics['F1-0.01']:<10.4f}")
                
            except Exception as e:
                print(f"{r_file.name:<30} | [错误] 计算失败: {e}")
        else:
            print(f"{r_file.name:<30} | [GT 丢失] 无法匹配真值文件")

    if all_results:
        df = pd.DataFrame(all_results)
        # 保持与原输出字段完全一致
        fixed_cols = ["Filename", "Scene", "CD", "Chamfer-L1", "Chamfer-L2", "NC", "F-Score"]
        f1_specific_cols = ["F1-0.005", "F1-0.01", "F1-0.02"]
        df = df[fixed_cols + f1_specific_cols]
        df.to_csv(csv_file, index=False)
        
        print("-" * 115)
        print("\n>>> 全局总平均指标 (Grand Average):")
        print(df.mean(numeric_only=True).to_string())
        print("\n" + "="*115)
        print(f"评估完成。数值已保存至: {csv_file}")
    else:
        print("\n[失败] 未能在 GroundTruth 文件夹中匹配到对应的 .ply 或 .obj 文件。")

if __name__ == "__main__":
    # --- 最终路径设置 ---
    RECON_INPUT = "wubo/GeoUDF/input" 
    GT_INPUT = "wubo/GeoUDF/GroundTruth"
    RESULT_PATH = "wubo/GeoUDF/output"
    
    batch_evaluate(RECON_INPUT, GT_INPUT, RESULT_PATH)