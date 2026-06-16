import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
          <span className="text-xl font-bold text-white tracking-tight">BaseGrid</span>
        </div>
        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/tasks" className="hover:text-white transition-colors">Explore</Link>
          <Link href="/create" className="hover:text-white transition-colors">Post Task</Link>
          <Link href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link>
        </div>
        <div className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} BaseGrid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
