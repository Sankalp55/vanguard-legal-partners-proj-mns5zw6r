'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { CTASplit } from '@/components/blocks/CTASplit'

import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'
import { BackgroundLines } from '@/components/ui/backgrounds/BackgroundLines'
import { DottedGlowBackground } from '@/components/ui/backgrounds/DottedGlowBackground'

const sectionTransition = { duration: 0.6 }

export default function ApproachPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <BackgroundLines />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
          className="mx-auto max-w-7xl px-6 md:px-8"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                Our Approach
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05] bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                A measured approach for high-stakes corporate work.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We combine legal rigor with executive-level clarity—so decisions are defensible, timely, and aligned with business
                outcomes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="rounded-full border border-border bg-card/40 px-8 py-4 text-sm font-medium backdrop-blur hover:bg-card transition-all"
                >
                  Meet the team
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
                >
                  Request consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <Image
                  src="/images/hero.png"
                  alt="Structured approach"
                  width={1200}
                  height={900}
                  className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  { t: 'Clarity', d: 'Decision-ready communication for executives and boards.' },
                  { t: 'Control', d: 'Structured cadence, documentation, and escalation paths.' },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="rounded-2xl bg-card p-6 shadow-xl border-t-2 border-primary hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="font-[family-name:var(--font-heading)] text-lg">{c.t}</div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* PRINCIPLES — ASSIGNED COMPONENT */}
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
          <FeaturesCards3D
            badge="Principles"
            headline="Principles that guide every matter"
            subheadline="Structured, conservative, and built for credibility."
            features={[
              { title: 'Board-level clarity', description: 'We distill complexity into decision-ready guidance with risks, options, and tradeoffs.' },
              { title: 'Litigation discipline in transactions', description: 'We draft and negotiate with the assumption that documents may be scrutinized later.' },
              { title: 'Discretion by design', description: 'Need-to-know workflows, careful communications, and controlled narratives.' },
              { title: 'Partner accountability', description: 'Senior oversight, fewer handoffs, and clear ownership of outcomes.' },
            ]}
          />
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* DELIVERABLES — BENTO */}
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
            Deliverables
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            What you receive
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tangible outputs that make progress visible and decisions defensible.
          </p>

          <div className="mt-12">
            <BentoGrid>
              <BentoGridItem
                title="Risk register + issue tracker"
                description="A living document of key issues, owners, deadlines, and recommended actions."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image src="/images/office.png" alt="Issue tracker" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
                className="md:col-span-2"
              />
              <BentoGridItem
                title="Decision tree + options memo"
                description="A concise map of strategic paths with legal and business implications."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image src="/images/meeting.png" alt="Decision memo" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
              />
              <BentoGridItem
                title="Drafting + negotiation playbook"
                description="Redline strategy, fallback positions, and escalation thresholds."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image src="/images/handshake.png" alt="Drafting" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
              />
              <BentoGridItem
                title="Executive briefings"
                description="Short, scheduled updates to keep leadership aligned without noise."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image src="/images/team-1.png" alt="Executive briefing" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
                className="md:col-span-2"
              />
            </BentoGrid>
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* PROCESS — TRACING + STICKY */}
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
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
              Process
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Our engagement process
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A conservative cadence that reduces surprises.
            </p>

            <div className="mt-12">
              <StickyScrollReveal
                content={[
                  {
                    title: 'Intake + conflicts check',
                    description:
                      'High-level facts, objectives, and immediate deadlines. We confirm alignment and availability.',
                    content: (
                      <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                        <Image src="/images/team-2.png" alt="Intake" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      </div>
                    ),
                  },
                  {
                    title: 'Scope + fee structure',
                    description:
                      'Define phases, assumptions, and communication routines; confirm who approves decisions.',
                    content: (
                      <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                        <Image src="/images/team-3.png" alt="Scope" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      </div>
                    ),
                  },
                  {
                    title: 'Execution + weekly cadence',
                    description:
                      'Issue tracking, stakeholder coordination, drafting/response, and controlled escalation.',
                    content: (
                      <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                        <Image src="/images/hero.png" alt="Execution cadence" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      </div>
                    ),
                  },
                  {
                    title: 'Closeout + lessons learned',
                    description:
                      'Final documentation, governance notes, and recommended policy improvements.',
                    content: (
                      <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                        <Image src="/images/office.png" alt="Closeout" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </motion.div>
        </TracingBeam>
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
            headline="Need counsel that reads like a strategy memo?"
            description="Let’s align on objectives and build a defensible path forward."
            ctaLabel="Schedule a consultation"
            ctaHref="/contact"
            secondaryCtaLabel="View practice areas"
            secondaryCtaHref="/practice-areas"
          />
        </motion.div>
      </section>
    </div>
  )
}
