export type Artist = {
    id: string;              // slug used in URL
    name: string;            // display name
    profile: string;         // profile picture
    cover: string;           // cover image for homepage grid
    bio: string;             // short biography
    works: string[];         // list of work image paths
    videos?: string[];       // optional video links (YouTube, Vimeo, etc.)
    website?: string;         // optional website link
    instagram?: string;         // optional instagram link
  };
  
  export const artists: Artist[] = [
    {
      id: "reiji-shimane",
      name: "Reiji Shimane",
      profile: "/artists/reiji-shimane/profile.jpg",
      cover: "/artists/reiji-shimane/work1.jpg",
      bio: "Reiji Shimane is a contemporary artist exploring the limits of drawing.",
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
      id: "cole-masaki",
      name: "Cole Masaki",
      profile: "/artists/cole-masaki/profile.jpg",
      cover: "/artists/cole-masaki/work1.jpg",
      bio: "Cole Masaki is a sculptor and animator whose works blend digital materials with timeless forms.",
      works: [
        "/artists/cole-masaki/work1.jpg",
        "/artists/cole-masaki/work2.jpg",
      ],
      website: "https://www.colemasaki.com",
      instagram: "https://www.instagram.com/colemasaki",
    },
    {
      id: "Ryuichiro",
      name: "Ryuichiro",
      profile: "/artists/ryuichiro/profile.jpg",
      cover: "/artists/ryuichiro/work2.jpg",
      bio: "Ryuichiro is a multimedia artist with works ranging from film to fashion",
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
      profile: "/artists/AKI/profile.jpg",
      cover: "/artists/AKI/work1.jpg",
      bio: "AKI is a video artist exploring the harmony between video and music.",
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
      profile: "/artists/kinoshita-kei/profile.jpg",
      cover: "/artists/kinoshita-kei/work1.jpg",
      bio: "Kinoshita Kei is a photographer capturing urban scenes and contemporary culture.",
      works: [
        "/artists/kinoshita-kei/work1.jpg",
        "/artists/kinoshita-kei/work2.jpg",
      ],
      website: "https://www.kinoshitakei.com",
      instagram: "https://www.instagram.com/kinoshitakei",
    },
    {
      id: "shion",
      name: "Shion",
      profile: "/artists/shion/profile.jpg",
      cover: "/artists/shion/work1.jpg",
      bio: "Shion is a musician and artist exploring the harmony between music and art.",
      videos: [
        "/artists/shion/video1.mp4",
        "/artists/shion/video2.mp4",
      ],
      works: [
        "/artists/shion/work1.jpg",
      ],
      website: "https://www.shion.com",
      instagram: "https://www.instagram.com/shion",
    },
    {
      id: "andy-wei",
      name: "Andy Wei",
      profile: "/artists/andy-wei/profile.jpg",
      cover: "/artists/andy-wei/work2.jpg",
      bio: "Andy Wei is a painter whose works blend organic materials with modern aesthetics.",
      works: [
        "/artists/andy-wei/work1.jpg",
        "/artists/andy-wei/work2.jpg",
        "/artists/andy-wei/work3.jpg",
      ],
      website: "https://www.andywei.com",
      instagram: "https://www.instagram.com/andywei",
    },
  ];
  