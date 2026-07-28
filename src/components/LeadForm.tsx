"use client";

import { useState } from "react";

export function LeadForm({ title = "Request an Audit", hasMessage = false }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateName = (value: string) => {
    let error = "";
    const trimmed = value.trim();
    if (!trimmed) {
      error = "Name is required.";
      return error;
    }
    if (trimmed.length < 2) {
      error = "Name must be at least 2 characters.";
      return error;
    }
    if (trimmed.length > 100) {
      error = "Name cannot exceed 100 characters.";
      return error;
    }
    
    // Disallow numbers and dangerous characters
    const restrictedPattern = /[0-9<>&"\'%\`~!@#$^\*+=\[\]{}|\\/?,;:]/;
    if (restrictedPattern.test(value)) {
      error = "Name contains invalid characters.";
      return error;
    }

    return error;
  };

  const formatName = (value: string) => {
    // Capitalize first letter of each word
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Actively strip out numbers and dangerous characters as the user types
    const val = e.target.value.replace(/[0-9<>&"\'%\`~!@#$^\*+=\[\]{}|\\/?,;:]/g, "");
    setFormData((prev) => ({ ...prev, name: val }));
    if (errors.name) setErrors((prev) => ({ ...prev, name: validateName(val) }));
  };

  const handleNameBlur = () => {
    const formatted = formatName(formData.name.trim());
    setFormData((prev) => ({ ...prev, name: formatted }));
    setErrors((prev) => ({ ...prev, name: validateName(formatted) }));
  };

  const validatePhone = (value: string) => {
    let error = "";
    if (!value) {
      error = "Mobile number is required.";
      return error;
    }
    if (!/^[6-9]\d{9}$/.test(value)) {
      error = "Enter a valid 10-digit number.";
      return error;
    }
    return error;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    let val = e.target.value.replace(/\D/g, "");
    
    // If the first digit typed is 0-5, strip it out immediately
    if (val.length > 0 && /^[0-5]/.test(val)) {
      val = val.slice(1);
    }
    
    val = val.slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: validatePhone(val) }));
  };

  const validateEmail = (value: string) => {
    let error = "";
    if (!value) {
      error = "Email is required.";
      return error;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Enter a valid email address.";
      return error;
    }
    return error;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameErr = validateName(formData.name);
    const phoneErr = validatePhone(formData.phone);
    const emailErr = validateEmail(formData.email);
    
    if (nameErr || phoneErr || emailErr) {
      setErrors({ name: nameErr, phone: phoneErr, email: emailErr });
      return;
    }

    // Prepare WhatsApp Message
    const text = `*New Lead from Website*%0A*Name:* ${formData.name.trim()}%0A*Phone:* +91 ${formData.phone}%0A*Email:* ${formData.email}${
      hasMessage && formData.message ? `%0A*Message:* ${formData.message.trim()}` : ""
    }`;
    
    const whatsappUrl = `https://wa.me/917036592351?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-10 shadow-2xl bg-white rounded-3xl border border-slate-100">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-serif text-center">{title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-[10px] font-semibold tracking-widest uppercase text-slate-700 mb-2">
            Your Name <span className="text-red-500 text-sm ml-0.5 leading-none">*</span>
          </label>
          <input 
            type="text" 
            value={formData.name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 text-slate-900 bg-slate-50 focus:bg-white transition-all shadow-sm ${errors.name ? 'border-red-500' : 'border-slate-200'}`} 
            placeholder="John Doe" 
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-[10px] font-semibold tracking-widest uppercase text-slate-700 mb-2">
            Mobile Number <span className="text-red-500 text-sm ml-0.5 leading-none">*</span>
          </label>
          <div className={`flex items-center w-full px-3 py-3 rounded-xl border focus-within:border-maroon-800 focus-within:ring-1 focus-within:ring-maroon-800 text-slate-900 bg-slate-50 focus-within:bg-white transition-all shadow-sm ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}>
            <span className="text-slate-700 font-medium pr-2 border-r border-slate-300 mr-2 text-sm shrink-0">+91</span>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={handlePhoneChange}
              onBlur={() => setErrors(prev => ({ ...prev, phone: validatePhone(formData.phone) }))}
              className="w-full flex-1 min-w-0 bg-transparent focus:outline-none text-sm" 
              placeholder="99999 99999" 
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-[10px] font-semibold tracking-widest uppercase text-slate-700 mb-2">
          Email Address <span className="text-red-500 text-sm ml-0.5 leading-none">*</span>
        </label>
        <input 
          type="email" 
          value={formData.email}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, email: e.target.value }));
            if (errors.email) setErrors(prev => ({ ...prev, email: validateEmail(e.target.value) }));
          }}
          onBlur={() => setErrors(prev => ({ ...prev, email: validateEmail(formData.email) }))}
          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 text-slate-900 bg-slate-50 focus:bg-white transition-all shadow-sm ${errors.email ? 'border-red-500' : 'border-slate-200'}`} 
          placeholder="john@company.com" 
        />
        {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
      </div>

      {hasMessage && (
        <div className="mb-6">
          <label className="block text-[10px] font-semibold tracking-widest uppercase text-slate-700 mb-2">
            Your Message
          </label>
          <textarea 
            rows={2} 
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 text-slate-900 bg-slate-50 focus:bg-white transition-all shadow-sm resize-none"
            placeholder="Tell us about your project, location, and goals..."
          ></textarea>
        </div>
      )}

      <button type="submit" className="w-full bg-maroon-900 hover:bg-maroon-800 !text-white font-medium tracking-widest uppercase text-[11px] py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(128,0,0,0.25)] hover:shadow-[0_15px_40px_rgba(128,0,0,0.4)] hover:-translate-y-1">
        Submit Request
      </button>
      <div className="mt-5 text-center">
        <p className="text-[10px] text-slate-400 font-light">
          By submitting this form, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </form>
  );
}
