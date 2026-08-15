// Central scene-media slots keep today's real assets swappable after a venue photo shoot.
export const SCENE_MEDIA = {
  arrival: {
    src: "/images/hero-bg.jpg",
    alt: "The bottle-lined bar at Sensasia Restaurant and Bar",
    futureShot: "Clean bar hero",
  },
  table: {
    signature: {
      src: "/images/food4.jpg",
      alt: "Sensasia Special Rice",
      futureShot: "Top-down signature-food table",
    },
    supporting: {
      src: "/images/food1.jpg",
      alt: "A dish from the Sensasia kitchen",
    },
    hot: {
      src: "/images/spotlight.jpg",
      alt: "Creamy Prawn, finished tableside at Sensasia",
      futureShot: "Close steaming dish",
    },
  },
  music: {
    src: "/images/about2.jpg",
    alt: "A singer performing live at Sensasia",
    futureShot: "Strong singer and live-music image",
  },
};

// TODO(photo shoot): projector/sports, cocktail detail, group night, exterior
// entrance, and clean venue/location shots remain open slots.
export const FUTURE_SCENE_MEDIA = {
  sports: null,
  drinks: null,
  community: null,
  exterior: null,
  location: null,
};
