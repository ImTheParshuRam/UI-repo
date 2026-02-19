# CabBook Design System

## Overview
The CabBook design system provides a cohesive, modern visual language based on premium colors, smooth interactions, and responsive layouts.

## Color Palette

### Primary Colors

#### Indigo (Primary)
- **Primary**: #6366f1 - Main brand color for buttons and accents
- **Primary Light**: #818cf8 - Hover states and lighter applications
- **Primary Dark**: #4f46e5 - Active states and darker accents
- **Primary Glow**: rgba(99, 102, 241, 0.3) - Glowing effects

#### Purple (Secondary)
- **Secondary**: #8b5cf6 - Complementary brand color
- **Secondary Light**: #a78bfa - Lighter variant
- **Secondary Dark**: #7c3aed - Darker variant
- **Secondary Glow**: rgba(139, 92, 246, 0.3) - Glow effects

#### Pink (Accent)
- **Accent**: #ec4899 - Highlight and attention
- **Accent Glow**: rgba(236, 72, 153, 0.2) - Soft glow

### Neutral Colors

#### Backgrounds
- **Dark**: #0f172a - Main background
- **Darker**: #020617 - Extra dark background
- **Glass**: rgba(15, 23, 42, 0.8) - Transparent background
- **Card**: rgba(30, 41, 59, 0.5) - Card backgrounds
- **Card Light**: rgba(51, 65, 85, 0.3) - Light card variant

#### Text
- **Main**: #f8fafc - Primary text (almost white)
- **Muted**: #94a3b8 - Secondary text (slate gray)
- **Highlight**: #e2e8f0 - Highlighted text
- **Dim**: #64748b - Dimmed text

## Typography

### Font Family
- Primary: Outfit
- Fallback: Inter
- System Stack: system-ui, -apple-system, sans-serif

### Heading Styles

#### H1
- Font Size: 2.5rem
- Font Weight: 800
- Line Height: 1.2
- Letter Spacing: -0.03em
- Color: var(--text-main)

#### H2
- Font Size: 2rem
- Font Weight: 800
- Line Height: 1.3
- Letter Spacing: -0.02em
- Color: var(--text-main)

#### H3
- Font Size: 1.5rem
- Font Weight: 700
- Letter Spacing: -0.01em
- Color: var(--text-main)

#### H4
- Font Size: 1.2rem
- Font Weight: 700
- Color: var(--text-main)

### Body Text
- Font Size: 0.95rem - 1rem
- Font Weight: 400-500
- Line Height: 1.6
- Color: var(--text-muted)

## Component Styles

### Buttons

#### Primary Button
```css
Background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)
Color: white
Padding: 12px 24px
Border Radius: 10px
Font Weight: 700
Box Shadow: 0 4px 15px rgba(99, 102, 241, 0.3)
```

**Hover State**
- Transform: translateY(-2px)
- Box Shadow: 0 8px 25px rgba(99, 102, 241, 0.4)
- Background: gradient shift

**Active State**
- Transform: translateY(0)
- Box Shadow: 0 2px 8px rgba(99, 102, 241, 0.2)

#### Secondary Button
```css
Background: rgba(99, 102, 241, 0.1)
Border: 1px solid rgba(99, 102, 241, 0.3)
Color: var(--text-main)
```

### Cards

#### Glass Card
```css
Background: var(--bg-card)
Backdrop Filter: blur(12px)
Border: var(--glass-border)
Border Radius: 16px
Transition: all 0.3s ease
```

**Hover State**
- Transform: translateY(-8px)
- Box Shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5)
- Background: rgba(30, 41, 59, 0.6)

#### Feature Card
```css
Padding: 30px
Border Radius: 16px
Background: var(--bg-card)
Border: 1px solid rgba(255, 255, 255, 0.05)
Position: relative (for layering)
```

### Input Elements

#### Text Input
```css
Background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.08))
Border: 1.5px solid rgba(99, 102, 241, 0.25)
Color: white
Padding: 11px 14px
Border Radius: 10px
Font Size: 14px
```

**Focus State**
- Background: lighter gradient
- Border Color: rgba(99, 102, 241, 0.5)
- Box Shadow: 0 0 0 3px rgba(99, 102, 241, 0.1), 0 4px 12px rgba(99, 102, 241, 0.15)

