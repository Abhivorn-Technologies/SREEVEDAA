"use client";

import { useState } from "react";
import Image from "next/image";
import { ContactModal } from "./ContactModal";

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const smallCards = [
    {
      title: "SEO & GEO",
      desc: "Full-stack SEO and GEO engine combining...",
      actionText: "SCALE TRAFFIC ➔",
      image: "/images/service_ceilings.png", 
      icon: (
        <svg className="w-5 h-5 text-maroon-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Paid Ads",
      desc: "Precision-targeted campaigns across...",
      actionText: "GET LEADS ➔",
      image: "/images/service_woodwork.png",
      icon: (
        <svg className="w-5 h-5 text-maroon-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const services = [
    {
      title: "Global Consulting",
      desc: "Expand your brand internationally with localised strategies and multi-channel growth.",
      actionText: "GO GLOBAL ➔",
      image: "/images/service_ceilings.png", 
      icon: (
        <svg className="w-5 h-5 text-maroon-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Email & WhatsApp",
      desc: "Nurture relationships through personalised messaging and high-converting workflows.",
      actionText: "CONNECT ➔",
      image: "/images/service_woodwork.png",
      icon: (
        <svg className="w-5 h-5 text-maroon-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Influencer Marketing",
      desc: "Connect with authentic voices your audience trusts to grow your brand globally.",
      actionText: "COLLABORATE ➔",
      image: "/images/painting.jpg",
      icon: (
        <svg className="w-5 h-5 text-maroon-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Data & Analytics",
      desc: "Transform data into actionable insights with advanced analytics and performance tracking.",
      actionText: "OPTIMIZE ➔",
      image: "/images/hero_luxury_interior.png",
      icon: (
        <svg className="w-5 h-5 text-maroon-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <span className="text-maroon-800 font-sans font-bold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-sans tracking-tight leading-[1.1]">
              Transform Your <br className="hidden md:block" />
              Digital Presence <br className="hidden md:block" />
              <span className="text-maroon-800 italic font-serif font-light">Into Revenue</span>
            </h2>
            <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
              Accelerate content velocity, increase brand visibility across LLMs, Search, and Social. Supercharge organic growth. Scale now Digital combines world-class strategy, technology, and creative talent in one powerful growth engine to help you win the AI age.
            </p>
          </div>

          {/* Right Side: Small Cards Carousel */}
          <div className="xl:w-[55%] w-full">
            <div className="flex overflow-x-auto pb-8 pt-4 -mx-4 px-4 xl:mx-0 xl:px-0 gap-6 snap-x snap-mandatory hide-scrollbar xl:overflow-visible">
              {smallCards.map((service, idx) => (
                <div 
                  key={idx} 
                  className="relative w-[280px] shrink-0 snap-center bg-[#111315] rounded-3xl overflow-hidden flex flex-col h-[420px] group transition-all duration-[800ms] hover:-translate-y-4 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(128,0,0,0.3)] border border-[#2A2E33]"
                >
                  {/* Card Image Area */}
                  <div className="relative h-[45%] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111315] z-10"></div>
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-[2000ms] group-hover:scale-110 ease-out" 
                    />
                  </div>

                  {/* Card Content Area */}
                  <div className="relative z-20 flex-1 flex flex-col justify-end p-5 pb-6 bg-[#111315]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#2A2E33] flex items-center justify-center shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white font-sans">{service.title}</h3>
                    </div>
                    <p className="text-slate-400 text-[13px] mb-6 leading-snug">
                      {service.desc}
                    </p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-3.5 bg-maroon-900 hover:bg-maroon-800 text-white font-bold rounded-2xl text-xs tracking-widest uppercase transition-all shadow-[0_4px_20px_0_rgba(128,0,0,0.4)] hover:shadow-[0_6px_25px_0_rgba(128,0,0,0.6)]"
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
              className="relative w-[300px] md:w-auto shrink-0 snap-center bg-[#1A1E23] rounded-[32px] overflow-hidden flex flex-col h-[500px] group transition-all duration-[800ms] hover:-translate-y-4 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(128,0,0,0.3)] border border-[#2A2E33]"
            >
              {/* Card Image Area */}
              <div className="relative h-1/2 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1E23] z-10"></div>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-[2000ms] group-hover:scale-110 ease-out" 
                />
              </div>

              {/* Card Content Area */}
              <div className="relative z-20 flex-1 flex flex-col justify-end p-6 pb-8 bg-gradient-to-b from-transparent to-black/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2A2E33] flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white font-sans">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 bg-maroon-900 hover:bg-maroon-800 text-white font-bold rounded-2xl text-xs tracking-widest uppercase transition-all shadow-[0_4px_20px_0_rgba(128,0,0,0.4)] hover:shadow-[0_6px_25px_0_rgba(128,0,0,0.6)]"
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
