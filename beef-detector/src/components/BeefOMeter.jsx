import { useEffect, useState } from 'react'
import { TEMPERATURE, TEMPERATURE_META, beefData } from '../data/beefData'

function worstTemperature() {
  const order = [TEMPERATURE.DRAKE_KENDRICK, TEMPERATURE.SIMMERING, TEMPERATURE.LUKEWARM]
  const present = new Set(beefData.map((beef) => beef.temperature))
  return order.find((t) => present.has(t)) ?? TEMPERATURE.LUKEWARM
}

function useSlowlyTicking(initial, { minDelayMs, maxDelayMs, step = 1 }) {
  const [value, setValue] = useState(initial)

  useEffect(() => {
    let timeoutId

    const scheduleNext = () => {
      const delay = minDelayMs + Math.random() * (maxDelayMs - minDelayMs)
      timeoutId = setTimeout(() => {
        setValue((v) => v + step)
        scheduleNext()
      }, delay)
    }

    scheduleNext()
    return () => clearTimeout(timeoutId)
  }, [minDelayMs, maxDelayMs, step])

  return value
}

export default function BeefOMeter() {
  const activeBeefs = useSlowlyTicking(beefData.length, { minDelayMs: 8000, maxDelayMs: 18000 })
  const suspiciousEmojis = useSlowlyTicking(14, { minDelayMs: 3000, maxDelayMs: 9000 })
  const orgTemp = TEMPERATURE_META[worstTemperature()]

  return (
    <div className="border-b border-white/10 bg-black/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-3 sm:justify-between">
        <Stat icon="🥩" label="Active Beefs" value={activeBeefs} />
        <Stat
          icon={orgTemp.emoji}
          label="Org Temperature"
          value={orgTemp.label.toUpperCase()}
        />
        <Stat icon="😬" label="Suspicious Emojis Today" value={suspiciousEmojis} />
      </div>
    </div>
  )
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-lg">{icon}</span>
      <span className="text-zinc-500">{label}:</span>
      <span className="font-mono font-semibold text-zinc-100">{value}</span>
    </div>
  )
}
