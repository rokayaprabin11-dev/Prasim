"use client";

import { ArrowRight, Code2, Compass, Eye, MousePointer2, PenTool, Play, TrendingUp } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { process } from "@/lib/data";

const icons = [MousePointer2, PenTool, Compass, Code2, Play, TrendingUp];

export default function Process() {
  return (
    <section id="process" className="grid-paper border-t border-black/10 py-[58px] md:py-[70px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex items-start justify-between">
          <Reveal><SectionLabel>OUR PROCESS</SectionLabel></Reveal>
          <Reveal delay={.1} className="hidden md:block">
            <div className="rotate-[-4deg] font-marker text-[18px] leading-[.95]">
              Simple process.
              <br />
              <span className="lime-brush">Powerful results.</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-9 grid md:grid-cols-6">
          {process.map(([number, title, description], i) => {
            const Icon = icons[i];
            return (
              <Reveal key={number} delay={i * .06}>
                <article className="relative min-h-[150px] border-b border-black/20 px-1 py-5 md:border-b-0 md:border-r md:px-4 md:first:pl-0 md:last:border-r-0">
                  <div className="text-[9px] font-bold">{number}</div>
                  <Icon className="mt-5" size={25} strokeWidth={1.15} />
                  <h3 className="mt-5 text-[8px] font-bold">{title}</h3>
                  <p className="mt-2 max-w-[140px] text-[8px] leading-[1.45] text-black/60">{description}</p>
                  {i < 5 && (
                    <ArrowRight className="absolute bottom-7 right-[-8px] hidden md:block" size={13} strokeWidth={1} />
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}