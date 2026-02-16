import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Smartphone, Palette, GraduationCap, Cloud, LineChart, Megaphone, Cpu } from "lucide-react";

const services = [
  { icon: Globe, title: "Web and App\nDevelopment", color: "from-violet-500 to-purple-600" },
  { icon: Brain, title: "AI Solutions", color: "from-orange-500 to-red-500" },
  { icon: Cpu, title: "Technology\nConsulting", color: "from-teal-400 to-emerald-500" },
  { icon: Megaphone, title: "Digital\nMarketing", color: "from-pink-500 to-rose-500" },
  { icon: Cloud, title: "Cloud", color: "from-sky-400 to-blue-500" },
  { icon: LineChart, title: "Business\nStrategy", color: "from-amber-400 to-yellow-500" },
  { icon: Palette, title: "UI/UX Design", color: "from-indigo-400 to-violet-500" },
  { icon: Smartphone, title: "App\nDevelopment", color: "from-green-400 to-emerald-500" },
  { icon: GraduationCap, title: "Internship\nPrograms", color: "from-cyan-400 to-teal-500" },
];

const techStack = [
  "React", "Next.js", "Tailwind", "Node.js", "MongoDB", "AWS", "HTML", "Java", "Python",
  "Docker", "PostgreSQL", "Firebase", "Flutter", "TypeScript",
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-16 md:py-20 gradient-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Our Services</h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-sm md:text-base">
            We deliver high-quality, reliable, and cost-effective IT services that drive long-term value.
            By embracing innovation and leveraging cutting-edge technologies, we offer world-class solutions
            tailored to our clients' evolving needs.
          </p>
        </motion.div>

        {/* Service cards - image-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer card-hover"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="absolute inset-0 bg-navy-deep/70 group-hover:bg-navy-deep/50 transition-colors" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-primary-foreground text-lg whitespace-pre-line leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-primary-foreground/10 group-hover:border-electric/30 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(220_65%_10%)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(220_65%_10%)] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 mx-4 px-5 py-2.5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-sm font-medium text-primary-foreground shrink-0"
                >
                  <div className="w-2 h-2 rounded-full gradient-electric" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
