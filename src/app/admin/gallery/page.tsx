import { ImageManager } from "@/components/admin/ImageManager";

export default function AdminGalleryPage() {
  return (
    <div>
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Add, edit, or remove images displayed on the public Gallery page.
        </p>
      </div>
      
      <ImageManager page="gallery" section="main" />
    </div>
  );
}
