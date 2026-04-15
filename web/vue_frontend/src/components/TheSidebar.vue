<template>
  <aside class="sidebar">

    <!-- ═══ FILE SECTION ═══ -->
    <div class="section-label">文件</div>

    <!-- Drop zone -->
    <div
      class="drop-zone"
      :class="{ dragover: isDragOver }"
      @dragover.prevent="isDragOver = true"
      @dragleave="isDragOver = false"
      @drop.prevent="onDrop"
      @click="fileInputRef?.click()"
    >
      <span class="drop-icon">{{ isDragOver ? '📂' : '↑' }}</span>
      <span class="drop-text">{{ isUploading ? '上传中...' : '拖拽或点击上传 .ply / .obj' }}</span>
      <span v-if="uploadError" class="drop-error">{{ uploadError }}</span>
    </div>
    <input ref="fileInputRef" type="file" accept=".ply,.obj" style="display:none" @change="onFileInputChange" />

    <!-- File tabs -->
    <div class="file-tabs">
      <button class="file-tab" :class="{ active: activeTab === 'input' }" @click="activeTab = 'input'">
        输入 <span v-if="files.input?.length">({{ files.input.length }})</span>
      </button>
      <button class="file-tab" :class="{ active: activeTab === 'test_data' }" @click="activeTab = 'test_data'">
        样本 <span v-if="files.test_data?.length">({{ files.test_data.length }})</span>
      </button>
      <button class="tab-action" @click="$emit('refreshFiles')" title="刷新">↺</button>
      <button class="tab-action" @click="$emit('loadSample')" title="加载示例">✦</button>
    </div>

    <!-- File list -->
    <div class="file-list">
      <template v-if="currentFiles.length > 0">
        <div
          v-for="file in currentFiles"
          :key="file.path"
          class="file-item"
          :class="{ selected: selectedFilePath === file.path }"
          @click="selectFile(file)"
        >
          <span class="file-icon">{{ getFileIcon(file.name) }}</span>
          <div class="file-info">
            <div class="file-name" :title="file.name">{{ file.name }}</div>
            <div class="file-meta">{{ formatSize(file.size) }}</div>
          </div>
        </div>
      </template>
      <div v-else class="file-empty">暂无文件</div>
    </div>

    <div class="divider"></div>

    <!-- ═══ SETTINGS SECTION ═══ -->
    <div class="section-label">重建</div>

    <!-- Selected file -->
    <div class="setting-row">
      <span class="setting-label">输入</span>
      <div v-if="selectedFile" class="selected-badge" :title="selectedFile.name">
        <span class="selected-badge-name">{{ selectedFile.name }}</span>
      </div>
      <span v-else class="setting-hint">未选择文件</span>
    </div>

    <!-- Resolution -->
    <div class="setting-row">
      <span class="setting-label">分辨率</span>
      <div class="seg-control">
        <button
          v-for="res in [128, 192]"
          :key="res"
          class="seg-btn"
          :class="{ active: resolution === res }"
          @click="resolution = res"
        >{{ res }}</button>
      </div>
    </div>

    <!-- Dense mode -->
    <div class="setting-row">
      <span class="setting-label">密集点云</span>
      <div class="toggle-wrap" @click="dense = !dense">
        <div class="toggle-track" :class="{ on: dense }">
          <div class="toggle-thumb"></div>
        </div>
      </div>
    </div>

    <!-- Reconstruct button -->
    <button
      class="btn-reconstruct"
      :disabled="!selectedFile || isRunning"
      @click="triggerReconstruct"
    >
      <span v-if="isRunning" class="btn-spinner">⟳</span>
      <span v-else>▶</span>
      {{ isRunning ? '重建中...' : '开始重建' }}
    </button>

    <!-- ═══ PROGRESS SECTION ═══ -->
    <template v-if="taskStatus.status">
      <div class="divider"></div>
      <div class="section-label-row">
        <span class="section-label" style="margin:0">进度</span>
        <div class="task-badge" :class="taskBadgeClass">
          <span class="task-badge-dot"></span>{{ taskBadgeText }}
        </div>
        <span class="progress-pct">{{ taskStatus.progress }}%</span>
      </div>

      <div class="progress-track">
        <div
          class="progress-fill"
          :style="{ width: taskStatus.progress + '%' }"
          :class="{ complete: taskStatus.status === 'done', error: taskStatus.status === 'error' }"
        ></div>
      </div>

      <div ref="logRef" class="log-area">
        <div
          v-for="(line, i) in taskStatus.log"
          :key="i"
          class="log-line"
          :class="getLogLineClass(line)"
        >{{ line }}</div>
      </div>
    </template>

  </aside>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const props = defineProps({
  files:      { type: Object, default: () => ({ input: [], test_data: [] }) },
  taskStatus: { type: Object, default: () => ({}) }
})

const emit = defineEmits(['fileSelect', 'reconstruct', 'loadSample', 'refreshFiles'])

