'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASplit } from '@/components/blocks/CTASplit'

import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { MovingBorder } from '@/components/ui/effects/MovingBorder'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'
import { DottedGlowBackground } from '@/components/ui/backgrounds/DottedGlowBackground'

const sectionTransition = { duration: 0.6 }

export default function PracticeAreasPage() {
  return (
    <div className="bg-background">
      {/* HERO (custom; home hero only uses HeroSpotlight) */}
      <section className="relative overflow-hidden py-24 md:py-32">
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
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] items-start">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                Practice Areas
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05] bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Four practices. One standard: disciplined counsel.
              </h1>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We combine transaction precision with litigation readiness—so strategy holds up in boardrooms and courtrooms alike.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
                >
                  Discuss your matter
                </Link>
                <Link
                  href="/approach"
                  className="rounded-full border border-border bg-card/40 px-8 py-4 text-sm font-medium backdrop-blur hover:bg-card transition-all"
                >
                  See our approach
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl border border-border bg-card/40 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="text-xs font-medium tracking-wider uppercase text-primary/90">Index</div>
              <div className="mt-3 space-y-3">
                {[
                  { label: 'Mergers & Acquisitions', href: '#ma' },
                  { label: 'Corporate Restructuring', href: '#restructuring' },
                  { label: 'Securities Litigation', href: '#securities' },
                  { label: 'White-Collar Defense', href: '#white-collar' },
                ].map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="group flex items-center justify-between rounded-xl border border-border bg-background/30 px-4 py-3 transition-all hover:bg-background/50 hover:-translate-y-0.5"
                  >
                    <span className="text-sm">{i.label}</span>
                    <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <MovingBorder duration={2800}>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur transition-all hover:bg-card"
                  >
                    Confidential intake
                  </Link>
                </MovingBorder>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* PROCESS — STICKY REVEAL */}
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
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Engagement Flow
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            How we support you from first call to resolution.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A structured process for complex corporate matters—designed to reduce uncertainty and increase decision quality.
          </p>

          <div className="mt-12">
            <StickyScrollReveal
              content={[
                {
                  title: 'Clarify objectives + constraints',
                  description: 'Define success metrics, timing realities, stakeholder sensitivities, and reputational risk.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/hero.png"
                        alt="Executive intake"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  ),
                },
                {
                  title: 'Build the risk map',
                  description: 'Surface legal, regulatory, disclosure, and governance issues into an actionable register.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/office.png"
                        alt="Risk mapping"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  ),
                },
                {
                  title: 'Execute with partner oversight',
                  description: 'Negotiation, drafting, response strategy, and communications—partner-led with clear accountability.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/meeting.png"
                        alt="Execution"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  ),
                },
                {
                  title: 'Document the decision trail',
                  description: 'Board-ready memos and defensible records that support the business narrative.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/handshake.png"
                        alt="Decision memo"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* M&A — TRACING BEAM LONGFORM */}
      <section id="ma" className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <GridBackground />
        </div>

        <TracingBeam>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={sectionTransition}
            className="mx-auto max-w-7xl px-6 md:px-8"
          >
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                  Mergers & Acquisitions
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Transaction counsel that anticipates regulatory and litigation angles.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We run deals with a disciplined issue tracker and a negotiation posture designed to protect value and reduce post-close
                  surprises.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      t: 'Deal structuring + term sheets',
                      d: 'Optimize structure for tax, liability, and governance objectives while keeping the deal executable.',
                    },
                    {
                      t: 'Diligence with a decision lens',
                      d: 'Focus diligence on value drivers and risk transfer—then translate findings into negotiation leverage.',
                    },
                    {
                      t: 'Negotiation + closing coordination',
                      d: 'Run the process with clean issue tracking, escalation paths, and closing readiness.',
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                      <div className="relative z-10">
                        <div className="font-[family-name:var(--font-heading)] text-lg">{x.t}</div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
                  >
                    See representative engagement models
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                  <Image
                    src="/images/team-1.png"
                    alt="Deal room"
                    width={1200}
                    height={900}
                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="mt-6 rounded-2xl border border-border bg-card/40 backdrop-blur-2xl p-6 shadow-2xl">
                  <div className="text-xs font-medium tracking-wider uppercase text-primary/90">Typical deliverable</div>
                  <div className="mt-2 font-[family-name:var(--font-heading)] text-xl">Board-ready approval memo</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Clear options, key risks, mitigation steps, and a documented decision trail—written for executive action.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </TracingBeam>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* OTHER PRACTICES — BENTO */}
      <section id="restructuring" className="relative bg-muted/30 py-24 md:py-32 overflow-hidden">
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
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Under Pressure
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Restructuring, securities litigation, and white-collar defense
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            When pressure is high, structure and speed matter.
          </p>

          <div className="mt-12">
            <BentoGrid>
              <BentoGridItem
                title="Restructuring strategy + stakeholder alignment"
                description="Workouts, distressed negotiations, and governance stabilization with clear communications planning."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/team-2.png"
                      alt="Restructuring"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
              />
              <BentoGridItem
                id="securities"
                title="Securities defense + disclosure coordination"
                description="Defend claims while aligning disclosures, investor messaging, and internal documentation."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/team-3.png"
                      alt="Securities"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
              />
              <BentoGridItem
                id="white-collar"
                title="Investigations + enforcement response"
                description="Preservation, interviews, narrative development, and defense planning with discretion."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/hero.png"
                      alt="Investigations"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
              />
              <BentoGridItem
                title="Crisis-ready counsel"
                description="Rapid triage, risk containment, and executive briefings designed for real-time decisions."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/office.png"
                      alt="Crisis response"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
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
            headline="Common questions"
            subheadline="Clear answers to help you move forward confidently."
            items={[
              {
                question: 'Do you handle matters outside Chicago?',
                answer:
                  'Yes. We support clients nationally and coordinate local counsel when jurisdiction-specific appearances are required.',
              },
              {
                question: 'Can you step in quickly on an urgent issue?',
                answer:
                  'We prioritize time-sensitive matters and can provide an initial response plan within 24 hours, depending on complexity.',
              },
              {
                question: 'How do you communicate with boards and executives?',
                answer:
                  'We provide board-ready memos, decision trees, and concise risk registers designed for executive action.',
              },
              {
                question: 'Do you offer fixed-fee options?',
                answer:
                  'Yes. Many matters can be scoped into phases with fixed fees; see our pricing page for common structures.',
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
            headline="Need disciplined counsel—fast?"
            description="Start with a confidential intake. We’ll align on objectives, timing, and next steps with partner-level attention."
            ctaLabel="Discuss your matter"
            ctaHref="/contact"
            secondaryCtaLabel="See our approach"
            secondaryCtaHref="/approach"
          />
        </motion.div>
      </section>
    </div>
  )
}
