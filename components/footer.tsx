import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Locations', href: '/locations' },
    { name: 'Tournaments', href: '/tournaments' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ],
  programs: [
    { name: 'Junior Development', href: '/programs/junior' },
    { name: 'Elite Training', href: '/programs/elite' },
    { name: 'Corporate Programs', href: '/programs/corporate' },
    { name: 'Ladies Coaching', href: '/programs/ladies' },
    { name: 'Personal Training', href: '/programs/personal' },
  ],
  locations: [
    { name: 'Delhi', href: '/locations#delhi' },
    { name: 'Gurgaon', href: '/locations#gurgaon' },
    { name: 'Noida', href: '/locations#noida' },
    { name: 'Faridabad', href: '/locations#faridabad' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-border border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-foreground">Squashters</span>
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Premier squash coaching academy with 20+ years of excellence. Training champions across Delhi NCR since
              2004.
            </p>
            <div className="mt-6 flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-foreground text-sm font-semibold">Programs</h3>
            <ul className="mt-4 space-y-3">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground text-sm font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-muted-foreground flex gap-3 text-sm">
                <MapPin className="text-primary h-5 w-5 shrink-0" />
                <span>Siri Fort Sports Complex, New Delhi, 110049</span>
              </li>
              <li className="text-muted-foreground flex gap-3 text-sm">
                <Phone className="text-primary h-5 w-5 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="text-muted-foreground flex gap-3 text-sm">
                <Mail className="text-primary h-5 w-5 shrink-0" />
                <span>info@ashrafsquash.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 border-t pt-8">
          <p className="text-muted-foreground text-center text-xs">
            &copy; {new Date().getFullYear()} Squashters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
