'use client';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Narsimha Reddy",
    location: "Villa in Aparna Gardenia",
    quote: "Sreevedaa completely transformed our villa into a masterpiece. Their attention to detail and premium finish exceeded our expectations. Truly a hassle-free and luxurious experience.",
  },
  {
    name: "Srinivas Reddy",
    location: "Villa in Aparna Gardenia",
    quote: "From the initial 3D designs to the final handover, the team was professional and dedicated. The quality of materials and the elegant execution made our home perfect.",
  },
  {
    name: "Karunakar Rao",
    location: "3BHK in Hima Sai Srinidhm",
    quote: "We wanted a classic yet modern look for our 3BHK, and Sreevedaa delivered exactly that. Their project management is top-notch, ensuring everything was on time.",
  },
  {
    name: "Uday",
    location: "3BHK in Aditya Empress Towers",
    quote: "The seamless turnkey execution took all the stress away. The design strategy was thoughtful and the craftsmanship is evident in every corner of our home.",
  },
  {
    name: "Yamini",
    location: "3BHK in NCC Urban One",
    quote: "Absolutely thrilled with our new interiors! The team listened to our requirements and executed them with perfection. A premium service I highly recommend.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Autoplay every 6 seconds (6000ms) with smooth transition
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (idx: number) => {
    if (idx === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsFading(false);
    }, 300);
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Warm Luxury Alabaster Card */}
      <div className="bg-[#FAF7F2] rounded-[2.5rem] p-8 md:p-14 border border-[#EAE3D9] shadow-[0_25px_60px_-15px_rgba(163,111,76,0.06)] text-center relative overflow-hidden flex flex-col items-center">
        
        {/* Rating Stars */}
        <div className="flex gap-1.5 text-[#A36F4C] mb-6 relative z-10">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote Content with Smooth Fade */}
        <div className={`min-h-[140px] md:min-h-[130px] flex items-center justify-center relative z-10 transition-all duration-300 ${isFading ? 'opacity-0 scale-98 translate-y-1' : 'opacity-100 scale-100 translate-y-0'}`}>
          <p className="text-slate-900 font-serif italic text-xl md:text-3xl leading-[1.6] tracking-tight max-w-2xl mx-auto font-normal">
            "{testimonials[currentIndex].quote}"
          </p>
        </div>

        {/* Author Name & Location */}
        <div className={`mt-8 relative z-10 transition-all duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <h4 className="text-slate-950 font-serif font-bold text-lg md:text-xl tracking-wide">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-[#A36F4C] text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] mt-1.5 font-sans">
            {testimonials[currentIndex].location}
          </p>
        </div>

      </div>

      {/* Centered Premium Carousel Dots Below Card */}
      <div className="flex justify-center items-center gap-2.5 mt-8">
        {testimonials.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              idx === currentIndex 
                ? 'w-9 bg-[#A36F4C] shadow-sm shadow-[#A36F4C]/30' 
                : 'w-2.5 bg-[#EAE3D9] hover:bg-[#A36F4C]/40'
            }`}
            aria-label={`Go to review ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
