import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogsHero } from '@/components/blogs/blogs-hero';
import { BlogsGrid } from '@/components/blogs/blogs-grid';
import { NewsletterSection } from '@/components/home/newsletter-section';

export const metadata = {
  title: 'Blog | Squashters',
  description: 'Read the latest squash tips, training advice, tournament news, and updates from Squashters.',
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <BlogsHero />
        <BlogsGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
