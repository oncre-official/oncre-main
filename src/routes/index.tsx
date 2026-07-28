import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BellRing,
  ShieldCheck,
  Building2,
  ArrowUpRight,
  Play,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  MinusCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OnCreMark } from "@/components/OnCreLogo";
import { cn } from "@/lib/utils";
import { useRegisterHero } from "@/lib/hero-context";
import fram1 from "@/assets/fram1.svg";
import fram2 from "@/assets/fram2.svg";
import fram3 from "@/assets/fram3.svg";
import fram4 from "@/assets/fram4.svg";
import visualPattern from "@/assets/visual-pattern.svg";
import problem1 from "@/assets/problem.svg";
import problem2 from "@/assets/problem2.svg";
import problem3 from "@/assets/problem3.svg";
import problem4 from "@/assets/problem4.svg";
// import problem1 from "@/assets/problem_1_phone_1783350370819.png";
// import problem2 from "@/assets/problem_2_records_1783350383687.png";
// import problem3 from "@/assets/problem_3_invoices_1783350393330.png";
// import problem4 from "@/assets/problem_4_time_1783350403168.png";
import step1 from "@/assets/step1.svg";
import step2 from "@/assets/step2.svg";
import step3 from "@/assets/step3.svg";
import step4 from "@/assets/step4.svg";
import videoThumnail from "@/assets/thumbnail.png";
// import heroImg from "@/assets/hero.jpg";
// import storyShopOwner from "@/assets/story-shop-owner.jpg";
// import storyPharmacy from "@/assets/story-pharmacy.jpg";
// import storyRetailer from "@/assets/story-retailer.jpg";

