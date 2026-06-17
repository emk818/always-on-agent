import { useEffect } from 'react'
import { STATUS_META } from '../data/characterData'

export default function CharacterProfileCard({ name, profile, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!profile) return null

  const status = STATUS_META[profile.status]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border-2 border-red-600/60 bg-gradient-to-b from-zinc-900 to-black p-6 shadow-2xl shadow-red-900/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 transition-colors hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-red-600/60 bg-zinc-800 text-4xl">
            🥊
          </div>
          <h2 className="font-display text-3xl tracking-wide text-white">{name}</h2>
          <p className={`text-xs font-semibold uppercase tracking-widest ${status.color}`}>
            {status.emoji} {profile.status}
          </p>
        </div>

        <dl className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
          <Row label="Beef Record" value={profile.record} />
          <Row label="Signature Move" value={profile.signatureMove} />
          <Row label="Known Allies" value={profile.knownAllies} />
          <Row label="Fun Fact" value={profile.funFact} />
        </dl>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{label}</dt>
      <dd className="text-zinc-200">{value}</dd>
    </div>
  )
}
