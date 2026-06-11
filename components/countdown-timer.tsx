'use client'

import { useState, useEffect } from 'react'
import { weddingConfig } from '@/lib/config'

export function CountdownTimer() {
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isWeddingDay: false,
    isAfterWedding: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingTime = weddingConfig.weddingDate
      const now = new Date().getTime()
      const difference = weddingTime - now

      if (difference < 0) {
        // Wedding has passed - calculate days since
        const daysSince = Math.floor(Math.abs(difference) / (1000 * 60 * 60 * 24))
        const hoursSince = Math.floor((Math.abs(difference) / (1000 * 60 * 60)) % 24)
        const minutesSince = Math.floor((Math.abs(difference) / 1000 / 60) % 60)
        const secondsSince = Math.floor((Math.abs(difference) / 1000) % 60)

        setTimeData({
          days: daysSince,
          hours: hoursSince,
          minutes: minutesSince,
          seconds: secondsSince,
          isWeddingDay: false,
          isAfterWedding: true,
        })
      } else if (difference === 0) {
        setTimeData({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isWeddingDay: true,
          isAfterWedding: false,
        })
      } else {
        setTimeData({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isWeddingDay: false,
          isAfterWedding: false,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-card border-t border-b border-border py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          {timeData.isWeddingDay ? (
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Today is the Day! 💕
            </h2>
          ) : timeData.isAfterWedding ? (
            <>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                Days Since We Said "I Do"
              </h2>
              <p className="text-muted-foreground">
                {weddingConfig.couple.bride} & {weddingConfig.couple.groom}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                We Can't Wait to Celebrate With You
              </h2>
              <p className="text-muted-foreground">
                {weddingConfig.couple.bride} & {weddingConfig.couple.groom}
              </p>
            </>
          )}
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {/* Days */}
          <div className="bg-background rounded-lg p-3 sm:p-4 md:p-6 text-center border border-border hover:border-primary transition-colors">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
              {String(timeData.days).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">
              {timeData.isAfterWedding ? 'Days Since' : 'Days'}
            </div>
          </div>

          {/* Hours */}
          <div className="bg-background rounded-lg p-3 sm:p-4 md:p-6 text-center border border-border hover:border-primary transition-colors">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
              {String(timeData.hours).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">
              Hours
            </div>
          </div>

          {/* Minutes */}
          <div className="bg-background rounded-lg p-3 sm:p-4 md:p-6 text-center border border-border hover:border-primary transition-colors">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
              {String(timeData.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">
              Minutes
            </div>
          </div>

          {/* Seconds */}
          <div className="bg-background rounded-lg p-3 sm:p-4 md:p-6 text-center border border-border hover:border-primary transition-colors">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
              {String(timeData.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">
              Seconds
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            June 25, 2026 • {weddingConfig.location.city}, {weddingConfig.location.country}
          </p>
        </div>
      </div>
    </section>
  )
}
