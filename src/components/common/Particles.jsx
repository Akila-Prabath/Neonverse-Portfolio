import { useMemo } from "react"

const Particles = ({ count = 40 }) => {
  // Memoize particle data to prevent re-randomization on re-render
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: 4 + Math.random() * 8,
      delay: Math.random() * 5,
      opacity: 0.2 + Math.random() * 0.5,
      // Mix of purple, cyan, and white particles
      color:
        i % 5 === 0
          ? "bg-purple-400"
          : i % 3 === 0
          ? "bg-cyan-400"
          : "bg-white",
    }))
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full ${p.color} animate-particle`}
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Particles