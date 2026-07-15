import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
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

function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");

  return (
    <div className="flex flex-col">
      <Link to="/dashboard" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-brand">
        <ArrowLeft className="h-4 w-4" />
        Back dashboard
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-navy">Account settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">youremail@gmail.com</p>
      </div>

      <DashboardTabs />

      <div className="mt-2 w-full rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm">
        {/* Sub-tabs */}
        <div className="mb-10 flex w-fit rounded-lg border border-border bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("profile")}
            className={cn(
              "rounded-md px-10 py-2 text-sm font-medium transition-colors",
              activeTab === "profile"
                ? "bg-blue-50 text-brand border border-brand/20 shadow-sm"
                : "text-muted-foreground hover:bg-gray-50 hover:text-navy"
            )}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={cn(
              "rounded-md px-10 py-2 text-sm font-medium transition-colors",
              activeTab === "password"
                ? "bg-blue-50 text-brand border border-brand/20 shadow-sm"
                : "text-muted-foreground hover:bg-gray-50 hover:text-navy"
            )}
          >
            Password
          </button>
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          {activeTab === "profile" ? (
            <form className="grid gap-6 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <Field label="Full Name" required>
                <input
                  type="text"
                  defaultValue="Precious Ajonode"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
              <Field label="Phone Numbe" required>
                <input
                  type="text"
                  defaultValue="09065292789"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
              <Field label="Registered Business Name" required>
                <input
                  type="text"
                  placeholder="Text input..."
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </Field>
              <Field label="Business Type" required>
                <div className="relative">
                  <select className="w-full appearance-none rounded-md border border-input bg-background px-4 py-3 pr-10 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20">
                    <option value="" disabled selected>Select</option>
                    <option value="llc">LLC</option>
                    <option value="sole">Sole Proprietorship</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Business Email" required>
                  <input
                    type="email"
                    placeholder="Text input..."
                    className="w-full sm:max-w-[calc(50%-12px)] rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>
              </div>

              <div className="mt-4 sm:col-span-2">
                <button
                  type="submit"
                  className="w-full sm:max-w-md rounded-md bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="max-w-md">
                <Field label="Current password" required>
                  <input
                    type="password"
                    placeholder="Text input..."
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>
              </div>
              <div className="max-w-md">
                <Field label="New password" required>
                  <input
                    type="password"
                    placeholder="Text input..."
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>
                <p className="mt-1.5 text-xs text-muted-foreground">Minimum 8 characters.</p>
              </div>
              <div className="max-w-md">
                <Field label="Confirm new password" required>
                  <input
                    type="password"
                    placeholder="Text input..."
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full sm:max-w-md rounded-md bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  Update password
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
