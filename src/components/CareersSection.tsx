import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Code, Award } from "lucide-react";

const perks = [
  { icon: Code, title: "Live Projects", desc: "Work on real client projects" },
  { icon: Users, title: "Mentorship", desc: "Learn from senior developers" },
  { icon: Award, title: "Certification", desc: "Get industry-recognized certificates" },
  { icon: Rocket, title: "Career Growth", desc: "Fast-track your tech career" },
];

const CareersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="gradient-text font-semibold text-sm tracking-widest uppercase">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Careers & Internships</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Join Evolve Technologies to gain real industry experience, work on live projects,
              and grow with mentorship from experienced developers. We're building the next generation
              of tech talent.
            </p>
            <a
              href="#contact"
              className="inline-block gradient-electric text-accent-foreground px-8 py-3.5 rounded-lg font-semibold transition-all hover:opacity-90 glow-electric"
            >
              Apply Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 card-hover text-center"
              >
                <perk.icon className="w-8 h-8 text-electric mx-auto mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-1">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
