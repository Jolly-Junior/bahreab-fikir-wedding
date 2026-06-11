export function EventCard({
  title,
  amharic,
  location,
  time,
  details,
  icon,
}: {
  title: string
  amharic: string
  location: string
  time: string
  details: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors duration-300">
      {/* Icon */}
      <div className="mb-6 text-primary">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
        {title}
      </h3>

      {/* Amharic */}
      <p className="text-sm text-primary/70 italic mb-4 font-body">
        {amharic}
      </p>

      {/* Divider */}
      <div className="h-px bg-border mb-4"></div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-primary font-semibold text-sm min-w-fit">Location:</span>
          <span className="text-foreground">{location}</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-primary font-semibold text-sm min-w-fit">Time:</span>
          <span className="text-foreground">{time}</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-primary font-semibold text-sm min-w-fit">Details:</span>
          <span className="text-muted-foreground text-sm leading-relaxed">{details}</span>
        </div>
      </div>
    </div>
  )
}

export function ScheduleSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Celebrations
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Schedule of Events
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Three days of traditional Ethiopian celebrations honoring our heritage and love
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EventCard
            title="THE CROWNING"
            amharic="ሜልስ - MELS"
            location="Sheraton Addis Ababa Hotel"
            time="Saturday, June 15 • 2:00 PM"
            details="The sacred crowning ceremony where we unite as one under the blessings of our families and traditions. A moment steeped in Ethiopian Orthodox heritage and sacred rites."
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            }
          />

          <EventCard
            title="THE CELEBRATION"
            amharic="ቅልቅል - KELEKEL"
            location="Addis Ababa Convention Center"
            time="Sunday, June 16 • 12:00 PM"
            details="A joyous gathering with traditional music, dancing, and feasting. Friends and family celebrate with us through Azmari performances, traditional games, and the sharing of injera and tej."
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            }
          />

          <EventCard
            title="THE RECEPTION"
            amharic="መልስ & ቅልቅል - MELIS & KELEKEL"
            location="Grand Palace Ballroom, Addis Ababa"
            time="Monday, June 17 • 6:00 PM"
            details="An elegant evening reception with dinner, toasts, dancing, and celebration. We gather in joy to honor our union and the bonds of family that brought us together."
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 9H9V2H7v7H5v2h6V9zm6-5h-1V2h-2v2h-1v7h4V4zm4 0v2h1v7h2V4h-2V2h-2z"/>
              </svg>
            }
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 bg-primary/5 rounded-lg p-8 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Traditional Dress
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We respectfully request that guests wear formal traditional Ethiopian attire or elegant formal wear. The Habesha Kemis, Kaba, Shawl, and Joté are warmly welcomed and celebrated.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                Cultural Protocol
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Our celebration honors deep Ethiopian traditions. Guests are invited to participate in customary practices, including the sharing of Tej, coffee ceremonies, and celebratory dancing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
