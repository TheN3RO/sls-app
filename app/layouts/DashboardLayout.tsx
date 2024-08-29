import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { Footer } from "@/components/common";
import { DashboardHeader } from "@/components/dashboard/common";
import { CompetitorSideBar } from "@/components/dashboard/competitor";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { use, useEffect, useState } from "react";
import { ModeratorSideBar } from "@/components/dashboard/moderator";
import { AdminSideBar } from "@/components/dashboard/admin";
import dynamic from "next/dynamic";
import { Skeleton } from "@chakra-ui/react";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <main className="bg-neutral-950 text-gray-200">
              <div className="flex">
                <Skeleton width="72px" className="h-screen" />
                <div className="w-full">
                  <DashboardHeader />
                  <Skeleton height="400px" className="m-3" />
                  {children}
                </div>
              </div>
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="bg-neutral-950 text-gray-200 h-screen overflow-hidden">
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
                <div className="z-10 flex-1 overflow-auto">
                  {Module ? <Module /> : <Skeleton height="400px" className="m-3" />} {/* Fallback skeleton */}
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
