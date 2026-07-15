import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function DashboardTabs() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const tabs = [
    { label: "Recovery Dashboard", path: "/dashboard" },
    { label: "Settings", path: "/dashboard/settings" },
    { label: "Notifications", path: "/dashboard/notifications" },
  ];

  return (
    <div className="mb-8 inline-flex items-center rounded-lg bg-gray-100 p-1">
      {tabs.map((tab) => {
        // EXACT match for /dashboard so it doesn't stay active on sub-routes
        const isActive = tab.path === "/dashboard" 
          ? currentPath === "/dashboard" 
          : currentPath.startsWith(tab.path);

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-white text-navy shadow-sm"
                : "text-muted-foreground hover:text-navy hover:bg-gray-200/50"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
