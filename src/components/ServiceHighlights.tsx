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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, type: "spring" as const, stiffness: 80 },
  }),
};

const ServiceHighlights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-14 md:py-16 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-48 h-48 rounded-full bg-electric opacity-[0.06] blur-[100px]"
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.span
            className="text-electric font-semibold text-xs tracking-widest uppercase"
            initial={{ letterSpacing: "0.1em" }}
            animate={inView ? { letterSpacing: "0.25em" } : {}}
            transition={{ duration: 0.8 }}
          >
            Service Highlights
          </motion.span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <motion.div
                className="w-12 h-12 rounded-xl gradient-electric flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h.icon className="w-6 h-6 text-accent-foreground" />
              </motion.div>
              <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2 group-hover:text-electric transition-colors">{h.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
