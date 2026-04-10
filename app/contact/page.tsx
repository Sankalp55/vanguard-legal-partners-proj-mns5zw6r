'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { ContactForm } from '@/components/blocks/ContactForm'
import { CTASparkles } from '@/components/blocks/CTASparkles'

import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { MovingBorder } from '@/components/ui/effects/MovingBorder'

import { GridBackground } from '@/components/ui/backgrounds/GridBackground'

const sectionFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const

export default function ContactPage() {
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
                Contact
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[1.05]">
                Confidential consultation requests—handled promptly.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                We’ll confirm conflicts, identify urgency, and schedule time with a senior attorney. Please avoid sharing sensitive details until instructed.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <MovingBorder duration={3200}>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
                  >
                    Send a request
                  </Link>
                </MovingBorder>
                <a
                  href="tel:+13125550147"
                  className="rounded-full border border-border bg-card px-8 py-4 text-foreground hover:bg-muted/40 transition-colors"
                >
                  Call the office
                </a>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Submitting a request does not create an attorney-client relationship. Do not include confidential information until we confirm engagement after a conflicts check.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="group relative aspect-[4/5]">
                  <Image
                    src="/images/hero.png"
                    alt="Contact and intake visual"
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

      {/* CONTACT FORM */}
      <section id="contact-form" className="relative bg-muted/30 py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
                Request a consultation
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
                Start with the essentials.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Tell us what you’re facing. We’ll respond within one business day after conflicts review.
              </p>

              <div className="mt-8 relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="group relative aspect-[16/10]">
                  <Image
                    src="/images/office.png"
                    alt="Office and intake workflow visual"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
                <ContactForm
                  headline="Request a consultation"
                  subheadline="Brief summary only—avoid sensitive details until conflicts are cleared."
                  contactInfo={[
                    { label: 'Phone', value: '(312) 555-0147' },
                    { label: 'Email', value: 'intake@vanguardlegalpartners.com' },
                    { label: 'Address', value: '200 W Madison St, Suite 2100, Chicago, IL 60606' },
                  ]}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-card p-6">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Submitting this form does not create an attorney-client relationship. Do not include confidential information until we confirm engagement after a conflicts check.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* DETAILS — Bento */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            Chicago office
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Convenient for downtown meetings—built for remote consults.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            We meet in Chicago and coordinate matters nationwide with disciplined communication and documentation.
          </p>

          <div className="mt-12">
            <BentoGrid>
              {[
                { title: 'Address', description: '200 W Madison St, Suite 2100, Chicago, IL 60606', img: '/images/meeting.png' },
                { title: 'Phone', description: '(312) 555-0147', img: '/images/handshake.png' },
                { title: 'Email', description: 'intake@vanguardlegalpartners.com', img: '/images/team-1.png' },
                { title: 'Hours', description: 'Mon–Fri, 8:30am–6:00pm CT', img: '/images/team-2.png' },
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
                        src={item.img}
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

      {/* EXPECTATIONS — Sticky + TracingBeam */}
      <section className="relative bg-muted/30 py-20 md:py-32 overflow-hidden">
        <motion.div {...sectionFade} className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase mb-4">
            What happens next
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl">
            A structured intake designed for speed and discretion.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            We keep the process simple: conflicts, consultation, proposed scope, then kickoff.
          </p>

          <div className="mt-10">
            <TracingBeam>
              <StickyScrollReveal
                content={[
                  {
                    title: 'Conflicts check',
                    description: 'We confirm we can take the matter before discussing specifics.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                        <Image
                          src="/images/team-3.png"
                          alt="Conflicts check visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Consultation',
                    description: 'A senior attorney reviews facts, urgency, and objectives.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                        <Image
                          src="/images/hero.png"
                          alt="Consultation visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Proposed scope',
                    description: 'We provide a recommended approach, timeline, and engagement model.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                        <Image
                          src="/images/office.png"
                          alt="Proposed scope visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                  {
                    title: 'Engagement + kickoff',
                    description: 'Once retained, we begin execution and establish communication cadence.',
                    content: (
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30">
                        <Image
                          src="/images/meeting.png"
                          alt="Kickoff visual"
                          width={1200}
                          height={800}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  },
                ]}
              />
            </TracingBeam>
          </div>

          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32">
        <motion.div {...sectionFade} className="mx-auto max-w-7xl px-6">
          <CTASparkles
            headline="Time-sensitive matter?"
            description="Call our office to expedite scheduling after conflicts clearance."
            ctaLabel="Call now"
            ctaHref="tel:+13125550147"
            secondaryCtaLabel="View practice areas"
            secondaryCtaHref="/practice-areas"
          />
        </motion.div>
      </section>
    </div>
  )
}
