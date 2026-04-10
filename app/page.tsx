'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { ContactForm } from '@/components/blocks/ContactForm'
import { CTASparkles } from '@/components/blocks/CTASparkles'

import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { MovingBorder } from '@/components/ui/effects/MovingBorder'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'
import { BackgroundLines } from '@/components/ui/backgrounds/BackgroundLines'

const sectionFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <BackgroundLines />
        </div>

        <div className="relative">
          <HeroSpotlight
            headline="Chicago corporate counsel for high-stakes transactions and investigations."
            subheadline="Vanguard Legal Partners advises boards, founders, and executives through M&A, restructuring, securities litigation, and white-collar defense—when outcomes matter and timelines compress."
            primaryCta={{ label: 'Request a confidential consultation', href: '/contact' }}
            secondaryCta={{ label: 'Explore Practice Areas', href: '/practice-areas' }}
          />
        </div>

        {/* Hero split: trust badges + image layer */}
        <motion.div {...sectionFade} className="relative -mt-10 pb-20 md:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--border))_1px,_transparent_0)] bg-[size:32px_32px] opacity-25" />
              <div className="relative grid gap-10 p-8 md:grid-cols-12 md:p-12">
                <div className="md:col-span-7">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                    Built for decisive moments
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl leading-tight">
                    A senior-led team that moves fast—without losing rigor.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                    We align legal posture across transactions, disputes, and investigations so your decisions
                    remain defensible under diligence, regulators, and the market.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      'Board-level advisory',
                      'Crisis-ready litigation team',
                      'Deal-driven execution',
                      'Discreet, conflict-aware intake',
                    ].map((t) => (
                      <div
                        key={t}
                        className="group relative rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1"
                      >
                        <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-sm" />
                        <div className="relative z-10 flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-accent shadow-lg shadow-accent/25" />
                          <p className="text-sm text-muted-foreground">{t}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <MovingBorder duration={3200}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
                      >
                        Request Consultation
                      </Link>
                    </MovingBorder>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="group relative aspect-[4/5]">
                      <Image
                        src="/images/hero.png"
                        alt="Abstract hero visual for Vanguard Legal Partners"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                      />
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                    <p className="text-sm text-muted-foreground">
                      Confidentiality-first workflow. Please avoid sensitive details until conflicts are cleared.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <GridBackground />
        </div>

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Trusted by leadership teams
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Discretion, pace, and board-ready deliverables.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                We support executives and in-house counsel across tightly controlled transactions and high-exposure disputes.
              </p>
            </div>

            <div className="md:col-span-7">
              <LogoCloud
                headline="Representative industries"
                logos={[
                  { name: 'Manufacturing', imageUrl: '/images/office.png' },
                  { name: 'Healthcare', imageUrl: '/images/meeting.png' },
                  { name: 'Financial Services', imageUrl: '/images/handshake.png' },
                  { name: 'Technology', imageUrl: '/images/team-1.png' },
                  { name: 'Logistics', imageUrl: '/images/team-2.png' },
                ]}
              />
            </div>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* PRACTICE AREAS — Bento */}
      <section id="practice-areas" className="relative bg-muted/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/30" />
        <div className="absolute -top-24 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Practice Areas
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Focused practice areas. Integrated strategy.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Transaction, dispute, and defense capabilities designed to work together—so your legal posture stays consistent across the entire lifecycle.
              </p>
            </div>

            <Link
              href="/practice-areas"
              className="group inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
            >
              See details by practice
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

          <div className="mt-12">
            <BentoGrid className="mx-auto">
              {[
                {
                  title: 'Mergers & Acquisitions',
                  description:
                    'Buy-side and sell-side execution, diligence leadership, deal structuring, negotiation, and closing playbooks.',
                  header: '/images/team-3.png',
                  className: 'md:col-span-2',
                },
                {
                  title: 'Corporate Restructuring',
                  description:
                    'Balance-sheet triage, creditor negotiations, distressed M&A, and governance support during turnarounds.',
                  header: '/images/hero.png',
                },
                {
                  title: 'Securities Litigation',
                  description:
                    'Defense for issuers and executives in complex disputes—disclosure, governance, and class-action matters.',
                  header: '/images/office.png',
                },
                {
                  title: 'White-Collar Defense',
                  description:
                    'Internal investigations, regulator response, subpoena strategy, and trial-ready defense for high-exposure matters.',
                  header: '/images/meeting.png',
                },
                {
                  title: 'Governance & Board Advisory',
                  description:
                    'Policy, risk, and decision frameworks that stand up to scrutiny—from minutes to crisis response.',
                  header: '/images/handshake.png',
                  className: 'md:col-span-2',
                },
                {
                  title: 'Crisis Communications Alignment',
                  description:
                    'Legal strategy aligned with comms and investor relations to reduce escalation risk and preserve optionality.',
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

      {/* HOW WE WORK — Sticky reveal */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--border))_1px,_transparent_0)] bg-[size:32px_32px] opacity-20" />

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Operating model
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
                Structured phases for <span className="text-primary">high-stakes</span> matters.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                We reduce uncertainty with a repeatable workflow: conflicts clearance, risk mapping, decision-ready deliverables, and disciplined outcome management.
              </p>

              <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-xl border-t-2 border-primary hover:shadow-2xl transition-shadow duration-300">
                <p className="text-sm text-muted-foreground">
                  You’ll know what we’re doing, why it matters, and what decision is coming next—without long status calls.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <StickyScrollReveal
                content={[
                  {
                    title: 'Intake + conflicts check',
                    description:
                      'We confirm fit, urgency, and potential conflicts before proceeding—protecting your position and preserving confidentiality.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                        <Image
                          src="/images/team-2.png"
                          alt="Office and intake workflow visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Risk map',
                    description:
                      'We identify decision points, exposure, and the fastest path to clarity—then align stakeholders on priorities.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                        <Image
                          src="/images/team-3.png"
                          alt="Risk mapping visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Execution plan',
                    description:
                      'Clear deliverables, owners, and timelines—built for board and executive visibility with clean documentation.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                        <Image
                          src="/images/hero.png"
                          alt="Execution planning visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Outcome management',
                    description:
                      'We negotiate, litigate, or defend with disciplined drafting, escalation control, and a posture designed to hold up under scrutiny.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                        <Image
                          src="/images/office.png"
                          alt="Outcome management visual"
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

      {/* ATTORNEYS */}
      <section id="attorneys" className="relative bg-muted/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <TeamGrid
            headline="Senior-led, execution-focused."
            subheadline="You work directly with seasoned attorneys—no handoffs, no ambiguity. Our teams are built to move quickly without sacrificing rigor."
            members={[
              {
                name: 'Evelyn Hart, J.D.',
                role: 'Managing Partner • M&A + Governance',
                bio: 'Leads complex acquisitions and board advisory engagements. Known for decisive negotiation and clean documentation.',
                imageUrl: '/images/team-1.png',
              },
              {
                name: 'Marcus Lin, J.D.',
                role: 'Partner • Securities Litigation',
                bio: 'Defends issuers and executives in high-exposure securities disputes, focusing on early resolution and trial-ready posture.',
                imageUrl: '/images/team-2.png',
              },
              {
                name: 'Nina Patel, J.D.',
                role: 'Partner • White-Collar Defense',
                bio: 'Leads internal investigations and regulator response with a disciplined, evidence-first approach.',
                imageUrl: '/images/team-3.png',
              },
              {
                name: 'Daniel Reyes, J.D.',
                role: 'Counsel • Restructuring',
                bio: 'Advises leadership teams through distressed negotiations and restructuring execution with practical, operational alignment.',
                imageUrl: '/images/team-1.png',
              },
            ]}
          />

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm text-foreground hover:bg-muted/40 transition-colors"
            >
              Meet the full team
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

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* RESULTS */}
      <section id="case-results" className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Representative outcomes
          </div>

          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Outcomes that prioritize clarity and control.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Every matter is different. These examples reflect past work and do not guarantee similar results.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Mid-market acquisition under compressed timeline',
                    description:
                      'Led diligence and negotiation, coordinated specialty counsel, and closed within 28 days while preserving key indemnity protections.',
                  },
                  {
                    title: 'Internal investigation with regulator response',
                    description:
                      'Conducted fact development, privilege protocol, and response strategy—resulting in a narrowed inquiry and no enforcement action.',
                  },
                  {
                    title: 'Restructuring with creditor alignment',
                    description:
                      'Negotiated covenant relief and revised governance controls to stabilize operations and preserve strategic exit options.',
                  },
                ].map((h) => (
                  <div key={h.title} className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                    <div className="relative z-10">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg">{h.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/insights" className="group inline-flex items-center gap-2 text-primary">
                  View more representative matters
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

            <div className="md:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
                <StatsCounter
                  stats={[
                    { label: 'Cross-border acquisitions supported', value: '40+' },
                    { label: 'Investigations led to resolution without charges', value: '18' },
                    { label: 'Restructuring negotiations completed under 90 days', value: '9' },
                    { label: 'Securities matters resolved pre-trial', value: '22' },
                  ]}
                />
              </div>

              <div className="mt-8 rounded-3xl border border-border bg-muted/30 p-8">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                  Signal over noise
                </div>
                <InfiniteMovingCards
                  direction="left"
                  speed="normal"
                  items={[
                    {
                      quote: 'Board-ready memos that explain the decision—not the drama.',
                      name: 'General Counsel',
                      title: 'Industrial',
                    },
                    {
                      quote: 'Privilege-first workflows built for regulator scrutiny.',
                      name: 'Chief Compliance Officer',
                      title: 'Healthcare',
                    },
                    {
                      quote: 'Negotiation posture designed to preserve optionality.',
                      name: 'VP, Corp Dev',
                      title: 'Technology',
                    },
                    {
                      quote: 'Clean drafting that keeps timelines intact.',
                      name: 'CFO',
                      title: 'Manufacturing',
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-muted/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <TestimonialsAnimated
            headline="Trusted by leaders who can’t afford surprises."
            subheadline="Confidentiality is central to our work; testimonials are anonymized with permission."
            testimonials={[
              {
                quote:
                  'Vanguard brought calm to a chaotic deal. Their drafting was surgical, their negotiation strategy was pragmatic, and they kept our board aligned throughout.',
                name: 'General Counsel',
                role: 'Manufacturing & Logistics',
                company: 'Confidential',
                imageUrl: '/images/team-2.png',
              },
              {
                quote:
                  'They treated our investigation like a mission—fast, discreet, and thorough. We felt prepared at every step.',
                name: 'Chief Compliance Officer',
                role: 'Healthcare Services',
                company: 'Confidential',
                imageUrl: '/images/team-3.png',
              },
              {
                quote:
                  'In securities litigation, they were relentlessly organized and always two steps ahead. We resolved on favorable terms without losing months to uncertainty.',
                name: 'CEO',
                role: 'Public Company Executive',
                company: 'Confidential',
                imageUrl: '/images/team-1.png',
              },
              {
                quote:
                  'Their restructuring advice was practical and operationally informed. They helped us preserve leverage without escalating conflict.',
                name: 'CFO',
                role: 'Private Equity Portfolio Company',
                company: 'Confidential',
                imageUrl: '/images/team-1.png',
              },
            ]}
          />

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--border))_1px,_transparent_0)] bg-[size:32px_32px] opacity-20" />

        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                Confidential intake
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
                Start with a <span className="text-primary">confidential</span> intake.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Share the essentials. We’ll respond promptly to schedule a consultation and assess conflicts.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { label: 'Phone', value: '(312) 555-0147', href: 'tel:+13125550147' },
                  { label: 'Email', value: 'intake@vanguardlegalpartners.com', href: 'mailto:intake@vanguardlegalpartners.com' },
                  { label: 'Address', value: '200 W Madison St, Suite 2100, Chicago, IL 60606', href: '/contact' },
                  { label: 'Hours', value: 'Mon–Fri, 8:30am–6:00pm CT', href: '/contact' },
                ].map((row) => (
                  <a
                    key={row.label}
                    href={row.href}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 hover:-translate-y-1 transition-all duration-500"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{row.label}</p>
                      <p className="mt-1 text-sm text-foreground">{row.value}</p>
                    </div>
                    <svg
                      className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>

              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                Contacting the firm does not create an attorney-client relationship. Please do not send confidential information until a conflicts check is completed.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
                <ContactForm
                  headline="Request a consultation"
                  subheadline="Briefly describe the matter (avoid sensitive details). We’ll respond within one business day."
                  contactInfo={[
                    { label: 'Phone', value: '(312) 555-0147' },
                    { label: 'Email', value: 'intake@vanguardlegalpartners.com' },
                    { label: 'Office', value: 'Chicago • Remote consults nationwide' },
                  ]}
                />
              </div>

              <div className="mt-8 relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="group relative aspect-[16/9]">
                  <Image
                    src="/images/meeting.png"
                    alt="Consultation CTA visual"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* FINAL CTA (assigned) */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <CTASparkles
            headline="Decisive counsel for compressed timelines."
            description="If your matter is time-sensitive, we can prioritize conflicts clearance and schedule quickly."
            ctaLabel="Request consultation"
            ctaHref="/contact"
            secondaryCtaLabel="Explore practice areas"
            secondaryCtaHref="/practice-areas"
          />
        </motion.div>
      </section>
    </div>
  )
}
