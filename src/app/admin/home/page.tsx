import { ImageManager } from "@/components/admin/ImageManager";

export default function AdminHomePage() {
  return (
    <div>
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">Home Page Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage all images displayed on the public Home page.
        </p>
      </div>
      
      <ImageManager page="home" section="hero" title="Hero Section" />
      <ImageManager page="home" section="services" title="Services Section" />
      <ImageManager page="home" section="highlight" title="Highlight Section" />
    </div>
  );
}
