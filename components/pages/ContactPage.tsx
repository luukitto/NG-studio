"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import OpeningHours from "@/components/OpeningHours";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import { CONTACT, LINKS } from "@/lib/constants";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-secondary pb-20 pt-20">
      <AnimatedSection className="bg-white/70 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.contactPage.title}
            subtitle={t.contactPage.subtitle}
            align="center"
          />
        </div>
      </AnimatedSection>

      <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <AnimatedSection className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="space-y-3 text-sm text-dark/70">
              <p className="font-semibold text-dark">
                {t.contactPage.addressLabel}
              </p>
              <p>{CONTACT.address}</p>
              <p className="font-semibold text-dark">
                {t.contactPage.phoneLabel}
              </p>
              <Link href={LINKS.tel} className="hover:text-dark">
                {CONTACT.phoneDisplay}
              </Link>
              <p className="font-semibold text-dark">
                {t.contactPage.emailLabel}
              </p>
              <p>{CONTACT.email}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={LINKS.tel}
                className="rounded-full border border-dark/40 bg-white px-6 py-2.5 text-center text-sm font-medium text-dark shadow-md transition-colors transition-transform hover:scale-[1.02] hover:border-dark/60"
              >
                {t.contactPage.buttons.call}
              </Link>
              <Link
                href={LINKS.whatsapp}
                className="rounded-full bg-dark px-6 py-2.5 text-center text-sm font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-black"
              >
                {t.contactPage.buttons.whatsapp}
              </Link>
            </div>
          </div>

          <OpeningHours
            title={t.openingHours.title}
            items={t.openingHours.items}
          />
        </AnimatedSection>

        <AnimatedSection className="space-y-6">
          <ContactForm />
          <MapEmbed />
        </AnimatedSection>
      </div>
    </div>
  );
}
