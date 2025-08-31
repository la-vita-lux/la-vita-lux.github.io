import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url('/assets/images/beautiful-brownstone-buildings-in-new-york-city.png')",
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-work-sans mb-6">Find Your Dream Home</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Professional real estate services across Manhattan, Queens, Brooklyn, Nassau, Suffolk, and Bronx
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Browse Listings
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Contact Agent
          </Button>
        </div>
      </div>
    </section>
  )
}
