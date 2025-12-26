import { Trophy, Medal, Award, Star, Target, Users } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '50+', label: 'National Champions' },
  { icon: Medal, value: '15+', label: 'International Medals' },
  { icon: Award, value: '100+', label: 'State Championships' },
  { icon: Star, value: '20+', label: 'National Rankings' },
  { icon: Target, value: '500+', label: 'Tournament Wins' },
  { icon: Users, value: '5000+', label: 'Students Trained' },
];

const recentAchievements = [
  'National Junior Championship - Gold Medal (2024)',
  'Asian Junior Squash Championship - Bronze Medal (2024)',
  'Delhi State Championship - Multiple Golds (2024)',
  'All India Inter-University - Team Champions (2023)',
  'Senior National Championship - Finalist (2023)',
  'South Asian Games - National Team Member (2023)',
];

export function AchievementsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Our Achievements</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            A Legacy of Excellence
          </h2>
          <p className="text-muted-foreground mt-4">
            Our students have consistently excelled at state, national, and international levels.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border-border rounded border p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <stat.icon className="text-primary h-6 w-6" />
              </div>
              <p className="text-foreground text-2xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="bg-card border-border rounded border p-8">
          <h3 className="text-foreground mb-6 text-xl font-bold">Recent Achievements</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary h-2 w-2 shrink-0 rounded-full" />
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
