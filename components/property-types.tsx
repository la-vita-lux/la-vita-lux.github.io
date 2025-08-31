import { Card, CardContent } from "@/components/ui/card"
import { Building, Building2, Home, Factory, MapPin } from "lucide-react"

const propertyTypes = [
  {
    icon: Building,
    title: "合作公寓（Co-op）",
    description: "黄金地段的合作公寓住房选择",
  },
  {
    icon: Building2,
    title: "公寓（Condo）",
    description: "配备豪华设施的现代公寓",
  },
  {
    icon: Home,
    title: "独栋住宅",
    description: "适合成长型家庭的优美独栋住宅",
  },
  {
    icon: Building,
    title: "多户住宅",
    description: "投资型物业与多单元楼宇",
  },
  {
    icon: Factory,
    title: "商业地产",
    description: "商业不动产与商务物业",
  },
  {
    icon: MapPin,
    title: "土地",
    description: "开发机会与待建设地块",
  },
]

export function PropertyTypes() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-work-sans text-center mb-12">物业类型</h2>
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
