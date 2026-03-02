import Image from "next/image";
import type { GalleryItem } from "@/data/siteContent";

export function GalleryGrid({ items, columns = 3 }: { items: GalleryItem[]; columns?: 2 | 3 | 4 }) {
  const colClass = columns === 4 ? "md:grid-cols-3 lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-4 ${colClass}`}>
      {items.map((item) => (
        <figure key={item.id} className="card overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-3 text-sm text-white">
              {item.title}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
