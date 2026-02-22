import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement, CSSProperties } from 'react'
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'

interface Props { slides: ReactElement[] }

export default function Presentation({ slides }: Props) {
  const [current, setCurrent] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const total = slides.length

  const next = useCallback(() => setCurrent(i => Math.min(i + 1, total - 1)), [total])
  const prev = useCallback(() => setCurrent(i => Math.max(i - 1, 0)), [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setFullscreen(false)).catch(() => {})
    }
  }, [])

  const showControls = useCallback(() => {
    setControlsVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setControlsVisible(false), 3000)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')                    { e.preventDefault(); prev() }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      if (e.key === 'Escape') { document.exitFullscreen?.().catch(() => {}); setFullscreen(false) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev, toggleFullscreen])

  useEffect(() => {
    showControls()
    return () => clearTimeout(hideTimer.current)
  }, [showControls])

  useEffect(() => {
    const handler = () => { setFullscreen(!!document.fullscreenElement) }
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  return (
    <div
      style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}
      onMouseMove={showControls}
    >
      {/* Slides */}
      {slides.map((slide, i) => {
        const diff = i - current
        const opacity = diff === 0 ? 1 : 0
        const scale = diff < 0 ? 0.95 : diff > 0 ? 1.05 : 1
        return (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              opacity, transform: `scale(${scale})`,
              transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
              pointerEvents: diff === 0 ? 'auto' : 'none',
            }}
          >
            {slide}
          </div>
        )
      })}

      {/* Keyboard hint — top right */}
      <div style={{
        position: 'absolute', top: '4%', right: '5.2%', zIndex: 50,
        fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em',
        opacity: controlsVisible ? 1 : 0, transition: 'opacity 300ms',
        pointerEvents: 'none',
      }}>
        ← → Navigate · F Fullscreen
      </div>

      {/* Bottom navigation */}
      <div style={{
        position: 'absolute', bottom: '4%', left: '5.2%', right: '5.2%', zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        opacity: controlsVisible ? 1 : 0, transition: 'opacity 300ms',
      }}>
        {/* Slide counter */}
        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontVariantNumeric: 'tabular-nums' }}>
          {current + 1} / {total}
        </span>

        {/* Progress dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: '6px',
                width: i === current ? '24px' : '6px',
                borderRadius: '3px',
                background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>

        {/* Controls right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {[
            { icon: <ChevronLeft size={16}/>, action: prev, label: 'Prev' },
            { icon: <ChevronRight size={16}/>, action: next, label: 'Next' },
          ].map(({ icon, action, label }) => (
            <button key={label} onClick={action} style={btnStyle}>{icon}</button>
          ))}
          <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.2)', margin: '0 4px' }}/>
          <button onClick={toggleFullscreen} style={btnStyle}>
            {fullscreen ? <Minimize size={16}/> : <Maximize size={16}/>}
          </button>
        </div>
      </div>
    </div>
  )
}

const btnStyle: CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '32px', height: '32px', borderRadius: '6px',
  background: 'transparent', border: 'none', cursor: 'pointer',
  color: 'rgba(255,255,255,0.5)',
  transition: 'background 200ms, color 200ms',
}
