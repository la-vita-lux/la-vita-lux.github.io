import { Card, CardContent } from "@/components/ui/card"
import { Search, Heart, Bell } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Unlock Your Search",
    description: "Unlock the search interface so you can browse homes without restrictions or interruptions.",
    bgColor: "bg-slate-700",
  },
  {
    icon: Heart,
    title: "Save Your Favorites",
    description: "Save your favorite searches and listings to sales. They'll be waiting for you when you return.",
    bgColor: "bg-orange-500",
  },
  {
    icon: Bell,
    title: "Get Email Notifications",
    description: "Get notified when new homes are listed that match your search criteria.",
    bgColor: "bg-slate-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className={`${service.bgColor} text-white border-0`}>
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold font-work-sans mb-4">{service.title}</h3>
                <p className="text-white/90 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
