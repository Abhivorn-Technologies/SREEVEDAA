"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageManager } from "@/components/admin/ImageManager";
import { services } from "@/data/services";

export default function AdminServicesPage() {
  const [selectedService, setSelectedService] = useState<string>(services[0].slug);

  const activeServiceObj = services.find((s) => s.slug === selectedService) || services[0];

  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 font-serif">Services Management Dashboard</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Visually select and manage image assets for all 12 service categories and individual subpages.
        </p>
      </div>
      
      {/* 1. Main Services Page Marquee */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8C1F1F]"></span>
          1. Main Services Overview Page — Running Marquee Strip
        </h2>
        <ImageManager 
          page="services" 
          section="marquee" 
          title="6 Marquee Running Images" 
          hideAddButton
          defaultImages={[
            { title: "Marquee Image 1", imageUrl: "/images/hero_luxury_interior.png", order: 1 },
            { title: "Marquee Image 2", imageUrl: "/images/gallery5.png", order: 2 },
            { title: "Marquee Image 3", imageUrl: "/images/about_hero.png", order: 3 },
            { title: "Marquee Image 4", imageUrl: "/images/gallery1.png", order: 4 },
            { title: "Marquee Image 5", imageUrl: "/images/service_woodwork.png", order: 5 },
            { title: "Marquee Image 6", imageUrl: "/images/civilworks.png", order: 6 },
          ]}
        />
      </div>

      {/* 2. Visual Selector Grid & Dropdown of All 12 Services */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 mb-6 gap-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A36F4C]"></span>
            2. Select Service Category to Manage ({services.length} Services)
          </h2>

          {/* Service Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="service-dropdown" className="text-xs font-bold uppercase tracking-wider text-slate-600 whitespace-nowrap">
              Choose Service:
            </label>
            <select
              id="service-dropdown"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="rounded-xl border-gray-300 text-sm font-semibold text-slate-900 focus:ring-[#8C1F1F] focus:border-[#8C1F1F] px-4 py-2 bg-slate-50 border shadow-sm"
            >
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Visual Cards Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
          {services.map((s) => {
            const isSelected = selectedService === s.slug;
            return (
              <button
                key={s.slug}
                onClick={() => setSelectedService(s.slug)}
                className={`flex flex-col text-left rounded-xl overflow-hidden border transition-all duration-300 ${
                  isSelected
                    ? "border-[#8C1F1F] ring-2 ring-[#8C1F1F]/30 shadow-md bg-amber-50/50 scale-[1.02]"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-[#8C1F1F] text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                      ✓
                    </div>
                  )}
                </div>
                <div className="p-2.5">
                  <p className={`text-xs font-bold line-clamp-1 ${isSelected ? "text-[#8C1F1F]" : "text-gray-800"}`}>
                    {s.title}
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">/service/{s.slug}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Asset Management Workspace */}
        <div className="bg-[#FAF7F2] border border-[#EAE3D9] rounded-2xl p-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAE3D9] pb-4 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A36F4C]">
                MANAGING ACTIVE IMAGES FOR
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-950">
                {activeServiceObj.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-[#EAE3D9] shadow-sm">
              /service/{activeServiceObj.slug}
            </span>
          </div>

          <div key={selectedService} className="space-y-10">
            {/* Section 1: Hero Banner & Main Cover */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="mb-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900 font-serif">1. Service Hero Banner & Main Thumbnail Image</h4>
                <span className="text-xs text-slate-500 font-light">Shown on service card & top hero banner</span>
              </div>
              <ImageManager 
                page={`service-${selectedService}`} 
                section="hero" 
                title=""
                hideAddButton
                defaultImages={[
                  {
                    title: `${activeServiceObj.title} - Main Hero & Cover`,
                    imageUrl: activeServiceObj.image,
                    order: 1
                  }
                ]}
              />
            </div>

            {/* Section 2: 3D Groove Gallery (Sub-Images) */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="mb-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900 font-serif">2. 3D Groove Gallery (4 Sub-Images)</h4>
                <span className="text-xs text-slate-500 font-light">Shown in the 4-image showcase grid on detail page</span>
              </div>
              <ImageManager 
                page={`service-${selectedService}`} 
                section="gallery" 
                title=""
                hideAddButton
                defaultImages={activeServiceObj.gallery.map((imgUrl, i) => ({
                  title: `${activeServiceObj.title} - Gallery Image ${i + 1}`,
                  imageUrl: imgUrl,
                  order: i + 1
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
