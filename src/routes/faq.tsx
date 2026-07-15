import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import faqLady from "@/assets/faq-lady.svg";
import faqGradientSvg from "@/assets/bg-gradient.svg";
import faqGradientPng from "@/assets/faq-gradient.png";
import faqVector from "@/assets/vector.svg";
import { PlusCircle, MinusCircle, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

const CATEGORIES = [
  "All",
  "Business Owners",
  "Recovery Questions",
  "Enterprise Questions",
  "General",
];

const FAQS = [
  {
    q: "How much does it cost?",
    a: "₦5,000 one-time setup fee for businesses. Recovery is commission-only, you pay nothing unless we recover your money. Enterprise pricing is custom, speak to our team.",
    category: "Business Owners",
  },
  {
    q: "Do my customers need to download anything?",
    a: "No. Reminders go out via WhatsApp and SMS. Your customers receive the message and reply. Nothing to install.",
    category: "General",
  },
  {
    q: "What if someone still refuses to pay?",
    a: "When reminders haven't worked, or when a debt is old enough that a reminder alone won't get a response, our recovery team steps in.",
    category: "Recovery Questions",
  },
  {
    q: "When if someone still refuses to pay?",
    a: "You can start with Recovery directly if you'd rather not handle any follow-up yourself.",
    category: "Enterprise Questions",
  },
  {
    q: "What if someone still refuses to pay?",
    a: "Our approach is always firm but professional and respectful.",
    category: "Recovery Questions",
  },
  {
    q: "When if someone still refuses to pay?",
    a: "Yes. NDPR-compliant and never shared with third parties.",
    category: "General",
  },
  {
    q: "What if someone still refuses to pay?",
    a: "Yes. We operate through WhatsApp and SMS, and we can serve businesses and debtors anywhere in Nigeria.",
    category: "Business Owners",
  },
];

function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1 relative overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="container-page pt-12 pb-8">
          <div className="relative rounded-[2.5rem] pt-16 px-10 md:px-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem]">
              {/* Using SVG gradient by default. Change to faqGradientPng to test the PNG version. */}
              <img
                src={faqGradientSvg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Full-width vector spanning across the screen */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 pointer-events-none">
              <img
                src={faqVector}
                alt=""
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
              <div className="pb-16 lg:pb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#060F2D] leading-[1.1] tracking-tight">
                  Got Questions? <br />
                  We've Got <br />
                  Answers.
                </h1>
                <p className="mt-6 text-lg text-[#444853] max-w-md">
                  Find what you need below. Can't see it? Reach us on WhatsApp
                  - we usually respond within a few hours.
                </p>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#1A44CA] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3b5998]/90"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="relative h-full flex items-end justify-end">
                <img
                  src={faqLady}
                  alt="FAQ Support"
                  className="object-contain object-bottom h-[450px] w-auto -mb-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ LISTING SECTION */}
        <section className="py-16">
          <div className="container-page max-w-4xl flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-navy">FAQ's</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Common question you may have
            </p>

            <div className="mt-8 flex w-full max-w-md items-center rounded-full bg-[#eff6ff] p-1">
              <input
                type="text"
                placeholder="Search Faq"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent px-5 py-2.5 text-sm outline-none placeholder:text-navy/40"
              />
              <button className="rounded-full bg-[#1e40af] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e40af]/90">
                Search
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-md px-5 py-2 text-xs font-medium transition-colors",
                    activeCategory === cat
                      ? "border border-[#1e40af] text-[#1e40af] bg-[#eff6ff]"
                      : "bg-[#f1f5f9] text-navy/70 hover:bg-[#e2e8f0]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-12 w-full space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} />
                ))
              ) : (
                <div className="py-12 text-navy/60">
                  No FAQs found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FINAL CTA */}
      {/* <section className="bg-[#030b20] py-24 text-center text-white border-b border-white/10">
        <div className="container-page max-w-2xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            READY TO STOP LOSING <br /> MONEY?
          </h2>
          <p className="mt-4 text-base text-white/70">
            Start today. Your first account takes less than two <br />
            minutes to set up.
          </p>
          <div className="mt-8">
            <Link
              to="/solutions/tracking"
              className="inline-flex items-center justify-center rounded-md bg-[#1e40af] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1e40af]/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section> */}

      <SiteFooter />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-[#f8fafc] px-2">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-navy">{q}</span>
        {open ? (
          <MinusCircle className="size-5 shrink-0 text-navy/60 stroke-[1.5]" />
        ) : (
          <PlusCircle className="size-5 shrink-0 text-navy/60 stroke-[1.5]" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 text-left">
          <div className="rounded-xl bg-white p-6 text-sm text-navy/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-black/[0.03]">
            {a}
          </div>
        </div>
      )}
    </div>
  );
}
