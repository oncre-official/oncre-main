import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import enterpriseImg from "@/assets/enterprise.jpg";
import { ArrowRight, Check, Building2, LineChart, Users } from "lucide-react";
import visualPattern from "@/assets/visual-pattern.svg";
import { useRegisterHero } from "@/lib/hero-context";

export const Route = createFileRoute("/solutions/recovery-enterprise")({
  head: () => ({
    meta: [
      { title: "Recovery Infrastructure for Delinquent Loan Portfolios | OnCRE" },
      {
        name: "description",
        content:
          "OnCRE helps lenders, cooperatives, and financial institutions manage overdue accounts through a dedicated recovery desk, structured workflows, and portfolio-level reporting.",
      },
      { property: "og:title", content: "OnCRE - Recovery for Financial Institutions" },
      {
        property: "og:description",
        content: "Dedicated recovery desk, bulk portfolio onboarding, reporting, and reconciliation. Built for scale.",
      },
    ],
  }),
  component: EnterprisePage,
});

function EnterprisePage() {
  useRegisterHero({
    backgroundColor: "#E5F1FF",
    backgroundImage: visualPattern,
    theme: "light",
  });
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border -mt-20 pt-20" style={{ backgroundColor: "#E5F1FF" }}>
        <div
          aria-hidden
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container-page grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              For Financial Institutions
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Recovery infrastructure for delinquent loan portfolios.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              OnCRE helps lenders, cooperatives, and financial institutions
              manage overdue accounts through dedicated recovery operations,
              structured workflows, reporting, and portfolio-level recovery
              support.
            </p>

            <ul className="mt-6 grid gap-2 text-sm text-navy sm:grid-cols-2">
              {[
                "Dedicated recovery desk",
                "Bulk portfolio onboarding",
                "Reporting and reconciliation",
                "Built for scale",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-brand" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground hover:bg-brand"
              >
                Speak to Sales <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={enterpriseImg}
              alt="Enterprise professional on the phone"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <FeatureCard
              icon={<Users className="size-6" />}
              title="Dedicated agents"
              body="A named team is assigned solely to your portfolio and reports on a cadence you set."
            />
            <FeatureCard
              icon={<Building2 className="size-6" />}
              title="Consistent process at scale"
              body="Every case follows the same structured workflow - no case falls through."
            />
            <FeatureCard
              icon={<LineChart className="size-6" />}
              title="Compliance-conscious"
              body="Every action is proportionate, documented, and auditable. NDPR-compliant end to end."
            />
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-navy-foreground">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            How enterprise recovery works.
          </h2>
          <p className="mt-4 max-w-2xl text-navy-foreground/70">
            A fully managed recovery operation built for lenders, cooperatives,
            and organisations with large delinquent portfolios.
          </p>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Onboard",
                body: "We agree scope, volume, pricing, and reporting cadence upfront.",
              },
              {
                title: "Submit in Bulk",
                body: "Upload your delinquent accounts - no case-by-case submission.",
              },
              {
                title: "Dedicated Recovery Desk",
                body: "A dedicated team works your cases through the full five-stage process.",
              },
              {
                title: "Live Reporting",
                body: "Track recovery rates and outstanding balances in real time.",
              },
              {
                title: "Closure & Reconciliation",
                body: "Every case closes with documentation and full reconciliation.",
              },
            ].map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-5"
              >
                <div className="text-2xl font-bold text-brand-soft/70">
                  0{i + 1}
                </div>
                <p className="mt-2 text-sm font-semibold">{step.title}</p>
                <p className="mt-1 text-xs text-navy-foreground/60">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Why enterprises choose OnCRE
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Built for how NPL portfolios actually behave.
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              "Dedicated agents - solely focused on your portfolio.",
              "Consistent process at scale - no case falls through.",
              "Real-time reporting - clear data on a regular cadence.",
              "Compliance-conscious - proportionate, documented, auditable.",
              "NDPR-compliant handling across every touchpoint.",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-navy">
                <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-brand-tint py-24">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold text-navy sm:text-4xl">
            Who uses Enterprise Recovery.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Microfinance Banks & Lenders",
                body: "Delinquent portfolios need consistent, documented follow-up your internal team can't sustain alone. We supplement or replace that function.",
              },
              {
                title: "Cooperative Societies",
                body: "Unpaid member loans affect your ability to lend to others. We handle follow-up so your staff can focus on running the cooperative.",
              },
              {
                title: "Fintech Lenders",
                body: "Automated messages only go so far. We handle the calls, escalations, and human contact your digital systems can't.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to connect your portfolio?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy/90"
          >
            Speak to Sales <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border p-8">
      <div className="grid size-11 place-items-center rounded-lg bg-brand-tint text-brand">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
