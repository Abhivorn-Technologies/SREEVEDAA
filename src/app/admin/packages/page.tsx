import { ImageManager } from "@/components/admin/ImageManager";

export default function AdminPackagesPage() {
  return (
    <div>
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">Packages Page Management</h1>
      </div>
      <ImageManager page="packages" section="main" />
    </div>
  );
}
