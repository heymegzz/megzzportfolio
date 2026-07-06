import { useEffect, useRef } from 'react'
import './CursorGlow.css'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const handleMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08
      pos.current.y += (target.current.y - pos.current.y) * 0.08

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}
