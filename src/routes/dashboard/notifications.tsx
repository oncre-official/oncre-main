import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/notifications")({
  component: NotificationsPage,
});

const MOCK_NOTIFICATIONS = [
  { id: 1, type: "Note", name: "Adeaza John", action: "Moved to Phase 2", date: "07/06/2026, 22:29:55", caseId: "case-01" },
  { id: 2, type: "Note", name: "Adeaza John", action: "Moved to Phase 2", date: "07/06/2026, 22:29:55", caseId: "case-01" },
  { id: 3, type: "Note", name: "Adeaza John", action: "Moved to Phase 2", date: "07/06/2026, 22:29:55", caseId: "case-01" },
  { id: 4, type: "Note", name: "Adeaza John", action: "Moved to Phase 2", date: "07/06/2026, 22:29:55", caseId: "case-01" },
];

function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "unread" | "payment" | "outreach">("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "unread", label: "Unread" },
    { id: "payment", label: "Payment" },
    { id: "outreach", label: "Outreach" },
  ] as const;

  return (
    <div className="flex flex-col">
      <Link to="/dashboard" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-brand">
        <ArrowLeft className="h-4 w-4" />
        Back dashboard
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-navy">Notifications</h1>
        <p className="mt-1 text-sm text-muted-foreground">Activity across all your cases</p>
      </div>

      <DashboardTabs />

      <div className="mt-2 w-full rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm flex flex-col items-center">
        {/* Sub-tabs */}
        <div className="mb-10 flex w-fit flex-wrap justify-center gap-2 rounded-lg border border-border bg-white p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={cn(
                "rounded-md px-6 sm:px-10 py-2 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-blue-50 text-brand border border-brand/20 shadow-sm"
                  : "text-muted-foreground hover:bg-gray-50 hover:text-navy"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="w-full max-w-3xl flex flex-col gap-4">
          {MOCK_NOTIFICATIONS.map((notif) => (
            <div key={notif.id} className="flex gap-4 rounded-xl border border-border bg-[#F8FAFC]/50 p-5 transition-colors hover:bg-[#F8FAFC]">
              <div className="mt-0.5 text-muted-foreground">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-navy">
                  {notif.type} - <span className="font-medium text-muted-foreground">{notif.name}</span>
                </p>
                <p className="mt-1 text-sm text-navy">{notif.action}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{notif.date}</span>
                  <span className="rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {notif.caseId}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
