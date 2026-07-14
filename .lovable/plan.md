
# Lucy Hotel — Luxury Website Plan

A cinematic, 5-star boutique hotel site for **Lucy Hotel**, Dessie, Ethiopia. Full English/Amharic translation, AI-generated luxury photography, smooth animations, and a WhatsApp-based reservation flow. No payment system.

## Brand & Design System

- **Palette:** near-black charcoal, cream/ivory backgrounds, crisp white, and gold accent — all as semantic tokens in `src/styles.css` (oklch), light theme only.
- **Typography:** luxury serif for headings (Cormorant / Playfair-style), clean sans for body — loaded via `<link>` in `__root.tsx`.
- **Feel:** spacious layouts, generous whitespace, subtle fade/slide-in on scroll, elegant gold-underline and scale hover effects, dark image overlays on hero.

## Contact / booking details used

- Location: Dessie, Ethiopia · Phone/WhatsApp: +251967423048 · Email: hdosman040@gmail.com
- "Reserve Now" / "Book Now" build a prefilled WhatsApp message (`https://wa.me/251967423048?text=...`) including chosen room, dates, and guests.

## Pages & Sections (single scrolling home + dedicated routes)

Primary experience is the homepage with all sections; each major section also gets its own SEO route (`/rooms`, `/services`, `/gallery`, `/about`, `/contact`) with unique `head()` metadata, reusing the same section components.

1. **Sticky Navbar** — transparent over hero, solid cream/charcoal with shadow on scroll. Links: Home, Rooms, Services, Gallery, About, Contact. Right side: EN/አማ language toggle + gold "Book Now" button. Mobile: elegant slide-in drawer.
2. **Hero** — full-screen cinematic image, dark overlay, hotel name/logo, headline, description, "Book Your Stay" + "Explore Rooms" buttons, fade-in animation.
3. **Rooms** — 5 luxury room cards (Deluxe, Executive, Junior Suite, Family Suite, Presidential Suite) with image, name, description, amenities, guest capacity, "View Details". Clicking opens a **modal** with image gallery, full description, amenities, and a booking button.
4. **Booking widget** — check-in date, check-out date, guests count, room select, "Reserve Now" → WhatsApp. Uses shadcn date picker + selects.
5. **Services** — elegant icon cards: Restaurant, Free WiFi, Room Service, Conference Facilities, Airport Transfer, Parking.
6. **About** — storytelling intro + mission, animated stat counters (Years of Experience, Rooms, Happy Guests, Professional Staff).
7. **Gallery** — filterable grid (Rooms, Restaurant, Exterior, Events, Facilities) with lightbox preview and smooth animations.
8. **Testimonials** — review cards with 5-star ratings, customer name, and text.
9. **Contact** — address, phone, email, WhatsApp, social links, and a styled map placeholder.
10. **Footer** — logo, nav links, contact info, social icons, copyright.

## Internationalization (EN / Amharic)

- Lightweight translation context (`LanguageProvider` + `useT` hook) with a single dictionary file holding full English and Amharic strings for every visible label; toggle persisted in localStorage.
- All section text pulled from the dictionary so the toggle fully switches languages.

## Data organization (separate files)

```
src/data/hotel.ts          -> name, contact, whatsapp, socials, stats
src/data/rooms.ts          -> 5 rooms w/ amenities, capacity, gallery
src/data/gallery.ts        -> gallery images by category
src/data/testimonials.ts   -> reviews
src/i18n/translations.ts   -> EN + Amharic dictionary
```

## AI-generated imagery

Generate cinematic luxury images into `src/assets/` with the agent image tool: hero exterior/lobby, 5 room photos (+ 2–3 gallery shots per room for modals), restaurant, exterior, events, facilities, and an about/story image. Imported as ES6 image imports.

## Components

`src/components/hotel/` — Navbar, Hero, RoomsSection, RoomCard, RoomModal, BookingWidget, ServicesSection, AboutSection, GallerySection, Lightbox, Testimonials, ContactSection, Footer, LanguageToggle, plus `AnimatedSection` (scroll reveal wrapper) and `StatCounter`.

## Technical

- React + TypeScript + Tailwind v4, semantic tokens only (no hardcoded colors).
- Fully responsive, mobile-first; lazy-loaded images; accessible modals/drawer via shadcn Dialog/Sheet.
- SEO: real title/description/og/twitter in route heads, semantic HTML, single H1, alt text, JSON-LD `Hotel` schema on home.
- Smooth scroll for in-page anchor nav from the homepage.

## Out of scope

- No real payment processing or backend (reservations go to WhatsApp only). Lovable Cloud not required unless you later want to store reservations.
