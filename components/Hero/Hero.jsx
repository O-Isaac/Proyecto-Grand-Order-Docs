export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-t from-gray-400 to-gray-200 -mt-16">
      <div className="bg-gray-200 absolute left-0 h-1/2 bottom-0 w-full gradient-mask-t-20"></div>
      <video
        className="h-full w-full object-cover "
        autoPlay
        playsInline
        muted
        loop
        fetchpriority="high"
        src="/themes/musashi.webm"
      ></video>

      {/* <figure className="max-h-svh h-svh dark:bg-hero-dark bg-hero-light bg-cover relative parrallax-up-animation overflow-hidden">
        <Link href="/special/nahuil">
          <img
            id="chr"
            fetchpriority="high"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover hover:scale-105 transition-all animate-blurred-fade-in dark:content-chr-dark"
            loading="eager"
            src="/themes/light/chr.webp"
            alt="Servant"
          />
        </Link>
      </figure> */}
    </section>
  );
}
