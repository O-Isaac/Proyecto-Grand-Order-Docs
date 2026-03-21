export default function Caption({ children, href, caption }) {
  return (
    <a
      className="group block overflow-hidden rounded-2xl border border-zinc-300/70 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700/70 dark:bg-zinc-900/70 mt-6"
      href={href}
    >
      {children}

      <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-gradient-to-r from-zinc-900 to-zinc-800 px-4 py-3 transition-colors group-hover:from-zinc-800 group-hover:to-zinc-700 dark:border-zinc-700/60">
        <span className="text-sm font-semibold text-zinc-100">{caption}</span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-100 transition-transform group-hover:translate-x-0.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}
