import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import './Contact.css'

const INIT = { name: '', email: '', subject: '', message: '' }

// ─── Replace this with your Formspree form ID ───────────────
// 1. Go to https://formspree.io → sign up free
// 2. New Form → copy the ID from your endpoint URL
// 3. Paste it here, e.g. 'xpwzgkrb'
const FORMSPREE_ID = 'xjgnvqnl'
// ────────────────────────────────────────────────────────────

const YOUR_EMAIL = 'wmaprabhath@gmail.com'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Akila-Prabath',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akila-prabath-43174b327',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: `mailto:${YOUR_EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form,    setForm]    = useState(INIT)
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // idle | sending | sent | error | no-formspree
  const [focused, setFocused] = useState('')

  /* --- Validation --- */
  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((ev) => ({ ...ev, [name]: '' }))
  }

  /* --- Submit --- */
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    // Guard: Formspree ID not yet configured
    if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORM_ID') {
      setStatus('no-formspree')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm(INIT) }
      else        { setStatus('error') }
    } catch {
      setStatus('error')
    }
  }

  const FADE_UP = {
    hidden:  { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 },
    }),
  }

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <SectionHeading
          number="05"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
          align="center"
        />

        <div className="contact__grid">

          {/* Left — info panel */}
          <motion.div
            className="contact__info"
            variants={FADE_UP} initial="hidden"
            animate={inView ? 'visible' : 'hidden'} custom={0}
          >
            <div className="contact__info-card">
              <h3 className="contact__info-title">Let's work together</h3>
              <p className="contact__info-body">
                I'm currently open to internship and graduate opportunities,
                freelance projects, and interesting collaborations. Whether
                you have a question or just want to connect — drop me a message!
              </p>

              <div className="contact__details">
                <div className="contact__detail">
                  <span className="contact__detail-label">Based in</span>
                  <span className="contact__detail-value">Sri Lanka 🇱🇰</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-label">Available for</span>
                  <span className="contact__detail-value">Internships · Freelance · Full-time</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-label">Response time</span>
                  <span className="contact__detail-value">Within 24 hours</span>
                </div>
              </div>

              {/* Social links */}
              <div className="contact__socials">
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact__social"
                    aria-label={label}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="contact__form-wrap"
            variants={FADE_UP} initial="hidden"
            animate={inView ? 'visible' : 'hidden'} custom={0.15}
          >
            {status === 'sent' ? (
              <div className="contact__success">
                <div className="contact__success-icon" aria-hidden="true">✓</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn btn--ghost" onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                {/* Row: name + email */}
                <div className="contact__row">
                  <div className={`contact__field${errors.name ? ' contact__field--error' : ''}${focused === 'name' ? ' contact__field--focused' : ''}`}>
                    <label htmlFor="name" className="contact__label">Name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Akila Prabath"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      className="contact__input"
                      autoComplete="name"
                    />
                    {errors.name && <span className="contact__error" role="alert">{errors.name}</span>}
                  </div>

                  <div className={`contact__field${errors.email ? ' contact__field--error' : ''}${focused === 'email' ? ' contact__field--focused' : ''}`}>
                    <label htmlFor="email" className="contact__label">Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      className="contact__input"
                      autoComplete="email"
                    />
                    {errors.email && <span className="contact__error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className={`contact__field${errors.subject ? ' contact__field--error' : ''}${focused === 'subject' ? ' contact__field--focused' : ''}`}>
                  <label htmlFor="subject" className="contact__label">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="Internship opportunity / Project collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                    className="contact__input"
                  />
                  {errors.subject && <span className="contact__error" role="alert">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className={`contact__field${errors.message ? ' contact__field--error' : ''}${focused === 'message' ? ' contact__field--focused' : ''}`}>
                  <label htmlFor="message" className="contact__label">
                    Message
                    <span className="contact__char-count">{form.message.length} / 1000</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    maxLength={1000}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    className="contact__input contact__textarea"
                  />
                  {errors.message && <span className="contact__error" role="alert">{errors.message}</span>}
                </div>

                {/* Error states */}
                {status === 'no-formspree' && (
                  <div className="contact__submit-error" role="alert">
                    <strong>Form not configured yet.</strong> To enable email sending:
                    <ol className="contact__setup-steps">
                      <li>Go to <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">formspree.io</a> and create a free account</li>
                      <li>Create a new form and copy your Form ID</li>
                      <li>Replace <code>YOUR_FORM_ID</code> at the top of <code>Contact.jsx</code></li>
                    </ol>
                    In the meantime, email me directly at{' '}
                    <a href={`mailto:${YOUR_EMAIL}`} className="contact__error-link">
                      {YOUR_EMAIL}
                    </a>
                  </div>
                )}

                {status === 'error' && (
                  <p className="contact__submit-error" role="alert">
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${YOUR_EMAIL}`} className="contact__error-link">
                      {YOUR_EMAIL}
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}