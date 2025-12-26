import Image from 'next/image';

const sponsors = [
  { name: 'Sports Authority', logo: '/placeholder.svg?height=60&width=150' },
  { name: 'Delhi Sports Council', logo: '/placeholder.svg?height=60&width=150' },
  { name: 'Squash India', logo: '/placeholder.svg?height=60&width=150' },
  { name: 'Fitness First', logo: '/placeholder.svg?height=60&width=150' },
  { name: 'Energy Drink', logo: '/placeholder.svg?height=60&width=150' },
  { name: 'Sports Gear', logo: '/placeholder.svg?height=60&width=150' },
];

export function SponsorsSection() {
  return (
    <section className="bg-background border-border border-y py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-muted-foreground mb-10 text-center text-sm tracking-widest uppercase">
          Proudly Supported By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="relative h-12 w-32 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <Image src={sponsor.logo || '/placeholder.svg'} alt={sponsor.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
