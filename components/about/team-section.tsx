import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Coach Ashraf Khan',
    role: 'Founder & Head Coach',
    image: '/professional-squash-coach-portrait-mature-indian.jpg',
    bio: '20+ years experience, SRFI certified',
  },
  {
    name: 'Coach Priya Sharma',
    role: 'Senior Coach - Ladies Division',
    image: '/indian-female-sports-coach-portrait-professional.jpg',
    bio: "Former national player, specializes in women's coaching",
  },
  {
    name: 'Coach Rajesh Nair',
    role: 'Junior Development Head',
    image: '/indian-male-sports-coach-young-athletic.jpg',
    bio: 'State champion, expert in youth development',
  },
  {
    name: 'Dr. Amit Verma',
    role: 'Sports Physiotherapist',
    image: '/indian-male-physiotherapist-sports-medicine.jpg',
    bio: 'MBBS, Sports Medicine specialist',
  },
  {
    name: 'Coach Meera Patel',
    role: 'Fitness & Conditioning',
    image: '/indian-female-fitness-coach-athletic-portrait.jpg',
    bio: 'Certified strength & conditioning specialist',
  },
  {
    name: 'Sanjay Kumar',
    role: 'Academy Manager',
    image: '/indian-male-professional-manager-portrait.jpg',
    bio: 'Operations & student coordination',
  },
];

export function TeamSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Team</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Meet the Experts Behind Your Success
          </h2>
          <p className="text-muted-foreground mt-4">
            Our team of certified professionals is dedicated to helping you achieve your squash goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group bg-background border-border overflow-hidden rounded border">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-foreground text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
