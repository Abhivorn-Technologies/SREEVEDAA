import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. Stunning Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] pt-32 pb-16 lg:pt-0 lg:pb-0 flex items-center bg-white overflow-hidden">
        <div className="page-shell relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left z-20">
              <ScrollReveal animation="fade-in-up" delay={0}>
                <span className="inline-block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-maroon-800 to-maroon-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs w-max mx-auto lg:mx-0">
                  About SK Design Studio
                </span>
              </ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold mb-4 md:mb-6 text-slate-900 leading-[1.1] font-serif">
                <SlowText text="Architecting Lifestyles" delay={200} />
              </h1>
              <ScrollReveal animation="fade-in-up" delay={800}>
                <p className="text-sm md:text-lg mb-8 max-w-xl text-slate-500 font-light mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                  We don't just design spaces—we architect lifestyles. Our integrated approach combines cutting-edge materials, spatial planning, and creative excellence to deliver stunning environments that elevate your daily living.
                </p>
              </ScrollReveal>
            </div>
            
            <ScrollReveal animation="blur-in" delay={200} className="flex-1 w-full relative aspect-[4/3] md:aspect-video lg:aspect-auto lg:h-[75vh] max-h-[800px] flex items-center justify-center mt-6 lg:mt-0">
              <div className="relative w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src="/images/about_hero.png"
                  alt="About SK Design Studio"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-maroon-900/10 mix-blend-multiply"></div>
              </div>
              {/* Floating aesthetic element */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-orange-100/60 rounded-full blur-3xl -z-10"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Ultra-Classic Editorial Story */}
      <section className="pt-16 pb-12 lg:pt-20 lg:pb-12 bg-white border-t border-slate-100 flex items-center justify-center">
        <ScrollReveal animation="fade-in-up" className="page-shell max-w-4xl mx-auto text-center px-4">
          <span className="inline-block mb-6 text-maroon-800 font-sans font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs border-b border-maroon-800/30 pb-2">
            The Legacy
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 md:mb-8 leading-[1.2]">
            <SlowText text="Designing spaces that transcend time and trend." />
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 font-serif italic leading-relaxed mb-10 md:mb-12">
            We don't believe in one-size-fits-all solutions. Our mission is to empower clients through innovative, detail-driven strategies that connect breathtaking aesthetics with daily functionality across every single room.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="border-t border-maroon-800/20 pt-4">
              <h3 className="text-sm font-sans font-bold text-maroon-900 mb-2 tracking-widest uppercase">Our Mission</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                To bridge the gap between extravagant aesthetic desires and rigorous functional reality, creating deeply personal narratives in every space we touch.
              </p>
            </div>
            <div className="border-t border-maroon-800/20 pt-4">
              <h3 className="text-sm font-sans font-bold text-maroon-900 mb-2 tracking-widest uppercase">Our Vision</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                To be the global standard for integrated architectural excellence where bold design and flawless execution converge to create unprecedented living environments.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Core Principles Minimalist Grid */}
      <section className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-[#FAFAFA]">
        <div className="page-shell max-w-6xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6">Core Principles</h2>
            <div className="w-12 h-px bg-maroon-800 mx-auto"></div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { title: "Quality-Driven", desc: "Every design, material, and tactic is meticulously chosen to drive tangible, luxurious lifestyle outcomes." },
              { title: "Innovation-First", desc: "We embrace emerging materials and evolving design trends to keep our clients far ahead of the curve." },
              { title: "Transparency", desc: "We believe in open communication, honest reporting, and building long-term partnerships based entirely on trust." },
              { title: "Global Aesthetics", desc: "We think globally while intimately understanding the unique geographical and cultural nuances of every site." },
              { title: "Constant Refinement", desc: "The design landscape never stands still, and neither do we. We test, learn, and optimise layouts relentlessly." },
              { title: "Integrity", desc: "We deliver honest recommendations and ethical construction practices that build lasting value." }
            ].map((value, i) => (
              <ScrollReveal key={i} animation="fade-in-up" delay={i * 100}>
                <div className="group h-full bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 border border-slate-100 flex flex-col justify-start text-left">
                  <h3 className="text-lg md:text-xl font-serif text-maroon-900 mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed flex-1">{value.desc}</p>
                  <div className="mt-6 md:mt-8 w-0 h-[2px] bg-maroon-800/60 group-hover:w-16 transition-all duration-700 ease-out"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Classic Meet the Founder (100vh) */}
      {/* 4. Modern Meet the Founder */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden">
        {/* Abstract Background Shapes mimicking the reference */}
        <div className="absolute top-0 right-0 w-[40vw] h-[60vh] bg-[#E8F2F6] rounded-bl-[200px] -z-10 translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] border-[1px] border-[#E8F2F6] rounded-full -z-10 -translate-x-1/2"></div>

        <div className="page-shell relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left: Content */}
            <ScrollReveal animation="fade-in-up" className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-[5rem] font-sans font-bold text-[#1a2b3c] mb-6 md:mb-12 leading-[1.1]">
                <SlowText text="Meet the founder" />
              </h2>
              
              <h3 className="text-xl md:text-2xl font-sans font-semibold text-[#1a2b3c] mb-1">
                G.V.A Sai Nikhil
              </h3>
              <p className="text-sm md:text-base font-sans text-slate-500 mb-6">
                Founder & Principal Designer
              </p>
              
              <div className="text-sm text-slate-500 font-light leading-relaxed space-y-4 max-w-md">
                <p>
                  With over a decade of experience in architectural harmony, Nikhil founded SK Design Studio to bridge the gap between extravagant desires and functional reality.
                </p>
                <p>
                  He believes every structure possesses a latent soul, and the architect's ultimate job is to give that soul a breathtaking voice. True luxury is never loud; it is found in the seamless integration of design into everyday life.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Modern Portrait */}
            <ScrollReveal animation="scale-up" delay={300} className="w-full lg:w-6/12 relative">
              <div className="relative w-full max-w-[500px] ml-auto aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-[12px] border-white bg-white z-10">
                <Image 
                  src="/images/founder_ai.png" 
                  alt="G.V.A SAI NIKHIL" 
                  fill 
                  className="object-cover object-center" 
                />
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
      
    </main>
  );
}
