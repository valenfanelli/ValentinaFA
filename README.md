# Valentina Fanelli Addiechi — Portfolio

Personal portfolio website showcasing my education, projects, and tech skills. Built with React and fully bilingual (Spanish / English).

## Live Site

Deployed on Netlify: [valentinafanelli.netlify.app](https://valentinafanelli.netlify.app) *(update with your actual URL)*

## Features

- **Bilingual**: Full Spanish and English support with instant language switching (i18next)
- **Responsive design**: Adapts to desktop, tablet, and mobile with a collapsible hamburger menu
- **Auto-hide navbar**: Navigation bar hides on scroll down and reappears on scroll up
- **Scroll reveal animations**: Sections fade in as you scroll through the page
- **Typewriter effect**: Animated name on the hero section
- **Bento-style education grid**: Featured degree card + grid layout for courses and certifications
- **Project showcase**: Cards linking to live projects and GitHub repos
- **Technology cloud**: Visual display of skills and tools
- **Contact section**: Links to LinkedIn, GitHub, and email

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React, Vite, JavaScript |
| Styling | CSS, Bootstrap |
| i18n | i18next, react-i18next |
| Icons | Font Awesome, custom SVGs |
| Animations | CSS transitions, Typewriter Effect |
| Deployment | Netlify |

## Project Structure

```
frontend/
├── src/
│   ├── componentes/
│   │   ├── Cabecera.jsx        # Hero section with typewriter
│   │   ├── NavBar.jsx          # Responsive navbar with scroll-hide
│   │   ├── Language.jsx        # Language toggle (ES/EN)
│   │   ├── Perfil.jsx          # About me section
│   │   ├── Educacion.jsx       # Education bento grid
│   │   ├── Proyectos.jsx       # Project cards
│   │   ├── Tecnologias.jsx     # Technology cloud
│   │   ├── Contacto.jsx        # Contact info
│   │   ├── Animacion.jsx       # Background animation
│   │   └── i18n.js             # i18next configuration
│   ├── locales/
│   │   ├── en/translation.json # English content
│   │   └── es/translation.json # Spanish content
│   ├── img/                    # Images and icons
│   ├── App.jsx                 # Main app with routing
│   ├── App.css                 # All styles
│   └── main.jsx                # Entry point
```

## Running Locally

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Backend (separate branch)

A Spring Boot + PostgreSQL backend implementation is available on the **`backend`** branch. It provides a REST API with bilingual CRUD operations for education and project data. See [BACKEND_DOCUMENTATION.md](BACKEND_DOCUMENTATION.md) for details.

The production frontend uses static JSON files for data and does not require the backend.

## Author

**Valentina Fanelli Addiechi**
- [LinkedIn](https://linkedin.com/in/valentinafanelliaddiechi)
- [GitHub](https://github.com/valenfanelli)
- vfanelliaddiechi@gmail.com
