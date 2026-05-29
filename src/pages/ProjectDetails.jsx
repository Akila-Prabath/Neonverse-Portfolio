import { useParams } from 'react-router-dom'

/**
 * ProjectDetails Page
 * Full project case-study page.
 * Content & layout built in Step 4.
 */
export default function ProjectDetails() {
  const { id } = useParams()

  return (
    <div style={{ padding: '8rem 2rem', textAlign: 'center', color: '#00ff88' }}>
      <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', opacity: 0.5 }}>
        project/{id}
      </p>
      <h1 style={{ fontFamily: 'sans-serif', marginTop: '1rem' }}>
        Coming in Step 4 →
      </h1>
    </div>
  )
}
