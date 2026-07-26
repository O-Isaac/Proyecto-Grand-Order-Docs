import { useEffect, useRef, useState } from 'react'

const AD_CLIENT = 'ca-pub-4362041328159109'
const AD_SLOT = '2406080136'
const RESERVED_HEIGHT = 250 // ajusta al tamaño típico esperado de tu formato
const FILL_TIMEOUT_MS = 5000

export default function AdsBlock() {
  const containerRef = useRef(null)
  const insRef = useRef(null)
  const pushed = useRef(false)
  const [status, setStatus] = useState('idle') // idle | loading | filled | unfilled | error

  // 1. Lazy: solo activar cuando el bloque se acerca al viewport
  useEffect(() => {
    if (!AD_CLIENT || !AD_SLOT) {
      setStatus('error')
      return
    }
    if (!containerRef.current) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus('loading')
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(containerRef.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (status !== 'loading' || pushed.current || !insRef.current) return

    const observer = new MutationObserver(() => {
      const adStatus = insRef.current?.getAttribute('data-ad-status')
      if (adStatus === 'filled') setStatus('filled')
      else if (adStatus === 'unfilled') setStatus('unfilled')
    })
    observer.observe(insRef.current, { attributes: true, attributeFilter: ['data-ad-status'] })

    // 3. Timeout de seguridad: si nunca llega a resolver (adblocker, red, etc.)
    const timeout = setTimeout(() => {
      setStatus(prev => (prev === 'loading' ? 'error' : prev))
    }, FILL_TIMEOUT_MS)

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch (e) {
      console.error('AdSense error', e)
      setStatus('error')
    }

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [status])

  if (status === 'unfilled' || status === 'error') return null

  return (
    <div
      ref={containerRef}
      style={{
        margin: '12px 0',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        fontSize: '12px',
        minHeight: status === 'filled' ? undefined : RESERVED_HEIGHT,
        maxHeight: 300,
        visibility: status === 'filled' ? 'visible' : 'hidden',
      }}
    >
      <p style={{ opacity: 0.6, marginBottom: 4 }}>Publicidad</p>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}