const fs = require('fs');
const { MongoClient } = require('mongodb');

async function migrateDefaultUrls() {
  const envFile = fs.readFileSync('.env.local', 'utf8');
  const mongoUriLine = envFile.split('\n').find(line => line.startsWith('MONGODB_URI='));
  const uri = mongoUriLine ? mongoUriLine.replace('MONGODB_URI=', '').trim().replace(/^["']|["']$/g, '') : null;

  if (!uri) {
    console.error("No MONGODB_URI found");
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const siteimages = db.collection('siteimages');

    // 1. Force update the FAQ image since we know the user changed it and wants to restore it
    await siteimages.updateOne(
      { page: 'faq', section: 'main' },
      { $set: { defaultImageUrl: '/images/contact_hero.png' } }
    );
    
    // 2. For all other images, if they don't have a defaultImageUrl, just use their current imageUrl
    // since we seeded them all with the original defaults earlier, and the user hasn't changed them yet!
    const allImages = await siteimages.find({ defaultImageUrl: { $exists: false } }).toArray();
    
    let updatedCount = 0;
    for (const img of allImages) {
      await siteimages.updateOne(
        { _id: img._id },
        { $set: { defaultImageUrl: img.imageUrl } }
      );
      updatedCount++;
    }

    console.log(`Successfully migrated ${updatedCount} images with defaultImageUrl! FAQ forced to contact_hero.png.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

migrateDefaultUrls();
