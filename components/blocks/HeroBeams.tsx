"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroBeamsProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

const beamKeyframes = `
@keyframes beam-slide {
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
`;

const beams = [
  { left: "10%", width: "1px", delay: "0s", duration: "7s", opacity: 0.15 },
  { left: "20%", width: "2px", delay: "1.5s", duration: "9s", opacity: 0.1 },
  { left: "35%", width: "1px", delay: "3s", duration: "6s", opacity: 0.2 },
  { left: "50%", width: "1.5px", delay: "0.5s", duration: "8s", opacity: 0.12 },
  { left: "65%", width: "1px", delay: "2s", duration: "10s", opacity: 0.18 },
  { left: "75%", width: "2px", delay: "4s", duration: "7s", opacity: 0.08 },
  { left: "88%", width: "1px", delay: "1s", duration: "9s", opacity: 0.14 },
  { left: "95%", width: "1px", delay: "3.5s", duration: "6.5s", opacity: 0.1 },
];

export function HeroBeams({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badge,
}: HeroBeamsProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      <style dangerouslySetInnerHTML={{ __html: beamKeyframes }} />

      {/* Animated beams */}
      {beams.map((beam, i) => (
        <div
          key={i}
          className="pointer-events-none absolute top-0 h-[40vh]"
          style={{
            left: beam.left,
            width: beam.width,
            opacity: beam.opacity,
            background:
              "linear-gradient(to bottom, transparent, rgba(120,119,198,0.6) 30%, rgba(120,119,198,0.8) 50%, rgba(120,119,198,0.6) 70%, transparent)",
            animation: `beam-slide ${beam.duration} ${beam.delay} infinite linear`,
          }}
        />
      ))}

      {/* Subtle radial glow at center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(120,119,198,0.06) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-sm"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              className="px-8 py-6 text-lg border-zinc-700 text-zinc-200 hover:bg-zinc-800"
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

export default HeroBeams;
