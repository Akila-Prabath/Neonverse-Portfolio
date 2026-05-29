// Math & general utility helpers

/**
 * Clamp a value between min and max.
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

/**
 * Linear interpolation between two values.
 */
export const lerp = (start, end, t) => start + (end - start) * t

/**
 * Map a value from one range to another.
 */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

/**
 * Generate a random number between min and max.
 */
export const randomRange = (min, max) => Math.random() * (max - min) + min

/**
 * Debounce a function call.
 */
export const debounce = (fn, delay = 100) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Format section ID from name (e.g., "About Me" -> "about-me").
 */
export const toSectionId = (name) =>
  name.toLowerCase().replace(/\s+/g, "-")
