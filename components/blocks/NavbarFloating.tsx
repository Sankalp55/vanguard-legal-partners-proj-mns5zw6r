'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarFloatingProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function NavbarFloating({ logo, navItems, ctaLabel, ctaHref }: NavbarFloatingProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-lg border-border'
            : 'bg-background/40 backdrop-blur-md border-transparent'
        }`}
      >
        <Link href="/" className="font-bold text-lg text-foreground tracking-tight">
          {logo}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Button asChild size="sm" className="ml-2 rounded-full">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-xl p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Button asChild className="w-full mt-2 rounded-xl">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavbarFloating;
