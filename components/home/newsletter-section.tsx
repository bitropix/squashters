'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="bg-primary relative overflow-hidden rounded">
          <div className="absolute inset-0 opacity-10">
            <div className="bg-primary-foreground absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="bg-primary-foreground absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full" />
          </div>

          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-primary-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-primary-foreground/80 mx-auto mt-4 max-w-2xl">
              Get the latest news, tournament updates, training tips, and exclusive offers delivered directly to your
              inbox.
            </p>

            {isSubmitted ? (
              <div className="bg-primary-foreground/10 mx-auto mt-8 max-w-md rounded p-4">
                <p className="text-primary-foreground font-medium">
                  Thank you for subscribing! Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground text-background placeholder:text-background/60 flex-1 border-0"
                />
                <Button type="submit" variant="secondary" className="gap-2">
                  <Send className="h-4 w-4" />
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
