import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import visualPattern from "@/assets/visual-pattern.svg";
import { useRegisterHero } from "@/lib/hero-context";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");

  useRegisterHero({
    backgroundColor: "#ffffff",
    backgroundImage: visualPattern,
    theme: "light",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <section className="relative flex-1 flex flex-col items-center justify-center -mt-20 pt-20" style={{ backgroundColor: "#ffffff" }}>
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10 w-full max-w-[440px] px-6 py-12">
          {/* Header */}
          <div className="mb-8 text-left sm:text-center">
            <h1 className="text-3xl sm:text-[32px] font-bold text-navy">Welcome back</h1>
            <p className="mt-2 text-[15px] text-muted-foreground">
              Sign in to your Oncre account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full Name" required>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Precious Ajonode"
                className="w-full rounded-md border border-input bg-background px-4 py-3.5 text-[15px] outline-none transition-all placeholder:text-muted-foreground/60 focus:border-brand focus:ring-4 focus:ring-brand/10"
              />
            </Field>

            <Field label="Registered Business Name" required>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Text input..."
                className="w-full rounded-md border border-input bg-background px-4 py-3.5 text-[15px] outline-none transition-all placeholder:text-muted-foreground/60 focus:border-brand focus:ring-4 focus:ring-brand/10"
              />
            </Field>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-brand py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-brand/90 focus:outline-none focus:ring-4 focus:ring-brand/20"
            >
              Sign in
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to Oncre?{" "}
            <Link to="/signup" className="font-semibold text-brand hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
