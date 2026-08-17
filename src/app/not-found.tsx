import Link from 'next/link';
import { SlowText } from '@/components/SlowText';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF7F2] overflow-hidden items-center justify-center relative">
      {/* Decorative Elements */}
      <div className="absolute top-12 right-12 opacity-30 pointer-events-none hidden md:block">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-[#A36F4C]" strokeWidth="2">
          <path d="M100 50A50 50 0 0 0 50 0" strokeDasharray="4 6" />
          <path d="M100 75A75 75 0 0 0 25 0" strokeDasharray="4 6" />
          <path d="M100 25A25 25 0 0 0 75 0" strokeDasharray="4 6" />
        </svg>
      </div>
      <div className="absolute bottom-12 left-12 opacity-30 pointer-events-none rotate-180 hidden md:block">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-[#A36F4C]" strokeWidth="2">
          <path d="M100 50A50 50 0 0 0 50 0" strokeDasharray="4 6" />
          <path d="M100 75A75 75 0 0 0 25 0" strokeDasharray="4 6" />
          <path d="M100 25A25 25 0 0 0 75 0" strokeDasharray="4 6" />
        </svg>
      </div>

      <div className="page-shell relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-0">
        <ScrollReveal animation="fade-in-up" delay={0}>
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#A36F4C]/50"></div>
            <span className="text-[#A36F4C] font-sans font-bold tracking-[0.3em] uppercase text-[10px] md:text-[11px]">
              Error 404
            </span>
            <div className="w-12 h-[1px] bg-[#A36F4C]/50"></div>
          </div>
        </ScrollReveal>
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-2 text-slate-950 leading-[1] font-serif tracking-tighter">
          <SlowText text="404" />
        </h1>
        
        <ScrollReveal animation="fade-in-up" delay={400}>
          <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 font-medium">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-lg text-slate-600 font-light mx-auto leading-relaxed">
            The page you are looking for could not be found.
          </p>
          
          <Link href="/" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#7a1515] to-[#d84315] text-white overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:brightness-110">
            <span className="font-sans font-bold tracking-widest uppercase text-[11px] md:text-xs">
              Return Home
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </main>
  );
}
