import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Handshake } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI-Driven Intelligence",
    description: "Smarter decisions through data-driven, predictive solutions tailored to your business goals.",
  },
  {
    icon: Cpu,
    title: "Integrated Engineering",
    description: "Seamless development to deployment with full-stack, DevOps-driven precision.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Built on transparency, long-term vision, and your success at the core of every decision.",
  },
];

const ServiceHighlights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-14 md:py-16 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-48 h-48 rounded-full bg-electric opacity-[0.06] blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-electric font-semibold text-xs tracking-widest uppercase">Service Highlights</span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-electric flex items-center justify-center mx-auto mb-4">
                <h.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">{h.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
