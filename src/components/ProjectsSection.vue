<template>
  <section class="projects" ref="sectionRef">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <p class="section-label">Achievements</p>
        <h2 class="section-title">
          Measurable <span class="gradient-text">impact</span>
        </h2>
        <p class="section-subtitle">
          Quantified results delivered across real-world production projects.
        </p>
      </div>

      <!-- Achievement cards -->
      <div class="achievements-grid" ref="achievementsRef">
        <div
          class="achievement-card card"
          v-for="item in achievements"
          :key="item.title"
        >
          <div class="achievement-metric" :style="{ color: item.color }">
            {{ item.metric }}
          </div>
          <h3 class="achievement-title">{{ item.title }}</h3>
          <p class="achievement-desc">{{ item.description }}</p>
        </div>
      </div>

      <!-- Projects/links -->
      <div class="links-section" ref="linksRef">
        <h3 class="links-title">Links</h3>
        <div class="project-links">
          <a
            v-for="link in projectLinks"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link-card card"
          >
            <div class="link-header">
              <div class="link-icon" v-html="link.icon" />
              <div class="link-arrow">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
            <div class="link-info">
              <div class="link-label">{{ link.label }}</div>
              <div class="link-url">{{ link.display }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievements } from "../data/portfolio.js";

const sectionRef = ref(null);
const headerRef = ref(null);
const achievementsRef = ref(null);
const linksRef = ref(null);

const githubIcon = `<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

const globeIcon = `<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`;

const projectLinks = [
  {
    label: "GitHub — HuuNghia2807",
    url: "https://github.com/HuuNghia2807",
    display: "github.com/HuuNghia2807",
    icon: githubIcon,
  },
  {
    label: "GitHub — naming404",
    url: "https://github.com/naming404",
    display: "github.com/naming404",
    icon: githubIcon,
  },
];

function parseMetric(value) {
  const m = String(value).match(/^([+\-]?)(\d[\d,]*)(.*)$/)
  if (!m) return null
  return { prefix: m[1], num: parseInt(m[2].replace(/,/g, '')), suffix: m[3] }
}

onMounted(() => {
  // Header
  gsap.from(headerRef.value, {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: headerRef.value, start: "top 80%" },
  })

  // Achievement cards: scale + y with spring stagger
  gsap.from(achievementsRef.value?.children, {
    opacity: 0,
    y: 60,
    scale: 0.85,
    stagger: { amount: 0.45, from: "start" },
    duration: 0.75,
    ease: "back.out(1.5)",
    scrollTrigger: { trigger: achievementsRef.value, start: "top 78%" },
  })

  // Metric numbers: count up from 0
  achievementsRef.value?.querySelectorAll(".achievement-metric").forEach((el, i) => {
    const parsed = parseMetric(achievements[i]?.metric)
    if (!parsed || parsed.num === 0) return
    const { prefix, num, suffix } = parsed
    const obj = { val: 0 }
    gsap.to(obj, {
      val: num,
      duration: 2.0,
      ease: "power2.out",
      delay: i * 0.1,
      onUpdate() {
        const v = Math.round(obj.val)
        el.textContent = prefix + (v >= 1000 ? v.toLocaleString() : v) + suffix
      },
      scrollTrigger: { trigger: el, start: "top 85%" },
    })
  })

  // Links: slide up with blur clear
  gsap.from(linksRef.value?.children, {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
    stagger: 0.12,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: { trigger: linksRef.value, start: "top 82%" },
  })
})
</script>

<style scoped>
.projects {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(168, 85, 247, 0.02) 50%,
    transparent
  );
}

.section-header {
  margin-bottom: 50px;
}

/* Achievements — 5 cards: 3 top row, 2 bottom row centered */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 60px;
}

/* Last 2 cards span to center in the 3-column grid */
.achievement-card:nth-child(4) {
  grid-column: 1 / 2;
  margin-left: auto;
  width: 100%;
}

.achievement-card:nth-child(5) {
  grid-column: 2 / 3;
  width: 100%;
}

.achievement-card {
  padding: 32px 24px;
  text-align: center;
  cursor: default;
}

.achievement-metric {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 10px;
  font-family: "Fira Code", monospace;
}

.achievement-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.achievement-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Links — 2 large cards side by side */
.links-section {}

.links-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: var(--text-primary);
}

.project-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.project-link-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  padding: 28px 28px;
  text-decoration: none;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
}

.project-link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-gradient);
  opacity: 0;
  transition: opacity var(--transition);
}

.project-link-card:hover::before {
  opacity: 1;
}

.link-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.link-icon {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
  transition: background var(--transition);
}

.project-link-card:hover .link-icon {
  background: rgba(99, 102, 241, 0.2);
}

.link-arrow {
  color: var(--text-muted);
  transition: color var(--transition), transform var(--transition);
}

.project-link-card:hover .link-arrow {
  color: var(--accent);
  transform: translate(3px, -3px);
}

.link-info {
  width: 100%;
}

.link-label {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.link-url {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: "Fira Code", monospace;
}

/* Responsive — tablet */
@media (max-width: 900px) {
  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .achievement-card:nth-child(4),
  .achievement-card:nth-child(5) {
    grid-column: auto;
    margin-left: 0;
  }

  .project-links {
    grid-template-columns: 1fr;
  }
}

/* Responsive — mobile */
@media (max-width: 480px) {
  .achievements-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .achievement-card { padding: 20px 14px; }
  .achievement-metric { font-size: 1.75rem; }
  .achievement-title { font-size: 0.78rem; margin-bottom: 6px; }
  .achievement-desc { font-size: 0.74rem; }

  .project-link-card { padding: 20px 18px; }
  .links-title { font-size: 1rem; }
}

@media (max-width: 360px) {
  .achievements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
