# AgentFS Design System & Style Guide

## Table of Contents
1. [Philosophy](#philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Patterns](#patterns)
7. [Responsive Behavior](#responsive-behavior)

---

## Philosophy

**Aesthetic:** Clean, sharp, technical, editorial — "system diagram meets magazine layout."  
**Theme:** Light only. No dark mode toggle.  
**Style:** White/black/red-orange terminal-editorial hybrid.  
**Avoid:** Gradients, glassmorphism, pastels, rounded bubbly UI, playful illustrations, large color fills.

---

## Color System

All colors are defined as HSL CSS variables in `src/index.css` and mapped in `tailwind.config.ts`.

### Core Palette

| Token | HSL Value | Hex (approx) | Usage |
|---|---|---|---|
| `--background` | `0 0% 100%` | `#FFFFFF` | Page background |
| `--background-panel` | `0 0% 100%` | `#FFFFFF` | Panel/card backgrounds |
| `--background-panel-alt` | `0 0% 98%` | `#FAFAFA` | Alternate panel background |
| `--foreground` | `0 0% 0%` | `#000000` | Primary text, borders |
| `--foreground-muted` | `0 0% 27%` | `#444444` | Secondary/muted text |

### Accent Colors

| Token | HSL Value | Hex (approx) | Usage |
|---|---|---|---|
| `--primary` | `4 84% 55%` | `#E53935` | Red accent — trims, highlights, active states |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary backgrounds |
| `--secondary` | `24 100% 50%` | `#FF6A00` | Orange accent — secondary highlights |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on secondary backgrounds |
| `--accent` | `14 100% 55%` | `#FF4D2A` | Red-orange blend accent |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on accent backgrounds |
| `--warning` | `24 100% 50%` | `#FF6A00` | Warning indicators |
| `--destructive` | `4 84% 55%` | `#E53935` | Destructive/danger actions |

### Neutral Colors

| Token | HSL Value | Hex (approx) | Usage |
|---|---|---|---|
| `--muted` | `0 0% 96%` | `#F5F5F5` | Muted backgrounds |
| `--muted-foreground` | `0 0% 45%` | `#737373` | Muted/placeholder text |
| `--border` | `0 0% 90%` | `#E5E5E5` | Default borders, grid lines |
| `--border-bright` | `0 0% 75%` | `#BFBFBF` | Emphasized borders |
| `--input` | `0 0% 90%` | `#E5E5E5` | Input field borders |
| `--ring` | `4 84% 55%` | `#E53935` | Focus ring color |

### Color Usage Rules

- **Red/Orange accents are ONLY for:** underlines, arrows, dividers, small badges, hover indicators, timeline accents, diagram paths, active state indicators.
- **NEVER use accents as:** large background fills, full-width color blocks, or gradient washes.
- Always reference colors via Tailwind semantic tokens (`text-primary`, `bg-background`, `border-foreground`, etc.).
- **Never** write raw color values (`text-red-500`, `bg-black`) in components.

---

## Typography

### Font Families

| Role | Font | Tailwind Class | Weight |
|---|---|---|---|
| Headings | Inter | `font-sans` | 700 (bold) |
| Body | Inter | `font-sans` | 400, 500, 600 |
| Code/Terminal | JetBrains Mono | `font-mono` | 400, 500, 600 |

Loaded via Google Fonts in `src/index.css`:
```
Inter: 400, 500, 600, 700
JetBrains Mono: 400, 500, 600
```

### Type Scale

| Element | Size | Weight | Tracking | Transform | Class Example |
|---|---|---|---|---|---|
| Page Title (H1) | `text-2xl` – `text-3xl` | Bold (700) | Tight | — | `text-2xl font-bold tracking-tight` |
| Section Header | `text-sm` | Bold (700) | Wider | Uppercase | `text-sm font-bold uppercase tracking-wider` |
| Card Title | `text-sm` | Semibold (600) | — | — | `text-sm font-semibold` |
| Body Text | `text-sm` | Normal (400) | — | — | `text-sm` |
| Caption/Hint | `text-xs` | Normal/Medium | — | — | `text-xs text-foreground-muted` |
| KPI Value | `text-2xl` | Bold (700) | Tight | — | `text-2xl font-bold tracking-tight` |
| Badge/Label | `text-xs` or `text-[10px]` | Mono Medium | Wider | Uppercase | `text-xs font-mono uppercase tracking-wider` |

### Text Colors

| Purpose | Token | Tailwind Class |
|---|---|---|
| Primary text | `--foreground` | `text-foreground` |
| Muted/secondary | `--foreground-muted` | `text-foreground-muted` |
| On primary bg | `--primary-foreground` | `text-primary-foreground` |
| Accent text | `--primary` | `text-primary` |
| Placeholder | `--muted-foreground` | `text-muted-foreground` |

---

## Spacing & Layout

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius` | `0.25rem` (4px) | Very subtle rounding — sharp, editorial feel |
| `rounded-lg` | `var(--radius)` = 4px | Cards, panels |
| `rounded-md` | `calc(var(--radius) - 2px)` = 2px | Buttons, inputs |
| `rounded-sm` | `calc(var(--radius) - 4px)` = 0px | Badges, chips |

### Spacing Scale

Follow Tailwind's default spacing scale. Common patterns:
- **Page padding:** `p-3` (mobile) / `p-6` (desktop) via `p-3 lg:p-6`
- **Card padding:** `p-4`
- **Section gaps:** `gap-4` or `gap-6`
- **Inline gaps:** `gap-2` or `gap-3`
- **Max content width:** `max-w-[1660px]` centered with `mx-auto`

### Grid Patterns

- **KPI row:** `grid grid-cols-2 lg:grid-cols-4 gap-4`
- **Feature grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Two-column layout:** `grid grid-cols-1 lg:grid-cols-2 gap-6`

---

## Components

### Buttons

#### Primary Button
- **Background:** `bg-primary` (red)
- **Text:** `text-primary-foreground` (white)
- **Hover:** `hover:bg-primary/90`
- **Usage:** Main CTAs

#### Secondary Button
- **Background:** `bg-secondary` (orange)
- **Text:** `text-secondary-foreground` (white)
- **Hover:** `hover:bg-secondary/80`

#### Outline Button
- **Background:** `bg-background` (white)
- **Border:** `border border-input`
- **Text:** Default foreground
- **Hover:** `hover:bg-accent hover:text-accent-foreground`

#### Ghost Button
- **Background:** Transparent
- **Hover:** `hover:bg-accent hover:text-accent-foreground`
- **Usage:** Toolbar actions, sidebar items

#### Size Variants
| Size | Height | Padding |
|---|---|---|
| `default` | `h-10` | `px-4 py-2` |
| `sm` | `h-9` | `px-3` |
| `lg` | `h-11` | `px-8` |
| `icon` | `h-10 w-10` | — |

---

### Cards

#### Base Card (`<Card>`)
- White background, thin border
- Uses `bg-card border` tokens

#### ModulePanel
- **Border:** `border border-foreground` (black border — more prominent)
- **Header:** Uses `SectionHeader` component inside
- **Footer:** Optional, separated by `border-t border-border`
- **Padding:** `p-4`

#### KPICard
- **Border:** `border border-foreground`
- **Hover:** Bottom accent bar (red underline via `.card-accent-bar`)
- **Layout:** Title (uppercase, muted), large value, optional delta with trend icon
- **Delta colors:** Up = `text-primary`, Down = `text-destructive`, Flat = `text-foreground-muted`

#### ActionCard
- **Border:** `border border-foreground`
- **Hover:** Bottom accent bar + `hover:bg-muted/30`
- **Layout:** Icon + title/description, priority label, arrow icon
- **Priority colors:** High = `text-primary`, Medium = `text-secondary`, Low = `text-foreground-muted`

---

### StatusChip
- **Shape:** `rounded-sm` with colored dot indicator
- **Border:** `border-foreground`
- **Font:** `font-mono text-xs`
- **Dot colors by tone:**
  - `success` → `before:bg-green-500`
  - `warning` → `before:bg-warning`
  - `danger` → `before:bg-primary`
  - `info` → `before:bg-secondary`
  - `neutral` → `before:bg-foreground-muted`

---

### SectionHeader
- **Title:** `text-sm font-bold uppercase tracking-wider`
- **Subtitle:** `text-xs text-foreground-muted`
- **Icon:** `h-4 w-4 text-primary`
- **Divider:** `border-b border-border` below header
- **Optional action** slot on the right

---

### Inputs
- **Height:** `h-10`
- **Border:** `border border-input`
- **Focus:** `focus-visible:ring-2 focus-visible:ring-ring` (red ring)
- **Background:** `bg-background`
- **Placeholder:** `text-muted-foreground`

---

### Badges
- White background, black border
- Red/orange dot indicator via `.badge-dot` class
- `font-mono text-xs uppercase tracking-wider`

---

## Patterns

### CSS Utility Classes (defined in index.css)

| Class | Effect |
|---|---|
| `.bg-pixel-grid` | 32×32px grid background using border color |
| `.hero-arc` | Circular decorative arc with primary color border |
| `.terminal-light` | Terminal-style box with foreground border |
| `.accent-underline` | Red underline appears on hover (scaleX animation) |
| `.card-accent-bar` | Red bar at card bottom appears on hover |
| `.cursor-blink` | Blinking cursor animation (1s step) |
| `.step-number` | Circular numbered step indicator (primary bg) |
| `.badge-dot` | Dot indicator before badge text |

### Hover Effects
- **Cards:** Bottom red accent bar slides in (`transform: scaleX(0)` → `scaleX(1)`)
- **Links:** Red underline slides in on hover
- **Buttons:** Opacity reduction on primary, background change on ghost/outline
- **Action cards:** Subtle background tint + arrow shifts right

### Animations
| Name | Duration | Effect |
|---|---|---|
| `fade-in` | 0.5s | Fade in + slide up 10px |
| `slide-up` | 0.6s | Fade in + slide up 20px |
| `accordion-down/up` | 0.2s | Expand/collapse height |
| `cursor-blink` | 1s | Step-end opacity toggle |

---

## Responsive Behavior

### Breakpoints (Tailwind defaults)
| Breakpoint | Width | Usage |
|---|---|---|
| `sm` | 640px | Minor adjustments |
| `md` | 768px | Tablet layouts |
| `lg` | 1024px | Desktop — sidebar appears |
| `xl` | 1280px | Max container width |

### Navigation
- **Desktop (≥1024px):** Fixed slim sidebar (4.5rem wide), icon + label, vertical layout. Active state has red `border-primary` and muted background.
- **Mobile/Tablet (<1024px):** Bottom navigation bar with 7 items (Mission, Agents, Knowledge, Ops, Integrate, Security, Settings). Icons + small labels.

### Layout Structure
```
Desktop:                          Mobile/Tablet:
┌──────┬─────────────────┐       ┌─────────────────────┐
│      │ Header Bar      │       │ Header Bar (+ logo) │
│ Side │─────────────────│       │─────────────────────│
│ bar  │                 │       │                     │
│      │ Content         │       │ Content             │
│      │ (scrollable)    │       │ (scrollable)        │
│      │                 │       │                     │
│      │                 │       │─────────────────────│
└──────┴─────────────────┘       │ Bottom Nav          │
                                 └─────────────────────┘
```

### Header Bar
- **Height:** `h-12`
- **Border:** `border-b border-foreground`
- **Content:** Page title (bold) + subtitle (muted, hidden on small screens) | StatusChip
- **Mobile:** AgentFS icon visible (hidden on desktop)

### Scrolling
- Sidebar and header are **fixed** — only main content area scrolls.
- Mobile content has `pb-20` to clear bottom nav.
- Custom scrollbar: 6px wide, uses `border-bright` color.

---

## File Structure

| File | Purpose |
|---|---|
| `src/index.css` | CSS variables, base styles, utility classes |
| `tailwind.config.ts` | Tailwind theme extension, color mapping, animations |
| `src/components/ui/*` | shadcn/ui primitives (Button, Input, Card, etc.) |
| `src/components/dashboard/*` | Dashboard-specific components (KPICard, ModulePanel, etc.) |
| `components.json` | shadcn/ui configuration |

---

## Quick Reference: Do's and Don'ts

### ✅ Do
- Use semantic tokens (`text-primary`, `bg-background`, `border-foreground`)
- Keep borders sharp (2-4px radius max)
- Use uppercase + tracking for section headers
- Use JetBrains Mono for data/status values
- Keep accent colors small — trims, dots, underlines

### ❌ Don't
- Use raw Tailwind colors (`text-red-500`, `bg-gray-100`)
- Add large colored background blocks
- Use rounded-full on cards/panels
- Add gradients or glassmorphism
- Use playful illustrations or emojis in UI
- Implement dark mode
