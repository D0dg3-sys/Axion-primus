import { Sparkles } from "lucide-react"

export function VisionSection() {
  return (
    <section className="bg-primary px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20">
          <Sparkles className="h-7 w-7 text-secondary" />
        </div>
        <h2 className="mt-8 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Making risk detection simple, transparent, and accessible.
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
          We believe every trader deserves the tools to protect themselves,
          regardless of experience or resources.
        </p>
        <button
          type="button"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-105"
        >
          Coming Soon
        </button>
      </div>
    </section>
  )
}
