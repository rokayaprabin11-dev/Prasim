"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Stats() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="dark torn-top py-[58px] text-white md:py-[68px]">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-[1fr_1.05fr] md:px-8 lg:px-10">
        <Reveal>
          <SectionLabel dark>SOME NUMBERS</SectionLabel>
          <div className="grid grid-cols-2 gap-y-9 sm:grid-cols-4 md:grid-cols-2">
            {[
              ["50+", "PROJECTS", "COMPLETED"],
              ["30+", "HAPPY", "CLIENTS"],
              ["3+", "YEARS OF", "EXPERIENCE"],
              ["∞", "POSSIBILITIES", "TO CREATE"],
            ].map(([n, a, b]) => (
              <div key={n}>
                <div className="font-display text-[47px] leading-none">{n}</div>
                <div className="mt-2 text-[8px] leading-[1.3] text-white/65">{a}<br />{b}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={.12}>
          <SectionLabel dark>WHAT CLIENTS SAY</SectionLabel>
          <div className="border-l border-white/25 pl-7">
            <div className="font-display text-[62px] leading-[.45] text-[#d8f000]">“</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: .4 }}
              >
                <p className="mt-4 max-w-[470px] text-[12px] leading-[1.55] md:text-[13px]">
                  {testimonials[index].quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    <img src={testimonials[index].image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-[8px]">
                    <div className="font-bold">— {testimonials[index].name}</div>
                    <div className="mt-1 text-white/50">{testimonials[index].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 w-1.5 rounded-full ${i === index ? "scale-125 bg-[#d8f000]" : "bg-white/35"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}