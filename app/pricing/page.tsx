'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { MovingBorder } from '@/components/ui/effects/MovingBorder'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'

const sectionFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const

export default function PricingPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0">
          <GridBackground />
        </div>

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                Pricing
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05]">
                Transparent engagement options—built for corporate realities.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Choose a structure that matches your matter: fixed-scope diligence, monthly advisory, or litigation defense planning. Final fees depend on complexity and urgency.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <MovingBorder duration={3000}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
                  >
                    Get an estimate
                  </Link>
                </MovingBorder>
                <Link
                  href="#plans"
                  className="rounded-full border border-border bg-card px-8 py-4 text-foreground hover:bg-muted/40 transition-colors"
                >
                  See what’s included
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="group relative aspect-[4/5]">
                  <Image
                    src="/images/hero.png"
                    alt="Pricing and engagement visual"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* PLANS */}
      <section id="plans" className="relative bg-muted/30 py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="Engagement models"
            subheadline="Designed for CFO clarity and GC control—without sacrificing senior attention."
            tiers={[
              {
                name: 'Advisory Retainer',
                price: '$7,500–$15,000',
                period: '/month',
                features: [
                  'Priority response SLAs',
                  'Contract review + negotiation support',
                  'Board and governance guidance',
                  'Quarterly risk review memo',
                ],
                ctaLabel: 'Discuss retainer',
                ctaHref: '/contact',
              },
              {
                name: 'Transaction Sprint',
                price: '$18,000–$45,000',
                period: 'fixed scope',
                features: [
                  'Diligence checklist + red-flag reporting',
                  'Core agreement drafting/markup',
                  'Closing checklist and coordination',
                  'Optional: specialty counsel coordination',
                ],
                ctaLabel: 'Plan a sprint',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'Defense & Investigations',
                price: 'Custom',
                period: 'phased',
                features: [
                  'Early case assessment + exposure map',
                  'Privilege protocol and document strategy',
                  'Regulator response planning',
                  'Motion practice / settlement positioning',
                ],
                ctaLabel: 'Request a defense consult',
                ctaHref: '/contact',
              },
            ]}
          />

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 text-sm text-muted-foreground">
            All ranges are illustrative. We confirm scope and fees in a written engagement letter after conflicts review.
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* INCLUDED — Bento */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Standard in every matter
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            What’s included in every engagement
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Senior-led work, disciplined documentation, and communication built for executives and boards.
          </p>

          <div className="mt-12">
            <BentoGrid>
              {[
                {
                  title: 'Senior attorney ownership',
                  description: 'Direct partner involvement from intake through outcome.',
                  header: '/images/team-1.png',
                  className: 'md:col-span-2',
                },
                {
                  title: 'Decision-ready deliverables',
                  description: 'Memos and drafts designed for board packets and audit trails.',
                  header: '/images/office.png',
                },
                {
                  title: 'Confidentiality-first workflow',
                  description: 'Privilege protocols and secure handling expectations.',
                  header: '/images/meeting.png',
                },
                {
                  title: 'Timeline discipline',
                  description: 'Structured milestones and escalation control.',
                  header: '/images/handshake.png',
                },
              ].map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  className="group"
                  header={
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <Image
                        src={item.header}
                        alt={`${item.title} visual`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  }
                />
              ))}
            </BentoGrid>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* FAQ — TracingBeam wrapper */}
      <section className="relative bg-muted/30 py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <TracingBeam>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
              <FAQAccordion
                headline="Pricing FAQ"
                subheadline="Common questions from GCs, CFOs, and founders."
                items={[
                  {
                    question: 'Do you offer flat fees?',
                    answer:
                      'Yes—when scope can be defined (e.g., diligence sprints, document packages, specific motion work). We’ll confirm assumptions and exclusions in writing.',
                  },
                  {
                    question: 'Can you coordinate with existing in-house counsel?',
                    answer:
                      'Absolutely. We can operate as outside counsel, specialty counsel, or an overflow team with clear division of responsibilities.',
                  },
                  {
                    question: 'How do you handle urgent matters?',
                    answer:
                      'We can mobilize quickly after conflicts clearance. Rush timelines may affect fees depending on staffing and after-hours requirements.',
                  },
                  {
                    question: 'Do you require a long-term commitment for retainers?',
                    answer:
                      'No. Retainers are typically month-to-month with defined scope and response expectations.',
                  },
                ]}
              />
            </div>
          </TracingBeam>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* CTA (assigned) */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <CTASparkles
            headline="Get clarity on scope and cost."
            description="Send a short summary and we’ll propose a recommended engagement model within one business day."
            ctaLabel="Request estimate"
            ctaHref="/contact"
            secondaryCtaLabel="Review practice areas"
            secondaryCtaHref="/practice-areas"
          />
        </motion.div>
      </section>
    </div>
  )
}
