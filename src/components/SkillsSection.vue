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
          Scroll down — then grab and toss them around.
        </p>
      </div>
    </div>

    <!-- Falling physics playground -->
    <div class="container">
      <div class="falling-area" ref="areaRef">
        <span
          class="falling-chip"
          v-for="tech in fallingTech"
          :key="tech.name"
          :title="tech.name"
          :aria-label="tech.name"
          ref="chipRefs"
        >
          <img :src="tech.icon" :alt="tech.name" loading="lazy" decoding="async" draggable="false" />
        </span>

        <!-- Reveal board -->
        <div class="skill-board" ref="boardRef" :class="{ 'is-visible': boardVisible }">
          <span class="board-count">{{ fallingTech.length }}+</span>
          <span class="board-label">Technologies</span>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Matter from 'matter-js'
import { skills } from '../data/portfolio.js'
import claudeIcon from '../assets/tech/claude.svg'
import codexIcon from '../assets/tech/codex.svg'
import vueIcon from '../assets/tech/vue.svg'
import nuxtIcon from '../assets/tech/nuxt.svg'
import reactIcon from '../assets/tech/react.svg'
import javascriptIcon from '../assets/tech/javascript.svg'
import typescriptIcon from '../assets/tech/typescript.svg'
import viteIcon from '../assets/tech/vite.svg'
import nextjsIcon from '../assets/tech/nextjs.svg'
import tailwindIcon from '../assets/tech/tailwind.svg'
import piniaIcon from '../assets/tech/pinia.svg'
import githubIcon from '../assets/tech/github.svg'
import gitlabIcon from '../assets/tech/gitlab.svg'
import antigravityIcon from '../assets/tech/antigravity.svg'
import dockerIcon from '../assets/tech/docker.svg'
import reduxIcon from '../assets/tech/redux.svg'
import cursorIcon from '../assets/tech/cursor.svg'
import copilotIcon from '../assets/tech/copilot.svg'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const headerRef = ref(null)
const areaRef = ref(null)
const boardRef = ref(null)
const chipRefs = ref([])
const boardVisible = ref(false)

