"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Awards", href: "/awards" },
  { name: "Projects", href: "/projects" },
  { name: "Patents", href: "/patents" },
  { name: "CAV", href: "/cav" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-iitb-navy rounded flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="flex flex-col">
                <span className="text-base font-medium text-iitb-navy font-serif">Prof. Archak Mittal</span>
                <span className="text-xs text-gray-600 font-academic">IIT Bombay</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors font-academic",
                  pathname === item.href
                    ? "text-iitb-navy border-b-2 border-iitb-navy"
                    : "text-gray-600 hover:text-iitb-navy",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Menu className="h-5 w-5 text-iitb-navy" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="flex items-center space-x-3 pb-6 border-b border-gray-200">
                  <div className="w-8 h-8 bg-iitb-navy rounded flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-base font-medium text-iitb-navy font-serif">Prof. Archak Mittal</span>
                    <p className="text-xs text-gray-600 font-academic">IIT Bombay</p>
                  </div>
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium transition-colors font-academic",
                      pathname === item.href
                        ? "text-iitb-navy bg-iitb-light-blue"
                        : "text-gray-600 hover:text-iitb-navy hover:bg-gray-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
