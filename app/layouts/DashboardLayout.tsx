import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { Footer } from "@/components/common";
import { DashboardHeader } from "@/components/dashboard/common";
import { CompetitorSideBar } from "@/components/dashboard/competitor";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="bg-neutral-950 text-gray-200">
            <div className="flex">
              {session?.user.role === 'moderator' ? null : <CompetitorSideBar /> }
              <div className="w-full">
                <DashboardHeader />
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