## Spacing Scale

```
4px   = 0.25rem (xs)
8px   = 0.5rem  (sm)
12px  = 0.75rem (md)
16px  = 1rem    (lg)
24px  = 1.5rem  (xl)
32px  = 2rem    (2xl)
40px  = 2.5rem  (3xl)
```

## Border & Effects

### Glass Effect
- Backdrop Filter: blur(20px) for nav, blur(16px) for panels
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Background: semi-transparent with overlay

### Borders
- Subtle: 1px solid rgba(99, 102, 241, 0.2)
- Light: 1px solid rgba(255, 255, 255, 0.05)
- Standard: 1px solid rgba(255, 255, 255, 0.1)

### Shadow System

#### Small Shadow
```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)
```

#### Medium Shadow
```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2)
```

#### Large Shadow
```css
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3)
```

#### Glow Effect
```css
box-shadow: 0 0 20px rgba(99, 102, 241, 0.3)
```

## Animations & Transitions

### Easing Functions
- **Fast**: cubic-bezier(0.34, 1.56, 0.64, 1) - 0.2s
- **Smooth**: cubic-bezier(0.34, 1.56, 0.64, 1) - 0.3s
- **Bounce**: Uses ease-out for springy feel

### Animation Types

#### Slide In
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
Duration: 0.4s
```

#### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Duration: 0.5s
```

#### Float
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}
Duration: 6-8s
```

#### Bounce
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
Duration: 2s
```

## Responsive Design

### Breakpoints
- **Mobile**: up to 480px
- **Tablet**: 481px - 767px
- **Desktop**: 768px - 1199px
- **Large Desktop**: 1200px+

### Responsive Utilities

#### Mobile First
```css
/* Base styles for mobile */
.component {
  /* mobile styles */
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    /* tablet styles */
  }
}

/* Desktop and up */
@media (min-width: 1200px) {
  .component {
    /* desktop styles */
  }
}
```

## Accessibility Guidelines

### Color Contrast
- Main text on background: > 4.5:1 ratio
- Body text: 7:1 or higher
- Interactive elements: 3:1 minimum

### Focus States
- Clear focus indicators on all interactive elements
- Focus color: Indigo (#6366f1)
- Focus outline: 2px solid

### Typography
- Minimum font size for body: 14px
- Line height minimum: 1.5
- Maximum line length: 80 characters

## Component Library

### Card Variants
1. **Glass Card**: Semi-transparent with backdrop blur
2. **Feature Card**: Solid background with gradient borders
3. **Stat Card**: Centered with large numbers
4. **Testimonial Card**: With avatar and rating

### Button Variants
1. **Primary**: Full gradient background
2. **Secondary**: Subtle background with border
3. **Ghost**: Transparent with border only
4. **Icon Button**: Square with icon only

### Layout Components
1. **Grid**: 2-column, 3-column, auto-fit
2. **Flex**: Center, between, column variations
3. **Stack**: Horizontal and vertical spacing

## Usage Examples

### Creating a New Component
```css
.my-component {
  background: var(--bg-card);
  border: var(--glass-border);
  border-radius: 16px;
  padding: 24px;
  transition: all var(--transition-smooth);
}

.my-component:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

### Applying Gradients
```css
.gradient-text {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Animation Application
```css
.animated-element {
  animation: slideIn var(--transition-smooth);
  animation-delay: 0.2s;
}
```

## Dark Mode Considerations

The design system is built for dark mode with:
- High contrast text on dark backgrounds
- Subtle borders and separators
- Glow effects for emphasis
- No harsh white backgrounds

## Performance Tips

1. Use CSS variables for easy theming
2. Leverage GPU acceleration with `will-change` for animations
3. Use backdrop-filter judiciously (performance impact)
4. Optimize images for responsive display
5. Minimize repaints with transform and opacity

## Extending the System

To add new colors:
1. Define in `:root` in `index.css`
2. Follow naming convention: `--color-name` or `--color-name-variant`
3. Create glow variant if applicable
4. Update component styles to use new variables

## Reference

- **Primary Documentation**: See `index.css` for all CSS variables
- **Component Showcase**: Visit demo page at `/demo`
- **AI Assistant Demo**: Click 💬 button for interactive chat
