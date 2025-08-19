import React from "react"
import { publicUrl } from "@/lib/utils"

export default function GalleryFull() {
  return (
    <section className="h-screen w-full">
      <img
        src={publicUrl('/images/lavita-street-view.jpeg')}
        alt="La Vita Street View - Community Living"
        className="w-full h-full object-cover"
      />
    </section>
  )
}

