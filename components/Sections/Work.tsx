"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const allProjects = [
  {
    id: 1,
    title: "Lumio Finance",
    category: "Web App",
    description:
      "Personal finance dashboard with real-time analytics and smart insights.",
    color: "#c8f65d",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Archaus Studio",
    category: "Brand",
    description:
      "Complete visual identity and digital experience for an architecture studio.",
    color: "#a78bfa",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200",
    tags: ["Figma", "Branding", "Motion"],
  },
{
  id: 3,
  title: "Pulse Health",
  category: "UI/UX",
  description: "Patient management system for a multi-clinic group.",
  color: "#38bdf8",
  year: "2023",
image:
"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  tags: ["React", "Node.js", "MongoDB"],
},
  {
    id: 4,
    title: "Nova SaaS",
    category: "Web App",
    description:
      "Modern SaaS dashboard built for growing businesses.",
    color: "#fb923c",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    tags: ["Figma", "Framer", "Next.js"],
  },
  {
    id: 5,
    title: "Dune Agency",
    category: "Brand",
    description:
      "Creative branding system for a digital talent agency.",
    color: "#f43f5e",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200",
    tags: ["Brand", "Print", "Motion"],
  },
{
  id: 6,
  title: "Cirro Logistics",
  category: "UI/UX",
  description: "Fleet management dashboard for 200+ vehicles.",
  color: "#22d3ee",
  year: "2022",
 image:
"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  tags: ["React", "Maps API", "TypeScript"],
},
];

const filters = ["All", "Web App", "Brand", "UI/UX"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#c8f65d] text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Portfolio
          </p>

          <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Our Work
          </h1>

          <p className="max-w-lg text-base md:text-lg leading-7 text-white/60">
            Projects we've poured our craft into — from ambitious startups to
            established global brands.
          </p>
        </motion.div>


        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all
                ${
                  active === filter
                    ? "bg-[#c8f65d] text-black"
                    : "border border-white/15 text-white/60 hover:text-white"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </motion.div>


        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                className="group"
              >

                {/* Image Card */}
                <div
                  className="
                    relative
                    aspect-[4/3]
                    rounded-2xl
                    overflow-hidden
                    mb-5
                    border
                    border-white/10
                  "
                >

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />


                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/50
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <button
                      className="
                        px-5
                        py-2.5
                        bg-white
                        text-black
                        rounded-full
                        text-sm
                        font-semibold
                      "
                    >
                      View →
                    </button>
                  </div>

                </div>


                <span className="text-[#c8f65d] text-xs font-mono">
                  {project.category} · {project.year}
                </span>


                <h3
                  className="
                    font-sans
                    font-semibold
                    text-xl
                    text-white
                    mt-2
                    mb-2
                    group-hover:text-[#c8f65d]
                    transition-colors
                  "
                >
                  {project.title}
                </h3>


                <p className="text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>


                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-white/5
                        text-white/50
                        border
                        border-white/10
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}