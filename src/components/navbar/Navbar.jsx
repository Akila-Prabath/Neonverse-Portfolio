import { useState, useEffect, useCallback } from 'react'
import { navLinks } from '../../constants/navLinks'
import './Navbar.css'

/**
 * Navbar
 * - Transparent on top, solid on scroll
 * - Smooth-scroll to section on link click (works with Lenis)
 * - Hamburger menu for mobile
 * - Active section highlight via IntersectionObserver
 */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeId,   setActiveId]   = useState('')

  /* --- Scroll state for navbar bg --- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* --- Active section via IntersectionObserver --- */
  useEffect(() => {
    const targets = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* --- Close menu on resize to desktop --- */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* --- Smooth scroll via Lenis (falls back to native) --- */
  const scrollTo = useCallback((id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <button
          className="navbar__logo"
          onClick={() => window.__lenis?.scrollTo(0) ?? window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <span className="navbar__logo-bracket">&lt;</span>
          Akila
          <span className="navbar__logo-accent">.</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </button>

        {/* Desktop links */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              className={`navbar__link${activeId === id ? ' navbar__link--active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
          <a
            href="/akila_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume"
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              className={`navbar__mobile-link${activeId === id ? ' navbar__mobile-link--active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              <span className="navbar__mobile-num">0{navLinks.findIndex(l => l.id === id) + 1}</span>
              {label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-resume"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
