import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/siteContent";

type Props = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: Props) {
  return (
    <article className="card group overflow-hidden">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="pill w-fit bg-white/15 text-xs uppercase tracking-[0.12em] text-amber-100">
            {service.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{service.title}</h3>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-sm text-slate-300 leading-relaxed">{service.summary}</p>
        <div className="tag-grid">
          {service.highlights.slice(0, compact ? 2 : 3).map((item) => (
            <span key={item} className="pill bg-white/5 text-xs text-slate-200">
              {item}
            </span>
          ))}
        </div>
        <Link className="btn-ghost text-sm mt-2 w-fit" href={`/${service.slug}`}>
          View details →
        </Link>
      </div>
    </article>
  );
}
