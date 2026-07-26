import { useEffect, useRef } from 'react'

export default function AdsBlock() {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch (e) {
      console.error('AdSense error', e)
    }
  }, [])

  return (
    <div style={{
      margin: '12px 0',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      fontSize: '12px'
    }}>
      <p style={{ opacity: 0.6, marginBottom: 4 }}>Publicidad</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4362041328159109"
        data-ad-slot="2406080136"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}