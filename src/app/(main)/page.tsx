import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/siteContent";
import { LeadForm } from "@/components/LeadForm";
import { ServicesSection } from "@/components/ServicesSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";
import TestimonialSlider from "@/components/TestimonialSlider";
import HomeFAQClient from "@/components/HomeFAQClient";
import dbConnect from "@/lib/mongodb";
import SiteImage from "@/models/SiteImage";

export default async function Home() {
  await dbConnect();
  
  // Fetch all images for the home page and about page (for the team section)
  const dbImages = await SiteImage.find({ page: { $in: ["home", "about"] } }).sort({ order: 1 }).lean();
  
  // Helper to get image URL by section and index
  const getImageUrl = (page: string, section: string, defaultUrl: string, index: number = 0) => {
    const sectionImages = dbImages.filter((img: any) => img.page === page && img.section === section);
    return sectionImages[index]?.imageUrl || defaultUrl;
  };

  const heroImage = getImageUrl("home", "hero", "/images/hero_luxury_interior.png");
  const highlightImage = getImageUrl("home", "highlight", "/images/design_strategy.png");
  
  const teamImages = [
    getImageUrl("about", "team", "/images/founder_portrait_clean.jpg", 0),
    getImageUrl("about", "team", "/images/founder_portrait_clean.jpg", 1),
  ];
  
  const serviceImages = [
    getImageUrl("home", "services", "/images/service_ceilings.png", 0),
    getImageUrl("home", "services", "/images/service_woodwork.png", 1),
    getImageUrl("home", "services", "/images/service_ceilings.png", 2),
    getImageUrl("home", "services", "/images/service_woodwork.png", 3),
    getImageUrl("home", "services", "/images/painting.jpg", 4),
    getImageUrl("home", "services", "/images/hero_luxury_interior.png", 5),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION - Classic Premium */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Luxury Interior Design"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="page-shell relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-0 mt-16 lg:mt-0">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-orange-200/50"></div>
              <span className="text-orange-100 font-sans font-medium tracking-[0.3em] uppercase text-[10px] md:text-[11px] drop-shadow-md">
                Inspired Interiors
              </span>
              <div className="w-12 h-[1px] bg-orange-200/50"></div>
            </div>
          </ScrollReveal>
          
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-normal mb-6 text-white leading-[1.1] font-serif tracking-tight max-w-4xl drop-shadow-2xl shadow-black">
            <SlowText text="Designing Your Dream Space" />
          </h1>
          
          <ScrollReveal animation="fade-in-up" delay={800}>
            <p className="text-base md:text-xl mb-12 max-w-2xl text-white font-light mx-auto leading-relaxed drop-shadow-xl shadow-black">
              Transform your spaces into physical masterpieces with our bespoke interior design and architectural services.
            </p>
          </ScrollReveal>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#7a1515] to-[#d84315] text-white overflow-hidden flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:brightness-110">
              <span className="font-sans font-bold tracking-widest uppercase text-[11px] md:text-xs">Start Your Project</span>
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-10 py-4 border border-white/70 text-white hover:bg-white hover:text-[#7a1515] font-sans font-bold tracking-widest uppercase text-[11px] md:text-xs flex items-center justify-center rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>



      <ServicesSection images={serviceImages} />

      {/* 2. HIGHLIGHT SECTION - Pristine Luxury UI */}
      <section className="min-h-[85vh] flex items-center py-12 lg:py-20 bg-[#FAF7F2] overflow-hidden relative border-t border-[#EAE3D9]">
        <div className="page-shell w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Image Container - Equal Height, Clean (No Overlay Badge) */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex">
              <ScrollReveal animation="fade-in-up" className="relative w-full flex">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-full min-h-[420px] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] border border-[#EAE3D9] group">
                  <Image 
                    src={highlightImage} 
                    alt="Highlight Luxury Interiors" 
                    fill 
                    className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105" 
                  />
                </div>
              </ScrollReveal>
            </div>
            
            {/* Content Side - Equal Height */}
            <ScrollReveal animation="fade-in-up" delay={200} className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center px-4 md:px-0">
              <span className="text-[#A36F4C] font-sans font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 inline-block">
                Your Vision, Our Design, Perfectly Executed
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-950 font-serif leading-[1.15] tracking-tight">
                <SlowText text="We Bring Every Design to Life" />
              </h2>
              <p className="text-slate-600 text-sm md:text-base mb-8 font-light leading-relaxed">
                We ensure every design is brought to life with exceptional quality and seamless execution. From planning to completion, we deliver spaces that reflect your vision and our expertise.
              </p>
              
              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-[#EAE3D9] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] hover:border-[#A36F4C]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#A36F4C] flex items-center justify-center shrink-0 mt-0.5 border border-[#EAE3D9]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif mb-1">Exceptional Quality</h4>
                    <p className="text-slate-600 font-light text-xs md:text-sm leading-relaxed">
                      Our commitment to premium materials and superior craftsmanship guarantees a timeless finish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-[#EAE3D9] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] hover:border-[#A36F4C]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#A36F4C] flex items-center justify-center shrink-0 mt-0.5 border border-[#EAE3D9]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif mb-1">Seamless Execution</h4>
                    <p className="text-slate-600 font-light text-xs md:text-sm leading-relaxed">
                      A structured approach from concept to handover ensures your project is completed flawlessly and on time.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY */}
      <section className="py-16 lg:py-24 bg-white px-4">
        <div className="page-shell">
          <ScrollReveal animation="fade-in-up" className="text-center mb-16 md:mb-20">
            <span className="text-theme-gradient font-sans font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-950 font-serif leading-[1.1]">
              <SlowText text="From Vision to Reality" />
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              A proven, classic framework that turns conceptual sketches into physical spaces with unmatched execution speed. We handle every detail so you don't have to.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto mt-12 md:mt-16">
            <div className="border-t border-slate-200 w-full hidden md:block"></div>
            {[
              { num: '01', title: 'Consult', desc: 'We understand your vision, needs, and budget to establish a clear project foundation.' },
              { num: '02', title: 'Design', desc: 'We create customized layouts and realistic 3D designs to visualize the final outcome.' },
              { num: '03', title: 'Approve', desc: 'Review and finalize the design, materials, and quotation with complete transparency.' },
              { num: '04', title: 'Build', desc: 'Our experts execute the project with premium craftsmanship and meticulous attention to detail.' },
              { num: '05', title: 'Inspect', desc: 'Every detail is strictly quality-checked against our highest standards before completion.' },
              { num: '06', title: 'Deliver', desc: 'Step into your dream space, completed on time, flawlessly clean, and ready to enjoy.' }
            ].map((step, i) => (
              <ScrollReveal key={i} animation="fade-in-up" delay={i * 50}>
                <div className="group flex flex-col md:flex-row md:items-center py-6 md:py-8 border-b border-slate-200 hover:border-slate-400 transition-colors duration-500 cursor-default">
                  
                  {/* Number */}
                  <div className="w-full md:w-24 text-3xl md:text-4xl font-serif text-slate-300 group-hover:text-[#7a1515] transition-colors duration-500 font-light mb-2 md:mb-0 shrink-0">
                    {step.num}
                  </div>
                  
                  {/* Title */}
                  <div className="w-full md:w-1/3 pr-4 md:pr-8 shrink-0 mb-2 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-serif text-slate-800 group-hover:text-[#7a1515] transition-colors duration-500 font-medium">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="w-full flex-1">
                    <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-500">
                      {step.desc}
                    </p>
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. TEAM SECTION - Architectural Studio Palette */}
      <section className="min-h-[85vh] flex flex-col justify-center py-12 lg:py-16 bg-[#FAF7F2] px-4 border-t border-[#EAE3D9]">
        <div className="page-shell w-full">
          <ScrollReveal animation="fade-in-up" className="text-center mb-8 md:mb-12">
            <span className="text-[#A36F4C] font-sans font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 flex items-center justify-center gap-2">
              MEET THE EXPERTS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-slate-950 font-serif tracking-tight">
              Meet the <span className="text-[#A36F4C] italic">Team</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs md:text-sm font-light">
              The visionary minds dedicated to transforming your spaces with design-driven excellence.
            </p>
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

      {/* 5.5b. FAQ SECTION (Home Page - 85vh Centered Layout) */}
      <section className="min-h-[85vh] flex flex-col justify-center py-10 bg-white px-4 border-t border-slate-50">
        <div className="page-shell max-w-4xl mx-auto w-full">
          <ScrollReveal animation="fade-in-up" className="text-center mb-8 md:mb-10">
            <span className="text-theme-gradient font-sans font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-theme-gradient" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-slate-950 font-serif tracking-tight">
              Common <span className="text-theme-gradient italic">Questions</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm font-light max-w-xl mx-auto">
              Everything you need to know about our interior design services, timelines, and execution process.
            </p>
          </ScrollReveal>

          <HomeFAQClient />

          <ScrollReveal animation="fade-in-up" className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-theme-gradient font-bold font-sans uppercase tracking-widest text-xs hover:text-theme-gradient transition-colors group">
              View All FAQs
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5.6. TESTIMONIALS SECTION - Warm Luxury Layout */}
      <section className="min-h-[85vh] flex flex-col justify-center py-12 lg:py-16 bg-[#FAF7F2] text-slate-900 px-4 border-t border-[#EAE3D9]">
        <div className="page-shell w-full">
          <ScrollReveal animation="fade-in-up" className="w-full">
            <TestimonialSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* 6. CLIENTS SECTION - Single Row Marquee with All 9 Logos */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE3D9] overflow-hidden relative flex flex-col justify-center">
        <ScrollReveal animation="fade-in-up" className="text-center mb-10 md:mb-12 px-4">
          <span className="text-[#A36F4C] font-sans font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 flex items-center justify-center gap-2">
            Our Portfolio & Partners
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-950 mb-3 md:mb-4 tracking-tight">
            <SlowText text="Our Notable Brand Trust" />
          </h3>
          <p className="text-slate-600 text-sm md:text-base font-light max-w-2xl mx-auto">
            Real estate developers, infrastructure leaders, and public corporations we are proud to serve.
          </p>
        </ScrollReveal>

        {/* Single Row Infinite Scrolling Marquee */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {[
            { name: 'Candeur', desc: 'Real Estate Developer', logo: '/logos/candeur.svg', initial: 'C' },
            { name: 'Aparna', desc: 'Premium Housing', logo: '/logos/iddlHIPaqZ_1785926920843.png', initial: 'A' },
            { name: 'Lodha', desc: 'Luxury Real Estate', logo: '/logos/idqZ7oKGDt_1785924951794.png', initial: 'L' },
            { name: 'NCC', desc: 'Infrastructure', logo: '/logos/NCC.NS.svg', initial: 'N' },
            { name: 'Cybercity Developers', desc: 'Urban Infrastructure', logo: '/logos/cybercity developers.svg', initial: 'C' },
            { name: 'Rajapushpa', desc: 'Property Development', logo: '/logos/rajapushpa.svg', initial: 'R' },
            { name: 'My Home', desc: 'Residential & Commercial', logo: '/logos/My_Home_Group.png', initial: 'M' },
            { name: 'Prestige Group', desc: 'Premium Housing', logo: '/logos/PRESTIGE.NS_BIG.png', initial: 'P' },
            { name: 'Casagrand', desc: 'High-End Residential', logo: '/logos/iddlHIPaqZ_1785926920843.png', initial: 'C' },
            // Duplicated list for seamless continuous infinite loop
            { name: 'Candeur', desc: 'Real Estate Developer', logo: '/logos/candeur.svg', initial: 'C' },
            { name: 'Aparna', desc: 'Premium Housing', logo: '/logos/iddlHIPaqZ_1785926920843.png', initial: 'A' },
            { name: 'Lodha', desc: 'Luxury Real Estate', logo: '/logos/idqZ7oKGDt_1785924951794.png', initial: 'L' },
            { name: 'NCC', desc: 'Infrastructure', logo: '/logos/NCC.NS.svg', initial: 'N' },
            { name: 'Cybercity Developers', desc: 'Urban Infrastructure', logo: '/logos/cybercity developers.svg', initial: 'C' },
            { name: 'Rajapushpa', desc: 'Property Development', logo: '/logos/rajapushpa.svg', initial: 'R' },
            { name: 'My Home', desc: 'Residential & Commercial', logo: '/logos/My_Home_Group.png', initial: 'M' },
            { name: 'Prestige Group', desc: 'Premium Housing', logo: '/logos/PRESTIGE.NS_BIG.png', initial: 'P' },
            { name: 'Casagrand', desc: 'High-End Residential', logo: '/logos/iddlHIPaqZ_1785926920843.png', initial: 'C' }
          ].map((client, i) => (
            <div key={i} className="flex items-center gap-4 bg-white px-6 py-5 rounded-2xl border border-[#EAE3D9] shadow-[0_2px_15px_-5px_rgba(0,0,0,0.03)] w-[310px] shrink-0 group hover:shadow-md hover:border-[#A36F4C]/40 transition-all cursor-pointer">
              <div className="w-14 h-14 relative shrink-0 flex items-center justify-center p-2 bg-[#FAF7F2] rounded-xl border border-[#EAE3D9] overflow-hidden group-hover:bg-[#FAF7F2]/80 transition-colors">
                {client.logo ? (
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    fill 
                    className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-110" 
                  />
                ) : (
                  <span className="text-xl font-bold font-serif text-slate-800 group-hover:text-[#A36F4C] transition-colors">
                    {client.initial}
                  </span>
                )}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-serif font-bold text-slate-900 text-base leading-snug group-hover:text-[#A36F4C] transition-colors truncate">
                  {client.name}
                </h4>
                <p className="text-xs text-slate-500 font-light mt-1 truncate">
                  {client.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative flex items-center bg-[#FAFAFA] overflow-hidden py-16 md:py-20">
        <div className="page-shell relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* Left Side: Text */}
            <ScrollReveal animation="fade-in-up" className="flex-1 text-center lg:text-left px-4 md:px-0">
              <div className="inline-flex items-center gap-4 mb-6 md:mb-8 mx-auto lg:mx-0">
                <div className="w-8 h-[1px] bg-maroon-800"></div>
                <span className="text-theme-gradient font-sans font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  Get Started
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-slate-900 font-serif leading-[1.05] tracking-tight">
                <SlowText text="Ready to Elevate Your Living?" />
              </h2>
              <p className="text-sm md:text-xl text-slate-700 mb-0 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Book a private design consultation and discover how we can refine your home or workspace into a timeless masterpiece.
              </p>
            </ScrollReveal>
            
            {/* Right Side: Form */}
            <ScrollReveal animation="blur-in" delay={300} className="flex-1 w-full mx-auto lg:mx-0 px-4 md:px-0">
              <div className="w-full">
                <LeadForm title="Request an Audit" hasMessage={true} />
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
    </div>
  );
}
