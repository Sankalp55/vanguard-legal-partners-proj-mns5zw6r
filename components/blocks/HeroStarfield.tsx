"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMemo } from "react";

interface HeroStarfieldProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

const starfieldKeyframes = `
@keyframes twinkle-1 {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}
@keyframes twinkle-2 {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.1; }
}
@keyframes twinkle-3 {
  0%, 100% { opacity: 0.4; }
  30% { opacity: 1; }
  70% { opacity: 0.15; }
}
@keyframes shooting-star {
  0% { transform: translateX(0) translateY(0); opacity: 1; }
  100% { transform: translateX(300px) translateY(300px); opacity: 0; }
}
`;

// Seeded pseudo-random for deterministic star positions (avoids hydration mismatch)
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    top: `${seededRandom(i * 3 + 1) * 100}%`,
    left: `${seededRandom(i * 3 + 2) * 100}%`,
    size: seededRandom(i * 3 + 3) * 2 + 0.5,
    animation: `twinkle-${(i % 3) + 1} ${3 + seededRandom(i * 7) * 5}s ${seededRandom(i * 11) * 4}s infinite ease-in-out`,
    opacity: 0.2 + seededRandom(i * 5) * 0.8,
  }));
}

export function HeroStarfield({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badge,
}: HeroStarfieldProps) {
  const stars = useMemo(() => generateStars(120), []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <style dangerouslySetInnerHTML={{ __html: starfieldKeyframes }} />

      {/* Star dots */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: star.animation,
          }}
        />
      ))}

      {/* Subtle nebula glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/4 h-[50vh] w-[50vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[40vh] w-[40vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Shooting star accent */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "15%",
          left: "10%",
          width: "2px",
          height: "2px",
          background: "white",
          borderRadius: "50%",
          boxShadow: "-40px 0 20px 1px rgba(255,255,255,0.1), -80px 0 40px 2px rgba(255,255,255,0.05)",
          animation: "shooting-star 4s 2s infinite linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-indigo-800/40 bg-indigo-950/30 px-4 py-1.5 text-sm text-indigo-300 backdrop-blur-sm"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-zinc-700 text-zinc-200 hover:bg-zinc-800/60"
              asChild
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroStarfield;
