export default function AboutHero({ title, subtitle, tags = [] }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-cover bg-right sm:w-[58%] md:w-[54%]"
        style={{ backgroundImage: "url('/images/og-bg.png')" }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-gradient-to-l from-transparent via-transparent to-white sm:w-[58%] md:w-[54%] dark:to-zinc-950" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/86" />

      <div className="relative p-6 md:max-w-[58%] md:p-8 lg:p-10">
        <p className="inline-flex items-center rounded-full border border-zinc-300 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300">
          Chaldea Project Brief
        </p>

        <h1 className="mt-3 text-3xl font-black leading-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300 md:text-base">
          {subtitle}
        </p>

        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
