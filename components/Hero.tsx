"use client";

import { ArrowDown, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Reveal } from "./Reveal";
import { scrollToId } from "./ScrollLink";

export default function Hero() {
  const visual = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visual.current) return;

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 900px)", () => {
        const onMove = (e: MouseEvent) => {
          const nx = (e.clientX / window.innerWidth - .5) * 2;
          const ny = (e.clientY / window.innerHeight - .5) * 2;
          gsap.to(visual.current, {
            x: nx * 7,
            y: ny * 6,
            rotateY: nx * 1.5,
            rotateX: -ny * 1.5,
            duration: .9,
            ease: "power3.out",
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="paper technical-grid relative min-h-[790px] overflow-hidden pt-[105px] md:min-h-[790px]">
      <div className="mx-auto grid h-full max-w-[1280px] grid-cols-1 items-center px-5 md:grid-cols-[.78fr_1.22fr] md:px-8 lg:px-10">
        <div className="relative z-20 pb-28 md:pb-20">
          <Reveal delay={.04}>
            <div className="text-[9px] font-semibold">
              Websites. Apps. Video. AI.
              <span className="ml-2 inline-block h-[2px] w-7 bg-[#d8f000] align-middle" />
            </div>
          </Reveal>

          <Reveal delay={.1}>
            <h1 className="font-display mt-2 text-[76px] leading-[.80] tracking-[-.018em] sm:text-[88px] md:text-[78px] lg:text-[98px]">
              WE BUILD
              <br />
              DIGITAL
              <br />
              <span className="font-marker text-[.56em] tracking-[-.05em] text-[#b5ca00]">EXPERIENCES</span>
            </h1>
          </Reveal>

          <Reveal delay={.18}>
            <p className="mt-6 max-w-[300px] text-[11px] leading-[1.55] text-black/70">
              We are a digital creative studio helping
              <br className="hidden sm:block" />
              brands grow through design, technology
              <br className="hidden sm:block" />
              and visual storytelling.
            </p>
          </Reveal>

          <Reveal delay={.25}>
            <div className="mt-7 flex items-center gap-5">
              <button
                onClick={() => scrollToId("contact")}
                className="black-button group flex items-center gap-3 px-5 py-3 text-[9px] font-bold transition-transform hover:-translate-y-1"
              >
                START A PROJECT
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button onClick={() => scrollToId("work")} className="flex items-center gap-2 text-[9px] font-bold">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/65">
                  <Play size={9} fill="currentColor" />
                </span>
                WATCH SHOWREEL
              </button>
            </div>
          </Reveal>

          <Reveal delay={.33}>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#f1eee5] bg-[#bbb]">
                    <img src={`/images/client-${i}.jpg`} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-[8px] font-medium leading-[1.3]">
                Trusted by 50+ clients
                <br />
                worldwide
              </div>
            </div>
          </Reveal>
        </div>

        <div ref={visual} className="relative mx-auto mt-[-20px] h-[500px] w-full max-w-[710px] md:mt-[-30px] md:h-[570px]">
          <div className="hero-brush left-[13%] top-[9%] h-[58%] w-[67%] rotate-[-7deg] opacity-95" />
          <div className="hero-brush right-[3%] top-[18%] h-[47%] w-[19%] rotate-[5deg]" />

          <motion.div
            initial={{ opacity: 0, y: 35, rotate: -7 }}
            animate={{ opacity: 1, y: 0, rotate: -7 }}
            transition={{ duration: .95, delay: .18, ease: [.22, 1, .36, 1] }}
            className="absolute left-[8%] top-[8%] z-10 h-[56%] w-[70%] rotate-[-3deg] bg-black p-[4px] shadow-[10px_18px_30px_rgba(0,0,0,.18)]"
          >
            <div className="image-wrap h-full w-full">
              <img src="/images/hero-main.jpg" alt="Sampada project" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: .95, delay: .42, ease: [.22, 1, .36, 1] }}
            className="absolute bottom-[8%] right-[4%] z-20 h-[30%] w-[45%] border-[6px] border-[#f1eee5] shadow-[7px_13px_25px_rgba(0,0,0,.18)]"
          >
            <div className="image-wrap h-full w-full">
              <img src="/images/hero-secondary.jpg" alt="Creative video project" />
              <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-black/25 text-white backdrop-blur-[2px]">
                <Play size={15} fill="white" />
              </span>
            </div>
          </motion.div>

          <div className="absolute bottom-[7%] left-[14%] z-30 rotate-[-6deg] font-marker text-[15px] leading-[1] md:text-[18px]">
            Ideas
            <br />
            <span className="text-[#879700]">into impact →</span>
          </div>

          <div className="absolute right-[-1%] top-[31%] z-30 hidden -rotate-90 text-[7px] font-bold tracking-[.12em] md:block">
            SCROLL TO EXPLORE
            <ArrowDown className="ml-2 inline" size={12} />
          </div>
        </div>
      </div>
    </section>
  );
}