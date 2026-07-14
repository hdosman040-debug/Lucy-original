export type GalleryCategory =
  | "rooms"
  | "restaurant"
  | "exterior"
  | "events"
  | "facilities";

export type GalleryItem = {
  src: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  // Exterior & Panoramic Views
  { src: "/images/lucy-hotel/views/building-day-view.jpg", category: "exterior" },
  { src: "/images/lucy-hotel/views/Bird-view.jpg", category: "exterior" },
  { src: "/images/lucy-hotel/views/front-night-view.jpg", category: "exterior" },
  { src: "/images/lucy-hotel/views/Building-night-view.jpg", category: "exterior" },
  { src: "/images/lucy-hotel/views/view-mountain-panoramic.jpg", category: "exterior" },
  { src: "/images/lucy-hotel/views/Dim-light-view.jpg", category: "exterior" },
  { src: "/images/lucy-hotel/views/view-terrace-balcony.jpg", category: "exterior" },

  // Rooms
  { src: "/images/lucy-hotel/rooms/room-standard-king.jpg", category: "rooms" },
  { src: "/images/lucy-hotel/rooms/room-deluxe-queen.jpg", category: "rooms" },
  { src: "/images/lucy-hotel/rooms/room-executive-suite.jpg", category: "rooms" },

  // Authentic Cuisine & Restaurant Views
  { src: "/images/lucy-hotel/restaurant/dining-main-restaurant.jpg", category: "restaurant" },
  { src: "/images/lucy-hotel/restaurant/food-injera-habesha.jpg", category: "restaurant" },
  { src: "/images/lucy-hotel/restaurant/food-chicken-cutlet.jpg", category: "restaurant" },
  { src: "/images/lucy-hotel/restaurant/food-sizzling-tibs.jpg", category: "restaurant" },
  { src: "/images/lucy-hotel/restaurant/food-club-sandwich.jpg", category: "restaurant" },
  { src: "/images/lucy-hotel/restaurant/food-tibs-rice-combo.jpg", category: "restaurant" },
  { src: "/images/lucy-hotel/restaurant/food-grilled-meat-rice.jpg", category: "restaurant" },

  // Events & Dinings
  { src: "/images/lucy-hotel/events/dining-boardroom-suite.jpg", category: "events" },
  { src: "/images/lucy-hotel/events/dining-vip-banquet.jpg", category: "events" },

  // High-End Facilities
  { src: "/images/lucy-hotel/facilities/amenity-conference.jpg", category: "facilities" },
  { src: "/images/lucy-hotel/facilities/amenity-fitness-gym.jpg", category: "facilities" },
];

export const galleryCategories: GalleryCategory[] = [
  "rooms",
  "restaurant",
  "exterior",
  "events",
  "facilities",
];
