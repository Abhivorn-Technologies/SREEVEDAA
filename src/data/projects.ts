export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  category: string;
  description: string;
  marqueeImages: string[];
  videos: string[];
}

const defaultMarqueeImages = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
  "/images/gallery5.png",
  "/images/gallery6.png",
];

const defaultVideos = [
  "/images/hero-bg.mp4",
  "/images/hero-bg.mp4",
  "/images/hero-bg.mp4",
  "/images/hero-bg.mp4",
];

export const projects: Project[] = [
  { 
    id: 1, 
    title: "Modern Villa Interior", 
    location: "Jubilee Hills, Hyderabad", 
    image: "/images/gallery1.png", 
    category: "Residential", 
    description: "A sprawling ultra-luxury villa designed with a seamless blend of contemporary minimalism and timeless elegance. We integrated custom-crafted furniture, sophisticated lighting automation, and premium imported marbles to create a sanctuary of refined living that perfectly matches the client's prestigious lifestyle.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 2, 
    title: "Contemporary Office", 
    location: "Hitec City, Hyderabad", 
    image: "/images/gallery2.png", 
    category: "Commercial", 
    description: "This innovative corporate workspace was engineered to foster collaboration and boost productivity. The design features an open-plan layout, ergonomic workstations, acoustic privacy pods, and a vibrant cafeteria, all wrapped in a sleek, modern aesthetic that reflects the company's forward-thinking tech culture.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 3, 
    title: "Luxury Apartment", 
    location: "Banjara Hills, Hyderabad", 
    image: "/images/gallery3.png", 
    category: "Residential", 
    description: "Transformed a bare-shell apartment into a sophisticated urban retreat. The design emphasizes natural light, complemented by a muted color palette, rich walnut wood accents, and bespoke brass fixtures. The result is a highly functional yet deeply comforting home that exudes understated luxury.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 4, 
    title: "Minimalist Studio", 
    location: "Kondapur, Hyderabad", 
    image: "/images/gallery4.png", 
    category: "Residential", 
    description: "A masterclass in space optimization and smart design. This compact studio was reimagined with multi-functional modular furniture, hidden storage solutions, and a light Scandinavian color scheme to maximize the perception of space while delivering every essential modern comfort without visual clutter.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 5, 
    title: "Boutique Hotel", 
    location: "Gachibowli, Hyderabad", 
    image: "/images/gallery5.png", 
    category: "Hospitality", 
    description: "An exclusive boutique hospitality project where each suite tells a unique story. We curated the entire interior experience, from the grand lobby's striking chandelier to the plush, culturally-inspired textiles in the guest rooms, creating a memorable, immersive stay for high-end travelers.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 6, 
    title: "Urban Penthouse", 
    location: "Madhapur, Hyderabad", 
    image: "/images/gallery6.png", 
    category: "Residential", 
    description: "A spectacular high-rise penthouse boasting panoramic city views. The interior architecture focuses on expansive open spaces, floor-to-ceiling glass, and a dramatic double-height living area. Premium Italian leather upholstery and statement art pieces complete this modern architectural masterpiece.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 7, 
    title: "Corporate Workspace", 
    location: "Financial District", 
    image: "/images/gallery7.png", 
    category: "Commercial", 
    description: "Designed for a leading multinational firm, this office balances formal executive suites with dynamic, agile working zones. The aesthetic uses the brand's core colors subtly integrated into acoustic paneling, while biophilic design elements like indoor green walls enhance employee well-being and air quality.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 8, 
    title: "Classic Home Design", 
    location: "Secunderabad", 
    image: "/images/gallery8.png", 
    category: "Residential", 
    description: "A beautiful homage to traditional Indian aesthetics fused with modern functionality. The project features intricate woodwork, classic arches, customized heritage tiles, and warm ambient lighting. It perfectly captures the essence of a warm, welcoming family home deeply rooted in cultural heritage.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 9, 
    title: "Retail Showroom", 
    location: "Kukatpally, Hyderabad", 
    image: "/images/gallery10.png", 
    category: "Commercial", 
    description: "A high-end retail environment designed to maximize product visibility and elevate the customer shopping experience. We employed strategic track lighting, minimalist display units, and a luxurious material palette of brushed steel and dark oak to create an inviting, premium brand atmosphere.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
  { 
    id: 10, 
    title: "Smart Home Integration", 
    location: "Gopanpally, Hyderabad", 
    image: "/images/service-1.jpg", 
    category: "Residential", 
    description: "A fully automated, future-ready home where technology meets luxury design. Invisible speakers, motorized window treatments, and climate-responsive lighting were seamlessly integrated into the contemporary architecture, ensuring the technology remains discreet while offering absolute comfort and control.",
    marqueeImages: defaultMarqueeImages,
    videos: defaultVideos,
  },
];
