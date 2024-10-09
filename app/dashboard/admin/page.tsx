"use client";

import { Header, Footer } from "@/components/common";
import PreSummaryPage from "@/components/dashboard/admin/meetingPages/PreSummaryPage";
import { ISchedule } from "@/types";
import { useEffect, useState } from "react";
// import { AdminDashboard } from "@/components/dashboard/admin";

export default function AdminDashboardPage() {
  const [ schedule, setSchedule ] = useState<ISchedule>();

	const fetchShedule = async () => {
		try {
			const res = await fetch('/api/schedule');
			const data = await res.json();
			setSchedule({ status: data.length > 0 ? 'added' : 'deleted', data: data });
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		fetchShedule();
	}, []);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="grow">
        {/* <AdminDashboard /> */}
    		{schedule && <PreSummaryPage schedule={schedule} />}
      </div>
      <Footer mode='compact' />
    </div>
  );
}
