'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-background/95 border-border fixed top-0 right-0 left-0 z-50 border-b shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground"> Squashters</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="text-foreground -m-2.5 inline-flex items-center justify-center rounded p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

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
              {isActive(item.href) && (
                <span className="bg-primary absolute right-0 -bottom-1 left-0 h-0.5 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </Button>
          <Button size="sm" className="">
            Book Trial
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="bg-background/80 fixed inset-0 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="bg-background border-border fixed inset-y-0 right-0 w-full max-w-sm border-l p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-lg font-bold">
                  <span className="text-primary">ASHRAF&apos;S</span>
                  <span className="text-foreground"> SQUASH</span>
                </span>
              </Link>
              <button
                type="button"
                className="text-foreground -m-2.5 rounded p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="divide-border -my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        '-mx-3 block rounded px-3 py-2 text-base font-medium transition-colors',
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary border-primary border-l-4 font-semibold'
                          : 'text-foreground hover:bg-muted'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-4 py-6">
                  <Button variant="outline" className="w-full gap-2 bg-transparent">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 43210</span>
                  </Button>
                  <Button className="w-full">Book Trial</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
