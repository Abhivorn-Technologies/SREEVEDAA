import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";
import { services } from "@/data/services";
import dbConnect from "@/lib/mongodb";
import SiteImage from "@/models/SiteImage";

export default async function ServicesPage() {
  await dbConnect();
  const dbImages = await SiteImage.find({ page: "services", section: "marquee" }).sort({ order: 1 }).lean();
  
  // Fallback to defaults if no images exist in DB yet
  const defaultImages = [
    "/images/hero_luxury_interior.png",
    "/images/gallery5.png",
    "/images/about_hero.png",
    "/images/gallery1.png",
    "/images/service_woodwork.png",
    "/images/civilworks.png",
    "/images/electrical.jpg",
    "/images/lighting.jpg"
  ];
  
  const marqueeImages = dbImages.length > 0 
    ? dbImages.map((img: any) => img.imageUrl) 
    : defaultImages;

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 font-sans">
      {/* Modern Classic Hero Section */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#FAF7F2] border-b border-[#EAE3D9] overflow-hidden">
        <div className="page-shell text-center max-w-5xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              OUR EXPERTISE
            </span>
          </ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-950 mb-6 font-serif leading-[1.1] tracking-tight">
            <SlowText text="Transform Your Spaces Into Masterpieces" delay={200} />
          </h1>
          <ScrollReveal animation="fade-in-up" delay={800}>
            <p className="text-base md:text-lg text-slate-700 font-light leading-relaxed max-w-2xl mx-auto">
              We don't just offer services—we architect growth and comfort. Our integrated approach combines cutting-edge materials, functional insights, and creative excellence to deliver measurable results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List Pictorial Card Grid */}
      <section className="relative z-20 py-16 lg:py-24 bg-[#FAF7F2]" id="services-grid">
        <div className="page-shell max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} animation="fade-in-up" delay={i * 80}>
                <div className="group h-full bg-white rounded-[2rem] overflow-hidden border border-[#EAE3D9] shadow-[0_10px_30px_-5px_rgba(163,111,76,0.06)] hover:shadow-2xl hover:border-[#A36F4C]/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between p-5 md:p-6">
                  <div>
                    {/* Card Image */}
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative mb-6">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    {/* Card Content */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-950 mb-2 group-hover:text-[#8C1F1F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed mb-6 line-clamp-3">
                      {service.desc}
                    </p>
                  </div>
                  {/* Explore Service Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link 
                      href={`/service/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#A36F4C] uppercase font-sans hover:text-[#8C1F1F] transition-colors group-hover:translate-x-1 duration-300"
                    >
                      Explore Service
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Running Images Marquee */}
      <section className="py-12 bg-[#FAF7F2] border-t border-b border-[#EAE3D9] overflow-hidden relative">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {[...marqueeImages, ...marqueeImages].map((src, i) => (
            <div key={i} className="relative w-[280px] md:w-[360px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden shrink-0 group border border-[#EAE3D9] shadow-sm">
              <Image 
                src={src} 
                alt="Sreevedaa Interiors Showcase" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Floating Glassmorphism CTA Section */}
      <section className="py-20 md:py-24 bg-[#FAF7F2] px-4 relative overflow-hidden">
        <ScrollReveal animation="fade-in-up" className="page-shell max-w-4xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-xl p-10 md:p-16 border border-[#EAE3D9] shadow-[0_20px_60px_-15px_rgba(163,111,76,0.1)] text-center overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-amber-200/30 via-orange-200/20 to-red-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              START YOUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-slate-950 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-slate-800 mb-8 max-w-xl mx-auto font-normal text-base md:text-lg leading-relaxed">
              Schedule a free consultation and discover how our integrated approach can drive stunning results for your project.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#8C1F1F] to-[#B32D2D] hover:from-[#A32424] hover:to-[#8C1F1F] text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-10 py-5 rounded-full shadow-[0_12px_30px_rgba(140,31,31,0.3)] hover:shadow-[0_18px_40px_rgba(140,31,31,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Consultation
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
