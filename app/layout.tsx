import './globals.css'
import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'
import { NavbarFloating } from '@/components/blocks/NavbarFloating'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const bodyFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const headingFont = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Vanguard Legal Partners | Corporate Law Firm in Chicago',
  description:
    'Vanguard Legal Partners is a Chicago corporate law firm handling M&A, corporate restructuring, securities litigation, and white-collar defense. Request a confidential consultation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <html lang="en" className="dark">
      <body
        className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground antialiased`}
      >
        <NavbarFloating
          logo="Vanguard Legal Partners"
          navItems={navItems}
          ctaLabel="Request Consultation"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Vanguard Legal Partners"
          description="Corporate counsel built for decisive moments—transaction precision with litigation-ready discipline."
          columns={[
            {
              title: 'Firm',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Practice Areas', href: '/practice-areas' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Insights', href: '/insights' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: '(312) 555-0147', href: 'tel:+13125550147' },
                {
                  label: 'intake@vanguardlegalpartners.com',
                  href: 'mailto:intake@vanguardlegalpartners.com',
                },
                { label: 'Chicago Office', href: '/contact' },
              ],
            },
            {
              title: 'Disclosures',
              links: [
                {
                  label: 'No Attorney-Client Relationship Notice',
                  href: '/contact#contact-form',
                },
                {
                  label: 'Representative Matters Disclaimer',
                  href: '/#case-results',
                },
              ],
            },
          ]}
          copyright="© 2026 Vanguard Legal Partners. All rights reserved. Attorney Advertising. Prior results do not guarantee a similar outcome."
        />
      </body>
    </html>
  )
}
