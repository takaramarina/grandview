import Link from "next/link";
import Image from "next/image";
import { artists } from "@/data/artists";

export default function HomePage() {
  return (
    <main className="py-8 px-24">
      <h1 className="text-5xl font-semibold mt-8 mb-24 text-center">ARTISTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-40">
        {artists.map((artist) => (
          <Link key={artist.id} href={`/artists/${artist.id}`} className="group block w-full max-w-[400px] mx-auto">
            <div className="aspect-square relative overflow-hidden shadow-sm">
              <Image
                src={artist.cover}
                alt={artist.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h2 className="mt-4 text-xl md:text-2xl font-medium uppercase">{artist.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
