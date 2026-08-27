import { Nav } from '@/sections/Nav'
import { Hero } from '@/sections/Hero'
import { Integrations } from '@/sections/Integrations'
import { Capabilities } from '@/sections/Capabilities'
import { Demo } from '@/sections/Demo'
import { HowItWorks } from '@/sections/HowItWorks'
import { VoiceStack } from '@/sections/VoiceStack'
import { Pricing } from '@/sections/Pricing'
import { Testimonials, Faq } from '@/sections/Social'
import { Footer } from '@/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <Nav />
      <main>
        <Hero />
        <Integrations />
        <Capabilities />
        <Demo />
        <HowItWorks />
        <VoiceStack />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
