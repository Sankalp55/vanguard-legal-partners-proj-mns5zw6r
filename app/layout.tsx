import './globals.css'
import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'
import { NavbarAnimated } from '@/components/blocks/NavbarAnimated'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const bodyFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const headingFont = Merriweather({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Vanguard Legal Partners | Corporate Law Firm in Chicago',
  description:
    'Vanguard Legal Partners is a Chicago corporate law firm advising on mergers & acquisitions, corporate restructuring, securities litigation, and white-collar defense. Partner-led, discreet, and outcome-driven.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground antialiased`}>
        <NavbarAnimated
          logo="Vanguard Legal Partners"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Approach', href: '/approach' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Confidential Consultation"
          ctaHref="/contact"
        />
        <main className="min-h-[70vh]">{children}</main>
        <FooterMultiColumn
          brand="Vanguard Legal Partners"
          description="Corporate counsel built for high-stakes decisions. Partner-led matters, board-ready guidance, and discreet crisis response."
          columns={[
            {
              title: 'Vanguard Legal Partners',
              links: [
                { label: '200 W Madison St, Suite 2100', href: '/contact' },
                { label: 'Chicago, IL 60606', href: '/contact' },
                { label: '(312) 555-0147', href: 'tel:+13125550147' },
                { label: 'intake@vanguardlegalpartners.com', href: 'mailto:intake@vanguardlegalpartners.com' },
              ],
            },
            {
              title: 'Firm',
              links: [
                { label: 'Practice Areas', href: '/practice-areas' },
                { label: 'Approach', href: '/approach' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Disclaimer', href: '/contact' },
                { label: 'Privacy (placeholder)', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2026 Vanguard Legal Partners. Attorney advertising. Prior results do not guarantee a similar outcome."
        />
      </body>
    </html>
  )
}
