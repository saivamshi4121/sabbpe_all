# Interactive Layered Service UI Documentation

## Overview

An enterprise-grade interactive layered UI system built with **Framer Motion** and **Next.js**, featuring smooth 3D animations, premium visual hierarchy, and a seamless multi-service navigation experience. Only one service layer is active at a time, with backward and forward animations using scale, opacity, and 3D rotation effects.

## Architecture

### Component Structure

```
src/components/DevelopmentServices/
├── LayeredServiceUI.tsx              # Main layered UI component
├── LayeredServiceUI.module.scss      # Main styling
├── ServiceContent.tsx                # Service-specific content components
├── ServiceContent.module.scss        # Content styling
└── index.ts                          # Export barrel file

src/app/technology/development/
└── page.tsx                          # Development page wrapper
└── DevelopmentPage.module.scss       # Page styling
```

## Key Features

### 1. **Layered Animation System**
- **Scale Transition**: Active service scales in from 0.8 → 1.0, inactive services scale out to 1.2 → 0
- **Opacity Animation**: Smooth fade in/out (0 → 1) during transitions
- **3D Rotation**: RotateX effect creates depth perception (±20°)
- **Z-Index Management**: Proper layering ensures only one service is interactive
- **Duration**: 0.5-0.6s for smooth, premium feel

### 2. **Service Layer Variants**

```typescript
interface ServiceLayer {
  id: string;                    // Unique identifier
  title: string;                 // Service title
  subtitle: string;              // Subtitle/tagline
  description: string;           // Detailed description
  icon: string;                  // Emoji or icon
  color: string;                 // Primary brand color (hex)
  accentColor: string;           // Secondary accent color
  component: React.ComponentType; // Content component
  stats?: Array<{ label; value }>;// Optional statistics
}
```

### 3. **Animation Variants**

#### Layer Variants (Scale + Opacity + Rotation)
```typescript
enter: Slides in with scale(0.8) or scale(1.2) + rotateX(±20°)
center: Full size, opacity 1, no rotation
exit: Scales out + rotateX animation in opposite direction
```

#### Navigation Variants
```typescript
idle: Default state
hover: Scale 1.05, subtle glow
active: Scale 1.1, highlighted border, glow effect
```

### 4. **Visual Hierarchy**

- **Header Section**: Icon + Title + Subtitle with gradient text
- **Description**: Secondary text explaining the service
- **Statistics Grid**: Key metrics with color-coded left borders
- **Content Section**: Service-specific component (tech grid, timeline, etc.)
- **CTA Button**: Call-to-action aligned with service color

### 5. **Interactive Elements**

#### Service Selector
- 3 buttons for each service
- Active state highlighted with service color
- Hover effects with scale and glow
- Indicator line animation at bottom

#### Progress Dots
- Visual indicator of current service
- Clickable for direct navigation
- Scales on hover

## Component Usage

### Basic Implementation

```typescript
import { LayeredServiceUI } from "@/components/DevelopmentServices";
import {
  CustomAppDevelopmentContent,
  DigitalTransformationContent,
  EnterpriseMobilityContent,
} from "@/components/DevelopmentServices";

export default function Page() {
  const services = [
    {
      id: "custom-app-development",
      title: "Custom App Development",
      subtitle: "Innovative Mobile & Web Solutions",
      description: "High-performance apps tailored to your needs...",
      icon: "📱",
      color: "#0f6bff",
      accentColor: "#06b6d4",
      component: CustomAppDevelopmentContent,
      stats: [
        { label: "Projects", value: "50+" },
        { label: "Satisfaction", value: "98%" },
      ],
    },
    // ... more services
  ];

  return (
    <LayeredServiceUI 
      services={services}
      onServiceChange={(serviceId) => console.log(serviceId)}
    />
  );
}
```

## Animation Timings

| Animation | Duration | Easing | Description |
|-----------|----------|--------|-------------|
| Layer Enter | 0.6s | easeOut | Service slides in from sides |
| Layer Center | 0.5s | easeOut | Active service reaches center |
| Layer Exit | 0.5s | easeIn | Service exits from sides |
| Navigation | 0.3s | ease | Button hover/active states |
| Indicator | 0.4s | easeOut | Bottom line indicator |
| Stats | 0.4s | staggered | Stats items fade in with delay |

