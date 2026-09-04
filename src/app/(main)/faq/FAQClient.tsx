"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlowText } from "@/components/SlowText";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide end-to-end interior design and turnkey execution services for residential, commercial, and office spaces. Our services include design consultation, 3D visualization, custom furniture, project execution, and final handover."
  },
  {
    question: "What is a turnkey interior solution?",
    answer: "A turnkey interior solution means we manage the entire project—from design and material selection to execution, installation, and final handover—so you can enjoy a hassle-free experience."
  },
  {
    question: "Do you provide both design and execution?",
    answer: "Yes. We handle everything from concept development and 3D designs to complete on-site execution, ensuring a seamless process from start to finish."
  },
  {
    question: "How long does an interior project take?",
    answer: "Project timelines depend on the size and complexity of the project. Most residential interiors are completed within 6–12 weeks after design approval."
  },
  {
    question: "Can I customize the design according to my preferences?",
    answer: "Absolutely. Every project is customized to reflect your lifestyle, functional requirements, design preferences, and budget."
  },
  {
    question: "Do you provide 3D designs before execution?",
    answer: "Yes. We create detailed 3D visualizations so you can review and approve the design before execution begins."
  },
  {
    question: "How do you determine the project cost?",
    answer: "The cost is based on factors such as space size, materials, finishes, furniture requirements, and project scope. We provide a detailed and transparent quotation before work begins."
  },
  {
    question: "Do you use branded materials?",
    answer: "Yes. We source high-quality materials and work with trusted brands to ensure durability, functionality, and premium finishes."
  },
  {
    question: "Will I have a dedicated project manager?",
    answer: "Yes. A dedicated project manager coordinates the entire project, keeps you informed, and ensures smooth execution from start to finish."
  },
  {
    question: "How do you ensure quality?",
    answer: "We follow strict quality standards, conduct regular site inspections, and perform detailed quality checks at every stage of the project."
  },
  {
    question: "Do you offer renovation services?",
    answer: "Yes. We undertake renovation and remodeling projects for homes, offices, retail spaces, and commercial properties."
  },
  {
    question: "Can you work within my budget?",
    answer: "Yes. We design solutions that maximize functionality and aesthetics while staying within your approved budget."
  },
  {
    question: "Do you provide warranties?",
    answer: "Yes. We offer warranties on selected products and workmanship. Warranty terms vary depending on the materials and products used."
  },
  {
    question: "What areas do you serve?",
    answer: "We undertake projects across multiple cities and regions. Please contact us to check service availability in your location."
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us to schedule a consultation. Our team will understand your requirements, visit the site if needed, and guide you through the design and execution process."
  },
  {
    question: "Can I make changes during the project?",
    answer: "Yes. Design changes can be accommodated whenever possible. Any changes that affect the scope, cost, or timeline will be discussed and approved before implementation."
  },
  {
    question: "Do you handle approvals and vendor coordination?",
    answer: "Yes. We coordinate with vendors, suppliers, and contractors to ensure timely procurement and smooth project execution."
  },
  {
    question: "Why should I choose your company?",
    answer: "We combine creative design, quality craftsmanship, transparent pricing, timely delivery, and dedicated project management to create spaces that are functional, elegant, and built to last."
  }
];

export function FAQClient({ heroImage }: { heroImage: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Elegant Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1a1515] pb-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="FAQ Sreeveda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="page-shell relative z-10 w-full text-center py-16 md:py-20 mt-10 md:mt-12 px-4">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <span className="inline-block mb-4 md:mb-6 text-orange-100 font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm drop-shadow-lg">
              Knowledge Base
            </span>
          </ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white leading-[1.1] font-serif shadow-black drop-shadow-2xl">
            <SlowText text="Frequently Asked Questions" delay={200} />
          </h1>
          <ScrollReveal animation="fade-in-up" delay={800}>
            <p className="text-sm md:text-xl max-w-3xl text-white font-medium mx-auto leading-relaxed shadow-black drop-shadow-xl">
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
                    <span className={`text-[1.05rem] md:text-[1.25rem] font-serif pr-4 md:pr-8 transition-colors duration-300 ${openIndex === idx ? 'text-theme-gradient font-semibold' : 'text-slate-800 group-hover:text-theme-gradient'}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-[600ms] ease-out shadow-sm bg-theme-gradient text-white ${openIndex === idx ? 'rotate-[135deg] shadow-md' : 'group-hover:shadow-md group-hover:scale-110'}`}>
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
          <a href="/contact" className="inline-flex items-center justify-center bg-theme-gradient text-white font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-maroon-800 transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(128,0,0,0.2)]">
            Contact Our Team
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
