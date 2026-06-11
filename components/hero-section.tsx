import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-20">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Ge'ez Script */}
            <div className="text-sm tracking-wider text-primary opacity-80">
              ሥርዓተ ሳቅላ
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground">
                ALEMITU &
                <br />
                BEKELE
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Together with our families, we joyfully invite you to celebrate our union in a traditional Ethiopian ceremony filled with love, culture, and timeless traditions.
              </p>
            </div>

            {/* Meskel Cross Divider */}
            <div className="flex items-center gap-3 text-primary">
              <div className="h-px flex-1 bg-primary/30"></div>
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1v6m0 8v8m-6-11h6m-6 8h6m-3-15l-4 4m8-8l-4 4m8 8l-4-4m-8 8l4-4"/>
              </svg>
              <div className="h-px flex-1 bg-primary/30"></div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-primary hover:bg-destructive text-white font-heading font-semibold px-8 py-4 text-lg transition-colors duration-300 tracking-wide">
                RSVP NOW
              </button>
            </div>
          </div>

          {/* Right: Portrait Image with Arch Frame */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl"></div>
              
              {/* Arched Frame */}
              <div className="arched-frame bg-card overflow-hidden rounded-3xl">
                <Image
                  src="/couple-portrait.png"
                  alt="Alemitu and Bekele in traditional Habesha Kemis and Kaba"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Bottom Decorative Elements */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
