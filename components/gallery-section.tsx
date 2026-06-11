'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { weddingConfig } from '@/lib/config'

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const images = weddingConfig.gallery

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlay, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cherished moments from our journey together
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-card rounded-xl overflow-hidden border border-border shadow-xl">
          {/* Main Image */}
          <div className="relative w-full h-96 sm:h-[500px] md:h-[600px]">
            <Image
              src={images[currentIndex].image}
              alt={images[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Image Overlay with Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="w-full p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  {images[currentIndex].title}
                </h3>
                <p className="text-sm md:text-base text-gray-200">
                  {images[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary p-2 rounded-full transition z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-primary-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary p-2 rounded-full transition z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-primary-foreground" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm font-semibold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="bg-background px-4 sm:px-6 py-6 flex gap-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-primary ring-2 ring-primary/50'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Auto-Play Indicator */}
          <div className="h-1 bg-border">
            <div
              className="h-full bg-primary transition-all"
              style={{
                width: isAutoPlay ? '100%' : '0%',
                animation: isAutoPlay ? 'slideAnimation 3s linear infinite' : 'none',
              }}
            />
          </div>
        </div>

        {/* View Full Gallery Link */}
        <div className="text-center mt-8">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition"
          >
            View Full Gallery →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideAnimation {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </section>
  )
}
