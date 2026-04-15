<template>
  <div ref="wrapperRef" class="viewer-wrapper">

    <!-- Accent top bar (colored per viewer) -->
    <div class="viewer-accent-bar"></div>

    <!-- Label bar -->
    <div class="viewer-label">
      <div class="viewer-dot"></div>
      <span class="viewer-title">{{ title }}</span>
      <div v-if="loadedFileName" class="viewer-filename" :title="loadedFileName">
        {{ loadedFileName }}
      </div>
      <div class="viewer-spacer"></div>
      <div v-if="stats.vertices" class="viewer-stats">
        <span class="stats-val">{{ formatNum(stats.vertices) }}</span>
        <span class="stats-label">verts</span>
        <template v-if="stats.faces">
          <span class="stats-sep">·</span>
          <span class="stats-val">{{ formatNum(stats.faces) }}</span>
          <span class="stats-label">faces</span>
        </template>
      </div>
      <button v-if="loadedFileName" class="label-btn" @click="screenshot" title="截图">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <rect x="1" y="2.5" width="11" height="8.5" rx="1.5" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="6.5" cy="6.75" r="2" stroke="currentColor" stroke-width="1.3"/>
          <path d="M4.5 2.5 L5 1 h3 l.5 1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Three.js Canvas -->
    <canvas ref="canvasRef" class="viewer-canvas"></canvas>

    <!-- Empty state -->
    <div v-if="!url" class="viewer-empty">
      <div class="empty-graphic">
        <!-- Animated dot cluster -->
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="14" r="2.5" fill="currentColor" opacity="0.4"/>
          <circle cx="14" cy="30" r="2.5" fill="currentColor" opacity="0.3"/>
          <circle cx="38" cy="30" r="2.5" fill="currentColor" opacity="0.3"/>
          <circle cx="20" cy="42" r="2.5" fill="currentColor" opacity="0.2"/>
          <circle cx="32" cy="42" r="2.5" fill="currentColor" opacity="0.2"/>
          <circle cx="26" cy="26" r="2"   fill="currentColor" opacity="0.5"/>
          <!-- Wireframe lines -->
          <line x1="26" y1="14" x2="14" y2="30" stroke="currentColor" stroke-width="0.8" opacity="0.2"/>
          <line x1="26" y1="14" x2="38" y2="30" stroke="currentColor" stroke-width="0.8" opacity="0.2"/>
          <line x1="14" y1="30" x2="38" y2="30" stroke="currentColor" stroke-width="0.8" opacity="0.2"/>
          <line x1="14" y1="30" x2="20" y2="42" stroke="currentColor" stroke-width="0.8" opacity="0.15"/>
          <line x1="38" y1="30" x2="32" y2="42" stroke="currentColor" stroke-width="0.8" opacity="0.15"/>
        </svg>
      </div>
      <div class="empty-title">{{ title }}</div>
      <div class="empty-hint">从左侧选择文件载入</div>
    </div>

    <!-- Loading overlay -->
    <Transition name="fade-overlay">
      <div v-if="isLoading" class="viewer-overlay">
        <div class="loading-ring"></div>
        <div class="overlay-text">载入中</div>
      </div>
    </Transition>

    <!-- Error overlay -->
    <Transition name="fade-overlay">
      <div v-if="loadError" class="viewer-overlay viewer-overlay--error">
        <div class="error-glyph">!</div>
        <div class="overlay-text">{{ loadError }}</div>
        <button class="overlay-dismiss" @click="loadError = ''">关闭</button>
      </div>
    </Transition>

    <!-- Bottom toolbar -->
    <div v-if="loadedFileName" class="viewer-toolbar">
      <div class="tb-group">
        <button v-if="geometryType === 'mesh' && !hideSolid" :class="['tb-btn', { active: renderMode === 'solid' }]"    @click="setRenderMode('solid')">实体</button>
        <button                                               :class="['tb-btn', { active: renderMode === 'wireframe' }]" @click="setRenderMode('wireframe')">线框</button>
        <button                                               :class="['tb-btn', { active: renderMode === 'points' }]"    @click="setRenderMode('points')">点云</button>
      </div>

      <div class="tb-sep"></div>

      <div v-if="renderMode === 'points' || geometryType === 'pointcloud'" class="tb-group">
        <span class="tb-label">大小</span>
        <input type="range" min="1" max="20" :value="pointSizeSlider" @input="onPointSizeChange" class="tb-slider"/>
      </div>

      <div v-if="geometryType === 'mesh' && renderMode !== 'points'" class="tb-group">
        <span class="tb-label">色</span>
        <input type="color" :value="meshColor" @input="onMeshColorChange" class="tb-color"/>
      </div>

      <div class="tb-group" style="margin-left:auto">
        <button class="tb-btn" @click="resetCamera" title="重置视角">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v2M6 9v2M1 6h2M9 6h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="6" cy="6" r="2.5" stroke="currentColor" stroke-width="1.3"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PLYLoader }     from 'three/examples/jsm/loaders/PLYLoader.js'
