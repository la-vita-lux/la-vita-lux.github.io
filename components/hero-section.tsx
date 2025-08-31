"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const images = [
    "/assets/images/hero/hero-1.jpg",
    "/assets/images/hero/hero-2.jpg",
    "/assets/images/hero/hero-3.jpg",
    "/assets/images/hero/hero-4.jpg",
    "/assets/images/hero/hero-5.jpg",
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 5000) // 5s per slide

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-black/50 to-black/20 flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${idx === activeIndex ? "opacity-50" : "opacity-0"}`}
            style={{ backgroundImage: `url('${src}')` }}
            aria-hidden
          />
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-work-sans mb-6">找到您的理想之家</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          为曼哈顿、皇后区、布鲁克林、拿骚县、苏福克县与布朗克斯提供专业房地产服务
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            onClick={() => {
              const el = document.getElementById("site-footer")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            联系经纪人
          </Button>
        </div>
      </div>
    </section>
  )
}
