"use client";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function CTABanner({ headline, description, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref }: CTABannerProps) {
  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 container mx-auto max-w-4xl px-4 text-center"
      >
        <h2 className="text-3xl font-bold text-primary-foreground md:text-5xl font-[family-name:var(--font-heading)]">{headline}</h2>
        {description && <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">{description}</p>}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-base shadow-xl" asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
export default CTABanner;
