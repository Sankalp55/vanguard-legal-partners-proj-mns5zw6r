"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASplitProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageUrl?: string;
}

export function CTASplit({ headline, description, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref, imageUrl }: CTASplitProps) {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight">
              {headline}
            </h2>
            {description && (
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-6 text-lg rounded-xl" asChild>
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-xl" asChild>
                  <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt=""
                className="rounded-2xl object-cover w-full aspect-[4/3] shadow-2xl"
              />
            ) : (
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 w-full aspect-[4/3] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/30 animate-pulse" />
              </div>
            )}
            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl shadow-xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Trusted by 500+</p>
                  <p className="text-xs text-muted-foreground">companies worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default CTASplit;
