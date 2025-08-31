"use client"
import { useEffect, useRef, useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
      // close mobile menu when clicking outside its panel
      const panel = document.getElementById("mobile-menu-panel")
      if (mobileOpen && panel && !panel.contains(event.target as Node)) {
        setMobileOpen(false)
        setMobileSubOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileOpen])
  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-white/20 backdrop-blur-md text-white border-b border-white/20">
      

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/pro-links-logo.png"
              alt="PRO Links Realty"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative" ref={menuRef}>
              <a
                href="#"
                className={`transition-colors px-2 py-1 rounded cursor-pointer hover:text-white`}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen((prev) => !prev)
                }}
              >
                新开发项目
              </a>
              {open && (
                <div className="absolute left-0 mt-2 min-w-[160px] rounded-md bg-transparent">
                  <a
                    href="/la-vita"
                    className="block px-4 py-2 text-white rounded-md bg-white/20 hover:bg-white/60 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    LA VITA
                  </a>
                </div>
              )}
            </div>
            <a
              href="#site-footer"
              className="transition-colors px-2 py-1 rounded hover:bg-white/60 hover:text-white"
            >
              联系我们
            </a>
          </nav>

          {/* Mobile hamburger with cross transition */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded bg-white/20 hover:bg-white/30"
            onClick={() => {
              setMobileOpen((isOpen) => {
                if (isOpen) {
                  setMobileSubOpen(false)
                  return false
                }
                return true
              })
            }}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-6">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 transform ${
                  mobileOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`mt-1 block h-0.5 w-6 bg-white transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`mt-1 block h-0.5 w-6 bg-white transition-all duration-300 transform ${
                  mobileOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel (same transparent bg as header; sub-item shows on click) */}
      {mobileOpen && (
        <div className="md:hidden absolute inset-x-0 top-full z-20 text-white">
          <div className="bg-white/50 backdrop-blur-md border-t border-white/20">
              <button
                className={`w-full text-left px-4 py-3 rounded transition-colors active:bg-white/50`}
                onClick={() => setMobileSubOpen((v) => !v)}
              >
                新开发项目
              </button>
              {mobileSubOpen && (
                <a
                  href="/la-vita"
                  className="block pl-8 px-4 py-2 rounded transition-colors active:bg-white/50"
                  onClick={() => {
                    setMobileOpen(false)
                    setMobileSubOpen(false)
                  }}
                >
                  LA VITA
                </a>
              )}
              <a
                href="#site-footer"
                className="block px-4 py-3 rounded transition-colors active:bg-white/50"
                onClick={() => setMobileOpen(false)}
              >
                联系我们
              </a>
            </div>
        </div>
      )}
    </header>
  )
}
