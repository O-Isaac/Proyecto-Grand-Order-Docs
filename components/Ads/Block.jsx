import { useEffect, useRef, useState } from 'react'

const AD_CLIENT = 'ca-pub-4362041328159109'
const AD_SLOT = '2406080136'

export default function AdsBlock() {
   useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <div
      style={{
        margin: '12px 0',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        fontSize: '12px',
        minHeight: 300,
        maxHeight: 300,
      }}
    >
      <p style={{ opacity: 0.6, marginBottom: 4 }}>Publicidad</p>
      <ins
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