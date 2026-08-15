export const nav = [
  ["WORK", "work"],
  ["SERVICES", "services"],
  ["ABOUT", "about"],
  ["PROCESS", "process"],
  ["BLOG", "blog"],
  ["CONTACT", "contact"],
] as const;

export const projects = [
  { title: "Sampada", subtitle: "Heritage Discovery Platform", tech: "FLUTTER  /  DJANGO  /  POSTGIS", image: "/images/project-sampada.jpg" },
  { title: "Himalaya Outdoors", subtitle: "E-commerce Website", tech: "NEXT.JS  /  STRIPE  /  SANITY", image: "/images/project-himalaya.jpg" },
  { title: "Travelo", subtitle: "Travel Mobile App", tech: "FLUTTER  /  FIREBASE  /  MAPBOX", image: "/images/project-travelo.jpg" },
  { title: "The Journey", subtitle: "Brand Film", tech: "VIDEO PRODUCTION  /  EDITING  /  COLOR", image: "/images/project-journey.jpg", video: true },
];

export const services = [
  ["01", "WEB DEVELOPMENT", "Modern, fast and SEO friendly websites that represent your brand perfectly."],
  ["02", "APP DEVELOPMENT", "Custom mobile applications for Android & iOS that deliver seamless user experiences."],
  ["03", "VIDEO CREATION", "Engaging videos, reels, programs and brand films that tell your story."],
  ["04", "AI & AUTOMATION", "AI solutions, chatbots and automation to streamline your business."],
] as const;

export const process = [
  ["01", "DISCOVER", "We understand your goals, audience and business needs."],
  ["02", "PLAN & STRATEGY", "We create the right strategy and roadmap for your project."],
  ["03", "DESIGN", "We design beautiful interfaces and engaging experiences."],
  ["04", "DEVELOP", "We build clean, scalable and high performance solutions."],
  ["05", "TEST & LAUNCH", "We test everything before launching it to the world."],
  ["06", "GROW & SUPPORT", "We stay with you to support and help you grow."],
] as const;

export const testimonials = [
  { quote: "Digix transformed our idea into a beautiful platform. Professional, creative and always available.", name: "Nabin Shrestha", role: "CEO, Himalayan Outdoors", image: "/images/client-1.jpg" },
  { quote: "They took our rough idea and turned it into something clear, useful and memorable.", name: "Aarav Thapa", role: "Founder, Travelo", image: "/images/client-2.jpg" },
  { quote: "Fast communication, strong design and excellent execution from start to finish.", name: "Sujan Karki", role: "Director, Creative House", image: "/images/client-3.jpg" },
];