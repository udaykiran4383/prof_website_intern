import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CAVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
