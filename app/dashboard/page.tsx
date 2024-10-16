"use client";

import { Footer } from "@/components/common";
import { DashboardHeader } from "@/components/dashboard/common";
import { CompetitorSideBar } from "@/components/dashboard/competitor";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ModeratorSideBar } from "@/components/dashboard/moderator";
import { AdminSideBar } from "@/components/dashboard/admin";
import { Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [ Module, setModule] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const savedModule = localStorage.getItem("selectedModule");
    if (savedModule) {
      setSelectedModule(savedModule);
    } else {
      if (status === "authenticated" && session?.user.role) {
        setSelectedModule(() => {
          switch (session.user.role) {
            case "moderator":
              return "moderator/Panel";
            case "admin":
              return "admin/Panel";
            default:
              return "competitor/Panel";
          }
        });
      }
    }

    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, session?.user.role, router]);

  useEffect(() => {
    if (selectedModule) {
      localStorage.setItem("selectedModule", selectedModule);
      loadModule(selectedModule);
    }
  }, [selectedModule]);

  const loadModule = async (modulePath: string) => {
    const DynamicModule = dynamic(() => import(`../../components/dashboard/${modulePath}`));
    setModule(() => DynamicModule);
  };

  // Loading skeleton
  if (status === "loading") {
    return (
      <div className="bg-neutral-950 text-gray-200">
        <div className="flex">
          <Skeleton width="72px" className="h-screen" />
          <div className="w-full">
            <DashboardHeader />
            <Skeleton height="400px" className="m-3" />
          </div>
        </div>
        <Footer mode='compact' />
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {(() => {
        switch (session?.user.role) {
          case "moderator":
            return <ModeratorSideBar onSelect={setSelectedModule} />;
          case "admin":
            return <AdminSideBar onSelect={setSelectedModule} />;
          default:
            return <CompetitorSideBar onSelect={setSelectedModule} />;
        }
      })()}
      <div className="w-full z-10 relative flex flex-col h-full">
        <DashboardHeader />
        <Image alt='dark background with light rectangles'  
            src="/background/light-dark-rect-bg.jpg" 
            width={1920} height={1080} 
            className='absolute top-0 left-0'
            objectFit='contain'/>
        <div className="z-10 flex-1 overflow-auto">
          {Module ? <Module /> : <Skeleton height="400px" className="m-3" />} {/* Fallback skeleton */}
        </div>
        <Footer mode="compact" />
      </div>
    </div>
  );
}
  