import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Playlist from "@/components/Playlist";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import Player from "@/components/Player";

export default function Home() {
  return (
    <div className="h-screen  flex flex-col">
      <div className=" flex flex-1 ">
        <Sidebar />

        <main className="flex-1 p-6 ">
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

          <h2 className="font-semibold text-2xl mt-10">Made for you</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
            <Card
              src="/album1.jpg"
              alt="Daily Mix 1"
              title="Daily Mix 1"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album2.jpg"
              alt="Daily Mix 2"
              title="Daily Mix 2"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album3.jpg"
              alt="Daily Mix 3"
              title="Daily Mix 3"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album4.jpg"
              alt="Daily Mix 4"
              title="Daily Mix 4"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Charts</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
            <Card
              src="/album1.jpg"
              alt="Top Brazil"
              title="Top 50 - Brazil"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album2.jpg"
              alt="Top 50 global"
              title="Top 50 - Global"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album3.jpg"
              alt="Top 50 Mexico"
              title="Top 50 Mexico"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album4.jpg"
              alt="Top 50 Japan"
              title="Top 50 Japan"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Popular albums</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
            <Card
              src="/album1.jpg"
              alt="Top Brazil"
              title="Top 50 - Brazil"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album2.jpg"
              alt="Top 50 global"
              title="Top 50 - Global"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album3.jpg"
              alt="Top 50 Mexico"
              title="Top 50 Mexico"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />

            <Card
              src="/album4.jpg"
              alt="Top 50 Japan"
              title="Top 50 Japan"
              artists="Coldplay, Lady Wrap, Selena Gomez & The Scene"
              width={120}
              height={120}
            />
          </div>
        </main>
      </div>

      <Player />
    </div>
  );
}
