import Image from "next/image";
import { notFound } from "next/navigation";
import { artists } from "@/data/artists";
import WorksLightbox from "@/components/WorksLightbox";

type Props = {
  params: { id: string };
};

export default function ArtistPage({ params }: Props) {
  const artist = artists.find((a) => a.id === params.id);
  if (!artist) return notFound();

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* Name + Bio */}
      <div className="flex flex-col items-center text-left mb-20">
        <h1 className="text-5xl mb-8 uppercase font-semibold">{artist.name}</h1>
        <p className="mt-4 text-gray-700 max-w-2xl">{artist.bio}</p>
      </div>

      {/* Works */}
      {artist.works && artist.works.length > 0 && (
        <>
          <h2 className="text-2xl font-medium mb-16">Works</h2>
          <WorksLightbox images={artist.works} altPrefix="Work" />
        </>
      )}

      {/* Videos (if any) */}
      {artist.videos && artist.videos.length > 0 && (
        <>
          <h2 className="text-2xl font-medium mb-6">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {artist.videos.map((video, i) => (
              <div key={i} className="aspect-video">
                <iframe
                  src={video}
                  title={`Video ${i + 1}`}
                  className="w-full h-full shadow"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
