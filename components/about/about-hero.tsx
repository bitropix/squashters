import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/squash-court-panoramic-view-professional-sports.jpg"
          alt="Squash court panoramic view"
          fill
          className="object-cover"
        />
        <div className="bg-background/80 absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">About Us</p>
        <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Building Champions <span className="text-primary">Since 2004</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
          Squashters is Delhi NCR&apos;s premier squash training institution, dedicated to nurturing talent and creating
          champions at every level.
        </p>
      </div>
    </section>
  );
}
