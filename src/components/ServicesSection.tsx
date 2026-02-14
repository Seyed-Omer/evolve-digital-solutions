import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Smartphone, Palette, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable business websites and portals built with cutting-edge technologies for maximum performance and SEO.",
    features: ["Custom Portals", "E-Commerce", "CMS Solutions", "Progressive Web Apps"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Automation, chatbots, and smart systems that transform your business operations with AI-powered intelligence.",
    features: ["Chatbots", "Data Analytics", "Process Automation", "ML Models"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Android, iOS and cross-platform apps designed to deliver seamless mobile experiences at scale.",
    features: ["Native Apps", "Cross-Platform", "App Maintenance", "API Integration"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Modern user-focused interfaces that combine aesthetics with intuitive functionality and accessibility.",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    icon: GraduationCap,
    title: "Internship Programs",
    description: "Real industry training for students with hands-on experience on live projects and mentorship.",
    features: ["Live Projects", "Mentorship", "Certification", "Career Support"],
  },
];

const techStack = [
  "React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "AWS", "TypeScript", "Python",
  "Docker", "PostgreSQL", "Firebase", "Flutter", "Figma", "GraphQL",
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="bg-card rounded-xl p-7 border border-border card-hover group relative overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-electric/5 to-transparent" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl gradient-electric flex items-center justify-center mb-5 group-hover:glow-electric transition-all duration-300">
          <service.icon className="w-6 h-6 text-accent-foreground" />
        </div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
        
        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.map((f) => (
            <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
              {f}
            </span>
          ))}
        </div>

        <a href="#contact" className="inline-flex items-center gap-1.5 text-electric text-sm font-semibold group-hover:gap-2.5 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="section-padding bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="gradient-text font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We deliver high-quality, reliable, and cost-effective IT services that drive long-term value.
            By embracing innovation and leveraging cutting-edge technologies, we offer world-class solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 overflow-hidden"
        >
          <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-6">Technologies We Work With</p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 mx-4 px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-foreground shrink-0"
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
