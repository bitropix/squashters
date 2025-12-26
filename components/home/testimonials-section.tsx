'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Coach Ashraf's training methodology transformed my game completely. I went from a beginner to a state-level player in just 2 years. His dedication to each student is unmatched.",
    name: 'Rahul Sharma',
    role: 'State Champion 2023',
    image: '/young-indian-male-athlete-portrait-professional.jpg',
  },
  {
    quote:
      "The academy provided my daughter with not just squash skills but life lessons in discipline and perseverance. She's now representing India at junior international tournaments.",
    name: 'Priya Mehta',
    role: 'Parent',
    image: '/indian-woman-professional-portrait.png',
  },
  {
    quote:
      'As a corporate professional, the flexible timings and personalized coaching helped me pursue my passion for squash without compromising my work schedule.',
    name: 'Vikram Singh',
    role: 'Corporate Member',
    image: '/indian-businessman-professional-portrait-headshot.jpg',
  },
  {
    quote:
      'The ladies-only batches gave me the confidence to learn in a comfortable environment. Now I play competitively in local tournaments!',
    name: 'Ananya Gupta',
    role: 'Ladies Batch Student',
    image: '/indian-woman-athlete-portrait-professional-sports.jpg',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">Testimonials</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            What Our Students Say
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="bg-background border-border rounded border-2 p-8 md:p-12">
            <Quote className="text-primary/20 mb-6 h-12 w-12" />
            <p className="text-foreground mb-8 text-lg leading-relaxed md:text-xl">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src={testimonials[currentIndex].image || '/placeholder.svg'}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-foreground font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-background border-border text-foreground hover:bg-border flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-background border-border text-foreground hover:bg-border flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
