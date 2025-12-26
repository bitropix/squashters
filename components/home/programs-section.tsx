import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Junior Development',
    description: 'Age-appropriate training for young players (6-16 years) focusing on fundamentals, fitness, and fun.',
    image: '/young-squash-players-training-junior-academy.jpg',
    href: '/programs/junior',
  },
  {
    title: 'Elite Training',
    description:
      'Intensive coaching for competitive players aiming for state, national, and international tournaments.',
    image: '/professional-squash-player-intense-training-sessio.jpg',
    href: '/programs/elite',
  },
  {
    title: 'Corporate Programs',
    description:
      'Team building and fitness sessions for corporate groups. Customized programs for offices and organizations.',
    image: '/corporate-team-building-sports-activity.jpg',
    href: '/programs/corporate',
  },
  {
    title: 'Ladies Coaching',
    description: 'Dedicated coaching sessions for women in a comfortable and supportive environment.',
    image: '/women-playing-squash-professional-training.jpg',
    href: '/programs/ladies',
  },
];

export function ProgramsSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Programs</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Training Programs for Every Level
          </h2>
          <p className="text-muted-foreground mt-4">
            From beginners to professionals, we have tailored programs to help you achieve your squash goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group bg-background border-border hover:border-primary/50 relative overflow-hidden rounded border transition-colors"
            >
              <div className="relative aspect-3/2 overflow-hidden">
                <Image
                  src={program.image || '/placeholder.svg'}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="group-hover:text-primary text-xl font-bold text-white transition-colors">
                  {program.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-300">{program.description}</p>
                <div className="text-primary mt-4 flex items-center text-sm font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button size="lg" variant="default">
              Book a Free Trial Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
