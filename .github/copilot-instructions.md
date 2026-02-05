# Copilot Instructions for Nathan Kinda Portfolio

## Project Overview

Personal portfolio website built with **Gatsby.js 3.x** and **React 17**. Features an interactive 3D avatar (Three.js), animated text effects, and a blog section. Deployed via Vercel.

## Architecture

```
src/
├── components/     # Reusable React components (folder-per-component pattern)
├── data/           # Static content (blog posts, career info)
├── pages/          # Gatsby file-based routing
│   └── blog/       # Individual blog post pages (manually authored)
├── styles/         # Global SCSS + page-specific stylesheets
└── utils/          # Helpers (theme management)
```

### Key Patterns

- **Component Structure**: Each component lives in its own folder with `index.js` + optional `styles.scss` (see [Avatar](src/components/Avatar/index.js), [Header](src/components/Header/index.js))
- **Layout Wrapper**: Global layout via `gatsby-browser.js` wrapping all pages with [Layout](src/components/Layout/index.js) component
- **Context for State**: Use `State` context from Layout for modals, copy feedback, and theme (`React.useContext(State)`)
- **Theme System**: Dark/light theme via CSS variables defined in [theme.js](src/utils/theme.js), persisted to localStorage

## Styling Guidelines

- **Hybrid approach**: Tailwind CSS utility classes + SCSS for complex styling
- **CSS Variables**: Use `var(--tw-text-gray-primary)`, `var(--bg-primary)`, etc. for theme-aware colors
- **Global styles**: Import `../styles/global.scss` in page components
- **Font**: Fira Code monospace throughout

## Development Commands

```bash
npm run dev      # Start dev server at localhost:8000
npm run build    # Clean + production build
npm run serve    # Serve production build locally
npm run clean    # Clear Gatsby cache (use when seeing stale data)
```

## Blog Posts

Blog articles are **manually created JSX pages** in `src/pages/blog/`. Each post:
1. Uses the naming pattern `{id}-{slug}.js` (e.g., `002-first-contact-with-code.js`)
2. Must be registered in [src/data/blog.js](src/data/blog.js) with matching `link` path
3. Follows the structure: Loader → Header → article content → Note footer

## Key Components

| Component | Purpose |
|-----------|---------|
| `Avatar` | Three.js 3D model with GLTF loader, mouse-following head, theme-responsive lighting |
| `ScrambleText` | Animated text reveal effect with customizable duration/delay |
| `Loader` | Page transition overlay with configurable duration |
| `Cursor` | Custom cursor component |
| `Shortcut` | Keyboard shortcut hint display |

## Important Notes

- **Node 18+** required (see `engines` in package.json)
- **SSR Safe**: Always guard browser APIs with `typeof window !== "undefined"` checks
- **Icon Imports**: Use `@react-icons/all-files` with specific imports to minimize bundle size (e.g., `import { FiCopy } from "@react-icons/all-files/fi/FiCopy"`)
