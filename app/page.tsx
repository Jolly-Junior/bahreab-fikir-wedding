import { DarkHeroSection } from '@/components/dark-hero-section'
import { CountdownTimer } from '@/components/countdown-timer'
import { GallerySection } from '@/components/gallery-section'
import { RSVPForm } from '@/components/rsvp-form'
import { EventTimeline } from '@/components/event-timeline'
import { DarkFooter } from '@/components/dark-footer'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <DarkHeroSection />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Event Timeline */}
      <section id="events">
        <EventTimeline />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <GallerySection />
      </section>

      {/* RSVP Form with QR Generation */}
      <section id="rsvp">
        <RSVPForm />
      </section>

      {/* Footer */}
      <DarkFooter />
    </main>
  )
}
