import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    id: 1,
    title: 'Delhi NCR Junior Open 2025',
    date: 'January 15-17, 2025',
    location: 'Siri Fort Sports Complex, Delhi',
    categories: ['U-11', 'U-13', 'U-15', 'U-17', 'U-19'],
    registrationDeadline: 'January 10, 2025',
    entryFee: 'Rs. 1,500',
    status: 'Registration Open',
    image: '/squash-junior-tournament-banner-delhi.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Corporate Squash League - Season 3',
    date: 'February 5 - March 20, 2025',
    location: 'Multiple Locations',
    categories: ['Team Event'],
    registrationDeadline: 'January 25, 2025',
    entryFee: 'Rs. 15,000 per team',
    status: 'Registration Open',
    image: '/corporate-squash-league-team-competition.jpg',
    featured: true,
  },
  {
    id: 3,
    title: "Ashraf's Academy Internal Tournament",
    date: 'January 25-26, 2025',
    location: 'All Academy Locations',
    categories: ['Beginners', 'Intermediate', 'Advanced'],
    registrationDeadline: 'January 20, 2025',
    entryFee: 'Rs. 500',
    status: 'Registration Open',
    image: '/squash-academy-internal-tournament-trophy.jpg',
    featured: false,
  },
  {
    id: 4,
    title: "Women's Invitational Tournament",
    date: 'February 8-9, 2025',
    location: 'DLF Sports Complex, Gurgaon',
    categories: ['Open', 'Above 35', 'Above 45'],
    registrationDeadline: 'February 1, 2025',
    entryFee: 'Rs. 1,200',
    status: 'Coming Soon',
    image: '/women-squash-tournament-banner.jpg',
    featured: false,
  },
];

export function UpcomingEvents() {
  const featuredEvents = upcomingEvents.filter((event) => event.featured);
  const regularEvents = upcomingEvents.filter((event) => !event.featured);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-primary mb-2 text-sm font-medium tracking-widest uppercase">Mark Your Calendar</p>
            <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Events</h2>
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-card border-border hover:border-primary/50 overflow-hidden rounded border transition-colors"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={event.image || '/placeholder.svg'}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary text-primary-foreground rounded px-3 py-1 text-xs font-medium">
                    Featured
                  </span>
                  <span
                    className={`rounded px-3 py-1 text-xs font-medium ${
                      event.status === 'Registration Open'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-foreground group-hover:text-primary text-xl font-bold transition-colors">
                  {event.title}
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="text-muted-foreground flex items-center gap-3">
                    <Calendar className="text-primary h-4 w-4 shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-3">
                    <MapPin className="text-primary h-4 w-4 shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-3">
                    <Users className="text-primary h-4 w-4 shrink-0" />
                    <span className="text-sm">{event.categories.join(', ')}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-3">
                    <Clock className="text-primary h-4 w-4 shrink-0" />
                    <span className="text-sm">Registration Deadline: {event.registrationDeadline}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-primary text-lg font-semibold">{event.entryFee}</span>
                  <Link href="/contact">
                    <Button size="sm" className="gap-2">
                      Register Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Events */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {regularEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card border-border hover:border-primary/50 flex flex-col gap-4 rounded border p-4 transition-colors sm:flex-row"
            >
              <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded sm:aspect-square sm:w-32">
                <Image src={event.image || '/placeholder.svg'} alt={event.title} fill className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium ${
                      event.status === 'Registration Open'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <h3 className="text-foreground font-bold">{event.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{event.date}</p>
                <p className="text-muted-foreground text-sm">{event.location}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-primary text-sm font-semibold">{event.entryFee}</span>
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
