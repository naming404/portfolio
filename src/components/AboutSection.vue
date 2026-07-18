<template>
  <section class="about" ref="sectionRef">
    <div class="container">
      <div class="about-grid">
        <!-- Left: text -->
        <div class="about-text" ref="textRef">
          <p class="section-label">About</p>
          <h2 class="section-title">
            Building the web<br />
            <span class="gradient-text">at peak performance</span>
          </h2>
          <p class="about-summary">{{ personal.summary }}</p>

          <div class="about-tags">
            <span class="tag" v-for="t in quickTags" :key="t">{{ t }}</span>
          </div>

          <div class="about-edu">
            <div class="edu-icon">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div>
              <div class="edu-degree">{{ education.degree }}</div>
              <div class="edu-meta">
                {{ education.school }} · {{ education.period }}
              </div>
              <div class="edu-meta">{{ education.english }}</div>
            </div>
          </div>
        </div>

        <!-- Right: stats -->
        <div class="about-stats" ref="statsRef">
          <div class="stat-card card" v-for="stat in stats" :key="stat.label">
            <div class="stat-value gradient-text">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>

          <!-- Location card -->
          <div class="location-card card">
            <div class="location-icon">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div class="location-city">Ho Chi Minh City</div>
              <div class="location-meta">Go Vap, Vietnam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal, stats, education } from "../data/portfolio.js";

const sectionRef = ref(null);
const textRef = ref(null);
const statsRef = ref(null);

const quickTags = ["TypeScript", "SSR/SSG", "Performance", "GraphQL"];

function parseStatValue(value) {
  const m = String(value).match(/^([+\-]?)(\d[\d,]*)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: value };
  return { prefix: m[1], num: parseInt(m[2].replace(/,/g, "")), suffix: m[3] };
}

function animateCounter(el, value) {
  const { prefix, num, suffix } = parseStatValue(value);
  if (num === 0) return;
  const obj = { val: 0 };
  gsap.to(obj, {
    val: num,
    duration: 1.8,
    ease: "power2.out",
    onUpdate() {
      const v = Math.round(obj.val);
      el.textContent = prefix + (v >= 1000 ? v.toLocaleString() : v) + suffix;
    },
    scrollTrigger: { trigger: el, start: "top 85%" },
  });
}

onMounted(() => {
  // Text block: fade + slide from left
  gsap.from(textRef.value, {
    opacity: 0,
    x: -50,
    duration: 1.0,
    ease: "power3.out",
    scrollTrigger: { trigger: sectionRef.value, start: "top 75%" },
  });

  // Paragraph + tags stagger after the clip wipe
  gsap.from([".about-summary", ".about-tags", ".about-edu"], {
    opacity: 0,
    y: 24,
    stagger: 0.15,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: { trigger: textRef.value, start: "top 72%" },
  });

  // Stat cards: spring stagger
  gsap.from(statsRef.value?.children, {
    opacity: 0,
    y: 50,
    scale: 0.85,
    stagger: 0.1,
    duration: 0.7,
    ease: "back.out(1.6)",
    scrollTrigger: { trigger: statsRef.value, start: "top 78%" },
  });

  // Count-up for each stat value
  statsRef.value?.querySelectorAll(".stat-value").forEach((el, i) => {
    animateCounter(el, stats[i]?.value);
  });
});
</script>

<style scoped>
.about {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(99, 254, 19, 0.04) 50%,
    transparent
  );
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: start;
}

/* Text */
.about-text {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.about-summary {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.about-edu {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-top: 4px;
}

.edu-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: rgba(99, 254, 19, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.edu-degree {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 3px;
}

.edu-meta {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Stats */
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.stat-card {
  padding: 28px 22px;
  text-align: center;
  cursor: default;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.location-card {
  grid-column: span 2;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: default;
}

.location-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: rgba(99, 254, 19, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.location-city {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.location-meta {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

/* Responsive — tablet */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Responsive — mobile */
@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .stat-card {
    padding: 20px 14px;
  }
  .stat-value {
    font-size: 1.7rem;
  }
  .stat-label {
    font-size: 0.72rem;
  }

  .about-summary {
    font-size: 0.92rem;
  }

  .about-edu {
    padding: 14px 16px;
    gap: 12px;
  }
  .edu-icon {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
  }
}
</style>
