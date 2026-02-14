import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const highlights = [
  "Enterprise-grade platform development",
  "AI-powered automation solutions",
  "Dedicated project management",
  "Agile development methodology",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="section-padding bg-muted/40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric opacity-[0.03] blur-[150px]" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Evolve Technologies team"
              className="rounded-2xl shadow-xl w-full"
            />
            {/* Overlay stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:right-6 bg-card rounded-xl p-5 shadow-xl border border-border"
            >
              <div className="text-3xl font-heading font-bold gradient-text">5+</div>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="gradient-text font-semibold text-sm tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">About Evolve Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Evolve Technologies is a modern IT solutions company focused on building innovative digital
              products, automation tools, and enterprise-grade platforms. We combine technical excellence
              with creative vision to deliver results that matter.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-electric shrink-0" />
                  <span className="text-foreground text-sm">{h}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-base mb-0.5">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To empower businesses and students through technology and innovation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-base mb-0.5">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To become a trusted global technology partner for digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
