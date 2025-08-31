import { Card, CardContent } from "@/components/ui/card"
import { Search, Heart, Bell } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "解锁搜索功能",
    description: "解锁搜索界面，畅享无任何限制与打扰的看房体验。",
    bgColor: "bg-slate-700",
  },
  {
    icon: Heart,
    title: "收藏您的最爱",
    description: "保存您喜爱的搜索与房源，随时回来继续查看。",
    bgColor: "bg-orange-500",
  },
  {
    icon: Bell,
    title: "订阅邮件提醒",
    description: "当出现符合您条件的新房源时，第一时间收到通知。",
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
