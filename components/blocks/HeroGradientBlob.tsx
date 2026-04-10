"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroGradientBlobProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

const blobs = [
  {
    color: "rgba(99,102,241,0.35)",
    size: "40vh",
    initialX: "-5%",
    initialY: "10%",
    animateX: ["-5%", "15%", "-5%"],
    animateY: ["10%", "30%", "10%"],
    duration: 20,
  },
  {
    color: "rgba(236,72,153,0.3)",
    size: "35vh",
    initialX: "60%",
    initialY: "-5%",
    animateX: ["60%", "50%", "60%"],
    animateY: ["-5%", "15%", "-5%"],
    duration: 18,
  },
  {
    color: "rgba(34,211,238,0.25)",
    size: "30vh",
    initialX: "70%",
    initialY: "55%",
    animateX: ["70%", "55%", "70%"],
    animateY: ["55%", "40%", "55%"],
    duration: 22,
  },
  {
    color: "rgba(168,85,247,0.3)",
    size: "25vh",
    initialX: "20%",
    initialY: "60%",
    animateX: ["20%", "35%", "20%"],
    animateY: ["60%", "50%", "60%"],
    duration: 16,
  },
  {
    color: "rgba(251,191,36,0.2)",
    size: "28vh",
    initialX: "40%",
    initialY: "20%",
    animateX: ["40%", "30%", "40%"],
    animateY: ["20%", "35%", "20%"],
    duration: 24,
  },
];

export function HeroGradientBlob({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badge,
}: HeroGradientBlobProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Animated blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: "blur(60px)",
            left: blob.initialX,
            top: blob.initialY,
          }}
          animate={{
            left: blob.animateX,
            top: blob.animateY,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise texture overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-md"
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
            className="px-8 py-6 text-lg bg-white text-zinc-900 hover:bg-white/90"
            asChild
          >
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
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

export default HeroGradientBlob;
