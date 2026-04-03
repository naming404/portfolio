<template>
  <section class="hero">
    <!-- Background elements -->
    <div class="hero-bg">
      <div class="bg-grid" />
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />
    </div>

    <div class="container hero-content">
      <!-- Left: text -->
      <div class="hero-text">
        <div class="hero-greeting" ref="greetingRef">
          <span class="greeting-badge">
            <span class="pulse-dot" />
            Open to new opportunities
          </span>
        </div>

        <h1 class="hero-name" ref="nameRef">
          <span class="hi-text">Hi, I'm</span><br />
          <span class="gradient-text">{{ personal.name }}</span>
        </h1>

        <div class="hero-role" ref="roleRef">
          <span class="role-line" />
          <span class="role-text">{{ personal.role }}</span>
        </div>

        <p class="hero-tagline" ref="taglineRef">
          {{ personal.tagline }}
        </p>

        <div class="hero-ctas" ref="ctasRef">
          <div class="ctas-row">
            <a href="#contact" @click.prevent="scrollTo('#contact')" class="btn btn-primary">
              Get in touch
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#experience" @click.prevent="scrollTo('#experience')" class="btn btn-secondary">
              View experience
            </a>
          </div>
          <a href="/Nguyen_Huu_Nghia_Middle_Frontend_Vuejs.pdf" download class="btn btn-secondary btn-download">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        <!-- Social links -->
        <div class="hero-socials" ref="socialsRef">
          <a :href="personal.github" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a :href="personal.linkedin" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a :href="'mailto:' + personal.email" class="social-link" aria-label="Email">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: avatar -->
      <div class="hero-avatar-wrap" ref="avatarRef">
        <div class="avatar-rings">
          <div class="ring ring-1" />
          <div class="ring ring-2" />
          <div class="ring ring-3" />
        </div>
        <div class="avatar-img-wrap">
          <img
            :src="personal.avatar"
            :alt="personal.name"
            class="avatar-img"
            loading="eager"
          />
          <div class="avatar-overlay" />
        </div>
        <!-- Floating badges -->
        <div class="float-badge badge-vue">
          <span>Vue.js 3</span>
        </div>
        <div class="float-badge badge-ts">
          <span>TypeScript</span>
        </div>
        <div class="float-badge badge-nuxt">
          <span>Nuxt.js</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator" ref="scrollIndicatorRef">
      <div class="scroll-mouse">
        <div class="scroll-wheel" />
      </div>
      <span>Scroll down</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { personal } from '../data/portfolio.js'

const greetingRef = ref(null)
const nameRef = ref(null)
const roleRef = ref(null)
const taglineRef = ref(null)
const ctasRef = ref(null)
const socialsRef = ref(null)
const avatarRef = ref(null)
const scrollIndicatorRef = ref(null)

let xTo, yTo, orbX, orbY
const isTouch = !window.matchMedia('(hover: hover) and (pointer: fine)').matches

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

function onMouseMove(e) {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  xTo?.((e.clientX - cx) * 0.018)
  yTo?.((e.clientY - cy) * 0.018)
  orbX?.((e.clientX - cx) * -0.012)
  orbY?.((e.clientY - cy) * -0.012)
}

onMounted(() => {
  // ── Entrance timeline ──────────────────────────────────────────
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })

  // Greeting badge slides in from left
  tl.from(greetingRef.value, { opacity: 0, x: -40, duration: 0.7 })

  // "Hi, I'm" part
  tl.from('.hi-text', { opacity: 0, x: -30, duration: 0.6 }, '-=0.3')

  // Name: blur-to-clear with slight scale — premium feel
  tl.from('.gradient-text', {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(24px)',
    y: 20,
    duration: 1.0,
    ease: 'expo.out',
  }, '-=0.2')

  // Role line draws from left, then text fades in
  tl.from('.role-line', { scaleX: 0, transformOrigin: 'left center', duration: 0.5, ease: 'power2.inOut' }, '-=0.3')
  tl.from('.role-text', { opacity: 0, x: 20, duration: 0.5 }, '-=0.2')

  // Tagline: fade + slide up
  tl.from(taglineRef.value, {
    opacity: 0,
    y: 24,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.2')

  // CTAs spring in with stagger
  const ctaButtons = ctasRef.value?.querySelectorAll('.btn')
  if (ctaButtons?.length) {
    tl.from(ctaButtons, {
      opacity: 0,
      y: 30,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.6)',
      clearProps: 'opacity,transform',
    }, '-=0.3')
  }

  // Social icons cascade
  tl.from('.social-link', {
    opacity: 0,
    y: 14,
    scale: 0.6,
    stagger: 0.08,
    duration: 0.5,
    ease: 'back.out(2)',
  }, '-=0.2')

  // Avatar: dramatic scale-rotate entrance
  tl.from(avatarRef.value, {
    opacity: 0,
    scale: 0.6,
    rotation: -8,
    filter: 'blur(12px)',
    duration: 1.1,
    ease: 'back.out(1.2)',
  }, 0.35)

  tl.from(scrollIndicatorRef.value, { opacity: 0, y: 10, duration: 0.5 }, '-=0.2')

  // ── Floating badges ────────────────────────────────────────────
  gsap.to('.badge-vue', { y: -12, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.8 })
  gsap.to('.badge-ts', { y: 10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.2 })
  gsap.to('.badge-nuxt', { y: -8, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.4 })

  // ── Rings: rotate + pulse ──────────────────────────────────────
  gsap.to('.ring-1', { rotation: 360, duration: 20, repeat: -1, ease: 'none' })
  gsap.to('.ring-2', { rotation: -360, duration: 30, repeat: -1, ease: 'none' })
  gsap.to('.ring-1', { scale: 1.06, opacity: 0.7, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  gsap.to('.ring-2', { scale: 1.04, opacity: 0.45, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.8 })
  gsap.to('.ring-3', { scale: 1.03, opacity: 0.2, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 })

  // ── Mouse parallax (desktop only) ─────────────────────────────
  if (!isTouch) {
    xTo = gsap.quickTo(avatarRef.value, 'x', { duration: 0.9, ease: 'power3.out' })
    yTo = gsap.quickTo(avatarRef.value, 'y', { duration: 0.9, ease: 'power3.out' })
    orbX = gsap.quickTo('.orb-1', 'x', { duration: 1.4, ease: 'power3.out' })
    orbY = gsap.quickTo('.orb-1', 'y', { duration: 1.4, ease: 'power3.out' })
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  }
})

onUnmounted(() => {
  if (!isTouch) window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: var(--nav-height);
  overflow: hidden;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
  top: -10%;
  left: -10%;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 70%);
  bottom: -10%;
  right: 5%;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.1), transparent 70%);
  top: 40%;
  right: 30%;
}

