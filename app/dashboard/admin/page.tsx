import { DashboardHeader } from "@/components/dashboard/common";
import { AdminSideBar, AdminDashboard } from "@/components/dashboard/admin";

export default function AdminDashboardPage() {
  return (
    <main className="bg-neutral-950 text-gray-200">
      <div className="flex">
        <AdminSideBar />
        <div className="w-full">
          <DashboardHeader />
          <AdminDashboard />
        </div>
      </div>
    </main>
  );
}
