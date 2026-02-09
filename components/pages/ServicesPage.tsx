"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import { LINKS } from "@/lib/constants";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-secondary pb-20 pt-20">
      <AnimatedSection className="bg-white/70 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            title={t.servicesPage.title}
            subtitle={t.servicesPage.subtitle}
            align="center"
          />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={LINKS.whatsapp}
              className="rounded-full bg-dark px-6 py-2.5 text-sm font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-black"
            >
              {t.servicesPage.ctaBook}
            </Link>
            <Link
              href={LINKS.tel}
              className="rounded-full border border-dark/40 bg-white px-6 py-2.5 text-sm font-medium text-dark shadow-md transition-colors transition-transform hover:scale-[1.02] hover:border-dark/60"
            >
              {t.servicesPage.ctaCall}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <div className="mx-auto mt-12 max-w-6xl space-y-8 px-4 lg:px-8">
        {t.servicesPage.categories.map((category) => (
          <AnimatedSection
            key={category.title}
            className="rounded-2xl border border-white/70 bg-white p-6 shadow-sm md:p-8"
          >
            <h3 className="text-xl font-semibold text-dark">
              {category.title}
            </h3>
            <div className="mt-6 space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col justify-between gap-3 border-b border-dark/10 pb-4 last:border-b-0 last:pb-0 md:flex-row md:items-center"
                >
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-dark/70">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-dark/70 md:justify-end">
                    <span className="text-xs uppercase tracking-[0.2em] text-dark/50">
                      {item.duration}
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-dark/70">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
