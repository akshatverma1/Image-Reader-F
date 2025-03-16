import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="text-xl font-bold">
              Image Reader
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Turn your images into insights with AI-powered analysis
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/product" className="text-muted-foreground hover:text-foreground">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/product/features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/product/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/google-photos" className="text-muted-foreground hover:text-foreground">
                  Google Photos
                </Link>
              </li>
              <li>
                <Link to="/solutions/vercel" className="text-muted-foreground hover:text-foreground">
                  Vercel
                </Link>
              </li>
              <li>
                <Link to="/solutions/godaddy" className="text-muted-foreground hover:text-foreground">
                  GoDaddy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/collaboration" className="text-muted-foreground hover:text-foreground">
                  Collaboration
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Image Reader. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

