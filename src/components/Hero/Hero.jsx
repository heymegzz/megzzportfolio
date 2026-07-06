import { useState, useEffect } from 'react'
import CosmosCanvas from '../CosmosCanvas/CosmosCanvas'
import CinematicLoader from '../CinematicLoader/CinematicLoader'
import Navbar from '../Navbar/Navbar'
import './Hero.css'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [introState, setIntroState] = useState('loading')

  useEffect(() => {
    const img = new Image()
    img.src = '/hero-bg.png'
    img.onload = () => {
      setImageLoaded(true)
      setIntroState('boot')
    }
  }, [])

  useEffect(() => {
    if (!imageLoaded) return

    const focusTimer = setTimeout(() => setIntroState('focus'), 1000) 
    const readyTimer = setTimeout(() => setIntroState('ready'), 2200) 

    return () => {
      clearTimeout(focusTimer)
      clearTimeout(readyTimer)
    }
  }, [imageLoaded])

  const isFocusing = introState === 'focus' || introState === 'ready'
  const isReady = introState === 'ready'

  return (
    <section id="hero" className={`hero ${isReady ? 'hero--ready' : ''}`}>
      
      {/* Cinematic Wireframe Globe Loader */}
      <CinematicLoader stage={introState} />

      {/* Background Image with slow pan */}
      <div 
        className={`hero-background-image ${isFocusing ? 'hero-background-image--visible' : ''}`}
        aria-hidden="true"
      />
      
      {/* Optical Illusion Revolving Overlay over the globe in the image */}
      <div 
        className={`globe-revolve-overlay ${isFocusing ? 'globe-revolve-overlay--visible' : ''}`} 
        aria-hidden="true" 
      />

      {/* Ambient Aurora / Light Leaks */}
      <div 
        className={`hero-aurora ${isFocusing ? 'hero-aurora--visible' : ''}`} 
        aria-hidden="true" 
      />

      {/* Foreground particle dust */}
      <CosmosCanvas />

      {/* Vignette overlays */}
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-vignette-bottom" aria-hidden="true" />

      {/* Navigation */}
      {isReady && <Navbar />}

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-center-grid">
          
          <div className="hero-identity">
            <h1 className="hero-name">
              <span className="reveal-text delay-1">Meghna</span>{' '}
              <span className="reveal-text delay-2">Nair</span>
            </h1>
            <p className="hero-role">
              <span className="reveal-text delay-3">Building</span>{' '}
              <span className="reveal-text delay-4">Intelligent</span>{' '}
              <span className="reveal-text delay-5">Systems</span>
            </p>
          </div>

        </div>
      </div>
      
    </section>
  )
}
