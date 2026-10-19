# Mohidul Islam Sojib – Personal Portfolio Website

A premium, modern, fully responsive personal portfolio website for **Mohidul Islam Sojib**, Head of Performance Marketing & Strategy at **Boosting Agency BD**.

Built with React, TypeScript, Tailwind CSS, and Vite. Architected static-first for instant loading and zero-cost deployment on **Cloudflare Pages Free**.

---

## 🚀 Live Identity & Core Information

- **Full Name:** Mohidul Islam Sojib
- **Designation:** Head of Performance Marketing & Strategy
- **Organization:** Boosting Agency BD
- **Field:** Digital Marketing and Performance Marketing
- **Location:** Bangladesh
- **WhatsApp:** `+8801615000426` (opens prefilled chat at `https://wa.me/8801615000426`)
- **Email:** `sojibnstsojib@gmail.com` (and `sojibnstsojibnst@gmail.com`)

---

## 🎨 Visual Identity & Theme

- **Main Background:** `#0B132B`
- **Secondary Background:** `#0D1117`
- **Card Background:** `#111827`
- **Neon Cyan Accent:** `#00D2FF`
- **Electric Purple Accent:** `#7F00FF`
- **Primary Text:** `#FFFFFF`
- **Secondary Text:** `#AAB4C8`
- **Typography:** Plus Jakarta Sans

---

## 📂 Project Structure

```text
├── public/
│   ├── images/
│   │   └── profile/     # Official profile photograph (mohidul-islam-sojib.webp)
│   ├── _headers         # Cloudflare Pages security & cache control headers
│   ├── _redirects       # Cloudflare Pages SPA fallback (/* /index.html 200)
│   ├── favicon.svg      # Cyan/purple monogram favicon
│   ├── robots.txt       # Search engine crawler instructions
│   └── sitemap.xml      # Full XML sitemap
├── src/
│   ├── assets/
│   │   └── images/      # High-fidelity portrait and case study visuals
│   ├── components/
│   │   ├── Navbar.tsx   # 3-Zone Top Bar Contract adhering to zero-pill discipline
│   │   ├── Footer.tsx   # Identity, designation, navigation, and direct contacts
│   │   └── ProjectModal.tsx # Full case study modal viewer
│   ├── data/
│   │   └── portfolioData.ts # Centralized, editable data source for all content
│   ├── pages/
│   │   ├── HomePage.tsx     # Hero, strategic pillars, capabilities, services, cases
│   │   ├── AboutPage.tsx    # Biography, philosophy, 13 skills, methodology, goals
│   │   ├── ServicesPage.tsx # 10 full services with benefits & inquiry triggers
│   │   ├── PortfolioPage.tsx# Categorized portfolio with filters and modals
│   │   ├── ContactPage.tsx  # WhatsApp direct, email, validated inquiry form
│   │   └── NotFoundPage.tsx # Custom branded 404 page
│   ├── utils/
│   │   └── whatsapp.ts      # WhatsApp and mailto generator helpers
│   ├── App.tsx          # Client-side router and page title manager
│   ├── index.css        # Tailwind CSS and theme design tokens
│   └── main.tsx         # Application entry point
├── index.html           # Rich SEO, OpenGraph, Twitter Card & Schema.org JSON-LD
├── metadata.json        # AI Studio metadata
└── vite.config.ts       # Vite configuration
```

---

## ☁️ Cloudflare Pages Free Deployment Guide

This project is built static-first with no mandatory backend server, requiring zero paid dependencies or external databases.

### Step 1: Push Code to GitHub
Ensure this codebase is committed and pushed to your GitHub repository:
```bash
git init
git add .
git commit -m "Initial portfolio commit for Mohidul Islam Sojib"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the sidebar, select **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your GitHub account and choose the repository.

### Step 3: Configure Build Settings
Fill in the deployment configuration:
- **Project Name:** `mohidul-islam-sojib` (or your preferred name)
- **Production Branch:** `main`
- **Framework Preset:** `Vite` (or `None`)
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Root Directory:** `/` (leave blank or default)

### Step 4: Deploy & Verify
1. Click **Save and Deploy**. Cloudflare Pages will execute `npm run build` and publish the `dist` directory.
2. The included `public/_redirects` rule automatically routes all SPA paths (`/about`, `/services`, `/portfolio`, `/contact`) to `/index.html` with status `200`, ensuring page refreshes work properly without 404 errors.
3. The included `public/_headers` rule serves production security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) and long-lived cache headers for immutable assets.

---

## ✏️ How to Edit Content

All personal bio details, skill items, service offerings, and portfolio projects are managed in a single centralized file:
- **File:** `src/data/portfolioData.ts`
- To update your phone number, email, or designation: modify the `PERSONAL_DATA` object.
- To add or modify services: update `SERVICES_LIST`.
- To add a new case study: add a new item to `PORTFOLIO_PROJECTS`.
- To swap the profile picture: replace the image path in `PERSONAL_DATA.portraitImage`.
