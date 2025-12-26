import Image from 'next/image';
import { Trophy, Medal, Award, Users } from 'lucide-react';

const highlights = [
  { icon: Trophy, value: '20+', label: 'Years Experience' },
  { icon: Medal, value: 'International', label: 'Certified Coach' },
  { icon: Award, value: '50+', label: 'Champions Trained' },
  { icon: Users, value: '5000+', label: 'Students Coached' },
];

export function CoachProfile() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded">
              <Image
                src="/professional-squash-coach-portrait-mature-indian.jpg"
                alt="Coach Ashraf"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-primary text-primary-foreground absolute -right-4 -bottom-4 rounded p-6 lg:-right-6 lg:-bottom-6">
              <p className="text-3xl font-bold">Est.</p>
              <p className="text-xl font-medium">2004</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Meet Our Founder</p>
            <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">Coach Ashraf Khan</h2>
            <p className="text-primary mt-2 text-lg font-medium">Founder & Head Coach</p>

            <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
              <p>
                With over two decades of experience in professional squash coaching, Coach Ashraf has established
                himself as one of the most respected figures in Indian squash. His journey began as a competitive player
                before transitioning to coaching, where he discovered his true passion for developing young talent.
              </p>
              <p>
                Certified by the World Squash Federation and the Squash Racquets Federation of India, Coach Ashraf has
                trained numerous national and international level players. His coaching philosophy combines traditional
                techniques with modern sports science, ensuring holistic development of every athlete.
              </p>
              <p>
                Under his leadership, Squashters has become synonymous with excellence, producing state and national
                champions year after year. His dedication to the sport and his students continues to inspire the next
                generation of squash players across India.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded">
                    <item.icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-foreground text-xl font-bold">{item.value}</p>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
