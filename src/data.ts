import { TattooItem, ServiceItem, ReviewItem, FaqItem } from "./types";
import heroImage from "./assets/images/kala_hero_1780905791858.png";
import realismImage from "./assets/images/realism_tattoo_1780905809680.png";
import mandalaImage from "./assets/images/mandala_tattoo_1780905825043.png";
import finelineImage from "./assets/images/fineline_tattoo_1780905841157.png";
import coverupImage from "./assets/images/coverup_tattoo_1780905858552.png";

// Custom generated asset paths
export const IMAGES = {
  hero: heroImage,
  realism: realismImage,
  mandala: mandalaImage,
  fineline: finelineImage,
  coverup: coverupImage,
  coverupBefore:
    "https://images.unsplash.com/photo-1590156546746-c224083a8f6e?auto=format&fit=crop&q=70&w=600",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-design",
    idAttribute: "service-custom",
    title: "Custom Tattoo Design",
    description: "Unique tattoo artwork designed specifically for you. We collaborate directly to transcribe your thoughts into a bespoke masterpiece.",
    details: [
      "One-on-one concept brainstorming with our design artist",
      "Digital mockups and sketching iterations until perfect",
      "Custom flow fitting tailored precisely to your specific muscle contours",
      "High resolution design blueprint exported for your personal keepsakes",
      "Detailed skin prep and bespoke stencil placement session"
    ],
    iconName: "PenTool"
  },
  {
    id: "realism",
    idAttribute: "service-realism",
    title: "Realism Tattoos",
    description: "Portraits, animals, and highly detailed realistic 3D tattoos executed with fine-art precision and beautiful depth gradient.",
    details: [
      "Hyperrealistic human and animal portraiture",
      "Advanced 3D shadow casting and highlight sculpting of light sources",
      "Micro-detailed texture rendering of hair, scales, reflections, and skin pores",
      "Uses elite imported charcoal grey-wash gradients to guarantee lasting soft-healed results",
      "Requires advanced single-needle micro-precision application"
    ],
    iconName: "Eye"
  },
  {
    id: "fine-line",
    idAttribute: "service-fineline",
    title: "Fine Line Tattoos",
    description: "Elegant, minimal, and modern tattoo designs featuring extremely precise, clean micro-line structures.",
    details: [
      "Ultra-fine needle configurations (single needle / 3RL specialist lines)",
      "Minimalist botany, celestial configurations, typography, and micro-geometry",
      "Zero-bleed crisp application ensuring lines remain sharp, neat, and thin through years of healing",
      "Pain-muffled, gentle skin pressure technique ideal for sensitive placements",
      "Perfect choice for subtle, discrete, and elegant luxury personal symbols"
    ],
    iconName: "Feather"
  },
  {
    id: "mandala",
    idAttribute: "service-mandala",
    title: "Mandala Tattoos",
    description: "Detailed geometric and spiritual artwork requiring flawless symmetry, dotwork, and architectural design precision.",
    details: [
      "Perfect mathematical centering aligned with your skeletal posture",
      "Sacred geometry patterns: Metatron's Cube, Sri Yantra, custom repetitive mandalas",
      "Stunning stippling and dotwork gradients that fade beautifully outwards",
      "Dynamic hand-drawn circular blueprints layered neatly around shoulders, elbows, knees, or backs",
      "Symbolic artwork focused on structural balance, infinity, and mindfulness"
    ],
    iconName: "Compass"
  },
  {
    id: "cover-up",
    idAttribute: "service-coverup",
    title: "Cover-Up Tattoos",
    description: "Transform old, faded tattoos, blowout lines, or complex scars into beautiful, majestic new custom artwork.",
    details: [
      "Deep scar topography assessment for tissue elasticity and safety constraints",
      "Expert color-correction and opaque shading strategies using dark botanical or realist flow",
      "Clever incorporation of existing heavy lines into main structures of the new art",
      "Free initial consultation to draft overlay blueprints directly over high-res skin photos",
      "Specialized in transforming third-degree burns and heavy tribal designs into stunning foliage or life themes"
    ],
    iconName: "Sparkles"
  },
  {
    id: "spiritual",
    idAttribute: "service-spiritual",
    title: "Spiritual & Religious Tattoos",
    description: "Meaningful designs inspired by ancient cultures, faith, yoga philosophies, and deep-rooted personal spirituality.",
    details: [
      "Traditional Indian, Tibetan, and Celtic spiritual icons",
      "Sacred Sanskrit typography drafts, mantras, and cultural calligraphies",
      "Chakra alignments, lotus blossoms, deities, and guardian imagery",
      "Ritualistic respect in drafting placement rules according to cultural traditions",
      "Soul-imbued tattoo storytelling designed to accompany you through your spiritual evolution"
    ],
    iconName: "Moon"
  }
];

