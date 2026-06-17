import { tickerHeadlines } from '../data/tickerHeadlines'

export default function NewsTicker() {
  // Render the list twice back-to-back so the marquee loops seamlessly.
  const items = [...tickerHeadlines, ...tickerHeadlines]

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center border-t border-red-900/50 bg-black/90 backdrop-blur">
      <span className="font-display shrink-0 bg-red-600 px-3 py-2 text-sm tracking-widest text-white">
        BEEF WIRE
      </span>
      <div className="relative flex-1 overflow-hidden py-2">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {items.map((headline, i) => (
            <span key={i} className="text-sm text-zinc-300">
              {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
