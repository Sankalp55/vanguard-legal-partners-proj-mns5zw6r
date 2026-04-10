'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { ContactForm } from '@/components/blocks/ContactForm'
import { CTASplit } from '@/components/blocks/CTASplit'

import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'
import { DottedGlowBackground } from '@/components/ui/backgrounds/DottedGlowBackground'
import { BackgroundLines } from '@/components/ui/backgrounds/BackgroundLines'

const sectionTransition = { duration: 0.6 }

export default function ContactPage() {
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
          className="mx-auto max-w-6xl px-6 md:px-8 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Contact
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05] bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Contact Vanguard Legal Partners
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            For new matters, use the form below. For urgent issues, call—our team responds quickly and discreetly.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+13125550147"
              className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
            >
              Call (312) 555-0147
            </a>
            <a
              href="mailto:intake@vanguardlegalpartners.com"
              className="rounded-full border border-border bg-card/40 px-8 py-4 text-sm font-medium backdrop-blur hover:bg-card transition-all"
            >
              Email intake
            </a>
          </div>

          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* FORM + IMAGE */}
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
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <div className="relative z-10">
                  <ContactForm
                    headline="Request a consultation"
                    subheadline="Provide a brief overview. Please do not send sensitive details until an engagement is confirmed."
                    contactInfo={[
                      { label: 'Phone', value: '(312) 555-0147' },
                      { label: 'Email', value: 'intake@vanguardlegalpartners.com' },
                      { label: 'Address', value: '200 W Madison St, Suite 2100, Chicago, IL 60606' },
                      { label: 'Hours', value: 'Mon–Fri, 8:30am–6:00pm CT' },
                    ]}
                  />
                  <div className="mt-4 text-xs text-muted-foreground">
                    Submitting this form does not create an attorney-client relationship. Do not include confidential information.
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                  <Image
                    src="/images/hero.png"
                    alt="Office"
                    width={1200}
                    height={900}
                    className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Chicago-based • Serving clients nationwide
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-card p-6 shadow-xl border-t-2 border-primary hover:shadow-2xl transition-shadow duration-300">
                  <div className="font-[family-name:var(--font-heading)] text-xl">Before you send</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Keep your summary high-level. We’ll confirm fit and conflicts, then propose scope and next steps.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </TracingBeam>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* EXPECTATIONS — STICKY REVEAL */}
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
            Intake Process
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            What happens after you reach out
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A conservative intake process that protects everyone involved.
          </p>

          <div className="mt-12">
            <StickyScrollReveal
              content={[
                {
                  title: 'We confirm fit + conflicts',
                  description: 'We’ll ask a few high-level questions and run a conflicts check before proceeding.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image src="/images/office.png" alt="Conflicts check" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  ),
                },
                {
                  title: 'We propose scope + next steps',
                  description: 'You’ll receive a clear outline of phases, assumptions, and communication cadence.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image src="/images/meeting.png" alt="Scope proposal" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  ),
                },
                {
                  title: 'We begin only after engagement',
                  description: 'Work starts after an engagement letter is signed and any required retainer is received.',
                  content: (
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-card">
                      <Image src="/images/handshake.png" alt="Engagement" fill className="object-cover transition-transform duration-700 hover:scale-110" />
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
            headline="Time-sensitive matter?"
            description="Call now for rapid triage and a response plan."
            ctaLabel="Call (312) 555-0147"
            ctaHref="tel:+13125550147"
            secondaryCtaLabel="Email intake"
            secondaryCtaHref="mailto:intake@vanguardlegalpartners.com"
          />
        </motion.div>
      </section>
    </div>
  )
}
