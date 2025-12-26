export function MapSection() {
  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-foreground text-2xl font-bold">Find Us on the Map</h2>
          <p className="text-muted-foreground mt-2">Visit our main center at Siri Fort Sports Complex</p>
        </div>
        <div className="border-border aspect-video overflow-hidden rounded border md:aspect-21/9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1234567890123!2d77.2234567890123!3d28.5678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSiri%20Fort%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Squashters Location"
          />
        </div>
      </div>
    </section>
  );
}
