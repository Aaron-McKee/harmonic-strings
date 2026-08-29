import cp5FrontImage from "../assets/Nicholas_Parola_CP5_Cello_Front.png";
import cp5CombinedImage from "../assets/Nicholas_Parola_CP5_Cello_Front_Back.png";
import cp5BackImage from "../assets/Nicholas_Parola_CP5_Cello_Back.png";

import a31FrontImage from "../assets/Howard_Core_A31_Cello_Front.png";
import a31BackImage from "../assets/Howard_Core_A31_Cello_Back.png";
import a31ScrollImage from "../assets/Howard_Core_A31_Cello_Scroll.png";


export const cellos = [
  /* =====================================================
     HOWARD CORE ACADEMY A31 CELLO
     BEGINNER
  ====================================================== */

  {
    id: "howard-core-academy-a31-cello",
    slug: "howard-core-academy-a31-cello",

    name: "Howard Core Academy A31 Cello",
    maker: "Howard Core",
    model: "Academy A31",
    instrument: "Cello",
    level: "Beginner",
    stage: "instrument",


    /* =====================================
       IMAGES

       COLLECTION:
       Front

       DETAIL:
       Front
       Back
       Scroll
    ====================================== */

    image:
      a31FrontImage,

    frontImage:
      a31FrontImage,

    backImage:
      a31BackImage,

    combinedImage:
      null,

    detailImage:
      a31ScrollImage,

    detailViewLabel:
      "Scroll",


    /* =====================================
       PRICING
    ====================================== */

    price:
      "$1,596",

    regularPrice:
      null,

    salePrice:
      null,

    savings:
      null,


    /* =====================================
       SIZE
    ====================================== */

    size:
      null,

    availableSizes: [],


    /* =====================================
       COLLECTION DESCRIPTION
    ====================================== */

    shortDescription:
      "The Howard Core Academy A31 Cello is a dependable student-quality instrument designed to provide lasting durability, smooth playability, and a warm, consistent tone for beginning and developing cellists.",


    /* =====================================
       DESCRIPTION
    ====================================== */

    description:
      "The Howard Core Academy A31 Cello is a dependable, student-quality instrument built to provide lasting durability, smooth playability, and a warm, consistent tone. Designed for beginning and intermediate cellists, this model combines traditional craftsmanship with modern stability, making it an excellent choice for school orchestras, private lessons, and daily practice.",


    /* =====================================
       TONE & PLAYABILITY
    ====================================== */

    toneAndPlayability:
      "Professionally adjusted with a quality maple bridge, composite tailpiece with four built-in fine tuners, and D’Addario Prelude strings, the Core Academy A31 produces a warm, clear, and well-balanced tone that supports consistent musical progress. Its smooth ebony fittings and sturdy construction provide dependable playability for developing cellists.",


    /* =====================================
       MATERIALS
    ====================================== */

    top:
      "Laminated spruce",

    backAndSides:
      "Laminated maple",

    finish:
      null,

    fittings:
      "Ebony fingerboard, nut, saddle, and pegs with composite tailpiece and four integrated fine tuners",

    strings:
      "D’Addario Prelude",


    /* =====================================
       CRAFTSMANSHIP
    ====================================== */

    construction:
      "Fully laminated spruce and maple body with a solid maple neck, designed for durability, stability, and resistance to humidity and temperature changes",

    handwork:
      "Quality maple bridge professionally adjusted for even response, with durable ebony fittings and a student-focused setup designed for reliable everyday use",

    idealFor:
      "Beginning and intermediate cellists, students, educators, school music programs, private lessons, orchestra programs, and daily practice",

    setup:
      "Professionally adjusted by the Harmonic Strings workshop",


    /* =====================================
       ADDITIONAL INFORMATION
    ====================================== */

    tonalCharacter:
      "Warm, clear, balanced, and consistent",

    year:
      null,

    inspiration:
      null,

    condition:
      null,

    conditionNotes:
      null,


    /* =====================================
       INVENTORY
    ====================================== */

    inStock:
      true,
  },


  /* =====================================================
     NICOLAS PAROLA CP5 CELLO
     INTERMEDIATE
  ====================================================== */

  {
    id: "nicolas-parola-cp5-cello",
    slug: "nicolas-parola-cp5-cello",

    name: "Nicolas Parola CP5 Cello",
    maker: "Nicolas Parola",
    model: "CP5",
    instrument: "Cello",
    level: "Intermediate",
    stage: "instrument",

    image:
      cp5CombinedImage,

    frontImage:
      cp5FrontImage,

    backImage:
      cp5BackImage,

    combinedImage:
      cp5CombinedImage,

    detailImage:
      null,

    detailViewLabel:
      null,

    price:
      "$3,350",

    regularPrice:
      null,

    salePrice:
      null,

    savings:
      null,

    size:
      "4/4",

    availableSizes: [
      "4/4",
    ],

    shortDescription:
      "The Nicolas Parola CP5 Cello is designed for intermediate students who want a powerful, rich tone with excellent projection. Made with well-aged tonewoods, it offers a warm, expressive sound with strong presence.",

    description:
      "The Nicolas Parola CP5 Cello is a step-up instrument built for stronger craftsmanship, greater response, and a more commanding musical presence.",

    toneAndPlayability:
      "The CP5 delivers a bold, powerful sound with excellent projection across all registers. Its responsiveness and tonal depth provide a warm, expressive playing experience with strong performance-ready presence.",

    top:
      "Carefully selected, well-aged spruce",

    backAndSides:
      "Well-aged figured maple",

    finish:
      "Hand-applied full oil varnish with subtle antiquing",

    fittings:
      "Premium ebony fingerboard and pegs",

    strings:
      null,

    construction:
      "Fully hand-carved by a master luthier for precision and consistency",

    handwork:
      "Detailed graduation and internal adjustments made for balanced projection, responsiveness, and tonal depth",

    idealFor:
      "Intermediate students, solo players, ensemble musicians, and school orchestra cellists",

    setup:
      null,

    tonalCharacter:
      null,

    year:
      null,

    inspiration:
      null,

    condition:
      null,

    conditionNotes:
      null,

    inStock:
      true,
  },
];