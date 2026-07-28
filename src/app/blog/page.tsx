import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="page-shell text-center max-w-3xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <span className="inline-block mb-3 text-maroon-800 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
              Design Insights
            </span>
          </ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 font-serif leading-[1.1]">
            <SlowText text="Our Journal" />
          </h1>
          <ScrollReveal animation="fade-in-up" delay={600}>
            <p className="text-sm md:text-lg text-slate-600 font-light leading-relaxed">
              Explore our latest tips, trends, and ideas for creating beautiful and comfortable spaces.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="pb-16 px-4">
        <div className="page-shell">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "The Return of Warm Woods in 2026",
                date: "July 15, 2026",
                category: "Trends",
                desc: "Discover why ultra-modern cold interiors are making way for rich, warm wood tones and textures.",
                img: "/images/service_woodwork.png"
              },
              {
                title: "Maximizing Natural Light in Urban Homes",
                date: "June 28, 2026",
                category: "Architecture",
                desc: "Strategic spatial planning techniques to flood your city apartment with beautiful natural light.",
                img: "/images/gallery2.png"
              },
              {
                title: "Smart Lighting: The Invisible Decor",
                date: "June 10, 2026",
                category: "Technology",
                desc: "Learn how automated, tunable ambient lighting can completely change the mood and functionality.",
                img: "/images/gallery3.png"
              }
            ].map((post, idx) => (
              <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 150}>
                <div className="group h-full flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(128,0,0,0.15)] transition-all duration-[800ms] rounded-2xl overflow-hidden hover:-translate-y-3">
                  <div className="relative h-56 md:h-72 overflow-hidden bg-slate-100">
                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6 md:p-10 flex flex-col flex-1">
                    <div className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800 mb-3 md:mb-5 flex gap-3 items-center">
                      <span>{post.category}</span>
                      <span className="w-4 md:w-6 h-[1px] bg-maroon-300"></span>
                      <span className="text-slate-500 font-light">{post.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-5 leading-snug font-serif group-hover:text-maroon-800 transition-colors min-h-[4rem] md:min-h-[4.5rem] line-clamp-2">{post.title}</h3>
                    <p className="text-slate-700 text-sm md:text-base font-light mb-6 md:mb-8 leading-relaxed flex-1 line-clamp-3 md:line-clamp-2">{post.desc}</p>
                    <Link href="#" className="flex items-center gap-2 md:gap-3 text-maroon-800 font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs hover:text-maroon-600 transition-colors w-max group/link mt-auto">
                      Explore Article
                      <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
