"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const buttonBase =
    "rounded-full px-2.5 py-1 text-[11px] font-medium transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

  return (
    <div className="flex items-center gap-1 rounded-full border border-dark/10 bg-white/80 px-1 py-0.5 shadow-sm">
      <button
        type="button"
        onClick={() => setLang("ka")}
        aria-pressed={lang === "ka"}
        className={`${buttonBase} ${
          lang === "ka"
            ? "bg-dark text-white shadow-sm"
            : "text-dark/60 hover:text-dark"
        }`}
      >
        KA
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${buttonBase} ${
          lang === "en"
            ? "bg-dark text-white shadow-sm"
            : "text-dark/60 hover:text-dark"
        }`}
      >
        EN
      </button>
    </div>
  );
}
