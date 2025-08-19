import React from "react"
import { publicUrl } from "@/lib/utils"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#5e0000] to-[#2e0000]">
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img src={publicUrl("/images/lavita-logo.png")} alt="La Vita Condominium Logo" className="w-64 md:w-80 lg:w-96 mx-auto" />
        </div>
      </div>
    </section>
  )
}

