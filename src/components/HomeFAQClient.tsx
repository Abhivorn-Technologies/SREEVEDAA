'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const homeFaqs = [
  {
    q: "What services does your interior design firm offer?",
    a: "We offer comprehensive architectural and interior design solutions including space planning, turnkey execution, 3D visualization, custom furniture design, and project management for residential and commercial spaces."
  },
  {
    q: "How long does a typical interior project take?",
    a: "Timelines vary based on scope: Initial 3D designs and layouts typically take 2-4 weeks. Full turnkey execution for residential spaces generally ranges from 3 to 6 months depending on the size and complexity."
  },
  {
    q: "Do you work with projects of all sizes?",
    a: "Yes, we serve a wide range of projects. Whether it is a single luxury room renovation, a full 4BHK villa, or a large corporate office, we have scalable solutions and flexible engagement models to fit your needs."
  }
];

export default function HomeFAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All closed by default

  return (
    <div className="space-y-4 md:space-y-5">
      {homeFaqs.map((faq, idx) => (
        <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 100}>
          <div 
            className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden shadow-sm ${
              openIndex === idx 
                ? 'border-[#A36F4C] shadow-md' 
                : 'border-[#EAE3D9] hover:border-[#A36F4C]/50'
            }`}
          >
            <button
              className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between focus:outline-none group cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className={`text-[1.05rem] md:text-[1.15rem] font-serif font-medium pr-4 transition-colors duration-300 ${openIndex === idx ? 'text-[#A36F4C]' : 'text-slate-900 group-hover:text-[#A36F4C]'}`}>
                {faq.q}
              </span>
              
              {/* Circular toggle button matching Screenshot 3 style */}
              <span className={`shrink-0 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full transition-all duration-300 shadow-sm ${
                openIndex === idx 
                  ? 'bg-[#8C1F1F] text-white rotate-45' 
                  : 'bg-[#8C1F1F] text-white group-hover:scale-105'
              }`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            
            <div 
              className={`px-6 md:px-8 overflow-hidden transition-all duration-400 ease-in-out ${openIndex === idx ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-600 font-light leading-relaxed text-[0.95rem] md:text-[1rem] pt-1 border-t border-slate-100">
                {faq.a}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
