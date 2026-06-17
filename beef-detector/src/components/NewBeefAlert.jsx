export default function NewBeefAlert({ beef, onDismiss }) {
  if (!beef) return null

  return (
    <div
      key={beef.id}
      className="animate-banner fixed left-1/2 top-4 z-50 w-[min(90vw,640px)] -translate-x-1/2 rounded-lg border border-red-500/60 bg-red-950/95 px-5 py-3 shadow-2xl shadow-red-900/50 backdrop-blur"
      onAnimationEnd={onDismiss}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">🚨</span>
        <div className="flex-1">
          <p className="font-display text-lg tracking-wide text-red-300">
            NEW BEEF ALERT
          </p>
          <p className="text-sm text-red-100/90">
            {beef.parties[0]} vs {beef.parties[1]} — beef detected just now.
          </p>
        </div>
        <span className="text-2xl">🚨</span>
      </div>
    </div>
  )
}
