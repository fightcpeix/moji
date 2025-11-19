# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using React 19 and TypeScript. The project is named "moji" and uses the App Router architecture.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
- Uses Next.js with Turbopack for faster builds and hot module replacement
- Runs on http://localhost:3000
- Changes to files auto-refresh the browser

### Building for Production
```bash
npm run build
```
- Creates an optimized production build using Turbopack

### Starting Production Server
```bash
npm start
```
- Runs the production build locally

### Linting
```bash
npm run lint
```
- Runs ESLint to check code quality
- Uses Next.js ESLint config with TypeScript support

## Tech Stack

### Core Framework
- **Next.js 15.5.2** with App Router (`src/app/` directory)
- **React 19.1.0** with React DOM 19.1.0
- **TypeScript 5** with strict mode enabled
- **Turbopack** enabled for both dev and build (faster than webpack)

### Styling
- **Tailwind CSS 4.1.6** (latest version with new features)
  - PostCSS plugin: `@tailwindcss/postcss`
  - Typography plugin: `@tailwindcss/typography`
  - Configured via `@theme inline` in `globals.css` (Tailwind 4 approach, no separate config file)
  - Uses CSS custom properties for theming (`--background`, `--foreground`)
- **Styled Components 6.1.17** for CSS-in-JS
- **Emotion** (`@emotion/cache`, `@emotion/styled`) for additional CSS-in-JS
- **Sass** available for SCSS/Sass files

### UI Libraries
- **Material-UI (MUI) 7.1.0**
  - `@mui/material` - Core components
  - `@mui/icons-material` - Material Design icons
  - `@mui/material-nextjs` - Next.js integration
- **Tabler Icons React 3.34.1** - Additional icon set
- **Lucide React 0.544.0** - Another icon library
- **Embla Carousel 8.6.0** with autoplay plugin

### Utilities
- **cheerio 1.1.2** - Server-side HTML parsing
- **copy-to-clipboard 3.3.3** - Clipboard utilities
- **sharp 0.34.1** - Image optimization (Next.js uses this internally)

### Code Quality
- **ESLint 8** with:
  - `eslint-config-next` - Next.js recommended config
  - `eslint-config-airbnb-base` and `eslint-config-airbnb-typescript` - Airbnb style guide
  - `eslint-config-prettier` - Prettier integration
  - TypeScript ESLint parser and plugin
  - React, React Hooks, JSX a11y, and import plugins
  - `eslint-plugin-unused-imports` - Remove unused imports
- **Prettier 2.7.1** for code formatting

## Project Structure

```
/src
  /app                    # Next.js App Router
    layout.tsx           # Root layout (Geist fonts, metadata)
    page.tsx             # Home page
    globals.css          # Global styles with Tailwind imports
/public                  # Static assets (SVGs, images)
```

### Path Aliases
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Example: `import Component from '@/components/Component'`

## Architecture Notes

### App Router
- Uses Next.js 15 App Router (not Pages Router)
- All routes defined in `src/app/` directory
- Server Components by default (use `'use client'` for client components)

### Fonts
- Uses `next/font/google` for optimized font loading
- Geist Sans and Geist Mono fonts are configured in layout
- Fonts exposed via CSS variables: `--font-geist-sans`, `--font-geist-mono`

### Styling System
- **Primary**: Tailwind CSS 4 with inline theme configuration
- **Secondary**: Multiple CSS-in-JS options (Styled Components, Emotion, MUI)
- Dark mode: Uses `prefers-color-scheme` media query
- CSS variables for theming in `globals.css`

### TypeScript Configuration
- Strict mode enabled
- Module resolution: `bundler` (Next.js 15 default)
- Target: ES2017
- JSX: `preserve` (Next.js handles transformation)

## Important Notes

### Tailwind CSS 4
This project uses Tailwind CSS 4, which has a different configuration approach:
- No `tailwind.config.js` file
- Theme configured via `@theme inline` in CSS files
- Uses `@tailwindcss/postcss` plugin instead of separate Tailwind PostCSS plugin

### Multiple UI Libraries
The project has MUI, styled-components, and Emotion installed simultaneously. Be mindful of:
- Consistent styling approach within feature areas
- Potential bundle size implications
- Server/client component boundaries when using CSS-in-JS

### Turbopack
Both `dev` and `build` scripts use the `--turbopack` flag. This is a Next.js experimental feature that's more stable in Next.js 15 but may have different behavior than webpack.