# Design Style Guide

Based on Relaxation Dental website (relaxationdds.com)

## Color Palette

- **Primary Background**: `#FFFFFF` (White)
- **Primary Accent**: `#E4DCD5` (Warm beige/sand)
- **Primary Text/Buttons**: `#1E3A8A` (Navy blue)
- **Link Color**: `#1E3A8A` (Navy blue)
- **Border Color**: `#CCCCCC` (Light gray)
- **Secondary Accent**: `#a4def2` (Blue)

## Typography

### Font Families
- **Headings**: EB Garamond (serif)
- **Body/Paragraphs**: Manrope (sans-serif)
- **Secondary**: Montserrat (sans-serif)

### Font Stacks
```css
--font-heading: 'EB Garamond', serif;
--font-body: 'Manrope', sans-serif;
--font-paragraph: 'Manrope', sans-serif;
```

### Font Sizes
- **H1**: 64px
- **H2**: 48px
- **Body**: 14px

## Spacing & Layout

- **Base Unit**: 4px
- **Border Radius**: 4px (base), 16px (inputs/secondary buttons), 32px (primary buttons)

## Component Styles

### Buttons

#### Primary Button
- **Background**: `#1E3A8A` (Navy blue)
- **Text Color**: `#1E3A8A` (Navy blue - note: may need adjustment for contrast)
- **Border Radius**: 32px (fully rounded)
- **Shadow**: Complex shadow stack for depth
```css
box-shadow: rgba(0, 0, 0, 0.07) 0px 36px 67px 0px, 
            rgba(0, 0, 0, 0.05) 0px 13.141px 24.456px 0px, 
            rgba(0, 0, 0, 0.04) 0px 6.38px 11.873px 0px, 
            rgba(0, 0, 0, 0.03) 0px 3.127px 5.82px 0px, 
            rgba(0, 0, 0, 0.02) 0px 1.237px 2.301px 0px;
```

#### Secondary Button
- **Background**: Transparent
- **Text Color**: `#1E3A8A` (Navy blue)
- **Border**: 1px solid `#1E3A8A`
- **Border Radius**: 16px
- **Shadow**: None

### Input Fields
- **Background**: `#FFFFFF` (White)
- **Text Color**: `#1E3A8A` (Navy blue)
- **Border Color**: `#CCCCCC` (Light gray)
- **Border Radius**: 16px
- **Shadow**: None

## Design Personality

- **Tone**: Professional
- **Energy**: Medium
- **Target Audience**: Local residents seeking dental care
- **Overall Vibe**: Comforting, professional, modern healthcare

## Design System Notes

- **Framework**: Custom (Webflow-based)
- **Color Scheme**: Light theme
- **Approach**: Clean, modern, and calming aesthetic suitable for healthcare/dental services
- **Visual Hierarchy**: Strong contrast between warm beige accents and navy blue text on white background

## Implementation Recommendations

1. Use the warm beige (`#E4DCD5`) as accent color for sections, backgrounds, or subtle highlights
2. Maintain the navy blue (`#1E3A8A`) for primary text and call-to-action elements
3. Leverage the serif heading font (EB Garamond) for elegance and trust
4. Use the sans-serif body font (Manrope) for readability and modern feel
5. Apply generous border radius (16px+) for buttons and inputs to create a soft, approachable feel
6. Consider the complex shadow system for primary CTAs to create depth and emphasis
