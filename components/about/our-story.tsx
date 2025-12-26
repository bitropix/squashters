import Image from 'next/image';

const milestones = [
  {
    year: '2004',
    title: 'The Beginning',
    description:
      'Started with a single court in Delhi, coaching just 10 students with a vision to transform Indian squash.',
  },
  {
    year: '2010',
    title: 'First National Champion',
    description: "Trained our first national junior champion, putting the academy on India's squash map.",
  },
  {
    year: '2015',
    title: 'Expansion to NCR',
    description: 'Opened our second facility in Gurgaon, bringing quality coaching closer to more aspiring players.',
  },
  {
    year: '2020',
    title: 'Four Centers Strong',
    description: "Established presence in Noida and Faridabad, becoming Delhi NCR's largest squash academy network.",
  },
  {
    year: '2025',
    title: 'Legacy Continues',
    description: 'Training 500+ active students with 50+ national champions and counting.',
  },
];

export function OurStory() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Journey</p>
            <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              From One Court to Delhi NCR&apos;s Largest Academy
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              What started as a dream to bring world-class squash coaching to India has grown into a movement that has
              touched thousands of lives. Our story is one of passion, perseverance, and an unwavering commitment to
              excellence.
            </p>

            {/* Timeline */}
            <div className="mt-10 space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="border-border relative border-l-2 pl-8">
                  <div className="bg-primary absolute top-0 left-0 h-4 w-4 -translate-x-1/2 rounded-full" />
                  <div className="pb-8">
                    <span className="bg-primary text-primary-foreground mb-2 inline-block rounded px-2 py-1 text-xs font-medium">
                      {milestone.year}
                    </span>
                    <h3 className="text-foreground text-lg font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-3/4 overflow-hidden rounded">
                <Image
                  src="/squash-academy-early-days-vintage-training-photo.jpg"
                  alt="Early days of the academy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded">
                <Image
                  src="/squash-trophy-ceremony-champion-celebration.jpg"
                  alt="Championship celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square overflow-hidden rounded">
                <Image
                  src="/modern-squash-facility-delhi-ncr-sports-complex.jpg"
                  alt="Modern facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-3/4 overflow-hidden rounded">
                <Image
                  src="/group-squash-training-session-team-photo.jpg"
                  alt="Group training session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
