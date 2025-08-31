import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Pro Links Realty - Your Trusted Real Estate Partner",
  description:
    "Professional real estate services in Manhattan, Queens, Brooklyn, Nassau, Suffolk, and Bronx. Find your dream home with our expert team.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${workSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
