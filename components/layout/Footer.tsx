import Link from "next/link";

const links = {
  Work: ["/work", "/services", "/about"],
  Connect: ["/contact", "#", "#"],
  Labels: {
    "/work": "Portfolio",
    "/services": "Services",
    "/about": "About Us",
    "/contact": "Contact",
    "#": "",
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#c8f65d] rounded-sm" />
              <span className="font-display font-bold text-lg text-white">
                Forma<span className="text-[#c8f65d]">.</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              A creative design studio crafting digital experiences that move people and grow businesses.
            </p>
          </div>

          {/* Nav */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Pages</p>
              <ul className="space-y-3">
                {[
                  { label: "Work", href: "/work" },
                  { label: "Services", href: "/services" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Social</p>
              <ul className="space-y-3">
                {["Twitter", "Dribbble", "LinkedIn", "Instagram"].map((s) => (
                  <li key={s}>
                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Start a project</p>
            <p className="text-white/50 text-sm mb-6">Have an idea? Let's build something great together.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c8f65d] text-[#0a0a0a] text-sm font-semibold rounded-full hover:bg-[#d4ff6a] transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/8">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Forma Studio. All rights reserved.</p>
          <p className="text-white/30 text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}