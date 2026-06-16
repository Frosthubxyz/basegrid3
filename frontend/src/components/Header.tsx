import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-600 to-violet-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">B</span>
          </div>
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            BaseGrid
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/tasks" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Explore Tasks
          </Link>
          <Link href="/create" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Post Task
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Leaderboard
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ConnectButton 
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }} 
              chainStatus="icon" 
              showBalance={false} 
            />
          </div>
          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col px-6 py-4 gap-4 border-t border-zinc-800 bg-zinc-900">
          <Link href="/tasks" className="text-sm font-medium text-zinc-300" onClick={() => setIsMobileMenuOpen(false)}>Explore Tasks</Link>
          <Link href="/create" className="text-sm font-medium text-zinc-300" onClick={() => setIsMobileMenuOpen(false)}>Post Task</Link>
          <Link href="/leaderboard" className="text-sm font-medium text-zinc-300" onClick={() => setIsMobileMenuOpen(false)}>Leaderboard</Link>
          <div className="mt-2">
            <ConnectButton chainStatus="icon" showBalance={false} />
          </div>
        </div>
      )}
    </header>
  );
}
