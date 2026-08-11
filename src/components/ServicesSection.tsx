"use client";

import { useState } from "react";
import Image from "next/image";
import { ContactModal } from "./ContactModal";

export function ServicesSection({ images = [] }: { images?: string[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const smallCards = [
    {
      title: "Master Planning",
      desc: "Comprehensive strategy and layout design for large-scale properties...",
      actionText: "LEARN MORE ➔",
      image: images[0] || "/images/service_ceilings.png", 
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Space Layouts",
      desc: "Optimizing flow, functionality, and aesthetic balance in every room...",
      actionText: "LEARN MORE ➔",
      image: images[1] || "/images/service_woodwork.png",
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const services = [
    {
      title: "Turnkey Execution",
      desc: "From raw concept to fully furnished reality, we handle every detail of the build.",
      actionText: "EXPLORE ➔",
      image: images[2] || "/images/service_ceilings.png", 
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Custom Furniture",
      desc: "Bespoke woodwork and furniture pieces designed exclusively for your space.",
      actionText: "EXPLORE ➔",
      image: images[3] || "/images/service_woodwork.png",
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Material Curation",
      desc: "Sourcing the world's finest stones, woods, and fabrics for unparalleled luxury.",
      actionText: "EXPLORE ➔",
      image: images[4] || "/images/painting.jpg",
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "3D Visualisation",
      desc: "Photorealistic 3D renders that allow you to walk through your space before it's built.",
      actionText: "EXPLORE ➔",
      image: images[5] || "/images/hero_luxury_interior.png",
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Top Section: Text and Small Cards Side-by-Side */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center mb-24">
          
          {/* Left Side: Text Content */}
          <div className="xl:w-[45%] flex flex-col justify-center">
            <span className="text-theme-gradient font-sans font-bold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-sans tracking-tight leading-[1.1]">
              Transform Your <br className="hidden md:block" />
              Physical Spaces <br className="hidden md:block" />
              <span className="text-theme-gradient italic font-serif font-light">Into Masterpieces</span>
            </h2>
            <p className="mt-6 text-slate-700 text-base md:text-lg leading-relaxed max-w-xl">
              Elevate your living and working environments with world-class interior architecture, meticulous spatial planning, and breathtaking material selection. We seamlessly integrate cutting-edge design trends with functional everyday luxury to bring your ultimate vision to life.
            </p>
          </div>

          {/* Right Side: Small Cards Carousel */}
          <div className="xl:w-[55%] w-full">
            <div className="flex overflow-x-auto pb-8 pt-4 -mx-4 px-4 xl:mx-0 xl:px-0 gap-6 snap-x snap-mandatory hide-scrollbar xl:overflow-visible">
              {smallCards.map((service, idx) => (
                <div 
                  key={idx} 
                  className="relative w-[280px] shrink-0 snap-center bg-white rounded-3xl overflow-hidden flex flex-col h-[420px] group transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-xl border border-slate-200"
                >
                  {/* Card Image Area */}
                  <div className="relative h-[45%] w-full overflow-hidden bg-slate-100">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 ease-out" 
                    />
                  </div>

                  {/* Card Content Area */}
                  <div className="relative z-20 flex-1 flex flex-col justify-between p-5 pb-6 bg-white">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 font-serif">{service.title}</h3>
                      </div>
                      <p className="text-slate-700 text-[13px] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-3 bg-white border border-maroon-900/30 text-theme-gradient hover:bg-theme-gradient hover:text-white font-bold rounded-xl text-xs tracking-widest uppercase transition-colors mt-4"
                    >
                      {service.actionText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: 4 Large Cards Full-Width */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory hide-scrollbar">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] md:w-auto shrink-0 snap-center bg-white rounded-3xl overflow-hidden flex flex-col h-[500px] group transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl border border-slate-200"
            >
              {/* Card Image Area */}
              <div className="relative h-1/2 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 ease-out" 
                />
              </div>

              {/* Card Content Area */}
              <div className="relative z-20 flex-1 flex flex-col justify-between p-6 pb-8 bg-white">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">{service.title}</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 bg-theme-gradient text-white hover:bg-maroon-800 font-bold rounded-xl text-xs tracking-widest uppercase transition-all shadow-md mt-4"
                >
                  {service.actionText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
