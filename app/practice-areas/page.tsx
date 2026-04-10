'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { CTASparkles } from '@/components/blocks/CTASparkles'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'

import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'
import { BackgroundLines } from '@/components/ui/backgrounds/BackgroundLines'

const sectionFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const

export default function PracticeAreasPage() {
  return (
    <div className="bg-background">
      {/* HERO (custom, not a Hero component) */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0">
          <BackgroundLines />
        </div>

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                Practice Areas
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05]">
                Corporate law capabilities for complex, scrutinized decisions.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                We combine transaction precision with litigation readiness—so strategy holds up under diligence, regulators, and the market.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
                >
                  Talk to an attorney
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-full border border-border bg-card px-7 py-3 text-foreground hover:bg-muted/40 transition-colors"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="group relative aspect-[4/5]">
                  <Image
                    src="/images/hero.png"
                    alt="Practice areas visual"
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

      {/* OVERVIEW — Bento */}
      <section className="relative bg-muted/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <GridBackground />
        </div>

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Integrated coverage
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            How we support your matter—end to end.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Each practice area includes a clear approach, typical deliverables, and the decisions we help you make with confidence.
          </p>

          <div className="mt-12">
            <BentoGrid>
              {[
                {
                  title: 'Mergers & Acquisitions',
                  description: 'From LOI to close, we run diligence, structure risk allocation, and keep stakeholders aligned—without slowing the deal.',
                  header: '/images/office.png',
                  className: 'md:col-span-2',
                },
                {
                  title: 'Corporate Restructuring',
                  description: 'Stabilize the business, negotiate with creditors, and preserve options under time pressure.',
                  header: '/images/meeting.png',
                },
                {
                  title: 'Securities Litigation',
                  description: 'Disciplined defense—early case assessment, motion practice, and trial readiness.',
                  header: '/images/handshake.png',
                },
                {
                  title: 'White-Collar Defense',
                  description: 'Internal investigations and regulator response with speed, discretion, and evidence-first execution.',
                  header: '/images/team-1.png',
                },
              ].map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  className={`${item.className ?? ''} group`}
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

      {/* DETAILS — Sticky reveal */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Deliverables & decisions
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
                Clarity you can defend—<span className="text-primary">in writing</span>.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Our work product is built for executive action: concise memos, clean drafts, and an audit trail that holds up under scrutiny.
              </p>

              <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-xl border-t-2 border-primary hover:shadow-2xl transition-shadow duration-300">
                <p className="text-sm text-muted-foreground">
                  Typical deliverables: red-flag diligence memos, negotiation issue lists, board resolutions, privilege protocols, and litigation exposure maps.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <StickyScrollReveal
                content={[
                  {
                    title: 'M&A',
                    description:
                      'LOI strategy, diligence management, purchase agreement drafting, and closing coordination—optimized for timeline discipline.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                        <Image
                          src="/images/team-2.png"
                          alt="M&A visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Restructuring',
                    description:
                      'Covenant relief, creditor alignment, distressed transactions, and fiduciary guidance—built to preserve optionality.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                        <Image
                          src="/images/team-3.png"
                          alt="Restructuring visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Securities litigation',
                    description:
                      'Early assessment, motion-driven strategy, discovery planning, and settlement positioning—trial-ready without theatrics.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                        <Image
                          src="/images/hero.png"
                          alt="Securities litigation visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Investigations',
                    description:
                      'Privilege-first workflows, witness interviews, regulator response pacing, and remediation planning.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                        <Image
                          src="/images/office.png"
                          alt="Investigations visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* PROCESS — TracingBeam */}
      <section className="relative bg-muted/30 py-20 md:py-32 overflow-hidden">
        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Process
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            A repeatable process for high-stakes matters.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Structured phases reduce uncertainty and keep decisions defensible.
          </p>

          <div className="mt-12">
            <TracingBeam>
              <div className="space-y-6">
                {[
                  {
                    title: 'Intake + conflicts check',
                    description: 'We confirm fit, urgency, and potential conflicts before proceeding.',
                  },
                  {
                    title: 'Risk map',
                    description: 'We identify decision points, exposure, and the fastest path to clarity.',
                  },
                  {
                    title: 'Execution plan',
                    description: 'Clear deliverables, owners, and timelines—built for board and executive visibility.',
                  },
                  {
                    title: 'Outcome management',
                    description: 'We negotiate, litigate, or defend with disciplined documentation and escalation control.',
                  },
                ].map((s) => (
                  <div key={s.title} className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-accent/50">
                    <div className="rounded-3xl bg-card p-8 transition-colors hover:bg-card/90">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl">{s.title}</h3>
                      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* GALLERY — ParallaxScroll */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Work snapshots
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
            Representative work snapshots.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Anonymized examples reflecting the types of matters we handle.
          </p>

          <div className="mt-10">
            <ParallaxScroll
              images={[
                '/images/meeting.png',
                '/images/handshake.png',
                '/images/team-1.png',
                '/images/team-2.png',
              ]}
            />
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* CTA (assigned) */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <CTASparkles
            headline="Need counsel quickly?"
            description="We prioritize time-sensitive matters and can mobilize within 24 hours when required."
            ctaLabel="Request consultation"
            ctaHref="/contact"
            secondaryCtaLabel="Review engagement options"
            secondaryCtaHref="/pricing"
          />
        </motion.div>
      </section>
    </div>
  )
}
