

# Graduation Invitation Page - UAZ "Generación 2022-2026"

A stunning, elegant digital invitation for Universidad Autónoma de Zacatecas graduates featuring the university's signature colors and a modern, responsive design.

---

## 🎨 Design System

- **Color Palette**: Deep Navy Blue (#1a365d), Bright Gold (#d4af37), White (#ffffff)
- **Gradients**: Navy to darker navy overlays, gold accents with shimmer effects
- **Typography**: Inter/Poppins for headings, clean sans-serif for body text
- **Style**: Elegant glassmorphism cards, subtle shadows, smooth animations

---

## 📄 Page Structure

### 1. Hero Section
- Full-screen hero with elegant gradient overlay
- Placeholder for group graduate photo (uploadable later)
- UAZ logo prominently displayed
- Class name: "Generación 2022-2026"
- Major: "Ingeniería de Software"
- Smooth fade-up entrance animation
- Decorative gold accent lines

### 2. Countdown Timer
- Elegant countdown showing days, hours, minutes, seconds
- Glassmorphism card design with navy/gold styling
- Animated number transitions
- Placeholder graduation date (easily editable)

### 3. Location Cards
- Two glassmorphism-styled cards side by side (stacked on mobile)
- **Card 1 - Mass/Ceremony**: Church location with icon, address, time
- **Card 2 - Reception**: Venue location with icon, address, time
- Each card has a "Ver en Google Maps" button
- Subtle hover animations

### 4. Event Itinerary
- Vertical timeline with gold accent line
- Events: Registration → Mass → Ceremony → Photo Session → Dinner → Dance
- Each event shows time, title, and brief description
- Animated reveal on scroll

### 5. Dress Code Section
- Visual display for "Etiqueta Formal"
- Icons representing formal attire (suit, dress)
- Brief description text
- Elegant presentation with gold accents

### 6. Gift Registry Section
- Discreet, tasteful section
- Option for envelope/cash gift mention
- Optional links to gift registries (placeholder)
- Subtle design that doesn't feel pushy

### 7. Photo Gallery
- Responsive image grid
- Lightbox view for full-screen photos
- Placeholder images (replaceable later)
- Smooth hover effects

### 8. Music Player
- Floating or embedded audio player
- Elegant minimal design
- Play/pause controls
- Placeholder audio source

### 9. RSVP Section
- Floating WhatsApp button (fixed position)
- Optional dedicated RSVP section with message
- Pre-filled WhatsApp message template
- Placeholder phone number

---

## 📁 File Organization

```
src/
├── pages/
│   └── GraduationInvite.tsx
├── components/
│   └── graduation/
│       ├── Hero.tsx
│       ├── Countdown.tsx
│       ├── LocationCards.tsx
│       ├── Itinerary.tsx
│       ├── DressCode.tsx
│       ├── GiftSection.tsx
│       ├── PhotoGallery.tsx
│       ├── MusicPlayer.tsx
│       └── WhatsAppRSVP.tsx
```

---

## 📱 Responsive Design

- **Mobile-first** approach
- Single column layout on mobile
- Two-column cards on tablet+
- Optimized touch interactions
- Floating RSVP button accessible on all devices
- All animations respect `prefers-reduced-motion`

---

## ✨ Animations & Interactions

- Fade-up animations on scroll for all sections
- Countdown number transitions
- Hover effects on cards and buttons
- Smooth gallery lightbox transitions
- Subtle gold shimmer accents

