"use client";
import { Vortex } from "@/components/ui/backgrounds/Vortex";
import { Button } from "@/components/ui/button";

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function CTAVortex({ headline, description, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref }: CTAVortexProps) {
  return (
    <section className="w-full max-w-7xl mx-auto rounded-2xl h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="hsl(var(--card))"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-foreground text-2xl md:text-6xl font-bold text-center font-[family-name:var(--font-heading)]">
          {headline}
        </h2>
        {description && (
          <p className="text-muted-foreground text-sm md:text-xl max-w-xl mt-6 text-center">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-border hover:bg-primary hover:text-primary-foreground transition-all" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </Vortex>
    </section>
  );
}
export default CTAVortex;