import { OBJLoader }     from 'three/examples/jsm/loaders/OBJLoader.js'

const props = defineProps({
  title:    { type: String,  default: '3D 视图' },
  accent:   { type: String,  default: '#4F46E5' },
  url:      { type: String,  default: null },
  hideSolid:{ type: Boolean, default: false }
})

const emit = defineEmits(['cameraChange', 'loaded', 'error'])

const wrapperRef = ref(null)
const canvasRef  = ref(null)

let renderer  = null
let scene     = null
let camera    = null
let controls  = null
let animId    = null
let resizeObs = null

let currentObject = null
let pointsMesh    = null
let solidMesh     = null
let wireMesh      = null

const isLoading      = ref(false)
const loadError      = ref('')
const loadedFileName = ref('')
const geometryType   = ref('pointcloud')
const renderMode     = ref('auto')
const pointSizeSlider = ref(8)
const meshColor      = ref('#C8D0F8')
const stats          = ref({ vertices: 0, faces: 0 })

let cachedGeometry = null
let lastCameraState = null
let isSyncApplying  = false

const accentAlpha  = computed(() => `${props.accent}22`)
const accentBorder = computed(() => `${props.accent}30`)

defineExpose({ getCameraState, setCameraState })

onMounted(() => {
  initThree()
  if (props.url) loadFile(props.url)
})

onUnmounted(() => { cleanup() })

watch(() => props.url, (newUrl) => {
  if (newUrl) {
    loadFile(newUrl)
  } else {
    clearScene()
    loadedFileName.value = ''
    stats.value = { vertices: 0, faces: 0 }
  }
})

function initThree() {
  const canvas  = canvasRef.value
  const wrapper = wrapperRef.value

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0xFBFCFE, 1)
  renderer.shadowMap.enabled = false
  renderer.outputColorSpace = THREE.SRGBColorSpace

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFBFCFE)

  const w = wrapper.clientWidth  || 800
  const h = wrapper.clientHeight || 600
  camera = new THREE.PerspectiveCamera(45, w / Math.max(h, 1), 0.001, 2000)
  camera.position.set(0, 1.5, 4)
  renderer.setSize(w, h, false)

  const ambient  = new THREE.AmbientLight(0xffffff, 0.9)
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
  dirLight.position.set(5, 8, 5)
  const fillLight = new THREE.DirectionalLight(0x8899ff, 0.4)
  fillLight.position.set(-3, -2, -4)
  const rimLight = new THREE.DirectionalLight(0xffeedd, 0.25)
  rimLight.position.set(0, -5, 2)
  scene.add(ambient, dirLight, fillLight, rimLight)

  const grid = new THREE.GridHelper(4, 16, 0xDDE1EF, 0xEEF0F8)
  grid.material.opacity = 0.45
  grid.material.transparent = true
  scene.add(grid)

  controls = new OrbitControls(camera, canvas)
  controls.enableDamping    = true
  controls.dampingFactor    = 0.06
  controls.enablePan        = true
  controls.minDistance      = 0.01
  controls.maxDistance      = 500
  controls.screenSpacePanning = true
  controls.addEventListener('change', onControlsChange)

  function animate() {
    animId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  resizeObs = new ResizeObserver(() => {
    if (!renderer || !camera || !wrapperRef.value) return
    const w = wrapperRef.value.clientWidth
    const labelEl   = wrapperRef.value.querySelector('.viewer-label')
    const toolbarEl = wrapperRef.value.querySelector('.viewer-toolbar')
    const accentEl  = wrapperRef.value.querySelector('.viewer-accent-bar')
    const labelH   = labelEl?.clientHeight   || 36
    const toolbarH = toolbarEl?.clientHeight || 36
    const accentH  = accentEl?.clientHeight  || 3
    const h = Math.max(wrapperRef.value.clientHeight - labelH - toolbarH - accentH, 100)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  })
  resizeObs.observe(wrapperRef.value)
}

