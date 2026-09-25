# Matilda Söderhäll | Frontend Developer Portfolio

A responsive, single-page portfolio built to showcase my frontend development projects, skills, and background. The site focuses on clean UI/UX, accessibility, and modern CSS architecture without relying on heavy external libraries or routing.

[Live Site:](https://matildasoderhall.com/)


## Key Features

- Custom CSS Grid Architecture: Utilizes a precise 5-column by 12-row grid system for complex layout handling across mobile, tablet, and desktop viewports.

- Zero-Dependency Navigation: Features a custom-built mobile hamburger menu and sticky header with scroll-based visibility, built purely with React state and SCSS transitions.

- Smooth Anchor Scrolling: Navigates via semantic section IDs with scroll-behavior: smooth and optimized scroll-margin-top for a seamless single-page user experience.

- Accessible Design: Includes properly configured ARIA attributes, semantic HTML5 landmarks (<nav>, <main>, <header>), and screen-reader optimized image text.

- SEO & Open Graph Configured: Fully equipped with custom meta tags and Open Graph images for optimal social sharing.

## Tech Stack
<p align="left"> <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" /> <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS" /> <img src="https://img.shields.io/badge/prettier-%23192a32?style=for-the-badge&logo=prettier&logoColor=dc524a" alt="Prettier" /> <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" /> <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" /> <img src="https://img.shields.io/badge/PNPM-F69220?style=flat&logo=pnpm&logoColor=white" alt="PNPM" /> </p>

## 📦 Installation
To run this project locally, clone the repository and execute the following commands in your terminal:

1. **Install dependencies**

```bash
  pnpm install 
```

2. **Start development server**

```bash
  pnpm run dev
```

3. **Bundle the application for production**
```bash
  pnpm run build
```

## 📂 Project Structure

```text
.
└── app/
    ├── [src]/
    │   ├── [assets] # Images
    │   ├── [Components] # Smaller UI (ProjectCard, ProfileGraphic, Navigation, Decorations)
    │   ├── [data] # Json files with project data
    │   ├── [sections] # Views (Hero, Projects, About, Contact)
    │   └── [styles] # Design System (Tokens, Typography, Mixins)
    ├── App.tsx
    └── main.tsx
```
    


## ✍️ Authors

[@matildasoderhall](https://github.com/matildasoderhall)