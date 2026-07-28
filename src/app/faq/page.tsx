"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";

const faqs = [
  {
    question: "What services does your interior design firm offer?",
    answer: "We offer comprehensive architectural and interior design solutions including space planning, turnkey execution, 3D visualization, custom furniture design, lighting automation, and project management for residential and commercial spaces."
  },
  {
    question: "How do you measure the success of a design project?",
    answer: "Success is measured through customized metrics: flawless execution, adherence to budget and timelines, premium material quality, and ultimately, how perfectly the finished space aligns with your lifestyle and vision."
  },
  {
    question: "What makes your firm different from other contractors?",
    answer: "We offer an integrated approach combining cutting-edge design technology (like VR and 3D modeling) with deep execution expertise. We handle everything from the first sketch to the final coat of paint, ensuring a hassle-free experience."
  },
  {
    question: "How long does a typical interior project take?",
    answer: "Timelines vary based on scope: Initial 3D designs and layouts typically take 2-4 weeks. Full turnkey execution for residential spaces generally ranges from 3 to 6 months depending on the size and complexity."
  },
  {
    question: "Do you work with projects of all sizes?",
    answer: "Yes, we serve a wide range of projects. Whether it is a single luxury room renovation, a full 4BHK villa, or a large corporate office, we have scalable solutions and flexible engagement models to fit your needs."
  },
  {
    question: "Can you help us design commercial or retail spaces?",
    answer: "Absolutely. We specialize in commercial expansion services including retail store layouts, hospitality design, and corporate office optimization that reflects your brand identity."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer custom pricing based on your requirements. This can be a comprehensive turnkey package (design + execution), a design-only consultancy, or a project management retainer. We provide transparent material and labor breakdowns."
  },
  {
    question: "Who will manage my project on a daily basis?",
    answer: "Every project is assigned a dedicated Lead Designer and a Site Manager. They work in tandem to ensure the design vision is executed flawlessly on-site, providing you with regular progress updates."
  },
  {
    question: "Do I need to visit the site regularly?",
    answer: "No, you do not. Our turnkey service is designed to be completely hands-off for the client if they prefer. We provide transparent weekly updates, photos, and milestones digitally."
  },
  {
    question: "Do you incorporate smart home technology?",
    answer: "Yes. We are early adopters of smart home innovations, integrating automated lighting, climate control, and security systems seamlessly into the aesthetic of your home."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Elegant Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1a1515]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact_hero.png"
            alt="FAQ SK Design Studio"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/90 via-maroon-900/80 to-[#FAFAFA]"></div>
        </div>

        <div className="page-shell relative z-10 w-full text-center py-20 md:py-24 mt-10 md:mt-16 px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <span className="inline-block mb-4 md:mb-6 text-orange-200 font-semibold tracking-[0.3em] uppercase text-[10px] md:text-sm">
              Knowledge Base
            </span>
          </ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white leading-[1.1] font-serif drop-shadow-xl">
            <SlowText text="Frequently Asked Questions" delay={200} />
          </h1>
          <ScrollReveal animation="fade-in-up" delay={800}>
            <p className="text-sm md:text-xl max-w-3xl text-white/90 font-light mx-auto leading-relaxed drop-shadow-md">
              Discover the details behind our world-class design process, execution timelines, and comprehensive architectural services. We believe in complete transparency and have curated these insights to help you make informed decisions about transforming your most cherished spaces.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative z-20 pb-16 md:pb-24 px-4 bg-[#FAFAFA]">
        <div className="w-full md:w-[85%] lg:w-[65%] mx-auto -mt-16 md:-mt-24">
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 100}>
                <div 
                  className={`bg-white border transition-all duration-[600ms] ease-out rounded-2xl overflow-hidden ${openIndex === idx ? 'border-maroon-200 shadow-[0_20px_50px_-15px_rgba(128,0,0,0.15)] -translate-y-1' : 'border-slate-100 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] hover:border-maroon-100 hover:-translate-y-1'}`}
                >
                  <button
                    className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between focus:outline-none group"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className={`text-[1.05rem] md:text-[1.25rem] font-serif pr-4 md:pr-8 transition-colors duration-300 ${openIndex === idx ? 'text-maroon-900 font-semibold' : 'text-slate-800 group-hover:text-maroon-800'}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border transition-all duration-[600ms] ease-out ${openIndex === idx ? 'border-maroon-800 bg-maroon-800 text-white rotate-[135deg]' : 'border-slate-200 text-slate-400 group-hover:border-maroon-300 group-hover:text-maroon-800 bg-slate-50 group-hover:bg-maroon-50 group-hover:rotate-90'}`}>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`px-6 md:px-8 overflow-hidden transition-all duration-[600ms] ease-in-out ${openIndex === idx ? 'max-h-[500px] pb-6 md:pb-8 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}
                  >
                    <p className="text-slate-700 font-light leading-relaxed text-[0.95rem] md:text-[1.1rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100 text-center px-4">
        <ScrollReveal animation="fade-in-up" className="page-shell">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif text-slate-900">
            <SlowText text="Still have questions?" />
          </h2>
          <p className="text-slate-700 mb-8 md:mb-10 max-w-xl mx-auto font-light text-sm md:text-lg">
            Our team is ready to help you understand our process and how we can transform your space.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center bg-maroon-900 text-white font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-maroon-800 transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(128,0,0,0.2)]">
            Contact Our Team
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
