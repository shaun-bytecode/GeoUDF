<template>
  <div class="app-root">
    <TheHeader
      :isConnected="isConnected"
      :syncCamera="syncCamera"
      @toggleSync="syncCamera = !syncCamera"
    />

    <div class="main-layout">
      <TheSidebar
        :files="files"
        :taskStatus="taskStatus"
        @fileSelect="onFileSelect"
        @reconstruct="startReconstruction"
        @loadSample="loadSample"
        @refreshFiles="fetchFiles"
      />

      <div class="content-area">
        <div class="viewers-row">
          <ThreeViewer
            ref="leftViewer"
            title="输入点云"
            accent="#4F46E5"
            :url="leftFileUrl"
            :hideSolid="true"
            @cameraChange="onLeftCameraChange"
          />

          <div class="sync-bridge" :class="{ active: syncCamera }">
            <div class="sync-icon" :title="syncCamera ? '视角同步中' : '独立视角'">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6 C1 3.24 3.24 1 6 1 s5 2.24 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11 6 C11 8.76 8.76 11 6 11 s-5-2.24-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <polyline points="9,8 11,6 13,8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(-2,0)"/>
                <polyline points="-1,4 1,6 3,4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,0)"/>
              </svg>
            </div>
          </div>

          <ThreeViewer
            ref="rightViewer"
            title="重建网格"
            accent="#0891B2"
            :url="rightFileUrl"
            @cameraChange="onRightCameraChange"
          />
        </div>

        <MetricsPanel
          :metrics="metrics"
          :isOpen="metricsOpen"
          @toggle="metricsOpen = !metricsOpen"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
import ThreeViewer from './components/ThreeViewer.vue'
import MetricsPanel from './components/MetricsPanel.vue'

const leftFileUrl  = ref(null)
const rightFileUrl = ref(null)
const syncCamera   = ref(false)
const isConnected  = ref(false)
const metricsOpen  = ref(false)

const files = ref({ input: [], test_data: [] })
const taskStatus = ref({ id: null, status: null, progress: 0, log: [], outputFile: null })
const metrics = ref([])

const leftViewer  = ref(null)
const rightViewer = ref(null)

let syncingLeft  = false
let syncingRight = false
let activeWs = null

onMounted(() => {
  fetchFiles()
  fetchMetrics()
  checkConnection()
  const pingInterval = setInterval(checkConnection, 10000)
  onUnmounted(() => {
    clearInterval(pingInterval)
    activeWs?.close()
  })
})

async function checkConnection() {
  try {
    const resp = await fetch('/api/files', { signal: AbortSignal.timeout(3000) })
    isConnected.value = resp.ok
  } catch {
    isConnected.value = false
  }
}

async function fetchFiles() {
  try {
    const resp = await fetch('/api/files')
    if (resp.ok) {
      const data = await resp.json()
      files.value = { input: data.input || [], test_data: data.test_data || [] }
      isConnected.value = true
    }
  } catch (e) {
    console.error('[App] fetchFiles error:', e)
    isConnected.value = false
  }
}

async function fetchMetrics() {
  try {
    const resp = await fetch('/api/metrics')
    if (resp.ok) {
      const data = await resp.json()
      if (data.available && data.data?.length) {
        metrics.value = data.data
        metricsOpen.value = true
      }
    }
  } catch (e) {
    console.error('[App] fetchMetrics error:', e)
  }
}

function onFileSelect(file) {
  leftFileUrl.value = `/files/${file.path}`
}

function loadSample() {
  const allFiles = [...(files.value.input || []), ...(files.value.test_data || [])]
  const pcFile = allFiles.find(f =>
    !f.name.toLowerCase().includes('mesh') &&
    (f.name.toLowerCase().includes('shapenet') || f.name.toLowerCase().includes('scene') || f.name.endsWith('.ply'))
  ) || allFiles.find(f => !f.name.toLowerCase().includes('mesh'))
  const meshFile = allFiles.find(f =>
    f.name.toLowerCase().includes('mesh') || f.name.toLowerCase().includes('_rec_')
  )
  if (pcFile) leftFileUrl.value = `/files/${pcFile.path}`
  if (meshFile) rightFileUrl.value = `/files/${meshFile.path}`
  if (!pcFile && !meshFile && allFiles.length > 0) leftFileUrl.value = `/files/${allFiles[0].path}`
}

