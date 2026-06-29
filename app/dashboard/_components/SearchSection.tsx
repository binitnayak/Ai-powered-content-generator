"use client";

import { Search } from "lucide-react";
import React from "react";

interface PROPS {
  onSearchInput: (value: string) => void;
}

function SearchSection({ onSearchInput }: PROPS) {
  return (
    <div className="relative p-10 flex flex-col justify-center items-center text-white overflow-hidden rounded-3xl mb-8 shadow-lg">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-gradient-xy z-0" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      {/* Glass Overlay for depth */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-0" />

      {/* Content wrapper with higher z-index */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-md text-center">Browse All Templates</h2>
        <p className="mt-3 text-lg text-purple-100 font-medium text-center">What would you like to create today?</p>

        <div className="flex gap-3 items-center p-3 border-2 border-white/20 rounded-2xl bg-background/90 backdrop-blur-md mt-8 max-w-xl w-full shadow-2xl focus-within:ring-4 focus-within:ring-purple-500/50 transition-all duration-300">
          <Search className="text-muted-foreground w-6 h-6 ml-2" />
          
          <input
            type="text"
            placeholder="Search for templates..."
            className="outline-none w-full bg-transparent text-foreground text-lg px-2"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>

    </div>
  );
}

export default SearchSection;