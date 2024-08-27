import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { Footer, Header } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}