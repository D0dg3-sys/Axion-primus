import { ClipboardPaste, Cpu, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardPaste,
    title: "Paste Token Address",
    description:
      "Copy and paste the contract address of any token you want to investigate.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Analyzes On-Chain Data",
    description:
      "Our AI agent scans the contract, trading history, wallet behavior, and liquidity in seconds.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Receive a Clear Risk Score",
    description:
      "Get a comprehensive risk report with a 0-100 score and detailed breakdown of findings.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Simple Process
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Three simple steps to protect your investments.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <span className="text-4xl font-bold text-secondary/20">
                {step.number}
              </span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <step.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
