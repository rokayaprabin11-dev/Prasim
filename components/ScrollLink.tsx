"use client";

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ScrollLink({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <button className={className} onClick={() => scrollToId(id)}>
      {children}
    </button>
  );
}