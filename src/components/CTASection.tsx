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
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          className="relative rounded-2xl overflow-hidden gradient-navy-deep p-10 md:p-16 text-center border border-electric/20"
        >
          <div className="absolute inset-0 rounded-2xl ring-1 ring-electric/10" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-electric to-transparent"
            initial={{ width: 0 }}
            animate={inView ? { width: "50%" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-primary-foreground/70 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Ready to Elevate Your Digital Journey?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3"
          >
            Let's Work Together!
          </motion.h2>
          <motion.div
            className="h-1 gradient-electric mx-auto rounded-full mb-5"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-primary-foreground/55 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8"
          >
            Let's collaborate to build something extraordinary. Connect with us and discover how we can make an impact together.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:opacity-90 hover:shadow-xl hover:shadow-pink-500/20"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