function onControlsChange() {
  if (isSyncApplying) return
  const state = getCameraState()
  lastCameraState = state
  emit('cameraChange', state)
}

function getCameraState() {
  if (!camera || !controls) return null
  return { position: camera.position.clone(), target: controls.target.clone(), zoom: camera.zoom }
}

function setCameraState(state) {
  if (!camera || !controls || !state) return
  isSyncApplying = true
  camera.position.copy(state.position)
  controls.target.copy(state.target)
  camera.zoom = state.zoom
  camera.updateProjectionMatrix()
  controls.update()
  isSyncApplying = false
}

function resetCamera() {
  if (!camera || !controls || !currentObject) return
  fitCameraToObject(currentObject)
}

function clearScene() {
  if (currentObject) { scene.remove(currentObject); currentObject = null }
  if (solidMesh)  { solidMesh.geometry?.dispose(); solidMesh.material?.dispose(); solidMesh = null }
  if (pointsMesh) { pointsMesh.geometry?.dispose(); pointsMesh.material?.dispose(); pointsMesh = null }
  if (wireMesh)   { wireMesh.geometry?.dispose(); wireMesh.material?.dispose(); wireMesh = null }
  cachedGeometry = null
}

async function loadFile(url) {
  if (!url) return
  clearScene()
  isLoading.value  = true
  loadError.value  = ''
  loadedFileName.value = decodeURIComponent(url.split('/').pop())
  stats.value = { vertices: 0, faces: 0 }
  const ext = url.split('?')[0].split('.').pop().toLowerCase()
  try {
    if (ext === 'ply')       await loadPLY(url)
    else if (ext === 'obj')  await loadOBJ(url)
    else                     throw new Error(`不支持的格式: .${ext}`)
    emit('loaded')
  } catch (e) {
    console.error('[ThreeViewer] Load error:', e)
    loadError.value = `加载失败: ${e.message}`
    emit('error', e)
  } finally {
    isLoading.value = false
  }
}

function loadPLY(url) {
  return new Promise((resolve, reject) => {
    new PLYLoader().load(url, (geometry) => {
      try {
        geometry.computeVertexNormals()
        cachedGeometry = geometry
        const isMesh = geometry.index !== null
        stats.value.vertices = geometry.attributes.position?.count || 0
        stats.value.faces    = isMesh ? (geometry.index ? geometry.index.count / 3 : 0) : 0
        if (isMesh) {
          geometryType.value = 'mesh'
          buildMeshObjects(geometry)
          renderMode.value = props.hideSolid ? 'wireframe' : 'solid'
          applyRenderMode(renderMode.value)
        } else {
          geometryType.value = 'pointcloud'
          buildPointsObject(geometry)
          renderMode.value = 'points'
        }
        resolve()
      } catch (err) { reject(err) }
    }, undefined, (err) => reject(err instanceof Error ? err : new Error(String(err))))
  })
}

function loadOBJ(url) {
  return new Promise((resolve, reject) => {
    new OBJLoader().load(url, (obj) => {
      try {
        geometryType.value = 'mesh'
        renderMode.value   = props.hideSolid ? 'wireframe' : 'solid'
        let totalVerts = 0, totalFaces = 0
        obj.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({ color: new THREE.Color(meshColor.value), roughness: 0.7, metalness: 0.1 })
            child.geometry.computeVertexNormals()
            totalVerts += child.geometry.attributes.position?.count || 0
            totalFaces += child.geometry.index ? child.geometry.index.count / 3 : child.geometry.attributes.position?.count / 3 || 0
          }
        })
        stats.value = { vertices: Math.round(totalVerts), faces: Math.round(totalFaces) }
        currentObject = obj
        scene.add(obj)
        fitCameraToObject(obj)
        if (props.hideSolid) {
          obj.traverse((child) => {
            if (child.isMesh) {
              child.material = new THREE.MeshBasicMaterial({ color: 0x4F46E5, wireframe: true, opacity: 0.3, transparent: true })
            }
          })
        }
        resolve()
      } catch (err) { reject(err) }
    }, undefined, (err) => reject(err instanceof Error ? err : new Error(String(err))))
  })
}

