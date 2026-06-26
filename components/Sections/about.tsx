"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Sarah Chen", role: "Creative Director", bio: "10+ years shaping brands for global clients. Formerly at Pentagram.", initials: "SC", color: "#c8f65d" },
  { name: "James Adler", role: "Lead Developer", bio: "Full-stack engineer specializing in Next.js and high-performance web apps.", initials: "JA", color: "#a78bfa" },
  { name: "Mia Torres", role: "UI/UX Designer", bio: "Systems thinker turned pixel perfectionist. Loves accessibility.", initials: "MT", color: "#38bdf8" },
  { name: "Ravi Patel", role: "Motion Designer", bio: "Brings interfaces to life with Framer Motion and GSAP. After Effects wizard.", initials: "RP", color: "#fb923c" },
];

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "6yrs", label: "In the industry" },
  { value: "98%", label: "Client satisfaction" },
  { value: "4", label: "Core team members" },
];

export default function AboutPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
            <motion.div
  ref={headerRef}
  initial={{ opacity: 0, y: 30 }}
  animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="mb-20 max-w-3xl"
>
  <p className="text-[#c8f65d] text-xs uppercase tracking-[0.3em] mb-4 font-medium">
    About us
  </p>

  <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6 leading-[1.1] tracking-tight">
    A studio built on craft
  </h1>

  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl">
    We're a small, focused team that cares deeply about the work. We believe the
    best digital experiences come from the intersection of design, engineering,
    and strategic thinking — and we don't compromise on any of them.
  </p>
</motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            return (
              <motion.div
                key={stat.label}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl border border-white/8 bg-white/2"
              >
                <p className="font-display font-extrabold text-4xl text-[#c8f65d] mb-1">{stat.value}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl text-white mb-6"
            >
              Why we do what we do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 leading-relaxed mb-4"
            >
              Too many businesses settle for mediocre design because they think great design is out of reach. We're here to change that. Great design isn't a luxury — it's the thing that makes the difference between a business people ignore and one they love.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/50 leading-relaxed"
            >
              Since 2018, we've worked with seed-stage startups and Fortune 500s alike, bringing the same level of care and craft to every project.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Obsessive craft", "Clear communication", "On-time delivery", "Long-term thinking", "No bloat", "Real collaboration"].map((val, i) => (
              <motion.div
                key={val}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-xl border border-white/8 bg-white/2 flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#c8f65d] flex-shrink-0" />
                <span className="text-white/70 text-sm">{val}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl text-white mb-10"
          >
            The team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-6 rounded-2xl border border-white/8 bg-white/2 hover:bg-white/5 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-[#0a0a0a] mb-5"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <p className="font-display font-semibold text-white">{member.name}</p>
                <p className="text-xs mb-3" style={{ color: member.color }}>{member.role}</p>
                <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}