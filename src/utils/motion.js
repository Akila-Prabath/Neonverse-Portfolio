// Motion configuration helpers

/**
 * Create a viewport-triggered animation config.
 */
export const viewportConfig = (once = true, amount = 0.3) => ({
  once,
  amount,
})

/**
 * Create a spring transition config.
 */
export const springTransition = (delay = 0, damping = 25, stiffness = 120) => ({
  type: "spring",
  damping,
  stiffness,
  delay,
})

/**
 * Create an ease transition config.
 */
export const easeTransition = (duration = 0.8, delay = 0) => ({
  duration,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94],
})

/**
 * Float animation for hovering elements.
 */
export const floatAnimation = (distance = 15, duration = 5) => ({
  y: [0, -distance, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
})

/**
 * Rotation animation for spinning elements.
 */
export const rotateAnimation = (duration = 18) => ({
  rotate: 360,
  transition: {
    duration,
    repeat: Infinity,
    ease: "linear",
  },
})

/**
 * Glow pulse animation.
 */
export const glowPulse = (duration = 3) => ({
  opacity: [0.6, 1, 0.6],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
})
