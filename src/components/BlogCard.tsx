import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/siteContent";
import { formatDate, getExcerpt } from "@/data/siteContent";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={post.posterImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
          <span className="pill bg-white/10 text-[11px]">Insights</span>
          <span className="text-slate-300">{formatDate(post.createdAt)}</span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{getExcerpt(post.content, 28)}</p>
        <Link href={`/blog/${post.slug}`} className="btn-ghost text-sm w-fit">
          Read article →
        </Link>
      </div>
    </article>
  );
}
