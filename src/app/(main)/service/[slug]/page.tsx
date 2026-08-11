import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { SlowText } from "@/components/SlowText";
import { ScrollReveal } from "@/components/ScrollReveal";
import dbConnect from "@/lib/mongodb";
import SiteImage from "@/models/SiteImage";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }
  
  await dbConnect();
  // Fetch DB images for this specific service
  const dbImages = await SiteImage.find({ page: `service-${slug}` }).sort({ order: 1 }).lean();
  
  const getImageUrl = (section: string, defaultUrl: string, index: number = 0) => {
    const sectionImages = dbImages.filter((img: any) => img.section === section);
    return sectionImages[index]?.imageUrl || defaultUrl;
  };

  const heroImage = getImageUrl("hero", service.image);
  const galleryImages = [
    getImageUrl("gallery", service.gallery[0], 0),
    getImageUrl("gallery", service.gallery[1] || service.gallery[0], 1),
    getImageUrl("gallery", service.gallery[2] || service.gallery[0], 2),
    getImageUrl("gallery", service.gallery[3] || service.gallery[0], 3),
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 font-sans">
      {/* SECTION 1: HD Premium Hero Banner */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
        <Image 
          src={heroImage} 
          alt={service.title} 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 page-shell max-w-7xl mx-auto px-4 w-full">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="flex flex-col items-center text-center gap-6 max-w-5xl mx-auto">
              <span className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-amber-300 font-sans font-bold tracking-[0.3em] uppercase text-xs md:text-sm shadow-2xl">
                PREMIUM SERVICE
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
                <SlowText text={service.title} />
              </h1>
              <p className="text-slate-100 font-light text-base md:text-xl max-w-3xl mt-4 leading-relaxed mx-auto drop-shadow-lg">
                {service.desc}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: 3D Groove Grid Gallery & Overview */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#EAE3D9]">
        <div className="page-shell max-w-7xl mx-auto px-4">
          
          <ScrollReveal animation="fade-in-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div className="max-w-2xl">
                <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  EXCELLENCE & INTEGRITY
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 leading-tight">
                  Uncompromising Quality. <br className="hidden md:block" /> Precision Execution.
                </h2>
              </div>
              <a 
                href={`/contact?service=${service.slug}`}
                className="inline-flex shrink-0 items-center gap-3 text-white bg-[#8C1F1F] hover:bg-amber-600 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Discuss This Project
              </a>
            </div>
          </ScrollReveal>

          {/* The 3D Groove Grid Gallery */}
          <ScrollReveal animation="fade-in-up" delay={200}>
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Top Large Feature Image */}
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-xl border border-[#EAE3D9] group bg-white">
                <Image src={galleryImages[0]} fill alt={`${service.title} View 1`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
              </div>
              
              {/* Bottom Row: 3 Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[320px] rounded-[2rem] overflow-hidden shadow-md border border-[#EAE3D9] group bg-white">
                  <Image src={galleryImages[1]} fill alt={`${service.title} View 2`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
                </div>
                
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[320px] rounded-[2rem] overflow-hidden shadow-md border border-[#EAE3D9] group bg-white">
                  <Image src={galleryImages[2]} fill alt={`${service.title} View 3`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
                </div>
                
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[320px] rounded-[2rem] overflow-hidden shadow-md border border-[#EAE3D9] group bg-white">
                  <Image src={galleryImages[3]} fill alt={`${service.title} View 4`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* SECTION 3: Capabilities */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#EAE3D9]">
        <div className="page-shell max-w-7xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="text-center mb-14">
              <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                OUR CAPABILITIES
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-950 leading-tight">
                What We Deliver
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.features.map((feat, idx) => (
              <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 100}>
                <div className="group bg-white p-8 rounded-2xl border border-[#EAE3D9] shadow-sm hover:shadow-xl hover:border-[#A36F4C]/40 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-950 mb-3 group-hover:text-[#8C1F1F] transition-colors leading-snug">
                      {feat}
                    </h3>
                    
                    <p className="text-slate-700 font-normal text-sm leading-relaxed">
                      Expertly executed to elevate the final outcome of your project with uncompromising precision.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 4: Floating Glassmorphism CTA Section */}
      <section className="py-20 md:py-24 bg-[#FAF7F2] border-t border-[#EAE3D9] px-4 relative overflow-hidden">
        <ScrollReveal animation="fade-in-up" className="page-shell max-w-4xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-xl p-10 md:p-16 border border-[#EAE3D9] shadow-[0_20px_60px_-15px_rgba(163,111,76,0.1)] text-center overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-amber-200/30 via-orange-200/20 to-red-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              GET STARTED
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-slate-950 leading-tight">
              Ready to build your <br className="hidden md:block"/> {service.title.toLowerCase()}?
            </h2>
            <p className="text-slate-800 mb-8 max-w-xl mx-auto font-normal text-base md:text-lg leading-relaxed">
              Partner with Sreevedaa to bring your vision to life with uncompromising quality, rigorous discipline, and breathtaking design.
            </p>
            <a 
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#8C1F1F] to-[#B32D2D] hover:from-[#A32424] hover:to-[#8C1F1F] text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-10 py-5 rounded-full shadow-[0_12px_30px_rgba(140,31,31,0.3)] hover:shadow-[0_18px_40px_rgba(140,31,31,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
