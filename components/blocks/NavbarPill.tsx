'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarPillProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function NavbarPill({ logo, navItems, ctaLabel, ctaHref }: NavbarPillProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-5'}`}>
        <div
          className={`flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 ${
            scrolled
              ? 'bg-background/70 backdrop-blur-2xl shadow-2xl border-border/50 scale-[0.97]'
              : 'bg-background/40 backdrop-blur-xl border-transparent scale-100'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="px-4 py-2 font-bold text-foreground tracking-tight text-sm whitespace-nowrap">
            {logo}
          </Link>

          {/* Desktop nav items with pill indicator */}
          <div className="hidden md:flex items-center gap-0.5 relative">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setActiveIdx(i)}
                className={`relative px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                  activeIdx === i
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          {ctaLabel && ctaHref && (
            <Button asChild size="sm" className="rounded-full px-5 ml-1 hidden md:inline-flex">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}

          {/* Mobile toggle */}
          <button className="md:hidden px-3 py-2 text-foreground" onClick={() => setOpen(!open)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-6 md:hidden">
          <button className="absolute top-6 right-6 text-foreground p-2" onClick={() => setOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Button asChild size="lg" className="mt-4 rounded-full px-10">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
        </div>
      )}
    </>
  );
}

export default NavbarPill;
