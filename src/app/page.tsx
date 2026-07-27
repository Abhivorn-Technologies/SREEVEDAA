import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/siteContent";
import { LeadForm } from "@/components/LeadForm";
import { ServicesSection } from "@/components/ServicesSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION - Ultra Modern Editorial */}
      <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center py-0 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute inset-0 bg-white/40 z-0"></div>
        <div className="page-shell relative z-10 w-full h-full flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full py-8">
            <div className="flex-1 text-center lg:text-left z-20 flex flex-col justify-center px-4 md:px-0">
              <ScrollReveal animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-4 mb-4 mx-auto lg:mx-0">
                  <div className="w-8 h-[1px] bg-maroon-800"></div>
                  <span className="text-maroon-800 font-sans font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                    Inspired Interiors
                  </span>
                </div>
              </ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-maroon-900 leading-[1.1] font-serif tracking-tight">
                <SlowText text="Designing your dream spaces, one room at a time." />
              </h1>
              <ScrollReveal animation="fade-in-up" delay={800}>
                <p className="text-sm md:text-lg mb-8 max-w-lg text-slate-500 font-light mx-auto lg:mx-0 leading-relaxed">
                  Transform your spaces into physical masterpieces with our bespoke interior design and architectural services.
                </p>
              </ScrollReveal>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                <Link href="/contact" className="group relative px-6 md:px-8 py-3 md:py-4 bg-maroon-900 text-white overflow-hidden flex items-center rounded-sm">
                  <div className="absolute inset-0 w-0 bg-slate-900 transition-all duration-[600ms] ease-out group-hover:w-full"></div>
                  <span className="relative z-10 font-sans font-medium tracking-widest uppercase text-[10px] md:text-xs">Book Consultation</span>
                </Link>
                <Link href="/service" className="group px-4 md:px-6 py-3 md:py-4 text-maroon-900 font-sans font-medium tracking-widest uppercase text-[10px] md:text-xs flex items-center gap-2">
                  <span className="border-b border-transparent group-hover:border-maroon-900 transition-colors duration-300">View Services</span>
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
            
            <ScrollReveal animation="blur-in" delay={1200} className="flex-1 w-full relative h-[45vh] md:h-[60vh] lg:h-[80%] mt-8 lg:mt-0 flex items-center justify-center px-4 md:px-0">
              <div className="relative w-full h-full max-w-[600px] ml-auto rounded-xl lg:rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <Image
                  src="/images/hero_luxury_interior.png"
                  alt="Luxury Interior Design"
                  fill
                  className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. CLIENTS SECTION - Double Card Marquee */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-100 overflow-hidden relative flex flex-col justify-center">
        <ScrollReveal animation="fade-in-up" className="text-center mb-10 md:mb-12 px-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-3 md:mb-4 tracking-tight">
            <SlowText text="Our notable clients" />
          </h3>
          <p className="text-slate-500 text-sm md:text-base font-light max-w-2xl mx-auto">Industry leaders, properties, and developers we are proud to serve.</p>
        </ScrollReveal>
        
        {/* Row 1 - Scrolling Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3 mb-6">
          {[
            { name: 'Lodha Group', desc: 'Luxury Real Estate', initial: 'L' },
            { name: 'Prestige Estates', desc: 'Commercial & Residential', initial: 'P' },
            { name: 'Abhivorn Technologies', desc: 'Digital Partner', initial: 'A' },
            { name: 'Godrej Properties', desc: 'Sustainable Development', initial: 'G' },
            { name: 'DLF', desc: 'Urban Infrastructure', initial: 'D' },
            { name: 'SK Design Studio', desc: 'Architecture', initial: 'S' },
            // Duplicate for seamless loop
            { name: 'Lodha Group', desc: 'Luxury Real Estate', initial: 'L' },
            { name: 'Prestige Estates', desc: 'Commercial & Residential', initial: 'P' },
            { name: 'Abhivorn Technologies', desc: 'Digital Partner', initial: 'A' },
            { name: 'Godrej Properties', desc: 'Sustainable Development', initial: 'G' },
            { name: 'DLF', desc: 'Urban Infrastructure', initial: 'D' },
            { name: 'SK Design Studio', desc: 'Architecture', initial: 'S' }
          ].map((client, i) => (
            <div key={i} className="flex items-center gap-4 bg-white px-6 py-5 rounded-xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] w-[320px] shrink-0 group hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:border-maroon-100 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xl font-bold font-serif text-maroon-800 shrink-0 group-hover:bg-maroon-50 group-hover:scale-110 transition-all duration-300">
                {client.initial}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 font-serif text-[16px] group-hover:text-maroon-900 transition-colors leading-tight mb-1">{client.name}</h4>
                <p className="text-xs text-slate-500 font-light leading-tight">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] gap-6 px-3">
          {[
            { name: 'Brigade Group', desc: 'Property Development', initial: 'B' },
            { name: 'Sobha Limited', desc: 'Premium Housing', initial: 'S' },
            { name: 'Oberoi Realty', desc: 'High-End Residential', initial: 'O' },
            { name: 'Mahindra Lifespaces', desc: 'Sustainable Cities', initial: 'M' },
            { name: 'Puravankara', desc: 'Urban Developers', initial: 'P' },
            { name: 'Tata Housing', desc: 'Real Estate Projects', initial: 'T' },
            // Duplicate for seamless loop
            { name: 'Brigade Group', desc: 'Property Development', initial: 'B' },
            { name: 'Sobha Limited', desc: 'Premium Housing', initial: 'S' },
            { name: 'Oberoi Realty', desc: 'High-End Residential', initial: 'O' },
            { name: 'Mahindra Lifespaces', desc: 'Sustainable Cities', initial: 'M' },
            { name: 'Puravankara', desc: 'Urban Developers', initial: 'P' },
            { name: 'Tata Housing', desc: 'Real Estate Projects', initial: 'T' }
          ].map((client, i) => (
            <div key={i} className="flex items-center gap-4 bg-white px-6 py-5 rounded-xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] w-[320px] shrink-0 group hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:border-maroon-100 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xl font-bold font-serif text-maroon-800 shrink-0 group-hover:bg-maroon-50 group-hover:scale-110 transition-all duration-300">
                {client.initial}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 font-serif text-[16px] group-hover:text-maroon-900 transition-colors leading-tight mb-1">{client.name}</h4>
                <p className="text-xs text-slate-500 font-light leading-tight">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />

      {/* 4. STRATEGY SECTION - Modern Clean Image */}
      <section className="py-16 md:py-32 bg-slate-50 overflow-hidden">
        <div className="page-shell">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute top-6 -left-6 md:top-10 md:-left-10 w-full h-full bg-slate-200 rounded-sm z-0"></div>
                <div className="relative z-10 w-full h-[350px] md:h-[600px] rounded-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                  <Image src="/images/design_strategy.png" alt="Strategy" fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                </div>
              </div>
            </div>
            
            <ScrollReveal animation="fade-in-up" delay={200} className="flex-1 order-1 lg:order-2 px-4 md:px-0">
              <span className="text-maroon-800 font-sans font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 inline-block border-b border-maroon-800 pb-1">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-slate-900 font-serif leading-tight">
                <SlowText text="Data-Backed Design Strategy" />
              </h2>
              <p className="text-slate-500 text-sm md:text-lg mb-10 md:mb-12 font-light leading-relaxed max-w-lg">
                We do not just decorate rooms; we conduct comprehensive space audits, ergonomic analyses, and lifestyle roadmaps. By blending classic architecture with behavioral science, we create layouts that dramatically improve how you live and work.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-8 items-start group">
                  <div className="w-12 h-12 border border-slate-300 group-hover:border-maroon-800 text-slate-400 group-hover:text-maroon-800 flex items-center justify-center shrink-0 font-serif text-xl transition-colors duration-500 rounded-sm">I</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif">Space Growth Audits</h4>
                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-md">In-depth analysis of your floor plan, natural lighting, and daily workflow ecosystem.</p>
                  </div>
                </div>
                <ScrollReveal animation="fade-in-up" delay={600} className="flex gap-6 md:gap-8 items-start group">
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-slate-300 group-hover:border-maroon-800 text-slate-400 group-hover:text-maroon-800 flex items-center justify-center shrink-0 font-serif text-lg md:text-xl transition-colors duration-500 rounded-sm">II</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 font-serif">Material Roadmaps</h4>
                    <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed max-w-md">Tailored material sourcing strategies balancing extreme durability with timeless aesthetics.</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY */}
      <section className="py-16 md:py-20 bg-white px-4">
        <div className="page-shell">
          <ScrollReveal animation="fade-in-up" className="text-center mb-16 md:mb-24">
            <span className="text-maroon-800 font-sans font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">The Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 font-serif">
              <SlowText text="From Vision to Reality" />
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg font-light">A proven, classic framework that turns conceptual sketches into physical spaces with unmatched execution speed.</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Strategy', desc: 'Deep dive, layout analysis, goal setting, material framework.' },
              { num: '02', title: 'Execution', desc: 'Civil work, carpentry, ceiling installation, and coordination.' },
              { num: '03', title: 'Refinement', desc: 'Real-time site tracking, quality checks, and detail polishing.' },
              { num: '04', title: 'Handover', desc: 'Flawless presentation, lifestyle metrics, and move-in ready spaces.' }
            ].map((step, i) => (
              <ScrollReveal key={i} animation="fade-in-up" delay={i * 200}>
                <div className="h-full relative group cursor-default p-6 md:p-8 border border-slate-100 hover:border-maroon-100 transition-all duration-[800ms] overflow-hidden bg-slate-50 hover:bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(128,0,0,0.15)] rounded-xl hover:-translate-y-3">
                  <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 text-[6rem] md:text-[8rem] font-serif font-bold text-slate-100/50 group-hover:text-maroon-50/50 transition-colors duration-[800ms] leading-none pointer-events-none select-none z-0">
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 font-serif group-hover:text-maroon-900 transition-colors">{step.title}</h3>
                    <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="relative flex items-center bg-[#FAFAFA] overflow-hidden py-16 md:py-20">
        <div className="page-shell relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* Left Side: Text */}
            <ScrollReveal animation="fade-in-up" className="flex-1 text-center lg:text-left px-4 md:px-0">
              <div className="inline-flex items-center gap-4 mb-6 md:mb-8 mx-auto lg:mx-0">
                <div className="w-8 h-[1px] bg-maroon-800"></div>
                <span className="text-maroon-800 font-sans font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  Get Started
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-slate-900 font-serif leading-[1.05] tracking-tight">
                <SlowText text="Ready to Elevate Your Living?" />
              </h2>
              <p className="text-sm md:text-xl text-slate-500 mb-0 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Book a private design consultation and discover how we can refine your home or workspace into a timeless masterpiece.
              </p>
            </ScrollReveal>
            
            {/* Right Side: Form */}
            <ScrollReveal animation="blur-in" delay={300} className="flex-1 w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto px-4 md:px-0">
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                <LeadForm title="Request an Audit" />
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
    </div>
  );
}
