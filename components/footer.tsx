import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded">
                <div className="w-6 h-6 bg-primary-foreground/20 rounded"></div>
              </div>
              <span className="text-xl font-bold font-work-sans">PRO Links Realty</span>
            </div>
            <div className="space-y-2 text-sm">
              <p>P.R.O Links Realty Inc.</p>
              <p>NYC</p>
              <p>Phone: 718-497-9993</p>
            </div>
          </div>

          {/* Areas Serviced */}
          <div>
            <h3 className="text-lg font-bold font-work-sans mb-4">AREAS SERVICED</h3>
            <div className="space-y-1 text-sm">
              <p>Manhattan, NY</p>
              <p>Queens, NY</p>
              <p>Brooklyn, NY</p>
              <p>Nassau, NY</p>
              <p>Suffolk, NY</p>
              <p>Bronx, NY</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold font-work-sans mb-4">Connect</h3>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 PRO Links Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
