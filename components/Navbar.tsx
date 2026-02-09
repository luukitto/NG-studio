"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { LINKS, LOGO_IMAGE, SITE } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/gallery", key: "gallery" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LOGO_IMAGE}
            alt="NB Beauty Studio logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-dark/10 bg-white object-contain p-1 shadow-sm"
            priority
          />
          <span className="text-sm font-semibold text-dark sm:text-base">
            {SITE.name}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-dark ${
                pathname === item.href ? "text-dark" : "text-dark/70"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-full border border-white/50 bg-white/80 p-2 text-dark shadow-sm"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-white/40 bg-white/95 px-4 pb-6 pt-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium ${
                  pathname === item.href ? "text-dark" : "text-dark/70"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <Link
              href={LINKS.whatsapp}
              className="rounded-full bg-dark px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02]"
            >
              {t.hero.ctaBook}
            </Link>
            <Link
              href={LINKS.tel}
              className="flex items-center justify-center gap-2 rounded-full border border-dark/20 bg-white/70 px-5 py-3 text-sm font-medium text-dark transition-colors transition-transform hover:scale-[1.02] hover:border-dark/40"
            >
              <PhoneCall size={16} />
              {t.hero.ctaCall}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
