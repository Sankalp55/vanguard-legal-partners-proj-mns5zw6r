"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTAGlassProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function CTAGlass({ headline, description, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref }: CTAGlassProps) {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
      >
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-secondary/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 border border-border/30 rounded-3xl bg-card/30 backdrop-blur-xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)]">
            {headline}
          </h2>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-lg rounded-full shadow-lg" asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full" asChild>
                <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default CTAGlass;
