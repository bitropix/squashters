'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Locations', href: '/locations' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="border-border bg-background/95 fixed top-0 right-0 left-0 z-50 border-b shadow-sm backdrop-blur-xs">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="">
              <span className="text-foreground text-xl font-bold tracking-tight">Squashters</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="text-foreground hover:bg-muted -m-2.5 inline-flex items-center justify-center rounded p-2.5 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative py-1 text-sm font-medium transition-colors',
                  isActive(item.href) ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-4">
            <ThemeToggle />
            <Button size="sm" asChild>
              <Link href="/contact">Book Trial</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-100 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs dark:bg-white/15"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="bg-background fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="border-border bg-background flex items-center justify-between border-b px-6 py-5">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-foreground text-lg font-bold">Squashters</span>
              </Link>
              <button
                type="button"
                className="text-foreground hover:bg-muted -m-2.5 rounded-lg p-2.5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="bg-background px-4 py-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-all',
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary border-primary border-l-4 font-semibold'
                        : 'text-foreground hover:bg-muted hover:text-primary'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-border bg-background border-t px-4 py-6">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-center gap-2" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 43210</span>
                  </a>
                </Button>
                <Button className="w-full justify-center" asChild>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book Trial
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
