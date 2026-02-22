import { TrendingUp, Users, MessageCircle, Cpu, Globe } from 'lucide-react'
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'
import type { ReactNode, CSSProperties } from 'react'

interface ItemProps { icon: ReactNode; text: string }

const itemStyle: CSSProperties = { display: 'flex', alignItems: 'center', gap: 'clamp(12px, 1.2vw, 20px)' }
const iconStyle: CSSProperties = { fontSize: 'clamp(24px, 2vw, 32px)', color: 'white', flexShrink: 0 }

function ContactItem({ icon, text }: ItemProps) {
  return (
    <div style={itemStyle}>
      <span style={iconStyle}>{icon}</span>
      <span style={{ fontSize: 'clamp(13px, 1.1vw, 20px)', opacity: 0.9 }}>{text}</span>
    </div>
  )
}

export default function OutroSlide() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4% 5.2% 0' }}>
        <Logo />
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>MemeSignal</span>
        <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Live</span>
      </div>

      {/* Main content — vertically centered, left-aligned */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 5.2% 4%',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 64px)', fontWeight: 700,
          letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0,
          whiteSpace: 'pre-line',
        }}>
          {'Live Performance &\nHow to Get Access'}
        </h2>

        <p style={{
          fontSize: 'clamp(13px, 1.1vw, 20px)', opacity: 0.9,
          maxWidth: '38%', marginTop: '3%', lineHeight: 1.6,
        }}>
          Both bots trade paper money with a $100 virtual budget each. Bot 1 (MemeSignal) monitors large-cap meme coins. Bot 2 (KOLFollower) hunts micro-cap gems followed by on-chain KOL wallets.
        </p>

        <div style={{
          display: 'flex', flexDirection: 'column',
          gap: 'clamp(12px, 1.3vw, 19px)',
          marginTop: '3%',
        }}>
          <ContactItem icon={<TrendingUp size={28} strokeWidth={1.5}/>} text="Bot 1 (MemeSignal): $100 paper budget · SL -15% · TP +40%" />
          <ContactItem icon={<Users size={28} strokeWidth={1.5}/>} text="Bot 2 (KOLFollower): $100 paper budget · SL -20% · TP +80%" />
          <ContactItem icon={<MessageCircle size={28} strokeWidth={1.5}/>} text="Signals via Telegram: @MemeSignalBot" />
          <ContactItem icon={<Cpu size={28} strokeWidth={1.5}/>} text="Powered by GLM-4.7-Flash on local GPU (NVIDIA A100 80GB)" />
          <ContactItem icon={<Globe size={28} strokeWidth={1.5}/>} text="Live: https://nc-a100-v4-vm.tail6b8b28.ts.net" />
        </div>
      </div>
    </div>
  )
}
