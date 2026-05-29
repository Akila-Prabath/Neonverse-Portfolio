// Framer Motion fade animation variants

export const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      delay,
      duration: 0.8,
    },
  },
})

export const fadeInUp = (delay = 0) => fadeIn("up", delay)
export const fadeInDown = (delay = 0) => fadeIn("down", delay)
export const fadeInLeft = (delay = 0) => fadeIn("left", delay)
export const fadeInRight = (delay = 0) => fadeIn("right", delay)

export const fadeOnly = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
})
