# Style Guide — Pavilion Configurator

A minimalist, Apple-inspired design system. Clean, calm, and focused — the interface should feel like a precision tool, not a cluttered workshop.

## Design Philosophy

- **Clarity over decoration** — Every element earns its place. Remove anything that does not help the user design or build.
- **Content first** — The 3D canvas is the hero. Sidebars support it; they never compete with it.
- **Quiet confidence** — Subtle shadows, soft borders, and generous whitespace convey quality without shouting.
- **Consistency** — One spacing scale, one type scale, one interaction language throughout.

## Color Palette

### Base

| Token            | Value     | Usage                              |
|------------------|-----------|------------------------------------|
| `--bg-primary`   | `#FFFFFF` | Main background, canvas surround   |
| `--bg-secondary` | `#F5F5F7` | Sidebars, panels, subtle sections  |
| `--bg-tertiary`  | `#E8E8ED` | Hover states, dividers, inputs     |
| `--bg-elevated`  | `#FFFFFF` | Cards, modals, floating elements   |

### Text

| Token              | Value     | Usage                    |
|--------------------|-----------|--------------------------|
| `--text-primary`   | `#1D1D1F` | Headings, body, labels   |
| `--text-secondary` | `#6E6E73` | Descriptions, metadata   |
| `--text-tertiary`  | `#AEAEB2` | Placeholders, disabled   |

### Accent & Interactive

| Token              | Value     | Usage                              |
|--------------------|-----------|------------------------------------|
| `--accent`         | `#0071E3` | Primary actions, links, selection  |
| `--accent-hover`   | `#0077ED` | Hover on primary actions           |
| `--accent-subtle`  | `#E8F2FF` | Selected item backgrounds          |
| `--border`         | `#D2D2D7` | Dividers, input borders            |
| `--border-focus`   | `#0071E3` | Focus rings                        |

### Semantic

| Token       | Value     | Usage                    |
|-------------|-----------|--------------------------|
| `--success` | `#34C759` | Valid placement, saved   |
| `--warning` | `#FF9500` | Caution, span warnings   |
| `--error`   | `#FF3B30` | Invalid placement, errors|

## Typography

Use system UI fonts for native feel and performance.

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

### Scale

| Role        | Size   | Weight | Line Height | Letter Spacing |
|-------------|--------|--------|-------------|----------------|
| Title       | 22px   | 600    | 1.2         | -0.02em        |
| Heading     | 17px   | 600    | 1.3         | -0.01em        |
| Body        | 15px   | 400    | 1.5         | 0              |
| Caption     | 13px   | 400    | 1.4         | 0              |
| Label       | 11px   | 500    | 1.3         | 0.06em (uppercase optional) |

- Prefer sentence case over ALL CAPS except for small utility labels.
- Limit to two weights per view: regular (400) and semibold (600).

## Spacing

Use an 4px base grid.

| Token  | Value |
|--------|-------|
| `xs`   | 4px   |
| `sm`   | 8px   |
| `md`   | 16px  |
| `lg`   | 24px  |
| `xl`   | 32px  |
| `2xl`  | 48px  |

- Sidebar internal padding: `md` (16px)
- Gap between tool groups: `lg` (24px)
- Canvas margin from sidebars: none — sidebars border the canvas directly

## Layout

### Sidebars

- **Width:** 280px (left toolbox), 300px (right materials panel)
- **Background:** `--bg-secondary`
- **Border:** 1px solid `--border` on the edge facing the canvas
- **No heavy box shadows** — flat separation via background contrast and hairline borders

### 3D Canvas

- **Background:** `--bg-primary` or a very subtle gradient (`#FAFAFA` → `#FFFFFF`)
- Full height between sidebars
- Minimal chrome — no thick toolbars over the viewport

### Responsive (future)

- On narrow screens, collapse sidebars into slide-over panels
- Canvas remains full-width when a sidebar is hidden

## Components

### Buttons

**Primary**
- Background: `--accent`
- Text: white
- Border-radius: 8px
- Padding: 8px 16px
- No gradient, no heavy shadow

**Secondary**
- Background: transparent
- Border: 1px solid `--border`
- Text: `--text-primary`
- Border-radius: 8px

**Ghost / Icon**
- No border, no background
- Hover: `--bg-tertiary`
- Border-radius: 6px

### Inputs

- Background: `--bg-primary`
- Border: 1px solid `--border`
- Border-radius: 8px
- Padding: 8px 12px
- Focus: 2px ring `--border-focus`, no default browser outline

### Tool Items (Left Sidebar)

- Row height: 40px
- Icon + label, left-aligned
- Hover: `--bg-tertiary`
- Active/selected: `--accent-subtle` background, `--accent` icon or text
- Group headers: `--text-secondary`, 13px, optional subtle divider below

### Cards (Right Sidebar — Material Rows)

- Background: `--bg-elevated`
- Border: 1px solid `--border`
- Border-radius: 10px
- Padding: `md`
- Subtle shadow: `0 1px 3px rgba(0, 0, 0, 0.04)`

### Dividers

- 1px solid `--border`
- Full width within container
- Generous vertical margin (`md`)

## Icons

- Simple, line-style icons (SF Symbols aesthetic or Lucide)
- Size: 18–20px in toolbars, 16px inline
- Stroke width: 1.5px
- Color: `--text-secondary` default, `--accent` when active

## 3D Canvas Styling

- Model materials: muted, realistic tones (natural wood, matte metal) — not saturated or cartoonish
- Grid/ground plane: very light gray (`#F0F0F0`), subtle
- Selection highlight: `--accent` outline or soft glow, not harsh neon
- Bounding box: dashed `--border` line or thin `--accent` wireframe
- Environment: soft ambient lighting, no dramatic shadows in the UI chrome

## Motion

- Keep animations short and purposeful
- Duration: 150–250ms
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` (ease-out feel)
- Use for: sidebar transitions, panel expand/collapse, selection feedback
- Avoid: bouncy springs, parallax, decorative motion

## Shadows

Use sparingly. Prefer borders and background shifts.

| Level    | Value                              | Usage              |
|----------|------------------------------------|--------------------|
| Subtle   | `0 1px 3px rgba(0,0,0,0.04)`       | Cards, dropdowns   |
| Elevated | `0 4px 12px rgba(0,0,0,0.08)`      | Modals only        |

## Do / Don't

**Do**
- Use whitespace generously
- Keep the canvas unobstructed
- Use one accent color consistently
- Make touch targets at least 40×40px
- Show material info in scannable lists

**Don't**
- Use gradients on buttons or backgrounds (except very subtle canvas backdrop)
- Add decorative textures or patterns
- Use more than one accent hue per view
- Cram the sidebars — scroll internally if needed
- Use bold borders thicker than 1px except for focus rings

## Reference Tone

Think: Apple Store product page, macOS System Settings, Figma's default light theme — bright, airy, and precise. The builder should feel calm and in control, not overwhelmed by options.
