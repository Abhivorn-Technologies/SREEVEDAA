"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const packages = [
  {
    id: "essential",
    name: "Essential",
    price: "₹4,00,000",
    suffix: "/-",
    description: "Please connect for the package details.",
    isPopular: false
  },
  {
    id: "standard",
    name: "Standard",
    price: "₹5,50,000",
    suffix: "/-",
    description: "Please connect for the package details.",
    isPopular: true
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹7,00,000",
    suffix: "/-",
    description: "Please connect for the package details.",
    isPopular: false
  }
];

export default function PackagesPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("essential");

  return (
    <main className="min-h-screen relative bg-slate-50 overflow-hidden">
      {/* Abstract Background Elements for Glassmorphism */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-200/30 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-rose-200/30 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-amber-100/40 blur-[100px]"></div>
      </div>

      {/* Header Section */}
      <section className="relative w-full pt-12 pb-8 md:pt-16 md:pb-10 flex flex-col items-center justify-center z-10">
        <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
          <ScrollReveal animation="fade-in-up">
            <span className="inline-block py-1 px-4 rounded-full bg-white/60 backdrop-blur-md text-slate-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 border border-white shadow-sm">
              Transparent Pricing
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-tight max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-[#7a1515] to-slate-900 bg-clip-text text-transparent pb-2 tracking-tight drop-shadow-sm">
              Design packages for every scale.
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-base md:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-6">
              From single-room refreshes to complete home transformations, choose a plan that fits your vision and budget.
            </p>
            <div className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#A36F4C]/30 shadow-sm text-[#8C1F1F] font-semibold text-sm md:text-base tracking-wide">
              <svg className="w-5 h-5 text-[#A36F4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              A 2BHK Starts From <span className="font-bold">₹4,00,000/-</span>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <div className="relative z-20">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24 max-w-6xl mx-auto px-4 items-center">
          {packages.map((pkg, i) => {
            return (
            <ScrollReveal key={pkg.id} animation="fade-in-up" delay={i * 100}>
              <div 
                className={`group relative flex flex-col justify-between h-full rounded-3xl p-8 md:p-10 transition-all duration-500 
                  bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_-10px_rgba(163,111,76,0.15)] hover:shadow-2xl hover:-translate-y-2 text-center`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} style={{ background: 'radial-gradient(120% 120% at top left, rgba(148, 163, 184, 0.95) 0%, rgba(30, 41, 59, 0.98) 50%, rgba(2, 6, 23, 1) 100%)' }}></div>
                
                {pkg.isPopular && (
                  <div className="absolute z-10 -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8C1F1F] to-[#B32D2D] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-6 rounded-full shadow-lg whitespace-nowrap">
                    Best Seller
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col items-center pt-4">
                  <h3 className={`text-2xl md:text-3xl font-bold font-serif mb-4 text-slate-900 group-hover:text-white transition-colors duration-500`}>{pkg.name}</h3>
                  
                  {/* Subtle Divider */}
                  <div className="w-12 h-px bg-[#A36F4C]/30 mb-8 group-hover:bg-white/30 transition-colors duration-500"></div>
                  
                  {/* Price Section */}
                  <div className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500">
                        {pkg.price}
                      </span>
                      <span className="text-lg md:text-xl font-medium text-slate-500 group-hover:text-slate-400 transition-colors duration-500">
                        {pkg.suffix}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm md:text-base font-light leading-relaxed text-slate-600 group-hover:text-slate-300 transition-colors duration-500 max-w-[260px] mx-auto`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="relative z-10 mt-10 w-full flex justify-center">
                  <a 
                    href={`https://wa.me/916303572745?text=${encodeURIComponent(`Hi Sreevedaa team, I am interested in the ${pkg.name} priced at ${pkg.price}. Please share more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center overflow-hidden w-full max-w-[240px] py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 bg-white border border-slate-200 group-hover:border-transparent group-hover:shadow-[0_8px_25px_rgba(234,88,12,0.4)]"
                  >
                    <div className="absolute inset-0 bg-white transition-opacity duration-500 group-hover:opacity-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8C1F1F] to-[#B32D2D] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <span className="relative z-10 text-slate-800 transition-colors duration-500 group-hover:text-white">CONNECT</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>

        {/* Support CTA */}
        <ScrollReveal animation="fade-in-up" className="max-w-4xl mx-auto text-center bg-white/50 backdrop-blur-lg border border-white rounded-[2rem] p-12 md:p-16 shadow-xl mx-4 lg:mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-lg text-slate-600 font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Talk to our team about pricing, process, or finding the right plan for your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white hover:bg-[#7a1515] shadow-lg hover:shadow-xl hover:-translate-y-1 font-bold tracking-[0.2em] uppercase text-xs transition-all duration-300 flex items-center justify-center gap-3 rounded-full">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Contact Support
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
