import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import Playlist from "@/components/Playlist";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-700  flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brazil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Viva Latino
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Songs to Sing in the Car
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Beast Mode
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
            <Playlist
              src="/album1.jpg"
              alt="Manana sera bonito"
              name="Manana"
              width={104}
              height={104}
            />

            <Playlist
              src="/album2.jpg"
              alt="Coldplay"
              name="Coldplay"
              width={104}
              height={104}
            />

            <Playlist
              src="/album3.jpg"
              alt="Imagine Dragons"
              name="Imagine Dragons"
              width={104}
              height={104}
            />

            <Playlist
              src="/album4.jpg"
              alt="Maluma"
              name="Maluma"
              width={104}
              height={104}
            />

            <Playlist
              src="/album5.jpg"
              alt="Rosalia"
              name="Rosalia"
              width={104}
              height={104}
            />

            <Playlist
              src="/album6.jpg"
              alt="Rihanna"
              name="Rihanna"
              width={104}
              height={104}
            />
          </div>

          <h2 className="font-semibold text-3xl mt-10">Made for you</h2>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 ">
        Footer
      </footer>
    </div>
  );
}
