import { ImageManager } from "@/components/admin/ImageManager";

export default function AdminContactPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Contact Page Management</h1>
      </div>
      <ImageManager page="contact" section="main" title="Contact Page Images" />
    </div>
  );
}
