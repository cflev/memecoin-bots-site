import { Zap, Brain, BarChart2, Cpu, Shield } from 'lucide-react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import type { ReactNode, CSSProperties } from 'react'

const glassCard: CSSProperties = {
  backdropFilter: 'blur(24px) saturate(1.4)',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '16px',
  padding: 'clamp(20px, 2.5vw, 48px)',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'flex-end',
  position: 'relative' as const,
  overflow: 'hidden',
  flex: 1,
}

const specular: CSSProperties = {
  position: 'absolute',
  top: 0, left: 0,
  width: '60%', height: '60%',
  background: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.07) 0%, transparent 70%)',
  pointerEvents: 'none',
}

interface CardProps { icon: ReactNode; title: string; desc: string }
function Card({ icon, title, desc }: CardProps) {
  return (
    <div style={glassCard}>
      <div style={specular}/>
      <div style={{ fontSize: 'clamp(32px, 3vw, 48px)', marginBottom: '8%', color: 'white' }}>{icon}</div>
      <h3 style={{ fontSize: 'clamp(18px, 1.8vw, 36px)', fontWeight: 700, margin: '0 0 4%', lineHeight: 1.1 }}>{title}</h3>
      <p style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.4 }}>{desc}</p>
    </div>
  )
}

export default function AnalyticsSlide() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4% 5.2% 0' }}>
        <Logo />
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>MemeSignal</span>
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>02</span>
      </div>

      {/* Title */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2.5% 5.2% 0' }}>
        <p style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.9, margin: '0 0 0.8%' }}>Transforming Data into Intelligence with</p>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>AI Signal Detection Engine</h2>
      </div>

      {/* Cards */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, padding: '2% 5.2% 4%', display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.2vw, 27px)' }}>
        {/* Top row — 3 cards */}
        <div style={{ display: 'flex', flex: 1, gap: 'clamp(10px, 1.2vw, 27px)' }}>
          <Card icon={<Zap size={36} strokeWidth={1.5}/>} title="Signal Collection" desc="13 Telegram channels, CryptoPanic, Twitter KOLs, RSS feeds — monitored 24/7 in real-time." />
          <Card icon={<Brain size={36} strokeWidth={1.5}/>} title="AI Filtering" desc="GLM-4.7-Flash LLM scores signals 0–10, filters FUD, spam and airdrop noise automatically." />
          <Card icon={<BarChart2 size={36} strokeWidth={1.5}/>} title="Market Validation" desc="Dexscreener liquidity, volume momentum, buy/sell ratio cross-checked per signal." />
        </div>
        {/* Bottom row — 2 cards */}
        <div style={{ display: 'flex', flex: 1, gap: 'clamp(10px, 1.2vw, 25px)' }}>
          <Card icon={<Cpu size={36} strokeWidth={1.5}/>} title="Decision Engine" desc="Fear & Greed gate + weighted multi-source scoring + cross-consultation between both bots." />
          <Card icon={<Shield size={36} strokeWidth={1.5}/>} title="Risk Management" desc="Stop-loss -15%, take-profit +40%, max 3 concurrent positions, 30-minute cooldown per coin." />
        </div>
      </div>
    </div>
  )
}
