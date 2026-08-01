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
    title: "Master Planning & Strategy",
    slug: "master-planning-strategy",
    desc: "Scale your project across scopes with comprehensive architectural solutions designed for large-scale developments.",
    features: ["Global Design Strategy", "Site Analysis", "Feasibility Studies", "Zoning & Compliance"],
    image: "/images/design_strategy.png",
    gallery: ["/images/design_strategy.png", "/images/hero_luxury_interior.png", "/images/gallery1.png", "/images/gallery4.png"]
  },
  {
    title: "Turnkey Execution",
    slug: "turnkey-execution",
    desc: "Drive immediate results and flawless execution through our end-to-end turnkey interior contracting.",
    features: ["Project Management", "Civil & Structural Works", "Custom Carpentry", "Quality Assurance"],
    image: "/images/hero_luxury_interior.png",
    gallery: ["/images/hero_luxury_interior.png", "/images/gallery3.png", "/images/service_woodwork.png", "/images/gallery5.png"]
  },
  {
    title: "Space Planning & Layouts",
    slug: "space-planning-layouts",
    desc: "Comprehensive spatial strategies designed to build fluid movement, drive comfort, and strengthen identity.",
    features: ["Floor Planning", "Furniture Layouts", "Circulation Design", "Vastu Consultation"],
    image: "/images/gallery2.png",
    gallery: ["/images/gallery2.png", "/images/gallery1.png", "/images/gallery4.png", "/images/design_strategy.png"]
  },
  {
    title: "3D Visualization & VR",
    slug: "3d-visualization-vr",
    desc: "Build lasting confidence before execution with hyper-realistic 3D renders and virtual reality walk-throughs.",
    features: ["3D Rendering", "VR Walk-throughs", "Material Visualization", "Lighting Simulation"],
    image: "/images/gallery3.png",
    gallery: ["/images/gallery3.png", "/images/hero_luxury_interior.png", "/images/gallery2.png", "/images/gallery5.png"]
  },
  {
    title: "Custom Furniture Design",
    slug: "custom-furniture-design",
    desc: "Build deeper connections with your space through bespoke furniture pieces that drive uniqueness and comfort.",
    features: ["Sofa & Seating", "Modular Wardrobes", "Custom Dining Sets", "Beds & Headboards"],
    image: "/images/furniture1.jpeg",
    gallery: ["/images/furniture1.jpeg", "/images/service_woodwork.png", "/images/gallery1.png", "/images/hero_luxury_interior.png"]
  },
  {
    title: "Lighting Design",
    slug: "lighting-design",
    desc: "Elevate your interiors through strategic lighting solutions that drive mood, functionality, and smart living.",
    features: ["Ambient Lighting", "Task Lighting", "Smart Home Automation", "Energy Efficiency"],
    image: "/images/lighting.jpeg",
    gallery: ["/images/lighting.jpeg", "/images/gallery4.png", "/images/gallery3.png", "/images/gallery2.png"]
  },
  {
    title: "Material Selection",
    slug: "material-selection",
    desc: "Transform raw materials into breathtaking finishes that drive smarter aesthetics and better durability.",
    features: ["Marble & Stone", "Premium Veneers", "Luxury Fabrics", "Global Sourcing"],
    image: "/images/gallery4.png",
    gallery: ["/images/gallery4.png", "/images/furniture1.jpeg", "/images/hero_luxury_interior.png", "/images/service_woodwork.png"]
  },
  {
    title: "False Ceilings & Paneling",
    slug: "false-ceilings-paneling",
    desc: "Ceilings and walls that scale your room's presence with POP, gypsum, wood, and metal accents.",
    features: ["Gypsum Ceilings", "Wooden Paneling", "Acoustic Treatments", "Metal Accents"],
    image: "/images/falseceiling.jpeg",
    gallery: ["/images/falseceiling.jpeg", "/images/gallery1.png", "/images/gallery5.png", "/images/gallery2.png"]
  },
  {
    title: "Commercial & Retail",
    slug: "commercial-retail",
    desc: "Win more business with office and retail spaces that captivate clients before the competition knows what hit them.",
    features: ["Corporate Office", "Retail Stores", "Hospitality Design", "Brand Identity"],
    image: "/images/gallery5.png",
    gallery: ["/images/gallery5.png", "/images/design_strategy.png", "/images/gallery1.png", "/images/hero_luxury_interior.png"]
  }
];
