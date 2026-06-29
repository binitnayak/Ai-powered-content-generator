import { Search } from 'lucide-react';
import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='sticky top-0 z-50 p-4 shadow-sm border-b bg-background/70 backdrop-blur-md flex justify-between items-center'>
      
      <div className='flex gap-2 items-center p-2 border rounded-full bg-background max-w-lg shadow-sm focus-within:ring-2 focus-within:ring-primary transition-all duration-300 w-full sm:w-80'>
        <Search className="text-muted-foreground w-5 h-5 ml-2" />
        <input type="text" placeholder='Search...'
          className='outline-none bg-transparent w-full text-sm' />
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <h2 className='hidden sm:block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 p-2 rounded-full text-xs font-semibold text-white px-4 shadow-md transition-all cursor-pointer hover:shadow-lg'>
          🔥 Join membership just for $9.99/Mo
        </h2>
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Header;