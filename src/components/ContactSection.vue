<template>
  <section class="contact" ref="sectionRef">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <p class="section-label">Contact</p>
        <h2 class="section-title">
          Let's <span class="gradient-text">connect</span>
        </h2>
        <p class="section-subtitle">
          I'm looking for new opportunities and open to conversations. Feel free
          to reach out!
        </p>
      </div>

      <div class="contact-grid">
        <!-- Left: contact info -->
        <div class="contact-info" ref="infoRef">
          <a :href="'mailto:' + personal.email" class="contact-item card">
            <div class="contact-icon">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">Email</span>
              <span class="contact-value">{{ personal.email }}</span>
            </div>
            <div class="contact-arrow">→</div>
          </a>

          <a :href="'tel:' + personal.phone" class="contact-item card">
            <div class="contact-icon">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">Phone</span>
              <span class="contact-value">{{ personal.phone }}</span>
            </div>
            <div class="contact-arrow">→</div>
          </a>

          <a
            :href="personal.linkedin"
            target="_blank"
            rel="noopener"
            class="contact-item card"
          >
            <div class="contact-icon">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">LinkedIn</span>
              <span class="contact-value">linkedin.com/in/nghia-nguyen</span>
            </div>
            <div class="contact-arrow">→</div>
          </a>

          <a
            :href="personal.github"
            target="_blank"
            rel="noopener"
            class="contact-item card"
          >
            <div class="contact-icon">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">github.com/HuuNghia2807</span>
            </div>
            <div class="contact-arrow">→</div>
          </a>
        </div>

        <!-- Right: form -->
        <div class="contact-form-wrap" ref="formRef">
          <div class="form-card card">
            <h3 class="form-title">Send a message</h3>

            <!-- Success state -->
            <div v-if="formState === 'success'" class="form-success">
              <div class="success-icon">✓</div>
              <p>Thank you! I'll get back to you as soon as possible.</p>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" novalidate>
              <!--
                ═══════════════════════════════════════════════════════════
                FORMSPREE SETUP:
                1. Go to https://formspree.io and sign up for a free account
                2. Create a new form and copy your Form ID (looks like: xpzvXXXX)
                3. Replace YOUR_FORM_ID below with your actual form ID:
                   action="https://formspree.io/f/YOUR_FORM_ID"
                ═══════════════════════════════════════════════════════════
              -->
              <input
                type="hidden"
                name="_subject"
                value="Portfolio Contact — Nguyen Huu Nghia"
              />

              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    placeholder="Nguyen Huu Nghia"
                    required
                    :class="{ error: errors.name }"
                  />
                  <span class="error-msg" v-if="errors.name">{{
                    errors.name
                  }}</span>
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                    :class="{ error: errors.email }"
                  />
                  <span class="error-msg" v-if="errors.email">{{
                    errors.email
                  }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  name="subject"
                  placeholder="Job opportunity / Project collaboration..."
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="5"
                  placeholder="Hi Nghia, I'd like to talk about..."
                  required
                  :class="{ error: errors.message }"
                />
                <span class="error-msg" v-if="errors.message">{{
                  errors.message
                }}</span>
              </div>

              <button
                type="submit"
                class="btn btn-primary submit-btn"
                :disabled="formState === 'sending'"
              >
                <span v-if="formState === 'sending'">
                  <svg
                    class="spin"
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Sending...
                </span>
                <span v-else>
                  Send message
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
              </button>

              <p v-if="formState === 'error'" class="form-error-msg">
                Failed to send. Please try again or reach out directly via
                email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal } from "../data/portfolio.js";

const sectionRef = ref(null);
const headerRef = ref(null);
const infoRef = ref(null);
const formRef = ref(null);

const formState = ref("idle"); // idle | sending | success | error

const form = reactive({ name: "", email: "", subject: "", message: "" });
const errors = reactive({ name: "", email: "", message: "" });

function validate() {
  let valid = true;
  errors.name = "";
  errors.email = "";
  errors.message = "";

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
    valid = false;
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Invalid email address.";
    valid = false;
  }

  if (!form.message.trim()) {
    errors.message = "Please enter a message.";
    valid = false;
  }

  return valid;
}

