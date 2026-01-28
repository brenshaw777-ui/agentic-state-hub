
# Color Scheme Update: Warm Amber/Gold Terminal Aesthetic

## Overview
Transform the current neon green/cyan color scheme to a warm amber/gold terminal aesthetic reminiscent of vintage CRT monitors. This gives the site a distinctive, premium look that stands out from typical developer tool websites.

## New Color Palette

| Role | Current | New | HSL Value |
|------|---------|-----|-----------|
| **Primary** | Phosphor Green (#3CFF8F) | Amber Gold (#FFB800) | 43 100% 50% |
| **Secondary** | Electric Cyan (#00D9FF) | Coral Orange (#FF6B35) | 16 100% 60% |
| **Accent** | Violet (#8B5CFF) | Warm Rose (#FF4D6D) | 350 100% 65% |
| **Ring/Focus** | Green | Amber Gold | 43 100% 50% |
| **Warning** | Yellow (#FFCC00) | Keep same | 45 100% 50% |

## Visual Preview
The amber primary creates a warm "phosphor glow" effect like old terminals, while coral orange provides a complementary secondary that feels cohesive but distinct.

---

## Technical Changes

### 1. Update CSS Variables (`src/index.css`)

Update the `:root` color definitions:

```css
/* Primary - Amber Gold (warm terminal phosphor) */
--primary: 43 100% 50%;
--primary-foreground: 220 50% 4%;
--primary-glow: 43 100% 50% / 0.3;

/* Secondary - Coral Orange */
--secondary: 16 100% 60%;
--secondary-foreground: 220 50% 4%;
--secondary-glow: 16 100% 60% / 0.2;

/* Accent - Warm Rose (replaces violet) */
--accent: 350 100% 65%;
--accent-foreground: 220 20% 93%;
--accent-glow: 350 100% 65% / 0.2;

/* Ring - Match primary amber */
--ring: 43 100% 50%;

/* Sidebar colors (for compatibility) */
--sidebar-primary: 43 100% 50%;
--sidebar-ring: 43 100% 50%;
```

### 2. Update Tailwind Keyframes (`tailwind.config.ts`)

Update the glow animation to use the new amber color:

```typescript
glow: {
  "0%, 100%": { boxShadow: "0 0 20px hsl(43 100% 50% / 0.3)" },
  "50%": { boxShadow: "0 0 30px hsl(43 100% 50% / 0.5)" },
},
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Update all primary, secondary, accent, and ring CSS variables |
| `tailwind.config.ts` | Update the glow keyframe animation colors |

## Result
- All components using `text-primary`, `bg-primary`, `border-primary`, etc. will automatically pick up the new amber color
- Secondary elements will use the coral orange
- Accent elements will use the warm rose
- Glow effects and terminal styling will have a warm, distinctive appearance
- No component code changes needed since colors are referenced via CSS variables
