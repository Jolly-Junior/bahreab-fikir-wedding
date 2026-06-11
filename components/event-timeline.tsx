'use client'

import { Clock, MapPin } from 'lucide-react'
import { weddingConfig } from '@/lib/config'

export function EventTimeline() {
  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
            Schedule of Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A full day of traditional Ethiopian celebrations and festivities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {weddingConfig.events.map((event, index) => (
            <div
              key={event.id}
              className="bg-card border border-border/50 rounded-xl p-6 space-y-4 hover:border-primary/50 transition"
            >
              {/* Event Number */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>

              {/* Event Title */}
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-1">
                  {event.name}
                </h3>
                <p className="text-sm text-accent">{event.nameAmharic}</p>
              </div>

              {/* Time */}
              <div className="flex items-start gap-3 pt-2">
                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">{event.time}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">{event.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

