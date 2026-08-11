export type Service = {
  title: string;
  slug: string;
  desc: string;
  features: string[];
  image: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    title: "Residential Interiors",
    slug: "residential-interiors",
    desc: "Transform your home into a personalized sanctuary with bespoke spatial planning, luxury finishes, and ergonomic living solutions.",
    features: ["Living & Dining Concepts", "Luxury Master Bedrooms", "Custom Carpentry & Storage", "Lighting & Ambient Design"],
    image: "/images/hero_luxury_interior.png",
    gallery: ["/images/hero_luxury_interior.png", "/images/gallery1.png", "/images/gallery4.png", "/images/about-img-1.jpg"]
  },
  {
    title: "Commercial Interiors",
    slug: "commercial-interiors",
    desc: "Captivate visitors and scale your brand identity with high-impact commercial retail and hospitality interior spaces.",
    features: ["Retail Storefronts", "Hospitality & Dining Layouts", "Brand Experience Design", "High-Traffic Durability"],
    image: "/images/gallery5.png",
    gallery: ["/images/gallery5.png", "/images/design_strategy.png", "/images/gallery1.png", "/images/about_hero.png"]
  },
  {
    title: "Office Interiors",
    slug: "office-interiors",
    desc: "Boost productivity and corporate culture with modern ergonomic office layouts, collaborative zones, and executive suites.",
    features: ["Corporate Workstations", "Executive Boardrooms", "Acoustic Comfort Zones", "Reception & Lounge Areas"],
    image: "/images/about_hero.png",
    gallery: ["/images/about_hero.png", "/images/design_strategy.png", "/images/gallery5.png", "/images/hero_luxury_interior.png"]
  },
  {
    title: "Modular Kitchens",
    slug: "modular-kitchens",
    desc: "Engineered efficiency meets culinary elegance with premium modular kitchen designs, German hardware, and smart organization.",
    features: ["Island & Parallel Layouts", "Soft-Close German Fittings", "Quartz & Marble Countertops", "Smart Appliance Integration"],
    image: "/images/gallery1.png",
    gallery: ["/images/gallery1.png", "/images/hero_luxury_interior.png", "/images/gallery4.png", "/images/about-img-1.jpg"]
  },
  {
    title: "Custom Furniture",
    slug: "custom-furniture",
    desc: "Bespoke handcrafted furniture tailored to your exact dimensions, luxury fabric preferences, and spatial requirements.",
    features: ["Custom Sofa Sets", "Handcrafted Dining Tables", "Modular Wardrobes", "Accent Seating & Console Units"],
    image: "/images/service_woodwork.png",
    gallery: ["/images/service_woodwork.png", "/images/woodworks.jpg", "/images/gallery4.png", "/images/gallery1.png"]
  },
  {
    title: "Civil & Renovation Works",
    slug: "civil-renovation-works",
    desc: "Comprehensive structural remodeling, wall alterations, tile laying, and complete space restoration with engineering precision.",
    features: ["Structural Alterations", "Tiling & Stonework", "Waterproofing Solutions", "Plastering & Masonry"],
    image: "/images/civilworks.png",
    gallery: ["/images/civilworks.png", "/images/gallery2.png", "/images/gallery3.png", "/images/gallery5.png"]
  },
  {
    title: "Electrical & Plumbing",
    slug: "electrical-plumbing",
    desc: "Precision hidden wiring, modern sanitary fittings, power backup setup, and smart distribution systems for total safety.",
    features: ["Concealed Copper Wiring", "Sanitary & CP Fittings", "Db Box & Circuit Layouts", "LED Driver Distributions"],
    image: "/images/electrical.jpg",
    gallery: ["/images/electrical.jpg", "/images/lighting.jpg", "/images/civilworks.png", "/images/gallery3.png"]
  },
  {
    title: "False Ceiling & Lighting",
    slug: "false-ceiling-lighting",
    desc: "Architectural ceiling designs integrated with ambient cove lighting, magnetic track lights, and acoustic insulation.",
    features: ["Gypsum Cove Ceilings", "Wooden Paneling Accents", "Magnetic Track & Profile Lights", "Acoustic Insulation"],
    image: "/images/lighting.jpg",
    gallery: ["/images/lighting.jpg", "/images/service_ceilings.png", "/images/gallery4.png", "/images/hero_luxury_interior.png"]
  },
  {
    title: "Flooring & Wall Finishes",
    slug: "flooring-wall-finishes",
    desc: "Italian marble, engineered hardwood, ceramic tiles, and textured wall paneling that elevate room presence.",
    features: ["Italian Marble Laying", "Hardwood & Laminated Flooring", "3D Wall Paneling & Fluting", "Micro-Cement Finishes"],
    image: "/images/gallery4.png",
    gallery: ["/images/gallery4.png", "/images/gallery1.png", "/images/gallery2.png", "/images/about-img-1.jpg"]
  },
  {
    title: "Painting & Decorative Finishes",
    slug: "painting-decorative-finishes",
    desc: "Royal Venetian plaster, metallic textures, PU wood polishes, and premium eco-friendly interior paints.",
    features: ["Venetian Plaster & Texture", "PU Wood & Metal Polishing", "Washable Premium Acrylic Paint", "Wallpaper & Wall Murals"],
    image: "/images/painting.jpg",
    gallery: ["/images/painting.jpg", "/images/gallery4.png", "/images/hero_luxury_interior.png", "/images/gallery2.png"]
  },
  {
    title: "Smart Home Solutions",
    slug: "smart-home-solutions",
    desc: "Automated lighting, curtain controls, smart locks, and voice-integrated climate control systems for modern living.",
    features: ["Automated Touch Switches", "Motorized Curtain Control", "Biometric Smart Locks", "Integrated Security Cameras"],
    image: "/images/design_strategy.png",
    gallery: ["/images/design_strategy.png", "/images/lighting.jpg", "/images/electrical.jpg", "/images/gallery3.png"]
  },
  {
    title: "Turnkey Project Management",
    slug: "turnkey-project-management",
    desc: "Hassle-free end-to-end management from concept design and material procurement to site execution and final key handover.",
    features: ["Single Point Contact Manager", "Transparent Cost Quotations", "Strict Timeline Delivery", "Multi-stage Quality Audit"],
    image: "/images/service-1.jpg",
    gallery: ["/images/service-1.jpg", "/images/hero_luxury_interior.png", "/images/civilworks.png", "/images/gallery5.png"]
  }
];
