import VideoBackground from '../VideoBackground'

export default function QuoteSlide() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1 }} />

      {/* Centered content */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', padding: '0 15%',
        gap: '12px',
        maxWidth: '70%', margin: '0 auto',
        width: '100%',
      }}>
        <span style={{ fontSize: 'clamp(14px, 1.2vw, 20px)', opacity: 0.9, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          MemeSignal Intelligence
        </span>
        <blockquote style={{
          fontSize: 'clamp(28px, 4vw, 64px)', fontWeight: 700,
          letterSpacing: '-0.02em', lineHeight: 1.15,
          margin: 0,
        }}>
          "In markets driven by narrative, the fastest signal wins."
        </blockquote>
      </div>
    </div>
  )
}
