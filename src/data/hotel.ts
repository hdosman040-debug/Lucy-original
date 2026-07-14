export const hotel = {
  name: "Lucy Hotel",
  tagline: "Boutique Luxury & Heritage in Dessie",
  phone: "+251961614444",
  phoneDisplay: "+251 96 161 4444",
  email: "hdosman040@gmail.com",
  whatsapp: "251961614444",
  address: "Dessie, Ethiopia",
  coordinates: {
    lat: 11.144065,
    lng: 39.635530,
    googleMapsLink: "https://www.google.com/maps/place/11%C2%B008'38.6%22N+39%C2%B038'07.9%22E/@11.144065,39.635530,17z"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    telegram: "https://t.me", // Custom tailored for Ethiopian local reach
    twitter: "https://twitter.com", // Added to satisfy TS compilation
  },
  stats: [
    { value: 10, suffix: "+", key: "years" },
    { value: 85, suffix: "", key: "rooms" },
    { value: 15000, suffix: "+", key: "guests" },
    { value: 60, suffix: "+", key: "staff" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;
}
