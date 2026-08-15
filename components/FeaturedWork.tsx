"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { projects } from "@/lib/data";

export default function FeaturedWork() {
  return (
    <section id="work" className="grid-paper py-[58px] md:py-[67px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex items-end justify-between">
          <Reveal><SectionLabel>FEATURED WORK</SectionLabel></Reveal>
          <Reveal delay={.1}>
            <button className="mb-5 hidden items-center gap-2 text-[8px] font-bold md:flex">
              VIEW ALL WORK <ArrowRight size={11} className="text-[#a4b600]" />
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * .07}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: .25 }}
                className="group relative aspect-[.93] overflow-hidden bg-black text-white"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {project.video && (
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-black/20">
                    <Play size={12} fill="white" />
                  </span>
                )}

                <div className="absolute bottom-5 left-5 right-4">
                  <h3 className="font-display text-[28px] leading-none">{project.title}</h3>
                  <p className="mt-1 text-[9px]">{project.subtitle}</p>
                  <p className="mt-3 text-[6px] font-bold tracking-[.07em] text-white/75">{project.tech}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}