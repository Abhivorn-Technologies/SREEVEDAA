"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VideoModal } from "@/components/VideoModal";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/admin/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d84315]"></div>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-[#d84315] hover:underline">
          Return to Projects
        </Link>
      </main>
    );
  }

  // Double the images for seamless marquee scrolling
  const marqueeImages = [...(project.marqueeImages || []), ...(project.marqueeImages || [])];

  return (
    <main className="min-h-screen bg-slate-50 relative pb-24">
      
      {/* Navigation & Header */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-[#d84315] hover:text-amber-700 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all mb-6 hover:-translate-x-2 duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Projects
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
              <span className="inline-block px-4 py-1.5 bg-theme-gradient text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-sm">
                {project.category}
              </span>
              <span className="text-slate-500 text-xs md:text-sm font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#d84315]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {project.location}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 leading-[1.15]">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Contained Hero Image */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[50vh] md:h-[65vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 group"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            priority
          />
        </motion.div>
      </div>

      {/* Project Description Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 text-[#d84315] font-bold tracking-[0.3em] uppercase text-xs">
            PROJECT OVERVIEW
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            The Design <span className="text-theme-gradient">Narrative</span>
          </h2>
          <div className="w-16 h-1 bg-theme-gradient mx-auto rounded-full mb-10" />
          
          <p className="text-slate-800 text-lg md:text-xl lg:text-2xl font-serif font-light leading-relaxed italic">
            "{project.description}"
          </p>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="w-full py-16 md:py-24 overflow-hidden bg-white border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 text-center">
            Project <span className="text-theme-gradient">Gallery</span>
          </h2>
        </div>
        
        <div className="relative w-full flex overflow-hidden group">
          <motion.div
            className="flex gap-6 md:gap-8 px-3 md:px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed here
            }}
          >
            {marqueeImages.map((src, idx) => (
              <div 
                key={idx} 
                className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden shadow-lg group-hover:opacity-75 hover:!opacity-100 transition-opacity duration-300 cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={src}
                  alt={`${project.title} gallery image ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 280px, 400px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Video <span className="text-theme-gradient">Walkthroughs</span>
          </h2>
          <p className="text-slate-600">Experience the space in motion with our detailed video tours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {project.videos?.map((videoSrc: string, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => setActiveVideo(videoSrc)}
              className="group relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow bg-slate-900 border border-slate-200"
            >
              {/* Thumbnail Background (Using project image as placeholder for video thumbnail) */}
              <Image
                src={project.marqueeImages[idx % project.marqueeImages.length]}
                alt={`Video ${idx + 1} thumbnail`}
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-[#d84315]/80 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Glassmorphism CTA Section */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200 px-4 relative overflow-hidden">
        <ScrollReveal animation="fade-in-up" className="max-w-4xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-xl p-10 md:p-16 border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] text-center overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-amber-200/30 via-orange-200/20 to-red-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <span className="inline-block mb-3 text-[#d84315] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              START YOUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-slate-900 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto font-normal text-base md:text-lg leading-relaxed">
              Schedule a free consultation and discover how our integrated approach can drive stunning results for your project.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-theme-gradient text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoSrc={activeVideo} 
      />
    </main>
  );
}
