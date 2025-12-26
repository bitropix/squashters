import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogContentProps {
  blog: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    content: string;
  };
}

export function BlogContent({ blog }: BlogContentProps) {
  return (
    <article className="bg-background pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="text-muted-foreground hover:text-primary mb-8 inline-flex items-center transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded px-3 py-1 text-sm font-medium">
            {blog.category}
          </span>
          <h1 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
          <div className="text-muted-foreground mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded">
          <Image src={blog.image || '/placeholder.svg'} alt={blog.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg prose-headings:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Share */}
        <div className="border-border mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-foreground font-semibold">Share this article:</span>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border-border mt-12 rounded border p-8 text-center">
          <h3 className="text-foreground text-xl font-bold">Ready to Improve Your Game?</h3>
          <p className="text-muted-foreground mt-2">Join Squashters and learn from the best coaches in Delhi NCR.</p>
          <Link href="/contact">
            <Button className="mt-6">Book a Free Trial</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
