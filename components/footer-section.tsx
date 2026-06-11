export function FooterSection() {
  return (
    <footer className="bg-foreground text-card py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-card mb-2">
              Alemitu & Bekele
            </h3>
            <p className="text-card/70 text-sm">
              Celebrating love, family, and tradition
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-card mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-card/70 hover:text-card text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-card/70 hover:text-card text-sm transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-card/70 hover:text-card text-sm transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-card/70 hover:text-card text-sm transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* RSVP Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-card mb-4">
              RSVP
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:rsvp@alemitubekele.com" className="text-card/70 hover:text-card text-sm transition-colors">
                  rsvp@alemitubekele.com
                </a>
              </li>
              <li>
                <a href="tel:+251911234567" className="text-card/70 hover:text-card text-sm transition-colors">
                  +251 (0) 911 234 567
                </a>
              </li>
              <li>
                <p className="text-card/70 text-sm">
                  By: May 31, 2026
                </p>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-card mb-4">
              Connect
            </h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-card/70 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a.997.997 0 00-.121-1.99c-5.859 0-10.875 5.003-10.875 11.252 0 1.902.474 3.746 1.38 5.368l1.407 2.411-.953 3.267 3.282-.954c1.511.793 3.266 1.246 5.159 1.246 5.92 0 10.875-5.003 10.875-11.252C23.154 8.003 21.454 3 19 3zm-9 21.5c-1.817 0-3.545-.45-5.031-1.244l-.359-.208-3.715 1.08 1.078-3.699-.216-.352C1.421 17.615 1 15.92 1 14.248 1 8.003 5.897 3 12 3c5.99 0 10.875 5.003 10.875 11.252 0 6.249-4.885 11.248-10.875 11.248z"/>
                </svg>
              </a>
              <a href="#" className="text-card/70 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 19H5V8h3v11zm-.9-12.6a1.74 1.74 0 110-3.48 1.74 1.74 0 010 3.48zM19 19h-3v-5.6c0-1.33-.5-2.24-1.68-2.24-1.34 0-1.99.9-1.99 2.24V19h-3V8h3v1.56c.6-.9 1.65-2.1 3.99-2.1 2.92 0 5.11 1.9 5.11 6v5.54z"/>
                </svg>
              </a>
              <a href="#" className="text-card/70 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
                </svg>
              </a>
            </div>
            <p className="text-card/70 text-xs">
              Follow our wedding journey
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-card/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-card/60">
          <p>
            © 2026 Alemitu & Bekele. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-card transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-card transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Cultural Footer Message */}
        <div className="mt-8 text-center text-sm text-card/70 italic">
          <p className="mb-2">
            "Love is patient, love is kind. It always protects, always trusts, always hopes, and always perseveres."
          </p>
          <p>
            በስም አብ, እና ልጅ, እና ቅዱስ መንፈስ - In the name of Father, Son, and Holy Spirit
          </p>
        </div>
      </div>
    </footer>
  )
}
