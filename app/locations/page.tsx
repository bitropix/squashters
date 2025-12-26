import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LocationsHero } from '@/components/locations/locations-hero';
import { LocationsList } from '@/components/locations/locations-list';
import { FacilitiesSection } from '@/components/locations/facilities-section';
import { CTASection } from '@/components/home/cta-section';

export const metadata = {
  title: 'Our Locations | Squashters',
  description:
    'Find Squashters locations across Delhi NCR - Delhi, Gurgaon, Noida, and Faridabad. State-of-the-art facilities with world-class coaching.',
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main>
        <LocationsHero />
        <LocationsList />
        <FacilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
