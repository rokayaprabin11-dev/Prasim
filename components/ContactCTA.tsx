"use client";

import { ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { scrollToId } from "./ScrollLink";

export default function ContactCTA() {
  return (
    <section id="contact" className="grid-paper relative overflow-hidden py-[62px] md:py-[74px]">
      <div className="absolute inset-0 bg-[url('/images/footerbg.png')] bg-cover bg-center" />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-[1.05fr_.95fr] md:px-8 lg:px-10">
        <Reveal>
          <SectionLabel>READY TO START?</SectionLabel>
          <h2 className="font-display text-[61px] leading-[.80] tracking-[-.01em] sm:text-[72px] md:text-[83px]">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className="font-marker text-[.55em] text-[#b5ca00]">AMAZING</span> TOGETHER.
          </h2>
        </Reveal>

        <Reveal delay={.12} className="flex flex-col justify-center md:pl-8">
          <p className="text-[11px] leading-[1.55]">
            Have a project in mind?
            <br />
            Let&apos;s discuss your idea
            <br />
            and turn it into reality.
          </p>

          <div className="mt-4 font-marker text-[22px]">
            Prasim Team
            <div className="mt-[-6px] h-[1.5px] w-[82px] rotate-[-4deg] bg-black" />
          </div>

          <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center gap-3 bg-[url('/images/bg1.png')] bg-cover bg-center px-10 py-2 text-[13px] font-bold tracking-wider text-white transition-transform hover:scale-105"
                >
                  START A PROJECT
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>

          <div className="mt-6 text-[8px] font-bold">OR SAY HELLO</div>
          <div className="mt-3 space-y-2 text-[9px]">
            <a className="flex items-center gap-2" href="mailto:hello@digix.studio"><Mail size={12} /> hello@digix.studio</a>
            <a className="flex items-center gap-2" href="https://wa.me/9779800000000"><MessageCircle size={12} /> +977 9800000000</a>
            <a className="flex items-center gap-2" href="#"><Instagram size={12} /> @digix.studio</a>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-[-24px] left-1/2 hidden h-[100px] w-[720px] -translate-x-1/2 rotate-[-4deg] border-t-[20px] border-[#9ba900]/65 md:block" />
    </section>
  );
}