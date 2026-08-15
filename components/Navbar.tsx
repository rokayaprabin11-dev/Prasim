"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { nav } from "@/lib/data";
import { scrollToId } from "./ScrollLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 pt-5 md:px-8 md:pt-6 lg:px-10">
      <div className="mx-auto flex max-w-[1280px] items-start justify-between">
        <button onClick={() => scrollToId("home")} className="text-left leading-none">
          <div className="font-display text-[28px] tracking-[-.025em]">
            DIGIX<span className="ml-1 text-[#b5cc00]">/</span>
          </div>
          <div className="mt-[1px] text-[6px] font-bold tracking-[.04em]">DIGITAL CREATIVE STUDIO</div>
        </button>

        <nav className="hidden items-center gap-[34px] pt-2 md:flex">
          {nav.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className="text-[8px] font-bold transition-opacity hover:opacity-45"
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToId("contact")}
          className="group hidden items-center gap-2 border border-black/45 px-4 py-2 text-[8px] font-bold md:flex"
        >
          LET&apos;S BUILD
          <ArrowUpRight size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          className="border border-black/40 p-2 md:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-[1280px] border border-black/15 bg-[#f1eee5]/96 p-5 backdrop-blur-lg md:hidden"
          >
            {nav.map(([label, id]) => (
              <button
                key={id}
                onClick={() => { setOpen(false); scrollToId(id); }}
                className="block w-full border-b border-black/10 py-3 text-left text-[10px] font-bold last:border-0"
              >
                {label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}