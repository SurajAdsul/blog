# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production + generate RSS feeds
npm run lint         # Run ESLint
npm run generate-rss # Regenerate RSS/Atom/JSON feeds manually
```

No test suite is configured.

## Architecture

This is a **Next.js 15 static export blog** (`output: 'export'` in `next.config.mjs`). All pages are pre-rendered at build time — there is no Node.js runtime in production.

### Content System

Content lives in `content/` (outside `src/`):

- `content/blog/` — Markdown files with YAML frontmatter
- `content/snippets/` — Markdown files for code snippets
- `content/prompts/` — `.txt` files for AI prompts
- `content/projects/data.js` and `content/resources/data.js` — Static JS arrays

**Blog post frontmatter:**
```yaml
---
title: "Post Title"
date: "2025-11-01"
description: "Short excerpt shown in listings"
tags: ["tag1", "tag2"]
image: "/optional-og-image.png"       # optional
lastModified: "2025-12-01"            # optional
---
```

File names become URL slugs (e.g., `my-post.md` → `/blog/my-post`).

### Utility Layer

`src/utils/markdown.js` handles all file I/O for blog/snippets: reading files, parsing frontmatter via `gray-matter`, sorting by date. `src/utils/prompts.js` does the same for prompts. These are the only places that use `fs` — everything else is pure rendering.

### Routing

App Router in `src/app/`. Dynamic routes use `generateStaticParams()` to pre-build all pages:

- `/blog/[slug]` — reads from `content/blog/`
- `/snippets/[slug]` — reads from `content/snippets/`
- `/prompts/[slug]` and `/prompts/categories/[category]` — reads from `content/prompts/`

### Markdown Rendering

Markdown is rendered client-side via `react-markdown` in `src/components/ClientMarkdownContent.js` (marked `'use client'`). Code blocks use `react-syntax-highlighter` with Prism/Dracula theme. The `CodeBlock.js` component is dynamically imported to avoid SSR issues with syntax highlighting. Custom markdown styles are in `src/styles/markdown.css`.

### Dark Mode

Implemented via localStorage + Tailwind `dark:` utilities. A script in `src/app/layout.js` applies the theme before hydration to prevent flash. The `Navbar.js` toggle writes to localStorage.

### Path Aliases

`@/` maps to `src/` (configured in `jsconfig.json`).

## Browser Automation

Use `agent-browser` for web automation. Run `agent-browser --help` for all commands.

Core workflow:
1. `agent-browser open <url>` - Navigate to page
2. `agent-browser snapshot -i` - Get interactive elements with refs (@e1, @e2)
3. `agent-browser click @e1` / `fill @e2 "text"` - Interact using refs
4. Re-snapshot after page changes

### RSS Feeds

`scripts/generate-rss.mjs` generates `public/rss/feed.xml`, `atom.xml`, and `feed.json` at build time. This runs automatically as part of `npm run build`.
