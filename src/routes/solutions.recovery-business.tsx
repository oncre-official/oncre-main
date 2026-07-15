import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import visualPattern from "@/assets/visual-pattern.svg";
import { useRegisterHero } from "@/lib/hero-context";


export const Route = createFileRoute("/solutions/recovery-business")({
  head: () => ({
    meta: [
      { title: "Recover Unpaid Credit for Your Business | OnCRE" },
      {
        name: "description",
        content:
          "When customers stop paying for goods sold on credit, OnCRE's recovery team steps in - professionally, and on commission only. No recovery, no fee.",
      },
      { property: "og:title", content: "OnCRE - Recovery for Business Owners" },
      {
        property: "og:description",
        content:
          "Get your money back without chasing customers yourself. No recovery, no commission.",
      },
    ],
  }),
  component: RecoveryBusinessPage,
});

function RecoveryBusinessPage() {
  useRegisterHero({
    backgroundColor: "#001D57",
    backgroundImage: visualPattern,
    theme: "dark",
  });
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border bg-[#001D57] -mt-20 pt-20 text-navy-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container-page max-w-3xl py-20 lg:py-28">

          <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
            Recovery for Business Owners
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Get your money back without chasing customers yourself.
          </h1>
          <p className="mt-6 text-lg text-navy-foreground/75">
            When customers stop paying for goods sold on credit, OnCRE helps
            you follow up professionally through a structured recovery process
            designed to recover money while protecting important business
            relationships with your customers.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-navy-foreground/85">
            {[
              "No recovery, no commission",
              "WhatsApp updates throughout the process",
              "Built for Nigerian traders, retailers, and wholesalers",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="size-4 text-brand-soft" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Let Us Get Your Money Back <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/25 px-5 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/10"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Submit your case. Our team takes over.
            </h2>
            <p className="mt-5 text-muted-foreground">
              You hear back when money is recovered.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              {
                title: "Activate",
                body: "Pay ₦5,000 to activate your account - you're live immediately.",
              },
              {
                title: "Submit Your Case",
                body: "Tell us the debtor's details and what's owed. It takes 3 minutes.",
              },
              {
                title: "Recovery Desk Takes Over",
                body: "We contact your debtor and keep you updated as it progresses.",
              },
              {
                title: "You Get Paid",
                body: "Money goes to you, minus our fee. No recovery, no fee.",
              },
            ].map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-2xl border border-border p-5"
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-tint text-sm font-bold text-brand">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-tint py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <ShieldCheck className="size-10 text-brand" />
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Why it works for you.
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              "No technical knowledge needed - submit a form, we do the rest.",
              "Multiple contact channels - your debtor is reached wherever they respond.",
              "Relationship-protective - our agents are firm but professional.",
              "Full documentation - every interaction is recorded.",
              "No risk - commission only on successful recovery.",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-navy">
                <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Who uses Business Recovery
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Built for real Nigerian businesses.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Shop owners, market traders, wholesalers, and distributors who have
            customers that owe money on goods sold on credit and aren&rsquo;t
            responding. No minimum case size - submit one or many.
          </p>
        </div>
      </section>

      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let us get your money back.
            </h2>
            <p className="mt-2 text-brand-foreground/85">
              No recovery, no commission.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy/90"
          >
            Get Started <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
