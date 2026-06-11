'use client'

import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import { weddingConfig } from '@/lib/config'

export function DarkFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary">
              {weddingConfig.couple.bride} & {weddingConfig.couple.groom}
            </h3>
            <p className="text-muted-foreground">
              Join us as we celebrate our love and unity with family and friends in a traditional Ethiopian wedding ceremony.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition">
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition">Home</a>
              <a href="#gallery" className="block text-muted-foreground hover:text-primary transition">Gallery</a>
              <a href="#events" className="block text-muted-foreground hover:text-primary transition">Events</a>
              <a href="#rsvp" className="block text-muted-foreground hover:text-primary transition">RSVP</a>
              <a href="/gallery" className="block text-muted-foreground hover:text-primary transition">View Full Gallery</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Us</h4>
            <div className="space-y-3">
              <a href={`mailto:${weddingConfig.admin.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition">
                <Mail size={18} />
                <span>{weddingConfig.admin.email}</span>
              </a>
              <a href="tel:+251911000000" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition">
                <Phone size={18} />
                <span>+251 (911) 000-000</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{weddingConfig.location.city}, {weddingConfig.location.country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 {weddingConfig.couple.bride} & {weddingConfig.couple.groom}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <span>Made with</span>
            <Heart size={18} fill="currentColor" />
            <span>in {weddingConfig.location.country}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
