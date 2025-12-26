import Image from 'next/image';

export function LocationsHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-squash-facility-delhi-ncr-sports-complex.jpg"
          alt="Modern squash facility"
          fill
          className="object-cover"
        />
        <div className="bg-background/80 absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Locations</p>
        <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Train at a <span className="text-primary">Center Near You</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
          With four world-class facilities across Delhi NCR, quality squash coaching is always within reach. Each center
          offers state-of-the-art courts and professional coaching.
        </p>
      </div>
    </section>
  );
}
