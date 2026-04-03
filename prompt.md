Act as a Senior Frontend Developer and UI/UX Expert. I have attached my CV file named `CV.txt`. Your task is to extract the information from this CV and build a complete, modern, and highly impressive personal portfolio website.

Here are the strict technical and design requirements:

1. **Tech Stack & Architecture:**
   - Use **Vue.js 3** (Composition API, `<script setup>`).
   - The site must be completely static (no backend server). Hardcode all extracted data from the CV directly into the Vue components.
   - The project must be configured to build into pure HTML/CSS/JS (e.g., using Vite).

2. **Animations & Interactivity:**
   - Integrate **GSAP** and **ScrollTrigger** for professional, smooth animations.
   - Apply modern effects: fade-ins on scroll, staggered list animations for skills/experience, and a polished hero section animation. Do not over-animate; keep it elegant, fluid, and HR-friendly.

3. **Assets & Placeholders:**
   - For any required images (avatar, project thumbnails, background elements), use clear default placeholder URLs (e.g., `https://via.placeholder.com/` or Unsplash placeholders). I will replace these with real images later.

4. **Specific Features:**
   - **Download CV:** Include a prominent "Download CV" button that links to `/CV.txt` with the `download` attribute.
   - **Contact Form:** Build a modern contact form (Name, Email, Message). Since there is no backend, configure the form to use a service like **Formspree** or **EmailJS** to send submissions directly to my email. Leave a comment in the code showing exactly where I need to paste my endpoint URL/API key.

5. **Design & UX (Crucial for HR Approval):**
   - The UI must be exceptionally modern, clean, and professional. Use a cohesive color palette and excellent typography.
   - Ensure a clear visual hierarchy so recruiters can quickly scan my skills and experience.
   - The layout must be fully responsive (Mobile-first approach).
   - Create a "Wow" factor—the site should instantly build trust and showcase high-level frontend capabilities.

Please provide:

1. The suggested project structure.
2. The CLI commands to initialize the project and install all required dependencies (Vue, GSAP, etc.).
3. The complete, production-ready code for `App.vue` and all necessary components (Hero, About, Experience, Projects, Contact). Ensure the text content is accurately populated in Vietnamese based on the provided PDF.
