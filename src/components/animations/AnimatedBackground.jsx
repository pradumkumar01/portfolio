import { useEffect, useState } from 'react'

const AnimatedBackground = ({ isDarkMode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Add CSS animations to document head
    const style = document.createElement('style')
    style.textContent = `
      @keyframes moveGrid {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-pulse-custom {
        animation: pulse 3s ease-in-out infinite;
      }
      
      .grid-moving {
        animation: moveGrid 20s linear infinite;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background with animation */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse-custom ${
              isDarkMode ? 'bg-blue-500/10' : 'bg-blue-400/20'
            }`}
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Moving shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute animate-float ${
              isDarkMode ? 'bg-purple-500/10' : 'bg-purple-400/15'
            }`}
            style={{
              width: `${Math.random() * 60 + 10}px`,
              height: `${Math.random() * 60 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? '50%' : '10%',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className={`absolute inset-0 opacity-20 grid-moving ${
          isDarkMode ? 'bg-blue-500/5' : 'bg-gray-400/10'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? '#374151' : '#e5e7eb'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? '#374151' : '#e5e7eb'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}

export default AnimatedBackground