// Tech logos dropped into the physics playground — add more here as icons come in
const fallingTech = [
  { name: 'Claude', icon: claudeIcon },
  { name: 'Codex', icon: codexIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'Nuxt.js', icon: nuxtIcon },
  { name: 'React', icon: reactIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Vite', icon: viteIcon },
  { name: 'Next.js', icon: nextjsIcon },
  { name: 'TailwindCSS', icon: tailwindIcon },
  { name: 'Pinia', icon: piniaIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'GitLab', icon: gitlabIcon },
  { name: 'Antigravity', icon: antigravityIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Cursor', icon: cursorIcon },
  { name: 'GitHub Copilot', icon: copilotIcon },
]

const skillsRef = ref(null)
const skillEntries = computed(() => Object.entries(skills))

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
  'Languages': '#218c00',
  'Frameworks': '#262626',
  'State Management': '#218c00',
  'Styling': '#262626',
  'Build & DevOps': '#218c00',
  'Testing': '#262626',
  'Concepts': '#218c00',
}

let engine = null
let mouseConstraint = null
let rafId = null
let running = false
let started = false
let chipBodies = []
let boardBody = null
let observer = null
let scrollTriggerInstance = null

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function chipSize() {
  return window.innerWidth < 640 ? 46 : 60
}

/* Lay chips out in neat centered rows (pre-fall resting state) */
function layoutRows() {
  const area = areaRef.value
  const W = area.clientWidth
  const H = area.clientHeight
  const size = chipSize()
  const gap = 12
  const cols = Math.max(1, Math.floor((W - 48) / (size + gap)))
  const rows = Math.ceil(fallingTech.length / cols)
  const blockH = rows * size + (rows - 1) * gap
  const startY = H * 0.55 - blockH / 2

  const positions = []
  for (let r = 0; r < rows; r++) {
    const count = Math.min(cols, fallingTech.length - r * cols)
    const rowW = count * size + (count - 1) * gap
    const startX = (W - rowW) / 2
    for (let c = 0; c < count; c++) {
      positions.push({
        x: startX + c * (size + gap) + size / 2,
        y: startY + r * (size + gap) + size / 2,
      })
    }
  }

  chipRefs.value.forEach((el, i) => {
    const p = positions[i]
    el.style.width = size + 'px'
    el.style.height = size + 'px'
    el.style.left = p.x + 'px'
    el.style.top = p.y + 'px'
    el.style.transform = 'translate(-50%, -50%)'
  })

  return { positions, size }
}

function startPhysics() {
  if (started) return
  started = true
  boardVisible.value = true
  if (reducedMotion) return

  const area = areaRef.value
  const W = area.clientWidth
  const H = area.clientHeight
  const { positions, size } = layoutRows()

  engine = Matter.Engine.create()
  engine.gravity.y = 0.9

  const wallOpts = { isStatic: true, friction: 0.6 }
  const walls = [
    Matter.Bodies.rectangle(W / 2, H + 50, W + 400, 100, wallOpts),      // floor
    Matter.Bodies.rectangle(-50, H / 2, 100, H * 4, wallOpts),           // left
    Matter.Bodies.rectangle(W + 50, H / 2, 100, H * 4, wallOpts),        // right
    Matter.Bodies.rectangle(W / 2, -H - 50, W + 400, 100, wallOpts),     // ceiling (high up)
  ]

  // Collision categories: walls 0x0001, chips 0x0002, board 0x0004.
  // The board only collides with walls, so falling chips can't spin it —
  // it still responds to mouse dragging.
  chipBodies = positions.map((p, i) =>
    Matter.Bodies.rectangle(p.x, p.y, size, size, {
      chamfer: { radius: size * 0.25 },
      restitution: 0.3,
      friction: 0.6,
      angle: (Math.random() - 0.5) * 0.3,
      collisionFilter: { category: 0x0002, mask: 0x0001 | 0x0002 },
    })
  )

  // Floating draggable board — gravity is cancelled each tick so it hovers
  const b = boardRef.value
  boardBody = Matter.Bodies.rectangle(W / 2, H * 0.4, b.offsetWidth, b.offsetHeight, {
    frictionAir: 0.12,
    restitution: 0.2,
    angle: -0.05,
    collisionFilter: { category: 0x0004, mask: 0x0001 },
  })

  Matter.Composite.add(engine.world, [...walls, ...chipBodies, boardBody])

  Matter.Events.on(engine, 'beforeUpdate', () => {
    const g = engine.gravity
    Matter.Body.applyForce(boardBody, boardBody.position, {
      x: 0,
      y: -g.y * g.scale * boardBody.mass,
    })
  })

  // Mouse dragging
  const mouse = Matter.Mouse.create(area)
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: { stiffness: 0.9, render: { visible: false } },
  })
  // Give page scrolling back: Matter's mouse hijacks wheel + touch events
  mouse.element.removeEventListener('wheel', mouse.mousewheel)
  mouse.element.removeEventListener('mousewheel', mouse.mousewheel)
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)
  mouse.element.removeEventListener('touchstart', mouse.mousedown)
  mouse.element.removeEventListener('touchmove', mouse.mousemove)
  mouse.element.removeEventListener('touchend', mouse.mouseup)
  Matter.Composite.add(engine.world, mouseConstraint)

  running = true
  tick()
}