/* Content */
.hero-content {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
}

/* Text */
.hero-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.greeting-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: 50px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--accent-hover);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
}

.hero-name {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: -0.03em;
}

.hero-name .gradient-text {
  white-space: nowrap;
}

.hero-role {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.role-line {
  display: inline-block;
  width: 32px;
  height: 2px;
  background: var(--accent-gradient);
  border-radius: 2px;
  flex-shrink: 0;
}

.hero-tagline {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 480px;
}

.hero-ctas {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 4px;
}

.hero-ctas .btn {
  opacity: 1;
}

.ctas-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-download {
  align-self: flex-start;
}

.hero-socials {
  display: flex;
  gap: 8px;
  padding-top: 8px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition);
}

.social-link:hover {
  color: var(--text-primary);
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

/* Avatar */
.hero-avatar-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-rings {
  position: absolute;
  inset: -40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
}

.ring-1 {
  width: 340px;
  height: 340px;
  border-width: 1px;
  border-color: rgba(99, 102, 241, 0.35);
}

.ring-2 {
  width: 420px;
  height: 420px;
  border-width: 1px;
  border-color: rgba(168, 85, 247, 0.2);
}

.ring-3 {
  width: 500px;
  height: 500px;
  border-width: 1px;
  border-color: rgba(99, 102, 241, 0.1);
}

.avatar-img-wrap {
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid transparent;
  background: linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box,
              var(--accent-gradient) border-box;
  box-shadow: 0 0 60px rgba(99, 102, 241, 0.3), 0 20px 60px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent 60%);
}

/* Floating badges */
.float-badge {
  position: absolute;
  padding: 8px 14px;
  border-radius: var(--radius-md);
  background: rgba(6, 6, 18, 0.9);
  border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  font-size: 0.78rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  z-index: 2;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.badge-vue {
  bottom: 30px;
  left: -20px;
  color: #42b883;
  border-color: rgba(66, 184, 131, 0.3);
}

.badge-ts {
  top: 20px;
  right: -10px;
  color: #3178c6;
  border-color: rgba(49, 120, 198, 0.3);
}

.badge-nuxt {
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  color: #00dc82;
  border-color: rgba(0, 220, 130, 0.3);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  z-index: 1;
  animation: scrollBounce 2s ease-in-out infinite;
}

.scroll-mouse {
  width: 22px;
  height: 34px;
  border: 2px solid var(--text-muted);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.scroll-wheel {
  width: 3px;
  height: 7px;
  background: var(--text-muted);
  border-radius: 2px;
  animation: wheelScroll 1.5s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

@keyframes wheelScroll {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
}

/* Responsive — tablet */
@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 36px;
    text-align: center;
  }

  .hero-text { gap: 16px; }
  .hero-ctas { align-items: center; }
  .ctas-row { justify-content: center; }
  .btn-download { align-self: center; }
  .hero-socials { justify-content: center; }
  .hero-role { justify-content: center; }
  .hero-tagline { margin: 0 auto; max-width: 520px; }

  .hero-avatar-wrap { order: -1; }

  .ring-1 { width: 240px; height: 240px; }
  .ring-2 { width: 300px; height: 300px; }
  .ring-3 { width: 360px; height: 360px; }
  .avatar-img-wrap { width: 200px; height: 200px; }

  .badge-ts { right: 0; }
  .badge-nuxt { right: -10px; }
}

/* Responsive — mobile */
@media (max-width: 480px) {
  .hero-content { gap: 28px; padding-top: 20px; }

  .hero-name {
    font-size: 1.9rem;
    white-space: normal;  /* allow wrap on small phones */
  }

  .greeting-badge { font-size: 0.75rem; padding: 6px 12px; }

  .hero-role { font-size: 0.95rem; flex-wrap: wrap; gap: 8px; }

  .hero-tagline { font-size: 0.92rem; }

  /* Stack all CTA buttons full-width */
  .ctas-row { flex-direction: column; width: 100%; }
  .ctas-row .btn { width: 100%; justify-content: center; }
  .btn-download { width: 100%; justify-content: center; align-self: stretch; }

  .float-badge { display: none; }

  .ring-1 { width: 200px; height: 200px; }
  .ring-2 { width: 250px; height: 250px; }
  .ring-3 { display: none; }
  .avatar-img-wrap { width: 170px; height: 170px; }

  .scroll-indicator { display: none; }
}

/* Very small phones */
@media (max-width: 360px) {
  .hero-name { font-size: 1.65rem; }
  .avatar-img-wrap { width: 150px; height: 150px; }
}
</style>
