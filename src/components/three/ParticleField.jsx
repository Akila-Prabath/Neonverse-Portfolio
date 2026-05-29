import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import './ParticleField.css'

const PARTICLE_COUNT = 2200
const SPREAD = 18

/**
 * Inner component — lives inside <Canvas> so it has R3F context.
 * Animates a rotating, breathing particle cloud.
 */
function Particles() {
  const meshRef = useRef()
  const clock   = useRef(0)

  /* Build geometry once */
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors    = new Float32Array(PARTICLE_COUNT * 3)

    const accent  = new THREE.Color('#00ff88')
    const dimmed  = new THREE.Color('#00cc6a')
    const neutral = new THREE.Color('#1a2a35')

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = SPREAD * Math.cbrt(Math.random())

      positions[i3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = r * Math.cos(phi)

      // Colour: bright accent for ~15%, dim for ~25%, neutral rest
      const roll = Math.random()
      const col  = roll < 0.15 ? accent : roll < 0.40 ? dimmed : neutral
      colors[i3]     = col.r
      colors[i3 + 1] = col.g
      colors[i3 + 2] = col.b
    }

    return { positions, colors }
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    clock.current += delta

    // Slow rotation
    meshRef.current.rotation.y += delta * 0.04
    meshRef.current.rotation.x  = Math.sin(clock.current * 0.08) * 0.12

    // Breathing scale
    const s = 1 + Math.sin(clock.current * 0.25) * 0.018
    meshRef.current.scale.setScalar(s)
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  )
}

/**
 * ParticleField
 * Full-screen Three.js canvas used as Hero background.
 */
export default function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 70 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Particles />
      </Canvas>
    </div>
  )
}
