"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroLampProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

export function HeroLamp({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badge,
}: HeroLampProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Lamp glow container */}
      <div className="relative flex w-full flex-1 items-center justify-center">
        {/* Lamp cone - left half */}
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at 50% 0%, rgba(14,165,233,0) 0deg, rgba(14,165,233,0.15) 80deg, rgba(14,165,233,0) 180deg)",
          }}
          className="absolute right-1/2 top-0 h-[56vh] w-80 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        />

        {/* Lamp cone - right half */}
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at 50% 0%, rgba(14,165,233,0) 180deg, rgba(14,165,233,0.15) 280deg, rgba(14,165,233,0) 360deg)",
          }}
          className="absolute left-1/2 top-0 h-[56vh] w-80 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        />

        {/* Top glow line */}
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />

        {/* Diffused glow blob */}
        <motion.div
          initial={{ opacity: 0, width: "8rem" }}
          whileInView={{ opacity: 0.5, width: "24rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-0 h-48 rounded-full bg-cyan-500/20"
          style={{ filter: "blur(80px)" }}
        />

        {/* Content, positioned in lower portion of the lamp area */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-[28vh] text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center rounded-full border border-cyan-800/40 bg-cyan-950/30 px-4 py-1.5 text-sm text-cyan-300 backdrop-blur-sm"
            >
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-cyan-500 text-white hover:bg-cyan-600"
              asChild
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroLamp;
