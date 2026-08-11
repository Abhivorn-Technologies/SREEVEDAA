import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="fixed inset-0 z-[100] bg-slate-100 flex items-center justify-center p-4 lg:p-8 font-sans overflow-hidden">
      
      {/* Decorative corner elements matching the reference */}
      <div className="absolute top-8 right-8 opacity-20 pointer-events-none">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-slate-300" strokeWidth="3">
          <path d="M100 50A50 50 0 0 0 50 0" strokeDasharray="4 6" />
          <path d="M100 75A75 75 0 0 0 25 0" strokeDasharray="4 6" />
          <path d="M100 25A25 25 0 0 0 75 0" strokeDasharray="4 6" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 pointer-events-none rotate-180">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-slate-300" strokeWidth="3">
          <path d="M100 50A50 50 0 0 0 50 0" strokeDasharray="4 6" />
          <path d="M100 75A75 75 0 0 0 25 0" strokeDasharray="4 6" />
          <path d="M100 25A25 25 0 0 0 75 0" strokeDasharray="4 6" />
        </svg>
      </div>

      {/* Main 404 Card - Occupying ~60% of screen center */}
      <div className="relative w-[85vw] max-w-[900px] min-h-[450px] bg-white rounded-[1.5rem] flex flex-col items-center justify-center text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
        
        {/* Subtle background texture/overlay for the card */}
        <div className="absolute inset-0 bg-[url('/images/about_hero.png')] opacity-[0.03] bg-cover bg-center grayscale pointer-events-none"></div>

        <div className="relative z-10 w-full px-6 py-12 flex flex-col items-center h-full justify-center">
          
          <Link href="/" className="mb-1 hover:opacity-80 transition-opacity inline-block">
            <Image 
              src="/images/logo.png" 
              alt="Sreeveda" 
              width={180} 
              height={50} 
              className="h-10 md:h-14 w-auto object-contain" 
              priority 
            />
          </Link>
          
          {/* 404 Text with Image Masked Inside */}
          <h1 className="text-[7rem] md:text-[10rem] font-black font-serif leading-none tracking-tighter bg-[url('/images/contact_hero.png')] bg-cover bg-center text-transparent bg-clip-text">
            404
          </h1>
          
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 font-serif mt-1">
            Page not found
          </h3>
          
          <p className="text-slate-700 font-light mb-6 text-xs md:text-sm max-w-sm mx-auto">
            We searched every blueprint and floor plan, but it seems this space hasn't been built yet.
          </p>
          
          <Link 
            href="/" 
            className="inline-block bg-maroon-800 text-white hover:bg-theme-gradient transition-all duration-300 px-8 py-3 rounded text-xs font-medium shadow-md shadow-maroon-900/20 mb-6"
          >
            Back to Home
          </Link>

          {/* Footer text tightly grouped below the button */}
          <p className="text-slate-400 text-[10px]">
            © {new Date().getFullYear()} Sreeveda. All rights reserved.
          </p>

        </div>
      </div>
    </main>
  );
}
