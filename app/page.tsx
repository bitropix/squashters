import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { ProgramsSection } from '@/components/home/programs-section';
import { LocationsSection } from '@/components/home/locations-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { HallOfFameSection } from '@/components/home/hall-of-fame-section';
import { LatestBlogsSection } from '@/components/home/latest-blogs-section';
import { FAQSection } from '@/components/home/faq-section';
import { NewsletterSection } from '@/components/home/newsletter-section';
import { SponsorsSection } from '@/components/home/sponsors-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <LocationsSection />
        <TestimonialsSection />
        <HallOfFameSection />
        <LatestBlogsSection />
        <FAQSection />
        <NewsletterSection />
        <SponsorsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
