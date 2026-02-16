import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/40 relative">
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden gradient-navy-deep p-10 md:p-16 text-center border border-electric/20"
        >
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-electric/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-electric to-transparent" />

          <p className="text-primary-foreground/70 font-semibold text-sm tracking-widest uppercase mb-3">Start A Project</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Let's Work Together!
          </h2>
          <div className="w-16 h-1 gradient-electric mx-auto rounded-full mb-5" />
          <p className="text-primary-foreground/55 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8">
            If you're ready to bring your exciting new project to life, start by selecting a package and
            tailoring it to your needs. We'll partner with you every step of the way to achieve your goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:opacity-90 hover:shadow-xl hover:shadow-pink-500/20"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
