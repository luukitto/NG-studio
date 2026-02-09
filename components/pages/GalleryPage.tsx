"use client";

import AnimatedSection from "@/components/AnimatedSection";
import GalleryGrid from "@/components/GalleryGrid";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-secondary pb-20 pt-20">
      <AnimatedSection className="bg-white/70 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.galleryPage.title}
            subtitle={t.galleryPage.subtitle}
            align="center"
          />
          <p className="mt-4 text-center text-sm leading-relaxed text-dark/70">
            {t.galleryPage.note}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto mt-10 max-w-6xl px-4 lg:px-8">
        <GalleryGrid images={GALLERY_IMAGES} />
      </AnimatedSection>
    </div>
  );
}
