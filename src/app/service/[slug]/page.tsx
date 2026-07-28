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
      {/* SECTION 1: Editorial Hero */}
      <section className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-auto md:h-[80vh] md:min-h-[500px]">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
          <div className="page-shell max-w-7xl mx-auto px-4 w-full">
            <ScrollReveal animation="fade-in-up" delay={0}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.1] max-w-4xl tracking-tight">
                  <SlowText text={service.title} />
                </h1>
                <div className="w-full md:w-1/3 hidden md:block">
                  <p className="text-white/80 font-light text-lg border-l border-maroon-500 pl-6">
                    Elevating your space through precision, luxury, and timeless design.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Overview & Vision */}
      <section className="py-20 md:py-32 bg-white">
        <div className="page-shell max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="flex flex-col gap-6">
                <span className="text-maroon-800 font-sans font-bold tracking-[0.2em] uppercase text-sm">
                  Project Overview
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  A Strategic Approach to <br className="hidden md:block" /> {service.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-4">
                  {service.desc}
                </p>
                <div className="mt-8">
                  <a 
                    href={`/contact?service=${service.slug}`}
                    className="inline-flex items-center gap-3 text-maroon-900 hover:text-maroon-700 font-sans font-bold uppercase tracking-widest text-sm transition-colors group"
                  >
                    <span className="border-b border-transparent group-hover:border-maroon-700 transition-colors pb-1">Discuss This Service</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={400}>
              <div className="relative w-full aspect-[4/3] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={service.image} 
                  alt={`${service.title} Detail`} 
                  fill 
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Capabilities / Features Cards */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="page-shell max-w-7xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="text-center mb-16 md:mb-24">
              <span className="text-maroon-800 font-sans font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                What We Deliver
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                Core Capabilities
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.features.map((feat, idx) => (
              <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 100}>
                <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-maroon-100 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-maroon-800 transition-colors duration-300">
                    <span className="text-maroon-800 group-hover:text-white font-serif font-bold text-xl transition-colors duration-300">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-maroon-900 transition-colors">
                    {feat}
                  </h3>
                  <p className="mt-4 text-slate-500 font-light text-sm leading-relaxed">
                    Expertly executed to elevate the final outcome of your project.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 4: Final CTA */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-slate-100">
        <div className="page-shell relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Ready to begin your {service.title.toLowerCase()} project?
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Partner with SK Design Studio to bring your vision to life with uncompromising quality and precision.
            </p>
            <a 
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center justify-center px-10 py-5 bg-maroon-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-maroon-800 transition-colors shadow-xl hover:-translate-y-1"
            >
              Book A Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
