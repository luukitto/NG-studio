"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import GalleryGrid from "@/components/GalleryGrid";
import HeroSection from "@/components/HeroSection";
import OpeningHours from "@/components/OpeningHours";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import MapEmbed from "@/components/MapEmbed";
import { useLanguage } from "@/components/LanguageProvider";
import { CONTACT, GALLERY_IMAGES, LINKS } from "@/lib/constants";

export default function HomePage() {
  const { t } = useLanguage();
  const aboutImage = GALLERY_IMAGES[6] ?? GALLERY_IMAGES[0];

  return (
    <div className="bg-secondary">
      <HeroSection />

      <AnimatedSection className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.servicesPreview.title}
            subtitle={t.servicesPreview.subtitle}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {t.servicesPreview.items.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white/70 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-6">
            <SectionHeading
              title={t.aboutSnippet.title}
              subtitle={t.aboutSnippet.text}
            />
            <p className="text-xs uppercase tracking-[0.2em] text-dark/50">
              {t.hero.subtitle}
            </p>
            <Link
              href="/about"
              className="inline-flex rounded-full border border-dark/20 bg-white/70 px-6 py-2.5 text-sm font-medium text-dark transition-colors transition-transform hover:scale-[1.02] hover:border-dark/40"
            >
              {t.nav.about}
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border border-accent/40 lg:block" />
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-lg lg:rotate-1">
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

      <AnimatedSection className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.testimonials.items.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white/70 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <SectionHeading
              title={t.galleryPreview.title}
              subtitle={t.galleryPreview.subtitle}
            />
            <Link
              href="/gallery"
              className="rounded-full border border-dark/20 bg-white/70 px-6 py-2.5 text-sm font-medium text-dark transition-colors transition-transform hover:scale-[1.02] hover:border-dark/40"
            >
              {t.galleryPreview.cta}
            </Link>
          </div>
          <div className="mt-10">
            <GalleryGrid images={GALLERY_IMAGES.slice(0, 6)} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="space-y-6">
            <SectionHeading
              title={t.location.title}
              subtitle={t.location.note}
            />
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-dark">
                {t.location.addressLabel}
              </p>
              <p className="mt-2 text-sm text-dark/70">{CONTACT.address}</p>
              <p className="mt-4 text-sm font-semibold text-dark">
                {t.contactPage.phoneLabel}
              </p>
              <Link href={LINKS.tel} className="text-sm text-dark/70">
                {CONTACT.phoneDisplay}
              </Link>
            </div>
            <OpeningHours
              title={t.openingHours.title}
              items={t.openingHours.items}
            />
          </div>
          <MapEmbed />
        </div>
      </AnimatedSection>
    </div>
  );
}
