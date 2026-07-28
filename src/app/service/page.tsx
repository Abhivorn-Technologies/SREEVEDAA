import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Modern Classic Hero Section */}
      <section className="pt-12 pb-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="page-shell text-center max-w-5xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <span className="inline-block mb-4 md:mb-6 text-theme-gradient font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm">
              Our Expertise
            </span>
          </ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-slate-900 mb-6 md:mb-8 font-serif leading-[1.2]">
            <SlowText text="Transform Your Spaces Into Masterpieces" delay={200} />
          </h1>
          <ScrollReveal animation="fade-in-up" delay={800}>
            <p className="text-sm md:text-lg text-slate-700 font-light leading-relaxed max-w-2xl mx-auto">
              We don't just offer services—we architect growth and comfort. Our integrated approach combines cutting-edge materials, functional insights, and creative excellence to deliver measurable results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid Index */}
      <section className="relative z-20 py-16 lg:py-24 bg-white" id="services-grid">
        <div className="page-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, i) => (
              <ScrollReveal key={i} animation="fade-in-up" delay={i * 50}>
                <a href={`/service/${service.slug}`} className="group block h-full">
                  <div className="relative w-full h-[300px] md:h-[350px] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-theme-gradient transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 font-light leading-relaxed line-clamp-2">
                    {service.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-theme-gradient font-medium text-sm tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore Service</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100 text-center px-4">
        <ScrollReveal animation="fade-in-up" className="page-shell">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif text-slate-900">Ready to Transform Your Space?</h2>
          <p className="text-slate-700 mb-8 md:mb-10 max-w-2xl mx-auto font-light text-sm md:text-xl">
            Schedule a free consultation and discover how our integrated approach can drive stunning results for your project.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center bg-theme-gradient text-white font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-maroon-800 transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(128,0,0,0.2)]">
            Book Free Consultation
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
