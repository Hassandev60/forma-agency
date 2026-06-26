"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "Forma completely transformed our digital presence. The attention to detail and speed of delivery blew us away.",
    name: "Alex Rivera",
    role: "CEO, Lumio Finance",
    initials: "AR",
    color: "#c8f65d",
  },
  {
    quote: "They didn't just build what we asked for — they challenged us to think bigger. The final product exceeded every expectation.",
    name: "Priya Nair",
    role: "Product Lead, Pulse Health",
    initials: "PN",
    color: "#a78bfa",
  },
  {
    quote: "From strategy to launch in 6 weeks. The team's communication and craft are unlike any agency we've worked with.",
    name: "Tom Whitfield",
    role: "Founder, Archaus Studio",
    initials: "TW",
    color: "#38bdf8",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 border-t border-white/8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#c8f65d] text-xs uppercase tracking-widest mb-4"
          >
            What clients say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-5xl text-white"
          >
            Trusted by builders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setActive(i)}
              className={`p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-[#c8f65d]/40 bg-[#c8f65d]/5"
                  : "border-white/8 bg-white/2 hover:bg-white/5"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#c8f65d] text-sm">★</span>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-8 italic">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-[#0a0a0a]"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}