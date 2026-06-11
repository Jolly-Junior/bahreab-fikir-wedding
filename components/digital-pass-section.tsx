export function DigitalPassSection() {
  return (
    <section className="bg-primary/5 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-3">
            Your Digital Invitation Pass
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Scan Your Personal Digital Invitation Pass
          </p>
        </div>

        {/* Digital Pass Card */}
        <div className="flex justify-center">
          <div className="bg-card border-2 border-primary rounded-2xl p-8 md:p-10 max-w-sm w-full shadow-sm">
            {/* Pass Header */}
            <div className="text-center mb-6">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                Digital Pass
              </p>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Alemitu & Bekele
              </h3>
            </div>

            {/* QR Code Placeholder */}
            <div className="bg-foreground/5 rounded-lg p-6 mb-6 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                {/* Simulated QR Code Grid */}
                <svg className="w-32 h-32 text-primary/40" viewBox="0 0 100 100" fill="none">
                  <rect x="10" y="10" width="30" height="30" fill="currentColor"/>
                  <rect x="60" y="10" width="30" height="30" fill="currentColor"/>
                  <rect x="10" y="60" width="30" height="30" fill="currentColor"/>
                  
                  {/* Random QR-like pattern */}
                  <rect x="15" y="15" width="5" height="5" fill="white"/>
                  <rect x="25" y="20" width="4" height="4" fill="white"/>
                  <rect x="18" y="28" width="6" height="6" fill="white"/>
                  <rect x="65" y="15" width="5" height="5" fill="white"/>
                  <rect x="75" y="20" width="4" height="4" fill="white"/>
                  <rect x="68" y="28" width="6" height="6" fill="white"/>
                  <rect x="15" y="65" width="5" height="5" fill="white"/>
                  <rect x="25" y="70" width="4" height="4" fill="white"/>
                  <rect x="18" y="78" width="6" height="6" fill="white"/>
                  
                  {/* Middle patterns */}
                  <rect x="45" y="40" width="3" height="3" fill="currentColor"/>
                  <rect x="52" y="45" width="3" height="3" fill="currentColor"/>
                  <rect x="48" y="52" width="3" height="3" fill="currentColor"/>
                  <rect x="55" y="55" width="3" height="3" fill="currentColor"/>
                  <rect x="42" y="60" width="3" height="3" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Pass Info */}
            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Event Date</span>
                <span className="font-semibold text-foreground">June 15-17, 2026</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Location</span>
                <span className="font-semibold text-foreground">Addis Ababa</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Guest Name</span>
                <span className="font-semibold text-foreground">[Your Name]</span>
              </div>
            </div>

            {/* Instructions */}
            <p className="text-xs text-center text-muted-foreground leading-relaxed">
              Present this pass at check-in for entry to all ceremonies and celebrations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
