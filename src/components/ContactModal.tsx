"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, handle submission here
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", mobile: "", message: "" });
        onClose();
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    // Strict input filtering and length limits
    if (name === "name") {
      // Only alphabets and spaces
      newValue = value.replace(/[^a-zA-Z\s]/g, "").slice(0, 50);
    } else if (name === "mobile") {
      // Only digits, spaces, and + 
      newValue = value.replace(/[^\d\s+]/g, "").slice(0, 15);
    } else if (name === "email") {
      // No spaces
      newValue = value.replace(/[\s]/g, "").slice(0, 100);
    } else if (name === "message") {
      newValue = value.slice(0, 500);
    }

    setFormData({ ...formData, [name]: newValue });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight mb-0.5">Book Free Consultation</h3>
          <p className="text-xs text-slate-700 font-light">See how SK Design Studio can transform your space.</p>
        </div>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">Request Submitted!</h4>
            <p className="text-slate-700 text-xs">We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-wider">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  maxLength={50}
                  className={`w-full pl-9 pr-3 py-2 border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800'} rounded-lg text-sm transition-all outline-none bg-slate-50 focus:bg-white`}
                />
              </div>
              {errors.name && <p className="mt-0.5 text-[10px] text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-wider">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="work@email.com"
                  maxLength={100}
                  className={`w-full pl-9 pr-3 py-2 border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800'} rounded-lg text-sm transition-all outline-none bg-slate-50 focus:bg-white`}
                />
              </div>
              {errors.email && <p className="mt-0.5 text-[10px] text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-wider">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 99999 99999"
                  maxLength={15}
                  className={`w-full pl-9 pr-3 py-2 border ${errors.mobile ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800'} rounded-lg text-sm transition-all outline-none bg-slate-50 focus:bg-white`}
                />
              </div>
              {errors.mobile && <p className="mt-0.5 text-[10px] text-red-500">{errors.mobile}</p>}
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-wider">Message (Optional)</label>
              <div className="relative">
                <div className="absolute top-2.5 left-3 flex items-start pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements?"
                  rows={2}
                  maxLength={500}
                  className="w-full pl-9 pr-3 py-2 border border-slate-200 focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 rounded-lg text-sm transition-all outline-none bg-slate-50 focus:bg-white resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-maroon-900 hover:bg-maroon-800 text-white font-bold rounded-lg transition-colors mt-2 text-sm shadow-[0_4px_14px_0_rgba(128,0,0,0.39)]"
            >
              Book Demo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
