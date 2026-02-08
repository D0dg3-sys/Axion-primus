import { AlertTriangle, Bug, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Rug Pulls",
    description:
      "Developers drain all liquidity from a token, leaving investors with worthless holdings and no way to sell.",
  },
  {
    icon: Bug,
    title: "Honeypots",
    description:
      "Tokens that let you buy but block you from selling, trapping your funds permanently in a malicious contract.",
  },
  {
    icon: TrendingDown,
    title: "Market Manipulation",
    description:
      "Coordinated pump-and-dump schemes, wash trading, and fake volume designed to lure unsuspecting traders.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            The Challenge
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Risk in Memecoins
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every day, new tokens launch with hidden dangers that can wipe out
            your investment in seconds.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                {problem.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
