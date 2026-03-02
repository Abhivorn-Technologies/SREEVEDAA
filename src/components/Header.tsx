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
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-lg">
      <div className="page-shell flex items-center justify-between py-4 md:py-5">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="SK Design Studio" width={120} height={40} className="h-10 w-auto" priority />
            <div className="leading-tight hidden sm:block">
              <p className="text-sm uppercase tracking-[0.12em] text-amber-200">SK Design Studio</p>
              <p className="text-xs text-slate-400">Hyderabad · Telangana</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                  active ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919703319319" className="btn-ghost text-sm">
            +91 97033 19319
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            Book a walkthrough
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white mt-1.5" />
          <span className="block h-0.5 w-6 bg-white mt-1.5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 lg:hidden">
          <div className="page-shell py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                    active ? "bg-white/10 text-white" : "text-slate-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary text-center text-sm">
              Book a walkthrough
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
