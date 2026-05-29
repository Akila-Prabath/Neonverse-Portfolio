import { useState, useEffect, useRef } from "react"

/**
 * Track scroll position and direction.
 * Returns { scrollY, direction, isScrolled }
 */
const useScroll = (threshold = 50) => {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState("up")
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setDirection(currentScrollY > lastScrollY.current ? "down" : "up")
      setIsScrolled(currentScrollY > threshold)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return { scrollY, direction, isScrolled }
}

export default useScroll
