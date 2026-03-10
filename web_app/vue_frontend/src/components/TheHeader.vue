<template>
  <header class="app-header">
    <div class="header-left">
      <!-- Triangulated mesh mark — 3 vertices like a point cloud face -->
      <div class="logo-mark" aria-hidden="true">
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
          <polygon points="13,1.5 24.5,22.5 1.5,22.5"
            fill="rgba(79,70,229,0.07)"
            stroke="url(#lgrad)"
            stroke-width="1.4"
            stroke-linejoin="round"
          />
          <!-- Interior wireframe subdivisions -->
          <line x1="13" y1="1.5" x2="13" y2="22.5" stroke="url(#lgrad)" stroke-width="0.8" opacity="0.35"/>
          <line x1="7.25" y1="12" x2="18.75" y2="12" stroke="url(#lgrad)" stroke-width="0.8" opacity="0.35"/>
          <!-- Vertex dots (point cloud nodes) -->
          <circle cx="13"   cy="1.5"  r="2" fill="#4F46E5"/>
          <circle cx="24.5" cy="22.5" r="2" fill="#7C3AED"/>
          <circle cx="1.5"  cy="22.5" r="2" fill="#0891B2"/>
          <defs>
            <linearGradient id="lgrad" x1="1.5" y1="22.5" x2="24.5" y2="1.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stop-color="#0891B2"/>
              <stop offset="100%" stop-color="#4F46E5"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <span class="brand">GeoUDF</span>
      <span class="brand-slash" aria-hidden="true">/</span>
      <span class="brand-sub">Surface Reconstruction</span>
      <div class="header-badge" title="Accepted at ICCV 2023">ICCV 2023</div>
    </div>

    <div class="header-right">
      <button
        class="sync-btn"
        :class="{ active: syncCamera }"
        @click="$emit('toggleSync')"
        :title="syncCamera ? '点击禁用视角同步' : '点击启用视角同步'"
        aria-label="切换视角同步"
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path d="M1.5 6.5a5 5 0 0 1 5-5 5 5 0 0 1 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M11.5 6.5a5 5 0 0 1-5 5 5 5 0 0 1-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <polyline points="10,9 11.5,6.5 13,9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="0,4 1.5,6.5 3,4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ syncCamera ? '同步视角' : '独立视角' }}
      </button>

      <div
        class="conn-status"
        :class="{ connected: isConnected }"
        :title="isConnected ? '后端服务已连接' : '无法连接到后端服务'"
      >
        <div class="conn-dot" aria-hidden="true"></div>
        <span>{{ isConnected ? '已连接' : '离线' }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  isConnected: { type: Boolean, default: false },
  syncCamera:  { type: Boolean, default: false }
})
defineEmits(['toggleSync'])
</script>

<style scoped>
.app-header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border-bottom: 1px solid rgba(79, 70, 229, 0.08);
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) inset;
}

/* ── Left ── */
.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-mark {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  filter: drop-shadow(0 2px 5px rgba(79, 70, 229, 0.25));
}

.brand {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--c-primary);
}

.brand-slash {
  font-size: 14px;
  color: rgba(79, 70, 229, 0.25);
  font-weight: 300;
  margin: 0 -2px;
}

.brand-sub {
  font-size: 12px;
  color: var(--c-muted);
  font-weight: 500;
  letter-spacing: 0.005em;
}

.header-badge {
  font-size: 9.5px;
  color: var(--c-primary);
  border: 1px solid rgba(79, 70, 229, 0.2);
  background: rgba(79, 70, 229, 0.05);
  padding: 2px 7px;
  border-radius: 20px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: default;
  font-family: var(--mono);
}

/* ── Right ── */
.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sync-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid rgba(79, 70, 229, 0.15);
  background: rgba(255, 255, 255, 0.6);
  color: var(--c-muted);
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.18s ease;
  white-space: nowrap;
}

.sync-btn:hover {
  background: rgba(79, 70, 229, 0.06);
  border-color: rgba(79, 70, 229, 0.3);
  color: var(--c-primary);
}

.sync-btn.active {
  background: var(--c-primary);
  border-color: transparent;
  color: white;
  box-shadow: 0 3px 10px rgba(79, 70, 229, 0.3);
}

.sync-btn.active:hover {
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
  transform: translateY(-1px);
}

/* Connection status */
.conn-status {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 11.5px;
  color: var(--c-faint);
  font-weight: 500;
  transition: all 0.25s ease;
}

.conn-status.connected {
  color: var(--c-success);
  border-color: rgba(5, 150, 105, 0.18);
  background: rgba(5, 150, 105, 0.05);
}

.conn-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
  opacity: 0.7;
}

.conn-status.connected .conn-dot {
  opacity: 1;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.25);
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.25); }
  50%       { box-shadow: 0 0 0 4px rgba(5, 150, 105, 0.1); }
}
</style>
