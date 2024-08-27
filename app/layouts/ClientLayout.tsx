"use client";

import { usePathname } from "next/navigation";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "./DashboardLayout";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let LayoutComponent;
  
  switch (true) {
    case pathname === "/login":
      LayoutComponent = AuthLayout;
      break;
    case pathname.startsWith("/dashboard"):
      LayoutComponent = DashboardLayout;
      break;
    default:
      LayoutComponent = MainLayout;
      break;
  }
  
  return (
    <SessionProvider>
      <LayoutComponent>{children}</LayoutComponent>
    </SessionProvider>
  );
  
}