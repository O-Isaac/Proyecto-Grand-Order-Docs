import { useEffect, useMemo, useRef, useState } from "react";

export default function EmbedGithub({ repo, priority = false }) {
  const MAX_RETRIES = 2;
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef(null);

  const src = useMemo(
    () => `https://opengraph.githubassets.com/1/${repo}?r=${attempt}`,
    [repo, attempt]
  );

  useEffect(() => {
    if (failed) return;

    const img = imageRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src, failed]);

  const handleError = () => {
    if (attempt < MAX_RETRIES) {
      setLoaded(false);
      setAttempt((prev) => prev + 1);
      return;
    }
    setFailed(true);
  };

  return (
    <section className="relative block aspect-[16/8] w-full max-w-full overflow-hidden bg-neutral-900 rounded-t-2xl border-none">
      {!failed && !loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800" />
      )}

      {!failed ? (
        <img
          ref={imageRef}
          width={1200}
          height={600}
          className={`h-full w-full rounded-t-2xl object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          src={src}
          alt={`Preview del repositorio ${repo}`}
          loading={priority ? "eager" : "lazy"}
          fetchpriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={handleError}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-t-2xl bg-neutral-900 px-6 text-center text-sm text-neutral-200">
          No se pudo cargar la vista previa de GitHub. Puedes abrir el repositorio directamente.
        </div>
      )}
    </section>
  );
}
