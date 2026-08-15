"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Play,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Video,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const services = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    description: "Modern, fast and SEO-friendly websites that represent your brand perfectly.",
    icon: MonitorSmartphone,
  },
  {
    number: "02",
    title: "APP DEVELOPMENT",
    description: "Custom mobile applications for Android & iOS that deliver seamless user experiences.",
    icon: Code2,
  },
  {
    number: "03",
    title: "VIDEO CREATION",
    description: "Engaging videos, reels, programs and brand films that tell your story.",
    icon: Video,
  },
  {
    number: "04",
    title: "AI & AUTOMATION",
    description: "AI solutions, chatbots and automation to streamline your business.",
    icon: Bot,
  },
];

const projects = [
  {
    title: "Sampada",
    category: "Heritage Discovery Platform",
    stack: "FLUTTER  /  DJANGO  /  POSTGIS",
    image: "/images/project-sampada.jpg",
    featured: true,
  },
  {
    title: "Himalaya Outdoors",
    category: "E-commerce Website",
    stack: "NEXT.JS  /  STRIPE  /  SANITY",
    image: "/images/project-himalaya.jpg",
  },
  {
    title: "Travelo",
    category: "Travel Mobile App",
    stack: "FLUTTER  /  FIREBASE  /  MAPBOX",
    image: "/images/project-travelo.jpg",
  },
  {
    title: "The Journey",
    category: "Brand Film",
    stack: "VIDEO PRODUCTION  /  EDITING  /  COLOR",
    image: "/images/project-journey.jpg",
    video: true,
  },
];

const process = [
  ["01", "DISCOVER", "We understand your goals, audience and business needs.", Search],
  ["02", "PLAN & STRATEGY", "We create the right strategy and roadmap for your project.", Sparkles],
  ["03", "DESIGN", "We design beautiful interfaces and engaging experiences.", Target],
  ["04", "DEVELOP", "We build clean, scalable and high performance solutions.", Code2],
  ["05", "TEST & LAUNCH", "We test everything before launching it to the world.", Play],
  ["06", "GROW & SUPPORT", "We stay with you to support and help you grow.", TrendingUp],
] as const;

const testimonials = [
  {
    quote: "Prasim transformed our idea into a beautiful platform. Professional, creative and always available.",
    name: "Yeti Home construction",
    role: "Constuction Company",
    image: "/images/client-1.png",
  },
  {
    quote: "The team understood what we wanted and turned a rough idea into something our customers actually love.",
    name: "Yesin Roka Magar",
    role: "Insurance Strategist",
    image: "/images/client-2.png",
  },
  {
    quote: "Fast communication, strong design and excellent execution from start to finish.",
    name: "Kshitij Timilshina",
    role: "Founder, CEO, Sewa subida gardening",
    image: "/images/client-3.jpg",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[.13em]">
      <span>{children}</span>
      <span className="h-[2px] w-8 bg-[#d8ff00]" />
    </div>
  );
}