function buildMeshObjects(geometry) {
  const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(meshColor.value), roughness: 0.72, metalness: 0.08, side: THREE.DoubleSide })
  solidMesh = new THREE.Mesh(geometry, mat)
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x4F46E5, wireframe: true, opacity: 0.22, transparent: true })
  wireMesh = new THREE.Mesh(geometry, wireMat)
  const ptMat = new THREE.PointsMaterial({ size: pointSize(), vertexColors: geometry.attributes.color !== undefined, color: geometry.attributes.color ? undefined : new THREE.Color(props.accent), sizeAttenuation: true })
  pointsMesh = new THREE.Points(geometry, ptMat)
  const group = new THREE.Group()
  group.add(solidMesh)
  currentObject = group
  scene.add(group)
  fitCameraToObject(group)
  applyRenderMode(renderMode.value)
}

function buildPointsObject(geometry) {
  const hasColor = geometry.attributes.color !== undefined
  const mat = new THREE.PointsMaterial({ size: pointSize(), vertexColors: hasColor, color: hasColor ? undefined : new THREE.Color(props.accent), sizeAttenuation: true, transparent: true, opacity: 0.95 })
  pointsMesh = new THREE.Points(geometry, mat)
  const meshMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(meshColor.value), roughness: 0.7, metalness: 0.1, side: THREE.DoubleSide })
  solidMesh = new THREE.Mesh(geometry, meshMat)
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x4F46E5, wireframe: true, opacity: 0.28, transparent: true })
  wireMesh = new THREE.Mesh(geometry, wireMat)
  const group = new THREE.Group()
  group.add(pointsMesh)
  currentObject = group
  scene.add(group)
  fitCameraToObject(group)
  applyRenderMode('points')
}

function fitCameraToObject(object) {
  const box    = new THREE.Box3().setFromObject(object)
  const center = box.getCenter(new THREE.Vector3())
  const size   = box.getSize(new THREE.Vector3())
  const maxDim = Math.max(size.x, size.y, size.z) || 1
  const distance = maxDim * 2.2
  camera.position.set(center.x + maxDim * 0.4, center.y + maxDim * 0.6, center.z + distance)
  controls.target.copy(center)
  camera.near = maxDim * 0.001
  camera.far  = maxDim * 100
  camera.updateProjectionMatrix()
  controls.update()
}

function applyRenderMode(mode) {
  if (!currentObject) return
  renderMode.value = mode
  currentObject.remove(solidMesh)
  currentObject.remove(wireMesh)
  currentObject.remove(pointsMesh)
  switch (mode) {
    case 'solid':     if (solidMesh)  currentObject.add(solidMesh);  break
    case 'wireframe': if (wireMesh)   currentObject.add(wireMesh);   break
    case 'points':    if (pointsMesh) currentObject.add(pointsMesh); break
  }
}

function setRenderMode(mode) { applyRenderMode(mode) }

function pointSize() {
  const s = pointSizeSlider.value
  const count = stats.value.vertices || 1000
  const baseSize = count > 100000 ? 0.003 : count > 10000 ? 0.008 : 0.015
  return baseSize * (s / 8)
}

function onPointSizeChange(e) {
  pointSizeSlider.value = Number(e.target.value)
  if (pointsMesh?.material) { pointsMesh.material.size = pointSize(); pointsMesh.material.needsUpdate = true }
}

function onMeshColorChange(e) {
  meshColor.value = e.target.value
  if (solidMesh?.material) { solidMesh.material.color.set(meshColor.value); solidMesh.material.needsUpdate = true }
}

function screenshot() {
  if (!renderer) return
  renderer.render(scene, camera)
  const a = document.createElement('a')
  a.href = renderer.domElement.toDataURL('image/png')
  a.download = `geoudf_${props.title}_${Date.now()}.png`
  a.click()
}

function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000)    return (n / 1000).toFixed(1) + 'K'
  return String(n)
}

function cleanup() {
  cancelAnimationFrame(animId)
  resizeObs?.disconnect()
  controls?.removeEventListener('change', onControlsChange)
  controls?.dispose()
  clearScene()
  renderer?.dispose()
  renderer = null; scene = null; camera = null; controls = null
}
</script>

<style scoped>
.viewer-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  background: rgba(251, 252, 254, 0.94);
  border: 1px solid v-bind(accentBorder);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  transition: border-color 0.25s, box-shadow 0.25s;
  min-height: 0;
  min-width: 0;
}

.viewer-wrapper:hover {
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.07), 0 0 20px v-bind(accentAlpha), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
}

