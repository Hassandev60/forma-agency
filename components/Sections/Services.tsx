




"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Logos, color systems, typography, and visual language that make your brand unmistakable.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    number: "02",
    title: "Web Design & Dev",
    description: "Pixel-perfect, performant websites and web apps built with modern tech stacks.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Intuitive interfaces backed by user research, wireframes, and interactive prototypes.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    number: "04",
    title: "Motion & Animation",
    description: "Micro-interactions, scroll animations, and cinematic transitions that bring your product to life.",
    tags: ["Framer Motion", "GSAP", "After Effects"],
  },
  {
    number: "05",
    title: "Digital Strategy",
    description: "Positioning, content strategy, and growth planning that turns visitors into customers.",
    tags: ["SEO", "Content", "Analytics"],
  },
  {
    number: "06",
    title: "Creative Direction",
    description: "End-to-end creative leadership for campaigns, launches, and rebrands.",
    tags: ["Art Direction", "Campaigns", "Launches"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 border border-white/8 rounded-2xl bg-white/2 hover:bg-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-[#c8f65d] font-mono text-sm">{service.number}</span>
        <motion.div
          whileHover={{ x: 4, y: -4 }}
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 group-hover:border-[#c8f65d] group-hover:text-[#c8f65d] transition-colors duration-300"
        >
          ↗
        </motion.div>
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-3">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs border border-white/8">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-16">
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl text-white max-w-lg"
          >
            Services built for impact
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}