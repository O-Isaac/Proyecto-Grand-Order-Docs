import Link from "next/link";
import Head from "next/head";

export default function Hero() {
  return (
    <section className="hero-video-shell relative -mt-16 h-screen overflow-hidden bg-zinc-100 dark:bg-black">
      <Head>
        <link rel="preload" as="video" href="/themes/musashi.webm" type="video/webm" />
      </Head>

      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        playsInline
        muted
        loop
        preload="metadata"
        src="/themes/musashi.webm"
      />
      <div className="hero-video-overlay absolute inset-0" />

      <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-12 md:pb-20">
        <div className="max-w-3xl">
          <span className="hero-cta-badge inline-flex items-center rounded-full border border-white/60 bg-black/45 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Fate Grand Order Docs
          </span>

          <h1 className="hero-cta-title mt-4 text-3xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Juega Fate Grand Order en espanol
          </h1>

          <p className="hero-cta-copy mt-3 max-w-2xl text-sm text-white/95 sm:text-base">
            Instala, actualiza y configura el parche para disfrutar la historia de FGO completamente en espanol.
          </p>

          <Link
            href="/docs"
            className="hero-cta-button mt-6 inline-flex items-center gap-2 rounded-md border border-white/70 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-100"
          >
            Ir a la documentacion
          </Link>
        </div>
      </div>
    </section>
  );
}
