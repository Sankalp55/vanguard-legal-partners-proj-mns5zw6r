"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroWavesProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

export function HeroWaves({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badge,
}: HeroWavesProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle top gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 60%, hsl(var(--primary) / 0.03) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-40 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
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
              className="px-8 py-6 text-lg"
              asChild
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </motion.div>
      </div>

      {/* Animated SVG waves at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        {/* Wave layer 3 - back */}
        <motion.svg
          viewBox="0 0 1440 220"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <motion.path
            d="M0,160 C320,220 420,100 720,160 C1020,220 1120,100 1440,160 L1440,220 L0,220 Z"
            className="fill-primary/5"
            animate={{
              d: [
                "M0,160 C320,220 420,100 720,160 C1020,220 1120,100 1440,160 L1440,220 L0,220 Z",
                "M0,140 C320,100 420,200 720,140 C1020,80 1120,200 1440,140 L1440,220 L0,220 Z",
                "M0,160 C320,220 420,100 720,160 C1020,220 1120,100 1440,160 L1440,220 L0,220 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Wave layer 2 - middle */}
        <motion.svg
          viewBox="0 0 1440 220"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.path
            d="M0,180 C240,120 480,200 720,180 C960,160 1200,220 1440,180 L1440,220 L0,220 Z"
            className="fill-primary/10"
            animate={{
              d: [
                "M0,180 C240,120 480,200 720,180 C960,160 1200,220 1440,180 L1440,220 L0,220 Z",
                "M0,170 C240,210 480,140 720,170 C960,200 1200,130 1440,170 L1440,220 L0,220 Z",
                "M0,180 C240,120 480,200 720,180 C960,160 1200,220 1440,180 L1440,220 L0,220 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Wave layer 1 - front */}
        <motion.svg
          viewBox="0 0 1440 220"
          className="relative w-full"
          preserveAspectRatio="none"
          style={{ height: "180px" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.path
            d="M0,200 C360,160 540,220 720,200 C900,180 1080,220 1440,200 L1440,220 L0,220 Z"
            className="fill-primary/[0.15]"
            animate={{
              d: [
                "M0,200 C360,160 540,220 720,200 C900,180 1080,220 1440,200 L1440,220 L0,220 Z",
                "M0,190 C360,220 540,170 720,190 C900,210 1080,170 1440,190 L1440,220 L0,220 Z",
                "M0,200 C360,160 540,220 720,200 C900,180 1080,220 1440,200 L1440,220 L0,220 Z",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </section>
  );
}

export default HeroWaves;
