"use client";

import { ArrowRight, Bot, Cpu, Globe2, Smartphone } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { services } from "@/lib/data";

const icons = [Globe2, Smartphone, Cpu, Bot];

export default function Services() {
  return (
    <section id="services" className="dark torn-top relative py-[74px] text-white md:py-[82px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[1.12fr_.88fr]">
          <Reveal>
            <SectionLabel dark>WHAT WE DO</SectionLabel>
            <h2 className="font-display text-[48px] leading-[.84] sm:text-[58px] md:text-[62px]">
              SOLUTIONS THAT
              <br />
              DRIVE REAL RESULTS<span className="text-[#d8f000]">.</span>
            </h2>
          </Reveal>

          <Reveal delay={.12} className="md:pt-7">
            <div className="border-l border-white/25 pl-6 text-[10px] leading-[1.55] text-white/70 md:text-[11px]">
              From concept to launch and beyond,
              <br />
              we create digital products and content
              <br />
              that help your business grow.
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid border-y border-white/20 md:grid-cols-4">
          {services.map(([number, title, description], i) => {
            const Icon = icons[i];
            return (
              <Reveal key={number} delay={i * .07}>
                <article className="group min-h-[200px] border-b border-white/20 p-5 md:border-b-0 md:border-r md:p-6 md:last:border-r-0">
                  <div className="flex items-start justify-between">
                    <Icon size={31} strokeWidth={1.1} />
                    <span className="text-[13px] font-bold text-[#d8f000]">{number}</span>
                  </div>
                  <h3 className="font-display mt-7 text-[26px] leading-none">{title}</h3>
                  <p className="mt-3 max-w-[215px] text-[9px] leading-[1.55] text-white/65">
                    {description}
                  </p>
                  <button className="mt-5 flex items-center gap-2 text-[8px] font-bold transition-colors group-hover:text-[#d8f000]">
                    EXPLORE <ArrowRight size={11} />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}