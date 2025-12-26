'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What age groups do you train?',
    answer:
      "We train players of all ages, starting from 6 years old. Our junior development program is designed for children aged 6-16, while we have separate batches for adults and seniors. We believe it's never too early or too late to start playing squash!",
  },
  {
    question: 'Do I need my own equipment to start?',
    answer:
      "No, you don't need your own equipment to begin. We provide rackets and balls for beginners during trial sessions and initial training. As you progress, we can help you select and purchase equipment suited to your playing style.",
  },
  {
    question: 'How do I book a trial session?',
    answer:
      'You can book a trial session by calling us at +91 98765 43210, sending an email to info@ashrafsquash.com, or filling out the contact form on our website. We offer free 30-minute trial sessions at all our locations.',
  },
  {
    question: 'What are the coaching fees?',
    answer:
      'Our fees vary depending on the program type, frequency of sessions, and location. We offer monthly packages starting from ₹5,000 for group sessions and ₹12,000 for personal training. Contact us for a detailed fee structure.',
  },
  {
    question: 'Do you offer corporate training programs?',
    answer:
      'Yes! We offer customized corporate training programs including team building sessions, regular coaching batches for employees, and tournament organization. Many leading companies in Delhi NCR have partnered with us for their employee wellness initiatives.',
  },
  {
    question: 'Can I switch between different locations?',
    answer:
      'Yes, our multi-location membership allows you to train at any of our four facilities across Delhi NCR. This flexibility is particularly popular among our corporate members who can choose the location most convenient for them.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">FAQs</p>
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border-border overflow-hidden rounded border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
              >
                <span className="text-foreground pr-4 font-medium">{faq.question}</span>
                <ChevronDown
                  className={`text-muted-foreground h-5 w-5 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
