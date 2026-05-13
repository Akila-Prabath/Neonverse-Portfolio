const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}

    </div>
  )
}

export default Particles