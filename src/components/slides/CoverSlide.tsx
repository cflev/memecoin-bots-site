import VideoBackground from '../VideoBackground'
import Logo from '../Logo'

export default function CoverSlide() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

      {/* Dark overlay for readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 1 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4% 5.2% 0' }}>
        <Logo />
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>DEMO · 2026</span>
      </div>

      {/* Center content */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', padding: '0 5.2%',
        marginTop: '-3%',
      }}>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 96px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>
          MemeSignal × KOLFollower
        </h1>
        <p style={{ fontSize: 'clamp(20px, 3vw, 48px)', opacity: 0.9, marginTop: '1.5%', margin: '1.5% 0 0' }}>
          AI-Powered Meme Coin Signal Detection
        </p>
        <p style={{ fontSize: 'clamp(14px, 1.5vw, 24px)', opacity: 0.75, marginTop: '2%' }}>
          Local LLM · 24/7 Monitoring · Paper Trading
        </p>
      </div>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 5.2% 4%' }}>
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>2026</span>
      </div>
    </div>
  )
}
