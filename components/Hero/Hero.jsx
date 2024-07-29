import Link from "next/link"

export default function Hero () {
  return (
    <section className="h-screen">
      <figure className="max-h-svh h-svh dark:bg-hero-dark bg-hero-light bg-cover relative parrallax-up-animation overflow-hidden">
            <Link href="/special/traum">
                <picture>
                  <img id='chr' fetchPriority='high' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full pt-12 object-cover hover:scale-105 transition-all animate-blurred-fade-in dark:content-chr-dark" loading='eager' src="/themes/light/chr.webp" alt="Servant"/>
                </picture>
            </Link>
      </figure>
    </section>
  )
}
