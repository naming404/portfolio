<template>
  <header
    class="navbar"
    :class="{ scrolled: isScrolled, 'menu-open': menuOpen }"
  >
    <div class="container navbar-inner">
      <!-- Logo -->
      <a href="#hero" class="logo" @click.prevent="scrollTo('#hero')">
        <span class="logo-text">NHN</span>
        <span class="logo-dot" />
      </a>

      <!-- Desktop nav -->
      <nav class="nav-links">
        <a
          v-for="link in links"
          :key="link.id"
          :href="'#' + link.id"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
          @click.prevent="scrollTo('#' + link.id)"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Download CV -->
      <a
        href="./Nguyen_Huu_Nghia_Middle_Frontend_Vuejs.pdf"
        download
        class="btn btn-primary btn-cv desktop-only"
      >
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download CV
      </a>

      <!-- Hamburger -->
      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a
        v-for="link in links"
        :key="link.id"
        :href="'#' + link.id"
        class="mobile-nav-link"
        @click="
          () => {
            scrollTo('#' + link.id);
            menuOpen = false;
          }
        "
      >
        {{ link.label }}
      </a>
      <a
        href="./Nguyen_Huu_Nghia_Middle_Frontend_Vuejs.pdf"
        download
        class="btn btn-primary"
        style="margin-top: 8px; width: 100%; justify-content: center"
      >
        Download CV
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const isScrolled = ref(false);
const menuOpen = ref(false);
const activeSection = ref("");

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}

function onScroll() {
  isScrolled.value = window.scrollY > 30;

  const sections = links.map((l) => l.id);
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i]);
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = sections[i];
      break;
    }
  }
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition:
    background var(--transition),
    backdrop-filter var(--transition),
    border-color var(--transition);
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(6, 6, 18, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom-color: var(--border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 40px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-text {
  font-size: 1.35rem;
  font-weight: 900;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.03em;
}

.logo-dot {
  width: 6px;
  height: 6px;
  background: var(--accent-purple);
  border-radius: 50%;
  margin-bottom: 14px;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.nav-link {
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition:
    color var(--transition),
    background var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

.nav-link.active {
  color: var(--accent-hover);
}

/* CV button */
.btn-cv {
  flex-shrink: 0;
  padding: 9px 20px;
  font-size: 0.85rem;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition:
    transform var(--transition),
    opacity var(--transition);
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px 24px;
  background: rgba(6, 6, 18, 0.97);
  border-top: 1px solid var(--border);
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: all var(--transition);
}

.mobile-menu.open {
  display: flex;
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav-link {
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition);
}

.mobile-nav-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links,
  .desktop-only {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
