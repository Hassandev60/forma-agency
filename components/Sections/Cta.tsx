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
  className="
    relative
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    overflow-hidden
    p-8
    sm:p-12
    md:p-16
    lg:p-20
    text-center
  "
>
  {/* Glow */}
  <div
    className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-72
      sm:w-96
      h-40
      sm:h-48
      bg-[#c8f65d]/15
      blur-3xl
      pointer-events-none
    "
  />

  {/* Label */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.1 }}
    className="
      relative
      text-[#c8f65d]
      text-sm
      uppercase
      tracking-[0.3em]
      mb-5
      font-medium
    "
  >
    Ready to start?
  </motion.p>


  {/* Heading - Same Style As Our Work */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.2 }}
    className="
      relative
      font-sans
      font-display
      font-black
      text-4xl
      sm:text-5xl
      md:text-6xl
      lg:text-7xl
      xl:text-7xl
      leading-[1.05]
      tracking-[-0.05em]
      text-white
      mb-6
    "
  >
    Let's build something
    <br />
    <span className="text-[#c8f65d]">
      remarkable.
    </span>
  </motion.h2>


  {/* Description */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ delay: 0.35 }}
    className="
      relative
      text-white/60
      text-sm
      sm:text-base
      max-w-md
      mx-auto
      mb-10
      leading-relaxed
    "
  >
    Tell us about your project. We'll get back to you within 24 hours.
  </motion.p>


  {/* Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.45 }}
    className="
      relative
      flex
      flex-col
      sm:flex-row
      items-center
      justify-center
      gap-4
    "
  >

    {/* Primary Button */}
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        href="/contact"
        className="
          px-8
          py-4
          bg-[#c8f65d]
          text-[#0a0a0a]
          font-semibold
          rounded-full
          hover:bg-[#d4ff6a]
          transition-colors
          text-sm
          inline-block
        "
      >
        Start a project
      </Link>
    </motion.div>


    {/* Email Button */}
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <a
        href="mailto:hello@forma.studio"
        className="
          px-8
          py-4
          border
          border-white/15
          text-white/80
          hover:text-white
          hover:border-white/30
          rounded-full
          transition-colors
          text-sm
          inline-block
        "
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