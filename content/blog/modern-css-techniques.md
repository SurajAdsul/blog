---
title: "Modern CSS Techniques for Better Web Design"
date: "2024-03-23"
description: "Explore modern CSS features and techniques that can enhance your web design, including CSS Grid, Custom Properties, and Container Queries."
tags: ["css", "web-design", "frontend"]
---

# Modern CSS Techniques for Better Web Design

CSS has evolved significantly in recent years. Let's explore some modern techniques that can improve your web development workflow.

## CSS Custom Properties (Variables)

Custom properties provide dynamic styling capabilities:

```css
:root {
  --primary-color: #2dd4bf;
  --spacing-unit: 1rem;
  --border-radius: 0.5rem;
}

.card {
  background: var(--primary-color);
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #14b8a6;
  }
}
```

## CSS Grid Layout

Grid provides powerful two-dimensional layouts:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.grid-item {
  padding: 1rem;
  background: #f4f4f5;
  border-radius: 0.5rem;
}
```

## Container Queries

Container queries allow for component-based responsive design:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
}
```

## Modern Selectors

New selectors provide more precise targeting:

```css
/* Select all paragraphs that are direct siblings */
p:has(+ p) {
  margin-bottom: 0.5em;
}

/* Style based on parent state */
.card:has(:hover) {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Select empty elements */
section:empty {
  display: none;
}
```

## Scroll Snap

Create smooth scrolling experiences:

```css
.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
}

.scroll-item {
  scroll-snap-align: start;
  flex: 0 0 100%;
}
```

## Animations with CSS Properties

Modern CSS animations using custom properties:

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.gradient-border {
  --angle: 0deg;
  border: 2px solid;
  border-image: linear-gradient(var(--angle), #2dd4bf, #60a5fa) 1;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}
```

## Logical Properties

Write more maintainable internationalized CSS:

```css
.card {
  margin-block: 1rem;
  padding-inline: 2rem;
  border-inline-start: 2px solid var(--primary-color);
}
```

These modern CSS features can significantly improve your development workflow and create better user experiences. Remember to check browser compatibility when using newer features! 