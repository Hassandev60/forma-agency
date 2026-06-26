"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 border-t border-white/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/10 bg-white/3 overflow-hidden p-12 md:p-20 text-center"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#c8f65d]/15 blur-3xl pointer-events-none" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#c8f65d] text-xs uppercase tracking-widest mb-6"
          >
            Ready to start?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display font-extrabold text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Let's build something<br />
            <span className="text-[#c8f65d]">remarkable.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="text-white/50 max-w-md mx-auto mb-10"
          >
            Tell us about your project. We'll get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#c8f65d] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#d4ff6a] transition-colors text-sm inline-block"
              >
                Start a project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="mailto:hello@forma.studio"
                className="px-8 py-4 border border-white/15 text-white/80 hover:text-white hover:border-white/30 rounded-full transition-colors text-sm inline-block"
              >
                hello@forma.studio
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}