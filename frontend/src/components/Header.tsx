import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between h-20 px-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-600 to-violet-500 flex items-center justify-center group-hover:opacity-90 transition-opacity">
            <span className="text-white font-bold text-lg leading-none">B</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-100 transition-colors">
            BaseGrid
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/tasks" className="text-sm font-medium text-zinc-300 hover:text-white hover:underline underline-offset-4 decoration-blue-500 transition-all">
            Explore Tasks
          </Link>
          <Link href="/create" className="text-sm font-medium text-zinc-300 hover:text-white hover:underline underline-offset-4 decoration-blue-500 transition-all">
            Post Task
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium text-zinc-300 hover:text-white hover:underline underline-offset-4 decoration-blue-500 transition-all">
            Leaderboard
          </Link>
          {/* Dark Mode Toggle - Added in Task 17 */}
          <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Toggle Theme (Coming Soon)">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
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