const activeTab    = ref('test_data')
const selectedFile = ref(null)
const selectedFilePath = ref(null)
const resolution   = ref(128)
const dense        = ref(false)
const isDragOver   = ref(false)
const isUploading  = ref(false)
const uploadError  = ref('')
const fileInputRef = ref(null)
const logRef       = ref(null)

const currentFiles = computed(() =>
  (activeTab.value === 'input' ? props.files.input : props.files.test_data) || []
)

const isRunning = computed(() =>
  props.taskStatus?.status === 'running' || props.taskStatus?.status === 'queued'
)

const taskBadgeText = computed(() => {
  switch (props.taskStatus?.status) {
    case 'queued':  return '等待'
    case 'running': return '运行中'
    case 'done':    return '完成'
    case 'error':   return '错误'
    default:        return props.taskStatus?.status || ''
  }
})

const taskBadgeClass = computed(() => {
  switch (props.taskStatus?.status) {
    case 'queued':
    case 'running': return 'badge-warning'
    case 'done':    return 'badge-success'
    case 'error':   return 'badge-error'
    default:        return ''
  }
})

watch(
  () => props.taskStatus?.log?.length,
  async () => {
    await nextTick()
    if (logRef.value) logRef.value.scrollTop = logRef.value.scrollHeight
  }
)

function selectFile(file) {
  selectedFile.value = file
  selectedFilePath.value = file.path
  emit('fileSelect', file)
}

function triggerReconstruct() {
  if (!selectedFile.value || isRunning.value) return
  emit('reconstruct', { inputFile: selectedFile.value.path, resolution: resolution.value, dense: dense.value })
}

function getFileIcon(name) {
  const lower = name.toLowerCase()
  if (lower.includes('mesh') || lower.includes('_rec_')) return '◎'
  if (lower.endsWith('.obj')) return '□'
  return '·'
}

function formatSize(bytes) {
  if (!bytes) return '—'
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

function getLogLineClass(line) {
  if (line.includes('ERROR') || line.includes('错误')) return 'log-error'
  if (line.includes('complete') || line.includes('完成') || line.includes('done')) return 'log-success'
  if (line.includes('[WS]')) return 'log-ws'
  return ''
}

async function uploadFile(file) {
  if (!file) return
  const ext = file.name.split('.').pop().toLowerCase()
  if (!['ply', 'obj'].includes(ext)) {
    uploadError.value = '仅支持 .ply 和 .obj 格式'
    setTimeout(() => { uploadError.value = '' }, 3000)
    return
  }
  isUploading.value = true
  uploadError.value = ''
  try {
    const fd = new FormData()
    fd.append('file', file)
    const resp = await fetch('/api/upload', { method: 'POST', body: fd })
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({ detail: '上传失败' }))
      throw new Error(err.detail || '上传失败')
    }
    emit('refreshFiles')
    activeTab.value = 'input'
  } catch (e) {
    uploadError.value = e.message
    setTimeout(() => { uploadError.value = '' }, 4000)
  } finally {
    isUploading.value = false
  }
}

function onDrop(e) {
  isDragOver.value = false
  const file = e.dataTransfer.files[0]
  if (file) uploadFile(file)
}

function onFileInputChange(e) {
  const file = e.target.files[0]
  if (file) uploadFile(file)
  e.target.value = ''
}
</script>

<style scoped>
.sidebar {
  width: 272px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 16px 14px;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 7px;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-right: 1px solid rgba(79, 70, 229, 0.08);
  font-family: var(--font);
}

/* ── Section label ── */
.section-label {
  font-size: 9.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #A5B4FC;
  padding: 0 2px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.section-label::before {
  content: '';
  display: inline-block;
  width: 2px;
  height: 10px;
  border-radius: 2px;
  background: linear-gradient(180deg, #6366F1, #A855F7);
  flex-shrink: 0;
}

.section-label-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-label-row .section-label::before { display: none; }

.divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.12), transparent);
  margin: 5px 0;
}

/* ── Drop zone ── */
.drop-zone {
  border: 1.5px dashed rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  padding: 10px 10px;
  text-align: center;
  cursor: pointer;
  background: rgba(99, 102, 241, 0.025);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.drop-zone:hover,
.drop-zone.dragover {
  border-color: #6366F1;
  background: rgba(99, 102, 241, 0.06);
}

.drop-icon {
  font-size: 13px;
  color: #A5B4FC;
  line-height: 1;
}

.drop-text {
  font-size: 11px;
  color: #64748B;
  font-weight: 500;
}

.drop-error {
  font-size: 10px;
  color: #EF4444;
  font-weight: 500;
}

/* ── File tabs ── */
.file-tabs {
  display: flex;
  align-items: center;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 9px;
  padding: 2px;
  gap: 2px;
}

.file-tab {
  flex: 1;
  padding: 5px 6px;
  border-radius: 7px;
  border: none;
  font-size: 11px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  background: transparent;
  color: #94A3B8;
}

.file-tab.active {
  background: white;
  color: #6366F1;
  box-shadow: 0 1px 4px rgba(99, 102, 241, 0.12);
}

.tab-action {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  border: none;
  background: transparent;
  color: #94A3B8;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  font-family: inherit;
  flex-shrink: 0;
}

.tab-action:hover {
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
}

/* ── File list ── */
.file-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  max-height: 185px;
  overflow-y: auto;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s;
  border: 1px solid transparent;
}

