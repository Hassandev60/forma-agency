"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const allProjects = [
  {
    id: 1,
    title: "Lumio Finance",
    category: "Web App",
    description:
      "Personal finance dashboard with real-time analytics and smart insights.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Archaus Studio",
    category: "Brand",
    description:
      "Complete visual identity and digital experience for an architecture studio.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    tags: ["Figma", "Branding", "Motion"],
  },
  {
    id: 3,
    title: "Pulse Health",
    category: "UI/UX",
    description:
      "Patient management system for a multi-clinic group.",
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
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Figma", "Framer", "Next.js"],
  },
  {
    id: 5,
    title: "Dune Agency",
    category: "Brand",
    description:
      "Creative branding system for a digital talent agency.",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Brand", "Print", "Motion"],
  },
  {
    id: 6,
    title: "Cirro Logistics",
    category: "UI/UX",
    description:
      "Fleet management dashboard for 200+ vehicles.",
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
      : allProjects.filter(
          (project) => project.category === active
        );

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >

          <p className="
            text-[#c8f65d]
            text-xs
            uppercase
            tracking-[0.3em]
            mb-4
          ">
            Portfolio
          </p>


          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
            tracking-tight
            text-white
            mb-5
          ">
            Our Work
          </h1>


          <p className="
            max-w-lg
            text-white/60
            text-base
            md:text-lg
          ">
            Projects we've poured our craft into — from ambitious startups to
            established global brands.
          </p>

        </motion.div>



        {/* Filters */}

        <div className="flex flex-wrap gap-3 mb-12">

          {filters.map((filter)=>(
            <button
              key={filter}
              onClick={()=>setActive(filter)}
              className={`
                px-5
                py-2.5
                rounded-full
                text-sm
                transition
                ${
                  active === filter
                  ?
                  "bg-[#c8f65d] text-black"
                  :
                  "border border-white/20 text-white/60 hover:text-white"
                }
              `}
            >
              {filter}
            </button>
          ))}

        </div>



        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {filtered.map((project,index)=>(

            <motion.article
              key={project.id}
              initial={{
                opacity:0,
                y:40
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                delay:index*0.08
              }}
              className="group"
            >


              {/* Image */}

              <div
                className="
                relative
                aspect-[4/3]
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                mb-5
                "
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  "
                />


                <div
                  className="
                  absolute
                  inset-0
                  bg-black/50
                  opacity-0
                  group-hover:opacity-100
                  transition
                  flex
                  items-center
                  justify-center
                  "
                >

                  <span
                    className="
                    bg-white
                    text-black
                    px-5
                    py-2.5
                    rounded-full
                    text-sm
                    font-semibold
                    "
                  >
                    View →
                  </span>

                </div>

              </div>



              <p className="
              text-[#c8f65d]
              text-xs
              font-mono
              ">
                {project.category} · {project.year}
              </p>


              <h3
                className="
                text-xl
                font-semibold
                text-white
                mt-2
                mb-2
                group-hover:text-[#c8f65d]
                transition
                "
              >
                {project.title}
              </h3>


              <p className="
              text-white/50
              text-sm
              leading-relaxed
              mb-4
              ">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2">

                {project.tags.map(tag=>(
                  <span
                    key={tag}
                    className="
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    border
                    border-white/10
                    text-white/50
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>


            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}