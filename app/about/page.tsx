import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutHero } from '@/components/about/about-hero';
import { CoachProfile } from '@/components/about/coach-profile';
import { OurStory } from '@/components/about/our-story';
import { TeamSection } from '@/components/about/team-section';
import { AchievementsSection } from '@/components/about/achievements-section';
import { ValuesSection } from '@/components/about/values-section';
import { CTASection } from '@/components/home/cta-section';

export const metadata = {
  title: 'About Us | Squashters',
  description:
    'Learn about Squashters - 20+ years of excellence in squash coaching. Meet our team, discover our story, and see our achievements.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CoachProfile />
        <OurStory />
        <ValuesSection />
        <TeamSection />
        <AchievementsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
