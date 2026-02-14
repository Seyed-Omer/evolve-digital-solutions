import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Send } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 gradient-navy-deep relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-electric opacity-[0.06] blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-gold opacity-[0.05] blur-[100px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-electric text-sm font-semibold tracking-widest uppercase mb-2">Start A Project</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Let's Work Together!
            </h2>
            <p className="text-primary-foreground/60 max-w-xl text-sm md:text-base leading-relaxed">
              If you're ready to bring your exciting new project to life, start by reaching out.
              We'll partner with you every step of the way to achieve your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="gradient-electric text-accent-foreground px-8 py-3.5 rounded-lg font-semibold transition-all hover:opacity-90 glow-electric flex items-center gap-2 justify-center"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
