"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-primary">
              <img src="/placeholder.svg?height=32&width=32" alt="Image Reader Logo" className="object-cover h-8 w-8" />
            </div>
            <span className="text-xl font-bold">Image Reader</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Product <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link to="/product">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/product/features">Features</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/product/pricing">Pricing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Solutions <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link to="/solutions">All Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/google-photos">Google Photos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/vercel">Vercel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/godaddy">GoDaddy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/collaboration" className="text-sm font-medium">
              Collaboration
            </Link>

            <Link to="/about" className="text-sm font-medium">
              About
            </Link>

            <Link to="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:block text-sm font-medium">
            Login
          </Link>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/signup">Sign up free</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden p-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link to="/product" className="text-sm font-medium">
              Product
            </Link>
            <Link to="/solutions" className="text-sm font-medium">
              Solutions
            </Link>
            <Link to="/collaboration" className="text-sm font-medium">
              Collaboration
            </Link>
            <Link to="/about" className="text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium">
              Contact
            </Link>
            <Link to="/login" className="text-sm font-medium">
              Login
            </Link>
            <Button asChild className="w-full">
              <Link to="/signup">Sign up free</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

