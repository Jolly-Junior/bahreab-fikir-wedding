# Alemitu & Bekele - Premium Ethiopian Wedding Website

A warm, elegant, and fully responsive wedding invitation and digital pass system celebrating traditional Ethiopian heritage with modern design.

## 🎨 Design Aesthetic

The website embodies a **warm, editorial, and deeply elegant** aesthetic with a carefully curated Ethiopian color palette:

### Color Palette
- **Primary Background**: Soft Cream/Ivory (#F5F2EB)
- **Primary Gold Mustard**: #DDA15E (accent and primary CTA)
- **Secondary Burgundy**: #4A1521 (dark sections, accent text)
- **Complementary Accent**: #C99738 (hover states, variations)
- **Neutrals**: Dark Slate Charcoal (#36111A) for typography, warm earth tones for transitional elements

### Typography
- **Headings**: Playfair Display (serif) - elegant, high-contrast display font
- **Body**: Cormorant Garamond (serif) - warm, editorial feel with excellent legibility

## 🏗️ Site Structure

### 1. **Hero Section**
- Left: Elegant serif typography with couple's names (ALEMITU & BEKELE)
- Ge'ez/Amharic script placeholder for cultural authenticity
- Bold gold "RSVP NOW" CTA button
- Right: Arched portrait frame featuring couple in traditional Habesha Kemis and Kaba
- Decorative Meskel cross dividers and accent dots

### 2. **Digital Invitation Pass**
- Centered card component with clean border and gold accent
- Simulated QR code graphic (interactive placeholder)
- Pass information fields (date, location, guest name)
- Clear instruction subtitle: "Scan Your Personal Digital Invitation Pass"
- Subtle background gradient for visual depth

### 3. **Our Story Section**
- Warm gold background (#DDA15E at 8% opacity)
- Vertical asymmetrical timeline with three milestone events
- Timeline dots with alternating layout (desktop)
- Mixed English and Amharic typography
- Arched photo frames for story milestone images
- Closing message honoring family traditions

### 4. **Schedule of Events**
- Three-column event grid (responsive: 1-column mobile)
- **Card 1**: "THE CROWNING (MELS)" - Sacred crowning ceremony
- **Card 2**: "THE CELEBRATION (KELEKEL)" - Joyous gathering with traditional music
- **Card 3**: "THE RECEPTION (መልስ & ቅልቅል)" - Evening reception
- Additional info boxes for traditional dress and cultural protocol
- Icon indicators for each event type

### 5. **Accommodations & Registry**
- Deep burgundy background (#4A1521) with light text overlay
- Left column: Hotel block options with booking codes
  - Sheraton Addis Ababa Hotel
  - Hilton Addis Ababa
  - Radisson Blu Hotel
- Right column: Gift registry section
  - Traditional Agelgil (woven basket) illustration
  - "Honeymoon Fund" and "Gift Registry" buttons
  - Travel information box
- Responsive 2-column layout with proper stacking on mobile

### 6. **Footer Section**
- Dark navy background (#36111A)
- Quick links (Home, Our Story, Schedule, Gallery)
- Social media icons
- RSVP contact information
- Cultural footer message with Ethiopian Orthodox blessing

## 📱 Responsive Design

The website is **fully responsive** across all devices using Tailwind CSS breakpoints:

- **Mobile** (default): Single-column stacked layouts, optimized touch targets (44px minimum)
- **Tablet** (md: 768px): Two-column grids beginning to transition
- **Desktop** (lg: 1024px+): Full multi-column layouts with sophisticated spacing

### Key Responsive Features
- Flexbox for primary layout direction
- CSS Grid for multi-column sections (gracefully collapses to single column)
- Touch-friendly button and link sizes
- High contrast typography for mobile legibility
- Images scale appropriately with `max-w` constraints
- Padding and margin scales adjust per viewport

## 🎯 Key Components

### Hero Section (`components/hero-section.tsx`)
```tsx
<HeroSection />
```
- 2-column grid layout (mobile: 1-column)
- Arched frame using CSS `clip-path`
- Portrait image with decorative border
- Meskel cross SVG divider

### Digital Pass (`components/digital-pass-section.tsx`)
```tsx
<DigitalPassSection />
```
- Centered card with QR code simulation
- Pass details display (date, location, guest)
- Clean border and spacing for prominence

### Our Story (`components/our-story-section.tsx`)
```tsx
<OurStorySection />
```
- Vertical timeline with animated dots
- Alternating left/right content layout
- Amharic and English text blocks

### Schedule (`components/schedule-section.tsx`)
```tsx
<ScheduleSection />
- EventCard component (reusable)
- 3-column grid with event icons
- Cultural protocol information cards
```

### Accommodations (`components/accommodations-section.tsx`)
```tsx
<AccommodationsSection />
```
- Hotel block cards with booking codes
- Registry section with Agelgil image
- Travel information panel

### Footer (`components/footer-section.tsx`)
```tsx
<FooterSection />
```
- Multi-column link organization
- Social icons
- Cultural blessing message

## 🎨 Custom CSS Utilities

### Arched Photo Frames
```css
.arched-frame {
  clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 100%, 0 100%, 0 15%);
  overflow: hidden;
  border-radius: 1.5rem (from @theme);
}
```

### Meskel Cross
```css
.meskel-cross {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--primary);
}
```

## 📐 Layout Methodology

Following the **Layout Method Priority**:

1. **Flexbox** (primary): Used for hero layout, card grids, button groups
2. **CSS Grid** (secondary): Event cards and hotel options use `grid-cols-3` for desktop
3. **No floats/absolute positioning**: Clean semantic layout

## 🚀 Getting Started

### Installation
```bash
# Clone or download the project
cd v0-project

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Customization

#### Edit Couple Names
Update in `/components/hero-section.tsx`:
```tsx
<h1 className="text-6xl font-bold">
  ALEMITU & BEKELE
</h1>
```

#### Replace Images
- Couple portrait: `/public/couple-portrait.png`
- Agelgil basket: `/public/agelgil-basket.png`

#### Update Event Information
Edit `/components/schedule-section.tsx` with venue names, dates, and locations

#### Modify Color Palette
All colors are defined in `/app/globals.css` using CSS custom properties. Update the `:root` theme variables:
```css
--primary: #DDA15E;
--secondary: #4A1521;
```

#### Add Social Links
Update footer social icon links in `/components/footer-section.tsx`

## ♿ Accessibility

- Semantic HTML throughout (header, main, footer, nav)
- ARIA labels on interactive elements
- High contrast text (#36111A on light backgrounds)
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Minimum 44px touch targets for buttons
- Screen reader friendly footer messages

## 📊 Performance Considerations

- Static image optimization with Next.js `Image` component
- CSS-based clip-path for decorative arches (no SVG overhead)
- Efficient color palette (hex codes, not excessive gradients)
- Minimal animations for smooth 60fps scrolling
- Optimized font loading (Google Fonts)

## 🌐 Deployment

### Deploy to Vercel
```bash
git push origin main
```
The site will automatically deploy and generate a production URL.

### Environment Variables
No external APIs required for this static site. The wedding details are hardcoded for customization.

## 📝 Content Guidelines

### Amharic/Ge'ez Text
- Placeholder text included for cultural authenticity
- Replace with actual Amharic transliterations as needed
- Ensure proper Unicode support (UTF-8 encoding)

### Image Recommendations
- Couple portrait: 16:9 or 9:10 aspect ratio (portrait mode)
- High resolution (2000px+ width) for quality
- Warm lighting to match color palette
- Traditional clothing: Habesha Kemis, Kaba, Shawl, Joté

### Event Details
- All three events can be customized (dates, times, venues)
- Add or remove hotel blocks as needed
- Update RSVP contact information
- Modify travel information for your location

## 🎭 Cultural Elements

This website celebrates Ethiopian wedding traditions:

- **Mels (ሜልስ)**: The crowning ceremony symbolizing union
- **Kelekel (ቅልቅል)**: Celebratory feast and gathering
- **Agelgil (አገልግል)**: Traditional woven basket symbolizing bounty
- **Meskel Cross**: Ancient Ethiopian symbol of faith and heritage
- **Habesha Clothing**: Traditional white Kemis with gold embroidery

## 📄 License & Credits

Built with:
- Next.js 16
- React 19
- Tailwind CSS v4
- shadcn/ui
- Playfair Display & Cormorant Garamond fonts

---

**Celebrate love, family, and tradition.** ✨
