import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TournamentsHero } from '@/components/tournaments/tournaments-hero';
import { UpcomingEvents } from '@/components/tournaments/upcoming-events';
import { PastEvents } from '@/components/tournaments/past-events';
import { TournamentStats } from '@/components/tournaments/tournament-stats';
import { CTASection } from '@/components/home/cta-section';

export const metadata = {
  title: 'Tournaments & Events | Squashters',
  description:
    "Explore upcoming and past squash tournaments and events at Squashters. See our students' achievements and register for upcoming competitions.",
};

export default function TournamentsPage() {
  return (
    <>
      <Header />
      <main>
        <TournamentsHero />
        <UpcomingEvents />
        <TournamentStats />
        <PastEvents />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
