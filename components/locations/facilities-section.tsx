import { Dumbbell, Wind, ShowerHead, Car, Coffee, Shirt, Wifi, Shield } from 'lucide-react';

const facilities = [
  {
    icon: Dumbbell,
    title: 'Professional Courts',
    description: 'International standard squash courts with proper lighting and flooring',
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate controlled environment for comfortable training year-round',
  },
  {
    icon: ShowerHead,
    title: 'Changing Rooms',
    description: 'Clean, spacious changing rooms with hot water showers and lockers',
  },
  {
    icon: Car,
    title: 'Parking',
    description: 'Ample parking space for cars and two-wheelers at all locations',
  },
  {
    icon: Coffee,
    title: 'Refreshments',
    description: 'Cafeteria/vending machines for energy drinks and light snacks',
  },
  {
    icon: Shirt,
    title: 'Equipment Rental',
    description: 'Quality rackets and gear available for rent at nominal charges',
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'High-speed internet connectivity for parents and visitors',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'CCTV surveillance, first aid, and trained staff for emergencies',
  },
];

export function FacilitiesSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Facilities</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            World-Class Amenities at Every Location
          </h2>
          <p className="text-muted-foreground mt-4">
            We ensure every facility meets the highest standards for training comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="bg-background border-border hover:border-primary/50 rounded border p-6 text-center transition-colors"
            >
              <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <facility.icon className="text-primary h-7 w-7" />
              </div>
              <h3 className="text-foreground text-lg font-semibold">{facility.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
