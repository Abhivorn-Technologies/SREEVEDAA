import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { projects } from "@/data/projects";

export async function GET() {
  try {
    await dbConnect();
    // Clear existing projects to avoid duplicates during testing
    await Project.deleteMany({});
    
    // Map hardcoded data to Mongoose schema format
    const projectDocs = projects.map((p, index) => ({
      title: p.title,
      location: p.location,
      category: p.category,
      description: p.description,
      image: p.image,
      marqueeImages: p.marqueeImages,
      videos: p.videos,
      order: index + 1
    }));

    // Insert all projects
    const inserted = await Project.insertMany(projectDocs);
    
    return NextResponse.json({ success: true, count: inserted.length, message: "Projects seeded successfully." });
  } catch (error: any) {
    console.error("Seeding error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