function tick() {
  if (!running || !engine) return
  Matter.Engine.update(engine, 1000 / 60)

  const area = areaRef.value
  if (!area) return
  const W = area.clientWidth
  const H = area.clientHeight

  chipBodies.forEach((body, i) => {
    const el = chipRefs.value[i]
    if (!el) return
    keepInside(body, W, H)
    el.style.left = body.position.x + 'px'
    el.style.top = body.position.y + 'px'
    el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`
  })

  if (boardBody && boardRef.value) {
    keepInside(boardBody, W, H)
    const el = boardRef.value
    el.style.left = boardBody.position.x + 'px'
    el.style.top = boardBody.position.y + 'px'
    el.style.transform = `translate(-50%, -50%) rotate(${boardBody.angle}rad)`
  }

  rafId = requestAnimationFrame(tick)
}

/* Teleport a body back if a drag flings it out of the box */
function keepInside(body, W, H) {
  const { x, y } = body.position
  if (x < -80 || x > W + 80 || y < -H * 2 || y > H + 80) {
    Matter.Body.setPosition(body, { x: Math.min(Math.max(x, 40), W - 40), y: H * 0.3 })
    Matter.Body.setVelocity(body, { x: 0, y: 0 })
  }
}

function pause() {
  running = false
  if (rafId) cancelAnimationFrame(rafId)
}

function resume() {
  if (!started || reducedMotion || running) return
  running = true
  tick()
}

onMounted(() => {
  gsap.from(headerRef.value, {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 80%' },
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

  layoutRows()
  if (reducedMotion) boardVisible.value = true

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: areaRef.value,
    start: 'top 55%',
    once: true,
    onEnter: startPhysics,
  })

  // Only burn CPU while the playground is on screen
  observer = new IntersectionObserver(
    (entries) => (entries[0].isIntersecting ? resume() : pause()),
    { threshold: 0 }
  )
  observer.observe(areaRef.value)
})

onUnmounted(() => {
  pause()
  observer?.disconnect()
  scrollTriggerInstance?.kill()
  if (engine) {
    Matter.Composite.clear(engine.world, false)
    Matter.Engine.clear(engine)
    engine = null
  }
})
</script>

<style scoped>
.skills {
  background: linear-gradient(180deg, transparent, rgba(99, 254, 19, 0.03) 40%, transparent);
  overflow: hidden;
}

.section-header {
  margin-bottom: 48px;
}

/* ── Falling playground ─────────────────────────────── */
.falling-area {
  position: relative;
  height: 460px;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
}

.falling-area:active {
  cursor: grabbing;
}

.falling-chip {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 15px;
  box-shadow:
    0 8px 22px rgba(21, 20, 15, 0.12),
    inset 0 0 0 1px rgba(21, 20, 15, 0.06);
  z-index: 2;
  will-change: transform, left, top;
}

.falling-chip img {
  width: 62%;
  height: 62%;
  object-fit: contain;
  border-radius: 18%;
  pointer-events: none;
  user-select: none;
}

/* ── Reveal board ───────────────────────────────────── */
.skill-board {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%) rotate(-3deg);
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 26px 44px;
  background: transparent;
  border: 1.5px solid var(--accent-bright);
  z-index: 3;
  white-space: nowrap;
  opacity: 0;
  scale: 0.9;
  transition: opacity 0.52s cubic-bezier(0.23, 1, 0.32, 1), scale 0.52s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, left, top;
}

/* Selection handles on the four corners — theme signature */
.skill-board::before {
  content: '';
  position: absolute;
  inset: -5px;
  background:
    linear-gradient(var(--accent-bright), var(--accent-bright)) top left / 9px 9px no-repeat,
    linear-gradient(var(--accent-bright), var(--accent-bright)) top right / 9px 9px no-repeat,
    linear-gradient(var(--accent-bright), var(--accent-bright)) bottom left / 9px 9px no-repeat,
    linear-gradient(var(--accent-bright), var(--accent-bright)) bottom right / 9px 9px no-repeat;
  pointer-events: none;
}

.skill-board.is-visible {
  opacity: 1;
  scale: 1;
}

.board-count {
  font-family: var(--serif);
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1;
  color: var(--text-primary);
  background: linear-gradient(transparent 66%, var(--accent-bright) 66%, var(--accent-bright) 94%, transparent 94%);
}

.board-label {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* ── Bento grid ───────────────────────────────────────── */
.skills-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 56px;
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
    0 16px 48px rgba(38, 38, 38, 0.1),
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
  font-family: 'Albert Sans', sans-serif;
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

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 960px) {
  .skills-bento {
    grid-template-columns: repeat(2, 1fr);
  }
  .cat-0, .cat-2, .cat-5 { grid-column: span 1; }
  .cat-1, .cat-3, .cat-4 { grid-column: span 2; }
  .cat-6 { grid-column: span 2; }
}

@media (max-width: 640px) {
  .falling-area {
    height: 380px;
  }

  .falling-chip {
    font-size: 1.05rem;
    border-radius: 12px;
  }

  .skill-board {
    padding: 16px 24px;
    gap: 10px;
  }

  .board-count { font-size: 2rem; }
  .board-label { font-size: 1.05rem; }
}

@media (max-width: 600px) {
  .skills-bento {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 40px;
  }
  .cat-0, .cat-1, .cat-2, .cat-3,
  .cat-4, .cat-5, .cat-6 {
    grid-column: span 1;
  }
  .skill-card { padding: 18px; }
}
</style>
