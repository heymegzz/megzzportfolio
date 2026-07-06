import { useEffect, useRef } from 'react'
import './CosmosCanvas.css'

/*
  Cosmos Ambient Dust
  -------------------
  A highly optimized, smooth particle field for atmospheric depth.
*/

export default function CosmosCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let animId
    let mouse = { x: 0.5, y: 0.5 }
    let smoothMouse = { x: 0.5, y: 0.5 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e) => {
      mouse.x = e.clientX / window.innerWidth
      mouse.y = e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', handleMouse)

    const W = () => window.innerWidth
    const H = () => window.innerHeight

    const DUST_COUNT = 150
    const dust = []

    for (let i = 0; i < DUST_COUNT; i++) {
      dust.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        size: 0.5 + Math.random() * 1.5,
        brightness: 0.05 + Math.random() * 0.2,
        vx: (Math.random() - 0.5) * 0.15 + 0.05,
        vy: (Math.random() - 0.5) * 0.15 - 0.1,
        phase: Math.random() * Math.PI * 2,
      })
    }

    let time = 0

    const render = () => {
      time++
      const w = W()
      const h = H()

      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.04
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.04

      const mx = (smoothMouse.x - 0.5) * 40
      const my = (smoothMouse.y - 0.5) * 40

      ctx.clearRect(0, 0, w, h)

      for (const d of dust) {
        d.x += d.vx + mx * 0.001
        d.y += d.vy + my * 0.001

        if (d.x < -20) d.x = w + 20
        if (d.x > w + 20) d.x = -20
        if (d.y < -20) d.y = h + 20
        if (d.y > h + 20) d.y = -20

        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.01 + d.phase)
        const alpha = d.brightness * twinkle

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230, 240, 255, ${alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="cosmos-canvas"
      aria-hidden="true"
    />
  )
}