export function DigixLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    if (!heroRef.current || !heroVisualRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const move = (event: MouseEvent) => {
          const x = (event.clientX / window.innerWidth - 0.5) * 2;
          const y = (event.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(heroVisualRef.current, {
            x: x * 10,
            y: y * 8,
            rotateY: x * 2,
            rotateX: -y * 2,
            duration: 1,
            ease: "power3.out",
          });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={heroRef} className="paper grain min-h-screen">
      {/* HEADER */}
      <header className="absolute left-0 right-0 top-0 z-50 px-5 py-5 md:px-8 md:py-7 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-left leading-none"
            aria-label="Prasim home"
          >
            <div className="font-display text-[29px] tracking-[-.02em]">
              Prasim<span className="ml-1 text-[#bfe800]">/</span>
            </div>
            <div className="mt-0.5 text-[7px] font-bold tracking-[.04em]">
              DIGITAL CREATIVE STUDIO
            </div>
          </button>

          <nav className="hidden items-center gap-9 text-[16px] font-bold md:flex">
            {["WORK", "SERVICES", "ABOUT", "PROCESS", "BLOG", "CONTACT"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item === "WORK" ? "work" : item === "SERVICES" ? "services" : item === "PROCESS" ? "process" : "contact")}
                className="relative py-2 transition-opacity hover:opacity-50"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("contact")}
              className="group flex items-center gap-2 border border-black/50 px-4 py-2.5 text-[16px] font-bold transition-all hover:bg-black hover:text-white"
            >
              LET&apos;S BUILD
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            className="border border-black/40 p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto mt-3 max-w-[1440px] border border-black/20 bg-[#f1eee5]/95 p-5 backdrop-blur-md md:hidden"
            >
              {["WORK", "SERVICES", "ABOUT", "PROCESS", "BLOG", "CONTACT"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item === "WORK" ? "work" : item === "SERVICES" ? "services" : item === "PROCESS" ? "process" : "contact")}
                  className="block w-full border-b border-black/10 py-3 text-left text-xs font-bold last:border-0"
                >
                  {item}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
  <section
  id="home"
  className="
    grid-paper
    relative
    h-[570px]
    overflow-hidden
    pt-20

    md:h-[585px]
    lg:h-[600px]
    xl:h-[610px]
  "
>
  {/* HERO ARTWORK */}
  <div
    ref={heroVisualRef}
    className="
      pointer-events-none
      absolute
      inset-0
      z-[1]
      overflow-hidden
    "
  >
    <motion.img
      src="/images/banner.png"
      alt="Digital creative studio"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-[38%]
        top-[25px]
        w-[1050px]
        max-w-none

        md:left-[39%]
        md:top-[20px]
        md:w-[1100px]

        lg:left-[40%]
        lg:top-[15px]
        lg:w-[1150px]

        xl:left-[40%]
        xl:top-[5px]
        xl:w-[1200px]
      "
    />
  </div>

  {/* CONTENT */}
  <div
    className="
      relative
      z-10
      mx-auto
      h-full
      w-full
      max-w-[1440px]
      px-5

      md:px-8
      lg:px-10
    "
  >
    <div
      className="
        relative
        w-full
        pt-2

        md:w-[49%]

        lg:w-[47%]

        xl:w-[46%]
      "
    >

      {/* EYEBROW */}
      <Reveal delay={0.05}>
        <div className="mb-2 text-[12px] font-semibold">
          Websites. Apps. Video. AI.
          <span className="ml-2 inline-block h-[2px] w-7 align-middle bg-[#d8ff00]" />
        </div>
      </Reveal>


      {/* HEADING */}
      <Reveal delay={0.12}>
        <h1
          className="
            font-display
            max-w-[520px]
            text-[68px]
            leading-[0.78]
            tracking-[-0.025em]

            sm:text-[74px]

            md:text-[78px]

            lg:text-[88px]

            xl:text-[96px]
          "
        >
          WE BUILD
          <br />
          DIGITAL
          <br />

          <span
            className="
              font-marker
              text-[0.58em]
              leading-none
              tracking-[-0.055em]
              text-[#b9d900]
            "
          >
            <span className="inline-block rotate-[-3deg]">
              EXPERIENCES
            </span>
          </span>
        </h1>
      </Reveal>


      {/* DESCRIPTION */}
      <Reveal delay={0.2}>
        <p
          className="
            mt-4
            max-w-[300px]
            text-[14px]
            leading-[1.45]
            text-black/70
            font- condensed bold san-serif
          "
        >
          We are a digital creative studio helping brands grow
          through design, technology and visual storytelling.
        </p>
      </Reveal>


      {/* BUTTONS */}
      <Reveal delay={0.28}>
        <div className="mt-5 flex items-center gap-5">

          <button
            onClick={() => scrollTo("contact")}
            className="
              group
              flex
              items-center
              gap-3
              bg-[url('/images/bg1.png')]
              bg-cover
              bg-center
              px-8
              py-[8px]
              text-[11px]
              font-bold
              tracking-wider
              text-white
              transition-transform
              hover:scale-[1.03]
            "
            style={{
              clipPath:
                "polygon(2% 8%,98% 2%,100% 90%,95% 98%,50% 95%,4% 100%,0% 12%)",
            }}
          >
            <span>START A PROJECT</span>

            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>


          <button
            onClick={() => scrollTo("work")}
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-bold
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-black/60
              "
            >
              <Play
                size={9}
                fill="currentColor"
              />
            </span>

            WATCH SHOWREEL
          </button>

        </div>
      </Reveal>


      {/* CLIENTS */}
      <Reveal delay={0.35}>
        <div className="mt-5 flex items-center gap-3">

          <div className="flex -space-x-2">
            {[
              "/images/client-1.png",
              "/images/client-2.png",
              "/images/client-3.jpg",
              "/images/client-4.png",
            ].map((src) => (
              <div
                key={src}
                className="
                  h-7
                  w-7
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#f1eee5]
                  bg-black/10
                "
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-[8px] leading-[1.2]">
            Trusted by 50+ clients
            <br />
            worldwide
          </div>

        </div>
      </Reveal>

    </div>
  </div>

  {/* BOTTOM LINE */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />
</section>

      {/* SERVICES */}
      <section id="services" className="rough-top relative bg-[#080909] py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr]">
            <Reveal>
              <SectionLabel>WHAT WE DO</SectionLabel>
              <h2 className="font-display max-w-[580px] text-[50px] leading-[.86] sm:text-[65px] md:text-[72px]">
                SOLUTIONS THAT
                <br />
                DRIVE REAL RESULTS<span className="text-[#d8ff00]">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15} className="md:pt-8">
              <div className="border-l border-white/25 pl-6 text-[16px] leading-[1.65] text-white/70">
                From concept to launch and beyond,
                <br className="hidden md:block" />
                we create digital products and content
                <br className="hidden md:block" />
                that help your business grow.
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid border-y border-white/20 md:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.number} delay={index * 0.08} className="h-full">
                  <article className="group relative h-full border-b border-white/20 p-6 md:border-b-0 md:border-r md:p-7 md:last:border-r-0">
                    <div className="mb-8 flex items-center justify-between">
                      <Icon size={31} strokeWidth={1.2} />
                      <span className="text-[13px] font-bold text-[#d8ff00]">{service.number}</span>
                    </div>
                    <h3 className="font-display text-[28px] leading-none">{service.title}</h3>
                    <p className="mt-4 min-h-[58px] max-w-[230px] text-[13px] leading-[1.5] text-white/65">
                      {service.description}
                    </p>
                    <button className="mt-6 flex items-center gap-2 text-[9px] font-bold transition-colors group-hover:text-[#d8ff00]">
                      EXPLORE <ArrowRight size={12} />
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="grid-paper py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
          <div className="flex items-end justify-between">
            <Reveal>
              <SectionLabel>FEATURED WORK</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <button className="mb-5 hidden items-center gap-2 text-[9px] font-bold md:flex">
                VIEW ALL WORK <ArrowRight size={12} className="text-[#93a800]" />
              </button>
            </Reveal>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="group relative aspect-[.91] overflow-hidden bg-black text-white"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/0" />
                  {project.video && (
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-black/20 backdrop-blur-sm">
                      <Play size={13} fill="white" />
                    </span>
                  )}
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-[30px] leading-none">{project.title}</h3>
                    <p className="mt-1 text-[13px]">{project.category}</p>
                    <p className="mt-3 text-[10px] font-bold tracking-[.08em] text-white/70">{project.stack}</p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="grid-paper border-t border-black/10 py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
          <div className="flex items-start justify-between">
            <Reveal>
              <SectionLabel>OUR PROCESS</SectionLabel>
              <h2 className="font-display text-[52px] leading-[.85] md:hidden">
                SIMPLE PROCESS.
                <br />
                <span className="lime-swipe">POWERFUL RESULTS.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="hidden md:block">
              <div className="font-marker rotate-[-8deg] text-[20px] leading-[.95]">
                Simple process.
                <br />
                <span className="lime-swipe">Powerful results.</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-0 md:grid-cols-6">
            {process.map(([number, title, description, Icon], index) => (
              <Reveal key={number} delay={index * 0.07}>
                <article className="relative border-b border-black/20 px-1 py-5 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
                  <div className="mb-7 text-[16px] font-bold">{number}</div>
                  <Icon size={28} strokeWidth={1.3} />
                  <h3 className="mt-5 text-[14px] font-bold">{title}</h3>
                  <p className="mt-3 max-w-[165px] text-[12px] leading-[1.5] text-black/60">{description}</p>
                  {index < process.length - 1 && (
                    <ChevronRight className="absolute bottom-5 right-[-8px] hidden md:block" size={16} strokeWidth={1} />
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + TESTIMONIAL */}
      <section className="rough-top bg-[#080909] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:grid-cols-[1fr_1.05fr] md:px-8 lg:px-10">
          <Reveal>
            <SectionLabel>SOME NUMBERS</SectionLabel>
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 md:grid-cols-2">
              {[
                ["50+", "PROJECTS", "COMPLETED"],
                ["30+", "HAPPY", "CLIENTS"],
                ["3+", "YEARS OF", "EXPERIENCE"],
                ["∞", "POSSIBILITIES", "TO CREATE"],
              ].map(([big, a, b]) => (
                <div key={big}>
                  <div className="font-display text-[48px] leading-none md:text-[55px]">{big}</div>
                  <div className="mt-2 text-[12px] leading-[1.35] text-white/65">{a}<br />{b}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <SectionLabel>WHAT CLIENTS SAY</SectionLabel>
            <div className="border-l border-white/30 pl-6 md:pl-9">
              <div className="font-display text-[65px] leading-[.5] text-[#d8ff00]">“</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="mt-4 max-w-[520px] text-[14px] leading-[1.5] md:text-[16px]">
                    {testimonials[testimonial].quote}
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <div className="h-9 w-9 overflow-hidden rounded-full">
                      <img src={testimonials[testimonial].image} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="text-[9px]">
                      <div className="font-bold">{testimonials[testimonial].name}</div>
                      <div className="mt-0.5 text-white/55">{testimonials[testimonial].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonial(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${i === testimonial ? "scale-150 bg-[#d8ff00]" : "bg-white/35"}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[url('/images/footerbg.png')] bg-cover bg-center py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 px-6 sm:px-8 md:grid-cols-12 lg:px-10">
          {/* Left Column: Headline (Spans 5 Columns) */}
          <Reveal className="flex flex-col justify-center md:col-span-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-black/80">
                READY TO START?
              </span>
              <span className="h-[2px] w-6 bg-[#c0d800]"></span>
            </div>

            <h2 className="font-display text-[52px] font-extrabold uppercase leading-[0.88] tracking-tight text-black sm:text-[68px] lg:text-[76px]">
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-[#b8d600]">AMAZING</span> TOGETHER.
            </h2>
          </Reveal>

          {/* Middle Column: Subtext & Signature (Spans 3 Columns) */}
          <Reveal delay={0.1} className="flex flex-col justify-center pt-2 md:col-span-3">
            <p className="text-[15px] font-semibold leading-[1.35] text-black/90 sm:text-[17px]">
              Have a project in mind?
              <br />
              Let&apos;s discuss your idea
              <br />
              and turn it into reality.
            </p>

            {/* Handwritten Signature */}
            <span className="inline-block rotate-[-8deg]">
            <div className="relative mt-6 inline-block w-fit">
              <span className="font-marker text-[38px] leading-none text-black">
                Digix Team
              </span>
              <div className="mt-[-2px] h-[3px] w-full rotate-[-1deg] rounded-full bg-[#a3bf00]" />
            </div>
            </span>
          </Reveal>

          {/* Right Column: CTA & Contact List (Spans 4 Columns) */}
          <Reveal delay={0.2} className="flex flex-col items-start justify-center md:col-span-4 md:pl-6">
            {/* Brush Effect Button */}
            <button
              onClick={() => (window.location.href = "mailto:hello@digix.studio")}
              className="group relative flex items-center gap-3 bg-[url('/images/bg1.png')] bg-cover bg-center px-10 py-2 text-[13px] font-bold tracking-wider text-white transition-transform hover:scale-105"
              style={{
                clipPath: "polygon(2% 8%, 98% 2%, 100% 90%, 95% 98%, 50% 95%, 4% 100%, 0% 12%)",
              }}
            >
              <span>START A PROJECT</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>

            <div className="mt-8">
              <div className="text-[11px] font-bold uppercase tracking-widest text-black/70">
                OR SAY HELLO
              </div>

              <div className="mt-3 space-y-2.5 text-[15px] font-semibold text-black">
                <a href="mailto:hello@digix.studio" className="flex items-center gap-3 text-black transition-colors hover:text-[#88a400]">
                  <Mail size={16} /> hello@digix.studio
                </a>
                <a href="https://wa.me/9779800000000" className="flex items-center gap-3 text-black transition-colors hover:text-[#88a400]">
                  <MessageCircle size={16} /> +977 9800000000
                </a>
                <a href="#" className="flex items-center gap-3 text-black transition-colors hover:text-[#88a400]">
                  <Instagram size={16} /> @digix.studio
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080909] py-10 text-white">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 md:grid-cols-[1.5fr_1fr_1fr_1fr_auto] md:px-8 lg:px-10">
          <div>
            <div className="font-display text-[30px] leading-none">
              Prasim<span className="text-[#d8ff00]">/</span>
            </div>
            <div className="mt-1 text-[7px] font-bold">DIGITAL CREATIVE STUDIO</div>
            <p className="mt-5 max-w-[220px] text-[10px] leading-[1.5] text-white/55">
              Building digital products, brands and experiences that make an impact.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[9px] font-bold">LINKS</div>
            <div className="space-y-2 text-[9px] text-white/55">
              <button onClick={() => scrollTo("work")} className="block hover:text-white">Work</button>
              <button onClick={() => scrollTo("services")} className="block hover:text-white">Services</button>
              <button onClick={() => scrollTo("process")} className="block hover:text-white">About</button>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[9px] font-bold">MORE</div>
            <div className="space-y-2 text-[9px] text-white/55">
              <button onClick={() => scrollTo("process")} className="block hover:text-white">Process</button>
              <a href="#" className="block hover:text-white">Blog</a>
              <button onClick={() => scrollTo("contact")} className="block hover:text-white">Contact</button>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[9px] font-bold">FOLLOW US</div>
            <div className="flex gap-4 text-white/70">
              <a href="www.linkedin.com/in/prabin-rokaya-dev" aria-label="Instagram"><Instagram size={15} /></a>
              <a href="#" aria-label="Dribbble"><Sparkles size={15} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={15} /></a>
            </div>
          </div>

          <div className="text-[9px] leading-[1.4] text-white/45 md:text-right">
            © 2026 Prasim Studio.
            <br />
            All rights reserved.
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[1440px] border-t border-white/10 px-5 pt-5 text-[8px] text-white/35 md:px-8 lg:px-10">
          Built with Next.js · TypeScript · Tailwind · GSAP · Framer Motion
        </div>
      </footer>
    </main>
  );
}