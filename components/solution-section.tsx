import { Brain, ScanSearch, BarChart3 } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="bg-muted/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Approach
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How Axion Primus Helps
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Axion Primus uses advanced AI models to scan token contracts,
              analyze on-chain behavior, and deliver a clear risk score
              so you can make informed decisions before investing.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <ScanSearch className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Smart Contract Scanning
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Deep analysis of contract code to detect malicious functions,
                    hidden mints, and ownership exploits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <Brain className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    AI Behavior Analysis
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Machine learning models that identify suspicious trading
                    patterns and wallet activity in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <BarChart3 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Clear Risk Scoring
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    A simple, transparent risk score that summarizes all findings
                    into an actionable number.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustrative card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Risk Analysis
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Low Risk
                </span>
              </div>
              <div className="mt-6 flex items-end gap-3">
                <span className="text-5xl font-bold text-foreground">12</span>
                <span className="mb-1 text-lg text-muted-foreground">/ 100</span>
              </div>
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: "12%" }}
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="text-xs text-muted-foreground">Contract</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Safe</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="text-xs text-muted-foreground">Liquidity</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Locked</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="text-xs text-muted-foreground">Ownership</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Renounced
                  </p>
                </div>
                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="text-xs text-muted-foreground">Honeypot</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Not Detected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