async function handleSubmit() {
  if (!validate()) return;

  formState.value = "sending";

  try {
    // ═══════════════════════════════════════════════════════════
    // FORMSPREE: Thay thế YOUR_FORM_ID bằng ID form của bạn
    // Đăng ký tại: https://formspree.io
    // ═══════════════════════════════════════════════════════════
    const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    });

    if (res.ok) {
      formState.value = "success";
      form.name = "";
      form.email = "";
      form.subject = "";
      form.message = "";
    } else {
      formState.value = "error";
    }
  } catch {
    formState.value = "error";
  }
}

onMounted(() => {
  // Header: clip-path wipe
  gsap.from(headerRef.value, {
    opacity: 0,
    y: 50,
    duration: 1.0,
    ease: "power3.out",
    scrollTrigger: { trigger: headerRef.value, start: "top 80%" },
  })

  // Contact cards: stagger with spring + blur
  gsap.from(infoRef.value?.children, {
    opacity: 0,
    x: -50,
    filter: "blur(8px)",
    stagger: 0.1,
    duration: 0.75,
    ease: "power3.out",
    scrollTrigger: { trigger: infoRef.value, start: "top 78%" },
  })

  // Form: scale up from slightly below + blur clear
  gsap.from(formRef.value, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: "blur(10px)",
    duration: 1.0,
    ease: "power3.out",
    scrollTrigger: { trigger: formRef.value, start: "top 80%" },
  })
})
</script>

<style scoped>
.contact {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(99, 102, 241, 0.03) 50%,
    transparent
  );
}

.section-header {
  margin-bottom: 56px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 40px;
  align-items: start;
}

/* Contact items */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  text-decoration: none;
  color: var(--text-primary);
}

.contact-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
  transition: all var(--transition);
}

.contact-item:hover .contact-icon {
  background: rgba(99, 102, 241, 0.2);
}

.contact-detail {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.contact-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.contact-value {
  font-size: 0.88rem;
  color: var(--text-secondary);
  font-family: "Fira Code", monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--transition);
}

.contact-item:hover .contact-value {
  color: var(--text-primary);
}

.contact-arrow {
  color: var(--text-muted);
  font-size: 1.1rem;
  transition: all var(--transition);
}

.contact-item:hover .contact-arrow {
  color: var(--accent);
  transform: translateX(4px);
}

/* Form */
.form-card {
  padding: 36px 36px;
}

.form-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 28px;
  color: var(--text-primary);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 18px;
}

label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

input,
textarea {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: var(--text-primary);
  outline: none;
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    background var(--transition);
  resize: none;
  width: 100%;
}

input::placeholder,
textarea::placeholder {
  color: var(--text-muted);
}

input:focus,
textarea:focus {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.05);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}

input.error,
textarea.error {
  border-color: #ef4444;
}

.error-msg {
  font-size: 0.76rem;
  color: #ef4444;
}

.submit-btn {
  width: 100%;
  margin-top: 4px;
}

.submit-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none !important;
}

.form-error-msg {
  margin-top: 12px;
  font-size: 0.82rem;
  color: #ef4444;
  text-align: center;
}

/* Success */
.form-success {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.15);
  border: 2px solid rgba(34, 197, 94, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #22c55e;
}

.form-success p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Spin animation */
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Responsive — tablet */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

/* Responsive — mobile */
@media (max-width: 480px) {
  .form-card { padding: 22px 18px; }
  .form-title { font-size: 1rem; margin-bottom: 20px; }
  .form-row { grid-template-columns: 1fr; gap: 0; }
  .form-group { margin-bottom: 14px; }

  input, textarea { font-size: 0.85rem; padding: 10px 14px; }

  .contact-item { padding: 14px 16px; gap: 12px; }
  .contact-icon { width: 38px; height: 38px; flex-shrink: 0; }
  .contact-value { font-size: 0.8rem; }
  .contact-label { font-size: 0.68rem; }
  .contact-arrow { font-size: 0.9rem; }
}
</style>