.file-item:hover {
  background: rgba(99, 102, 241, 0.05);
}

.file-item.selected {
  background: rgba(99, 102, 241, 0.08);
  border-color: rgba(99, 102, 241, 0.2);
}

.file-icon {
  font-size: 12px;
  color: #A5B4FC;
  flex-shrink: 0;
  font-weight: 700;
  width: 14px;
  text-align: center;
}

.file-info { flex: 1; min-width: 0; }

.file-name {
  font-size: 11.5px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--mono);
}

.file-meta {
  font-size: 10px;
  color: #CBD5E1;
  margin-top: 1px;
}

.file-empty {
  text-align: center;
  font-size: 11px;
  color: #CBD5E1;
  padding: 14px 0;
}

/* ── Settings ── */
.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 30px;
  padding: 2px 6px;
  border-radius: 8px;
  background: rgba(248, 250, 255, 0.6);
  border: 1px solid rgba(99, 102, 241, 0.05);
}

.setting-label {
  font-size: 12px;
  color: #64748B;
  font-weight: 500;
  flex-shrink: 0;
}

.setting-hint {
  font-size: 11px;
  color: #CBD5E1;
  font-style: italic;
}

.selected-badge {
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.18);
  border-radius: 6px;
  padding: 2px 8px;
  max-width: 152px;
  overflow: hidden;
}

.selected-badge-name {
  font-size: 11px;
  font-weight: 500;
  color: #4F46E5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

/* Segmented control */
.seg-control {
  display: flex;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 8px;
  padding: 2px;
  gap: 1px;
}

.seg-btn {
  padding: 4px 14px;
  border-radius: 6px;
  border: none;
  font-size: 11.5px;
  font-weight: 600;
  font-family: var(--mono);
  cursor: pointer;
  background: transparent;
  color: #64748B;
  transition: all 0.12s;
  letter-spacing: 0.01em;
}

.seg-btn.active {
  background: white;
  color: #6366F1;
  box-shadow: 0 1px 4px rgba(99, 102, 241, 0.15);
}

/* Toggle */
.toggle-wrap {
  cursor: pointer;
  user-select: none;
}

.toggle-track {
  width: 34px;
  height: 18px;
  border-radius: 9px;
  background: #E2E8F0;
  position: relative;
  transition: background 0.2s;
}

.toggle-track.on {
  background: linear-gradient(135deg, #6366F1, #A855F7);
}

.toggle-thumb {
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s ease;
}

.toggle-track.on .toggle-thumb {
  transform: translateX(16px);
}

/* Reconstruct button */
.btn-reconstruct {
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #6366F1, #A855F7);
  color: white;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 4px;
  letter-spacing: 0.01em;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
}

.btn-reconstruct:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.38);
}

.btn-reconstruct:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
}

.btn-reconstruct:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
}

.btn-spinner {
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ── Progress ── */
.task-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 8px;
}

.task-badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.badge-warning {
  color: #D97706;
  background: rgba(245, 158, 11, 0.1);
}

.badge-warning .task-badge-dot { animation: pulse-badge 1.2s ease-in-out infinite; }

.badge-success { color: #059669; background: rgba(16, 185, 129, 0.1); }
.badge-error   { color: #DC2626; background: rgba(239, 68, 68, 0.1); }

@keyframes pulse-badge {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

.progress-pct {
  margin-left: auto;
  font-size: 11px;
  font-weight: 700;
  color: #6366F1;
  font-family: var(--mono);
}

.progress-track {
  height: 5px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366F1, #A855F7, #06B6D4);
  background-size: 200% 100%;
  border-radius: 10px;
  transition: width 0.4s ease;
  animation: shimmer 2.5s linear infinite;
}

.progress-fill.complete { background: linear-gradient(90deg, #10B981, #06B6D4); animation: none; }
.progress-fill.error    { background: #EF4444; animation: none; }

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.log-area {
  max-height: 150px;
  overflow-y: auto;
  font-family: var(--mono);
  font-size: 10px;
  line-height: 1.65;
  color: #475569;
  background: rgba(241, 245, 249, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.07);
  border-radius: 8px;
  padding: 8px 10px;
}

.log-line { white-space: pre-wrap; word-break: break-all; }
.log-error   { color: #EF4444; font-weight: 500; }
.log-success { color: #10B981; font-weight: 500; }
.log-ws      { color: #6366F1; opacity: 0.8; }
</style>
