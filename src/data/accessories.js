import dampitImage from "../assets/Dampit_Violin_Humidifier.png";
import musicStandImage from "../assets/Manhasset_5001_Music_Stand.png";
import kunShoulderRestImage from "../assets/Kun_Collapsible_Violin_Shoulder_Rest.png";
import evahPirazziRosinImage from "../assets/Pirastro_Evah_Pirazzi_Gold_Rosin.png";


export const violinAccessories = [
  {
    id: "kun-collapsible-violin-shoulder-rest",
    slug: "kun-collapsible-violin-shoulder-rest",

    name: "Kun Collapsible Violin Shoulder Rest",
    category: "Shoulder Rest",

    price: "$28.75",

    image: kunShoulderRestImage,
    stage: "light",

    description:
      "A practical collapsible shoulder rest designed for comfortable violin support and easy storage.",
  },

];


export const violaAccessories = [];


export const celloAccessories = [];


export const otherAccessories = [
  {
    id: "pirastro-evah-pirazzi-gold-rosin",
    slug: "pirastro-evah-pirazzi-gold-rosin",

    name: "Pirastro Evah Pirazzi Gold Rosin",
    category: "Rosin",

    price: "$29.17",

    image: evahPirazziRosinImage,
    stage: "instrument",

    description:
      "Premium rosin selected for reliable grip, smooth response, and refined bow control.",
  },
  {
    id: "dampit-humidifier",
    slug: "dampit-humidifier",

    name: "Dampit Humidifier for String Instruments",
    category: "Instrument Care",

    price: "$16.99",

    image: dampitImage,
    stage: "instrument",

    description:
      "A simple humidity-management accessory designed to help protect string instruments in dry conditions.",
  },

  {
    id: "manhasset-5001-orchestral-music-stand",
    slug: "manhasset-5001-orchestral-music-stand",

    name: "Manhasset 5001 Orchestral Music Stand",
    category: "Music Stand",

    price: "$97.50",

    image: musicStandImage,
    stage: "instrument",

    description:
      "A dependable orchestral music stand designed for rehearsals, lessons, studios, and performance spaces.",
  },
];


export const studyMaterials = [];


export const accessories = [
  ...violinAccessories,
  ...violaAccessories,
  ...celloAccessories,
  ...otherAccessories,
  ...studyMaterials,
];