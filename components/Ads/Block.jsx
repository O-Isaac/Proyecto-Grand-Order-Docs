import { useEffect, useRef } from 'react'

const AD_CLIENT = 'ca-pub-4362041328159109'
const AD_SLOT = '2406080136'

// Tamaño fijo pensado para encajar en la sidebar angosta.
// Ajusta si tu sidebar mide distinto (mide el ancho real en DevTools).
const AD_WIDTH = 250
const AD_HEIGHT = 250

export default function AdsBlock() {
  const pushedRef = useRef(false)

  useEffect(() => {
    if (pushedRef.current) return
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
      pushedRef.current = true
    } catch (e) {
      console.error('[AdsBlock] Error loading ads:', e)
    }
  }, [])

  return (
    <div
      style={{
        margin: '12px 0',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        fontSize: '12px',
        width: AD_WIDTH + 24, // + padding
        maxWidth: '100%',
        overflow: 'hidden', // evita que un formato inesperado rompa el layout
        boxSizing: 'border-box',
      }}
    >
      <p style={{ opacity: 0.6, marginBottom: 4 }}>Publicidad</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: AD_WIDTH, height: AD_HEIGHT }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
      />
    </div>
  )
}