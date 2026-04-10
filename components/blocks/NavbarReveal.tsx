'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarRevealProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function NavbarReveal({ logo, navItems, ctaLabel, ctaHref }: NavbarRevealProps) {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setAtTop(y < 10);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [lastY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          atTop ? 'bg-transparent' : 'bg-background/80 backdrop-blur-2xl shadow-lg border-b border-border/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-foreground tracking-tight">
            {logo}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {ctaLabel && ctaHref && (
              <Button asChild className="rounded-full px-6 shadow-md hover:shadow-lg transition-shadow">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-background shadow-2xl border-l border-border flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-bold text-foreground">{logo}</span>
              <button className="text-foreground p-1" onClick={() => setOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {ctaLabel && ctaHref && (
              <div className="p-4 mt-auto border-t border-border">
                <Button asChild className="w-full rounded-xl">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarReveal;
