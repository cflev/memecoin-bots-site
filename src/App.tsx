import Presentation from './components/Presentation'
import CoverSlide from './components/slides/CoverSlide'
import IntroSlide from './components/slides/IntroSlide'
import AnalyticsSlide from './components/slides/AnalyticsSlide'
import QuoteSlide from './components/slides/QuoteSlide'
import OutroSlide from './components/slides/OutroSlide'

export default function App() {
  return (
    <Presentation slides={[
      <CoverSlide />,
      <IntroSlide />,
      <AnalyticsSlide />,
      <QuoteSlide />,
      <OutroSlide />,
    ]} />
  )
}
