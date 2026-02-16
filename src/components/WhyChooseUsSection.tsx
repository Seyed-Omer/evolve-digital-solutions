import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Layers, Trophy, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "Rapid iterations and continuous improvements to keep you ahead of the curve.",
  },
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description: "From design to deployment, we own the complete technology stack.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "A legacy of delivering high-impact digital solutions across industries.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnership",
    description: "We work with you, not just for you. Open communication and trust.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="gradient-text font-semibold text-sm tracking-widest uppercase">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">Why Choose Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover text-center group"
            >
              <div className="w-14 h-14 rounded-xl gradient-electric flex items-center justify-center mx-auto mb-4 group-hover:glow-electric transition-all">
                <r.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-base mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
