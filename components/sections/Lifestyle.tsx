import React from "react"
import { publicUrl } from "@/lib/utils"

export default function Lifestyle() {
  const [modalImageSrc, setModalImageSrc] = React.useState<string | null>(null)

  const openImageModal = (src: string) => {
    setModalImageSrc(src)
  }

  const closeImageModal = () => {
    setModalImageSrc(null)
  }

  return (
    <section id="lifestyle" className="h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#8f846b" }}>
            卓越人生 超凡格调
          </h2>
        </div>

        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#8f846b" }}>
                焕活身心，重塑感官新境界
              </h3>
              <p className="text-sm text-white leading-relaxed">
                浴室以Bianco Carrara磨光大理石瓷砖营造宛如水疗般的宁静氛围，搭配Kohler卫浴、定制木饰面梳妆柜及LED背光镜，辅以步入式淋浴间或深浸式浴缸，让每一次沐浴都成为奢享时刻；厨房延续整体设计的流畅线条与柔和色调，La Rochelle Gris大理石台面与定制橡木色橱柜相得益彰，配合Brizo下拉式龙头及内嵌式Bosch和Gaggenau顶奢电器，呈现专业级烹饪体验，让灵感与美味自在流淌。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={publicUrl('/images/8c-elevation.jpg')} alt="Elevation" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/8c-elevation.jpg'))} />
              <img src={publicUrl('/images/8f-bedroom.jpeg')} alt="Bedroom" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/8f-bedroom.jpeg'))} />
              <img src={publicUrl('/images/8k-kitchen.jpeg')} alt="Kitchen" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/8k-kitchen.jpeg'))} />
              <img src={publicUrl('/images/bathroom-2.png')} alt="Bathroom" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/bathroom-2.png'))} />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img src={publicUrl('/images/lobby.jpg')} alt="大堂 Lobby" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/lobby.jpg'))} />
                <img src={publicUrl('/images/lounge-2.png')} alt="休息室二 Lounge 2" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/lounge-2.png'))} />
                <img src={publicUrl('/images/lounge.png')} alt="休息室 Lounge" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/lounge.png'))} />
                <img src={publicUrl('/images/mail-room.jpg')} alt="包裹室 Mail Room" className="w-full h-32 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/mail-room.jpg'))} />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#8f846b" }}>
                现代设施与文化灵感相融合
              </h3>
              <p className="text-sm text-white leading-relaxed">
                精致的大堂配有全天门卫大堂整体装饰结合金属、大理石和白色橡木元素热衷网购的住户将享受安全的包裹室所有住户都可以享用奢华的休息室休息室配有壁炉、小厨房和多个舒适的座位区域尽享悠闲时光
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#8f846b" }}>
                户外设施与健身中心
              </h3>
              <p className="text-sm text-white leading-relaxed">
                精心打造的户外露台配备餐饮和休闲家具绿意盎然私人健身中心则配备最先进的力量训练和有氧运动设备满足您的健身需求
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <img src={publicUrl('/images/gym.jpg')} alt="健身房 Gym" className="w-full h-40 object-cover rounded-lg shadow-md cursor-zoom-in" onClick={() => openImageModal(publicUrl('/images/gym.jpg'))} />
            </div>
          </div>
        </div>
      </div>

      {modalImageSrc && (
        <div
          className="fixed inset-0 z-[1] bg-gray-900/60 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeImageModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={modalImageSrc} alt="Preview" className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" />
            <button
              type="button"
              className="absolute -top-3 -right-3 bg-white/90 text-black rounded-full w-8 h-8 leading-8 text-center shadow-md"
              onClick={closeImageModal}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

