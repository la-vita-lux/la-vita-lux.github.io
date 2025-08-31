import { Card, CardContent } from "@/components/ui/card"
import { Building, Building2, Home, Factory, MapPin } from "lucide-react"

const propertyTypes = [
  {
    icon: Building,
    title: "Co-op",
    description: "Cooperative housing options in prime locations",
  },
  {
    icon: Building2,
    title: "Condo",
    description: "Modern condominiums with luxury amenities",
  },
  {
    icon: Home,
    title: "Single Family",
    description: "Beautiful single-family homes for growing families",
  },
  {
    icon: Building,
    title: "Multi Family",
    description: "Investment properties and multi-unit buildings",
  },
  {
    icon: Factory,
    title: "Commercial",
    description: "Commercial real estate and business properties",
  },
  {
    icon: MapPin,
    title: "Land",
    description: "Development opportunities and vacant land",
  },
]

export function PropertyTypes() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-work-sans text-center mb-12">Property Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type) => (
            <Card
              key={type.title}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-accent"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <type.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-work-sans mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
