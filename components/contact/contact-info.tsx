import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Main Office',
    content: 'Siri Fort Sports Complex, August Kranti Marg, New Delhi - 110049',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@ashrafsquash.com',
    link: 'mailto:info@ashrafsquash.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Sat: 6:00 AM - 10:00 PM\nSunday: 7:00 AM - 8:00 PM',
  },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-foreground mb-2 text-2xl font-bold">Contact Information</h2>
        <p className="text-muted-foreground">Reach out to us through any of these channels.</p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.title} className="flex gap-4">
            <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded">
              <detail.icon className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold">{detail.title}</h3>
              {detail.link ? (
                <a href={detail.link} className="text-muted-foreground hover:text-primary transition-colors">
                  {detail.content}
                </a>
              ) : (
                <p className="text-muted-foreground whitespace-pre-line">{detail.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-card border-border rounded border p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
            <MessageCircle className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-foreground font-semibold">Chat on WhatsApp</h3>
            <p className="text-muted-foreground text-sm">Get instant responses</p>
          </div>
        </div>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-green-500 text-white hover:bg-green-600">Message Us on WhatsApp</Button>
        </a>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-foreground mb-4 font-semibold">Follow Us</h3>
        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="bg-card border-border text-muted-foreground hover:text-primary hover:border-primary flex h-10 w-10 items-center justify-center rounded border transition-colors"
              aria-label={item.name}
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
