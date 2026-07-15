import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import aboutImg from "@/assets/about.jpg";
import visualPattern from "@/assets/visual-pattern.svg";
import { ArrowRight } from "lucide-react";
import fram1 from "@/assets/about1.svg";
import fram2 from "@/assets/about2.svg";
import fram3 from "@/assets/about3.svg";
import fram4 from "@/assets/about4.svg";
import { useRegisterHero } from "@/lib/hero-context";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About OnCRE | The System Nigerian Credit Was Missing" },
      {
        name: "description",
        content:
          "OnCRE is a credit management and digital debt recovery platform built for how credit actually works in Nigeria - for merchants, lenders, and cooperatives.",
      },
      { property: "og:title", content: "About OnCRE" },
      {
        property: "og:description",
        content:
          "The credit control layer for Nigeria's informal economy - built from real conversations with traders, wholesalers, and cooperatives.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useRegisterHero({
    backgroundColor: "#E5F1FF",
    backgroundImage: visualPattern,
    theme: "light",
  });
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden -mt-20 pt-20" style={{ backgroundColor: "#E5F1FF" }}>
        {/* subtle tiled pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          {/* Left: heading */}
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              About OnCRE
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-[#060F2D] sm:text-5xl lg:text-6xl">
              We built the system{" "}
              <em className="not-italic" style={{ color: "#1A44CA" }}>Nigerian credit</em>{" "}
              was missing
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#444853]">
              OnCRE is a credit management and digital debt recovery platform
              built for how credit actually works in Nigeria&rsquo;s informal
              economy.
            </p>
            <p className="mt-4 max-w-lg text-lg text-[#444853]">
              We help businesses track what customers owe on goods sold on
              credit and recover it when payments don&rsquo;t come. We give
              lenders and financial institutions the infrastructure to manage
              recovery at scale.
            </p>
            <p className="mt-6 text-base font-medium text-[#060F2D]">
              We&rsquo;re not a bank. We&rsquo;re not a credit bureau. We&rsquo;re
              the system that makes credit manageable.
            </p>
          </div>

          {/* Right: 2×2 image grid */}
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div
              className="overflow-hidden aspect-square"
              style={{ borderRadius: "40px" }}
            >
              <img
                src={fram1}
                alt="Nigerian shopkeeper reviewing paperwork"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="overflow-hidden aspect-square"
              style={{ borderRadius: "50%" }}
            >
              <img
                src={fram2}
                alt="Professional at desk"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="overflow-hidden aspect-square"
              style={{ borderRadius: "40px 40px 40px 160px" }}
            >
              <img
                src={fram3}
                alt="Market vendor"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="overflow-hidden aspect-square"
              style={{ borderRadius: "40px 160px 40px 160px" }}
            >
              <img
                src={fram4}
                alt="Woman working on laptop"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy">
              Bring structure and trust to how credit works.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Give businesses the confidence to extend credit, and people the
              clarity to manage and repay it.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy">
              Safer, more accessible credit across Africa.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A continent where credit is easier to extend, easier to manage,
              and easier to repay - starting with Nigeria.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
              How We Got Here
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built from the ground up.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-navy-foreground/80">
            <p>
              In Nigeria&rsquo;s informal economy, credit is the language of
              relationships. Traders sell on credit to loyal customers.
              Wholesalers supply retailers on trust. Cooperatives lend to
              members. It&rsquo;s how business gets done.
            </p>
            <p>
              But when payment doesn&rsquo;t come, most businesses have no
              system to deal with it. A battered notebook. An awkward feeling
              about asking. A growing tally of what&rsquo;s been written off.
            </p>
            <p className="text-navy-foreground">
              We went into Nigerian markets and listened. What we built is a
              direct response to what they told us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Founder Statement
          </p>
          <blockquote className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              &ldquo;We listened to the real pain - not the theory of credit
              management, but the lived reality of someone who has ₦500,000
              outstanding and doesn&rsquo;t know how to get it back without
              damaging a relationship they&rsquo;ve built over years.
            </p>
            <p className="font-medium text-navy">
              Because in this market, credit isn&rsquo;t just financial.
              It&rsquo;s personal.&rdquo;
            </p>
          </blockquote>
          <footer className="mt-8">
            <p className="text-base font-semibold text-navy">Ifeanyi Aliandu</p>
            <p className="text-sm text-muted-foreground">Founder &amp; CEO, OnCRE</p>
          </footer>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-brand-tint py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container-page grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              For Investors
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Backing the infrastructure of Nigerian credit.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              We&rsquo;re building the credit control layer for a market that
              moves trillions of naira every year - almost entirely without the
              tools to manage it properly. If you see the opportunity,
              we&rsquo;d love to talk.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-brand"
            >
              Get in Touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
