import { TEMPERATURE, TEMPERATURE_META } from '../data/beefData'

const STYLES = {
  [TEMPERATURE.LUKEWARM]:
    'bg-yellow-400/15 text-yellow-300 border-yellow-400/40',
  [TEMPERATURE.SIMMERING]:
    'bg-orange-500/15 text-orange-400 border-orange-500/40',
  [TEMPERATURE.DRAKE_KENDRICK]:
    'bg-red-600/15 text-red-400 border-red-500/50 animate-pulse-red',
}

export default function TemperatureBadge({ temperature }) {
  const meta = TEMPERATURE_META[temperature]
  const style = STYLES[temperature]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${style}`}
    >
      <span>{meta.emoji}</span>
      <span>{meta.label}</span>
    </span>
  )
}
