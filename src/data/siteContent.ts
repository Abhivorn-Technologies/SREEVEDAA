export type HeroContent = {
  smallTitle: string;
  bigHeading: string;
  paragraph: string;
  backgroundType: "image" | "video";
  backgroundImage: string;
  backgroundVideo?: string;
};

export type Service = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  highlights: string[];
  sections: {
    heading: string;
    body: string;
  }[];
};

export type GalleryItem = {
  id: number;
  title: string;
  image: string;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  posterImage: string;
  content: string;
  createdAt: string;
};

export const hero: HeroContent = {
  smallTitle: "Inspired interiors",
  bigHeading: "Designing your dream spaces, one room at a time",
  paragraph:
    "We specialize in creating personalized, functional, and stylish interiors that reflect your unique vision.",
  backgroundType: "video",
  backgroundImage: "/media/hero/backgrounds/gallery1.png",
  backgroundVideo: "/media/hero/backgrounds/hero-bg_6FZ53sO.mp4",
};

export const services: Service[] = [
  {
    slug: "all-type-of-false-ceilings",
    title: "False ceilings & acoustics",
    category: "Ceilings",
    summary:
      "Gypsum, POP, and acoustic ceilings engineered to hide services, improve acoustics, and add drama.",
    image: "/images/falseceiling.jpeg",
    highlights: [
      "Integrated lighting and HVAC cutouts",
      "Moisture and fire-rated board options",
      "Cove, stepped, and floating profiles",
    ],
    sections: [
      {
        heading: "Precision-built frameworks",
        body: "We model ceiling layouts around MEP routes first, then build lightweight frames that stay rigid, flat, and crack free for years.",
      },
      {
        heading: "Clean finishes, quick installs",
        body: "Factory-finished cornices, acoustic panels, and seamless joints reduce on-site sanding while keeping the space dust-light and move-in ready sooner.",
      },
    ],
  },
  {
    slug: "electricalwork",
    title: "Electrical fitouts",
    category: "Services",
    summary:
      "Safe, code-compliant wiring, panels, and smart controls sized for modern homes and commercial loads.",
    image: "/images/electrical1.jpeg",
    highlights: [
      "Dedicated circuits for HVAC + kitchen",
      "Lighting controls and dimming plans",
      "Surge, ELCB, and earthing audits",
    ],
    sections: [
      {
        heading: "Load-balanced distribution",
        body: "We calculate diversified loads, select the right gauge cabling, and balance phases so panels stay cool and reliable.",
      },
      {
        heading: "Future-ready backbone",
        body: "Spare conduits, labeled junctions, and neatly dressed panels make later upgrades frictionless.",
      },
    ],
  },
  {
    slug: "lighting",
    title: "Lighting design",
    category: "Experience",
    summary:
      "Layered lighting plans that blend ambient, task, and accent lighting to set the right mood at every hour.",
    image: "/images/lighting.jpeg",
    highlights: [
      "Lux-level calculations per zone",
      "Human-centric warm/cool scenes",
      "Custom coves, trims, and profiles",
    ],
    sections: [
      {
        heading: "Light where life happens",
        body: "We start with how each space is used, then place beams, pools, and washes that flatter surfaces and faces without glare.",
      },
      {
        heading: "Smart, simple controls",
        body: "From single-room dimmers to whole-home scenes, we specify controls that are easy for everyone to use daily.",
      },
    ],
  },
  {
    slug: "paintings",
    title: "Painting & finishes",
    category: "Surfaces",
    summary:
      "Premium paint systems, textures, and protective coats that stand up to heat, humidity, and busy families.",
    image: "/images/painting.jpg",
    highlights: [
      "Low-VOC interior systems",
      "Moisture and stain resistant primers",
      "Feature wall textures and metallics",
    ],
    sections: [
      {
        heading: "Surface science",
        body: "We repair and level substrates, spot moisture pockets, and prime correctly so top coats look even and stay bright.",
      },
      {
        heading: "Detail-rich execution",
        body: "Crisp edge masking, masked hardware, and dust control keep your home livable during painting.",
      },
    ],
  },
  {
    slug: "woodwork",
    title: "Woodwork & storage",
    category: "Joinery",
    summary:
      "Built-in wardrobes, kitchens, and furniture that balance storage volume with clean, contemporary lines.",
    image: "/images/woodwork.jpeg",
    highlights: [
      "BWR/BWP ply + soft-close hardware",
      "Custom inserts for every routine",
      "Matte, PU, and veneer finish options",
    ],
    sections: [
      {
        heading: "Design for daily use",
        body: "We map your belongings and movement to plan drawer heights, hanging zones, and appliance garages that actually fit real life.",
      },
      {
        heading: "Built to last",
        body: "Moisture-sealed carcasses, edge-banding on all sides, and tested hardware prevent warps and rattles over time.",
      },
    ],
  },
  {
    slug: "furnishing",
    title: "Furnishings & soft goods",
    category: "Styling",
    summary:
      "Curtains, blinds, rugs, and upholstery palettes that add warmth, texture, and acoustic comfort.",
    image: "/images/furniture.jpeg",
    highlights: [
      "Performance fabrics and easy care",
      "Layered window treatments",
      "Custom sofas and accent chairs",
    ],
    sections: [
      {
        heading: "Material curation",
        body: "We blend breathable linens, velvets, and outdoor-rated weaves to match Hyderabad’s climate while keeping a plush feel.",
      },
      {
        heading: "Color stories that flow",
        body: "Room-to-room palettes are coordinated so every vista feels coherent, never cluttered.",
      },
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    category: "Outdoors",
    summary:
      "Terrace, balcony, and lawn makeovers with plants, lighting, and seating that extend your living space outdoors.",
    image: "/images/landscaping.jpeg",
    highlights: [
      "Low-maintenance planting palettes",
      "Drainage + waterproofing audits",
      "Outdoor mood lighting",
    ],
    sections: [
      {
        heading: "Climate-smart greens",
        body: "Native and hardy species keep upkeep low while still giving lush volume across the seasons.",
      },
      {
        heading: "Outdoor rooms",
        body: "We add pergolas, planters, and seating to carve out dining, lounge, and bar zones under the sky.",
      },
    ],
  },
  {
    slug: "civilwork",
    title: "Civil & turnkey builds",
    category: "Execution",
    summary:
      "Flooring, partitions, plumbing, and end-to-end site coordination so you get a single accountable partner.",
    image: "/images/civilwork.jpeg",
    highlights: [
      "Dedicated site supervision",
      "Bill of quantities with timelines",
      "Vendor + labour coordination",
    ],
    sections: [
      {
        heading: "Structured delivery",
        body: "Clear milestones, daily snag tracking, and transparent billing keep projects predictable.",
      },
      {
        heading: "Safety + compliance",
        body: "We enforce PPE, site housekeeping, and statutory approvals so handover is clean and compliant.",
      },
    ],
  },
];

export const gallery: GalleryItem[] = [
  { id: 1, title: "DRAWING ROOM", image: "/media/gallery/gallery1.png" },
  { id: 2, title: "LIVING HALL", image: "/media/gallery/gallery2.png" },
  { id: 3, title: "BATHROOM", image: "/media/gallery/gallery3.png" },
  { id: 4, title: "KIDS ROOMS", image: "/media/gallery/gallery4.png" },
  { id: 5, title: "PLAY AREA", image: "/media/gallery/gallery5.png" },
  { id: 6, title: "HALL", image: "/media/gallery/gallery5_0VN2z4d.png" },
  { id: 7, title: "BALCONY", image: "/media/gallery/gallery7.png" },
  { id: 8, title: "KITCHEN", image: "/media/gallery/gallery7_qbdFjYX.png" },
  { id: 9, title: "BATHROOMS", image: "/media/gallery/gallery8.png" },
  { id: 10, title: "BEDROOMS", image: "/media/gallery/gallery10.png" },
];

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "How Thoughtful Interior Design Can Transform Everyday Life",
    slug: "how-thoughtful-interior-design-can-transform-every",
    posterImage: "/media/blog/posters/blog1.png",
    createdAt: "2025-12-17T02:26:37.731Z",
    content: `<p>In today's fast world, our mood, productivity, relationships, and general well-being are entirely influenced by the particular living and working environments in which we spend most of our time. The thinking behind interior design today is not just about great looks, but about creating meaningful, useful environments that make life easier. This philosophy—one that considers excellent design can actually change how people interact, feel, and work—is shared by some of the best residential architects in Hyderabad.</p>
<p>The effects of smart design vary, and knowing them can help you make better decisions, whether you are searching for “interior designers near me” or wish to remodel your house, workplace, or commercial space.</p>
<p><strong>1. Good design makes people happier.</strong><br />A thoughtfully designed environment can quickly elevate your mood. The layout, natural lighting, color palette, and textures all combine to affect daily moods. The top interior designers of Hyderabad aim at creating serene and inviting living spaces, reflecting a homeowner's personality. This method is equally useful in commercial contexts. Top commercial interior designers in Hyderabad design workspaces to inspire employees and impress the clientele. This results in increased morale and productivity.</p>
<p><strong>2. Thoughtful design improves usability.</strong><br />In a well-designed room, every component serves a purpose: effortless mobility, better organization, cozy places to live and work, and a balance of beauty with utility. Interior designers and architects in Hyderabad make the best use of every available space so areas feel inviting and functional.</p>
<p><strong>3. Personalized design expresses identity.</strong><br />Your space should have a personal vibe. Thoughtful home design represents your lifestyle, preferences, and personality. According to the finest architects in Telangana, every home tells a story, and their designs incorporate distinctive materials, colors, furnishings, and spatial configurations that reflect the client's personality. The same is true for offices, where design should mirror the company’s culture.</p>
<p><strong>4. Modern innovations boost convenience.</strong><br />Leading architects in Hyderabad combine sustainable materials, innovative layouts, and technology to design future-compatible spaces: intelligent lighting systems, modular furniture, eco-friendly materials, automation, and multi-use hybrid areas.</p>
<p><strong>5. Well-designed spaces improve productivity.</strong><br />A well-thought-out design fosters focus, cuts down on distractions, and raises productivity. Business owners seek professional commercial interior designers because they understand the importance of a well-structured workplace. Performance improves when teams feel motivated and relaxed.</p>
<p><strong>6. Collaboration is easier than ever.</strong><br />Finding the right designer is now simple—start by browsing portfolios and booking a walkthrough. When you work with a team that values both utility and beauty, the process becomes exciting and collaborative.</p>
<p><strong>Bottom line</strong><br />Thoughtful home design is a potent tool that influences how you live, work, and connect—from boosting productivity to improving emotional well-being. Whether you’re researching the best residential architects in Hyderabad or exploring commercial apartment interior designers in Telangana, an investment in thoughtful design can change daily life in ways you never expected.</p>`,
  },
];

export const contactChannels = {
  phone: "+91 97033 19319",
  email: "skdesignsstudio.info@gmail.com",
  address: "Hyderabad, Telangana — serving India-wide projects.",
};

export function getExcerpt(html: string, words = 32) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text.split(" ").slice(0, words).join(" ") + (text.split(" ").length > words ? "…" : "");
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
