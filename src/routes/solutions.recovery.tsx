import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, ShieldCheck, Building2 } from "lucide-react";
import visualPattern from "@/assets/visual-pattern.svg";
import { useRegisterHero } from "@/lib/hero-context";

export const Route = createFileRoute("/solutions/recovery")({
  head: () => ({
    meta: [
      { title: "Debt Recovery - Business & Enterprise | OnCRE" },
      {
        name: "description",
        content:
          "Professional debt recovery for Nigerian businesses and financial institutions. Commission-only for merchants; structured infrastructure for lenders and cooperatives.",
      },
      { property: "og:title", content: "OnCRE - Debt Recovery" },
      {
        property: "og:description",
        content:
          "Recovery for business owners and enterprise NPL portfolios.",
      },
    ],
  }),
  component: RecoveryHubPage,
});

function RecoveryHubPage() {
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
            Debt Recovery
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Get your money back - professionally.
          </h1>
          <p className="mt-6 text-lg text-navy-foreground/75">
            Whether you&rsquo;re a business owner with a handful of unpaid
            debts or a lender managing a full delinquent portfolio, our
            recovery team is built for how credit actually behaves in Nigeria.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <PathCard
            icon={<ShieldCheck className="size-6" />}
            tag="For business owners"
            title="Recovery for Business Owners"
            body="When customers stop paying for goods on credit, we chase it - commission-only. No fee unless we recover."
            to="/solutions/recovery-business"
            cta="See business recovery"
          />
          <PathCard
            icon={<Building2 className="size-6" />}
            tag="For financial institutions"
            title="Enterprise Recovery"
            body="Structured, scalable recovery for banks, lenders, cooperatives, and fintechs managing delinquent loan portfolios."
            to="/solutions/recovery-enterprise"
            cta="See enterprise recovery"
            emphasized
          />
        </div>
      </section>

      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Not sure which fits? Let&rsquo;s talk.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy/90"
          >
            Contact Us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function PathCard({
  icon,
  tag,
  title,
  body,
  to,
  cta,
  emphasized = false,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  body: string;
  to: string;
  cta: string;
  emphasized?: boolean;
}) {
  return (
    <Link
      to={to}
      className={
        "group flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl " +
        (emphasized
          ? "border-navy bg-navy text-navy-foreground"
          : "border-border bg-background text-navy hover:border-navy/30")
      }
    >
      <div
        className={
          "inline-flex size-11 items-center justify-center rounded-lg " +
          (emphasized ? "bg-brand text-brand-foreground" : "bg-brand-tint text-brand")
        }
      >
        {icon}
      </div>
      <p
        className={
          "mt-6 text-xs font-semibold uppercase tracking-widest " +
          (emphasized ? "text-brand-soft" : "text-brand")
        }
      >
        {tag}
      </p>
      <h3 className="mt-2 text-2xl font-bold">{title}</h3>
      <p
        className={
          "mt-3 flex-1 text-base leading-relaxed " +
          (emphasized ? "text-navy-foreground/75" : "text-muted-foreground")
        }
      >
        {body}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        {cta}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
