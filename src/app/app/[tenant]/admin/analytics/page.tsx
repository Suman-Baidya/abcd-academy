import { notFound } from "next/navigation";
import { getFranchiseAnalytics } from "@/app/actions/analytics";
import { FranchiseAnalyticsClient } from "./FranchiseAnalyticsClient";

export default async function FranchiseAnalyticsPage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;
  if (!tenant) notFound();

  try {
    const data = await getFranchiseAnalytics(tenant, { dateRange: "30d" });

    return (
      <FranchiseAnalyticsClient
        workspace={data.workspace}
        initialData={data}
      />
    );
  } catch (error: any) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-base font-bold text-red-600 dark:text-red-400">Unable to load visitor analytics</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{error?.message || "Please check your permissions."}</p>
      </div>
    );
  }
}
