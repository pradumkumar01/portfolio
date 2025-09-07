import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import PropTypes from 'prop-types'

const InteractiveThreeJS = ({ isDarkMode }) => {
  const mountRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!mountRef.current) return

    const mount = mountRef.current

    // Scene, camera, renderer setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1, 100)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    // Create interactive objects
    const objects = []

    // Floating DNA helix
    const helixGroup = new THREE.Group()
    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 8, 8)
      const material = new THREE.MeshStandardMaterial({
        color: isDarkMode ? 0x60a5fa : 0x3b82f6,
        transparent: true,
        opacity: 0.8
      })
      const sphere = new THREE.Mesh(geometry, material)
      
      const angle = (i / 50) * Math.PI * 8
      sphere.position.set(
        Math.cos(angle) * 2,
        (i - 25) * 0.2,
        Math.sin(angle) * 2
      )
      
      helixGroup.add(sphere)
    }
    scene.add(helixGroup)
    objects.push({ mesh: helixGroup, type: 'helix' })

    // Morphing geometry
    const morphGeometry = new THREE.OctahedronGeometry(1, 2)
    const morphMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0xa78bfa : 0x8b5cf6,
      transparent: true,
      opacity: 0.7,
      wireframe: true
    })
    const morphMesh = new THREE.Mesh(morphGeometry, morphMaterial)
    morphMesh.position.set(-5, 0, -3)
    scene.add(morphMesh)
    objects.push({ mesh: morphMesh, type: 'morph' })

    // Particle constellation
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 1000
    const starPositions = new Float32Array(starCount * 3)
    const starColors = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 40
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 40
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 40

      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.5)
      starColors[i * 3] = color.r
      starColors[i * 3 + 1] = color.g
      starColors[i * 3 + 2] = color.b
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

    const starMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)
    objects.push({ mesh: stars, type: 'stars' })

    // Floating rings
    for (let i = 0; i < 5; i++) {
      const ringGeometry = new THREE.RingGeometry(0.5 + i * 0.3, 0.7 + i * 0.3, 16)
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: isDarkMode ? 0x34d399 : 0x10b981,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      ring.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      scene.add(ring)
      objects.push({ 
        mesh: ring, 
        type: 'ring',
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      })
    }

    camera.position.z = 15

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const clock = new THREE.Clock()
    let animationId

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      const mouse = mouseRef.current

      objects.forEach(({ mesh, type, rotationSpeed }) => {
        switch (type) {
          case 'helix':
            mesh.rotation.y = elapsedTime * 0.5
            mesh.position.x = Math.sin(elapsedTime * 0.3) * 2
            // React to mouse
            mesh.rotation.x += mouse.y * 0.01
            mesh.rotation.z += mouse.x * 0.01
            break

          case 'morph': {
            mesh.rotation.x = elapsedTime * 0.7
            mesh.rotation.y = elapsedTime * 0.5
            const scale = 1 + Math.sin(elapsedTime * 2) * 0.3
            mesh.scale.set(scale, scale, scale)
            // React to mouse
            mesh.position.x = -5 + mouse.x * 2
            mesh.position.y = mouse.y * 2
            break
          }

          case 'stars':
            mesh.rotation.x += 0.001
            mesh.rotation.y += 0.002
            // React to mouse
            mesh.rotation.x += mouse.y * 0.005
            mesh.rotation.y += mouse.x * 0.005
            break

          case 'ring':
            if (rotationSpeed) {
              mesh.rotation.x += rotationSpeed.x
              mesh.rotation.y += rotationSpeed.y
              mesh.rotation.z += rotationSpeed.z
            }
            // Float up and down
            mesh.position.y += Math.sin(elapsedTime + mesh.position.x) * 0.01
            break

          default:
            break
        }
      })

      // Camera slight movement based on mouse
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
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
        zIndex: -20,
        pointerEvents: 'none',
        opacity: 0.8
      }}
    />
  )
}
InteractiveThreeJS.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
}

export default InteractiveThreeJS
