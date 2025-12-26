import { Target, Heart, Users, Zap, Shield, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from coaching techniques to facility maintenance.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for squash drives us to go the extra mile for every student who walks through our doors.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We foster a supportive environment where players learn, grow, and form lasting friendships.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously evolve our training methods using the latest sports science and technology.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest standards of sportsmanship, fair play, and ethical conduct.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We believe in continuous improvement and help every player reach their full potential.',
  },
];

export function ValuesSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Values</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            What Drives Us Every Day
          </h2>
          <p className="text-muted-foreground mt-4">
            Our core values guide every decision we make and shape the culture of our academy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card border-border hover:border-primary/50 rounded border p-8 transition-colors"
            >
              <div className="bg-primary/10 mb-6 flex h-14 w-14 items-center justify-center rounded">
                <value.icon className="text-primary h-7 w-7" />
              </div>
              <h3 className="text-foreground text-xl font-bold">{value.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
