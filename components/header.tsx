import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background border-b border-border">
      {/* Top contact bar */}
      <div className="bg-muted py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>718-497-9993</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Email Us</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded">
              <div className="w-6 h-6 bg-primary-foreground/20 rounded"></div>
            </div>
            <span className="text-xl font-bold font-work-sans">PRO Links Realty</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Our Listings
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Search
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              New Developments
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Our Agents
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
