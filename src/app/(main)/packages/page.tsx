"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const packages = [
  {
    id: "essential",
    name: "Essential",
    priceStandard: "₹4,00,000",
    pricePremium: "₹4,05,000",
    suffix: "/- for 2BHK",
    description: "We will directly provide the package details to the customers personally.",
    features: [
      "Customised Layouts",
      "Woodwork (BWP/BWR ply)",
      "Standard Hardware",
      "Basic False Ceiling",
      "Standard Electrical & Painting"
    ],
    isPopular: false
  },
  {
    id: "standard",
    name: "Standard",
    priceStandard: "₹5,50,000",
    pricePremium: "₹5,55,000",
    suffix: "/- for 2BHK",
    description: "We will directly provide the package details to the customers personally.",
    features: [
      "2D & 3D Detailed Layouts",
      "Premium Plywood & Finishes",
      "Hettich/Hafele Hardware",
      "Designer False Ceiling",
      "Accent Lighting & Wall Textures"
    ],
    isPopular: true
  },
  {
    id: "premium",
    name: "Premium",
    priceStandard: "₹7,00,000",
    pricePremium: "₹7,05,000",
    suffix: "/- for 2BHK",
    description: "We will directly provide the package details to the customers personally.",
    features: [
      "Full 3D Virtual Walkthrough",
      "Ultra-Premium Finishes (PU/Veneer)",
      "Smart Home Automation setup",
      "Custom Furniture & Furnishings",
      "End-to-End Turnkey Execution"
    ],
    isPopular: false
  }
];

export default function PackagesPage() {
  const [isPremiumToggle, setIsPremiumToggle] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("growth");

  return (
    <main className="min-h-screen relative bg-slate-50 overflow-hidden">
      {/* Abstract Background Elements for Glassmorphism */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-200/30 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-rose-200/30 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-amber-100/40 blur-[100px]"></div>
      </div>

      {/* Header Section */}
      <section className="relative w-full pt-12 pb-16 md:pt-20 md:pb-24 flex flex-col items-center justify-center z-10">
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
            <p className="text-base md:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              From single-room refreshes to complete home transformations, choose a plan that fits your vision and budget.
            </p>
          </ScrollReveal>

          {/* Smooth Sliding Toggle Switch */}
          <ScrollReveal animation="fade-in" delay={300}>
            <div className="relative inline-flex items-center p-1.5 rounded-full border border-white/50 bg-white/40 backdrop-blur-xl shadow-lg">
              {/* Sliding Pill */}
              <div 
                className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-full bg-theme-gradient shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{ transform: isPremiumToggle ? 'translateX(100%)' : 'translateX(0)' }}
              />
              <button
                onClick={() => setIsPremiumToggle(false)}
                className={`relative z-10 w-40 md:w-48 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
                  !isPremiumToggle ? "text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Standard Finish
              </button>
              <button
                onClick={() => setIsPremiumToggle(true)}
                className={`relative z-10 w-40 md:w-48 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
                  isPremiumToggle ? "text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Premium Finish
              </button>
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
                onClick={() => setSelectedPlan(pkg.id)}
                className={`group relative flex flex-col h-full rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-500 
                  bg-white/70 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} style={{ background: 'radial-gradient(120% 120% at top left, rgba(148, 163, 184, 0.9) 0%, rgba(51, 65, 85, 0.95) 40%, rgba(2, 6, 23, 0.98) 100%)' }}></div>
                
                {pkg.isPopular && (
                  <div className="absolute z-10 -top-3.5 left-1/2 -translate-x-1/2 bg-theme-gradient text-white text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-5 rounded-full shadow-md whitespace-nowrap">
                    Best Seller
                  </div>
                )}
                
                <div className="relative z-10 mb-6">
                  <h3 className={`text-xl md:text-2xl font-bold font-serif mb-2 text-slate-900 group-hover:text-white transition-colors duration-500`}>{pkg.name}</h3>
                  <p className={`text-xs md:text-sm font-light leading-relaxed text-slate-600 group-hover:text-slate-300 transition-colors duration-500`}>{pkg.description}</p>
                  
                  {/* Animated Price Section */}
                  <div className="mt-5 flex flex-col relative h-[70px] overflow-hidden">
                    <div className="flex items-baseline gap-1 relative h-full w-full">
                      <div className={`absolute left-0 transition-all duration-500 ease-out flex items-baseline gap-1.5 flex-wrap md:flex-nowrap ${isPremiumToggle ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                        <span className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500">
                          {pkg.priceStandard}
                        </span>
                        <span className="text-xs md:text-sm font-medium text-slate-500 group-hover:text-slate-400 transition-colors duration-500 whitespace-nowrap">{pkg.suffix}</span>
                      </div>
                      <div className={`absolute left-0 transition-all duration-500 ease-out flex items-baseline gap-1.5 flex-wrap md:flex-nowrap ${isPremiumToggle ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <span className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500">
                          {pkg.pricePremium}
                        </span>
                        <span className="text-xs md:text-sm font-medium text-slate-500 group-hover:text-slate-400 transition-colors duration-500 whitespace-nowrap">{pkg.suffix}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-1 border-t border-slate-200/50 group-hover:border-slate-700 pt-6 transition-colors duration-500">
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#7a1515]/10 group-hover:bg-orange-500/20 flex items-center justify-center transition-colors duration-500">
                          <svg className={`w-3 h-3 text-[#7a1515] group-hover:text-orange-400 transition-colors duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className={`text-sm font-medium text-slate-700 group-hover:text-slate-200 transition-colors duration-500`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-10">
                  <a 
                    href={`https://wa.me/916303572745?text=${encodeURIComponent(`Hi Sreevedaa team, I am interested in the ${pkg.name} package priced at ${isPremiumToggle ? pkg.pricePremium : pkg.priceStandard}. Please share more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center overflow-hidden w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-500 border border-slate-200 group-hover:border-transparent group-hover:shadow-[0_8px_25px_rgba(234,88,12,0.4)]"
                  >
                    <div className="absolute inset-0 bg-white transition-opacity duration-500 group-hover:opacity-0"></div>
                    <div className="absolute inset-0 bg-theme-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
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
