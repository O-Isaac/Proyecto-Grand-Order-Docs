import { FaGithub } from "react-icons/fa";

export default function GithubDirectDownload({ href, filename, helperText }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative my-4 block overflow-hidden rounded-2xl border border-zinc-300/70 bg-white/90 p-4 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 dark:border-zinc-700 dark:bg-zinc-900/90 dark:hover:border-zinc-500 md:p-5"
      aria-label={`Descargar ${filename} desde GitHub`}
    >
      <FaGithub className="pointer-events-none absolute -bottom-6 -right-6 z-0 h-40 w-40 text-zinc-500/10 dark:text-zinc-300/10" />

      <div className="relative z-10 mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
          Descarga directa
        </p>
        <span className="rounded-full border border-zinc-300 bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          GitHub Release
        </span>
      </div>

      <h3 className="relative z-10 mt-1 break-all rounded-lg bg-zinc-900/95 px-3 py-2 font-mono text-sm font-bold text-zinc-100 dark:bg-zinc-950">
        {filename}
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {helperText}
      </p>

      <div className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-100/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800 dark:border-cyan-500/40 dark:bg-cyan-900/30 dark:text-cyan-200">
        <span>Descarga</span>
        <span aria-hidden="true">↗</span>
      </div>
    </a>
  );
}