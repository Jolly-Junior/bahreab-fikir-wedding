'use client'

import Image from 'next/image'
import { Heart, Calendar, MapPin } from 'lucide-react'
import { weddingConfig } from '@/lib/config'

export function DarkHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/couple-portrait.png"
          alt={`${weddingConfig.couple.bride} and ${weddingConfig.couple.groom}`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Couple Names */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-primary">
            {weddingConfig.couple.bride} <span className="text-white">&</span> {weddingConfig.couple.groom}
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-light">
            {weddingConfig.couple.brideAlt} & {weddingConfig.couple.groomAlt}
          </p>
          <p className="text-base sm:text-lg text-white/80">
            Are Joyfully Inviting You to Celebrate Their Wedding
          </p>
        </div>

        {/* Event Details Card */}
        <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-6 max-w-md mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-primary">
            <Calendar size={24} />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Thursday, June 25, 2026</p>
              <p className="text-lg font-semibold">9:00 AM onwards</p>
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-center gap-3 text-primary">
            <MapPin size={24} />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">{weddingConfig.location.city}, {weddingConfig.location.country}</p>
              <p className="text-lg font-semibold">Sheraton Addis Ababa</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="#rsvp"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition"
          >
            <Heart size={20} />
            RSVP Now
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-primary">↓</div>
        </div>
      </div>
    </section>
  )
}

