import open3d as o3d

pcd = o3d.io.read_point_cloud('test_data/01.ply')
print(f"Number of points: {len(pcd.points)}")