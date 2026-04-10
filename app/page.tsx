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
import { CTASplit } from '@/components/blocks/CTASplit'

import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'
import { MovingBorder } from '@/components/ui/effects/MovingBorder'

import { BackgroundLines } from '@/components/ui/backgrounds/BackgroundLines'
import { GridBackground } from '@/components/ui/backgrounds/GridBackground'
import { DottedGlowBackground } from '@/components/ui/backgrounds/DottedGlowBackground'

const sectionTransition = { duration: 0.6 }

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <BackgroundLines />
        </div>

        <div className="relative">
          <HeroSpotlight
            headline="Chicago corporate law for consequential moments."
            subheadline="Vanguard Legal Partners advises boards, executives, and investors on M&A, restructuring, securities litigation, and white‑collar defense—when precision and discretion matter most."
            primaryCta={{ label: 'Request a Confidential Consultation', href: '/contact' }}
            secondaryCta={{ label: 'Explore Practice Areas', href: '/practice-areas' }}
          />
        </div>

        {/* Overlap card row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={sectionTransition}
          className="-mt-10 pb-10"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { k: 'Partner-led matters from day one', v: 'Senior oversight, fewer handoffs, clear accountability.' },
                { k: 'Board-ready risk and strategy memos', v: 'Decision trees, risk registers, and defensible records.' },
                { k: 'Crisis response with litigation discipline', v: 'Calm triage, controlled narratives, rigorous preparation.' },
              ].map((item) => (
                <div
                  key={item.k}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="absolute -inset-px rounded-2xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                  <div className="relative z-10">
                    <div className="text-sm font-medium text-primary/90">Vanguard Standard</div>
                    <div className="mt-2 font-[family-name:var(--font-heading)] text-lg">{item.k}</div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* SOCIAL PROOF */}
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
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
              Trusted by leadership teams
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Counsel built for boardrooms, investors, and time-sensitive decisions.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We support executives and in-house teams with disciplined process, fast response, and documents that hold up to
              scrutiny.
            </p>
          </div>

          <div className="mt-10">
            <LogoCloud
              headline="Experience across industries"
              logos={[
                { name: 'Manufacturing', imageUrl: '/images/hero.png' },
                { name: 'Private Equity', imageUrl: '/images/office.png' },
                { name: 'Technology', imageUrl: '/images/meeting.png' },
                { name: 'Healthcare', imageUrl: '/images/handshake.png' },
              ]}
            />
          </div>

          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* PRACTICE AREAS — BENTO */}
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
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                Practice Areas
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Focused counsel across corporate and disputes.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Four core practices designed to support transactions, defend reputations, and protect enterprise value.
              </p>
            </div>

            <div className="shrink-0">
              <MovingBorder duration={3200}>
                <Link
                  href="/approach"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium backdrop-blur transition-all hover:bg-card"
                >
                  See how we work
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </MovingBorder>
            </div>
          </div>

          <div className="mt-12">
            <BentoGrid className="mx-auto">
              <BentoGridItem
                title="Mergers & Acquisitions"
                description="Deal structuring, diligence, negotiation, and closing support—from mid-market acquisitions to complex strategic combinations."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/team-1.png"
                      alt="M&A document review"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
                className="md:col-span-2"
              />
              <BentoGridItem
                title="Corporate Restructuring"
                description="Out-of-court workouts, distressed M&A, creditor negotiations, governance stabilization, and stakeholder communications."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/team-2.png"
                      alt="Restructuring strategy session"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
              />
              <BentoGridItem
                title="Securities Litigation"
                description="Defense in federal and state actions, internal investigations support, and disclosure strategy aligned with business realities."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/team-3.png"
                      alt="Courtroom-ready preparation"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                }
              />
              <BentoGridItem
                title="White-Collar Defense"
                description="Rapid response, subpoena management, interviews, and defense strategy with discretion and rigorous preparation."
                header={
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src="/images/hero.png"
                      alt="Investigation response planning"
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

          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* ATTORNEYS — TEAM + TOOLTIP ROW */}
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
            Attorneys
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] items-start">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Partner-led. Outcome-driven. Chicago-based.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                A senior team built from BigLaw training and courtroom experience—structured for responsiveness and accountability.
              </p>

              <div className="mt-8">
                <TeamGrid
                  headline="Senior team"
                  subheadline="Attorney names and credentials are placeholders; replace with real bios prior to launch."
                  members={[
                    {
                      name: 'Evelyn Hart, J.D.',
                      role: 'Managing Partner • M&A + Governance',
                      bio: 'Advises boards and sponsors on acquisitions, carve-outs, and governance risk with transaction discipline and pragmatic negotiation.',
                      imageUrl: '/images/team-1.png',
                    },
                    {
                      name: 'Marcus Lin, J.D.',
                      role: 'Partner • Restructuring',
                      bio: 'Leads workouts and distressed transactions with a focus on stakeholder alignment, liquidity preservation, and clean execution.',
                      imageUrl: '/images/team-2.png',
                    },
                    {
                      name: 'Priya Desai, J.D.',
                      role: 'Partner • Securities Litigation',
                      bio: 'Defends issuers and executives in securities matters and guides disclosure strategy with a calm, evidence-first approach.',
                      imageUrl: '/images/team-3.png',
                    },
                    {
                      name: 'Daniel Reyes, J.D.',
                      role: 'Partner • White-Collar Defense',
                      bio: 'Crisis-ready counsel for investigations and enforcement actions—built on preparation, discretion, and persuasive advocacy.',
                      imageUrl: '/images/team-1.png',
                    },
                  ]}
                />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-2xl p-6 shadow-2xl">
                <div className="text-sm font-medium text-primary/90">What clients get</div>
                <div className="mt-2 font-[family-name:var(--font-heading)] text-xl">Senior attention, structured cadence</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You’ll receive a clear issue tracker, decision-ready memos, and executive briefings designed to reduce noise and
                  increase decision quality.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    'Partner-owned escalation path',
                    'Weekly cadence and written checkpoints',
                    'Documentation built for scrutiny',
                    'Discretion-first communications',
                  ].map((t) => (
                    <div
                      key={t}
                      className="group relative rounded-xl border border-border bg-background/40 px-4 py-3 transition-all duration-300 hover:bg-background/60 hover:-translate-y-0.5"
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                      <div className="relative z-10 text-sm">{t}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
                  >
                    Request a confidential consultation
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

              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* CASE RESULTS — STATS + STICKY REVEAL */}
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
            Case Results
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Results that protect enterprise value.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Representative outcomes across transactions and disputes. Confidentiality respected; details available upon request where
            permitted.
          </p>

          <div className="mt-10">
            <StatsCounter
              stats={[
                { label: 'Transaction value advised', value: '$3.2B+', suffix: '' },
                { label: 'Matters resolved pre-trial', value: '78%', suffix: '' },
                { label: 'Average response time', value: '< 24h', suffix: '' },
                { label: 'Industries served', value: '20+', suffix: '' },
              ]}
            />
          </div>

          <div className="mt-14">
            <StickyScrollReveal
              content={[
                {
                  title: 'Strategic acquisition closing under accelerated timeline',
                  description:
                    'Led diligence and negotiation for a multi-state acquisition; developed a risk register and board memo to support approval.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/office.png"
                        alt="Deal execution"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        M&A
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Restructuring plan aligned with key creditors',
                  description:
                    'Structured a workout framework and communications plan to stabilize operations and preserve customer confidence.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/meeting.png"
                        alt="Restructuring planning"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Restructuring
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Securities class action narrowed at pleading stage',
                  description:
                    'Built a disclosure timeline and expert-ready record; achieved significant narrowing of claims early in litigation.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/handshake.png"
                        alt="Securities litigation defense"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Securities Litigation
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Investigation response and resolution strategy',
                  description:
                    'Managed preservation, interviews, and narrative development; coordinated with compliance and leadership for a controlled process.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image
                        src="/images/team-1.png"
                        alt="White-collar defense response"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        White-Collar Defense
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* TESTIMONIALS — INFINITE MOVING + FEATURED */}
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
            Testimonials
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Trusted by leaders who value clarity under pressure.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Client feedback emphasizes responsiveness, preparation, and board-level communication.
          </p>

          <div className="mt-10">
            <TestimonialsAnimated
              headline="Client feedback"
              subheadline="Confidentiality respected; testimonials are representative."
              testimonials={[
                {
                  quote: 'Their team translated complex risk into a clear decision path for our board. We felt protected at every step.',
                  name: 'General Counsel',
                  role: 'Mid-market manufacturing company',
                  company: 'Client',
                  imageUrl: '/images/team-2.png',
                },
                {
                  quote: 'Fast, discreet, and relentlessly prepared. Exactly what you want when the stakes are high.',
                  name: 'CEO',
                  role: 'Private equity portfolio company',
                  company: 'Client',
                  imageUrl: '/images/team-1.png',
                },
                {
                  quote: 'They anticipate issues before they become problems—and communicate in a way executives can act on.',
                  name: 'CFO',
                  role: 'Technology firm',
                  company: 'Client',
                  imageUrl: '/images/team-3.png',
                },
              ]}
            />
          </div>

          <div className="mt-12">
            <InfiniteMovingCards
              direction="left"
              speed="normal"
              items={[
                { quote: 'Board-ready memos that cut through noise.', name: 'GC', title: 'Public company' },
                { quote: 'Clean process, clear escalation, no surprises.', name: 'COO', title: 'Industrial group' },
                { quote: 'Prepared like trial counsel—even in transactions.', name: 'VP', title: 'Corporate Development' },
                { quote: 'Discreet, fast, and structured under pressure.', name: 'CEO', title: 'Sponsor-backed business' },
              ]}
            />
          </div>

          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* CONTACT — TRACING BEAM + SPLIT */}
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
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                  Contact
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Start with a confidential conversation.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Share a high-level summary and we’ll respond promptly. For time-sensitive matters, call directly.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { label: 'Phone', value: '(312) 555-0147', href: 'tel:+13125550147' },
                    { label: 'Email', value: 'intake@vanguardlegalpartners.com', href: 'mailto:intake@vanguardlegalpartners.com' },
                    { label: 'Address', value: '200 W Madison St, Suite 2100, Chicago, IL 60606', href: '/contact' },
                    { label: 'Hours', value: 'Mon–Fri, 8:30am–6:00pm CT', href: '/contact' },
                  ].map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      className="group block rounded-2xl border border-border bg-card/40 backdrop-blur-2xl p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-card/60"
                    >
                      <div className="text-xs font-medium tracking-wider uppercase text-primary/90">{d.label}</div>
                      <div className="mt-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {d.value}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 relative overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                  <div className="relative z-10 p-6">
                    <div className="font-[family-name:var(--font-heading)] text-lg">Confidentiality note</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Submitting this form does not create an attorney-client relationship. Do not include confidential information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-accent/50">
                  <div className="rounded-2xl bg-card p-6 shadow-xl">
                    <ContactForm
                      headline="Request a consultation"
                      subheadline="Briefly describe the matter (no sensitive details). We’ll respond promptly."
                      contactInfo={[
                        { label: 'Phone', value: '(312) 555-0147' },
                        { label: 'Email', value: 'intake@vanguardlegalpartners.com' },
                      ]}
                    />
                    <div className="mt-4 text-xs text-muted-foreground">
                      Submitting this form does not create an attorney-client relationship. Do not include confidential information.
                    </div>
                  </div>
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="group relative h-56">
                    <Image
                      src="/images/team-2.png"
                      alt="Chicago office"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Chicago-based • Serving clients nationwide
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            </div>
          </motion.div>
        </TracingBeam>
      </section>

      {/* CTA — ASSIGNED */}
      <section className="relative py-24 md:py-32">
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
          <CTASplit
            headline="Confidential counsel. Board-ready guidance. Fast response."
            description="If the decision is consequential, the process should be disciplined. Start with a high-level intake and we’ll align on next steps."
            ctaLabel="Request a Confidential Consultation"
            ctaHref="/contact"
            secondaryCtaLabel="Explore Practice Areas"
            secondaryCtaHref="/practice-areas"
          />
        </motion.div>
      </section>
    </div>
  )
}
