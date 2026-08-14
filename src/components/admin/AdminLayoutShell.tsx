"use client";

import { useState } from "react";
import { Sidebar } from "@/components/admin/Sidebar";
import Link from "next/link";

export function AdminLayoutShell({ 
  children,
  session
}: { 
  children: React.ReactNode;
  session: any;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 h-16 md:h-20 flex items-center justify-between px-4 md:px-6 shadow-sm z-30 fixed top-0 w-full">
        {/* Logo Section */}
        <div className="w-auto md:w-64 shrink-0 md:border-r border-transparent flex items-center md:pl-2 lg:pl-8">
          <Link href="/" className="block">
            <img 
              src="/images/logo.png" 
              alt="Sreevedaa Interiors Logo" 
              width={124}
              height={112}
              className="object-contain" 
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle (Right Side) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-2 text-slate-500 hover:text-slate-900 md:hidden rounded-lg hover:bg-slate-50 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 pt-16 md:pt-20">
        
        {/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar wrapper */}
        <div className={`
          fixed inset-y-0 left-0 top-16 md:top-20 bottom-0 z-30 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:fixed
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar session={session} onNavigate={() => setIsMobileMenuOpen(false)} />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8 w-full max-w-[100vw] overflow-x-hidden md:max-w-none">
          {children}
        </main>
      </div>
    </div>
  );
}
