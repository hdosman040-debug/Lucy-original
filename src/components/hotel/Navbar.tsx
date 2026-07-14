import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { hotel, whatsappLink } from "@/data/hotel";
import { LanguageToggle } from "./LanguageToggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", href: "#home" },
  { id: "rooms", href: "#rooms" },
  { id: "services", href: "#services" },
  { id: "gallery", href: "#gallery" },
  { id: "about", href: "#about" },
  { id: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0F2A43]/95 py-3.5 shadow-[0_4px_30px_rgba(15,42,67,0.15)] backdrop-blur-md border-b border-[#E2D6BC]/10"
          : "bg-transparent py-6",
      )}
    >
      <nav className="container-lux flex items-center justify-between">
        {/* Editorial Boutique Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex flex-col items-start leading-none transition-opacity duration-300 hover:opacity-80 text-left"
        >
          <span className="font-serif text-2xl font-medium tracking-[0.18em] uppercase text-[#F3E9D2]">
            LUCY <span className="text-[#C9A227] font-light">HOTEL</span>
          </span>
          <span className="text-[0.55rem] uppercase tracking-[0.4em] text-[#F3E9D2]/60 mt-1.5 font-medium">
            Dessie · Ethiopia
          </span>
        </button>

        {/* Minimalist Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.href)}
              className={cn(
                "group relative text-[0.7rem] font-bold uppercase tracking-[0.25em] transition-colors duration-300",
                scrolled ? "text-[#F3E9D2]/80 hover:text-[#C9A227]" : "text-[#F3E9D2]/90 hover:text-[#C9A227]",
              )}
            >
              {t.nav[l.id]}
              <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-[#C9A227] transition-all duration-500 ease-out group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Controls & CTA Button */}
        <div className="flex items-center gap-4">
          <LanguageToggle className="text-[#F3E9D2] hover:text-[#C9A227] transition-colors duration-300" />
          
          {/* Geometric Premium CTA */}
          <a
            href={whatsappLink(t.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-none bg-[#C9A227] px-7 py-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] border border-[#C9A227] sm:inline-block shadow-sm"
          >
            {t.nav.bookNow}
          </a>

          {/* Mobile Menu Toggle */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden text-[#F3E9D2] hover:text-[#C9A227] transition-colors duration-300 p-1.5"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 stroke-[1.5]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#0F2A43] border-l border-[#E2D6BC]/20 p-8 flex flex-col justify-between">
              <div>
                <SheetTitle className="font-serif text-2xl tracking-[0.18em] text-[#F3E9D2] uppercase border-b border-[#E2D6BC]/10 pb-5">
                  LUCY <span className="text-[#C9A227] font-light">HOTEL</span>
                </SheetTitle>
                <div className="mt-10 flex flex-col gap-7">
                  {links.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => handleNav(l.href)}
                      className="text-left text-[0.75rem] uppercase tracking-[0.25em] font-bold text-[#F3E9D2]/80 transition-colors duration-300 hover:text-[#C9A227]"
                    >
                      {t.nav[l.id]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#E2D6BC]/10 pt-6">
                <a
                  href={whatsappLink(t.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none bg-[#C9A227] py-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43]"
                >
                  {t.nav.bookNow}
                </a>
                <p className="text-center text-[0.65rem] tracking-[0.15em] uppercase text-[#F3E9D2]/60 mt-3 font-medium">
                  Tel: {hotel.phoneDisplay || "0961614444"}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