import { BLOG_POSTS } from "@/lib/blog-data";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useRegisterHero({
    backgroundColor: "#001D4A",
    backgroundImage: visualPattern,
    theme: "dark",
  });
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#001D4A] text-white -mt-20 pt-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-page relative grid gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 roundedfull border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-soft">
              <OnCreMark className="size-3.5 text-brand-soft" />
              Credit infrastructure for Nigeria
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Track Who Owes You.
              <br />
              <span className="text-blue-400">Get Your Money Back</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              OnCRE helps Nigerian businesses track what customers owe on goods
              sold on credit and recover it when they don't pay. For lenders and
              financial institutions, we bring structure and scale to delinquent
              loan portfolios.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/solutions/tracking"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Start Tracking My Credit
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/solutions/recovery-business"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-foreground/25 px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                Recover My Money
              </Link>
            </div>

            {/* <p className="mt-4 text-sm text-navy-foreground/60">
              Financial institution?{" "}
              <Link
                to="/solutions/recovery-enterprise"
                className="font-medium text-brand-soft underline-offset-4 hover:underline"
              >
                See Enterprise Recovery →
              </Link>
            </p> */}

            {/* Trust bar */}
            {/* <div className="mt-10 grid gap-3 border-t border-navy-foreground/10 pt-6 text-sm sm:grid-cols-3">
              {[
                "No recovery, no commission",
                "WhatsApp-verified process",
                "Built for Nigerian businesses",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-navy-foreground/85">
                  <Check className="size-4 text-brand-soft" />
                  {t}
                </div>
              ))}
            </div> */}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand/25 blur-2xl" aria-hidden />
            <div className="relative grid grid-cols-2 gap-3">
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
            </div>
          </div>
        </div>
      </section>


      {/* PROBLEMS */}

      <section className="border-b border-border bg-brand-tint py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              The Problem
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Unpaid credit is costing you.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { text: "Customers stop paying and stop responding", img: problem1 },
              { text: "Records are scattered. Following up feels awkward.", img: problem2 },
              { text: "Delinquent accounts pile up faster than you can chase them.", img: problem3 },
              { text: "Chasing debt yourself takes time you don't have.", img: problem4 },
            ].map((p, i) => (
              <div
                key={p.text}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
              >
                <div className="p-6 pb-6">
                  <div className="text-xs font-semibold text-brand">
                    0{i + 1}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-navy">
                    {p.text}
                  </p>
                </div>
                <div className="mt-auto aspect-video w-full overflow-hidden border-t border-border/50 bg-muted">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative overflow-hidden py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-page relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Solutions
              </p>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                Built for how you operate.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground md:mt-7">
              From tracking a single debtor to running recovery across a
              full loan portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <SolutionCard
              icon={<BellRing className="size-6" />}
              tag="For business owners"
              title="Tracking & Reminders"
              body="Record what customers owe and get paid before it becomes a recovery problem."
              to="/solutions/tracking"
              cta="Explore tracking"
            />
            <SolutionCard
              icon={<ShieldCheck className="size-6" />}
              tag="For business owners"
              title="Recovery for Business Owners"
              body="When customers stop paying for goods on credit, our team recovers it for you - no fee unless we succeed."
              to="/solutions/recovery-business"
              cta="Recover unpaid credit"
              emphasized
            />
            <SolutionCard
              icon={<Building2 className="size-6" />}
              tag="For financial institutions"
              title="Recovery for Financial Institutions"
              body="Structured, scalable recovery infrastructure for lenders and cooperatives managing delinquent loan portfolios."
              to="/solutions/recovery-enterprise"
              cta="See enterprise recovery"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-border bg-brand-tint py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Why OnCRE
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Better recovery means a better business.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "More Cash In. More Room for Growth.",
                body: "Every payment that comes back is money you can put back to work. More capital in the business, More stock to move and more credit to offer.",
              },
              {
                title: "Protect Trust While You Recover",
                body: "The people who owe you are often people you know. We follow up in a way that gets results without damaging the relationship.",
              },
              {
                title: "Focus on Your Business, Not Follow-Up",
                body: "You didn't start your business to chase debt. Hand it over to us and get back to what actually matters.",
              },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy leading-snug">{b.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
        <div className="container-page relative">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Simple. Structured. It works.
              </h2>
            </div>
            {/* <p className="max-w-md text-navy-foreground/70 md:mt-7">
              Businesses log what customers owe. OnCRE sends reminders. When
              customers still don&rsquo;t pay, our recovery team takes over.
            </p> */}
          </div>

          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {[
              { step: "Record", body: "Log what each customer owes in seconds.", icon: step1 },
              { step: "Remind", body: "Automatic reminders via WhatsApp & SMS.", icon: step2 },
              { step: "Recover", body: "Our team steps in when payments stall.", icon: step3 },
              { step: "Get Paid", body: "Funds settle to your account. Ledger stays clean.", icon: step4 },
            ].map((s) => (
              <li
                key={s.step}
                className="relative rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6"
              >
                <img
                  src={s.icon}
                  alt={s.step}
                  className="mb-4 h-[87px] w-auto"
                />
                <h3 className="mt-3 text-lg font-semibold">{s.step}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REAL RESULTS - quotes + video stories in one section */}
      <RealResultsSection />

      {/* BLOG */}
      <BlogSection />

      {/* FAQ */}
      <FaqSection />


      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-brand py-24 text-brand-foreground">

        <div className="container-page relative">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Ready to stop losing money?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-brand-foreground/85">
              Start today. Your first account takes less than two minutes to
              set up.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/solutions/tracking"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
              >
                Start Tracking My Credit
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/solutions/recovery-business"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-foreground/40 px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
              >
                Recover My Money
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SolutionCard({
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
      aria-label={`Learn more about ${title}`}
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
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <p
        className={
          "mt-3 flex-1 text-sm leading-relaxed " +
          (emphasized ? "text-navy-foreground/75" : "text-muted-foreground")
        }
      >
        {body}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        {cta}
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

/* ---------------- Real Results (quotes + video) ---------------- */

type VideoStory = {
  title: string;
  who: string;
  where: string;
  quote: string;
  poster?: string;
  videoUrl?: string;
};

const VIDEO_STORIES: VideoStory[] = [
  {
    title: "Recovered ₦1.2m written off",
    who: "Wholesale distributor",
    where: "Lagos",
    quote: "OnCRE recovered money I'd already written off.",
    poster:
      "https://img.youtube.com/vi/wshUOIBXjzk/maxresdefault.jpg",
    videoUrl: "https://youtu.be/wshUOIBXjzk",
  },
  /*
  {
    title: "From notebook chaos to one clean ledger",
    who: "Pharmacy owner",
    where: "Ibadan",
    quote: "Reminders go out automatically. I don't have to chase anyone.",
    poster:
      fram2,
  },
  {
    title: "Reminders that actually get replies",
    who: "Retailer",
    where: "Abuja",
    quote: "My customers reply to WhatsApp reminders - and they pay.",
    poster:
      fram3,
  },
  */
];

function RealResultsSection() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<VideoStory | null>(null);
  const story = VIDEO_STORIES[index];
  const go = (delta: number) =>
    setIndex((i) => (i + delta + VIDEO_STORIES.length) % VIDEO_STORIES.length);

  return (
    <section className="border-t border-border bg-brand-tint py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Real Results
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Real Nigerian businesses. Real recoveries.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground md:mt-7">
            Hear directly from the merchants and lenders using OnCRE to bring
            structure to their credit.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Quote side */}
          <div className="flex flex-col">
            <blockquote className="text-2xl font-semibold leading-snug text-navy sm:text-3xl">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              {story.who} · {story.where}
            </figcaption>

            {/* <div className="mt-auto flex items-center gap-3 pt-8">
              <button
                onClick={() => go(-1)}
                aria-label="Previous story"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-brand-tint"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next story"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-brand-tint"
              >
                <ChevronRight className="size-4" />
              </button>
              <div className="ml-3 flex items-center gap-1.5">
                {VIDEO_STORIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to story ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === index ? "w-6 bg-brand" : "w-1.5 bg-navy/20",
                    )}
                  />
                ))}
              </div>
            </div> */}
          </div>

          {/* Video card side */}
          <button
            onClick={() => setActive(story)}
            className="group relative overflow-hidden rounded-2xl border border-border bg-navy text-left text-navy-foreground shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="relative aspect-video w-full overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(60% 60% at 30% 30%, oklch(0.45 0.22 265) 0%, oklch(0.29 0.11 264) 70%)",
              }}
            >

              <img
                src={videoThumnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-background/95 text-brand shadow-lg transition-transform group-hover:scale-110">
                  <Play className="size-7 translate-x-0.5" fill="currentColor" />
                </span>
              </div>
              <div className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                {story.title}
              </div>
            </div>
          </button>
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-navy/80 p-6 backdrop-blur"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-navy text-navy-foreground shadow-2xl"
          >
            <div className="aspect-video w-full bg-black">
              {active.videoUrl ? (
                active.videoUrl.includes("youtu") ? (
                  <iframe
                    src={active.videoUrl.replace("youtu.be/", "www.youtube.com/embed/").replace("youtube.com/watch?v=", "youtube.com/embed/") + (active.videoUrl.includes("?") ? "&autoplay=1" : "?autoplay=1")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                ) : (
                  <video src={active.videoUrl} controls autoPlay className="h-full w-full" />
                )
              ) : (
                <div className="grid h-full w-full place-items-center text-navy-foreground/60">
                  Video coming soon
                </div>
              )}
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-base font-semibold">{active.title}</h3>
                <p className="text-sm text-navy-foreground/60">
                  {active.who} · {active.where}
                </p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="rounded-md border border-navy-foreground/20 px-4 py-2 text-sm hover:bg-navy-foreground/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- Blog ---------------- */

function BlogSection() {
  const [start, setStart] = useState(0);
  const visible = 3;
  const canPrev = start > 0;
  const canNext = start + visible < BLOG_POSTS.length;

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              From the OnCRE Blog
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Insights on credit, recovery, and building a business in Nigeria.
            </h2>
          </div>
          <div className="flex max-w-md flex-col gap-4 md:mt-7">
            <p className="text-muted-foreground">
              Practical guides and stories to help Nigerian businesses manage
              credit better.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 self-start rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Discover more stories
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {BLOG_POSTS.slice(start, start + visible).map((post) => (
            <Link
              key={post.title}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <article className="flex h-full flex-col">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-navy">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* <div className="mt-8 flex items-center justify-end gap-3">
          <button
            onClick={() => canPrev && setStart((s) => s - 1)}
            disabled={!canPrev}
            aria-label="Previous posts"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-brand-tint disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={() => canNext && setStart((s) => s + 1)}
            disabled={!canNext}
            aria-label="Next posts"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-navy transition-colors hover:bg-brand-tint disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
}


/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "What does OnCRE do for business owners?",
    a: "We help you track what customers owe on goods sold on credit, send automatic reminders when payment is due, and recover overdue debts when reminders aren't enough.",
  },
  {
    q: "How much does it cost?",
    a: "₦5,000 one-time activation fee. This gives you full access to your Merchant Portal including Tracking & Reminders and the ability to submit recovery cases. Recovery fees apply on results only.",
  },
  {
    q: "Do my customers need to download anything?",
    a: "No. Reminders go out via WhatsApp and SMS. Your customers receive the message and reply. Nothing to install.",
  },
  {
    q: "When should I use Recovery?",
    a: "When reminders haven't worked, or when a debt is old enough that a reminder alone won't get a response. You can also start with Recovery directly if you'd rather not handle any follow-up yourself.",
  },
  {
    q: "How is the recovery fee structured?",
    a: "For businesses: a percentage of the recovered amount, confirmed before your case begins. No recovery, no charge. For enterprises: pricing is agreed upfront with our team.",
  },
  {
    q: "Will this damage my relationship with the customer?",
    a: "Our approach is always firm but professional and respectful. Many business owners find a structured third party actually preserves the relationship better than chasing personally.",
  },
  {
    q: "What's different about enterprise recovery?",
    a: "Dedicated recovery desk, bulk CSV case submission, structured reporting, and pricing agreed upfront. Built for portfolios, not individual cases.",
  },
  {
    q: "Is debtor data handled confidentially?",
    a: "Yes. NDPR-compliant and never shared with third parties.",
  },
  {
    q: "Is OnCRE available across Nigeria?",
    a: "Yes. We operate through WhatsApp and SMS, and we can serve businesses and debtors anywhere in Nigeria.",
  },
];


function FaqSection() {
  return (
    <section id="faqs" className="border-b border-border bg-brand-tint py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Answers to the questions we hear most.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Can&rsquo;t find what you&rsquo;re looking for?{" "}
            <Link to="/contact" className="font-medium text-brand underline-offset-4 hover:underline">
              Talk to our team.
            </Link>
          </p>
        </div>

        <div className="w-full space-y-4">
          {FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
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

