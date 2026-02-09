import { LINKS } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-sm">
      <iframe
        title="NB Beauty Studio location"
        src={LINKS.maps}
        className="h-80 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
