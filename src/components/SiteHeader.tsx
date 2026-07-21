import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Menu, X, ChevronDown, BellRing, ShieldCheck, ChevronRight,
  Building2,
} from "lucide-react";
import { OnCreLogo } from "./OnCreLogo";
import { cn } from "@/lib/utils";
import { useHeroConfig } from "@/lib/hero-context";

const trackingProduct = {
  to: "/solutions/tracking",
  label: "Tracking & Reminders",
  desc: "Record credit given and auto-send reminders.",
  icon: BellRing,
} as const;

const recoverySubItems = [
  {
    to: "/solutions/recovery-business",
    label: "Recovery for Business",
    desc: "Commission-only recovery for merchants & traders.",
    icon: ShieldCheck,
  },
  {
    to: "/solutions/recovery-enterprise",
    label: "Enterprise Recovery",
    desc: "Structured recovery for lenders & cooperatives.",
    icon: Building2,
  },
] as const;

/** True while scrolled within the hero zone (~80vh from top) */
function useHeroScrolled() {
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const check = () => setInHero(window.scrollY < window.innerHeight * 0.8);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return inHero;
}

export function SiteHeader() {
  const heroConfig = useHeroConfig();
  const inHero = useHeroScrolled();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [recoveryOpen, setRecoveryOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  // Close products dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
        setRecoveryOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Active = page registered a hero config AND we're still scrolled in the hero zone
  const active = !!heroConfig && inHero;
  const dark = active && heroConfig!.theme === "dark";

  // Header background: transparent when active so the hero section behind it shows through
  const headerStyle: React.CSSProperties = active
    ? {
      backgroundColor: "transparent",
    }
    : {};

  const linkBase = cn(
    "text-sm transition-colors duration-300",
    dark
      ? "text-white/80 hover:text-white"
      : "text-muted-foreground hover:text-navy",
  );
  const linkActive = dark ? "text-white font-medium" : "text-navy font-medium";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        active ? "border-transparent" : "border-[#E5F1FF]/60 bg-[#E5F1FF]/90 backdrop-blur",
      )}
      style={headerStyle}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "transition-colors duration-300",
            dark ? "text-white" : "text-navy",
          )}
          aria-label="OnCRE home"
        >
          <OnCreLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className={linkBase}
            activeProps={{ className: linkActive }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={linkBase}
            activeProps={{ className: linkActive }}
          >
            About Us
          </Link>

          {/* Products dropdown */}
          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1 text-sm transition-colors duration-300",
                dark
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-navy",
              )}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  productsOpen && "rotate-180",
                )}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-5">
                <div className="flex rounded-2xl border border-border bg-background shadow-2xl overflow-hidden" style={{ minWidth: "560px" }}>

                  {/* ── LEFT COLUMN: category list ── */}
                  <div className="w-52 shrink-0 border-r border-border/60 p-3 flex flex-col gap-0.5">
                    {/* Tracking */}
                    <Link
                      to={trackingProduct.to}
                      onClick={() => setProductsOpen(false)}
                      onMouseEnter={() => setRecoveryOpen(false)}
                      className={cn(
                        "group rounded-xl px-4 py-3 transition-colors cursor-pointer",
                        !recoveryOpen ? "bg-brand-tint" : "hover:bg-brand-tint/60",
                      )}
                    >
                      <div className="text-base font-semibold text-navy">
                        {trackingProduct.label}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        {trackingProduct.desc}
                      </div>
                    </Link>

                    {/* Debt Recovery */}
                    <div
                      onMouseEnter={() => setRecoveryOpen(true)}
                      className={cn(
                        "rounded-xl px-4 py-3 transition-colors cursor-default",
                        recoveryOpen ? "bg-brand-tint" : "hover:bg-brand-tint/60",
                      )}
                    >
                      <div className="text-base font-semibold text-navy flex items-center justify-between">
                        Debt Recovery
                        <ChevronRight className="size-3.5 text-muted-foreground" />
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        For businesses &amp; financial institutions.
                      </div>
                    </div>
                  </div>

                  {/* ── RIGHT COLUMN: sub-items ── */}
                  <div className="flex-1 p-4 flex flex-col gap-1">
                    {!recoveryOpen ? (
                      /* Tracking detail */
                      <div className="flex flex-col justify-center h-full px-2 py-4">
                        <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600 w-fit mb-3">
                          <BellRing className="size-5" />
                        </div>
                        <p className="text-sm font-semibold text-navy">Tracking &amp; Reminders</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                          Record every credit sale and let OnCRE send automatic WhatsApp reminders - no manual follow-up needed.
                        </p>
                        <Link
                          to={trackingProduct.to}
                          onClick={() => setProductsOpen(false)}
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-navy transition-colors"
                        >
                          Explore tracking <ChevronRight className="size-3" />
                        </Link>
                      </div>
                    ) : (
                      /* Recovery sub-items */
                      recoverySubItems.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => { setProductsOpen(false); setRecoveryOpen(false); }}
                            className="group flex items-start gap-4 rounded-xl p-3 hover:bg-brand-tint transition-colors"
                          >
                            <div className="rounded-lg bg-blue-50 p-2 text-blue-600 mt-0.5 shrink-0">
                              <SubIcon className="size-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-navy group-hover:text-blue-600 flex items-center gap-1">
                                {sub.label}
                                <ChevronRight className="size-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                              </div>
                              <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })
                    )}
                  </div>

                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={linkBase}
            activeProps={{ className: linkActive }}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className={cn(
              "rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300",
              dark
                ? "border border-white/30 bg-white/10 text-white hover:bg-white/20"
                : "bg-brand text-brand-foreground hover:bg-navy",
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-md p-2 transition-colors duration-300 lg:hidden",
            dark ? "text-white" : "text-navy",
          )}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-t border-border/60 bg-background lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="container-page flex flex-col gap-1 py-3">
          <MobileLink to="/" onClose={() => setOpen(false)} exact>
            Home
          </MobileLink>
          <MobileLink to="/about" onClose={() => setOpen(false)}>
            About Us
          </MobileLink>
          <div className="mt-1 px-3 pt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Products
          </div>
          <MobileLink to={trackingProduct.to} onClose={() => setOpen(false)}>
            {trackingProduct.label}
          </MobileLink>
          <div className="mt-1 px-3 pt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Debt Recovery
          </div>
          {recoverySubItems.map((p) => (
            <MobileLink key={p.to} to={p.to} onClose={() => setOpen(false)}>
              {p.label}
            </MobileLink>
          ))}
          <MobileLink to="/contact" onClose={() => setOpen(false)}>
            Contact Us
          </MobileLink>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-md bg-brand px-3 py-2 text-center text-sm font-semibold text-brand-foreground"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileLink({
  to,
  children,
  onClose,
  exact = false,
}: {
  to: string;
  children: React.ReactNode;
  onClose: () => void;
  exact?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="rounded-md px-3 py-2 text-sm text-navy hover:bg-brand-tint"
      activeProps={{ className: "bg-brand-tint font-medium" }}
      activeOptions={{ exact }}
    >
      {children}
    </Link>
  );
}
