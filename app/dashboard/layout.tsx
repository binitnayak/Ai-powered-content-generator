import React from "react";
import SideNav from "./_components/Sidenav";
import Header from "./_components/Header";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Sidebar */}
      <div className="md:w-64 hidden md:block fixed ">
        <SideNav />
      </div>

      {/* Content */}
      <div className="md:ml-64 ">
        <Header/>
        {children}
      </div>
    </div>
  );
}

