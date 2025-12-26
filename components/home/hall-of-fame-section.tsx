import Image from 'next/image';
import { Trophy, Medal, Award } from 'lucide-react';

const champions = [
  {
    name: 'Arjun Kapoor',
    achievement: 'National Junior Champion 2023',
    image: '/young-indian-male-squash-champion-celebrating-trop.jpg',
    year: '2023',
  },
  {
    name: 'Sneha Reddy',
    achievement: 'Asian Junior Bronze Medalist',
    image: '/young-indian-female-squash-player-medal-winner.jpg',
    year: '2022',
  },
  {
    name: 'Rohan Malhotra',
    achievement: 'Senior National Finalist',
    image: '/placeholder.svg?height=400&width=300',
    year: '2023',
  },
  {
    name: 'Kavya Sharma',
    achievement: 'U-19 National Champion',
    image: '/placeholder.svg?height=400&width=300',
    year: '2024',
  },
];

const achievements = [
  { icon: Trophy, value: '50+', label: 'National Titles' },
  { icon: Medal, value: '15+', label: 'International Medals' },
  { icon: Award, value: '100+', label: 'State Championships' },
];

export function HallOfFameSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Hall of Fame</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">Our Champions</h2>
          <p className="text-muted-foreground mt-4">
            Celebrating the achievements of our talented athletes who have made us proud on national and international
            stages.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="mb-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {achievements.map((item) => (
            <div key={item.label} className="text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <item.icon className="text-primary h-8 w-8" />
              </div>
              <p className="text-foreground text-3xl font-bold">{item.value}</p>
              <p className="text-muted-foreground text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {champions.map((champion) => (
            <div key={champion.name} className="group bg-card border-border relative overflow-hidden rounded border">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={champion.image || '/placeholder.svg'}
                  alt={champion.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="absolute right-0 bottom-0 left-0 p-5">
                <div className="bg-primary text-primary-foreground mb-2 inline-block rounded px-2 py-1 text-xs font-medium">
                  {champion.year}
                </div>
                <h3 className="text-lg font-bold text-white">{champion.name}</h3>
                <p className="text-sm text-zinc-300">{champion.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
