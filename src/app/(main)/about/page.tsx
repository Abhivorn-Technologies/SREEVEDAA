import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";
import dbConnect from "@/lib/mongodb";
import SiteImage from "@/models/SiteImage";

export default async function AboutPage() {
  await dbConnect();
  
  // Fetch images
  const dbImages = await SiteImage.find({ page: "about" }).sort({ order: 1 }).lean();
  
  const getImageUrl = (section: string, defaultUrl: string, index: number = 0) => {
    const sectionImages = dbImages.filter((img: any) => img.section === section);
    return sectionImages[index]?.imageUrl || defaultUrl;
  };

  const heroImage = getImageUrl("hero", "/images/about_hero.png");
  const storyImage = getImageUrl("story", "/images/about-img-1.jpg");
  const teamImages = [
    getImageUrl("team", "/images/founder_portrait_clean.jpg", 0),
    getImageUrl("team", "/images/founder_portrait_clean.jpg", 1),
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 font-sans">
      
      {/* 1. Classic Luxury Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAF7F2] overflow-hidden">
        <div className="page-shell relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left z-20">
              <ScrollReveal animation="fade-in-up" delay={0}>
                <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  ABOUT SREEVEDAA INTERIORS
                </span>
              </ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold mb-4 md:mb-6 text-slate-950 leading-[1.1] font-serif tracking-tight">
                <SlowText text="Architecting Lifestyles" delay={200} />
              </h1>
              <ScrollReveal animation="fade-in-up" delay={800}>
                <p className="text-base md:text-lg mb-8 max-w-xl text-slate-800 font-light leading-relaxed mx-auto lg:mx-0">
                  We don't just design spaces—we architect lifestyles. Our integrated approach combines cutting-edge materials, spatial planning, and creative excellence to deliver stunning environments that elevate your daily living.
                </p>
              </ScrollReveal>
            </div>
            
            <ScrollReveal animation="blur-in" delay={200} className="flex-1 w-full relative">
              <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(163,111,76,0.12)] border border-[#EAE3D9] group">
                <Image
                  src={heroImage}
                  alt="About Sreevedaa"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Image + Legacy Story Split Layout */}
      <section className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#EAE3D9]">
        <div className="page-shell max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Studio Photo matching exact text height */}
            <ScrollReveal animation="fade-in-up" className="lg:col-span-5 relative h-full flex flex-col">
              <div className="relative w-full h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#EAE3D9] shadow-xl group">
                <Image
                  src={storyImage}
                  alt="Sreevedaa Craftsmanship"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </ScrollReveal>

            {/* Right Column: Narrative & Mission/Vision */}
            <ScrollReveal animation="fade-in-up" delay={200} className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  THE LEGACY
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-950 leading-[1.2] mb-4">
                  Designing spaces that transcend time and trend.
                </h2>
                <p className="text-slate-800 font-serif italic text-base md:text-lg leading-relaxed mb-6">
                  "We don't believe in one-size-fits-all solutions. Our mission is to empower clients through innovative, detail-driven strategies that connect breathtaking aesthetics with daily functionality across every single room."
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#8C1F1F] uppercase tracking-wider mb-2">Our Mission</h3>
                    <p className="text-slate-900 font-normal text-xs md:text-sm leading-relaxed">
                      To bridge the gap between extravagant aesthetic desires and rigorous functional reality, creating deeply personal narratives in every space we touch.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#8C1F1F] uppercase tracking-wider mb-2">Our Vision</h3>
                    <p className="text-slate-900 font-normal text-xs md:text-sm leading-relaxed">
                      To be the global standard for integrated architectural excellence where bold design and flawless execution converge to create unprecedented living environments.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. High-Contrast Core Principles Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#EAE3D9]">
        <div className="page-shell max-w-6xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" className="text-center mb-16">
            <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              FOUNDATIONAL VALUES
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-950 mb-3">Core Principles</h2>
            <div className="w-16 h-[2px] bg-[#A36F4C] mx-auto"></div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Quality-Driven", desc: "Every design, material, and tactic is meticulously chosen to drive tangible, luxurious lifestyle outcomes." },
              { title: "Innovation-First", desc: "We embrace emerging materials and evolving design trends to keep our clients far ahead of the curve." },
              { title: "Transparency", desc: "We believe in open communication, honest reporting, and building long-term partnerships based entirely on trust." },
              { title: "Global Aesthetics", desc: "We think globally while intimately understanding the unique geographical and cultural nuances of every site." },
              { title: "Constant Refinement", desc: "The design landscape never stands still, and neither do we. We test, learn, and optimise layouts relentlessly." },
              { title: "Integrity", desc: "We deliver honest recommendations and ethical construction practices that build lasting value." }
            ].map((value, i) => (
              <ScrollReveal key={i} animation="fade-in-up" delay={i * 100}>
                <div className="h-full bg-white p-8 rounded-2xl border border-[#EAE3D9] shadow-[0_10px_30px_-5px_rgba(163,111,76,0.06)] hover:shadow-xl hover:border-[#A36F4C]/40 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#8C1F1F] mb-3">{value.title}</h3>
                  <p className="text-slate-900 font-normal text-sm md:text-base leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet the Founders */}
      <section className="relative py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#EAE3D9] overflow-hidden">
        <div className="page-shell relative z-10 max-w-6xl mx-auto px-4">
          <ScrollReveal animation="fade-in-up" className="text-center mb-12 md:mb-16">
            <span className="inline-block mb-3 text-[#A36F4C] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              LEADERSHIP
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-950 mb-3 leading-[1.1]">
              <SlowText text="Meet the Founders" />
            </h2>
            <div className="w-16 h-[2px] bg-[#A36F4C] mx-auto"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
            {[
              {
                name: "Nithin Satya Chadalavada",
                role: "Founder - Design Operations",
                qualifications: "B.Arch, 10+ years of experience",
                bio: "Passionate Interior Designer known for attention to detail and thoughtful design solutions. Skilled in understanding client needs, managing project execution, and delivering spaces that reflect both style and functionality.",
                image: teamImages[0], 
              },
              {
                name: "Katta Shiva Sagar",
                role: "Co-Founder - Project Head",
                qualifications: "M.C.A, 10+ years of experience",
                bio: "Experienced Interior Project Head dedicated to delivering exceptional spaces through strategic planning and efficient execution. Passionate about transforming design concepts into reality while maintaining quality, timelines, and client satisfaction.",
                image: teamImages[1], 
              },
            ].map((member, i) => (
              <ScrollReveal key={i} animation="fade-in-up" delay={i * 150} className="group text-center">
                {/* Circular Avatar Frame with Glowing Ring */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 p-1.5 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-[#8C1F1F] shadow-[0_10px_30px_-5px_rgba(249,115,22,0.25)] group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Details Centered Below */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-950 mb-1.5 group-hover:text-[#A36F4C] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#A36F4C] uppercase font-sans mb-3">
                  {member.role}
                </p>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-4 inline-block bg-[#FAF7F2] px-4 py-1.5 rounded-full border border-[#EAE3D9]">
                  {member.qualifications}
                </p>
                <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed max-w-sm mx-auto">
                  {member.bio}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Floating Glassmorphism CTA Section */}
      <section className="py-20 md:py-24 bg-[#FAF7F2] border-t border-[#EAE3D9] px-4 relative overflow-hidden">
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
