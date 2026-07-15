import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { 
  Calendar, Settings as SettingsIcon, Download, Search, ChevronDown,
  DollarSign, Users, CreditCard, Activity, ArrowUpRight, Check, X
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardPage,
});

const MOCK_METRICS = [
  { label: "Total Outstanding", value: "$45,231.89", subtext: "3 cases", icon: DollarSign },
  { label: "Active Recovery", value: "+2350", subtext: "3 cases", icon: Users },
  { label: "Recovered", value: "+12,234", subtext: "+19% from last month", icon: CreditCard },
  { label: "Recovery Rate", value: "+573", subtext: "Of total owed", icon: Activity },
];

const MOCK_CASES = [
  { id: "Case-09", name: "John Leahn", amount: "NGN 70,0000", days: "2D", phase: "phase1" },
  { id: "Case-10", name: "Adeaza John", amount: "NGN 70,0000", days: "2D", phase: "phase1" },
  { id: "Case-11", name: "Adeaza John", amount: "NGN 70,0000", days: "2D", phase: "phase1" },
];

function DashboardPage() {
  const [selectedCase, setSelectedCase] = useState<any | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {/* Header Actions */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy">Recovery dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">0 cases in your pipeline</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-navy hover:bg-gray-50">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>13 June 2026 - 14 July 2026</span>
          </button>
          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-navy hover:bg-gray-50">
            <SettingsIcon className="h-4 w-4 text-muted-foreground" />
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-navy hover:bg-gray-50">
            <Download className="h-4 w-4 text-muted-foreground" />
            <span>Export</span>
          </button>
          <button className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand/90">
            Add cases
          </button>
        </div>
      </div>

      <DashboardTabs />

      {/* Metrics Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MOCK_METRICS.map((metric, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-navy">{metric.label}</span>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-navy">{metric.value}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{metric.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by case, debtor, email..."
            className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy hover:bg-gray-50">
            <span>All phases</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy hover:bg-gray-50">
            <span>Any Amount</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy hover:bg-gray-50">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Day overdue</span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex w-full overflow-x-auto pb-4 gap-4 snap-x">
        {/* Phase 1 */}
        <div className="min-w-[300px] flex-1 rounded-xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
          <div className="mb-4 flex items-center justify-between px-1">
            <div>
              <h3 className="font-semibold text-navy">Phase 1</h3>
              <p className="text-xs text-muted-foreground">Friendly outreach</p>
            </div>
            <div className="text-right">
              <span className="font-semibold text-navy">01</span>
              <p className="text-[10px] text-muted-foreground uppercase">NGN300k</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {MOCK_CASES.map((c, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedCase(c)}
                className="group cursor-pointer rounded-xl border border-border bg-white p-4 shadow-sm transition-all hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{c.id}</p>
                    <p className="mt-0.5 font-medium text-navy">{c.name}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <p className="font-bold text-navy">{c.amount}</p>
                  <div className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {c.days}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div className="min-w-[300px] flex-1 rounded-xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
          <div className="mb-4 flex items-center justify-between px-1">
            <div>
              <h3 className="font-semibold text-navy">Phase 2</h3>
              <p className="text-xs text-muted-foreground">Escalation</p>
            </div>
            <div className="text-right">
              <span className="font-semibold text-navy">01</span>
              <p className="text-[10px] text-muted-foreground uppercase">NGN300k</p>
            </div>
          </div>
          <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
            No cases
          </div>
        </div>

        {/* Phase 3 */}
        <div className="min-w-[300px] flex-1 rounded-xl bg-[#FFF5F5] p-4 border border-[#FFE4E6]">
          <div className="mb-4 flex items-center justify-between px-1">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-semibold text-navy">Phase 3</h3>
                <span className="text-red-500 text-[10px]">⚠️</span>
              </div>
              <p className="text-xs text-muted-foreground">Final notice</p>
            </div>
            <div className="text-right">
              <span className="font-semibold text-navy">01</span>
              <p className="text-[10px] text-muted-foreground uppercase">NGN300k</p>
            </div>
          </div>
          <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
            No cases
          </div>
        </div>

        {/* Resolved */}
        <div className="min-w-[300px] flex-1 rounded-xl bg-[#F0FDF4] p-4 border border-[#DCFCE7]">
          <div className="mb-4 flex items-center justify-between px-1">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-semibold text-navy">Resolved</h3>
                <Check className="h-3 w-3 text-green-600 bg-green-200 rounded-full p-[1px]" />
              </div>
              <p className="text-xs text-muted-foreground">Recovered or closed</p>
            </div>
            <div className="text-right">
              <span className="font-semibold text-navy">01</span>
              <p className="text-[10px] text-muted-foreground uppercase">NGN300k</p>
            </div>
          </div>
          <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
            No cases
          </div>
        </div>
      </div>

      {/* Case Details Drawer (Simplified Overlay) */}
      {selectedCase && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-navy/20 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCase(null)}
          />
          <div className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-[500px] overflow-y-auto border-l border-border bg-white shadow-2xl animate-in slide-in-from-right">
            <div className="flex items-center justify-between border-b border-border p-6">
              <div>
                <p className="text-xs text-muted-foreground">{selectedCase.id}</p>
                <h2 className="text-xl font-bold text-navy">{selectedCase.name}</h2>
                <p className="text-sm text-muted-foreground">Johkemi@gmail.com</p>
              </div>
              <button 
                onClick={() => setSelectedCase(null)}
                className="rounded-full border border-border p-2 hover:bg-gray-50"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Amount Owed</p>
                  <p className="text-2xl font-bold text-navy">{selectedCase.amount}</p>
                </div>
                <div className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  2D in Pipeline
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground">Invoice</p>
                  <p className="mt-1 font-semibold text-navy">Inv 03</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground">Invoice Date</p>
                  <p className="mt-1 font-semibold text-navy">2026-06-15</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground">Current Phase</p>
                  <p className="mt-1 font-semibold text-navy">Phase 1</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground">Last Activity</p>
                  <p className="mt-1 font-semibold text-navy">2026-06-15</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs text-muted-foreground mb-3">Move to phase</p>
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full bg-navy px-4 py-2 text-xs font-medium text-white">Phase 1</button>
                  <button className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-navy hover:bg-gray-50">Phase 2</button>
                  <button className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-navy hover:bg-gray-50">Phase 3</button>
                  <button className="rounded-full bg-[#1B5E20] px-4 py-2 text-xs font-medium text-white">Resolved</button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-muted-foreground">Case Timeline</p>
                  <p className="text-xs font-medium text-navy">4 events</p>
                </div>
                
                <div className="relative border-l border-border ml-2 pl-6 py-2 space-y-6">
                  {/* Timeline items */}
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">07/06/2026, 20:49:34 · Moved to phase 2</p>
                      <p className="text-sm font-medium text-navy mt-1">SMS sent to the user</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs text-muted-foreground mb-2">Add a note</p>
                <textarea 
                  placeholder="Spoke with debtor...promise to pay on Monday"
                  className="w-full min-h-[100px] rounded-xl border border-input p-4 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <button className="mt-4 rounded-md bg-brand px-6 py-2 text-sm font-medium text-white hover:bg-brand/90">
                  Save Note
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
