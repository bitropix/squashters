'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trophy, Medal, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const pastEvents = [
  {
    id: 1,
    title: 'National Junior Squash Championship 2024',
    date: 'November 10-15, 2024',
    location: 'Mumbai',
    results: [
      { position: 'Gold', player: 'Arjun Kapoor', category: 'U-17' },
      { position: 'Silver', player: 'Kavya Sharma', category: 'U-15' },
      { position: 'Bronze', player: 'Rohan Gupta', category: 'U-19' },
    ],
    image: '/squash-trophy-ceremony-champion-celebration.jpg',
  },
  {
    id: 2,
    title: 'Delhi State Championship 2024',
    date: 'October 5-8, 2024',
    location: 'Siri Fort, Delhi',
    results: [
      { position: 'Gold', player: 'Sneha Reddy', category: "Women's Open" },
      { position: 'Gold', player: 'Vikram Singh', category: "Men's Above 35" },
      { position: 'Silver', player: 'Arjun Kapoor', category: "Men's Open" },
      { position: 'Bronze', player: 'Priya Mehta', category: "Women's Above 35" },
    ],
    image: '/delhi-state-squash-championship-winners.jpg',
  },
  {
    id: 3,
    title: 'Asian Junior Championship 2024',
    date: 'September 20-25, 2024',
    location: 'Kuala Lumpur, Malaysia',
    results: [
      { position: 'Bronze', player: 'Sneha Reddy', category: 'U-17 Girls' },
      { position: '4th Place', player: 'Arjun Kapoor', category: 'U-17 Boys' },
    ],
    image: '/asian-junior-squash-championship-international.jpg',
  },
  {
    id: 4,
    title: 'Corporate Squash League Season 2',
    date: 'August 1 - September 15, 2024',
    location: 'Delhi NCR',
    results: [
      { position: 'Champions', player: 'Team Google', category: 'Corporate' },
      { position: 'Runners-up', player: 'Team Deloitte', category: 'Corporate' },
    ],
    image: '/corporate-squash-league-trophy-ceremony.jpg',
  },
  {
    id: 5,
    title: 'Haryana State Junior Championship 2024',
    date: 'July 15-18, 2024',
    location: 'Gurgaon',
    results: [
      { position: 'Gold', player: 'Kavya Sharma', category: 'U-13' },
      { position: 'Gold', player: 'Rahul Verma', category: 'U-15' },
      { position: 'Silver', player: 'Ananya Singh', category: 'U-17' },
    ],
    image: '/haryana-state-junior-squash-championship.jpg',
  },
];

export function PastEvents() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(1);

  const getPositionColor = (position: string) => {
    if (position === 'Gold' || position === 'Champions') return 'text-yellow-500';
    if (position === 'Silver' || position === 'Runners-up') return 'text-gray-400';
    if (position === 'Bronze') return 'text-amber-600';
    return 'text-muted-foreground';
  };

  const getPositionIcon = (position: string) => {
    if (position === 'Gold' || position === 'Champions' || position === 'Silver' || position === 'Runners-up') {
      return <Trophy className="h-4 w-4" />;
    }
    return <Medal className="h-4 w-4" />;
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-primary mb-2 text-sm font-medium tracking-widest uppercase">Our Track Record</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">Past Events & Results</h2>
          <p className="text-muted-foreground mt-4">
            See how our students have performed in recent tournaments and championships.
          </p>
        </div>

        <div className="space-y-4">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-card border-border overflow-hidden rounded border">
              <button
                onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                className="hover:bg-muted/50 flex w-full items-center gap-4 p-4 text-left transition-colors"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded">
                  <Image src={event.image || '/placeholder.svg'} alt={event.title} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground font-bold">{event.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <span className="text-muted-foreground flex items-center gap-1 text-sm">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-primary mt-1 text-sm">
                    {event.results.length} achievement{event.results.length > 1 ? 's' : ''}
                  </p>
                </div>
                <div className="shrink-0">
                  {expandedEvent === event.id ? (
                    <ChevronUp className="text-muted-foreground h-5 w-5" />
                  ) : (
                    <ChevronDown className="text-muted-foreground h-5 w-5" />
                  )}
                </div>
              </button>

              {expandedEvent === event.id && (
                <div className="px-4 pb-4">
                  <div className="border-border border-t pt-4">
                    <h4 className="text-foreground mb-3 text-sm font-semibold">Our Results</h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {event.results.map((result, index) => (
                        <div key={index} className="bg-background flex items-center gap-3 rounded p-3">
                          <div className={`${getPositionColor(result.position)}`}>
                            {getPositionIcon(result.position)}
                          </div>
                          <div>
                            <p className={`font-semibold ${getPositionColor(result.position)}`}>{result.position}</p>
                            <p className="text-foreground text-sm">{result.player}</p>
                            <p className="text-muted-foreground text-xs">{result.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
