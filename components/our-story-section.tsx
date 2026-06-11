import Image from 'next/image'

export function OurStorySection() {
  const timelineEvents = [
    {
      year: '2018',
      title: 'The Encounter',
      description: 'ለመጀመሪያ ጊዜ አገናኙ',
      amharic: 'Our paths crossed at a family gathering in the heart of Addis Ababa',
    },
    {
      year: '2020',
      title: 'Growing Together',
      description: 'ምንባብ እና መሆን',
      amharic: 'Through the seasons, our bond deepened with shared dreams and traditions',
    },
    {
      year: '2024',
      title: 'The Promise',
      description: 'ፍቅር እና ስምምነት',
      amharic: 'A heartfelt proposal beneath the stars cemented our forever promise',
    },
  ]

  return (
    <section className="bg-primary/8 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Story
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20"></div>

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Content */}
                <div className="flex-1 pl-12 md:pl-0 md:pr-8 md:text-right">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <p className="text-primary font-heading font-semibold text-lg mb-2">
                      {event.year}
                    </p>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-primary/70 italic mb-3">
                      {event.description}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {event.amharic}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:relative md:flex md:justify-center md:items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every chapter of our love story has been blessed by our families and guided by our traditions. We are honored to share this next beautiful chapter with you.
          </p>
        </div>
      </div>
    </section>
  )
}
