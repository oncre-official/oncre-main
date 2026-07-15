import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { OnCreLogo } from "@/components/OnCreLogo";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-white px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 text-brand">
              <OnCreLogo />
            </div>
          </Link>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="relative hidden w-full max-w-xs sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            
            <div className="flex items-center gap-2 rounded-full border border-border bg-white p-1 pr-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B5E20] text-white font-medium text-xs">
                PA
              </div>
              <span className="text-sm font-medium text-navy hidden sm:block">Precious Adonija</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* We leave the title and tabs to the child routes because Settings has a different title ("Account settings") */}
        <Outlet />
      </main>
    </div>
  );
}
