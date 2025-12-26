import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { MapSection } from '@/components/contact/map-section';

export const metadata = {
  title: 'Contact Us | Squashters',
  description:
    'Get in touch with Squashters. Book a free trial, ask questions, or visit us at any of our locations across Delhi NCR.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
