"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "Q/A" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm transition-all border-b border-slate-100 h-20 md:h-24 lg:h-[90px] flex items-center">
        <div className="page-shell w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image src="/images/logo.png" alt="SK Design Studio" width={170} height={55} className="h-9 md:h-11 lg:h-14 w-auto" priority />
            </Link>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-all border-b-2 ${active ? "border-maroon-800 text-maroon-800" : "border-transparent text-slate-600 hover:text-maroon-800"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm">
              Book a Consultation
            </Link>
          </div>

          <button
            className="inline-flex flex-col h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden text-slate-800 hover:bg-slate-50 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current mt-1" />
            <span className="block h-[2px] w-5 bg-current mt-1" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Dark Background Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Sliding Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/images/logo.png" alt="SK Design Studio" width={140} height={40} className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
              aria-label="Close navigation"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1 bg-white">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-5 py-4 text-[15px] font-medium transition-all ${active ? "bg-slate-50 text-slate-900" : "text-slate-600 hover:text-maroon-800 hover:bg-slate-50/50"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-8 pt-8 border-t border-slate-100 px-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center bg-maroon-900 text-white font-medium py-4 rounded-xl text-sm hover:bg-maroon-800 transition-colors shadow-md"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
