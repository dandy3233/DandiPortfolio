# Dandi Takilu Kebede — Developer Portfolio

A modern, professional, premium, and fully responsive personal portfolio website built with **React.js (JSX)**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Live Preview & Running Locally

### Prerequisites
- Node.js (v18.x or v20.x+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/dandytakilu/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
Open `http://localhost:3000` (or the port shown in your terminal) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ Technology Stack
- **Framework:** React.js (`.jsx` components)
- **Bundler:** Vite
- **Styling:** Tailwind CSS (Custom Dark Palette & Utilities)
- **Routing:** React Router DOM
- **Icons:** React Icons (`react-icons/fi`, `react-icons/fa`)
- **Typography:** Inter & JetBrains Mono

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── Dandi_Takilu_CV.pdf        # Downloadable CV document
├── src/
│   ├── components/
│   │   ├── UI/
│   │   │   ├── Badge.jsx          # Reusable technology badge
│   │   │   └── SectionTitle.jsx   # Section heading & subtitle wrapper
│   │   ├── About.jsx              # About Me & Key Information cards
│   │   ├── CareerGoal.jsx         # Professional Career Goal statement
│   │   ├── Contact.jsx            # Validated Contact Form & Contact Info
│   │   ├── Education.jsx          # Education timeline from Guliso to Jigjiga Univ.
│   │   ├── Experience.jsx         # 6 practical development experience areas
│   │   ├── Footer.jsx             # Professional Footer & Copyright
│   │   ├── Hero.jsx               # Hero section with interactive code visual
│   │   ├── Navbar.jsx             # Sticky responsive navigation with mobile drawer
│   │   ├── ProjectCard.jsx        # Project card with modal handler
│   │   ├── Projects.jsx           # Filterable projects showcase
│   │   ├── Skills.jsx             # Categorized skills without fake 100% bars
│   │   ├── WhatIDo.jsx            # 4 service cards
│   │   └── WhyWorkWithMe.jsx      # 6 core developer pillars
│   ├── data/
│   │   ├── education.js           # Chronological educational journey
│   │   ├── experience.js          # Development experience areas
│   │   ├── navigation.js          # Navbar links
│   │   ├── personalInfo.js        # Contact, bio, location, degree info
│   │   ├── projects.js            # Real projects data (NextTech, GA Soft, BERI, Jigjiga, Odoo)
│   │   ├── services.js            # Service offerings
│   │   ├── skills.js              # Categorized technical competencies
│   │   └── whyWorkWithMe.js       # Core work pillars
│   ├── App.jsx                    # Main application layout & Router
│   ├── index.css                  # Global styles & Tailwind directives
│   └── main.jsx                   # React entry point
├── index.html                     # HTML5 template with SEO & Open Graph meta
├── package.json                   # Dependencies & build scripts
├── postcss.config.js              # PostCSS plugins
├── tailwind.config.js             # Tailwind CSS configuration
└── vite.config.js                 # Vite configuration
```

---

## ⚙️ Customization & Updating Content

All portfolio information is organized in clean data files located inside `src/data/`:

- **Personal Info & Socials:** Edit [`src/data/personalInfo.js`](file:///home/dandy/Documents/GitHub/portfolio/src/data/personalInfo.js) to update your GitHub, LinkedIn, Telegram URLs, phone, or email.
- **Projects & Live URLs:** Edit [`src/data/projects.js`](file:///home/dandy/Documents/GitHub/portfolio/src/data/projects.js) to insert live deployment links (`liveDemoUrl`) and repository links (`githubUrl`).
- **CV / Resume:** Replace the file in `public/Dandi_Takilu_CV.pdf` with your updated resume PDF.
- **Technical Skills:** Edit [`src/data/skills.js`](file:///home/dandy/Documents/GitHub/portfolio/src/data/skills.js) to add or modify skill tags.

---

## 📄 License & Attribution
© 2026 Dandi Takilu Kebede. All Rights Reserved.
