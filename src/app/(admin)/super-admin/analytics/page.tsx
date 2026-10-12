import { getSuperAdminAnalytics } from "@/app/actions/analytics";
import { SuperAdminAnalyticsClient } from "./SuperAdminAnalyticsClient";

export default async function SuperAdminAnalyticsPage() {
  try {
    const data = await getSuperAdminAnalytics({ dateRange: "30d" });

    return <SuperAdminAnalyticsClient initialData={data} />;
  } catch (error: any) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-base font-bold text-red-600 dark:text-red-400">Access Restricted</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{error?.message || "Super Admin access required."}</p>
      </div>
    );
  }
}
