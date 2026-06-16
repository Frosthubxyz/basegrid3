import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 py-24 px-6 text-center">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 max-w-lg w-full">
          <h1 className="text-8xl font-black text-blue-500 mb-6">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-zinc-400 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </>
  );
}
