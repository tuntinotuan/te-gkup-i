"use client";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <Header></Header>
      <div className="flex items-start h-full">
        <Sidebar></Sidebar>
        <div className="bg-gray-100 w-full h-full p-5">{children}</div>
      </div>
    </div>
  );
}
