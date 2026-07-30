# Frontend Developer Portfolio Design Documentation

## 1. Overview
This is a minimalist, single page portfolio website for a Frontend Developer and Data Engineer built using React and styled with Tailwind CSS. It focuses on a sleek, dark theme aesthetic with smooth animations powered by GSAP.

## 2. Global Aesthetics
* Theme: Dark mode by default (Background: Black #000000, Text: Light Gray #fafafa, zinc 100).
* Typography: 
  * Headings and Display: Space Grotesk (for a modern, tech focused look).
  * Body: Inter (or system default sans serif for readability).
* Animations: Smooth page transitions, scroll triggered reveals, and a custom interactive cursor using GSAP.
* Scrollbar: Custom minimalist scrollbar (4px width, dark track, slightly lighter thumb).

## 3. Tech Stack
* Framework: React (Vite)
* Styling: Tailwind CSS (v4 setup in index.css)
* Animations: GSAP (@gsap/react)
* Icons: Lucide React

## 4. Component Architecture

### 4.1. Preloader (src/components/Preloader.jsx)
* Purpose: Initial loading screen and role selection.
* Design: 
  * Monochrome glow background effect.
  * Presents a choice: Frontend Developer vs Data Engineer (currently disabled or coming soon).
  * Minimalist buttons with hover effects (border changes, tracking expansion).
  * After selection, a Welcome sequence with a text reveal and a loading bar.

### 4.2. CustomCursor (src/components/CustomCursor.jsx)
* Purpose: Replaces the default browser cursor for a more integrated feel.
* Design: A small, hollow circle (border) that follows the mouse position, likely styled to blend with the dark theme.

### 4.3. Navbar (src/components/Navbar.jsx)
* Purpose: Navigation across the single page layout.
* Design: Fixed position, sticky at top or bottom depending on screen size, with links to sections: About, Skills, Projects, Contact. Language toggle (EN or ID).

### 4.4. Hero or Home (src/components/Hero.jsx and Home.jsx)
* Purpose: The main landing section after the preloader.
* Design: Likely features a large headline, a brief introduction, and possibly a profile image (src/assets/profile.jpg). Uses Space Grotesk for prominent text.

### 4.5. About (src/components/About.jsx)
* Purpose: Personal background and experience.
* Design: Text heavy section, clean layout, potentially highlighting key experiences (e.g. Revou image).

### 4.6. Skills (src/components/Skills.jsx)
* Purpose: Displays technical competencies.
* Design: Likely a grid or list of technologies, possibly categorized.

### 4.7. Projects (src/components/Projects.jsx)
* Purpose: Showcases portfolio pieces.
* Design: Cards or a grid layout featuring project images (ESS DASHBOARD, LMS, MATCHABIH, MONITORING KESTRA, NATURU, blueiy), descriptions, and links.

### 4.8. Contact (src/components/Contact.jsx)
* Purpose: Ways to reach out.
* Design: Links to social media (LinkedIn, GitHub) and a contact form or email address.

### 4.9. Footer (src/components/Footer.jsx)
* Purpose: End of page information.
* Design: Minimal copyright notice and perhaps repeated social links.

## 5. Assets
* profile.jpg: Main profile picture.
* whoareu.jpeg: Possibly a secondary or aesthetic image.
* Project Screenshots: Assorted PNG files showcasing past work.

## 6. Contexts
* LanguageContext.jsx: Handles internationalization (i18n) switching between English and Indonesian.
