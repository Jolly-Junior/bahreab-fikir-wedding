import Image from 'next/image'

export function AccommodationsSection() {
  return (
    <section className="bg-secondary text-secondary-foreground py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
            Logistics
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">
            Hotel Blocks & Accommodations
          </h2>
          <div className="h-1 w-12 bg-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Hotel Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-secondary-foreground mb-6">
              Recommended Hotels
            </h3>

            {/* Hotel Card 1 */}
            <div className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <h4 className="text-lg font-semibold text-secondary-foreground mb-2">
                Sheraton Addis Ababa Hotel
              </h4>
              <p className="text-sm text-secondary-foreground/80 mb-3">
                Addis Ababa, Ethiopia
              </p>
              <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-4">
                A luxurious 5-star hotel offering traditional Ethiopian hospitality with modern amenities. Special wedding rate available.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <p><span className="font-semibold">Rate:</span> $180/night (Guest rate)</p>
                <p><span className="font-semibold">Code:</span> ALEMITU26</p>
              </div>
              <button className="bg-accent hover:bg-accent/90 text-secondary font-semibold px-4 py-2 rounded text-sm transition-colors">
                Book Now
              </button>
            </div>

            {/* Hotel Card 2 */}
            <div className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <h4 className="text-lg font-semibold text-secondary-foreground mb-2">
                Hilton Addis Ababa
              </h4>
              <p className="text-sm text-secondary-foreground/80 mb-3">
                Addis Ababa, Ethiopia
              </p>
              <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-4">
                A premier destination featuring panoramic city views and award-winning service. Convenient access to all celebration venues.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <p><span className="font-semibold">Rate:</span> $195/night (Guest rate)</p>
                <p><span className="font-semibold">Code:</span> WEDDING2026</p>
              </div>
              <button className="bg-accent hover:bg-accent/90 text-secondary font-semibold px-4 py-2 rounded text-sm transition-colors">
                Book Now
              </button>
            </div>

            {/* Hotel Card 3 */}
            <div className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <h4 className="text-lg font-semibold text-secondary-foreground mb-2">
                Radisson Blu Hotel
              </h4>
              <p className="text-sm text-secondary-foreground/80 mb-3">
                Addis Ababa, Ethiopia
              </p>
              <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-4">
                Modern elegance with traditional Ethiopian warmth. Features premium amenities and conference facilities for our guests.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <p><span className="font-semibold">Rate:</span> $170/night (Guest rate)</p>
                <p><span className="font-semibold">Code:</span> BEKELE26</p>
              </div>
              <button className="bg-accent hover:bg-accent/90 text-secondary font-semibold px-4 py-2 rounded text-sm transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Right: Registry & Gifts */}
          <div className="flex flex-col justify-between">
            {/* Registry Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold text-secondary-foreground mb-6">
                Celebrate With Us
              </h3>

              {/* Agelgil Image */}
              <div className="mb-8 rounded-lg overflow-hidden h-64 md:h-80 relative">
                <Image
                  src="/agelgil-basket.png"
                  alt="Traditional Ethiopian Agelgil basket"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-secondary-foreground/90 leading-relaxed mb-6">
                The Agelgil—our traditional woven basket—symbolizes the bounty of our shared life together. We are blessed with love and family, and your presence is the greatest gift.
              </p>

              {/* Registry Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-accent hover:bg-accent/90 text-secondary font-heading font-semibold py-4 rounded transition-colors">
                  Honeymoon Fund
                </button>
                <button className="w-full bg-secondary-foreground/20 hover:bg-secondary-foreground/30 text-secondary-foreground font-semibold py-4 rounded border border-secondary-foreground/40 transition-colors">
                  Gift Registry
                </button>
              </div>
            </div>

            {/* Travel Info */}
            <div className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-lg p-6">
              <h4 className="font-heading font-semibold text-secondary-foreground mb-4">
                Travel Information
              </h4>
              <div className="space-y-3 text-sm text-secondary-foreground/90">
                <p>
                  <span className="font-semibold block mb-1">Getting There:</span>
                  Bole International Airport is the main airport serving Addis Ababa. Most international flights arrive here.
                </p>
                <p>
                  <span className="font-semibold block mb-1">Visas:</span>
                  Please check Ethiopian visa requirements for your country well in advance.
                </p>
                <p>
                  <span className="font-semibold block mb-1">Transportation:</span>
                  We are arranging group transportation between hotels and all celebration venues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
