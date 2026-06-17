import TemperatureBadge from './TemperatureBadge'

function formatTimestamp(iso) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export default function BeefCard({ beef }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-white/10 bg-zinc-900/70 p-5 shadow-lg shadow-black/40 transition-colors hover:border-red-500/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl tracking-wide text-white">
          {beef.parties[0]}{' '}
          <span className="text-red-500">vs</span> {beef.parties[1]}
        </h3>
        <TemperatureBadge temperature={beef.temperature} />
      </div>

      <p className="text-sm leading-relaxed text-zinc-400">
        {beef.originStory}
      </p>

      <p className="font-serif-dramatic text-lg italic text-zinc-200">
        "{beef.dissTrackTitle}"
      </p>

      <div className="rounded-lg border border-white/5 bg-black/30 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Resolution Recommendation
        </p>
        <p className="mt-1 text-sm text-zinc-300">{beef.resolution}</p>
      </div>

      <p className="text-xs text-zinc-600">
        Beef first detected: {formatTimestamp(beef.detectedAt)}
      </p>
    </article>
  )
}
