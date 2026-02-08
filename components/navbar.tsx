"use client"

import { useState } from "react"
import { Shield, Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-secondary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Axion Primus
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#problem" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Problem
          </a>
          <a href="#solution" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Solution
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </a>
        </nav>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Follow on X
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-card px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#problem" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
              Problem
            </a>
            <a href="#solution" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
              Solution
            </a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
              How It Works
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Follow on X
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
