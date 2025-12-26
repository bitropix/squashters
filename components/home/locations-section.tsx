import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    name: 'Delhi',
    address: 'Siri Fort Sports Complex, August Kranti Marg, New Delhi',
    timing: '6:00 AM - 10:00 PM',
    phone: '+91 98765 43210',
    image: '/squash-court-indoor-facility-modern-delhi.jpg',
  },
  {
    name: 'Gurgaon',
    address: 'DLF Phase 4, Sector 28, Gurgaon, Haryana',
    timing: '6:00 AM - 10:00 PM',
    phone: '+91 98765 43211',
    image: '/premium-squash-facility-gurgaon-modern-sports.jpg',
  },
  {
    name: 'Noida',
    address: 'Sector 18, Noida, Uttar Pradesh',
    timing: '6:00 AM - 9:00 PM',
    phone: '+91 98765 43212',
    image: '/squash-academy-noida-sports-complex-indoor.jpg',
  },
  {
    name: 'Faridabad',
    address: 'Sector 15, Faridabad, Haryana',
    timing: '6:00 AM - 9:00 PM',
    phone: '+91 98765 43213',
    image: '/squash-training-center-faridabad-indoor-court.jpg',
  },
];

export function LocationsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Locations</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Train at a Center Near You
          </h2>
          <p className="text-muted-foreground mt-4">
            With four state-of-the-art facilities across Delhi NCR, quality coaching is always within reach.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="group bg-card border-border hover:border-primary/50 overflow-hidden rounded border transition-colors"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={location.image || '/placeholder.svg'}
                  alt={`${location.name} facility`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-foreground text-lg font-bold">{location.name}</h3>
                <div className="mt-3 space-y-2">
                  <div className="text-muted-foreground flex gap-2 text-sm">
                    <MapPin className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="text-muted-foreground flex gap-2 text-sm">
                    <Clock className="text-primary h-4 w-4 shrink-0" />
                    <span>{location.timing}</span>
                  </div>
                  <div className="text-muted-foreground flex gap-2 text-sm">
                    <Phone className="text-primary h-4 w-4 shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/locations">
            <Button size="lg">View All Locations</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
