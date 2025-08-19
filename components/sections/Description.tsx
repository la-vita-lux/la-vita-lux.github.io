import React from "react"
import { publicUrl } from "@/lib/utils"

export default function Description() {
  return (
    <section className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 h-full">
        <div className="lg:col-span-1 relative">
          <img
            src={publicUrl('/images/facde-1.jpg')}
            alt="Facade 1 - La Vita Architectural Detail"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-1 flex flex-col justify-center px-8 py-16 bg-stone-50">
          {/* Block 1: heading + paragraph + single image, side-by-side on desktop */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="md:flex-1 mb-6 md:mb-0">
              <h3 className="mb-2 font-medium" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
                创新永恒地标，奢华非凡典范
              </h3>
              <div className="text-sm leading-relaxed max-w-xs">
                <p className="mb-2 text-black">作为无可比拟的奢华典范</p>
                <p className="mb-2 text-black">LaVita独树一帜</p>
                <p className="mb-2 text-black">将成为法拉盛中心顶级住宅地标其立面设计</p>
                <p className="mb-2 text-black">彰显现代美学</p>
                <p className="mb-2 text-black">层叠式阳台与列柱式基座相辅相成</p>
                <p className="mb-2 text-black">营造出空中花园的既视感</p>
                <p className="text-black">在光影交错间展现出变幻无穷的魅力</p>
              </div>
            </div>
            <div className="md:w-[46%] w-full">
              <img
                src={publicUrl('/images/window-light.png')}
                alt="Window light architectural detail"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Block 2: heading + paragraph + collage, side-by-side on desktop (image left, text right) */}
          <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-8">
            <div className="md:flex-1 mb-6 md:mb-0 md:self-center">
              <h3 className="mb-2 font-medium" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
                当设计融汇传统
              </h3>
              <div className="text-sm leading-relaxed max-w-xs">
                <p className="mb-2 text-black">汲取社区璀璨文化的灵感</p>
                <p className="mb-2 text-black">融合现代高端美学</p>
                <p className="mb-2 text-black">La Vita 打造出独一无二的尊贵生活体验</p>
                <p className="mb-2 text-black">150 套单位配备 16,000 平方英尺的奢华设施</p>
                <p className="mb-2 text-black">以现代设计理念融入文化精髓</p>
                <p className="text-black">呈现非凡居住格调</p>
              </div>
            </div>

            {/* Overlapping image collage */}
            <div className="relative md:w-[52%] w-full h-72 sm:h-80 md:h-[28rem] mt-2 md:mt-0">
              <img
                src={publicUrl('/images/detail-1.png')}
                alt="Lobby lighting sculpture"
                className="absolute top-0 left-0 w-[58%] sm:w-[52%] md:w-[45%] h-auto rounded-xl shadow-2xl"
              />
              <img
                src={publicUrl('/images/detail-2.png')}
                alt="Marble reception detail"
                className="absolute bottom-2 right-2 w-[46%] sm:w-[44%] md:w-[40%] h-auto rounded-xl shadow-xl"
              />
              <img
                src={publicUrl('/images/detail-3.png')}
                alt="Stone wall texture detail"
                className="absolute top-10 left-1/2 -translate-x-1/2 w-[55%] sm:w-[48%] md:w-[42%] h-auto rounded-xl shadow-2xl z-10 rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

