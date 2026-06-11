'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { weddingConfig } from '@/lib/config'

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const images = weddingConfig.gallery

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') setIsLightboxOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">
            Our Wedding Gallery
          </h1>
          <p className="text-muted-foreground">
            A collection of cherished moments from {weddingConfig.couple.bride} & {weddingConfig.couple.groom}&apos;s celebration
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsLightboxOpen(true)
                }}
                className="relative group overflow-hidden rounded-lg cursor-pointer border border-border hover:border-primary transition"
              >
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end">
                  <div className="w-full p-4 text-white">
                    <h3 className="font-heading font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Main Image */}
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">
            <Image
              src={images[currentIndex].image}
              alt={images[currentIndex].title}
              fill
              className="object-contain"
              priority
            />

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 bg-primary/80 hover:bg-primary p-3 rounded-full transition"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="text-primary-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 bg-primary/80 hover:bg-primary p-3 rounded-full transition"
              aria-label="Next"
            >
              <ChevronRight size={24} className="text-primary-foreground" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 bg-primary/80 hover:bg-primary p-3 rounded-full transition"
              aria-label="Close"
            >
              <X size={24} className="text-primary-foreground" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-300">{images[currentIndex].description}</p>
            </div>

            {/* Counter */}
            <div className="absolute top-4 left-4 bg-primary/80 px-4 py-2 rounded-full text-primary-foreground font-semibold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
