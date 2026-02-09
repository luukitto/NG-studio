"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import { GALLERY_IMAGES } from "@/lib/constants";
import { Gift, Home, Sparkles, User, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  User,
  Home,
  Gift,
};

export default function AboutPage() {
  const { t } = useLanguage();
  const aboutImage = GALLERY_IMAGES[0] ?? GALLERY_IMAGES[2];

  return (
    <div className="bg-secondary pb-20 pt-20">
      <AnimatedSection className="bg-white/70 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.aboutPage.title}
            subtitle={t.hero.subtitle}
            align="center"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark">
              {t.aboutPage.storyTitle}
            </h3>
            <p className="text-sm leading-relaxed text-dark/70 sm:text-base">
              {t.aboutPage.storyText}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-3xl border border-accent/40 lg:block" />
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-lg lg:-rotate-1">
              <Image
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white/70 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading title={t.aboutPage.valuesTitle} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.aboutPage.values.map((value) => {
              const Icon = iconMap[value.icon] ?? Sparkles;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/70 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-accent">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-dark">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-dark/70">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary/50 via-secondary to-white p-8 shadow-sm">
            <p className="text-lg font-semibold text-dark">
              {t.aboutPage.gradientCard}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
