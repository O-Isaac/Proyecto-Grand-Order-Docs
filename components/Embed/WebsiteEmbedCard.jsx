import { useEffect, useState } from "react";
import { TbWorldWww } from "react-icons/tb";

export default function WebsiteEmbedCard({ href, title, description }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadMeta = async () => {
      try {
        const encoded = encodeURIComponent(href);
        const response = await fetch(`/api/website-meta?url=${encoded}`);
        if (!response.ok) return;
        const data = await response.json();
        if (isMounted && data?.image) {
          setPreview(data.image);
        }
      } catch {
        // Fallback image is handled by default.
      }
    };

    setPreview(null);
    loadMeta();

    return () => {
      isMounted = false;
    };
  }, [href]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative my-4 block overflow-hidden rounded-2xl border border-zinc-300/70 bg-white/90 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900/90 dark:hover:border-zinc-500"
    >
      <TbWorldWww className="pointer-events-none absolute right-4 top-1/2 z-0 h-40 w-40 -translate-y-1/2 text-zinc-500/10 dark:text-zinc-300/10" />

      {preview ? (
        <img
          src={preview}
          alt={`Preview de ${title}`}
          className="relative z-10 aspect-[16/9] w-full object-cover"
          loading="lazy"
          onError={() => setPreview(null)}
        />
      ) : null}
      <div className="relative z-10 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Sitio oficial
        </p>
        <h3 className="mt-1 text-base font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
      </div>
    </a>
  );
}