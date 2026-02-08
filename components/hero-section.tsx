import Image from "next/image"
import { Shield, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(217 91% 60% / 0.4), transparent)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center md:pt-36">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
          <Shield className="h-4 w-4" />
          AI-Powered Risk Detection
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
          Scan Before You Invest.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
          Axion Primus is an AI risk agent that detects rugs, honeypots, and
          manipulation before you invest.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-105"
          >
            Coming Soon
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Follow on X
          </a>
        </div>
      </div>

      {/* Banner image */}
      <div className="relative mt-16 w-full">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary to-transparent" />
        <Image
          src="/images/banner.png"
          alt="Pixel-art underwater scene with robot lobsters representing the Axion Primus community"
          width={1500}
          height={400}
          className="w-full object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  )
}
