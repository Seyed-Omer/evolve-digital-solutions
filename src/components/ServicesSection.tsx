import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Smartphone, Palette, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable business websites and portals built with cutting-edge technologies for maximum performance.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Automation, chatbots, and smart systems that transform your business operations with AI power.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Android, iOS and cross-platform apps designed to deliver seamless mobile experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Modern user-focused interfaces that combine aesthetics with intuitive functionality.",
  },
  {
    icon: GraduationCap,
    title: "Internship Programs",
    description: "Real industry training for students with hands-on experience on live projects.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-8 border border-border card-hover group"
    >
      <div className="w-14 h-14 rounded-xl gradient-electric flex items-center justify-center mb-6 group-hover:glow-electric transition-all">
        <service.icon className="w-7 h-7 text-accent-foreground" />
      </div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="gradient-text font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
