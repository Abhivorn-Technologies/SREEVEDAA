const fs = require('fs');
const { MongoClient } = require('mongodb');

const servicesData = [
  {
    slug: "master-planning-strategy",
    image: "/images/design_strategy.png",
    gallery: ["/images/design_strategy.png", "/images/hero_luxury_interior.png", "/images/gallery1.png", "/images/gallery4.png"]
  },
  {
    slug: "turnkey-execution",
    image: "/images/hero_luxury_interior.png",
    gallery: ["/images/hero_luxury_interior.png", "/images/gallery3.png", "/images/service_woodwork.png", "/images/gallery5.png"]
  },
  {
    slug: "space-planning-layouts",
    image: "/images/gallery2.png",
    gallery: ["/images/gallery2.png", "/images/gallery1.png", "/images/gallery4.png", "/images/design_strategy.png"]
  },
  {
    slug: "3d-visualization-vr",
    image: "/images/gallery3.png",
    gallery: ["/images/gallery3.png", "/images/hero_luxury_interior.png", "/images/gallery2.png", "/images/gallery5.png"]
  },
  {
    slug: "custom-furniture-design",
    image: "/images/furniture1.jpeg",
    gallery: ["/images/furniture1.jpeg", "/images/service_woodwork.png", "/images/gallery1.png", "/images/hero_luxury_interior.png"]
  },
  {
    slug: "lighting-design",
    image: "/images/lighting.jpeg",
    gallery: ["/images/lighting.jpeg", "/images/gallery4.png", "/images/gallery3.png", "/images/gallery2.png"]
  },
  {
    slug: "material-selection",
    image: "/images/gallery4.png",
    gallery: ["/images/gallery4.png", "/images/furniture1.jpeg", "/images/hero_luxury_interior.png", "/images/service_woodwork.png"]
  },
  {
    slug: "false-ceilings-paneling",
    image: "/images/falseceiling.jpeg",
    gallery: ["/images/falseceiling.jpeg", "/images/gallery1.png", "/images/gallery5.png", "/images/gallery2.png"]
  },
  {
    slug: "commercial-retail",
    image: "/images/gallery5.png",
    gallery: ["/images/gallery5.png", "/images/design_strategy.png", "/images/gallery1.png", "/images/hero_luxury_interior.png"]
  }
];

const marqueeImages = [
  "/images/hero_luxury_interior.png",
  "/images/design_strategy.png",
  "/images/about_hero.png",
  "/images/contact_hero.png",
  "/images/hero_luxury_interior.png",
  "/images/design_strategy.png",
  "/images/about_hero.png",
  "/images/contact_hero.png"
];

async function seedServices() {
  const envFile = fs.readFileSync('.env.local', 'utf8');
  const mongoUriLine = envFile.split('\n').find(line => line.startsWith('MONGODB_URI='));
  const uri = mongoUriLine ? mongoUriLine.replace('MONGODB_URI=', '').trim().replace(/^["']|["']$/g, '') : null;

  if (!uri) {
    console.error("No MONGODB_URI found in .env.local");
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db();
    const siteimages = db.collection('siteimages');

    // Remove existing services images (so we don't duplicate on re-runs)
    await siteimages.deleteMany({ page: { $regex: '^service' } });
    console.log("Cleared existing services images");

    const docs = [];
    const now = new Date();

    // 1. Add Marquee Images for main services page
    marqueeImages.forEach((img, idx) => {
      docs.push({
        page: 'services',
        section: 'marquee',
        title: `Marquee Image ${idx + 1}`,
        imageUrl: img,
        order: idx + 1,
        createdAt: now,
        updatedAt: now,
        __v: 0
      });
    });

    // 2. Add subpage images (Hero and Gallery)
    servicesData.forEach((service) => {
      // Hero image
      docs.push({
        page: `service-${service.slug}`,
        section: 'hero',
        title: 'Hero Banner',
        imageUrl: service.image,
        order: 1,
        createdAt: now,
        updatedAt: now,
        __v: 0
      });

      // Gallery images
      service.gallery.forEach((gImg, gIdx) => {
        docs.push({
          page: `service-${service.slug}`,
          section: 'gallery',
          title: `Gallery Image ${gIdx + 1}`,
          imageUrl: gImg,
          order: gIdx + 1,
          createdAt: now,
          updatedAt: now,
          __v: 0
        });
      });
    });

    await siteimages.insertMany(docs);
    console.log(`Successfully inserted ${docs.length} service images!`);

  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.close();
  }
}

seedServices();
