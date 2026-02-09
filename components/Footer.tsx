"use client";

import Link from "next/link";
import { Instagram, MessageCircle, Send } from "lucide-react";
import { CONTACT, LINKS, SITE } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 py-10 sm:flex-row lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-semibold">{SITE.name}</p>
          <p className="text-sm text-white/70">{t.footer.tagline}</p>
          <p className="text-xs text-white/50">{t.footer.copyright}</p>
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-white">{t.location.addressLabel}</p>
          <p>{CONTACT.address}</p>
          <p>
            <Link href={LINKS.tel} className="hover:text-white">
              {CONTACT.phoneDisplay}
            </Link>
          </p>
          <p>{CONTACT.email}</p>
          <div className="flex gap-3 pt-2">
            <Link
              href={LINKS.instagram}
              className="rounded-full border border-white/20 bg-white/5 p-2 text-white/70 transition-transform hover:scale-[1.05] hover:text-white"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href={LINKS.whatsapp}
              className="rounded-full border border-white/20 bg-white/5 p-2 text-white/70 transition-transform hover:scale-[1.05] hover:text-white"
            >
              <MessageCircle size={18} />
            </Link>
            <Link
              href={LINKS.telegram}
              className="rounded-full border border-white/20 bg-white/5 p-2 text-white/70 transition-transform hover:scale-[1.05] hover:text-white"
            >
              <Send size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
