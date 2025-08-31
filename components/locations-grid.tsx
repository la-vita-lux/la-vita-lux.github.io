import { Card } from "@/components/ui/card"

const locations = [
  { name: "Manhattan", image: "/assets/images/manhattan-skyline-cityscape.png" },
  { name: "Queens", image: "/assets/images/queens-bridge-and-waterfront.png" },
  { name: "Brooklyn", image: "/assets/images/brooklyn-brownstone-neighborhood.png" },
  { name: "Nassau", image: "/assets/images/nassau-county-suburban-homes.png" },
  { name: "Suffolk", image: "/assets/images/suffolk-county-coastal-landscape.png" },
  { name: "Bronx", image: "/assets/images/bronx-residential-neighborhood.png" },
]

export function LocationsGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-work-sans text-center mb-12">Areas We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card
              key={location.name}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image || "/assets/images/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold font-work-sans">{location.name}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
