import { useEffect, useRef } from 'react'

const WaveAnimation = ( isDarkMode ) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time += 0.02
      
      // Create multiple wave layers
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = canvas.height / 2 + 
            Math.sin((x * 0.01) + (time * (1 + i * 0.5))) * (20 + i * 10) +
            Math.sin((x * 0.005) + (time * 1.5)) * (10 + i * 5)
          ctx.lineTo(x, y)
        }
        
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        
        // Set wave colors based on theme
        if (isDarkMode) {
          ctx.fillStyle = `rgba(59, 130, 246, ${0.05 + i * 0.02})`
        } else {
          ctx.fillStyle = `rgba(147, 197, 253, ${0.1 + i * 0.03})`
        }
        ctx.fill()
      }
      
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isDarkMode])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  )
}

export default WaveAnimation
