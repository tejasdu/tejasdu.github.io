# 🚀 Modern Sleek CS New Grad Portfolio

A modern, high-performance, single-page portfolio built for Computer Science graduates and software engineers. Designed with fluid animations, interactive background effects, smooth dropdowns, and an instant theme & background customizer.

![Portfolio Preview](https://img.shields.io/badge/Stack-React_19_+_Vite_+_Tailwind_+_Framer_Motion-blue?style=for-the-badge)

---

## ✨ Features

- **Single-Screen Focused Layout**: Everything you need on one sleek page without endless scrolling clutter.
- **Cool Dynamic Typography**: Rotating dynamic headline displaying your engineering specialties.
- **Interactive Background Visual Effects**:
  - 🌐 **Particle Constellation**: Interactive canvas nodes that link and react to mouse movement.
  - 🌌 **Ambient Aurora**: Fluid glowing mesh gradients with subtle film-grain texture.
  - ✨ **Starfield Parallax**: 3D drifting stars with depth and gentle twinkling.
  - 📐 **Perspective Cyber Grid**: Moving retro-futuristic perspective wireframe.
- **Live Theme & Effect Switcher**: Click the **"Theme & Effect Switcher"** button in the navbar to test:
  1. *Modern Minimalist (Linear / Vercel style)*
  2. *Cyberpunk Neon*
  3. *Retro Terminal / Systems Dev*
  4. *Luxe Midnight*
- **Interactive "More Info" Dropdowns**:
  - Hero: Expandable academic coursework & engineering philosophy.
  - Experience: Interactive timeline cards with achievements, production impact, and key takeaways.
  - Projects: Architecture deep-dive accordions explaining Technical Challenge, Engineering Solution, and System Architecture.
- **Single-Screen Tab Navigation**: Seamless Framer Motion spring pill transitions between **Experience**, **Projects**, and **Skills & Stack**.
- **Interactive Micro-actions**: One-click "Copy Email" with confetti celebration feedback, direct resume and GitHub/LinkedIn links.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom CSS Glassmorphism
- **Animations**: Framer Motion (60fps spring transitions & accordions)
- **Icons**: Lucide React
- **Effects**: HTML5 Canvas + Canvas-Confetti

---

## 🏃 Running Locally

The development server is already running! Open in your browser:
```
http://localhost:3000
```

To stop or restart:
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 Customizing Your Data

All your information is neatly organized in **[`src/data/portfolioData.js`](file:///Users/tejasdumpeta/portfolio/src/data/portfolioData.js)**. Simply update the fields:
- `personal`: Name, role, bios, status badge, social URLs, and resume link.
- `experiences`: Your internships, co-ops, research, and TA roles with impact metrics.
- `projects`: Your flagship projects, GitHub repositories, live demo URLs, and architectural highlights.
- `skills`: Categorized skill pills and proficiency badges.

---

## 🌐 Deploying in 1 Click

You can deploy this site in under 60 seconds for free on:
- **Vercel**: Run `npx vercel` or connect your GitHub repository.
- **GitHub Pages**: Run `npm run build` and deploy the `dist/` directory.
- **Netlify**: Connect your GitHub repo and set publish directory to `dist`.