/* ── Accent bar — the identity stripe ── */
.viewer-accent-bar {
  height: 3px;
  background: v-bind(accent);
  flex-shrink: 0;
  opacity: 0.85;
}

/* ── Label bar ── */
.viewer-label {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 12px;
  height: 36px;
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
}

.viewer-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: v-bind(accent);
  flex-shrink: 0;
  box-shadow: 0 0 6px v-bind(accent);
  opacity: 0.85;
}

.viewer-title {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--c-text);
  letter-spacing: 0.01em;
  flex-shrink: 0;
}

.viewer-filename {
  font-size: 10.5px;
  color: var(--c-faint);
  background: rgba(0, 0, 0, 0.035);
  padding: 2px 7px;
  border-radius: 5px;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--mono);
}

.viewer-spacer { flex: 1; }

/* Stats inline in label bar */
.viewer-stats {
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: var(--mono);
  font-size: 10px;
}

.stats-val { color: v-bind(accent); font-weight: 500; }
.stats-label { color: var(--c-faint); }
.stats-sep   { color: var(--c-faint); margin: 0 1px; }

.label-btn {
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 4px 6px;
  cursor: pointer;
  color: var(--c-faint);
  line-height: 0;
  transition: all 0.15s;
}

.label-btn:hover {
  background: rgba(0, 0, 0, 0.04);
  color: var(--c-muted);
  border-color: rgba(0, 0, 0, 0.1);
}

/* ── Canvas ── */
.viewer-canvas {
  width: 100%;
  flex: 1;
  display: block;
  min-height: 0;
  min-width: 0;
}

/* ── Empty state ── */
.viewer-empty {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  pointer-events: none;
  padding-top: 39px;
}

.empty-graphic { color: v-bind(accent); opacity: 0.3; }
.empty-title   { font-size: 13px; font-weight: 600; color: var(--c-faint); letter-spacing: 0.01em; }
.empty-hint    { font-size: 11px; color: #CBD5E1; }

/* ── Overlays (loading / error) ── */
.viewer-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(251, 252, 254, 0.88);
  backdrop-filter: blur(6px);
  z-index: 20;
  padding-top: 39px;
}

.viewer-overlay--error { background: rgba(251, 252, 254, 0.92); }

.loading-ring {
  width: 30px;
  height: 30px;
  border: 2.5px solid rgba(79, 70, 229, 0.12);
  border-top-color: v-bind(accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.error-glyph {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.08);
  border: 1.5px solid rgba(220, 38, 38, 0.2);
  color: var(--c-error);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
}

.overlay-text {
  font-size: 12px;
  font-weight: 500;
  color: v-bind(accent);
  text-align: center;
  max-width: 200px;
}

.viewer-overlay--error .overlay-text { color: var(--c-muted); }

.overlay-dismiss {
  padding: 4px 14px;
  border-radius: 7px;
  border: 1px solid rgba(220, 38, 38, 0.2);
  background: transparent;
  color: var(--c-error);
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: background 0.15s;
}

.overlay-dismiss:hover { background: rgba(220, 38, 38, 0.06); }

@keyframes spin { to { transform: rotate(360deg); } }

/* ── Toolbar ── */
.viewer-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  height: 34px;
  background: rgba(255, 255, 255, 0.65);
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
}

.tb-group {
  display: flex;
  align-items: center;
  gap: 2px;
}

.tb-sep {
  width: 1px;
  height: 14px;
  background: rgba(0, 0, 0, 0.07);
  flex-shrink: 0;
}

.tb-btn {
  padding: 3px 9px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 11px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  background: transparent;
  color: var(--c-muted);
  transition: all 0.12s;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
}

.tb-btn:hover { background: rgba(0, 0, 0, 0.04); color: var(--c-text); }

.tb-btn.active {
  background: v-bind(accent);
  color: white;
  border-color: transparent;
}

.tb-label {
  font-size: 10px;
  color: var(--c-faint);
  font-weight: 500;
  margin-right: 3px;
}

.tb-slider {
  width: 60px;
  accent-color: v-bind(accent);
  cursor: pointer;
}

.tb-color {
  width: 22px;
  height: 22px;
  border: 1.5px solid rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  background: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

/* ── Overlay transitions ── */
.fade-overlay-enter-active,
.fade-overlay-leave-active  { transition: opacity 0.2s ease; }
.fade-overlay-enter-from,
.fade-overlay-leave-to      { opacity: 0; }
</style>
