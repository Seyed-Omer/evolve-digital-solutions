import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImage}
              alt="Evolve Technologies team"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="gradient-text font-semibold text-sm tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">About Evolve Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Evolve Technologies is a modern IT solutions company focused on building innovative digital
              products, automation tools, and enterprise-grade platforms. We combine technical excellence
              with creative vision to deliver results that matter.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg gradient-electric flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses and students through technology and innovation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">
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
