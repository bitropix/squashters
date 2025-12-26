'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border-border rounded border p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-foreground text-2xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground mt-4">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>
        <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border-border rounded border p-8">
      <h2 className="text-foreground mb-2 text-2xl font-bold">Send Us a Message</h2>
      <p className="text-muted-foreground mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-foreground mb-2 block text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-background"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-foreground mb-2 block text-sm font-medium">
              Email Address <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-background"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="text-foreground mb-2 block text-sm font-medium">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="bg-background"
            />
          </div>
          <div>
            <label htmlFor="location" className="text-foreground mb-2 block text-sm font-medium">
              Preferred Location
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border-input bg-background ring-offset-background focus-visible:ring-ring h-10 w-full rounded border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
            >
              <option value="">Select a location</option>
              <option value="delhi">Delhi</option>
              <option value="gurgaon">Gurgaon</option>
              <option value="noida">Noida</option>
              <option value="faridabad">Faridabad</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-foreground mb-2 block text-sm font-medium">
            Subject <span className="text-destructive">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="border-input bg-background ring-offset-background focus-visible:ring-ring h-10 w-full rounded border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            <option value="">Select a subject</option>
            <option value="trial">Book a Free Trial</option>
            <option value="junior">Junior Programs</option>
            <option value="elite">Elite Training</option>
            <option value="corporate">Corporate Programs</option>
            <option value="ladies">Ladies Coaching</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="text-foreground mb-2 block text-sm font-medium">
            Message <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            className="bg-background resize-none"
          />
        </div>

        <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
