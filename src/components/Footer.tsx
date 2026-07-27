import Image from "next/image";
import Link from "next/link";
import { contactChannels } from "@/data/siteContent";

const footerLinks = [
  {
    heading: "Studio",
    items: [
      { href: "/about", label: "About" },
      { href: "/service", label: "Services" },
      { href: "/gallery", label: "Gallery" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    heading: "Services",
    items: [
      { href: "/service/master-planning-strategy", label: "Master Planning & Strategy" },
      { href: "/service/turnkey-execution", label: "Turnkey Execution" },
      { href: "/service/space-planning-layouts", label: "Space Planning & Layouts" },
      { href: "/service/3d-visualization-vr", label: "3D Visualization & VR" },
      { href: "/service/custom-furniture-design", label: "Custom Furniture Design" },
    ],
  },
  {
    heading: "More Services",
    items: [
      { href: "/service/lighting-design", label: "Lighting Design" },
      { href: "/service/material-selection", label: "Material Selection" },
      { href: "/service/false-ceilings-paneling", label: "False Ceilings & Paneling" },
      { href: "/service/commercial-retail", label: "Commercial & Retail" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-10 pb-6 relative overflow-hidden text-slate-300">
      <div className="page-shell">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <Image src="/images/logo.png" alt="SK Design Studio" width={180} height={70} className="h-16 w-auto object-contain" />
              </div>
              <p className="text-[15px] text-slate-400 font-light leading-relaxed max-w-sm">
                Homes, workplaces, and hospitality spaces crafted with equal parts creativity and engineering discipline. We architect lifestyles, not just spaces.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 lg:pl-8">
            {footerLinks.map((group) => (
              <div key={group.heading} className="space-y-10 lg:col-span-1">
                <h4 className="text-[14px] uppercase tracking-wider text-white font-bold">{group.heading}</h4>
                <ul className="space-y-6 text-[15px] text-slate-400 font-light">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link className="hover:text-yellow-600 transition-colors duration-300 flex items-center group relative" href={item.href}>
                        <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-maroon-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-10 lg:col-span-2">
              <h4 className="text-[14px] uppercase tracking-wider text-white font-bold">Contact Us</h4>
              <div className="text-[15px] text-slate-400 font-light space-y-6">
                <p className="leading-relaxed flex items-start gap-3">
                  <span className="shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <span>{contactChannels.address}</span>
                </p>
                <p>
                  <a className="hover:text-yellow-600 transition-colors flex items-center gap-3" href={`tel:${contactChannels.phone.replace(/\s+/g, "")}`}>
                    <span className="shrink-0">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </span>
                    {contactChannels.phone}
                  </a>
                </p>
                <p>
                  <a className="hover:text-yellow-600 transition-colors flex items-center gap-3" href={`mailto:${contactChannels.email}`}>
                    <span className="shrink-0">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <span className="truncate lg:overflow-visible lg:whitespace-normal">{contactChannels.email}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-light pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 text-center lg:text-left">
            <span>&copy; {new Date().getFullYear()} SK Design Studio. All rights reserved.</span>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-center lg:text-right gap-2 lg:gap-10 lg:pr-24 text-slate-400 mt-4 lg:mt-0">
            <span>
              Developed by <a href="https://www.abhivorn.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-medium tracking-wide hover:text-white transition-colors">Abhivorn Technologies Pvt Ltd</a> & <a href="https://www.digilevelup.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-medium tracking-wide hover:text-white transition-colors">Digi Level Up</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
