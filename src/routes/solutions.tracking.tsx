import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import trackingImg from "@/assets/tracking.jpg";
import visualPattern from "@/assets/visual-pattern.svg";
import {
  ArrowRight,
  Check,
  ClipboardList,
  BellRing,
  BarChart3,
  Scale,
} from "lucide-react";

import fram1 from "@/assets/fram1.svg";
import fram2 from "@/assets/fram2.svg";
import fram3 from "@/assets/fram3.svg";
import fram4 from "@/assets/fram4.svg";
import step1 from "@/assets/step1.svg";
import step2 from "@/assets/step2.svg";
import step3 from "@/assets/step3.svg";
import step4 from "@/assets/step4.svg";
import retailer from "@/assets/retailer.svg";
import market from "@/assets/market.svg";
import wholesales from "@/assets/wholesales.svg";
import { useRegisterHero } from "@/lib/hero-context";


export const Route = createFileRoute("/solutions/tracking")({
  head: () => ({
    meta: [
      { title: "Credit Tracking & Automated Reminders | OnCRE" },
      {
        name: "description",
        content:
          "Track who owes you and get paid without the chase. One system to record credit, send automatic WhatsApp reminders, and always know who still owes you.",
      },
      { property: "og:title", content: "OnCRE - Tracking & Reminders" },
      {
        property: "og:description",
        content:
          "Record credit sales. Send automatic reminders. Get paid before it becomes a recovery problem.",
      },
    ],
  }),
  component: TrackingPage,
});

function TrackingPage() {
  useRegisterHero({
    backgroundColor: "#E5F1FF",
    backgroundImage: visualPattern,
    theme: "light",
  });
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden -mt-20 pt-20" style={{ backgroundColor: "#E5F1FF" }}>
        <div
          aria-hidden
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container-page grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Tracking &amp; Reminders
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Track who owes you. Get paid without the chase.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              One simple system to record credit, send automatic reminders,
              and always know who still owes you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-navy"
              >
                Get Started - ₦5,000 <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:bg-background"
              >
                See how it works
              </Link>
            </div>
          </div>


          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand/25 blur-2xl" aria-hidden />
            <div className="relative grid grid-cols-2 gap-3">
              <div
                className="aspect-[4/3] overflow-hidden"
                style={{ borderRadius: "3rem 1rem 2rem 1rem" }}
              >
                <img
                  src={fram3}
                  alt="Merchant using phone"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={fram4}
                  alt="Retailer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={fram1}
                  alt="Nigerian shop owner"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-full">
                <img
                  src={fram2}
                  alt="Pharmacy owner"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={trackingImg}
              alt="Business owner tracking credit on a phone"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div> */}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              The Problem
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Sound familiar?
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Customers owe you money and you've lost track of who, how much, and when.",
              "You feel uncomfortable asking for payment, so you keep delaying.",
              "Your records are scattered across notebooks, phone notes, and WhatsApp threads.",
              "Unpaid credit is affecting what you can buy and what you can pay.",
            ].map((p, i) => (
              <div
                key={p}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="text-xs font-semibold text-brand">0{i + 1}</div>
                <p className="mt-3 text-base leading-relaxed text-navy">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-brand-tint py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              The Solution
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              One place for everything you&rsquo;re owed.
            </h2>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              OnCRE records every credit sale and sends professional payment
              reminders to your customers via SMS and WhatsApp automatically.
              No awkward conversations. No manual follow-up. No lost records.
            </p>
            <p className="font-medium text-navy">
              You stay focused on your business. OnCRE handles the reminders.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold text-navy sm:text-4xl">
            Built for every business that sells on credit.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Shops & Retailers",
                body: "Track what your regulars owe and get automatic reminders sent when payment is due. No awkward asking required.",
                img: retailer,
              },
              {
                title: "Market Traders",
                body: "Replace the notebook. OnCRE works on WhatsApp - the same app your customers already use every day.",
                img: market,
              },
              {
                title: "Wholesalers & Distributors",
                body: "Monitor large outstanding balances across multiple buyers. Follow up professionally at scale, without damaging supply relationships.",
                img: wholesales,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group flex flex-col rounded-2xl border border-border bg-navy-foreground/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-grow">{c.body}</p>
                {c.img && (
                  <div className="mt-6 flex justify-center overflow-hidden rounded-[20px]">
                    <img src={c.img} alt={c.title} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-navy py-24 text-navy-foreground">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Here&rsquo;s how OnCRE works.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                // icon: <ClipboardList className="size-6" />,
                icon: step1,
                title: "Record",
                body: "Add a customer's name, number, and amount owed in under two minutes - or send it to our WhatsApp bot.",
              },
              {
                // icon: <BellRing className="size-6" />,
                icon: step2,
                title: "Remind",
                body: "OnCRE automatically sends a professional reminder when payment is due. No input from you.",
              },
              {
                // icon: <BarChart3 className="size-6" />,
                icon: step3,
                title: "Monitor",
                body: "See who has paid, who is overdue, and your full outstanding balance, anytime.",
              },
              {
                // icon: <Scale className="size-6" />,
                icon: step4,
                title: "Decide",
                body: "Use payment history to decide who gets credit and who pays upfront next time.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6"
              >
                <img src={s.icon} alt={s.title} className="size-11" />

                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What you gain.
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              "Never forget a debt - every credit sale is captured.",
              "Save time - reminders send themselves.",
              "Protect relationships - professional reminders, no awkwardness.",
              "Get paid faster - timely reminders mean faster payments.",
              "Make smarter credit decisions over time.",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-navy">
                <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Start tracking in minutes.
          </h2>
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
