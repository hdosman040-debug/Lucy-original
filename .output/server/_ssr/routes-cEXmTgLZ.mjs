import { r as __toESM } from "../_runtime.mjs";
import { s as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { A as Calendar$1, C as Coffee, D as ChevronDown, E as ChevronLeft, M as BellRing, O as Check, S as Facebook, T as ChevronRight, _ as MessageCircle, a as UtensilsCrossed, b as Mail, c as Twitter, d as Sofa, f as Snowflake, g as Phone, h as Plane, i as Waves, j as Briefcase, k as Car, l as Tv, m as Presentation, n as Wine, o as Users, p as Quote, r as Wifi, s as UserRound, t as X, u as Star, v as Menu, w as ChevronUp, x as Instagram, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, c as DialogTrigger, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { l as format } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-cEXmTgLZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var translations = {
	en: {
		nav: {
			home: "Home",
			rooms: "Rooms",
			services: "Services",
			gallery: "Gallery",
			about: "About",
			contact: "Contact",
			bookNow: "Book Now"
		},
		hero: {
			welcome: "Welcome to Lucy Hotel",
			headline: "Experience Luxury, Comfort & Exceptional Hospitality",
			description: "Discover elegant rooms, premium services, and unforgettable experiences at Lucy Hotel, Dessie.",
			book: "Book Your Stay",
			explore: "Explore Rooms"
		},
		booking: {
			title: "Reserve Your Stay",
			subtitle: "Tell us your dates and we'll take care of the rest.",
			checkin: "Check-in",
			checkout: "Check-out",
			guests: "Guests",
			room: "Room",
			selectRoom: "Select a room",
			reserve: "Reserve Now",
			guest: "Guest",
			guestsLabel: "Guests"
		},
		rooms: {
			title: "Rooms & Suites",
			subtitle: "Refined accommodation crafted for the discerning traveller.",
			guests: "Guests",
			from: "from",
			night: "night",
			viewDetails: "View Details",
			amenities: "Amenities",
			bookRoom: "Book This Room",
			items: {
				deluxe: {
					name: "Deluxe Room",
					desc: "Comfortable room with elegant furniture and premium amenities.",
					long: "Our Deluxe Room blends timeless elegance with modern comfort. Wake up in a plush king bed, enjoy warm ambient lighting and thoughtfully curated furnishings designed for a restful stay."
				},
				executive: {
					name: "Executive Room",
					desc: "More spacious room with upgraded facilities and a private sitting area.",
					long: "The Executive Room offers extra space with a dedicated sitting area and upgraded facilities — ideal for business or leisure travellers who appreciate refined details."
				},
				junior: {
					name: "Junior Suite",
					desc: "Luxury accommodation with extra living space and premium comfort.",
					long: "A sophisticated Junior Suite featuring a separate living space, plush seating and elegant décor. The perfect sanctuary for a truly indulgent escape."
				},
				family: {
					name: "Family Suite",
					desc: "Large room designed for families, with generous space and comfort.",
					long: "Designed with families in mind, the Family Suite offers generous space, multiple beds and every comfort for a memorable stay together."
				},
				presidential: {
					name: "Presidential Suite",
					desc: "The most exclusive luxury experience with panoramic views.",
					long: "The pinnacle of luxury. The Presidential Suite features panoramic windows, a grand living room, chandelier and personalised butler service for an unrivalled experience."
				}
			}
		},
		amenities: {
			wifi: "Free WiFi",
			breakfast: "Breakfast",
			ac: "Air Conditioning",
			tv: "Smart TV",
			workspace: "Workspace",
			lounge: "Living Lounge",
			minibar: "Minibar",
			butler: "Butler Service",
			pool: "Private Pool Access"
		},
		services: {
			title: "Premium Services",
			subtitle: "Every detail considered for an effortless stay.",
			items: {
				restaurant: {
					title: "Restaurant",
					desc: "Fine dining with local and international cuisine."
				},
				wifi: {
					title: "Free WiFi",
					desc: "High-speed internet throughout the hotel."
				},
				roomService: {
					title: "Room Service",
					desc: "24/7 in-room dining at your convenience."
				},
				conference: {
					title: "Conference Facilities",
					desc: "Fully equipped halls for events and meetings."
				},
				airport: {
					title: "Airport Transfer",
					desc: "Comfortable pick-up and drop-off service."
				},
				parking: {
					title: "Parking",
					desc: "Secure on-site parking for all guests."
				}
			}
		},
		about: {
			title: "The Lucy Hotel Story",
			subtitle: "A Legacy of Hospitality",
			body1: "Nestled in the heart of Dessie, Lucy Hotel has redefined luxury hospitality in the region. We combine world-class comfort with the warmth of genuine Ethiopian tradition.",
			body2: "From our elegant rooms to our exceptional dining and personalised service, every experience is crafted to leave a lasting impression.",
			missionTitle: "Our Mission",
			mission: "Providing exceptional hospitality and unforgettable guest experiences.",
			stats: {
				years: "Years of Experience",
				rooms: "Luxury Rooms",
				guests: "Happy Guests",
				staff: "Professional Staff"
			}
		},
		gallery: {
			title: "Gallery",
			subtitle: "A glimpse into the Lucy Hotel experience.",
			all: "All",
			categories: {
				rooms: "Rooms",
				restaurant: "Restaurant",
				exterior: "Exterior",
				events: "Events",
				facilities: "Facilities"
			}
		},
		testimonials: {
			title: "Guest Experiences",
			subtitle: "What our guests say about their stay."
		},
		contact: {
			title: "Get in Touch",
			subtitle: "We look forward to welcoming you.",
			address: "Address",
			phone: "Phone",
			email: "Email",
			whatsapp: "WhatsApp",
			follow: "Follow Us",
			chat: "Chat on WhatsApp",
			mapNote: "Dessie, Ethiopia"
		},
		footer: {
			tagline: "Luxury, comfort and exceptional hospitality in the heart of Dessie.",
			quickLinks: "Quick Links",
			contact: "Contact",
			rights: "All rights reserved."
		},
		whatsappMsg: "Hello, I would like to reserve a room at Lucy Hotel."
	},
	am: {
		nav: {
			home: "መነሻ",
			rooms: "ክፍሎች",
			services: "አገልግሎቶች",
			gallery: "ማዕከለ ስዕላት",
			about: "ስለ እኛ",
			contact: "አግኙን",
			bookNow: "አሁን ያዙ"
		},
		hero: {
			welcome: "ወደ ሉሲ ሆቴል እንኳን በደህና መጡ",
			headline: "የቅንጦት፣ ምቾት እና ልዩ እንግዳ ተቀባይነትን ይለማመዱ",
			description: "በሉሲ ሆቴል፣ ደሴ ውስጥ የተዋቡ ክፍሎችን፣ ምርጥ አገልግሎቶችን እና የማይረሱ ተሞክሮዎችን ያግኙ።",
			book: "ቆይታዎን ያስይዙ",
			explore: "ክፍሎችን ይመልከቱ"
		},
		booking: {
			title: "ቆይታዎን ያስይዙ",
			subtitle: "ቀኖችዎን ይንገሩን፣ ቀሪውን እኛ እንይዛለን።",
			checkin: "የመግቢያ ቀን",
			checkout: "የመውጫ ቀን",
			guests: "እንግዶች",
			room: "ክፍል",
			selectRoom: "ክፍል ይምረጡ",
			reserve: "አሁን ያስይዙ",
			guest: "እንግዳ",
			guestsLabel: "እንግዶች"
		},
		rooms: {
			title: "ክፍሎች እና ስዊቶች",
			subtitle: "ለተመረጡ ተጓዦች የተዘጋጀ የተዋበ መኝታ።",
			guests: "እንግዶች",
			from: "ከ",
			night: "ሌሊት",
			viewDetails: "ዝርዝር ይመልከቱ",
			amenities: "አገልግሎቶች",
			bookRoom: "ይህን ክፍል ያስይዙ",
			items: {
				deluxe: {
					name: "ዲላክስ ክፍል",
					desc: "በተዋቡ ዕቃዎች እና ምርጥ አገልግሎቶች የተሞላ ምቹ ክፍል።",
					long: "የእኛ ዲላክስ ክፍል ዘመናዊ ምቾትን ከዘመን ተሻጋሪ ውበት ጋር ያዋህዳል። ምቹ በሆነ አልጋ ላይ ይነሱ እና ለእረፍት የተዘጋጁ ዕቃዎችን ይደሰቱ።"
				},
				executive: {
					name: "ኤክስኪዩቲቭ ክፍል",
					desc: "የተሻሻሉ አገልግሎቶች እና የግል መቀመጫ ያለው ሰፊ ክፍል።",
					long: "የኤክስኪዩቲቭ ክፍል ተጨማሪ ቦታ፣ የተለየ መቀመጫ አካባቢ እና የተሻሻሉ አገልግሎቶችን ይሰጣል — ለስራ ወይም ለመዝናኛ ተጓዦች ተስማሚ።"
				},
				junior: {
					name: "ጁኒየር ስዊት",
					desc: "ተጨማሪ የመኖሪያ ቦታ ያለው የቅንጦት መኝታ።",
					long: "የተለየ የመኖሪያ ቦታ፣ ምቹ መቀመጫ እና የተዋበ ማስዋቢያ ያለው ውብ ጁኒየር ስዊት። ለእውነተኛ እረፍት ፍጹም መጠጊያ።"
				},
				family: {
					name: "የቤተሰብ ስዊት",
					desc: "ለቤተሰብ የተዘጋጀ ሰፊ ክፍል፣ በበቂ ቦታ እና ምቾት።",
					long: "ለቤተሰብ ታስቦ የተዘጋጀ የቤተሰብ ስዊት ሰፊ ቦታ፣ ብዙ አልጋዎች እና ለማይረሳ አብሮ ቆይታ ሁሉንም ምቾት ይሰጣል።"
				},
				presidential: {
					name: "ፕሬዚዳንታዊ ስዊት",
					desc: "ሰፊ እይታ ያለው በጣም ልዩ የቅንጦት ተሞክሮ።",
					long: "የቅንጦት ጫፍ። ፕሬዚዳንታዊ ስዊት ሰፊ መስኮቶች፣ ትልቅ ሳሎን፣ ቻንደሊየር እና የግል አገልጋይ አገልግሎት አለው።"
				}
			}
		},
		amenities: {
			wifi: "ነፃ ዋይፋይ",
			breakfast: "ቁርስ",
			ac: "አየር ማቀዝቀዣ",
			tv: "ስማርት ቲቪ",
			workspace: "የስራ ቦታ",
			lounge: "ሳሎን",
			minibar: "ሚኒባር",
			butler: "የአገልጋይ አገልግሎት",
			pool: "የግል መዋኛ መዳረሻ"
		},
		services: {
			title: "ምርጥ አገልግሎቶች",
			subtitle: "ለቀላል ቆይታ እያንዳንዱ ዝርዝር ታስቦበታል።",
			items: {
				restaurant: {
					title: "ሬስቶራንት",
					desc: "የአገር ውስጥ እና ዓለም አቀፍ ምግቦች።"
				},
				wifi: {
					title: "ነፃ ዋይፋይ",
					desc: "በሆቴሉ ውስጥ ፈጣን ኢንተርኔት።"
				},
				roomService: {
					title: "የክፍል አገልግሎት",
					desc: "24/7 በክፍልዎ ውስጥ ምግብ አገልግሎት።"
				},
				conference: {
					title: "የስብሰባ አዳራሾች",
					desc: "ለዝግጅቶች እና ስብሰባዎች ሙሉ በሙሉ የተደራጁ አዳራሾች።"
				},
				airport: {
					title: "የአውሮፕላን ማመላለሻ",
					desc: "ምቹ የመውሰድ እና የማድረስ አገልግሎት።"
				},
				parking: {
					title: "መኪና ማቆሚያ",
					desc: "ለሁሉም እንግዶች ደህንነቱ የተጠበቀ ማቆሚያ።"
				}
			}
		},
		about: {
			title: "የሉሲ ሆቴል ታሪክ",
			subtitle: "የእንግዳ ተቀባይነት ውርስ",
			body1: "በደሴ ልብ ውስጥ የሚገኘው ሉሲ ሆቴል በክልሉ የቅንጦት እንግዳ ተቀባይነትን እንደገና ገልጿል። ዓለም አቀፍ ምቾትን ከእውነተኛ የኢትዮጵያ ወግ ሙቀት ጋር እናዋህዳለን።",
			body2: "ከተዋቡ ክፍሎቻችን እስከ ልዩ ምግባችን እና ግላዊ አገልግሎታችን ድረስ፣ እያንዳንዱ ተሞክሮ ዘላቂ ስሜት ለመፍጠር የተዘጋጀ ነው።",
			missionTitle: "ተልእኮአችን",
			mission: "ልዩ እንግዳ ተቀባይነት እና የማይረሱ የእንግዳ ተሞክሮዎችን መስጠት።",
			stats: {
				years: "የልምድ ዓመታት",
				rooms: "የቅንጦት ክፍሎች",
				guests: "ደስተኛ እንግዶች",
				staff: "ባለሙያ ሰራተኞች"
			}
		},
		gallery: {
			title: "ማዕከለ ስዕላት",
			subtitle: "የሉሲ ሆቴል ተሞክሮ እይታ።",
			all: "ሁሉም",
			categories: {
				rooms: "ክፍሎች",
				restaurant: "ሬስቶራንት",
				exterior: "ውጫዊ",
				events: "ዝግጅቶች",
				facilities: "አገልግሎቶች"
			}
		},
		testimonials: {
			title: "የእንግዶች ተሞክሮ",
			subtitle: "እንግዶቻችን ስለ ቆይታቸው የሚሉት።"
		},
		contact: {
			title: "ያግኙን",
			subtitle: "እርስዎን ለመቀበል በጉጉት እንጠብቃለን።",
			address: "አድራሻ",
			phone: "ስልክ",
			email: "ኢሜይል",
			whatsapp: "ዋትስአፕ",
			follow: "ይከተሉን",
			chat: "በዋትስአፕ ያውሩ",
			mapNote: "ደሴ፣ ኢትዮጵያ"
		},
		footer: {
			tagline: "በደሴ ልብ ውስጥ ቅንጦት፣ ምቾት እና ልዩ እንግዳ ተቀባይነት።",
			quickLinks: "ፈጣን አገናኞች",
			contact: "አግኙን",
			rights: "መብቱ በህግ የተጠበቀ ነው።"
		},
		whatsappMsg: "ሰላም፣ በሉሲ ሆቴል ውስጥ ክፍል ማስያዝ እፈልጋለሁ።"
	}
};
var LanguageContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "lucy-lang";
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "en" || stored === "am") setLangState(stored);
	}, []);
	const setLang = (next) => {
		setLangState(next);
		window.localStorage.setItem(STORAGE_KEY, next);
	};
	const toggle = () => setLang(lang === "en" ? "am" : "en");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value: {
			lang,
			setLang,
			toggle,
			t: translations[lang]
		},
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
var hotel = {
	name: "Lucy Hotel",
	tagline: "Boutique Luxury & Heritage in Dessie",
	phone: "+251961614444",
	phoneDisplay: "+251 96 161 4444",
	email: "hdosman040@gmail.com",
	whatsapp: "251961614444",
	address: "Dessie, Ethiopia",
	coordinates: {
		lat: 11.144065,
		lng: 39.63553,
		googleMapsLink: "https://www.google.com/maps/place/11%C2%B008'38.6%22N+39%C2%B038'07.9%22E/@11.144065,39.635530,17z"
	},
	social: {
		facebook: "https://facebook.com",
		instagram: "https://instagram.com",
		telegram: "https://t.me",
		twitter: "https://twitter.com"
	},
	stats: [
		{
			value: 10,
			suffix: "+",
			key: "years"
		},
		{
			value: 85,
			suffix: "",
			key: "rooms"
		},
		{
			value: 15e3,
			suffix: "+",
			key: "guests"
		},
		{
			value: 60,
			suffix: "+",
			key: "staff"
		}
	]
};
function whatsappLink(message) {
	return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LanguageToggle({ className }) {
	const { lang, setLang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center rounded-full border border-current/20 p-0.5 text-xs font-medium uppercase tracking-wider", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setLang("en"),
			className: cn("rounded-full px-2.5 py-1 transition-colors", lang === "en" ? "bg-gold text-gold-foreground" : "opacity-70 hover:opacity-100"),
			"aria-pressed": lang === "en",
			children: "EN"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setLang("am"),
			className: cn("rounded-full px-2.5 py-1 transition-colors", lang === "am" ? "bg-gold text-gold-foreground" : "opacity-70 hover:opacity-100"),
			"aria-pressed": lang === "am",
			children: "አማ"
		})]
	});
}
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var links = [
	{
		id: "home",
		href: "#home"
	},
	{
		id: "rooms",
		href: "#rooms"
	},
	{
		id: "services",
		href: "#services"
	},
	{
		id: "gallery",
		href: "#gallery"
	},
	{
		id: "about",
		href: "#about"
	},
	{
		id: "contact",
		href: "#contact"
	}
];
function Navbar() {
	const { t } = useLanguage();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const handleNav = (href) => {
		setOpen(false);
		document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "bg-[#0F2A43]/95 py-3.5 shadow-[0_4px_30px_rgba(15,42,67,0.15)] backdrop-blur-md border-b border-[#E2D6BC]/10" : "bg-transparent py-6"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "container-lux flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => handleNav("#home"),
					className: "flex flex-col items-start leading-none transition-opacity duration-300 hover:opacity-80 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-serif text-2xl font-medium tracking-[0.18em] uppercase text-[#F3E9D2]",
						children: ["LUCY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#C9A227] font-light",
							children: "HOTEL"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.55rem] uppercase tracking-[0.4em] text-[#F3E9D2]/60 mt-1.5 font-medium",
						children: "Dessie · Ethiopia"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-9 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleNav(l.href),
						className: cn("group relative text-[0.7rem] font-bold uppercase tracking-[0.25em] transition-colors duration-300", scrolled ? "text-[#F3E9D2]/80 hover:text-[#C9A227]" : "text-[#F3E9D2]/90 hover:text-[#C9A227]"),
						children: [t.nav[l.id], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-[#C9A227] transition-all duration-500 ease-out group-hover:w-full" })]
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, { className: "text-[#F3E9D2] hover:text-[#C9A227] transition-colors duration-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(t.whatsappMsg),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden rounded-none bg-[#C9A227] px-7 py-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] border border-[#C9A227] sm:inline-block shadow-sm",
							children: t.nav.bookNow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "lg:hidden text-[#F3E9D2] hover:text-[#C9A227] transition-colors duration-300 p-1.5",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6 stroke-[1.5]" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
								side: "right",
								className: "w-80 bg-[#0F2A43] border-l border-[#E2D6BC]/20 p-8 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
									className: "font-serif text-2xl tracking-[0.18em] text-[#F3E9D2] uppercase border-b border-[#E2D6BC]/10 pb-5",
									children: ["LUCY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#C9A227] font-light",
										children: "HOTEL"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 flex flex-col gap-7",
									children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleNav(l.href),
										className: "text-left text-[0.75rem] uppercase tracking-[0.25em] font-bold text-[#F3E9D2]/80 transition-colors duration-300 hover:text-[#C9A227]",
										children: t.nav[l.id]
									}, l.id))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 border-t border-[#E2D6BC]/10 pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: whatsappLink(t.whatsappMsg),
										target: "_blank",
										rel: "noopener noreferrer",
										className: "rounded-none bg-[#C9A227] py-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43]",
										children: t.nav.bookNow
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-center text-[0.65rem] tracking-[0.15em] uppercase text-[#F3E9D2]/60 mt-3 font-medium",
										children: ["Tel: ", hotel.phoneDisplay || "0961614444"]
									})]
								})]
							})]
						})
					]
				})
			]
		})
	});
}
function Hero() {
	const { t } = useLanguage();
	const heroImg = "/images/hero-background.jpg";
	const scrollTo = (id) => {
		document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F2A43]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: heroImg,
				alt: "Lucy Hotel illuminated exterior at dusk",
				width: 1920,
				height: 1088,
				className: "absolute inset-0 h-full w-full object-cover opacity-60 scale-105 transition-transform duration-[10000ms] ease-out",
				style: { animation: "zoomSlow 20s infinite alternate" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#0F2A43]/80 via-[#0F2A43]/50 to-[#FAFAFA]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux relative z-10 flex flex-col items-center text-center text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal is-visible mb-5 text-[0.75rem] font-medium uppercase tracking-[0.5em] text-[#C9A227]",
						style: { animationDelay: "200ms" },
						children: t.hero.welcome
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "reveal is-visible max-w-5xl text-balance font-serif text-4xl font-normal leading-tight text-[#F3E9D2] sm:text-6xl lg:text-7xl lg:leading-[1.15]",
						style: { animationDelay: "400ms" },
						children: t.hero.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal is-visible mt-6 max-w-2xl text-balance text-sm font-light leading-relaxed tracking-wide text-[#F3E9D2]/80 sm:text-lg",
						style: { animationDelay: "600ms" },
						children: t.hero.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal is-visible mt-10 flex flex-col gap-4 sm:flex-row",
						style: { animationDelay: "800ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(t.whatsappMsg),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-sm bg-[#C9A227] px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] shadow-[0_4px_20px_rgba(201,162,39,0.2)]",
							children: t.hero.book
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollTo("#rooms"),
							className: "rounded-sm border border-[#F3E9D2]/40 px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#F3E9D2] backdrop-blur-sm transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] hover:border-[#F3E9D2]",
							children: t.hero.explore
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => scrollTo("#booking"),
				"aria-label": "Scroll down",
				className: "absolute bottom-12 left-1/2 z-10 -translate-x-1/2 text-[#C9A227]/80 transition-transform duration-300 hover:translate-y-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.6rem] uppercase tracking-[0.3em] font-medium text-[#0F2A43]",
						children: "Scroll"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-10 w-[1px] bg-gradient-to-b from-[#C9A227] to-transparent animate-[pulse_2s_infinite]" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      ` })
		]
	});
}
var rooms = [
	{
		id: "deluxe",
		image: "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
		gallery: [
			"/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
			"/images/lucy-hotel/rooms/room-executive-suite.jpg",
			"/images/lucy-hotel/rooms/room-standard-king.jpg"
		],
		guests: 2,
		price: 120,
		amenityKeys: [
			"wifi",
			"breakfast",
			"ac",
			"tv"
		]
	},
	{
		id: "executive",
		image: "/images/lucy-hotel/rooms/room-executive-suite.jpg",
		gallery: [
			"/images/lucy-hotel/rooms/room-executive-suite.jpg",
			"/images/lucy-hotel/rooms/room-standard-king.jpg",
			"/images/lucy-hotel/rooms/room-deluxe-queen.jpg"
		],
		guests: 2,
		price: 180,
		amenityKeys: [
			"wifi",
			"breakfast",
			"ac",
			"tv",
			"workspace"
		]
	},
	{
		id: "junior",
		image: "/images/lucy-hotel/rooms/room-standard-king.jpg",
		gallery: [
			"/images/lucy-hotel/rooms/room-standard-king.jpg",
			"/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
			"/images/lucy-hotel/rooms/room-executive-suite.jpg"
		],
		guests: 3,
		price: 240,
		amenityKeys: [
			"wifi",
			"breakfast",
			"ac",
			"tv",
			"lounge",
			"minibar"
		]
	},
	{
		id: "family",
		image: "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
		gallery: ["/images/lucy-hotel/rooms/room-deluxe-queen.jpg", "/images/lucy-hotel/rooms/room-standard-king.jpg"],
		guests: 4,
		price: 300,
		amenityKeys: [
			"wifi",
			"breakfast",
			"ac",
			"tv",
			"lounge",
			"minibar"
		]
	},
	{
		id: "presidential",
		image: "/images/lucy-hotel/rooms/room-executive-suite.jpg",
		gallery: [
			"/images/lucy-hotel/rooms/room-executive-suite.jpg",
			"/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
			"/images/lucy-hotel/rooms/room-standard-king.jpg"
		],
		guests: 4,
		price: 550,
		amenityKeys: [
			"wifi",
			"breakfast",
			"ac",
			"tv",
			"lounge",
			"minibar",
			"butler",
			"pool"
		]
	}
];
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function BookingWidget({ defaultRoom }) {
	const { t } = useLanguage();
	const [checkIn, setCheckIn] = (0, import_react.useState)();
	const [checkOut, setCheckOut] = (0, import_react.useState)();
	const [guests, setGuests] = (0, import_react.useState)("2");
	const [room, setRoom] = (0, import_react.useState)(defaultRoom ?? "");
	const reserve = () => {
		const roomName = room ? t.rooms.items[room].name : "";
		const parts = [
			t.whatsappMsg,
			checkIn && `${t.booking.checkin}: ${format(checkIn, "PPP")}`,
			checkOut && `${t.booking.checkout}: ${format(checkOut, "PPP")}`,
			`${t.booking.guests}: ${guests}`,
			roomName && `${t.booking.room}: ${roomName}`
		].filter(Boolean);
		window.open(whatsappLink(parts.join("\n")), "_blank");
	};
	const dateBtn = (value, placeholder) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "outline",
		className: cn("h-12 w-full justify-start rounded-none border-[#0F2A43]/10 bg-[#FAFAFA] text-left font-light transition-all duration-300 hover:border-[#C9A227]/40 hover:bg-[#FAFAFA]/50 focus-visible:ring-1 focus-visible:ring-[#C9A227]", !value && "text-muted-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, { className: "mr-2 h-4 w-4 text-[#C9A227] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm tracking-wide text-[#0F2A43]",
			children: value ? format(value, "PP") : placeholder
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "booking",
		className: "relative z-20 -mt-24 px-4 sm:-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-lux",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-none border border-[#C9A227]/25 bg-white/95 p-6 shadow-[0_25px_50px_-12px_rgba(15,42,67,0.15)] backdrop-blur-md sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-5 md:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.booking.checkin,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
								asChild: true,
								children: dateBtn(checkIn, t.booking.checkin)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
								className: "w-auto p-0 border-[#C9A227]/20",
								align: "start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									mode: "single",
									selected: checkIn,
									onSelect: setCheckIn,
									disabled: (d) => d < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
									initialFocus: true,
									className: cn("p-3 pointer-events-auto bg-white")
								})
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.booking.checkout,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
								asChild: true,
								children: dateBtn(checkOut, t.booking.checkout)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
								className: "w-auto p-0 border-[#C9A227]/20",
								align: "start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									mode: "single",
									selected: checkOut,
									onSelect: setCheckOut,
									disabled: (d) => d <= (checkIn ?? /* @__PURE__ */ new Date()),
									initialFocus: true,
									className: cn("p-3 pointer-events-auto bg-white")
								})
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.booking.guests,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: guests,
								onValueChange: setGuests,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-12 rounded-none border-[#0F2A43]/10 bg-[#FAFAFA] text-sm tracking-wide text-[#0F2A43] focus:ring-1 focus:ring-[#C9A227] transition-colors hover:border-[#C9A227]/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									className: "border-[#C9A227]/20",
									children: [
										1,
										2,
										3,
										4,
										5,
										6
									].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: String(n),
										className: "text-sm text-[#0F2A43] focus:bg-[#F3E9D2]/40 focus:text-[#0F2A43]",
										children: [
											n,
											" ",
											n === 1 ? t.booking.guest : t.booking.guestsLabel
										]
									}, n))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.booking.room,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: room,
								onValueChange: setRoom,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-12 rounded-none border-[#0F2A43]/10 bg-[#FAFAFA] text-sm tracking-wide text-[#0F2A43] focus:ring-1 focus:ring-[#C9A227] transition-colors hover:border-[#C9A227]/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: t.booking.selectRoom })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									className: "border-[#C9A227]/20",
									children: rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: r.id,
										className: "text-sm text-[#0F2A43] focus:bg-[#F3E9D2]/40 focus:text-[#0F2A43]",
										children: t.rooms.items[r.id].name
									}, r.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: reserve,
								className: "h-12 w-full rounded-none bg-[#0F2A43] text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#F3E9D2] transition-all duration-300 hover:bg-[#C9A227] hover:text-[#0F2A43] shadow-md hover:shadow-lg",
								children: t.booking.reserve
							})
						})
					]
				})
			})
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#0F2A43]/60",
			children: label
		}), children]
	});
}
function AnimatedSection({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", visible && "is-visible", className),
		style: { animationDelay: `${delay}ms` },
		children
	});
}
function SectionHeader({ eyebrow, title, subtitle, light = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
		className: cn("flex flex-col items-center text-center", className),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-3 text-xs uppercase tracking-[0.4em] text-gold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("text-balance font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl", light ? "text-white" : "text-foreground"),
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line mt-5" }),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-5 max-w-xl text-balance", light ? "text-white/75" : "text-muted-foreground"),
				children: subtitle
			})
		]
	});
}
var amenityIcons = {
	wifi: Wifi,
	breakfast: Coffee,
	ac: Snowflake,
	tv: Tv,
	workspace: Briefcase,
	lounge: Sofa,
	minibar: Wine,
	butler: UserRound,
	pool: Waves
};
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function RoomModal({ room, onClose }) {
	const { t } = useLanguage();
	const [activeImg, setActiveImg] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setActiveImg(0);
	}, [room]);
	if (!room) return null;
	const info = t.rooms.items[room.id];
	const bookMsg = `${t.whatsappMsg}\n${t.booking.room}: ${info.name}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!room,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-3xl overflow-y-auto rounded-sm p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: room.gallery[activeImg],
						alt: info.name,
						className: "aspect-video w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute right-3 top-3 rounded-full bg-charcoal/70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-charcoal",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 px-6 pt-4",
					children: room.gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveImg(i),
						className: cn("h-14 w-20 overflow-hidden rounded-sm border-2 transition-all", i === activeImg ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-3xl font-semibold",
								children: info.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-gold" }),
									room.guests,
									" ",
									t.rooms.guests
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-gold",
							children: [
								t.rooms.from,
								" $",
								room.price,
								" / ",
								t.rooms.night
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: info.long
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-6 text-sm font-semibold uppercase tracking-wider",
							children: t.rooms.amenities
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3",
							children: room.amenityKeys.map((key) => {
								const Icon = amenityIcons[key];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 text-sm text-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-gold" }), t.amenities[key]]
								}, key);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(bookMsg),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-8 block w-full rounded-none bg-gold py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gold-foreground transition-transform hover:scale-[1.02]",
							children: t.rooms.bookRoom
						})
					]
				})
			]
		})
	});
}
function RoomsSection() {
	const { t } = useLanguage();
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "rooms",
		className: "bg-[#FAFAFA] border-t border-[#E2D6BC]/30 py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.hero.welcome,
				title: t.rooms.title,
				subtitle: t.rooms.subtitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: rooms.map((room, i) => {
					const info = t.rooms.items[room.id];
					const featured = room.id === "presidential";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
						delay: i * 80,
						className: featured ? "sm:col-span-2 lg:col-span-1" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex h-full flex-col overflow-hidden rounded-none border border-[#E2D6BC]/50 bg-white shadow-[0_4px_25px_rgba(15,42,67,0.02)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,42,67,0.08)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden bg-[#0F2A43]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: room.image,
									alt: info.name,
									loading: "lazy",
									width: 1200,
									height: 900,
									className: "aspect-[4/3] w-full object-cover opacity-90 transition-transform duration-[1500ms] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-105 group-hover:opacity-100"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute right-0 bottom-0 bg-[#0F2A43] border-t border-l border-[#C9A227]/30 px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F3E9D2]",
									children: [
										t.rooms.from,
										" $",
										room.price,
										" / ",
										t.rooms.night
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between border-b border-[#E2D6BC]/20 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-2xl font-medium tracking-wide text-[#0F2A43]",
											children: info.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#C9A227] uppercase",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
												room.guests,
												" ",
												t.booking.guestsLabel
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 flex-1 text-sm font-light leading-relaxed text-[#1E252D]/85",
										children: info.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-2",
										children: room.amenityKeys.slice(0, 4).map((key) => {
											const Icon = amenityIcons[key];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 rounded-none bg-[#F3E9D2]/30 border border-[#E2D6BC]/40 px-3 py-1.5 text-[0.65rem] font-medium tracking-[0.1em] text-[#0F2A43]/90 uppercase",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-[#C9A227] shrink-0" }), t.amenities[key]]
											}, key);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActive(room),
										className: "mt-8 w-full rounded-none border border-[#0F2A43] bg-transparent py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] hover:border-[#0F2A43] shadow-sm hover:shadow",
										children: t.rooms.viewDetails
									})
								]
							})]
						})
					}, room.id);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomModal, {
			room: active,
			onClose: () => setActive(null)
		})]
	});
}
var items = [
	{
		key: "restaurant",
		Icon: UtensilsCrossed
	},
	{
		key: "wifi",
		Icon: Wifi
	},
	{
		key: "roomService",
		Icon: BellRing
	},
	{
		key: "conference",
		Icon: Presentation
	},
	{
		key: "airport",
		Icon: Plane
	},
	{
		key: "parking",
		Icon: Car
	}
];
function ServicesSection() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-white border-t border-[#E2D6BC]/30 py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.nav.services,
				title: t.services.title,
				subtitle: t.services.subtitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map(({ key, Icon }, i) => {
					const info = t.services.items[key];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex h-full flex-col items-center bg-[#FAFAFA] border border-[#E2D6BC]/40 p-12 text-center transition-all duration-500 hover:bg-white hover:border-[#C9A227]/50 hover:shadow-[0_20px_40px_rgba(15,42,67,0.05)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-16 w-16 items-center justify-center rounded-none border border-[#C9A227]/30 bg-[#F3E9D2]/25 text-[#C9A227] transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-[#C9A227] group-hover:text-white group-hover:border-[#C9A227] shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 stroke-[1.25]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-serif text-xl font-medium tracking-wide text-[#0F2A43]",
									children: info.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "my-4 h-px w-8 bg-[#E2D6BC]/60 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C9A227]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-light leading-relaxed text-[#1E252D]/80",
									children: info.desc
								})
							]
						})
					}, key);
				})
			})]
		})
	});
}
function StatCounter({ value, suffix, label }) {
	const ref = (0, import_react.useRef)(null);
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			observer.disconnect();
			const duration = 1600;
			const start = performance_default.now();
			const tick = (now) => {
				const p = Math.min((now - start) / duration, 1);
				const eased = 1 - Math.pow(1 - p, 3);
				setCount(Math.round(eased * value));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .4 });
		observer.observe(el);
		return () => observer.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-serif text-4xl font-semibold text-gold sm:text-5xl",
			children: [count >= 1e3 ? `${(count / 1e3).toFixed(count >= value ? 0 : 1)}k` : count, suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-xs uppercase tracking-wider text-white/70 sm:text-sm",
			children: label
		})]
	});
}
function AboutSection() {
	const { t } = useLanguage();
	const aboutImg = "/images/lucy-hotel/views/building-day-view.jpg";
	const yearsStat = hotel.stats.find((s) => s.key === "years");
	const yearsDisplay = yearsStat ? `${yearsStat.value}${yearsStat.suffix}` : "10+";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "bg-[#FAFAFA] border-t border-[#E2D6BC]/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-lux py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
					className: "relative px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-4 -left-2 h-full w-full border border-[#C9A227]/25 z-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: aboutImg,
							alt: "Lucy Hotel grand exterior view",
							loading: "lazy",
							width: 1200,
							height: 900,
							className: "relative z-10 rounded-none object-cover shadow-[0_20px_40px_rgba(15,42,67,0.12)] border border-[#E2D6BC]/40"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 -right-2 z-20 hidden rounded-none bg-[#0F2A43] border border-[#C9A227]/30 px-9 py-7 text-center shadow-lg sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-4xl font-light text-[#C9A227] tracking-wider",
								children: yearsDisplay
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[0.6rem] font-semibold text-[#F3E9D2] uppercase tracking-[0.25em] mt-1.5",
								children: t.about.stats.years
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
					delay: 120,
					className: "flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.7rem] uppercase tracking-[0.45em] text-[#C9A227] font-semibold mb-3",
							children: t.about.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-medium tracking-wide text-[#0F2A43] sm:text-4xl lg:text-5xl leading-tight",
							children: t.about.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line mt-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm sm:text-base font-light leading-relaxed text-[#1E252D]/85",
							children: t.about.body1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm sm:text-base font-light leading-relaxed text-[#1E252D]/80",
							children: t.about.body2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 border-l border-[#C9A227] bg-[#F3E9D2]/20 py-5 pl-6 pr-4 rounded-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-md font-semibold text-[#0F2A43] tracking-wider uppercase text-xs",
								children: t.about.missionTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 italic font-light text-sm text-[#1E252D]/90 leading-relaxed",
								children: [
									"\"",
									t.about.mission,
									"\""
								]
							})]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-[#0F2A43] border-y border-[#E2D6BC]/15 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-lux grid grid-cols-2 gap-y-12 gap-x-6 lg:grid-cols-4",
				children: hotel.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
					value: s.value,
					suffix: s.suffix,
					label: t.about.stats[s.key]
				}, s.key))
			})
		})]
	});
}
var galleryItems = [
	{
		src: "/images/lucy-hotel/views/building-day-view.jpg",
		category: "exterior"
	},
	{
		src: "/images/lucy-hotel/views/Bird-view.jpg",
		category: "exterior"
	},
	{
		src: "/images/lucy-hotel/views/front-night-view.jpg",
		category: "exterior"
	},
	{
		src: "/images/lucy-hotel/views/Building-night-view.jpg",
		category: "exterior"
	},
	{
		src: "/images/lucy-hotel/views/view-mountain-panoramic.jpg",
		category: "exterior"
	},
	{
		src: "/images/lucy-hotel/views/Dim-light-view.jpg",
		category: "exterior"
	},
	{
		src: "/images/lucy-hotel/views/view-terrace-balcony.jpg",
		category: "exterior"
	},
	{
		src: "/images/lucy-hotel/rooms/room-standard-king.jpg",
		category: "rooms"
	},
	{
		src: "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
		category: "rooms"
	},
	{
		src: "/images/lucy-hotel/rooms/room-executive-suite.jpg",
		category: "rooms"
	},
	{
		src: "/images/lucy-hotel/restaurant/dining-main-restaurant.jpg",
		category: "restaurant"
	},
	{
		src: "/images/lucy-hotel/restaurant/food-injera-habesha.jpg",
		category: "restaurant"
	},
	{
		src: "/images/lucy-hotel/restaurant/food-chicken-cutlet.jpg",
		category: "restaurant"
	},
	{
		src: "/images/lucy-hotel/restaurant/food-sizzling-tibs.jpg",
		category: "restaurant"
	},
	{
		src: "/images/lucy-hotel/restaurant/food-club-sandwich.jpg",
		category: "restaurant"
	},
	{
		src: "/images/lucy-hotel/restaurant/food-tibs-rice-combo.jpg",
		category: "restaurant"
	},
	{
		src: "/images/lucy-hotel/restaurant/food-grilled-meat-rice.jpg",
		category: "restaurant"
	},
	{
		src: "/images/lucy-hotel/events/dining-boardroom-suite.jpg",
		category: "events"
	},
	{
		src: "/images/lucy-hotel/events/dining-vip-banquet.jpg",
		category: "events"
	},
	{
		src: "/images/lucy-hotel/facilities/amenity-conference.jpg",
		category: "facilities"
	},
	{
		src: "/images/lucy-hotel/facilities/amenity-fitness-gym.jpg",
		category: "facilities"
	}
];
var galleryCategories = [
	"rooms",
	"restaurant",
	"exterior",
	"events",
	"facilities"
];
function GallerySection() {
	const { t } = useLanguage();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter), [filter]);
	const chips = ["all", ...galleryCategories];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "bg-[#FAFAFA] border-t border-[#E2D6BC]/30 py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.nav.gallery,
					title: t.gallery.title,
					subtitle: t.gallery.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: chips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(c),
						className: cn("rounded-none border px-6 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all duration-300", filter === c ? "bg-[#0F2A43] text-[#F3E9D2] border-[#0F2A43] shadow-md" : "border-[#E2D6BC]/60 bg-white text-[#0F2A43]/70 hover:border-[#C9A227] hover:text-[#0F2A43]"),
						children: c === "all" ? t.gallery.all : t.gallery.categories[c]
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
					children: filtered.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
						delay: i % 4 * 60,
						className: cn(i % 5 === 0 && "md:col-span-2 md:row-span-2"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setLightbox(item.src),
							className: "group relative block h-full w-full overflow-hidden rounded-none border border-[#E2D6BC]/40 bg-[#0F2A43] shadow-[0_4px_20px_rgba(15,42,67,0.02)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: t.gallery.categories[item.category],
								loading: "lazy",
								className: "h-full w-full object-cover aspect-[4/3] opacity-95 transition-all duration-[1500ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-105 group-hover:opacity-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0 flex items-end bg-gradient-to-t from-[#0F2A43]/90 via-[#0F2A43]/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[#F3E9D2] border-b border-[#C9A227]/40 pb-1.5 transition-all duration-500 hover:border-[#C9A227]",
									children: t.gallery.categories[item.category]
								})
							})]
						})
					}, `${item.src}-${i}`))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!lightbox,
			onOpenChange: (o) => !o && setLightbox(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-w-4xl border-0 bg-transparent p-0 shadow-none",
				children: lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative border border-[#E2D6BC]/30 bg-[#0F2A43]/95 backdrop-blur-md p-1 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: lightbox,
						alt: "Enlarged gallery view",
						className: "w-full h-auto object-contain max-h-[85vh]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLightbox(null),
						className: "absolute right-4 top-4 rounded-none bg-[#0F2A43] border border-[#E2D6BC]/30 p-2.5 text-white hover:bg-[#C9A227] hover:text-[#0F2A43] transition-colors",
						"aria-label": "Close image lightbox",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4.5 w-4.5" })
					})]
				})
			})
		})]
	});
}
var testimonials = [
	{
		id: 1,
		name: "Sara Tesfaye",
		location: "Addis Ababa",
		rating: 5,
		en: "An unforgettable stay. The rooms were immaculate and the staff treated us like royalty. Truly a five-star experience in Dessie.",
		am: "የማይረሳ ቆይታ ነበር። ክፍሎቹ በጣም ንጹህ ነበሩ፣ ሰራተኞቹም እንደ ንጉስ አስተናገዱን። በደሴ እውነተኛ ባለ አምስት ኮከብ ተሞክሮ።"
	},
	{
		id: 2,
		name: "James Miller",
		location: "London, UK",
		rating: 5,
		en: "Elegant, comfortable and exceptional service. The dining was world-class and the attention to detail was remarkable.",
		am: "የተዋበ፣ ምቹ እና ልዩ አገልግሎት። ምግቡ ዓለም አቀፍ ደረጃ ያለው ሲሆን ለዝርዝር ጉዳዮች የተሰጠው ትኩረት አስደናቂ ነበር።"
	},
	{
		id: 3,
		name: "Hanna Girma",
		location: "Bahir Dar",
		rating: 5,
		en: "From check-in to check-out everything was perfect. The Presidential Suite exceeded all our expectations.",
		am: "ከመግቢያ እስከ መውጫ ሁሉም ነገር ፍጹም ነበር። የፕሬዚዳንታዊ ስዊቱ ከጠበቅነው በላይ ነበር።"
	},
	{
		id: 4,
		name: "Michael Okonkwo",
		location: "Nairobi, Kenya",
		rating: 5,
		en: "The perfect blend of luxury and warm Ethiopian hospitality. I will definitely be returning on my next visit.",
		am: "የቅንጦት እና የሞቀ የኢትዮጵያ እንግዳ ተቀባይነት ፍጹም ጥምረት። በሚቀጥለው ጉዞዬ በእርግጠኝነት እመለሳለሁ።"
	}
];
function Testimonials() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "bg-[#FAFAFA] border-t border-[#E2D6BC]/30 py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.nav.about,
				title: t.testimonials.title,
				subtitle: t.testimonials.subtitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-8 md:grid-cols-2",
				children: testimonials.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "relative flex h-full flex-col rounded-none border border-[#E2D6BC]/50 bg-white p-8 sm:p-10 shadow-[0_4px_25px_rgba(15,42,67,0.02)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(15,42,67,0.05)] hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute right-8 top-8 h-12 w-12 text-[#C9A227]/10 stroke-[1]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-[#C9A227]",
								children: Array.from({ length: review.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[#C9A227] stroke-[1] text-[#C9A227]" }, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-6 flex-1 text-sm sm:text-base font-light italic leading-relaxed text-[#1E252D]/85",
								children: [
									"\"",
									lang === "en" ? review.en : review.am,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-8 border-t border-[#E2D6BC]/30 pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-lg font-medium tracking-wide text-[#0F2A43]",
									children: review.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[0.65rem] font-semibold text-[#C9A227] uppercase tracking-[0.15em] mt-1",
									children: review.location
								})]
							})
						]
					})
				}, review.id))
			})]
		})
	});
}
function ContactSection() {
	const { t } = useLanguage();
	const rows = [
		{
			Icon: MapPin,
			label: t.contact.address,
			value: hotel.address,
			href: void 0
		},
		{
			Icon: Phone,
			label: t.contact.phone,
			value: hotel.phoneDisplay,
			href: `tel:${hotel.phone}`
		},
		{
			Icon: Mail,
			label: t.contact.email,
			value: hotel.email,
			href: `mailto:${hotel.email}`
		},
		{
			Icon: MessageCircle,
			label: t.contact.whatsapp,
			value: hotel.phoneDisplay,
			href: whatsappLink(t.whatsappMsg)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-white border-t border-[#E2D6BC]/30 py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.nav.contact,
				title: t.contact.title,
				subtitle: t.contact.subtitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-6",
							children: rows.map(({ Icon, label, value, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-5 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-none border border-[#C9A227]/30 bg-[#F3E9D2]/25 text-[#C9A227] transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-[#0F2A43] group-hover:border-[#C9A227]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 stroke-[1.25]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#0F2A43]/60 mb-1",
									children: label
								}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: href.startsWith("http") ? "_blank" : void 0,
									rel: "noopener noreferrer",
									className: "text-sm sm:text-base font-light text-[#0F2A43] transition-colors duration-300 hover:text-[#C9A227]",
									children: value
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm sm:text-base font-light text-[#0F2A43]",
									children: value
								})] })]
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 border-t border-[#E2D6BC]/20 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#0F2A43]/60",
								children: t.contact.follow
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-3",
								children: [
									{
										Icon: Facebook,
										href: hotel.social.facebook
									},
									{
										Icon: Instagram,
										href: hotel.social.instagram
									},
									{
										Icon: Twitter,
										href: hotel.social.twitter
									}
								].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex h-11 w-11 items-center justify-center rounded-none border border-[#E2D6BC]/50 bg-white text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] hover:border-[#0F2A43]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 stroke-[1.25]" })
								}, i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink(t.whatsappMsg),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 inline-flex w-fit items-center gap-2.5 rounded-none bg-[#C9A227] px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] shadow-sm hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4.5 w-4.5 stroke-[1.5]" }), t.contact.chat]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
					delay: 120,
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-3 -left-2 h-full w-full border border-[#C9A227]/25 z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 h-full min-h-72 overflow-hidden rounded-none border border-[#E2D6BC]/60 bg-white p-2 shadow-[0_15px_30px_rgba(15,42,67,0.06)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Lucy Hotel location — Dessie, Ethiopia",
							src: "https://www.openstreetmap.org/export/embed.html?bbox=39.60%2C11.10%2C39.68%2C11.16&layer=mapnik&marker=11.131%2C39.635",
							className: "h-full min-h-72 w-full rounded-none opacity-90 transition-opacity duration-300 hover:opacity-100",
							loading: "lazy",
							style: { border: 0 }
						})
					})]
				})]
			})]
		})
	});
}
var linkIds = [
	"home",
	"rooms",
	"services",
	"gallery",
	"about",
	"contact"
];
function Footer() {
	const { t } = useLanguage();
	const scrollTo = (id) => {
		document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[#0F2A43] text-[#F3E9D2]/80 border-t border-[#C9A227]/35",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-serif text-2xl font-medium tracking-[0.18em] uppercase text-[#F3E9D2] leading-none",
							children: ["LUCY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C9A227] font-light",
								children: "HOTEL"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.55rem] uppercase tracking-[0.4em] text-[#F3E9D2]/50 mt-1.5 font-medium",
							children: "Dessie · Ethiopia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xs text-xs font-light leading-relaxed text-[#F3E9D2]/75",
							children: t.footer.tagline
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C9A227]",
					children: t.footer.quickLinks
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3.5 text-xs font-medium uppercase tracking-[0.15em]",
					children: linkIds.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo(`#${id}`),
						className: "transition-colors duration-300 hover:text-[#C9A227] text-left",
						children: t.nav[id]
					}) }, id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C9A227]",
					children: t.footer.contact
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-4 text-xs font-light leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-[#C9A227] shrink-0 stroke-[1.25]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#F3E9D2]/85",
								children: hotel.address
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[#C9A227] shrink-0 stroke-[1.25]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${hotel.phone}`,
								className: "hover:text-[#C9A227] transition-colors duration-300 text-[#F3E9D2]/85",
								children: hotel.phoneDisplay
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[#C9A227] shrink-0 stroke-[1.25]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${hotel.email}`,
								className: "hover:text-[#C9A227] transition-colors duration-300 text-[#F3E9D2]/85",
								children: hotel.email
							})]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C9A227]",
					children: t.contact.follow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3",
					children: [
						{
							Icon: Facebook,
							href: hotel.social.facebook
						},
						{
							Icon: Instagram,
							href: hotel.social.instagram
						},
						{
							Icon: Twitter,
							href: hotel.social.twitter
						}
					].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex h-11 w-11 items-center justify-center rounded-none border border-[#E2D6BC]/20 bg-transparent text-[#F3E9D2] transition-all duration-300 hover:bg-[#C9A227] hover:text-[#0F2A43] hover:border-[#C9A227]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5 stroke-[1.25]" })
					}, i))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-[#E2D6BC]/10 bg-[#091F32] py-8 text-center text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#F3E9D2]/40",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				hotel.name,
				". ",
				t.footer.rights
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWidget, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	}) });
}
//#endregion
export { Index as component };
