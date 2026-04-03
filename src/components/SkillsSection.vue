<template>
  <section class="skills" ref="sectionRef">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <p class="section-label">Skills</p>
        <h2 class="section-title">
          Technical <span class="gradient-text">toolbox</span>
        </h2>
        <p class="section-subtitle">
          Technologies and tools I use daily to build high-quality products.
        </p>
      </div>
    </div>

    <!-- Full-width marquee strips -->
    <div class="marquee-section" ref="marqueeRef">
      <div class="marquee-row">
        <div class="marquee-track">
          <div class="marquee-set" v-for="n in 2" :key="'a' + n">
            <span class="marquee-pill" v-for="skill in row1Skills" :key="skill + n">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
      <div class="marquee-row marquee-reverse">
        <div class="marquee-track">
          <div class="marquee-set" v-for="n in 2" :key="'b' + n">
            <span class="marquee-pill alt" v-for="skill in row2Skills" :key="skill + n">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bento grid -->
    <div class="container">
      <div class="skills-bento" ref="skillsRef">
        <div
          class="skill-card card"
          v-for="([category, items], index) in skillEntries"
          :key="category"
          :class="'cat-' + index"
          :style="{ '--cat-color': categoryColors[category] }"
        >
          <div class="card-top-bar" />
          <div class="card-glow" />
          <div class="category-header">
            <div class="category-icon">
              <span>{{ categoryIcons[category] }}</span>
            </div>
            <div class="category-meta">
              <h3 class="category-name">{{ category }}</h3>
              <span class="skill-count">{{ items.length }} technologies</span>
            </div>
          </div>
          <div class="skill-tags">
            <span class="tag" v-for="skill in items" :key="skill">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/portfolio.js'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const headerRef = ref(null)
const skillsRef = ref(null)
const marqueeRef = ref(null)

const skillEntries = computed(() => Object.entries(skills))

const row1Skills = computed(() =>
  ['Languages', 'Frameworks', 'State Management', 'Styling'].flatMap(c => skills[c] ?? [])
)
const row2Skills = computed(() =>
  ['Build & DevOps', 'Testing', 'Concepts'].flatMap(c => skills[c] ?? [])
)

const categoryIcons = {
  'Languages': '{ }',
  'Frameworks': '⚛',
  'State Management': '🗄',
  'Styling': '🎨',
  'Build & DevOps': '🔧',
  'Testing': '🧪',
  'Concepts': '💡',
}

const categoryColors = {
  'Languages': '#6366f1',
  'Frameworks': '#a855f7',
  'State Management': '#ec4899',
  'Styling': '#f59e0b',
  'Build & DevOps': '#22d3ee',
  'Testing': '#22c55e',
  'Concepts': '#f97316',
}

onMounted(() => {
  gsap.from(headerRef.value, {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 80%' },
  })

  gsap.from(marqueeRef.value, {
    opacity: 0,
    y: 24,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: marqueeRef.value, start: 'top 85%' },
  })

  gsap.from(skillsRef.value?.children, {
    opacity: 0,
    y: 40,
    scale: 0.96,
    stagger: { amount: 0.5, from: 'start' },
    duration: 0.7,
    ease: 'back.out(1.4)',
    clearProps: 'opacity,transform',
    scrollTrigger: { trigger: skillsRef.value, start: 'top 78%' },
  })
})
</script>

<style scoped>
.skills {
  background: linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.02) 40%, transparent);
  overflow: hidden;
}

.section-header {
  margin-bottom: 48px;
}

/* ── Marquee ──────────────────────────────────────────── */
.marquee-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 56px;
}

.marquee-row {
  display: flex;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll-left 35s linear infinite;
}

.marquee-reverse .marquee-track {
  animation: scroll-right 28s linear infinite;
}

.marquee-row:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-set {
  display: flex;
  gap: 10px;
  padding-right: 10px;
}

.marquee-pill {
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 50px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
  white-space: nowrap;
  cursor: default;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.marquee-pill:hover {
  color: var(--text-primary);
  border-color: rgba(99, 102, 241, 0.4);
  background: rgba(99, 102, 241, 0.08);
}

.marquee-pill.alt {
  background: rgba(99, 102, 241, 0.06);
  border-color: rgba(99, 102, 241, 0.18);
  color: var(--accent-hover);
}

.marquee-pill.alt:hover {
  background: rgba(99, 102, 241, 0.14);
  border-color: rgba(99, 102, 241, 0.5);
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes scroll-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

/* ── Bento grid ───────────────────────────────────────── */
.skills-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

/* Languages */   .cat-0 { grid-column: span 1; }
/* Frameworks */  .cat-1 { grid-column: span 2; }
/* State Mgmt */  .cat-2 { grid-column: span 1; }
/* Styling */     .cat-3 { grid-column: span 2; }
/* Build */       .cat-4 { grid-column: span 2; }
/* Testing */     .cat-5 { grid-column: span 1; }
/* Concepts */    .cat-6 { grid-column: span 3; }

.skill-card {
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--cat-color) 40%, transparent);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.3),
    0 0 0 1px color-mix(in srgb, var(--cat-color) 25%, transparent);
}

/* Top accent bar */
.card-top-bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--cat-color);
  opacity: 0.85;
}

/* Radial glow in top-right corner */
.card-glow {
  position: absolute;
  top: -40px; right: -40px;
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, var(--cat-color), transparent 70%);
  opacity: 0.08;
  pointer-events: none;
  transition: opacity 0.3s;
}

.skill-card:hover .card-glow {
  opacity: 0.14;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.category-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--cat-color) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--cat-color) 28%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
  font-family: 'Fira Code', monospace;
  color: var(--cat-color);
  transition: background 0.25s, transform 0.25s;
}

.skill-card:hover .category-icon {
  background: color-mix(in srgb, var(--cat-color) 20%, transparent);
  transform: scale(1.08);
}

.category-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.category-name {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.skill-count {
  font-size: 0.71rem;
  color: var(--text-muted);
  font-weight: 500;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  position: relative;
  z-index: 1;
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 960px) {
  .skills-bento {
    grid-template-columns: repeat(2, 1fr);
  }
  .cat-0, .cat-2, .cat-5 { grid-column: span 1; }
  .cat-1, .cat-3, .cat-4 { grid-column: span 2; }
  .cat-6 { grid-column: span 2; }
}

@media (max-width: 600px) {
  .skills-bento {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .cat-0, .cat-1, .cat-2, .cat-3,
  .cat-4, .cat-5, .cat-6 {
    grid-column: span 1;
  }
  .skill-card { padding: 18px; }
  .marquee-section { margin-bottom: 40px; }
}
</style>
