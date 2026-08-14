import dbConnect from "@/lib/mongodb";
import SiteImage from "@/models/SiteImage";
import { FAQClient } from "./FAQClient";

export const revalidate = 60;

export default async function FAQPage() {
  await dbConnect();
  
  // Fetch images for the FAQ page
  const dbImages = await SiteImage.find({ page: "faq", section: "main" }).sort({ order: 1 }).lean();
  
  // Get hero image or fallback
  const heroImage = dbImages.length > 0 ? dbImages[0].imageUrl : "/images/contact_hero.png";

  return (
    <FAQClient heroImage={heroImage} />
  );
}
