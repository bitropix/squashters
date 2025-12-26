import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Ready to Start Your Squash Journey?
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
          Book your free trial session today and experience world-class coaching at Squashters.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg" className="gap-2 px-8 text-base">
              Book Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          {/* Phone Dialer Button */}
          <Link href="tel:+919876543210">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent px-8 text-base">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
