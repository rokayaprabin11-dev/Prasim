export default function Footer() {
  return (
    <footer className="bg-[#050606] py-9 text-white">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 md:grid-cols-[1.45fr_1fr_1fr_1fr_auto] md:px-8 lg:px-10">
        <div>
          <div className="font-display text-[29px] leading-none">DIGIX<span className="text-[#d8f000]">/</span></div>
          <div className="mt-1 text-[6px] font-bold">DIGITAL CREATIVE STUDIO</div>
          <p className="mt-5 max-w-[210px] text-[9px] leading-[1.5] text-white/50">
            Building digital products, brands and experiences that make an impact.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[8px] font-bold">LINKS</h3>
          <div className="space-y-2 text-[8px] text-white/55">
            <a href="#work" className="block hover:text-white">Work</a>
            <a href="#services" className="block hover:text-white">Services</a>
            <a href="#about" className="block hover:text-white">About</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[8px] font-bold">MORE</h3>
          <div className="space-y-2 text-[8px] text-white/55">
            <a href="#process" className="block hover:text-white">Process</a>
            <a href="#blog" className="block hover:text-white">Blog</a>
            <a href="#contact" className="block hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[8px] font-bold">FOLLOW US</h3>
          <div className="flex gap-4 text-[8px] text-white/60">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Dribbble">◉</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="text-[8px] leading-[1.45] text-white/45 md:text-right">
          © 2026 Digix Studio.
          <br />
          All rights reserved.
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-[1280px] border-t border-white/10 px-5 pt-4 text-[7px] text-white/30 md:px-8 lg:px-10">
        Digital creative studio · Nepal
      </div>
    </footer>
  );
}