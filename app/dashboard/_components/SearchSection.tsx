"use client";

import { Search } from "lucide-react";
import React from "react";

interface PROPS {
  onSearchInput: (value: string) => void;
}

function SearchSection({ onSearchInput }: PROPS) {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white">
      
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p className="mt-2">What would you like to create today?</p>

      <div className="flex gap-2 items-center p-3 border rounded-lg bg-white my-5 max-w-sm w-[50%]">
        <Search className="text-gray-500" />
        
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-black"
          onChange={(e) => onSearchInput(e.target.value)}
        />
      </div>

    </div>
  );
}

export default SearchSection;