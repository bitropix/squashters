import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Phone, Users, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    id: 'delhi',
    name: 'Delhi',
    subtitle: 'Siri Fort Sports Complex',
    address: 'August Kranti Marg, Siri Fort Institutional Area, New Delhi - 110049',
    timing: '6:00 AM - 10:00 PM',
    phone: '+91 98765 43210',
    courts: 4,
    rating: 4.9,
    features: ['4 International Standard Courts', 'Air Conditioned', 'Pro Shop', 'Changing Rooms', 'Parking Available'],
    image: '/squash-court-indoor-facility-modern-delhi.jpg',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1234567890123!2d77.2234567890123!3d28.5678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSiri%20Fort%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1234567890123',
  },
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    subtitle: 'DLF Sports Complex',
    address: 'DLF Phase 4, Sector 28, Gurgaon, Haryana - 122002',
    timing: '6:00 AM - 10:00 PM',
    phone: '+91 98765 43211',
    courts: 3,
    rating: 4.8,
    features: ['3 Glass Back Courts', 'Air Conditioned', 'Fitness Center', 'Cafe', 'Valet Parking'],
    image: '/premium-squash-facility-gurgaon-modern-sports.jpg',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1234567890123!2d77.0234567890123!3d28.4678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDLF%20Phase%204!5e0!3m2!1sen!2sin!4v1234567890123',
  },
  {
    id: 'noida',
    name: 'Noida',
    subtitle: 'Sector 18 Sports Hub',
    address: 'Plot No. 45, Sector 18, Noida, Uttar Pradesh - 201301',
    timing: '6:00 AM - 9:00 PM',
    phone: '+91 98765 43212',
    courts: 2,
    rating: 4.7,
    features: ['2 Professional Courts', 'Air Conditioned', 'Viewing Gallery', 'Locker Rooms', 'Metro Accessible'],
    image: '/squash-academy-noida-sports-complex-indoor.jpg',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1234567890123!2d77.3234567890123!3d28.5678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector%2018%20Noida!5e0!3m2!1sen!2sin!4v1234567890123',
  },
  {
    id: 'faridabad',
    name: 'Faridabad',
    subtitle: 'Crown Sports Arena',
    address: 'Crown Interiorz Mall, Sector 35, Faridabad, Haryana - 121003',
    timing: '6:00 AM - 9:00 PM',
    phone: '+91 98765 43213',
    courts: 2,
    rating: 4.6,
    features: ['2 Modern Courts', 'Air Conditioned', 'Equipment Rental', 'Refreshment Area', 'Ample Parking'],
    image: '/squash-training-center-faridabad-indoor-court.jpg',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1234567890123!2d77.3234567890123!3d28.4678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFaridabad!5e0!3m2!1sen!2sin!4v1234567890123',
  },
];

export function LocationsList() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl space-y-16 px-4 lg:px-8">
        {locations.map((location, index) => (
          <div
            key={location.id}
            id={location.id}
            className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded">
                <Image
                  src={location.image || '/placeholder.svg'}
                  alt={`${location.name} facility`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground inline-block rounded px-3 py-1 text-sm font-medium">
                  {location.name}
                </span>
                <div className="text-primary flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{location.rating}</span>
                </div>
              </div>

              <h2 className="text-foreground text-2xl font-bold">{location.subtitle}</h2>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <MapPin className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground">{location.address}</span>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground">{location.timing}</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-primary h-5 w-5 shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {location.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Users className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground">{location.courts} Professional Courts</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h3 className="text-foreground mb-3 text-sm font-semibold">Facilities</h3>
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature) => (
                    <span key={feature} className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Book a Trial</Button>
                </Link>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2 bg-transparent">
                    Get Directions
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
