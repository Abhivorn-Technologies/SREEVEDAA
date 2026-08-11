import { ImageManager } from "@/components/admin/ImageManager";

export default function AdminAboutPage() {
  return (
    <div>
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">About Page Management</h1>
      </div>
      <ImageManager page="about" section="hero" title="Hero Images" />
      <ImageManager page="about" section="team" title="Team Member Images" />
    </div>
  );
}
