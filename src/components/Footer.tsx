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
      { href: "/service/residential-interiors", label: "Residential Interiors" },
      { href: "/service/commercial-interiors", label: "Commercial Interiors" },
      { href: "/service/office-interiors", label: "Office Interiors" },
      { href: "/service/modular-kitchens", label: "Modular Kitchens" },
      { href: "/service/custom-furniture", label: "Custom Furniture" },
      { href: "/service/civil-renovation-works", label: "Civil & Renovation Works" },
    ],
  },
  {
    heading: "More Services",
    items: [
      { href: "/service/electrical-plumbing", label: "Electrical & Plumbing" },
      { href: "/service/false-ceiling-lighting", label: "False Ceiling & Lighting" },
      { href: "/service/flooring-wall-finishes", label: "Flooring & Wall Finishes" },
      { href: "/service/painting-decorative-finishes", label: "Painting & Decorative Finishes" },
      { href: "/service/smart-home-solutions", label: "Smart Home Solutions" },
      { href: "/service/turnkey-project-management", label: "Turnkey Project Management" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#2D0808] pt-16 pb-8 relative overflow-hidden text-slate-100 font-sans border-t border-amber-900/40">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Image 
                  src="/images/favicon_cropped.png" 
                  alt="Sreevedaa Interiors" 
                  width={180} 
                  height={90} 
                  className="w-36 md:w-44 h-auto object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]" 
                />
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-sm mb-6">
                Designing elegant spaces through creativity, quality craftsmanship, and seamless turnkey execution.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/sreevedaainteriors?igsh=cTN1ZnRoNDdtNjJo&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 hover:text-slate-950 transition-all duration-300 text-white shadow-sm" 
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {footerLinks.map((group) => (
              <div key={group.heading} className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.15em] text-amber-300 font-bold font-serif">{group.heading}</h4>
                <ul className="space-y-3 text-sm text-slate-100 font-light">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link className="hover:text-amber-300 transition-colors duration-300 block" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <h4 className="text-xs uppercase tracking-[0.15em] text-amber-300 font-bold font-serif">Contact Us</h4>
              <div className="text-sm text-slate-100 font-light space-y-3">
                <p className="leading-relaxed">
                  <a href={contactChannels.googleMaps} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                    {contactChannels.address}
                  </a>
                </p>
                <p>
                  <span className="block text-amber-400 text-[10px] uppercase font-bold tracking-wider mb-0.5">Primary</span>
                  <a className="hover:text-amber-300 transition-colors block font-semibold text-white" href={`tel:${contactChannels.phone.replace(/\s+/g, "")}`}>
                    {contactChannels.phone}
                  </a>
                </p>
                <p>
                  <span className="block text-amber-400 text-[10px] uppercase font-bold tracking-wider mb-0.5">Secondary</span>
                  <a className="hover:text-amber-300 transition-colors block font-semibold text-white" href={`tel:${contactChannels.secondaryPhone?.replace(/\s+/g, "")}`}>
                    {contactChannels.secondaryPhone}
                  </a>
                </p>
                <p>
                  <a className="hover:text-amber-300 transition-colors block whitespace-nowrap" href={`mailto:${contactChannels.email}`}>
                    {contactChannels.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-900/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-100/70 font-light">
          <div className="text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Sreevedaa Interiors. All rights reserved.</span>
          </div>
          <div className="text-center md:text-right text-amber-100/70">
            <span>
              Developed by <a href="https://www.abhivorn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 font-medium transition-colors">Abhivorn Technologies</a> & <a href="https://www.digilevelup.in/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 font-medium transition-colors">Digi Level Up</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
