import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-current/20 p-0.5 text-xs font-medium uppercase tracking-wider",
        className,
      )}
    >
      <button
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          lang === "en" ? "bg-gold text-gold-foreground" : "opacity-70 hover:opacity-100",
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("am")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          lang === "am" ? "bg-gold text-gold-foreground" : "opacity-70 hover:opacity-100",
        )}
        aria-pressed={lang === "am"}
      >
        አማ
      </button>
    </div>
  );
}
