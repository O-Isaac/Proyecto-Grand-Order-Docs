export default function VideoPlayer({ src, title }) {
  return (
    <figure className="my-6 w-full">
      <video className="aspect-video w-full rounded-lg bg-black" controls preload="metadata">
        <source src={src} type="video/webm" />
        Tu navegador no soporta video HTML5.
      </video>

      {title ? (
        <figcaption className="pt-1 text-xs tracking-wide text-zinc-500/90 dark:text-zinc-400/80">
          {title}
        </figcaption>
      ) : null}
    </figure>
  );
}