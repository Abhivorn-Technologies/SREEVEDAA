"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState, useEffect } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group relative w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-900 cursor-pointer rounded-2xl shadow-md hover:shadow-2xl transition-all duration-700">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        quality={100}
      />
      
      {/* Permanent overlay for base readability, darkens slightly on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        
        {/* Always Visible Elements */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-full mb-4 shadow-sm group-hover:bg-[#d84315] group-hover:border-[#d84315] transition-colors duration-500">
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight drop-shadow-md">
            {project.title}
          </h3>
        </div>

        {/* Hidden Content: Elegantly Revealed on Hover via CSS Grid */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
          <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col">
            <div className="pt-3">
              <p className="text-slate-200 text-xs md:text-sm leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-auto pr-2">
              <span className="text-slate-300 text-[10px] uppercase tracking-wider font-medium flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#d84315]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </span>
              
              <div className="flex items-center gap-1 text-[#d84315] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                Explore
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 relative pb-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#d84315]"></span>
            <span className="text-[#d84315] font-bold tracking-[0.2em] uppercase text-xs">Our Portfolio</span>
            <span className="h-px w-8 bg-[#d84315]"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight drop-shadow-sm"
          >
            Featured <span className="text-theme-gradient">Projects</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Explore our curated collection of exquisite spaces, where innovative design meets exceptional craftsmanship and visionary execution.
          </motion.p>
        </div>

        {/* 3D Grid Layout */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d84315]"></div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 lg:gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div 
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-24px)] shrink-0"
              >
                <Link href={`/projects/${project._id}`} className="block w-full h-full">
                  <ProjectCard project={project} />
                </Link>
              </motion.div>
            ))}
            {projects.length === 0 && (
              <div className="w-full text-center py-12 text-slate-500">
                No projects found. Check back soon.
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Floating Glassmorphism CTA Section */}
      <section className="py-20 md:py-24 px-4 relative overflow-hidden mt-12 border-t border-slate-200">
        <ScrollReveal animation="fade-in-up" className="page-shell max-w-4xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-xl p-10 md:p-16 border border-slate-200 shadow-xl text-center overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-[#d84315]/20 via-orange-300/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <span className="inline-block mb-3 text-[#d84315] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              START YOUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-slate-950 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-slate-800 mb-8 max-w-xl mx-auto font-normal text-base md:text-lg leading-relaxed">
              Schedule a free consultation and discover how our integrated approach can drive stunning results for your project.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-theme-gradient text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-10 py-5 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
