import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LocationsGrid } from "@/components/locations-grid"
import { PropertyTypes } from "@/components/property-types"
 
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LocationsGrid />
      <PropertyTypes />
      <Footer />
    </main>
  )
}
