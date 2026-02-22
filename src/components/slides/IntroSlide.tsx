import VideoBackground from '../VideoBackground'
import Logo from '../Logo'

export default function IntroSlide() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4% 5.2% 0' }}>
        <Logo />
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>MemeSignal</span>
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>01</span>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, padding: '3% 5.2% 4%', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 0', whiteSpace: 'pre-line' }}>
          {'The Meme Coin Market\nOpportunity'}
        </h2>

        {/* Three-column layout */}
        <div style={{ display: 'flex', gap: '4%', marginTop: '3.5%', flex: 1, alignItems: 'flex-start' }}>
          {/* Col 1 */}
          <div style={{ flex: '0 0 22%' }}>
            <p style={{ fontSize: 'clamp(12px, 1.05vw, 18px)', opacity: 0.85, lineHeight: 1.5, marginBottom: '8%' }}>
              Meme coin market cap exceeded $100B in 2025. AI-driven signal detection creates a measurable edge in highly volatile, narrative-driven markets.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, lineHeight: 1 }}>$100B+</span>
            </div>
            <span style={{ fontSize: 'clamp(13px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.8)' }}>Market Cap</span>
          </div>

          {/* Col 2 */}
          <div style={{ flex: '0 0 38%' }}>
            <p style={{ fontSize: 'clamp(13px, 1.1vw, 20px)', opacity: 0.9, lineHeight: 1.6 }}>
              Traditional traders miss micro-cap gem launches by seconds. MemeSignal monitors 13 Telegram channels, news feeds, Twitter KOL accounts and on-chain wallet activity simultaneously — scoring signals in real-time with local LLMs to generate high-confidence trade calls. Both bots operate on separate budgets with independent strategies, sharing a signal bus for cross-consultation to amplify conviction on overlapping signals.
            </p>
          </div>

          {/* Col 3 */}
          <div style={{ flex: '0 0 20%', display: 'flex', flexDirection: 'column', gap: '8%' }}>
            <div>
              <span style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, lineHeight: 1 }}>200%</span>
              <p style={{ fontSize: 'clamp(12px, 1vw, 18px)', opacity: 0.85, marginTop: '4%', lineHeight: 1.4 }}>Avg meme coin volatility — the edge AI captures</p>
            </div>

            {/* Mini sparkline */}
            <svg viewBox="0 0 120 60" style={{ width: '100%', maxWidth: '160px' }}>
              <defs>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D2FF55" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#D2FF55" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,50 C20,45 30,35 45,25 S70,10 90,15 S110,8 120,4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M0,50 C20,45 30,35 45,25 S70,10 90,15 S110,8 120,4 L120,60 L0,60 Z" fill="url(#sparkGrad)"/>
              <circle cx="0" cy="50" r="4" fill="#B750B2" stroke="white" strokeWidth="1.5"/>
              <circle cx="120" cy="4" r="4" fill="#B750B2" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'right', padding: '0 5.2% 4%' }}>
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Market Overview</span>
      </div>
    </div>
  )
}
