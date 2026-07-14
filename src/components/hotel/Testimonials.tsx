import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "./SectionHeader";
import { AnimatedSection } from "./AnimatedSection";

export function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section id="testimonials" className="bg-[#FAFAFA] border-t border-[#E2D6BC]/30 py-28">
      <div className="container-lux">
        <SectionHeader
          eyebrow={t.nav.about}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((review, i) => (
            <AnimatedSection key={review.id} delay={i * 90}>
              <figure className="relative flex h-full flex-col rounded-none border border-[#E2D6BC]/50 bg-white p-8 sm:p-10 shadow-[0_4px_25px_rgba(15,42,67,0.02)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(15,42,67,0.05)] hover:-translate-y-1">
                
                {/* Editorial watermark quote icon */}
                <Quote className="absolute right-8 top-8 h-12 w-12 text-[#C9A227]/10 stroke-[1]" />
                
                {/* Star Rating Block */}
                <div className="flex gap-1 text-[#C9A227]">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-[#C9A227] stroke-[1] text-[#C9A227]" />
                  ))}
                </div>

                {/* Luxurious Italic Quote */}
                <blockquote className="mt-6 flex-1 text-sm sm:text-base font-light italic leading-relaxed text-[#1E252D]/85">
                  "{lang === "en" ? review.en : review.am}"
                </blockquote>

                {/* Elegant Author Sign-off */}
                <figcaption className="mt-8 border-t border-[#E2D6BC]/30 pt-5">
                  <div className="font-serif text-lg font-medium tracking-wide text-[#0F2A43]">
                    {review.name}
                  </div>
                  <div className="text-[0.65rem] font-semibold text-[#C9A227] uppercase tracking-[0.15em] mt-1">
                    {review.location}
                  </div>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
