export type Artist = {
    id: string;              // slug used in URL
    name: string;            // display name
    cover: string;           // cover image for homepage grid
    bio: string;             // short biography
    works?: string[];         // list of work image paths (optional)
    videos?: string[];       // optional video links (YouTube, Vimeo, etc.)
    website?: string;         // optional website link
    instagram?: string;         // optional instagram link
  };
  
  export const artists: Artist[] = [
    {
      id: "reiji-shimane",
      name: "Reiji Shimane",
      cover: "/artists/reiji-shimane/work1.jpg",
      bio: "Reiji Shimane is a contemporary artist exploring the limits of drawing through dense graphite and ink works that oscillate between architectural structure and atmospheric blur. Born in Kyoto and now based in Tokyo, Shimane investigates memory, erosion, and the way cities overwrite themselves, building layered surfaces through rubbing, erasing, and re-marking. His recent exhibitions in Tokyo and Seoul have been accompanied by community workshops on observational drawing and field recording, reflecting a practice that bridges traditional draftsmanship with experimental mark‑making.",
      works: [
        "/artists/reiji-shimane/work1.jpg",
        "/artists/reiji-shimane/work2.jpg",
        "/artists/reiji-shimane/work3.jpg",
      ],
      videos: [], // sample
      website: "https://www.reijishimane.com",
      instagram: "https://www.instagram.com/reijishimane",
    },
    {
        id: "andy-wei",
        name: "Andy Wei",
        cover: "/artists/andy-wei/work2.jpg",
        bio: "Andy Wei is a painter whose works blend organic materials with modern aesthetics, often grinding natural pigments into custom binders and pouring them across hand‑prepared linen. Influenced by coastal geology and the neon vernacular of Shanghai, Wei’s canvases form slow, sedimentary compositions that shift with light. Recent series like ‘Fault Lines’ explore pressure and release through stacked color plates, and his studio practice spans collaborative murals, small studies, and large installations shown in Oakland, Los Angeles, and New York.",
        works: [
            "/artists/andy-wei/work1.jpg",
            "/artists/andy-wei/work2.jpg",
            "/artists/andy-wei/work3.jpg",
        ],
        website: "https://www.andywei.com",
        instagram: "https://www.instagram.com/andywei",
    },
    {
      id: "cole-masaki",
      name: "Cole Masaki",
      cover: "/artists/cole-masaki/work1.jpg",
      bio: "Cole Masaki is a sculptor and animator whose works blend hand‑built clay, cast resin, and real‑time rendering into playful, time‑bending narratives. Masaki’s stop‑motion shorts—often scored with ambient collaborations—expand into installations that respond to viewers with subtle sensor‑triggered motion. Drawing on folklore and contemporary internet mythologies, the work questions how memory is stored in objects, frames, and code. Masaki has presented projects in Los Angeles and New York and continues to develop hybrid tools for animation and sculpture.",
      works: [
        "/artists/cole-masaki/work1.jpg",
        "/artists/cole-masaki/work2.jpg",
      ],
      website: "https://www.colemasaki.com",
      instagram: "https://www.instagram.com/colemasaki",
    },
    {
        id: "shion",
        name: "Shion",
        cover: "/artists/shion/work1.jpg",
        bio: "Shion is a musician and artist working at the intersection of minimalist composition and generative visual systems. Recent performances combine sparse piano textures, granular vocal layers, and live visuals triggered by MIDI, translating sound into evolving color and motion. Shion releases small‑run cassette editions, collaborates with designers on audiovisual installations, and is currently developing a project that treats the voice as an instrument for drawing in space.",
        videos: [
          "https://www.youtube.com/embed/qage_dJcIBE?si=_tL2EAWT4kjmAuOp",
          "https://www.youtube.com/embed/tMLtbx8RghI?si=1hjdy7gyLnWJa-kt",
        ],
        works: [
        //   "/artists/shion/work1.jpg",
        ],
        website: "https://www.shion.com",
        instagram: "https://www.instagram.com/shion",
      },
    {
      id: "Ryuichiro",
      name: "Ryuichiro",
      cover: "/artists/ryuichiro/work2.jpg",
      bio: "Ryuichiro is a multimedia artist working across film, installation, and fashion direction, building tactile worlds from fabric, light, and found sound. His short films favor choreographed camera movement and close collaboration with performers, while runway projects extend into set design and projection to craft immersive environments. Recent screenings and commissions include independent labels in Tokyo and a program at an experimental shorts festival in Rotterdam, reflecting a practice that moves nimbly between studio and street.",
      works: [
        "/artists/ryuichiro/work1.jpg",
        "/artists/ryuichiro/work2.jpg",
      ],
      website: "https://www.ryuichiro.com",
      instagram: "https://www.instagram.com/ryuichiro",
    },
    {
      id: "AKI",
      name: "AKI",
      cover: "/artists/AKI/work1.jpg",
      bio: "AKI is a video artist exploring the harmony between moving image and sound through synesthetic edits, algorithmic loops, and modular synth performance. Working with projection‑mapped stages and handheld cameras, AKI creates audiovisual sets that breathe, stretch, and fold in time. Recent tours included small theaters across Europe in 2024, alongside limited‑edition video zines and open workshops introducing Ableton and TouchDesigner workflows for newcomers to live visuals.",
      works: [
        "/artists/aki/work1.jpg",
        "/artists/aki/work2.jpg",
      ],
      website: "https://www.AKI.com",
      instagram: "https://www.instagram.com/AKI",
    },
    {
      id: "kinoshita-kei",
      name: "Kinoshita Kei",
      cover: "/artists/kinoshita-kei/work1.jpg",
      bio: "Kinoshita Kei is a photographer of contemporary urban life, moving fluidly between medium‑format film and the immediacy of the phone camera. Night light, passing gestures, and the choreography of commuting anchor Kei’s images, which focus on ordinary rituals and the soft architectures of signage. Ongoing projects like ‘After Last Train’ trace the city’s late hours; publications include features in independent culture magazines, and Kei regularly hosts photo walks exploring vernacular image‑making in Osaka.",
      works: [
        "/artists/kinoshita-kei/work1.jpg",
        "/artists/kinoshita-kei/work2.jpg",
      ],
      website: "https://www.kinoshitakei.com",
      instagram: "https://www.instagram.com/kinoshitakei",
    },
  ];
  