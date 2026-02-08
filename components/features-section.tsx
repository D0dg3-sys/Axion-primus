import { ShieldCheck, Skull, Activity, Gauge } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Honeypot Detection",
    description:
      "Instantly identifies contracts that block selling, so you never get trapped in a token you cannot exit.",
  },
  {
    icon: Skull,
    title: "Rug Pull Risk Analysis",
    description:
      "Evaluates liquidity locks, ownership patterns, and contract permissions to flag potential rug pulls.",
  },
  {
    icon: Activity,
    title: "Manipulation Signals",
    description:
      "Detects wash trading, coordinated wallet activity, and artificial volume meant to deceive traders.",
  },
  {
    icon: Gauge,
    title: "Clear Risk Score",
    description:
      "Combines all signals into a single, easy-to-understand risk score from 0 to 100 for every token.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built to Protect Traders
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Four powerful detection layers working together to keep you safe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-secondary/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
