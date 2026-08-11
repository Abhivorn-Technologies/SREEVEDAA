const fs = require('fs');
const { MongoClient } = require('mongodb');

async function run() {
  const env = fs.readFileSync('.env.local', 'utf8');
  const uriLine = env.split('\n').find(l => l.startsWith('MONGODB_URI='));
  let uri = uriLine.substring(uriLine.indexOf('=') + 1).trim().replace(/^['"]|['"]$/g, '');
  if (uri.includes('&ssl') && !uri.includes('&ssl=')) {
      uri = uri.replace('&ssl', '&ssl=true');
  }
  
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  
  // Set the images to the founder portrait WITH sunglasses
  await db.collection('siteimages').updateMany(
    { section: 'team' },
    { $set: { 
        imageUrl: '/images/founder_portrait_clean.jpg', 
        defaultImageUrl: '/images/founder_portrait_clean.jpg' 
    } }
  );
  
  console.log('Updated team images in DB successfully!');
  await client.close();
}
run().catch(console.error);
