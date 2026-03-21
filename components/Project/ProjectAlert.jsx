export default function ProjectAlert({ title, description }) {
  return (
    <aside
      role="status"
      className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white/90 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="h-1.5 bg-gradient-to-r from-amber-500/90 via-orange-400/80 to-transparent dark:from-amber-400/80 dark:via-orange-300/70" />

      <div className="p-4 md:p-5">
        <div className="flex items-start gap-3">
          <span className="relative mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-100 via-orange-50 to-white text-amber-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-amber-500/30 dark:bg-gradient-to-br dark:from-amber-500/20 dark:via-orange-500/10 dark:to-zinc-900 dark:text-amber-200">
            <span className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-br from-amber-400/30 via-transparent to-transparent blur-[1px] dark:from-amber-300/20" />
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
              <path
                d="M12 3L3 7v6c0 5 3.5 8 9 8s9-3 9-8V7l-9-4z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 8v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="16.5" r="1" fill="currentColor" />
            </svg>
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              <span className="rounded-md border border-amber-300/70 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200">
                Aviso
              </span>
            </div>

            <div className="mt-2 rounded-lg border border-zinc-200/80 bg-gradient-to-r from-zinc-50 via-white to-amber-50/60 px-3 py-2.5 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-gradient-to-r dark:from-zinc-900/90 dark:via-zinc-900/70 dark:to-amber-950/20 dark:text-zinc-300">
              {description}
            </div>

          </div>
        </div>
      </div>
    </aside>
  );
}
