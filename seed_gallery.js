const fs = require('fs');
const { MongoClient } = require('mongodb');

const galleryImages = [
  { src: "/images/hero_luxury_interior.png", title: "Luxury Living Room" },
  { src: "/images/gallery3.png", title: "Modern False Ceilings" },
  { src: "/images/service_woodwork.png", title: "Custom Wardrobes" },
  { src: "/images/gallery1.png", title: "Corporate Studio" },
  { src: "/images/gallery5.png", title: "Material Board" },
  { src: "/images/contact_hero.png", title: "Grand Reception" }
];

async function seedGallery() {
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

    // Remove existing gallery images
    await siteimages.deleteMany({ page: 'gallery', section: 'main' });
    console.log("Cleared existing gallery images");

    const now = new Date();
    const docs = galleryImages.map((img, idx) => ({
      page: 'gallery',
      section: 'main',
      title: img.title,
      imageUrl: img.src,
      order: idx + 1,
      createdAt: now,
      updatedAt: now,
      __v: 0
    }));

    await siteimages.insertMany(docs);
    console.log(`Successfully inserted ${docs.length} gallery images!`);

  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.close();
  }
}

seedGallery();
