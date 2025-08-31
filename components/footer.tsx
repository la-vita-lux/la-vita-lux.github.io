import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="site-footer" className="bg-gradient-to-b from-[#263745] to-[#000000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand and Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-work-sans">Area Serviced</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Manhattan</p>
              <p>Queens</p>
              <p>Brooklyn</p>
              <p>Nassau County</p>
              <p>Suffolk County</p>
              <p>Bronx</p>
            </div>
          </div>

          {/* Middle: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-work-sans">联系我们</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>P R O Links Realty INC</p>
              <p>001–718–487–9992</p>
              <p>info@prolinksrealty.com</p>
            </div>
          </div>

          {/* Right: Exclusive Sales & Marketing */}
          <div className="space-y-4">
            <div className="rounded-md p-4 w-[300px] max-w-full">
              <img
                src="/assets/images/pro-links-logo-2.png"
                alt="PRO Links Realty"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-xs text-white/70">
              Exclusive Sales and Marketing by PRO Links Realty
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/70 gap-4">
          <p>© 2024 PRO Links Realty. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