async function startReconstruction({ inputFile, resolution, dense }) {
  taskStatus.value = { id: null, status: 'queued', progress: 0, log: ['[任务] 正在提交重建请求...'], outputFile: null }
  try {
    const resp = await fetch('/api/reconstruct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input_file: inputFile, resolution, dense })
    })
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({ detail: '请求失败' }))
      taskStatus.value.status = 'error'
      taskStatus.value.log.push(`[错误] ${err.detail || '服务器错误'}`)
      return
    }
    const { task_id } = await resp.json()
    taskStatus.value.id = task_id
    taskStatus.value.log.push(`[任务] task_id: ${task_id}`)
    activeWs?.close()
    const wsProto = location.protocol === 'https:' ? 'wss:' : 'ws:'
    const ws = new WebSocket(`${wsProto}//${location.host}/ws/${task_id}`)
    activeWs = ws
    ws.onopen = () => { taskStatus.value.log.push('[WS] 已连接重建进度流') }
    ws.onmessage = (e) => {
      try {
        const msg = JSON.parse(e.data)
        if (msg.status) taskStatus.value.status = msg.status
        if (typeof msg.progress === 'number') taskStatus.value.progress = msg.progress
        if (msg.new_lines?.length) taskStatus.value.log.push(...msg.new_lines)
        if (msg.error) taskStatus.value.log.push(`[错误] ${msg.error}`)
        if (msg.status === 'done' && msg.output_file) {
          taskStatus.value.outputFile = msg.output_file
          rightFileUrl.value = `/files/${msg.output_file}`
          fetchFiles()
          fetchMetrics()
        }
      } catch (err) { console.error('[App] WS parse error:', err) }
    }
    ws.onerror = () => { taskStatus.value.log.push('[WS] 连接错误') }
    ws.onclose = () => { taskStatus.value.log.push('[WS] 连接已关闭') }
  } catch (e) {
    taskStatus.value.status = 'error'
    taskStatus.value.log.push(`[错误] ${e.message}`)
  }
}

function onLeftCameraChange(state) {
  if (!syncCamera.value || syncingRight) return
  syncingLeft = true
  rightViewer.value?.setCameraState(state)
  syncingLeft = false
}

function onRightCameraChange(state) {
  if (!syncCamera.value || syncingLeft) return
  syncingRight = true
  leftViewer.value?.setCameraState(state)
  syncingRight = false
}
</script>

<style>
/* ── Global design tokens ── */
:root {
  --c-bg:        #EEF0FF;
  --c-surface:   rgba(255, 255, 255, 0.88);
  --c-border:    rgba(79, 70, 229, 0.09);
  --c-primary:   #4F46E5;
  --c-secondary: #0891B2;
  --c-purple:    #7C3AED;
  --c-text:      #1E1B4B;
  --c-muted:     #64748B;
  --c-faint:     #94A3B8;
  --c-success:   #059669;
  --c-warn:      #D97706;
  --c-error:     #DC2626;
  --font:        'Plus Jakarta Sans', system-ui, sans-serif;
  --mono:        'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
  --radius:      14px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font);
  color: var(--c-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
.app-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(155deg, #EEF2FF 0%, #EFF9FF 55%, #F5F0FF 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Dot-grid overlay — the "graph paper" signature */
.app-root::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, rgba(79, 70, 229, 0.11) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 0;
}

/* ── Layout ── */
.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
  z-index: 1;
  min-height: 0;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 8px 10px 10px 0;
  min-height: 0;
  min-width: 0;
}

.viewers-row {
  flex: 1;
  display: flex;
  overflow: hidden;
  min-height: 0;
  position: relative;
  gap: 0;
}

/* ── Sync bridge ── */
.sync-bridge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  flex-shrink: 0;
  z-index: 10;
}

.sync-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(79, 70, 229, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-faint);
  transition: all 0.25s ease;
  cursor: default;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.sync-bridge.active .sync-icon {
  background: var(--c-primary);
  color: white;
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}
</style>
