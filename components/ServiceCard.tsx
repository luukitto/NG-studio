"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Droplets,
  Eye,
  Hand,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Eye,
  Brush,
  Hand,
  Droplets,
};

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  icon: string;
};

export default function ServiceCard({
  title,
  description,
  price,
  icon,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-accent">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-dark/70">
        {description}
      </p>
      <span className="mt-4 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-dark/70">
        {price}
      </span>
    </motion.div>
  );
}
