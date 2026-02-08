import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-secondary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Axion Primus
          </span>
        </a>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Not financial advice. Risk analysis tool only. Always do your own
          research before investing.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Follow on X
          </a>
        </div>

        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Axion Primus. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
