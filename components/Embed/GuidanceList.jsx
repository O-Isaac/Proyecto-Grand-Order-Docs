export default function GuidanceList({ items = [] }) {
  return (
    <ul className="my-4 overflow-hidden rounded-xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/30">
      {items.map((item, index) => (
        <li
          key={`${index}-${item.slice(0, 24)}`}
          className="flex items-start gap-3 border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700 last:border-b-0 dark:border-zinc-800 dark:text-zinc-300"
        >
          <span className="mt-[0.45rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
