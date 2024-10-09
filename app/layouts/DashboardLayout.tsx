import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const Providers = dynamic(() => import('../providers'), { ssr: false })

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="bg-neutral-950 text-gray-200 h-screen overflow-hidden">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
