import { useEffect, useState } from 'react'
import { beefData, beefHistory } from '../data/beefData'
import BeefCard from './BeefCard'
import NewBeefAlert from './NewBeefAlert'
import BeefHistorySidebar from './BeefHistorySidebar'
import NewsTicker from './NewsTicker'

export default function BeefDashboard() {
  const [beefs] = useState(beefData)
  const [history] = useState(beefHistory)
  const [activeAlert, setActiveAlert] = useState(null)

  // Demo trigger: simulate a live "new beef" alert a few seconds after load.
  // Person 5: replace with a real push/poll event from the API.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveAlert(beefs[beefs.length - 1])
    }, 2500)
    return () => clearTimeout(timer)
  }, [beefs])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100">
      <NewBeefAlert beef={activeAlert} onDismiss={() => setActiveAlert(null)} />

      <header className="border-b border-white/10 bg-black/40 px-6 py-8 text-center">
        <h1 className="font-display animate-flicker text-5xl tracking-widest text-red-500 sm:text-6xl">
          BEEF DETECTOR 🥩
        </h1>
        <p className="mt-2 font-serif-dramatic italic text-zinc-400">
          Monitoring workplace harmony since 2024
        </p>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 pb-16 lg:flex-row">
        <section className="flex-1">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {beefs.map((beef) => (
              <BeefCard key={beef.id} beef={beef} />
            ))}
          </div>
        </section>

        <BeefHistorySidebar history={history} />
      </main>

      <NewsTicker />
    </div>
  )
}