## Styling Features

### Dynamic Colors
- CSS variables: `--service-color`, `--service-accent`
- Applied to: Icon glow, borders, indicators, buttons
- Gradient text effects on titles

### Visual Effects
- **Backdrop Blur**: 10px blur on layer background
- **Glows**: Radial gradients at corners for depth
- **Gradients**: Linear gradients on titles and buttons
- **Shadows**: Multi-layer box shadows for premium feel

### Responsive Design
- **Desktop** (1024px+): Full 600px height layer container
- **Tablet** (768px): Adjusted padding and grid columns
- **Mobile** (480px): Single column, stacked navigation

## Service Components

### Custom App Development Content
- **Tech Grid**: Flutter, React Native, Swift, Kotlin
- **Features Grid**: UI/UX, Performance, Security, Cross-Platform
- **CTA**: "Start Your App Project"

### Digital Transformation Content
- **Timeline**: 4-step transformation process
- **Benefits List**: Efficiency, cost, insights, experience
- **CTA**: "Begin Your Transformation"

### Enterprise Mobility Content
- **Solutions Grid**: Role-based access, offline, encryption, analytics
- **Metrics**: Productivity gain (45%), uptime (99.9%)
- **CTA**: "Explore Enterprise Solutions"

## Browser Support

- **Modern Browsers**: Chrome 111+, Firefox 122+, Safari 16.2+
- **Mobile**: iOS 15+, Android 5+
- **Fallbacks**: Graceful degradation for unsupported features

## Performance Optimizations

1. **AnimatePresence mode="wait"**: Prevents overlapping animations
2. **will-change**: GPU acceleration for smooth transitions
3. **Staggered children**: Smooth sequential animations
4. **CSS variables**: Reduced DOM re-renders
5. **Lazy loading**: Service components load on demand

## Accessibility

- ✅ Keyboard navigation (Tab through buttons)
- ✅ Focus states on interactive elements
- ✅ ARIA labels on buttons
- ✅ Color contrast meets WCAG AA standards
- ✅ Respects `prefers-reduced-motion`
- ✅ Semantic HTML structure

## Customization

### Add New Service
```typescript
{
  id: "new-service",
  title: "New Service",
  subtitle: "Description",
  description: "Detailed description...",
  icon: "🎯",
  color: "#ff6b6b",
  accentColor: "#ffa94d",
  component: NewServiceContent,
  stats: [{ label: "Metric", value: "100+" }],
}
```

### Modify Animation Speed
```typescript
// In LayeredServiceUI.tsx
transition: {
  duration: 0.8, // Increase for slower animations
  ease: "easeOut"
}
```

### Update Colors
```scss
// LayeredServiceUI.module.scss
$primary-color: #your-color;
$accent-color: #your-accent;
```

## Development Tips

1. **Test Animations**: Use Chrome DevTools → Performance → Slow down animations
2. **Mobile Testing**: Test on actual devices for smooth performance
3. **Color Contrast**: Use WCAG contrast checker for accessibility
4. **Stats Display**: Keep values short for mobile (e.g., "50+" not "50,000+")
5. **Content Length**: Description should be 1-2 sentences max

## Troubleshooting

### Animation Stuttering
- Check GPU acceleration: `will-change` property
- Reduce number of simultaneous animations
- Lower blur effects on lower-end devices

### Jumpy Navigation
- Ensure `AnimatePresence mode="wait"` is set
- Check z-index stacking context

### Color Not Showing
- Verify CSS variable is applied: `--service-color`
- Check color format (use hex #000000)
- Verify fallback colors in SCSS

## Related Files

- [Development Page](./page.tsx)
- [Service Content](./ServiceContent.tsx)
- [Main UI Component](./LayeredServiceUI.tsx)
- [Style Variables](../../styles/variables.scss)

## Deployment

1. Ensure Framer Motion is installed: `npm install framer-motion`
2. Test animations in production build
3. Verify performance on target devices
4. Monitor for any animation jank issues

## Future Enhancements

- [ ] Keyboard navigation (arrow keys to switch services)
- [ ] Swipe gestures on mobile
- [ ] Analytics tracking for service selection
- [ ] Deep linking to specific services
- [ ] Animation customization panel
- [ ] Dark/Light theme support
