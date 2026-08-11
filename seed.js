const fs = require('fs');
const { MongoClient } = require('mongodb');

async function seed() {
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

    // Clear existing images to avoid duplicates
    await siteimages.deleteMany({});
    console.log("Cleared existing siteimages");

    const defaultImages = [
      { page: 'home', section: 'hero', title: 'Hero Background', imageUrl: '/images/hero_luxury_interior.png', order: 1 },
      
      { page: 'home', section: 'services', title: 'Service 1', imageUrl: '/images/service_ceilings.png', order: 1 },
      { page: 'home', section: 'services', title: 'Service 2', imageUrl: '/images/service_woodwork.png', order: 2 },
      { page: 'home', section: 'services', title: 'Service 3', imageUrl: '/images/painting.jpg', order: 3 },
      { page: 'home', section: 'services', title: 'Service 4', imageUrl: '/images/hero_luxury_interior.png', order: 4 },
      
      { page: 'home', section: 'highlight', title: 'Highlight Image', imageUrl: '/images/design_strategy.png', order: 1 },
      
      { page: 'home', section: 'team', title: 'Team Member 1', imageUrl: '/images/founder_ai.png', order: 1 },
      { page: 'home', section: 'team', title: 'Team Member 2', imageUrl: '/images/founder_ai.png', order: 2 },
      
      { page: 'faq', section: 'main', title: 'FAQ Background', imageUrl: '/images/contact_hero.png', order: 1 },
      
      { page: 'about', section: 'hero', title: 'About Hero', imageUrl: '/images/about_hero.png', order: 1 },
      { page: 'about', section: 'team', title: 'Founder 1', imageUrl: '/images/founder_ai.png', order: 1 },
      { page: 'about', section: 'team', title: 'Founder 2', imageUrl: '/images/founder_ai.png', order: 2 }
    ];

    const now = new Date();
    const docs = defaultImages.map(img => ({
      ...img,
      createdAt: now,
      updatedAt: now,
      __v: 0
    }));

    await siteimages.insertMany(docs);
    console.log("Successfully inserted default images!");

  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.close();
  }
}

seed();
