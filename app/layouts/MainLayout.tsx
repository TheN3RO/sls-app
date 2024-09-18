import { Inter } from "next/font/google";
import { Footer, Header } from "@/components/common";
import dynamic from "next/dynamic";
const Providers = dynamic(() => import('../providers'), { ssr: false })

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer mode="full" />
        </Providers>
      </body>
    </html>
  );
}