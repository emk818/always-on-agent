function formatTimestamp(iso) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: 'short',
    timeStyle: 'short',
  })
}

export default function BeefHistorySidebar({ history }) {
  return (
    <aside className="w-full shrink-0 rounded-xl border border-white/10 bg-zinc-900/70 p-5 lg:w-72">
      <h2 className="font-display text-xl tracking-wide text-white">
        Beef History Timeline
      </h2>
      <ol className="mt-4 space-y-4 border-l border-white/10 pl-4">
        {history.map((entry) => (
          <li key={entry.id} className="relative">
            <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-red-500" />
            <p className="text-xs text-zinc-500">
              {formatTimestamp(entry.timestamp)}
            </p>
            <p className="text-sm text-zinc-300">{entry.label}</p>
          </li>
        ))}
      </ol>
    </aside>
  )
}
