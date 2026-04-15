<template>
  <div class="metrics-panel">

    <!-- Header (always visible) -->
    <div class="metrics-header" @click="$emit('toggle')">
      <div class="mh-left">
        <div class="mh-icon">📈</div>
        <span class="mh-title">评估指标</span>
        <div v-if="hasMetrics" class="mh-badge">{{ metrics.length }} 条记录</div>
        <div v-else class="mh-badge mh-badge-empty">暂无数据</div>
      </div>

      <div class="mh-right">
        <!-- Summary pills (only when open and has data) -->
        <template v-if="isOpen && hasMetrics">
          <div v-for="kpi in summaryKpis" :key="kpi.key" class="mh-kpi-pill" :style="{ '--kc': kpi.color }">
            <span class="pill-label">{{ kpi.label }}</span>
            <span class="pill-value">{{ kpi.value }}</span>
          </div>
        </template>

        <div class="mh-chevron" :class="{ open: isOpen }">›</div>
      </div>
    </div>

    <!-- Body (collapsible) -->
    <div class="metrics-body" :class="{ open: isOpen }">
      <div class="metrics-inner">

        <!-- No data placeholder -->
        <div v-if="!hasMetrics" class="metrics-empty">
          <div class="empty-icon-m">📊</div>
          <div class="empty-msg">运行重建后系统将自动加载评估指标</div>
          <div class="empty-sub">指标来源: output/Full_Metric_Results.csv</div>
        </div>

        <template v-else>
          <!-- KPI cards row -->
          <div class="kpi-row">
            <div
              v-for="kpi in detailKpis"
              :key="kpi.key"
              class="kpi-card"
              :style="{ borderTopColor: kpi.color }"
            >
              <div class="kpi-label">{{ kpi.label }}</div>
              <div class="kpi-value" :style="{ color: kpi.color }">{{ kpi.value }}</div>
              <div class="kpi-trend" :style="{ color: kpi.trend > 0 ? '#10B981' : kpi.trend < 0 ? '#EF4444' : '#94A3B8' }">
                {{ kpi.note }}
              </div>
            </div>
          </div>

          <!-- Table + Chart layout -->
          <div class="metrics-content">
            <!-- Scrollable table -->
            <div class="table-wrap">
              <table class="metrics-table">
                <thead>
                  <tr>
                    <th>文件名</th>
                    <th v-for="col in numericColumns" :key="col" class="num-col">{{ formatColName(col) }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in metrics" :key="i" :class="{ 'tr-alt': i % 2 === 1 }">
                    <td class="file-col" :title="getFileName(row)">{{ getFileName(row) }}</td>
                    <td v-for="col in numericColumns" :key="col" class="num-col">
                      <span class="metric-val" :style="{ color: getMetricColor(col, row[col]) }">
                        {{ formatMetricValue(row[col]) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mini bar chart canvas -->
            <div class="chart-wrap" v-if="metrics.length > 0 && metrics.length <= 12">
              <canvas ref="chartCanvas" class="chart-canvas"></canvas>
            </div>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'

const props = defineProps({
  metrics: { type: Array, default: () => [] },
  isOpen:  { type: Boolean, default: false }
})

defineEmits(['toggle'])

const chartCanvas = ref(null)

// ─── Computed helpers ─────────────────────────────────────────────────────────
const hasMetrics = computed(() => props.metrics && props.metrics.length > 0)

// Detect numeric columns (excluding obvious name/path columns)
const NAME_KEYS = ['name', 'filename', 'file', 'path', 'model', 'scan', 'category']

const numericColumns = computed(() => {
  if (!hasMetrics.value) return []
  return Object.keys(props.metrics[0]).filter(k => {
    if (NAME_KEYS.some(n => k.toLowerCase().includes(n))) return false
    const v = props.metrics[0][k]
    return typeof v === 'number' || (!isNaN(parseFloat(v)) && isFinite(v))
  })
})

// Find the "name" column
function getFileName(row) {
  for (const k of NAME_KEYS) {
    const found = Object.keys(row).find(key => key.toLowerCase().includes(k))
    if (found && row[found]) return String(row[found]).split('/').pop().split('\\').pop()
  }
  return '—'
}

// KPI definitions (map common column names)
const KPI_MAP = [
  { keys: ['cd', 'chamfer'],           label: 'CD',             color: '#EF4444', note: '越小越好', higherBetter: false },
  { keys: ['nc', 'normal'],            label: 'NC',             color: '#10B981', note: '越大越好', higherBetter: true  },
  { keys: ['f_score', 'fscore', 'f1'], label: 'F-Score@0.01',  color: '#6366F1', note: '越大越好', higherBetter: true  },
  { keys: ['f2', 'fscore_02', 'f_02'], label: 'F-Score@0.02',  color: '#06B6D4', note: '越大越好', higherBetter: true  }
]

function findColumn(keys) {
  if (!hasMetrics.value) return null
  const cols = Object.keys(props.metrics[0])
  for (const k of keys) {
    const found = cols.find(c => c.toLowerCase().includes(k.toLowerCase()))
    if (found) return found
  }
  return null
}

function colAvg(col) {
  if (!col || !hasMetrics.value) return null
  const vals = props.metrics.map(r => parseFloat(r[col])).filter(v => !isNaN(v))
  if (!vals.length) return null
  return vals.reduce((a, b) => a + b, 0) / vals.length
}

const detailKpis = computed(() => {
  return KPI_MAP.map(def => {
    const col = findColumn(def.keys)
    const avg = colAvg(col)
    return {
      key:   def.label,
      label: def.label,
      color: def.color,
      note:  def.note,
      value: avg !== null ? formatMetricValue(avg) : '—',
      trend: avg !== null ? (def.higherBetter ? 1 : -1) : 0
    }
  })
})

const summaryKpis = computed(() => detailKpis.value.filter(k => k.value !== '—').slice(0, 3))

// ─── Formatting ───────────────────────────────────────────────────────────────
function formatMetricValue(v) {
  const n = parseFloat(v)
  if (isNaN(n)) return String(v)
  if (Math.abs(n) < 0.001) return n.toExponential(3)
  if (Math.abs(n) < 1) return n.toFixed(4)
  if (Math.abs(n) < 100) return n.toFixed(3)
  return n.toFixed(1)
}

function formatColName(col) {
  return col
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace('Fscore', 'F-Score')
    .replace('Cd ', 'CD ')
    .replace('Nc ', 'NC ')
}

// Color-code metric values (green = better for f-scores, red = worse for CD)
function getMetricColor(col, val) {
  const n = parseFloat(val)
  if (isNaN(n)) return '#94A3B8'
  const lower = col.toLowerCase()
  if (lower.includes('cd') || lower.includes('chamfer')) {
    return '#64748B' // neutral for CD (context-dependent)
  }
  return '#374151'
}

// ─── Bar chart drawing ────────────────────────────────────────────────────────
function drawChart() {
  if (!chartCanvas.value || !hasMetrics.value) return
  const canvas = chartCanvas.value
  const ctx    = canvas.getContext('2d')
  const W = canvas.clientWidth  || 200
  const H = canvas.clientHeight || 120
  canvas.width  = W * devicePixelRatio
  canvas.height = H * devicePixelRatio
  ctx.scale(devicePixelRatio, devicePixelRatio)

  ctx.clearRect(0, 0, W, H)

  // Draw only the first 2 numeric columns as bars
  const cols = numericColumns.value.slice(0, 2)
  if (!cols.length) return

  const COLORS = ['rgba(99,102,241,0.7)', 'rgba(6,182,212,0.7)']
  const n    = props.metrics.length
  const pad  = 12
  const groupW = (W - pad * 2) / n
  const barW   = Math.min(groupW / (cols.length + 1), 20)

  // Find max per column for scaling
  const maxVals = cols.map(col => {
    const vals = props.metrics.map(r => Math.abs(parseFloat(r[col]))).filter(v => !isNaN(v))
    return Math.max(...vals, 1e-10)
  })

  const chartH = H - 28 // reserve bottom for labels

  // Draw grid lines
  ctx.strokeStyle = 'rgba(99,102,241,0.08)'
  ctx.lineWidth   = 1
  for (let i = 0; i <= 4; i++) {
    const y = (chartH / 4) * i
    ctx.beginPath()
    ctx.moveTo(pad, y + 4)
    ctx.lineTo(W - pad, y + 4)
    ctx.stroke()
  }

  // Draw bars
  props.metrics.forEach((row, ri) => {
    const gx = pad + ri * groupW + groupW / 2 - (cols.length * (barW + 2)) / 2

    cols.forEach((col, ci) => {
      const val = Math.abs(parseFloat(row[col]))
      if (isNaN(val)) return

      const barH = Math.max((val / maxVals[ci]) * (chartH - 8), 2)
      const x = gx + ci * (barW + 2)
      const y = chartH - barH + 4

      // Gradient bar
      const grad = ctx.createLinearGradient(x, y, x, chartH + 4)
      grad.addColorStop(0, COLORS[ci].replace('0.7', '0.9'))
      grad.addColorStop(1, COLORS[ci].replace('0.7', '0.3'))

      ctx.fillStyle = grad
      ctx.beginPath()
      // Rounded top corners
      const r = Math.min(3, barW / 2)
      ctx.roundRect(x, y, barW, barH, [r, r, 0, 0])
      ctx.fill()
    })

    // X-axis label
    const name = getFileName(row)
    const short = name.length > 8 ? name.slice(0, 7) + '…' : name
    ctx.fillStyle = '#94A3B8'
    ctx.font = `${Math.max(8, Math.min(10, groupW * 0.4))}px Inter, sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(short, pad + ri * groupW + groupW / 2, H - 6)
  })

  // Legend
  cols.forEach((col, i) => {
    ctx.fillStyle = COLORS[i]
    ctx.fillRect(W - 90 + i * 46, 2, 8, 8)
    ctx.fillStyle = '#94A3B8'
    ctx.font = '9px Inter, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText(formatColName(col).slice(0, 6), W - 80 + i * 46, 10)
  })
}

// Re-draw when metrics change or panel opens
watch([() => props.metrics, () => props.isOpen], async () => {
  if (props.isOpen && hasMetrics.value) {
    await nextTick()
    drawChart()
  }
}, { deep: true })

onMounted(() => {
  if (props.isOpen && hasMetrics.value) drawChart()
})
</script>

<style scoped>
/* ── Panel wrapper ── */
.metrics-panel {
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(79, 70, 229, 0.08);
  border-radius: var(--radius);
  margin-top: 8px;
  overflow: hidden;
  font-family: var(--font);
}

/* ── Header ── */
.metrics-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid rgba(99, 102, 241, 0.07);
  transition: background 0.15s;
  min-height: 42px;
}

.metrics-header:hover {
  background: rgba(99, 102, 241, 0.04);
}

.mh-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mh-icon {
  font-size: 14px;
  line-height: 1;
}

.mh-title {
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-primary);
}

.mh-badge {
  font-size: 10px;
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
}

.mh-badge-empty {
  background: rgba(148, 163, 184, 0.12);
  color: #94A3B8;
}

.mh-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Summary pills */
.mh-kpi-pill {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--kc) 10%, white);
  border: 1px solid color-mix(in srgb, var(--kc) 22%, transparent);
}

.pill-label {
  font-size: 9px;
  font-weight: 600;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.pill-value {
  font-size: 11px;
  font-weight: 700;
  color: #374151;
}

.mh-chevron {
  font-size: 18px;
  color: #94A3B8;
  transition: transform 0.22s ease;
  line-height: 1;
}

.mh-chevron.open {
  transform: rotate(90deg);
}

/* ── Body (collapsible) ── */
.metrics-body {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

.metrics-body.open {
  max-height: 260px;
}

.metrics-inner {
  padding: 12px 16px 14px;
  overflow: hidden;
}

/* ── Empty ── */
.metrics-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 20px 0;
  color: #CBD5E1;
}

.empty-icon-m {
  font-size: 28px;
  opacity: 0.5;
}

.empty-msg {
  font-size: 12px;
  font-weight: 500;
  color: #94A3B8;
  text-align: center;
}

.empty-sub {
  font-size: 10px;
  color: #CBD5E1;
  font-family: monospace;
}

/* ── KPI cards ── */
.kpi-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.kpi-card {
  flex: 1;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-top: 3px solid currentColor;
  min-width: 0;
}

.kpi-label {
  font-size: 9px;
  font-weight: 700;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 3px;
}

.kpi-value {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kpi-trend {
  font-size: 9px;
  margin-top: 3px;
  font-weight: 500;
}

/* ── Table + Chart layout ── */
.metrics-content {
  display: flex;
  gap: 12px;
  max-height: 120px;
  min-height: 0;
}

/* Table */
.table-wrap {
  flex: 1;
  overflow: auto;
  border-radius: 8px;
  border: 1px solid rgba(99, 102, 241, 0.08);
}

.metrics-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 10px;
}

.metrics-table thead {
  position: sticky;
  top: 0;
  background: rgba(241, 245, 249, 0.95);
  z-index: 1;
}

.metrics-table th {
  padding: 5px 8px;
  text-align: left;
  font-weight: 600;
  color: #6366F1;
  letter-spacing: 0.04em;
  font-size: 9px;
  text-transform: uppercase;
  white-space: nowrap;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.metrics-table td {
  padding: 4px 8px;
  color: #475569;
  border-bottom: 1px solid rgba(99, 102, 241, 0.04);
  white-space: nowrap;
}

.metrics-table .tr-alt td {
  background: rgba(99, 102, 241, 0.025);
}

.file-col {
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: #374151 !important;
}

.num-col {
  text-align: right;
}

.metric-val {
  font-family: var(--mono);
  font-size: 10px;
}

/* Chart */
.chart-wrap {
  width: 180px;
  flex-shrink: 0;
  background: rgba(248, 250, 255, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(99, 102, 241, 0.08);
  overflow: hidden;
}

.chart-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>