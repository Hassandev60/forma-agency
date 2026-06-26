"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-14">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Effects */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#c8f65d]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] sm:text-xs text-white/60 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#c8f65d] animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Heading */}
       <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    font-sans
    font-bold
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-[6.5rem]
    xl:text-[7rem]
    leading-[0.95]
    tracking-[-0.05em]
    text-white
  "
>
  We design
</motion.h1>

<motion.h2
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.15 }}
  className="
    font-sans
    font-bold
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-[6.5rem]
    xl:text-[7rem]
    leading-[0.95]
    tracking-[-0.06em]
    text-[#c8f65d]
    mb-8
  "
>
  Experiences
</motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="
            max-w-2xl
            mx-auto
            text-base
            sm:text-lg
            md:text-xl
            text-white/60
            leading-relaxed
            mb-12
          "
        >
          A creative studio crafting digital products, brand identities, and
          motion that make people stop scrolling.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 rounded-full bg-[#c8f65d] text-[#0a0a0a] font-semibold hover:bg-[#d6ff73] transition"
            >
              Start a Project
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 rounded-full border border-white/15 text-white hover:border-white/40 transition"
            >
              View Our Work →
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 pt-10 border-t border-white/10"
        >
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">120+</h3>
            <p className="text-white/40 text-sm mt-2">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">6+</h3>
            <p className="text-white/40 text-sm mt-2">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">98%</h3>
            <p className="text-white/40 text-sm mt-2">
              Client Satisfaction
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[2px] h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
