import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import visualPattern from "@/assets/visual-pattern.svg";
import { useRegisterHero } from "@/lib/hero-context";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact OnCRE | Talk to Our Team" },
      {
        name: "description",
        content:
          "Get in touch with OnCRE for credit tracking, debt recovery, or enterprise partnership enquiries. WhatsApp or email - we respond within hours.",
      },
      { property: "og:title", content: "Contact OnCRE" },
      { property: "og:description", content: "Talk to the OnCRE team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
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
        <div className="relative z-10 container-page max-w-3xl py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Get in touch.</h1>
          <p className="mt-4 max-w-xl text-lg text-navy-foreground/70">
            Questions, enquiries, or ready to start - we&rsquo;re here. Fill in
            the form and we&rsquo;ll reach out within a few hours on business
            days.
          </p>
          <p className="mt-2 text-sm italic text-navy-foreground/60">
            Prefer WhatsApp? Message us directly at the number on this page.
          </p>
        </div>
      </section>





      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" required>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
              <Field label="Business name">
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
              <Field label="Phone / WhatsApp" required>
                <input
                  required
                  type="tel"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="I'm reaching out about" required>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>Tracking &amp; Reminders</option>
                  <option>Recovery for Business Owners</option>
                  <option>Enterprise Recovery (FI / Cooperative)</option>
                  <option>Investor / Partnership</option>
                  <option>General enquiry</option>
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Tell us more (optional)">
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-navy"
            >
              <Send className="size-4" />
              {sent ? "Message received" : "Send Message"}
            </button>

            <p className="mt-4 text-xs text-muted-foreground">
              By submitting this form you agree to be contacted by the OnCRE
              team via WhatsApp or email.
            </p>
          </form>

          <aside className="space-y-4">
            <ContactCard
              icon={<Mail className="size-5" />}
              label="Email"
              value="contact@oncre.com"
            />
            <ContactCard
              icon={<MessageCircle className="size-5" />}
              label="WhatsApp"
              value="+234 813 XXX XXXX"
            />
            <ContactCard
              icon={<MapPin className="size-5" />}
              label="Based in"
              value="Lagos, Nigeria"
            />
            <div className="rounded-2xl border border-border bg-brand-tint p-6">
              <p className="text-sm font-semibold text-navy">Response time</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We answer WhatsApp and email within a few hours on business
                days. Enterprise enquiries: one business day.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
      <div className="grid size-10 place-items-center rounded-lg bg-brand-tint text-brand">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-base font-medium text-navy">{value}</p>
      </div>
    </div>
  );
}
