import { useEffect, useRef, useState } from 'react'

const VIDEO_ID = 'H58vbez_m4E' // Kendrick Lamar — Not Like Us
const CLIP_START = 65 // seconds — just before the "they not like us" hook
const CLIP_END = 78 // seconds — ~13s clip
const FADE_AT_MS = 10000
const HANDOFF_AT_MS = 11500

function loadYouTubeApi() {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT)
      return
    }
    const previousCallback = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.()
      resolve(window.YT)
    }
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
    }
  })
}

export default function BeefIntro({ onEnter }) {
  const [started, setStarted] = useState(false)
  const [fading, setFading] = useState(false)
  const playerRef = useRef(null)
  const timersRef = useRef([])

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout)
      playerRef.current?.destroy?.()
    }
  }, [])

  const handleEnter = async () => {
    setStarted(true)

    const YT = await loadYouTubeApi()
    playerRef.current = new YT.Player('yt-player', {
      videoId: VIDEO_ID,
      playerVars: { start: CLIP_START, autoplay: 1 },
      events: {
        onReady: (e) => e.target.playVideo(),
      },
    })

    const clipWatcher = setInterval(() => {
      const player = playerRef.current
      if (player?.getCurrentTime && player.getCurrentTime() >= CLIP_END) {
        player.stopVideo()
        clearInterval(clipWatcher)
      }
    }, 500)

    const fadeTimer = setTimeout(() => setFading(true), FADE_AT_MS)
    const handoffTimer = setTimeout(() => onEnter(), HANDOFF_AT_MS)

    timersRef.current.push(fadeTimer, handoffTimer)
  }

  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-8 bg-[#0a0a0f] text-white transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div id="yt-player" className="hidden" />

      <h1 className="font-display text-center text-6xl tracking-widest text-white sm:text-7xl">
        🥩 BEEF DETECTOR
      </h1>

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
        Monitoring workplace harmony since 2024
      </p>

      {!started && (
        <button
          onClick={handleEnter}
          className="font-display mt-4 animate-pulse rounded bg-red-600 px-12 py-4 text-2xl tracking-[0.2em] text-white transition-colors hover:bg-red-500"
        >
          ENTER THE LEDGER
        </button>
      )}

      {started && !fading && (
        <p className="animate-pulse font-mono text-sm uppercase tracking-[0.3em] text-red-500">
          ⚠ BEEF DETECTED IN YOUR ORGANIZATION
        </p>
      )}
    </div>
  )
}
