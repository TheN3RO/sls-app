import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
const Providers = dynamic(() => import('../providers'), { ssr: false })

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}