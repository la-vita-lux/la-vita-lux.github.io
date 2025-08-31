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
  title: "PRO Links 房地产 - 您值得信赖的地产伙伴",
  description:
    "为曼哈顿、皇后区、布鲁克林、拿骚县、苏福克县与布朗克斯提供专业房地产服务。与我们的专家团队一起寻找梦想之家。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className={`${inter.variable} ${workSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
