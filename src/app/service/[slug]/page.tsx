import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { SlowText } from "@/components/SlowText";
import { ScrollReveal } from "@/components/ScrollReveal";

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

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HD Premium Hero Banner */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 page-shell max-w-7xl mx-auto px-4 w-full">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="flex flex-col items-center text-center gap-6 max-w-5xl mx-auto">
              <span className="inline-flex items-center justify-center bg-black/30 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-orange-400 font-sans font-bold tracking-[0.3em] uppercase text-xs md:text-sm shadow-2xl">
                Premium Service
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-bold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
                <SlowText text={service.title} />
              </h1>
              <p className="text-white/90 font-light text-lg md:text-2xl max-w-3xl mt-4 leading-relaxed mx-auto drop-shadow-lg">
                {service.desc}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: 3D Groove Grid Gallery & Overview */}
      <section className="pt-20 md:pt-32 pb-8 md:pb-12 bg-white">
        <div className="page-shell max-w-7xl mx-auto px-4">
          
          <ScrollReveal animation="fade-in-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Uncompromising Quality. <br className="hidden md:block" /> Precision Execution.
                </h2>
              </div>
              <a 
                href={`/contact?service=${service.slug}`}
                className="inline-flex shrink-0 items-center gap-3 text-white bg-theme-gradient hover:opacity-90 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Discuss This Project
              </a>
            </div>
          </ScrollReveal>

          {/* The 3D Groove Grid Gallery */}
          <ScrollReveal animation="fade-in-up" delay={200}>
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Top Large Feature Image */}
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/60 group bg-slate-100">
                <Image src={service.gallery[0]} fill alt={`${service.title} View 1`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Bottom Row: 3 Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[350px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/60 group bg-slate-100">
                  <Image src={service.gallery[1]} fill alt={`${service.title} View 2`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
                </div>
                
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[350px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/60 group bg-slate-100">
                  <Image src={service.gallery[2]} fill alt={`${service.title} View 3`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
                </div>
                
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[350px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/60 group bg-slate-100">
                  <Image src={service.gallery[3]} fill alt={`${service.title} View 4`} className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* SECTION 3: Capabilities (Modern Premium UI) */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-20 bg-white">
        <div className="page-shell max-w-7xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="text-center mb-16 md:mb-24">
              <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-6 border border-maroon-100">
                Our Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
                What We Deliver
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.features.map((feat, idx) => (
              <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 100}>
                <div className="group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:border-maroon-100 hover:shadow-[0_20px_40px_-15px_rgba(128,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 h-full">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-maroon-800 transition-colors duration-500 leading-snug">
                    {feat}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    Expertly executed to elevate the final outcome of your project with uncompromising precision.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 4: Final CTA */}
      <section className="relative pt-16 md:pt-20 pb-24 md:pb-32 bg-white overflow-hidden text-center px-4">
        <ScrollReveal animation="fade-in-up" className="page-shell max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Ready to build your <br className="hidden md:block"/> {service.title.toLowerCase()}?
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Sreeveda to bring your vision to life with uncompromising quality, rigorous discipline, and breathtaking design.
          </p>
          <a 
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center justify-center px-10 py-5 bg-theme-gradient text-white rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:opacity-90 transition-all shadow-[0_10px_30px_rgba(128,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(128,0,0,0.35)] hover:-translate-y-1"
          >
            Schedule a Consultation
          </a>
        </ScrollReveal>
      </section>

    </main>
  );
}
