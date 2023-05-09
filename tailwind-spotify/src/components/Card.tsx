import { Play } from "lucide-react";
import Image from "next/image";
import { title } from "process";
type PlaylistProps = {
  src: string;
  alt: string;
  title: string;
  artists: string;
  width: number;
  height: number;
};
const Card = ({ src, alt, title, artists, width, height }: PlaylistProps) => {
  return (
    <>
      <a
        href=""
        className="bg-white/5 rounded p-3 group flex flex-col  gap-2 overflow-hidden hover:bg-white/10 transition-colors"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded w-full static"
        />
        <button className="w-12 h-12 absolute bottom-0  flex items-center justify-center pl-1 rounded-full bg-green-400 text-black   invisible group-hover:visible">
          <Play />
        </button>
        <strong className="text-semibold">{title}</strong>
        <span className="text-sm text-zinc-400">{artists}</span>
      </a>
    </>
  );
};

export default Card;
