export default function RuleGrid({ items = [] }) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="group relative grid grid-cols-[auto_1fr] gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-zinc-200 dark:bg-zinc-800" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 bg-zinc-50 text-sm font-bold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="relative min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Norma de Comunidad
            </p>
            <h3 className="mt-1 text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
