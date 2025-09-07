import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import PropTypes from 'prop-types'

const ThreeJSBackground = ({ isDarkMode }) => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 10

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    rendererRef.current = renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0) // Transparent background
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Create geometric objects
    const objects = []

    // Rotating cubes
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      const material = new THREE.MeshStandardMaterial({
        color: isDarkMode ? 0x60a5fa : 0x3b82f6,
        transparent: true,
        opacity: 0.7,
        wireframe: Math.random() > 0.5
      })
      const cube = new THREE.Mesh(geometry, material)
      
      cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      )
      
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      scene.add(cube)
      objects.push({ 
        mesh: cube, 
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      })
    }

    // Floating spheres
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16)
      const material = new THREE.MeshStandardMaterial({
        color: isDarkMode ? 0xa78bfa : 0x8b5cf6,
        transparent: true,
        opacity: 0.6,
        wireframe: true
      })
      const sphere = new THREE.Mesh(geometry, material)
      
      sphere.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15
      )
      
      scene.add(sphere)
      objects.push({ 
        mesh: sphere, 
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatAmount: Math.random() * 2 + 1
      })
    }

    // Torus knot
    const torusGeometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0x34d399 : 0x10b981,
      transparent: true,
      opacity: 0.5,
      wireframe: true
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    torus.position.set(0, 0, -5)
    scene.add(torus)
    objects.push({ 
      mesh: torus, 
      rotationSpeed: { x: 0.005, y: 0.01, z: 0.003 },
      scale: true
    })

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: isDarkMode ? 0x60a5fa : 0x3b82f6,
      transparent: true,
      opacity: 0.8
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    objects.push({ 
      mesh: particlesMesh, 
      rotationSpeed: { x: 0.001, y: 0.002, z: 0.001 }
    })

    // Animation loop
    const clock = new THREE.Clock()
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      
      objects.forEach(obj => {
        const { mesh, rotationSpeed, floatSpeed, floatAmount, scale } = obj
        
        // Rotation
        mesh.rotation.x += rotationSpeed.x
        mesh.rotation.y += rotationSpeed.y
        mesh.rotation.z += rotationSpeed.z
        
        // Floating motion
        if (floatSpeed && floatAmount) {
          mesh.position.y += Math.sin(elapsedTime * floatSpeed) * 0.01
        }
        
        // Scaling animation
        if (scale) {
          const scaleValue = 1 + Math.sin(elapsedTime * 0.5) * 0.2
          mesh.scale.set(scaleValue, scaleValue, scaleValue)
        }
      })
      
      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [isDarkMode])

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -15,
        pointerEvents: 'none',
        opacity: 0.7
      }}
    />
  )
}
ThreeJSBackground.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
}

export default ThreeJSBackground
