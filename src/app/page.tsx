import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PartnersCarousel from '@/components/PartnersCarousel'
import Features from '@/components/Features'
import AutomationSection from '@/components/AutomationSection'
import DesignSection from '@/components/DesignSection'
import Pricing from '@/components/Pricing'
import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="bg-bg text-vs-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <PartnersCarousel />
      <Features />
      <AutomationSection />
      <DesignSection />
      <Pricing />
      <Clients />
      <Footer />
      <Chatbot />
    </main>
  )
}
