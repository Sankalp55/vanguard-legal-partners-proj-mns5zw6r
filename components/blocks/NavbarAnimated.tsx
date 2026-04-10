'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarAnimatedProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function NavbarAnimated({ logo, navItems, ctaLabel, ctaHref }: NavbarAnimatedProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? '92%' : '100%',
          borderRadius: scrolled ? 9999 : 0,
          y: scrolled ? 12 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-background/70 backdrop-blur-2xl shadow-2xl border border-border/50 max-w-6xl'
            : 'bg-transparent w-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-foreground tracking-tight shrink-0">
            {logo}
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden md:flex items-center gap-0.5 relative"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredIdx(i)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                {item.label}
                {hoveredIdx === i && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-muted rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {ctaLabel && ctaHref && (
              <Button asChild size="sm" className="rounded-full px-6 shadow-md hover:shadow-lg transition-shadow">
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
      </motion.nav>

      {/* Mobile fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button className="absolute top-6 right-6 text-foreground p-2" onClick={() => setOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {ctaLabel && ctaHref && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Button asChild size="lg" className="rounded-full px-10 mt-4">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavbarAnimated;
