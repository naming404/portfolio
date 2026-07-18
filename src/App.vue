<template>
  <div class="app">
    <!-- Scroll progress bar -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }" />

    <!-- Custom cursor (desktop only) -->
    <div class="cursor-dot" ref="cursorDot" />
    <div class="cursor-ring" ref="cursorRing" />

    <NavBar />

    <main>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const scrollProgress = ref(0)
const cursorDot = ref(null)
const cursorRing = ref(null)

let dotX, dotY, ringX, ringY
let isTouchDevice = false

function onScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

function onMouseMove(e) {
  dotX(e.clientX)
  dotY(e.clientY)
  ringX(e.clientX)
  ringY(e.clientY)
}

function onMouseOver(e) {
  const isInteractive = e.target.closest('a, button, .card, .tag, .social-link, .social-btn, .nav-link')
  if (isInteractive) {
    gsap.to(cursorRing.value, { scale: 2.2, opacity: 0.4, duration: 0.3, ease: 'power2.out' })
    gsap.to(cursorDot.value, { scale: 2, duration: 0.2 })
  } else {
    gsap.to(cursorRing.value, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' })
    gsap.to(cursorDot.value, { scale: 1, duration: 0.2 })
  }
}

function onMouseLeave() {
  gsap.to([cursorDot.value, cursorRing.value], { opacity: 0, duration: 0.3 })
}

function onMouseEnter() {
  gsap.to([cursorDot.value, cursorRing.value], { opacity: 1, duration: 0.3 })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  // Only activate cursor on devices that support hover (not touch)
  isTouchDevice = !window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!isTouchDevice) {
    document.body.classList.add('custom-cursor')

    dotX = gsap.quickTo(cursorDot.value, 'x', { duration: 0.08 })
    dotY = gsap.quickTo(cursorDot.value, 'y', { duration: 0.08 })
    ringX = gsap.quickTo(cursorRing.value, 'x', { duration: 0.5, ease: 'power3.out' })
    ringY = gsap.quickTo(cursorRing.value, 'y', { duration: 0.5, ease: 'power3.out' })

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (!isTouchDevice) {
    window.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseover', onMouseOver)
    document.removeEventListener('mouseleave', onMouseLeave)
    document.removeEventListener('mouseenter', onMouseEnter)
  }
})
</script>

<style>
.app {
  min-height: 100vh;
}

/* Scroll progress */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: var(--accent-bright);
  z-index: 9999;
  transition: width 0.1s linear;
  box-shadow: 0 0 10px rgba(99, 254, 19, 0.7);
}

/* Custom cursor */
body.custom-cursor,
body.custom-cursor * {
  cursor: none !important;
}

.cursor-dot {
  position: fixed;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background: #262626;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  will-change: transform;
}

.cursor-ring {
  position: fixed;
  top: -18px;
  left: -18px;
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(33, 140, 0, 0.7);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  will-change: transform;
}
</style>
