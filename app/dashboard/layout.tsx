import React from "react";
import SideNav from "./_components/Sidenav";
import Header from "./_components/Header";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      
      {/* Background Decorator */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-background to-background" />

      {/* Sidebar */}
      <div className="md:w-64 hidden md:block fixed z-10">
        <SideNav />
      </div>

      {/* Content */}
      <div className="md:ml-64 flex-1 flex flex-col min-h-screen w-full">
        <Header/>
        <main className="flex-1 p-6 sm:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}

