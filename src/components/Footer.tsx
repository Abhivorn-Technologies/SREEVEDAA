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
      { href: "/all-type-of-false-ceilings", label: "False ceilings" },
      { href: "/lighting", label: "Lighting design" },
      { href: "/woodwork", label: "Woodwork" },
      { href: "/civilwork", label: "Civil & turnkey" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-slate-950/90">
      <div className="page-shell grid gap-10 py-12 lg:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="SK Design Studio" width={120} height={40} className="h-10 w-auto" />
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-amber-200">SK Design Studio</p>
              <p className="text-xs text-slate-400">Hyderabad · Telangana</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Homes, workplaces, and hospitality spaces crafted with equal parts creativity and engineering discipline.
          </p>
          <div className="flex gap-2 text-sm text-slate-300">
            <a className="hover:text-white" href={`tel:${contactChannels.phone.replace(/\s+/g, "")}`}>
              {contactChannels.phone}
            </a>
            <span className="text-slate-600">·</span>
            <a className="hover:text-white" href={`mailto:${contactChannels.email}`}>
              {contactChannels.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {footerLinks.map((group) => (
            <div key={group.heading} className="space-y-3">
              <p className="text-sm uppercase tracking-[0.14em] text-amber-200">{group.heading}</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:text-white" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.14em] text-amber-200">Visit / Call</p>
          <div className="text-sm text-slate-300 space-y-2">
            <p>{contactChannels.address}</p>
            <p>Open for site visits and remote design reviews.</p>
            <Link href="/contact" className="btn-primary w-fit text-sm">
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="page-shell py-4 text-xs text-slate-500 flex flex-wrap items-center gap-2 justify-between">
        <span>© {new Date().getFullYear()} SK Design Studio. All rights reserved.</span>
        <span className="text-slate-600">Built with Next.js · Deployed anywhere.</span>
      </div>
    </footer>
  );
}
