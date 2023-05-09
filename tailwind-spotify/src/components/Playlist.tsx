import { Play } from "lucide-react";
import Image from "next/image";
type PlaylistProps = {
  src: string;
  alt: string;
  name: string;
  width: number;
  height: number;
};
const Playlist = ({ src, alt, name, width, height }: PlaylistProps) => {
  return (
    <>
      <a
        href=""
        className="bg-white/5 relative rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
      >
        <Image src={src} alt={alt} width={width} height={height} />
        <strong>{name}</strong>
        <button className="w-12 h-12 absolute right-0 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black" />
        </button>
      </a>
    </>
  );
};

export default Playlist;
