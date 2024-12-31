export default function Caption({ children, href, caption }) {
  return (
    <a className="group" href={href}>
      {children}
      <span className="block p-4 bg-gray-200 group-hover:bg-gray-300 dark:bg-neutral-800 dark:group-hover:bg-neutral-800/70 transition-colors w-auto rounded-b-2xl">
        {caption}
      </span>
    </a>
  );
}
