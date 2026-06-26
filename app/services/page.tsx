"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    number: "01", title: "Brand Identity",
    description: "We build brand systems that stand out — logos, color palettes, typography, and guidelines your team can use confidently.",
    includes: ["Logo & wordmark", "Color system", "Typography scale", "Brand guidelines PDF", "Social kit"],
    color: "#c8f65d",
  },
  {
    number: "02", title: "Web Design & Development",
    description: "From marketing sites to complex web apps, we design and build fast, accessible, and beautiful digital products.",
    includes: ["UI/UX design", "Next.js development", "CMS integration", "SEO optimization", "Deployment"],
    color: "#a78bfa",
  },
  {
    number: "03", title: "UI/UX Design",
    description: "User-centered design backed by research, prototypes, and iteration — making complex flows feel effortless.",
    includes: ["User research", "Wireframing", "Figma prototypes", "Usability testing", "Design system"],
    color: "#38bdf8",
  },
  {
    number: "04", title: "Motion & Animation",
    description: "Micro-interactions, page transitions, and cinematic animations that add a layer of delight to every product.",
    includes: ["Framer Motion", "GSAP animations", "Lottie files", "Video production", "Interactive demos"],
    color: "#fb923c",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
     {/* Header */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-20"
>
  <p className="text-[#c8f65d] text-xs uppercase tracking-[0.3em] mb-4 font-medium">
    Services
  </p>

  <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-5 leading-[1.1] tracking-tight">
    What we do
  </h1>

  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl">
    Full-service creative studio covering brand strategy, design, development, and motion.
  </p>
</motion.div>

        {/* Services list */}
        <div className="space-y-6">
          {services.map((service, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={service.number}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 transition-all duration-300"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono" style={{ color: service.color }}>{service.number}</span>
                    <h2 className="font-display font-bold text-2xl text-white">{service.title}</h2>
                  </div>
                  <p className="text-white/50 leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Includes</p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: service.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-white/50 mb-6">Not sure what you need? Let's talk it through.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8f65d] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#d4ff6a] transition-colors text-sm"
          >
            Book a free call →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}