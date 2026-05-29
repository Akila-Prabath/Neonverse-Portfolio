// Framer Motion slide animation variants

export const slideInLeft = (delay = 0, duration = 0.8) => ({
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export const slideInRight = (delay = 0, duration = 0.8) => ({
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export const slideInUp = (delay = 0, duration = 0.8) => ({
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export const slideInDown = (delay = 0, duration = 0.8) => ({
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export const scaleIn = (delay = 0) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay,
    },
  },
})
