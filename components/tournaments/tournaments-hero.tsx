import Image from 'next/image';

export function TournamentsHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/squash-tournament-competition-arena-professional.jpg"
          alt="Squash tournament arena"
          fill
          className="object-cover"
        />
        <div className="bg-background/80 absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Tournaments & Events</p>
        <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Compete, Excel, <span className="text-primary">Win</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
          From local club events to national championships, our academy provides opportunities for players of all levels
          to test their skills and gain valuable match experience.
        </p>
      </div>
    </section>
  );
}
