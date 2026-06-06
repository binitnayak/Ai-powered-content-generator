"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Sidenav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

useEffect(() => {
  console.log(path);
}, [path]);

  return (
    <div className="h-screen p-5 shadow-sm border">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={100}
          priority
        />
      </div>
<hr className="my-6 border"/>
      {/* Menu */}
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
  className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer 
  hover:bg-purple-700 hover:text-white transition-all duration-200
  ${path === menu.path ? "bg-purple-700 text-white" : ""}`}
>
              <menu.icon  className="h-5 w-6" />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidenav;