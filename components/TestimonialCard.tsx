"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  text: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  text,
  rating,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-accent">
          {Array.from({ length: rating }).map((_, idx) => (
            <Star key={idx} size={16} fill="currentColor" />
          ))}
        </div>
        <Quote size={18} className="text-accent/60" />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-dark/70">{text}</p>
      <p className="mt-4 text-sm font-semibold text-dark">{name}</p>
    </motion.div>
  );
}
