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
      { href: "/faq", label: "Q/A" },
      { href: "/contact", label: "Contact" },
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
    <footer className="bg-[#0a0a0a] pt-10 pb-6 relative overflow-hidden text-white/70">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-6">
              <Image src="/images/favicon_cropped.png" alt="Sreeveda" width={160} height={82} className="w-32 md:w-40 h-auto object-contain" />
            </div>
            <p className="text-base text-white/70 font-light leading-relaxed max-w-sm">
              Homes, workplaces, and hospitality spaces crafted with equal parts creativity and engineering discipline. We architect lifestyles, not just spaces.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {footerLinks.map((group) => (
              <div key={group.heading} className="space-y-6">
                <h4 className="text-sm uppercase tracking-widest text-white font-semibold">{group.heading}</h4>
                <ul className="space-y-4 text-[15px] text-white/70 font-light">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link className="hover:text-white transition-colors duration-300 block" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-6 sm:col-span-2 md:col-span-1">
              <h4 className="text-sm uppercase tracking-widest text-white font-semibold">Contact Us</h4>
              <div className="text-[15px] text-white/70 font-light space-y-4">
                <p className="leading-relaxed">
                  {contactChannels.address}
                </p>
                <p>
                  <a className="hover:text-white transition-colors block" href={`tel:${contactChannels.phone.replace(/\s+/g, "")}`}>
                    {contactChannels.phone}
                  </a>
                </p>
                <p>
                  <a className="hover:text-white transition-colors block whitespace-nowrap" href={`mailto:${contactChannels.email}`}>
                    {contactChannels.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 font-light pb-4">
          <div className="text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Sreeveda. All rights reserved.</span>
          </div>
          <div className="text-center md:text-right text-white/50">
            <span>
              Developed by <a href="https://www.abhivorn.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-white transition-colors">Abhivorn Technologies</a> & <a href="https://www.digilevelup.in/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-white transition-colors">Digi Level Up</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

