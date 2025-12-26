import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogs = [
  {
    title: '5 Essential Squash Techniques Every Beginner Should Master',
    excerpt:
      'Starting your squash journey? Here are the fundamental techniques that will set a strong foundation for your game.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'Dec 20, 2025',
    author: 'Coach Ashraf',
    slug: 'essential-squash-techniques',
  },
  {
    title: 'Preparing for Your First Squash Tournament',
    excerpt:
      'Everything you need to know about tournament preparation, from mental readiness to physical conditioning.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'Dec 15, 2025',
    author: 'Coach Priya',
    slug: 'first-squash-tournament',
  },
  {
    title: 'Nutrition Tips for Squash Players',
    excerpt:
      'Fuel your game with the right nutrition. Learn what to eat before, during, and after your squash sessions.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'Dec 10, 2025',
    author: 'Dr. Amit Kumar',
    slug: 'nutrition-tips-squash',
  },
];

export function LatestBlogsSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Latest News</p>
            <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">From Our Blog</h2>
          </div>
          <Link href="/blogs">
            <Button variant="outline" className="gap-2 bg-transparent">
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group bg-background border-border hover:border-primary/50 overflow-hidden rounded border transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={blog.image || '/placeholder.svg'}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-muted-foreground mb-3 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>
                <h3 className="text-foreground group-hover:text-primary line-clamp-2 text-lg font-bold transition-colors">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">{blog.excerpt}</p>
                <div className="text-primary mt-4 flex items-center text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
