import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import ServicesGrid from "@/components/services-grid"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <ServicesGrid />
      <CTASection />
      <Footer />
    </main>
  )
}
