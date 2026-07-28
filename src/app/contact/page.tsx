import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-12 flex flex-col justify-center">
      <div className="page-shell flex flex-col gap-10">
        
        {/* Top Banner Section */}
        <div className="text-center animate-fade-in-up max-w-3xl mx-auto mb-4 md:mb-8">
          <span className="inline-block mb-3 text-theme-gradient font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 font-serif leading-tight">
            Let's Start Your <span className="italic font-light text-theme-gradient">Design Journey</span>
          </h1>
          <p className="text-slate-700 font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto">
            Ready to transform your physical spaces? Schedule a free site visit or design consultation.
          </p>
        </div>

        {/* Middle Section: Split Layout (Map & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Map */}
          <div className="relative w-full h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 animate-fade-in-up delay-100">
            {/* Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121822.42767223041!2d78.36166035035222!3d17.41249767664327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            
            {/* Floating Info Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-[280px] bg-white rounded-2xl shadow-2xl p-5 border border-slate-100/50 backdrop-blur-sm">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                <div className="w-10 h-10 bg-maroon-800 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm shadow-maroon-900/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Sreeveda</h3>
                  <p className="text-[10px] text-slate-700">India</p>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-[10px] text-slate-700 mb-0.5">Address:</p>
                    <p className="text-xs text-slate-800 font-medium leading-tight">
                      Pan-India Operations, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.89-1.29-5.28-3.68-6.57-6.57l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <p className="text-[11px] text-slate-700">Phone: <span className="text-slate-800 font-medium">+91 70365 92351</span></p>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <p className="text-[11px] text-slate-700 truncate">Email: <span className="text-slate-800 font-medium truncate">contact@sreevedaa.com</span></p>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href="https://maps.google.com/?q=India" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-theme-gradient text-white px-4 py-3 rounded-xl font-semibold hover:bg-maroon-800 transition-all flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest shadow-md shadow-maroon-900/20"
              >
                Get Directions
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full h-full animate-fade-in-up delay-200 flex flex-col">
            <LeadForm title="Book a Consultation" hasMessage={true} />
          </div>

        </div>

        {/* Bottom Section: Contact Cards Row-Wise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-fade-in-up delay-300">
          {/* Email Card */}
          <a href="mailto:contact@sreevedaa.com" className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group flex items-center gap-5">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-theme-gradient shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="overflow-hidden">
              <h3 className="font-bold text-slate-900 mb-1 text-base">Email</h3>
              <p className="text-xs text-slate-700 font-light truncate">contact@sreevedaa.com</p>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+917036592351" className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group flex items-center gap-5">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-theme-gradient shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="overflow-hidden">
              <h3 className="font-bold text-slate-900 mb-1 text-base">Phone</h3>
              <p className="text-xs text-slate-700 font-light truncate">+91 70365 92351</p>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a href="https://wa.me/917036592351?text=Hello%20Sreevedaa%20Interiors%2C%20I%20would%20like%20to%20inquire%20about%20your%20design%20services." className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group flex items-center gap-5">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-theme-gradient shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <div className="overflow-hidden">
              <h3 className="font-bold text-slate-900 mb-1 text-base">WhatsApp</h3>
              <p className="text-xs text-slate-700 font-light truncate">+91 70365 92351</p>
            </div>
          </a>
        </div>
        
      </div>
    </main>
  );
}
