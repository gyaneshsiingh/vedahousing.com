'use client'

import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './globals.css'

export default function Page() {
  const [popupScale, setPopupScale] = useState(0)
  const [popupOpacity, setPopupOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.vh-hero')
      if (!heroSection) return

      const heroRect = heroSection.getBoundingClientRect()
      const heroBottom = heroRect.bottom
      const windowHeight = window.innerHeight

      const triggerPoint = windowHeight * 0.5
      const fadeDistance = windowHeight * 0.8

      if (heroBottom < triggerPoint) {
        const scrollPast = triggerPoint - heroBottom
        const progress = Math.min(scrollPast / fadeDistance, 1)

        setPopupScale(0.8 + progress * 0.2)
        setPopupOpacity(progress * 0.95)
      } else {
        setPopupScale(0)
        setPopupOpacity(0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shouldShow = popupOpacity > 0

  return (
    <div className="vh-app">
      <Header />
      <Hero />
      <Footer />

      {shouldShow && (
        <div
          className="vh-popup-image"
          style={{
            opacity: popupOpacity,
            '--popup-scale': popupScale,
          }}
        >
          <div className="vh-popup-image-wrapper">
            <img src="/cover-vedahousing.jpg" alt="Varanasi Ghats" />
          </div>
        </div>
      )}
    </div>
  )
}