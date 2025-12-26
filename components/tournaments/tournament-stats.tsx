import { Trophy, Medal, Users, Calendar } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '50+', label: 'Tournaments Hosted' },
  { icon: Medal, value: '200+', label: 'Medals Won by Students' },
  { icon: Users, value: '1000+', label: 'Participants Annually' },
  { icon: Calendar, value: '20+', label: 'Events Per Year' },
];

export function TournamentStats() {
  return (
    <section className="bg-card border-border border-y py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <stat.icon className="text-primary h-7 w-7" />
              </div>
              <p className="text-foreground text-3xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
