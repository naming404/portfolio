<template>
  <section class="experience" ref="sectionRef">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <p class="section-label">Experience</p>
        <h2 class="section-title">
          Professional <span class="gradient-text">journey</span>
        </h2>
        <p class="section-subtitle">
          4+ years building real-world products at tech companies.
        </p>
      </div>

      <div class="timeline">
        <!-- Timeline line -->
        <div class="timeline-line" />

        <div
          class="experience-item"
          v-for="(exp, index) in experiences"
          :key="index"
          ref="itemRefs"
        >
          <!-- Timeline dot -->
          <div class="timeline-dot" :class="{ current: exp.type === 'current' }">
            <div class="dot-inner" />
          </div>

          <div class="exp-card card">
            <!-- Header -->
            <div class="exp-header">
              <div class="exp-info">
                <div class="exp-company-row">
                  <span class="exp-company">{{ exp.company }}</span>
                  <span v-if="exp.type === 'current'" class="current-badge">Current</span>
                </div>
                <h3 class="exp-role">{{ exp.role }}</h3>
                <div class="exp-period">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {{ exp.period }}
                </div>
              </div>
            </div>

            <!-- Project -->
            <div class="exp-project">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {{ exp.project }}
            </div>

            <!-- Achievements -->
            <ul class="exp-achievements">
              <li v-for="(item, i) in exp.achievements" :key="i">
                <span class="achievement-dot" />
                {{ item }}
              </li>
            </ul>

            <!-- Stack -->
            <div class="exp-stack">
              <span class="tag" v-for="tech in exp.stack" :key="tech">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '../data/portfolio.js'

const sectionRef = ref(null)
const headerRef = ref(null)
const itemRefs = ref([])

onMounted(() => {
  // Header reveal
  gsap.from(headerRef.value, {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 80%' },
  })

  // Timeline line draws itself as you scroll (scrub)
  gsap.fromTo('.timeline-line',
    { scaleY: 0 },
    {
      scaleY: 1,
      transformOrigin: 'top center',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        end: 'bottom 55%',
        scrub: 1.5,
      },
    }
  )

  // Cards: alternate left/right + achievement bullets stagger
  itemRefs.value.forEach((item, i) => {
    const fromX = i % 2 === 0 ? -70 : 70

    gsap.from(item, {
      opacity: 0,
      x: fromX,
      scale: 0.95,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: item, start: 'top 83%' },
    })

    // Achievement bullets stagger after card enters
    const bullets = item.querySelectorAll('.achievement-dot')
    gsap.from(bullets, {
      opacity: 0,
      scale: 0,
      stagger: 0.08,
      duration: 0.4,
      ease: 'back.out(3)',
      scrollTrigger: { trigger: item, start: 'top 80%' },
      delay: 0.3,
    })
  })
})
</script>

<style scoped>
.experience {
  background: linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.02) 50%, transparent);
}

.section-header {
  margin-bottom: 60px;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 48px;
}

.timeline-line {
  position: absolute;
  left: 12px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent) 0%, var(--accent-purple) 100%);
  opacity: 0.25;
  border-radius: 2px;
}

.experience-item {
  position: relative;
  margin-bottom: 32px;
}

.experience-item:last-child {
  margin-bottom: 0;
}

/* Timeline dot */
.timeline-dot {
  position: absolute;
  left: -48px;
  top: 24px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color var(--transition);
}

.experience-item:hover .timeline-dot {
  border-color: var(--accent);
}

.timeline-dot.current {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
}

.dot-inner {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border);
  transition: background var(--transition);
}

.timeline-dot.current .dot-inner {
  background: var(--accent-gradient);
}

.experience-item:hover .dot-inner {
  background: var(--accent);
}

/* Card */
.exp-card {
  padding: 28px 32px;
}

.exp-header {
  margin-bottom: 14px;
}

.exp-company-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.exp-company {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.current-badge {
  padding: 2px 10px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.15);
  color: var(--accent-hover);
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.exp-role {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.exp-period {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.exp-project {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-style: italic;
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
  line-height: 1.5;
}

.exp-project svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--accent-purple);
}

/* Achievements */
.exp-achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.exp-achievements li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.achievement-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-gradient);
  flex-shrink: 0;
  margin-top: 8px;
}

/* Stack */
.exp-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Responsive — tablet */
@media (max-width: 640px) {
  .timeline { padding-left: 36px; }
  .timeline-line { left: 8px; }
  .timeline-dot { left: -36px; width: 22px; height: 22px; }
  .exp-card { padding: 22px 20px; }
  .exp-role { font-size: 1.05rem; }
}

/* Responsive — mobile */
@media (max-width: 480px) {
  .timeline { padding-left: 30px; }
  .timeline-line { left: 6px; }
  .timeline-dot { left: -30px; width: 18px; height: 18px; top: 20px; }
  .dot-inner { width: 8px; height: 8px; }

  .exp-card { padding: 18px 16px; border-radius: var(--radius-lg); }
  .exp-role { font-size: 1rem; }
  .exp-company { font-size: 0.7rem; }
  .exp-period { font-size: 0.76rem; }
  .exp-project { font-size: 0.8rem; margin-bottom: 14px; padding-bottom: 14px; }
  .exp-achievements li { font-size: 0.85rem; gap: 8px; }
  .exp-stack { gap: 6px; }
  .tag { font-size: 0.7rem; padding: 4px 10px; }

  .experience-item { margin-bottom: 22px; }
}
</style>
