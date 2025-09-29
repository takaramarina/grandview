import Link from "next/link";
import Image from "next/image";
import { artists } from "@/data/artists";

export default function HomePage() {
  return (
    <main className="py-6 px-6 sm:py-8 sm:px-10 md:px-16 lg:px-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 sm:mt-8 mb-12 sm:mb-16 md:mb-24 text-center">ARTISTS</h1>
      <div className="divide-y divide-black">
        {[...artists]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((artist) => (
            <Link key={artist.id} href={`/artists/${artist.id}`} className="block py-10 sm:py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                <h2 className="text-3xl sm:text-5xl md:text-5xl font-medium uppercase tracking-tight">
                  {artist.name}
                </h2>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={artist.cover}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
