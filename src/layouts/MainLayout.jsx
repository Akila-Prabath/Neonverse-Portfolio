import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/common/Footer'

export default function MainLayout() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    let rafId
    function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    window.__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  return (
    <div className="layout-root">
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
