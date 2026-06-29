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
    <div className="h-screen p-5 shadow-lg border-r bg-background/50 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-500/20 to-transparent pointer-events-none" />

      {/* Logo */}
      <div className="flex justify-center mt-2 mb-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={100}
          priority
          className="drop-shadow-md transition-transform hover:scale-105"
        />
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* Menu */}
      <div className="mt-3 flex flex-col gap-2">
        {MenuList.map((menu, index) => {
          const isActive = path === menu.path;
          return (
            <Link key={index} href={menu.path}>
              <div
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 relative group
                ${isActive 
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md shadow-purple-500/30" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <menu.icon className={`h-5 w-6 ${isActive ? "text-white" : "group-hover:text-purple-500 transition-colors"}`} />
                <h2 className="font-medium">{menu.name}</h2>
                
                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-white rounded-r-md opacity-80" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidenav;