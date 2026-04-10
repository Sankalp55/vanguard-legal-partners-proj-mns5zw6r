'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTASplit } from '@/components/blocks/CTASplit'

import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'
import { DottedGlowBackground } from '@/components/ui/backgrounds/DottedGlowBackground'

const sectionTransition = { duration: 0.6 }

export default function PricingPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <GridBackground />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
          className="mx-auto max-w-6xl px-6 md:px-8 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Pricing
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05] bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Transparent structures for complex legal work.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choose fixed-fee phases where possible, or hourly arrangements for open-ended matters. We scope conservatively and communicate
            early.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Pricing ranges are illustrative; final fees depend on scope, urgency, and complexity.
          </p>

          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* PRICING TABLE */}
      <section className="relative bg-muted/30 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <DottedGlowBackground />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
          className="mx-auto max-w-7xl px-6 md:px-8"
        >
          <PricingTable
            headline="Common engagement models"
            subheadline="Designed for predictability without sacrificing rigor."
            tiers={[
              {
                name: 'Advisory Retainer',
                price: '$7,500–$15,000',
                period: '/ mo',
                features: ['Priority response window', 'Contract and governance review', 'Monthly risk checkpoint memo', 'Discounted hourly for overflow'],
                ctaLabel: 'Discuss retainer fit',
                ctaHref: '/contact',
              },
              {
                name: 'Transaction Phases',
                price: '$25,000–$120,000+',
                period: '',
                highlighted: true,
                features: ['Phase scoping + assumptions', 'Diligence + issue tracker', 'Drafting + negotiation support', 'Closing coordination'],
                ctaLabel: 'Scope a transaction',
                ctaHref: '/contact',
              },
              {
                name: 'Disputes & Investigations',
                price: 'Hourly',
                period: 'or capped',
                features: ['Rapid triage + response plan', 'Preservation + interview support', 'Motion practice strategy', 'Executive briefings'],
                ctaLabel: 'Talk to counsel',
                ctaHref: '/contact',
              },
            ]}
          />
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* COST DRIVERS — BENTO */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <GridBackground />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
          className="mx-auto max-w-7xl px-6 md:px-8"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Cost Drivers
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            What influences cost
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We explain drivers early so you can plan with confidence.
          </p>

          <div className="mt-12">
            <BentoGrid>
              {[
                { t: 'Urgency + deadlines', d: 'Accelerated timelines require more parallel work and senior oversight.', img: '/images/hero.png' },
                { t: 'Stakeholder complexity', d: 'More parties, lenders, regulators, or investors increases coordination effort.', img: '/images/office.png' },
                { t: 'Document volume + quality', d: 'Diligence efficiency depends on organization and completeness of records.', img: '/images/meeting.png' },
                { t: 'Novelty + regulatory sensitivity', d: 'Special regimes and uncommon structures increase analysis and drafting time.', img: '/images/handshake.png' },
              ].map((x, idx) => (
                <BentoGridItem
                  key={x.t}
                  title={x.t}
                  description={x.d}
                  className={idx === 0 ? 'md:col-span-2' : undefined}
                  header={
                    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image src={x.img} alt={x.t} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                  }
                />
              ))}
            </BentoGrid>
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* TESTIMONIALS — TRACING BEAM */}
      <section className="relative bg-muted/30 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <DottedGlowBackground />
        </div>

        <TracingBeam>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionTransition}
            className="mx-auto max-w-7xl px-6 md:px-8"
          >
            <TestimonialsAnimated
              headline="Predictable, professional, and responsive."
              subheadline="Pricing is only valuable when paired with proactive communication."
              testimonials={[
                {
                  quote: 'They scoped the matter into phases, so leadership always knew what was next—and what it would take.',
                  name: 'COO',
                  role: 'Healthcare services company',
                  company: 'Client',
                  imageUrl: '/images/team-1.png',
                },
                {
                  quote: 'No surprises. Clear assumptions and early flags when scope changed.',
                  name: 'General Counsel',
                  role: 'Fintech company',
                  company: 'Client',
                  imageUrl: '/images/team-2.png',
                },
                {
                  quote: 'We felt like we had a disciplined project plan, not just legal advice.',
                  name: 'VP, Corporate Development',
                  role: 'Industrial group',
                  company: 'Client',
                  imageUrl: '/images/team-3.png',
                },
              ]}
            />
          </motion.div>
        </TracingBeam>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* FAQ */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <GridBackground />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
          className="mx-auto max-w-6xl px-6 md:px-8"
        >
          <FAQAccordion
            headline="Pricing FAQ"
            subheadline="A few practical answers before you reach out."
            items={[
              {
                question: 'Do you offer free consultations?',
                answer:
                  'We offer a brief introductory call to confirm fit and urgency. Substantive legal advice begins after conflicts checks and engagement confirmation.',
              },
              {
                question: 'Can you cap fees for litigation stages?',
                answer:
                  'Often yes—e.g., early case assessment, motion to dismiss, or targeted discovery—depending on known variables.',
              },
              {
                question: 'How do you handle scope changes?',
                answer:
                  'We flag scope changes early, propose options, and confirm approval before proceeding beyond the agreed scope.',
              },
            ]}
          />
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
          className="mx-auto max-w-7xl px-6 md:px-8"
        >
          <CTASplit
            headline="Want a conservative scope and clear assumptions?"
            description="Tell us timing, stakeholders, and objectives. We’ll propose a structure designed for predictability and credibility."
            ctaLabel="Request a quote"
            ctaHref="/contact"
            secondaryCtaLabel="See practice areas"
            secondaryCtaHref="/practice-areas"
          />
        </motion.div>
      </section>
    </div>
  )
}
