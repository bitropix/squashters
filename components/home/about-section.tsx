import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Calendar, Target } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '50+', label: 'National Champions' },
  { icon: Users, value: '5000+', label: 'Students Trained' },
  { icon: Calendar, value: '20+', label: 'Years Experience' },
  { icon: Target, value: '4', label: 'Locations in NCR' },
];

export function AboutSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded">
              <Image
                src="/professional-squash-coach-training-athlete-in-mode.jpg"
                alt="Coach Ashraf training a student"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-primary text-primary-foreground absolute -right-6 -bottom-6 rounded p-6">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">About Our Academy</p>
            <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Building Champions Through Dedication & Discipline
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Founded in 2004, Squashters has been the cornerstone of squash excellence in Delhi NCR. Our
              internationally certified coaching staff brings world-class training methodologies to help players of all
              levels achieve their potential.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              From introducing young beginners to the sport, to preparing elite athletes for national and international
              competitions, we provide comprehensive coaching programs tailored to each player&apos;s unique needs and
              goals.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded">
                    <stat.icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-foreground text-2xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/about">
                <Button size="lg">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
