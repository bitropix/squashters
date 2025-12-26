'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Training Tips', 'Tournaments', 'Nutrition', 'Academy News', 'Player Stories'];

const blogs = [
  {
    slug: 'essential-squash-techniques',
    title: '5 Essential Squash Techniques Every Beginner Should Master',
    excerpt:
      'Starting your squash journey? Here are the fundamental techniques that will set a strong foundation for your game and help you progress faster.',
    image: '/squash-player-forehand-technique-training.jpg',
    date: 'Dec 20, 2025',
    author: 'Coach Ashraf',
    category: 'Training Tips',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'first-squash-tournament',
    title: 'Preparing for Your First Squash Tournament: A Complete Guide',
    excerpt:
      'Everything you need to know about tournament preparation, from mental readiness to physical conditioning and match strategy.',
    image: '/squash-tournament-competition-player-ready.jpg',
    date: 'Dec 15, 2025',
    author: 'Coach Priya',
    category: 'Tournaments',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'nutrition-tips-squash',
    title: 'Nutrition Tips for Squash Players: Fuel Your Performance',
    excerpt:
      'Fuel your game with the right nutrition. Learn what to eat before, during, and after your squash sessions for optimal performance.',
    image: '/athlete-nutrition-healthy-food-sports.jpg',
    date: 'Dec 10, 2025',
    author: 'Dr. Amit Kumar',
    category: 'Nutrition',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'junior-championship-results',
    title: 'Our Students Shine at National Junior Championship 2024',
    excerpt:
      'Celebrating the outstanding performance of our junior players at the recently concluded National Junior Championship in Mumbai.',
    image: '/squash-trophy-ceremony-champion-celebration.jpg',
    date: 'Dec 5, 2025',
    author: 'Academy News',
    category: 'Academy News',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'footwork-drills',
    title: 'Master Your Footwork: 7 Drills to Improve Court Movement',
    excerpt:
      'Good footwork is the foundation of great squash. Try these proven drills to enhance your speed, agility, and court coverage.',
    image: '/squash-player-footwork-training-drill.jpg',
    date: 'Nov 28, 2025',
    author: 'Coach Rajesh',
    category: 'Training Tips',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'arjun-kapoor-journey',
    title: "From Beginner to National Champion: Arjun Kapoor's Journey",
    excerpt:
      'An inspiring story of dedication and hard work. Read about how Arjun went from a curious beginner to winning the National Junior title.',
    image: '/young-indian-male-squash-champion-celebrating-trop.jpg',
    date: 'Nov 20, 2025',
    author: 'Coach Ashraf',
    category: 'Player Stories',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'mental-game-squash',
    title: 'The Mental Game: Building Resilience on the Squash Court',
    excerpt:
      'Learn how to develop mental toughness, handle pressure situations, and maintain focus during crucial points in your matches.',
    image: '/athlete-mental-focus-concentration-sports.jpg',
    date: 'Nov 15, 2025',
    author: 'Coach Priya',
    category: 'Training Tips',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'new-gurgaon-facility',
    title: 'Announcing Our New Glass-Back Court in Gurgaon',
    excerpt:
      "We're excited to unveil our latest addition - a state-of-the-art glass-back court at our Gurgaon facility, now open for bookings.",
    image: '/premium-squash-facility-gurgaon-modern-sports.jpg',
    date: 'Nov 10, 2025',
    author: 'Academy News',
    category: 'Academy News',
    readTime: '3 min read',
    featured: false,
  },
  {
    slug: 'recovery-techniques',
    title: 'Post-Match Recovery: Essential Techniques for Squash Players',
    excerpt:
      'Proper recovery is crucial for performance and injury prevention. Here are the best practices to follow after intense training or matches.',
    image: '/athlete-recovery-stretching-sports-massage.jpg',
    date: 'Nov 5, 2025',
    author: 'Dr. Amit Kumar',
    category: 'Nutrition',
    readTime: '5 min read',
    featured: false,
  },
];

export function BlogsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter((blog) => blog.category === selectedCategory);

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border-border border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && (
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group bg-card border-border hover:border-primary/50 relative overflow-hidden rounded border transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blog.image || '/placeholder.svg'}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground rounded px-3 py-1 text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-muted-foreground mb-3 flex items-center gap-4 text-sm">
                    <span className="text-primary font-medium">{blog.category}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <h2 className="text-foreground group-hover:text-primary line-clamp-2 text-xl font-bold transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground mt-3 line-clamp-2">{blog.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group bg-card border-border hover:border-primary/50 overflow-hidden rounded border transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={blog.image || '/placeholder.svg'}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-muted-foreground mb-2 flex items-center gap-3 text-sm">
                  <span className="text-primary font-medium">{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
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

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="bg-transparent">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
