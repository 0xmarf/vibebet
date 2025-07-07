# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VibeBet is a Next.js 15 application using the App Router architecture with TypeScript, Tailwind CSS, and shadcn/ui for styling.

## Key Commands

- `npm run dev` - Start development server with Turbopack on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Tech Stack
- **Next.js 15.3.5** with App Router (not Pages Router)
- **React 19.0.0** with TypeScript
- **Tailwind CSS** with shadcn/ui theming
- **Turbopack** for development builds

### Directory Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components (uses shadcn/ui)
- `lib/` - Utilities including `cn()` helper for className merging
- `public/` - Static assets

### Key Configuration Files
- `components.json` - shadcn/ui component configuration
- `tailwind.config.js` - Extends Tailwind with shadcn/ui theme
- `tsconfig.json` - TypeScript with strict mode enabled

## Development Notes

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

### Styling Approach
- Use Tailwind CSS classes for styling
- Use `cn()` utility from `lib/utils.ts` to merge conditional classes:
  ```typescript
  import { cn } from "@/lib/utils"
  cn("base-class", conditionalClass && "conditional-class")
  ```

### TypeScript
The project uses strict TypeScript. Ensure all components and functions are properly typed.