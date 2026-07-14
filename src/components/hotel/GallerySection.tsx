import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { SectionHeader } from "./SectionHeader";
import { AnimatedSection } from "./AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Filter = GalleryCategory | "all";

export function GallerySection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter],
  );

  const chips: Filter[] = ["all", ...galleryCategories];

  return (
    <section id="gallery" className="bg-[#FAFAFA] border-t border-[#E2D6BC]/30 py-28">
      <div className="container-lux">
        <SectionHeader eyebrow={t.nav.gallery} title={t.gallery.title} subtitle={t.gallery.subtitle} />

        {/* Minimalist Exhibition Categories Filter Menu */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-none border px-6 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all duration-300",
                filter === c
                  ? "bg-[#0F2A43] text-[#F3E9D2] border-[#0F2A43] shadow-md"
                  : "border-[#E2D6BC]/60 bg-white text-[#0F2A43]/70 hover:border-[#C9A227] hover:text-[#0F2A43]",
              )}
            >
              {c === "all" ? t.gallery.all : t.gallery.categories[c]}
            </button>
          ))}
        </div>

        {/* Gallery Exhibition Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <AnimatedSection
              key={`${item.src}-${i}`}
              delay={(i % 4) * 60}
              className={cn(i % 5 === 0 && "md:col-span-2 md:row-span-2")}
            >
              <button
                onClick={() => setLightbox(item.src)}
                className="group relative block h-full w-full overflow-hidden rounded-none border border-[#E2D6BC]/40 bg-[#0F2A43] shadow-[0_4px_20px_rgba(15,42,67,0.02)]"
              >
                <img
                  src={item.src}
                  alt={t.gallery.categories[item.category]}
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[4/3] opacity-95 transition-all duration-[1500ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-105 group-hover:opacity-100"
                />
                
                {/* Luxury Hover Vignette Information Overlay */}
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0F2A43]/90 via-[#0F2A43]/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[#F3E9D2] border-b border-[#C9A227]/40 pb-1.5 transition-all duration-500 hover:border-[#C9A227]">
                    {t.gallery.categories[item.category]}
                  </span>
                </span>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* High-End Lightbox Overlay */}
      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          {lightbox && (
            <div className="relative border border-[#E2D6BC]/30 bg-[#0F2A43]/95 backdrop-blur-md p-1 shadow-2xl">
              <img src={lightbox} alt="Enlarged gallery view" className="w-full h-auto object-contain max-h-[85vh]" />
              
              {/* Sleek Close Trigger */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 rounded-none bg-[#0F2A43] border border-[#E2D6BC]/30 p-2.5 text-white hover:bg-[#C9A227] hover:text-[#0F2A43] transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
