'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { AnimatedTabs } from '@/components/ui/effects/AnimatedTabs'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { HoverEffect } from '@/components/ui/effects/HoverEffect'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'

const sectionFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const

export default function InsightsPage() {
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
                Insights
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05]">
                Practical guidance for executives, boards, and in-house teams.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Short, decision-oriented insights on transactions, restructuring, litigation risk, and investigations—written for leaders who need clarity, not commentary.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#newsletter"
                  className="rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
                >
                  Subscribe for updates
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-border bg-card px-8 py-4 text-foreground hover:bg-muted/40 transition-colors"
                >
                  Contact intake
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="group relative aspect-[4/5]">
                  <Image
                    src="/images/hero.png"
                    alt="Insights editorial visual"
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

      {/* FEATURED — Parallax */}
      <section className="relative bg-muted/30 py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Featured briefs
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
            Topics leaders ask about most.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            A curated set of briefings designed to support decision-making and documentation.
          </p>

          <div className="mt-10">
            <ParallaxScroll
              images={[
                '/images/office.png',
                '/images/meeting.png',
                '/images/handshake.png',
                '/images/team-1.png',
              ]}
            />
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                {
                  title: 'M&A: Diligence red flags that derail timelines',
                  description: 'A board-ready checklist for spotting issues early and keeping optionality.',
                  link: '/contact',
                },
                {
                  title: 'Restructuring: Covenant relief without signaling distress',
                  description: 'How to negotiate amendments while protecting relationships and narrative.',
                  link: '/contact',
                },
                {
                  title: 'Securities: Disclosure hygiene that reduces litigation risk',
                  description: 'Practical steps for aligning disclosure, governance, and documentation.',
                  link: '/contact',
                },
                {
                  title: 'Investigations: Building a privilege-first workflow',
                  description: 'How to structure interviews, collections, and reporting for defensibility.',
                  link: '/contact',
                },
              ]}
            />
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* TOPICS — AnimatedTabs */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Browse by theme
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Skimmable, actionable, built for executives.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Use these materials to frame questions, align stakeholders, and document decisions—then contact us for advice tailored to your facts.
          </p>

          <div className="mt-10">
            <AnimatedTabs
              tabs={[
                {
                  title: 'Governance',
                  value: 'governance',
                  content: (
                    <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl">Board governance and minutes</h3>
                      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                        Decision frameworks and documentation that holds up under scrutiny—especially when timelines compress or stakeholders disagree.
                      </p>
                      <div className="mt-6 relative overflow-hidden rounded-2xl border border-border bg-muted/30">
                        <div className="group relative aspect-[16/9]">
                          <Image
                            src="/images/team-2.png"
                            alt="Governance visual"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Deals',
                  value: 'deals',
                  content: (
                    <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl">Deal negotiation strategy</h3>
                      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                        Risk allocation, indemnities, disclosure schedules, and closing mechanics—translated into decision-ready tradeoffs.
                      </p>
                      <div className="mt-6 relative overflow-hidden rounded-2xl border border-border bg-muted/30">
                        <div className="group relative aspect-[16/9]">
                          <Image
                            src="/images/team-3.png"
                            alt="Deal strategy visual"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Regulators',
                  value: 'regulators',
                  content: (
                    <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl">Regulator response readiness</h3>
                      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                        Subpoenas, holds, and response pacing—built around privilege controls and a defensible record.
                      </p>
                      <div className="mt-6 relative overflow-hidden rounded-2xl border border-border bg-muted/30">
                        <div className="group relative aspect-[16/9]">
                          <Image
                            src="/images/hero.png"
                            alt="Regulatory readiness visual"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* NEWSLETTER CTA (assigned CTA component) */}
      <section id="newsletter" className="relative bg-muted/30 py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <CTASparkles
            headline="Get concise legal briefings—no spam."
            description="Monthly insights for corporate leaders. Unsubscribe anytime."
            ctaLabel="Subscribe"
            ctaHref="/contact"
            secondaryCtaLabel="Ask a question"
            secondaryCtaHref="/contact"
          />

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* FAQ — TracingBeam wrapper */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <TracingBeam>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
              <FAQAccordion
                headline="Insights FAQ"
                subheadline="How to use these materials responsibly."
                items={[
                  {
                    question: 'Is this legal advice?',
                    answer: 'No. Insights are informational and not a substitute for advice tailored to your situation.',
                  },
                  {
                    question: 'Can we share an article internally?',
                    answer:
                      'Yes—internal sharing is encouraged. For external republication, please request permission.',
                  },
                  {
                    question: 'Do you write about active matters?',
                    answer:
                      'No. We avoid commentary that could compromise confidentiality or ongoing engagements.',
                  },
                ]}
              />
            </div>
          </TracingBeam>
        </motion.div>
      </section>
    </div>
  )
}