export const PORTFOLIO: TattooItem[] = [
  {
    id: "p1",
    title: "Majestic Realistic Tiger Portrait",
    category: "Realism",
    imageUrl: IMAGES.realism,
    description: "An incredibly accurate grey-wash tiger portrait capturing lifelike depth, high contrast fur textures, and deep-set eyes designed to fit the natural slope of the upper arm."
  },
  {
    id: "p2",
    title: "Intricate Dotwork Mandala",
    category: "Mandala",
    imageUrl: IMAGES.mandala,
    description: "Flawless radial geometry utilizing microdot stippling and sharp linework grids. This custom mandala flows organically down the forearm, accentuating skeletal mechanics."
  },
  {
    id: "p3",
    title: "Ethereal Botanical Fine Line",
    category: "Fine Line",
    imageUrl: IMAGES.fineline,
    description: "Dainty wild florals interwoven with subtle crescent moon phases. Designed with single-needle precision for a crisp, whispering luxury aesthetic on the collarbone."
  },
  {
    id: "p4",
    title: "The Tree of Life Cover-Up",
    category: "Cover-Up",
    imageUrl: IMAGES.coverup,
    beforeImageUrl: IMAGES.coverupBefore,
    description: "A masterful scar cover-up transforming a severe burn into a magnificent Tree of Life. Rooted in resilience, the detailed foliage breathes beautiful life into renewed skin."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    reviewer: "William Helluin",
    text: "It took 2 days to finish it with all the details. It's an amazing work. It came out way better than I thought. I was so surprised to see the final result. I'm so happy I chose Kala Tattoo Studio. They explained the meaning of each symbol.",
    rating: 5
  },
  {
    id: "r2",
    reviewer: "Shalesh Saharan",
    text: "This was my first tattoo, and Kala Tattoo made it a memorable experience. The artist understood my concept perfectly and delivered beyond expectations.",
    rating: 5
  },
  {
    id: "r3",
    reviewer: "MANOJ RAWAT",
    text: "My friend did a tattoo from Kala Tattoo Studio. Best experience of my life. The studio is very nice and hygienic. The artist was very friendly and gave great design suggestions.",
    rating: 5
  },
  {
    id: "r4",
    reviewer: "Stanzin",
    text: "Had a great experience getting my tattoo here. The artist was extremely calm and professional. The work turned out amazing and the pricing was reasonable.",
    rating: 5
  },
  {
    id: "r5",
    reviewer: "Alex Over",
    text: "It's two brothers, one designs your tattoo and the other one makes it. Great vibes and good communication. Got my first tattoo here and I'm super happy with it.",
    rating: 5
  },
  {
    id: "r6",
    reviewer: "Tsepal Ser",
    text: "I did a cover-up tattoo at Kala Tattoo Studio and they did an amazing job. It finally looks like beautiful art on my skin. I will definitely visit again.",
    rating: 5
  },
  {
    id: "r7",
    reviewer: "Priyanshu Aggarwal",
    text: "I recently visited this tattoo studio and had an amazing experience. Rohan was incredibly skilled and patient. He paid attention to every detail and made sure I was comfortable.",
    rating: 5
  },
  {
    id: "r8",
    reviewer: "Emmanuelle Moreira Balaguer",
    text: "I had two tattoos done here and I love them. Rohan has very clean lines and excellent workmanship.",
    rating: 5
  },
  {
    id: "r9",
    reviewer: "Craig Ingham",
    text: "Rohan has 9 years of tattoo experience. He covered up my third-degree burn with a beautiful Tree of Life tattoo. Amazing work.",
    rating: 5
  },
  {
    id: "r10",
    reviewer: "Ratan Chaoudhari",
    text: "Underrated souls create timeless art. Every line and every shade carries a story. The artist turned skin into poetry.",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How do I book a tattoo session with Kala Tattoo Studio?",
    answer: "You can book an appointment directly through our online Booking Form, call us at +91 70578 30197, or click the WhatsApp button to chat instantly with our custom design team. We recommend sharing references, placement, and estimated size."
  },
  {
    question: "Do you maintain medical-grade hygiene standards?",
    answer: "Absolutely. At Kala Tattoo Studio, your safety is our absolute priority. We use 100% sterile, single-use, medically sealed disposable needles, advanced professional inks imported globally, hospital-level sterilization systems (autoclave), and sanitize all work surfaces meticulously before and after each session."
  },
  {
    question: "How much does a custom tattoo cost?",
    answer: "Our pricing depends on the style, level of detail, size, and body placement of the tattoo. Small fine line designs have a pocket-friendly minimum price, while complex full-day sessions (like full sleeves, cover-ups, or realism pieces) are quoted on a project-rate or hourly basis during your free consultation."
  },
  {
    question: "What is your consultation process like?",
    answer: "It is smooth and collaborative! We believe in 'Ink with Meaning, Art with Soul'. Our design specialist sits with you to draft sketches, ensuring geometric motifs or spiritual symbols align beautifully with your body lines and carry deep sentimental value before we ever touch needle to skin."
  },
  {
    question: "Can you cover up old tattoos or deep scars?",
    answer: "Yes, we specialize in high-end Cover-Up Tattoos. Our lead artist Rohan has covered severe third-degree burns with majestic Tree of Life artwork and redesigned dozens of old faded ink designs. Overlays require specialized depth control and creative shading, which we draft with surgical precision."
  },
  {
    question: "Where are you located in Arambol, Goa?",
    answer: "We are situated beautifully at Khalcha Wada, right on the Arambol Beach Road, Arambol, Goa 403524. It is extremely easy to navigate, with gorgeous beachside energy welcoming you."
  }
];
