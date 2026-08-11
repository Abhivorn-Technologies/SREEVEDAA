import { ImageManager } from "@/components/admin/ImageManager";

export default function AdminFAQPage() {
  return (
    <div>
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">Q/A Page Management</h1>
      </div>
      <ImageManager page="faq" section="main" />
    </div>
  );
}
