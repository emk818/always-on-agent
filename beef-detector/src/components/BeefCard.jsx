import TemperatureBadge from './TemperatureBadge'

function formatTimestamp(iso) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export default function BeefCard({ beef, onSelectCharacter }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-white/10 bg-zinc-900/70 p-5 shadow-lg shadow-black/40 transition-colors hover:border-red-500/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl tracking-wide text-white">
          <button
            onClick={() => onSelectCharacter(beef.parties[0])}
            className="underline-offset-4 transition-colors hover:text-red-400 hover:underline"
          >
            {beef.parties[0]}
          </button>{' '}
          <span className="text-red-500">vs</span>{' '}
          <button
            onClick={() => onSelectCharacter(beef.parties[1])}
            className="underline-offset-4 transition-colors hover:text-red-400 hover:underline"
          >
            {beef.parties[1]}
          </button>
        </h3>
        <TemperatureBadge temperature={beef.temperature} />
      </div>

      <p className="text-sm leading-relaxed text-zinc-400">
        {beef.originStory}
      </p>

      <div className="rounded-lg border border-white/5 bg-black/30 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Predicted Diss Track
        </p>
        <a
          href={beef.dissTrack.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-1 flex items-center gap-2 font-serif-dramatic text-lg italic text-zinc-200 transition-colors hover:text-red-400"
        >
          <span aria-hidden="true">▶️</span>
          <span>
            "{beef.dissTrack.title}" — {beef.dissTrack.artist}
          </span>
        </a>
        <p className="mt-2 text-sm text-zinc-400">{beef.dissTrack.relevance}</p>
      </div>

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
