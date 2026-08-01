"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const packages = [
  {
    id: "essential",
    name: "Essential Plan",
    priceStandard: "₹45,000",
    pricePremium: "₹55,000",
    suffix: "/ room",
    description: "Perfect for a single room makeover with basic 3D designs and furniture layout.",
    features: [
      "2D Furniture Layout",
      "Basic 3D Renderings (2 Views)",
      "Color Consultation",
      "Material Selection Board",
      "1 Revision Included"
    ],
    isPopular: false
  },
  {
    id: "growth",
    name: "Growth Plan",
    priceStandard: "₹85,000",
    pricePremium: "₹95,000",
    suffix: "/ room",
    description: "Our most popular package offering comprehensive design and execution details.",
    features: [
      "Detailed 2D & 3D Layouts",
      "Photorealistic Renderings (4 Views)",
      "False Ceiling & Lighting Design",
      "Custom Furniture Design",
      "3 Revisions Included"
    ],
    isPopular: true
  },
  {
    id: "ultimate",
    name: "Ultimate Plan",
    priceStandard: "₹1,50,000",
    pricePremium: "₹1,80,000",
    suffix: "/ room",
    description: "The complete turnkey experience for luxury homes and large-scale projects.",
    features: [
      "Full Home Virtual Walkthrough",
      "Premium Material Sourcing",
      "Dedicated Project Manager",
      "End-to-End Execution Support",
      "Unlimited Revisions"
    ],
    isPopular: false
  }
];

export default function PackagesPage() {
  const [isPremiumToggle, setIsPremiumToggle] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("growth");

  const selectedPackage = packages.find(p => p.id === selectedPlan) || packages[1];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Header Section */}
      <section className="relative w-full pt-6 pb-8 md:pt-12 md:pb-12 flex flex-col items-center justify-center bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
          <ScrollReveal animation="fade-in-up">
            <span className="inline-block py-1 px-4 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 border border-slate-200 shadow-sm">
              Transparent Pricing
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight max-w-3xl mx-auto bg-gradient-to-r from-slate-900 via-maroon-900 to-slate-900 bg-clip-text text-transparent pb-1 tracking-tight">
              Design packages for every scale.
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-base md:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-6">
              From single-room refreshes to complete home transformations, choose a plan that fits your vision and budget.
            </p>
          </ScrollReveal>

          {/* Toggle Switch */}
          <ScrollReveal animation="fade-in" delay={300}>
            <div className="inline-flex items-center p-1.5 rounded-full border border-slate-200 bg-white shadow-sm">
              <button
                onClick={() => setIsPremiumToggle(false)}
                className={`relative px-8 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
                  !isPremiumToggle 
                    ? "bg-slate-900 text-white shadow-md" 
                    : "text-slate-400 hover:text-slate-900 bg-transparent"
                }`}
              >
                Standard Finish
              </button>
              <button
                onClick={() => setIsPremiumToggle(true)}
                className={`relative px-8 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
                  isPremiumToggle 
                    ? "bg-theme-gradient text-white shadow-md" 
                    : "text-slate-400 hover:text-slate-900 bg-transparent"
                }`}
              >
                Premium Finish
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative z-20 mt-6 md:mt-12">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24 max-w-5xl mx-auto px-4 items-center">
          {packages.map((pkg) => {
            const isDark = pkg.isPopular;
            const isSelected = selectedPlan === pkg.id;
            
            return (
            <ScrollReveal key={pkg.id} animation="fade-in-up" delay={pkg.id === 'growth' ? 100 : 0}>
              <div 
                onClick={() => setSelectedPlan(pkg.id)}
                className={`group relative flex flex-col h-full rounded-2xl p-6 md:p-7 cursor-pointer transition-all duration-500 bg-white border border-slate-200 shadow-sm hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} style={{ background: 'radial-gradient(120% 120% at top left, #94a3b8 0%, #334155 40%, #020617 100%)' }}></div>
                
                {pkg.isPopular && (
                  <div className="absolute z-10 -top-3.5 left-1/2 -translate-x-1/2 bg-theme-gradient text-white text-[9px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md whitespace-nowrap">
                    Best Seller
                  </div>
                )}
                
                <div className="relative z-10 mb-6">
                  <h3 className={`text-lg font-bold font-serif mb-1 text-slate-900 group-hover:text-white transition-colors duration-500`}>{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl md:text-4xl font-bold tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500`}>
                      {isPremiumToggle ? pkg.pricePremium : pkg.priceStandard}
                    </span>
                    <span className={`text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-500`}>{pkg.suffix}</span>
                  </div>
                  <p className={`text-xs mt-3 font-light leading-relaxed text-slate-600 group-hover:text-slate-300 transition-colors duration-500`}>{pkg.description}</p>
                </div>

                <div className="relative z-10 flex-1">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg className={`w-4 h-4 shrink-0 mt-0.5 text-maroon-800 group-hover:text-orange-400 transition-colors duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-xs font-light text-slate-700 group-hover:text-slate-200 transition-colors duration-500`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-6 pt-6 border-t border-slate-200 transition-colors duration-500 group-hover:border-slate-500/50">
                  <button className="relative overflow-hidden w-full py-3 rounded-full text-sm font-semibold transition-all duration-500 border border-slate-200 group-hover:border-transparent group-hover:shadow-[0_8px_20px_rgba(234,88,12,0.3)]">
                    <div className="absolute inset-0 bg-slate-50 transition-opacity duration-500 group-hover:opacity-0"></div>
                    <div className="absolute inset-0 bg-theme-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <span className="relative z-10 text-slate-700 transition-colors duration-500 group-hover:text-white">Get Started</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>



        {/* Support CTA */}
        <ScrollReveal animation="fade-in-up" className="max-w-4xl mx-auto text-center bg-white border border-slate-100 rounded-3xl p-10 md:p-14 shadow-sm mx-4 lg:mx-auto mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-3">Still have questions?</h2>
          <p className="text-slate-600 font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Talk to our team about pricing, process, or finding the right plan for your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-white text-maroon-800 border border-maroon-800 hover:bg-maroon-800 hover:text-white hover:border-transparent shadow-sm hover:shadow-md rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Contact Support
            </Link>
            <Link href="https://wa.me/910000000000" target="_blank" className="w-full sm:w-auto px-8 py-3.5 bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white hover:border-transparent shadow-sm hover:shadow-md rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
