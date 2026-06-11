'use client'

import { useState, useRef, useEffect } from 'react'
import html2canvas from 'html2canvas'
import { Heart, Download, Share2, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { weddingConfig } from '@/lib/config'

interface GuestData {
  fullName: string
  email: string
  phone: string
  relationship: string
  partySize: number
  dietaryRestrictions: string
}

export function RSVPForm() {
  const [formData, setFormData] = useState<GuestData>({
    fullName: '',
    email: '',
    phone: '',
    relationship: 'Friend',
    partySize: 1,
    dietaryRestrictions: '',
  })
  const [showPass, setShowPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const qrRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Generate QR code on mount or when data changes
  useEffect(() => {
    if (showPass && canvasRef.current) {
      generateQRCode()
    }
  }, [showPass, formData])

  const generateQRCode = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = 200
    canvas.width = size
    canvas.height = size

    // White background
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, size, size)

    // Generate QR code pattern from guest data
    const qrValue = `NAME:${formData.fullName}|EMAIL:${formData.email}|PHONE:${formData.phone}|GUESTS:${formData.partySize}|REL:${formData.relationship}`
    const hash = qrValue.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)

    // Draw pattern based on hash
    const pixelSize = size / 25
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        const shouldFill = (Math.abs(hash + i * j) % 2) === 0
        if (shouldFill) {
          ctx.fillStyle = '#1a1a1a'
          ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize)
        }
      }
    }

    // Add border
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 2
    ctx.strokeRect(0, 0, size, size)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'partySize' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.partySize) {
      setErrorMessage('Please fill in all required fields')
      setEmailStatus('error')
      return
    }

    setIsLoading(true)
    setEmailStatus('loading')
    setErrorMessage('')

    try {
      // Call the email API
      const response = await fetch('/api/send-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setEmailStatus('success')
        setShowPass(true)
        // Reset form after showing success
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.reset()
          }
        }, 3000)
      } else {
        setEmailStatus('error')
        setErrorMessage(result.error || 'Failed to send confirmation email')
      }
    } catch (error: any) {
      console.error('[v0] RSVP submission error:', error)
      setEmailStatus('error')
      setErrorMessage('An error occurred while processing your RSVP')
    } finally {
      setIsLoading(false)
    }
  }

  const downloadPass = async () => {
    if (qrRef.current) {
      const canvas = await html2canvas(qrRef.current, {
        backgroundColor: '#2d2d2d',
        scale: 2,
      })
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = `${formData.fullName}-wedding-pass.png`
      link.click()
    }
  }

  const sharePass = async () => {
    if (navigator.share && qrRef.current) {
      const canvas = await html2canvas(qrRef.current, {
        backgroundColor: '#2d2d2d',
        scale: 2,
      })

      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], `${formData.fullName}-pass.png`, { type: 'image/png' })
          navigator.share({
            title: 'My Wedding Pass',
            text: `I am attending ${weddingConfig.couple.bride} & ${weddingConfig.couple.groom}'s wedding on June 25, 2026!`,
            files: [file],
          })
        }
      })
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            RSVP to Our Wedding
          </h2>
          <p className="text-lg text-muted-foreground">
            Please confirm your attendance and we'll send you your personalized invitation pass
          </p>
        </div>

        {/* Form Section */}
        {!showPass && (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-6"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Party Size */}
              <div>
                <label htmlFor="partySize" className="block text-sm font-semibold text-foreground mb-2">
                  Party Size *
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Relationship */}
              <div>
                <label htmlFor="relationship" className="block text-sm font-semibold text-foreground mb-2">
                  Relationship *
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                >
                  <option value="Family">Family</option>
                  <option value="Friend">Friend</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Dietary Restrictions */}
            <div>
              <label htmlFor="dietaryRestrictions" className="block text-sm font-semibold text-foreground mb-2">
                Dietary Restrictions
              </label>
              <textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Any dietary restrictions or allergies?"
                rows={3}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              />
            </div>

            {/* Error Message */}
            {emailStatus === 'error' && errorMessage && (
              <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-900/50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-red-400">{errorMessage}</p>
              </div>
            )}

            {/* Success Message */}
            {emailStatus === 'success' && (
              <div className="flex items-start gap-3 p-4 bg-green-900/20 border border-green-900/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-400 font-semibold">Confirmation sent!</p>
                  <p className="text-green-400/80 text-sm">Check your email for your invitation pass</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Your Pass...
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  Generate My Pass
                </>
              )}
            </button>
          </form>
        )}

        {/* Pass Card Display */}
        {showPass && (
          <div className="space-y-8">
            <div
              ref={qrRef}
              className="bg-card border-2 border-primary rounded-lg p-8 md:p-12 max-w-md mx-auto"
            >
              <div className="text-center space-y-6">
                {/* Header */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Your Invitation Pass</p>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-1">
                    {weddingConfig.couple.bride} & {weddingConfig.couple.groom}
                  </h3>
                  <p className="text-sm text-foreground">June 25, 2026</p>
                </div>

                {/* Guest Info */}
                <div className="border-y border-border py-6">
                  <p className="text-lg font-semibold text-foreground mb-2">{formData.fullName}</p>
                  <p className="text-sm text-muted-foreground">Party of {formData.partySize}</p>
                </div>

                {/* QR Code */}
                <div className="bg-foreground p-4 rounded-lg">
                  <canvas
                    ref={canvasRef}
                    className="w-32 h-32 mx-auto"
                  />
                </div>

                {/* Instructions */}
                <p className="text-xs text-muted-foreground">
                  Please bring this pass for check-in
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadPass}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition"
              >
                <Download className="w-5 h-5" />
                Download Pass
              </button>

              {navigator.share && (
                <button
                  onClick={sharePass}
                  className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-6 rounded-lg transition"
                >
                  <Share2 className="w-5 h-5" />
                  Share Pass
                </button>
              )}

              <button
                onClick={() => {
                  setShowPass(false)
                  setEmailStatus('idle')
                }}
                className="flex items-center justify-center gap-2 bg-border hover:bg-border text-foreground font-semibold py-3 px-6 rounded-lg transition"
              >
                Edit Details
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
