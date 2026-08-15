"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: "-70px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: .72, delay, ease: [0.22, 1, .36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 text-[9px] font-bold tracking-[.12em] ${dark ? "text-white" : "text-black"}`}>
      <span>{children}</span>
      <span className="h-[2px] w-8 bg-[#d8f000]" />
    </div>
  );
}