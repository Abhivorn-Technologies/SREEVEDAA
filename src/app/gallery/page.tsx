"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="page-shell text-center max-w-3xl mx-auto">
          <span className="inline-block mb-6 text-transparent bg-clip-text bg-gradient-to-r from-maroon-900 to-maroon-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-serif leading-[1.1]">
            Project <span className="text-maroon-800 italic font-light">Gallery</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
            Explore a curated selection of our finest architectural and interior design transformations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="page-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { src: "/images/hero_luxury_interior.png", title: "Luxury Living Room" },
              { src: "/images/gallery3.png", title: "Modern False Ceilings" },
              { src: "/images/service_woodwork.png", title: "Custom Wardrobes" },
              { src: "/images/gallery1.png", title: "Corporate Studio" },
              { src: "/images/gallery5.png", title: "Material Board" },
              { src: "/images/contact_hero.png", title: "Grand Reception" }
            ].map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(img.src)}
                className="group relative aspect-[3/2] bg-slate-100 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 rounded-2xl border border-slate-100"
              >
                <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-95 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white font-serif text-3xl mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h3>
                  <div className="w-10 h-[2px] bg-maroon-400 group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-maroon-800 rounded-full p-3 transition-all cursor-pointer z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage} 
              alt="Expanded view" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
