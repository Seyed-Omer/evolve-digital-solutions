import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Code, Award, Briefcase, Clock } from "lucide-react";

const perks = [
  { icon: Code, title: "Live Projects", desc: "Work on real client projects with production codebases" },
  { icon: Users, title: "Mentorship", desc: "Learn from senior developers and industry experts" },
  { icon: Award, title: "Certification", desc: "Get industry-recognized certificates upon completion" },
  { icon: Rocket, title: "Career Growth", desc: "Fast-track your tech career with real experience" },
  { icon: Briefcase, title: "Job Ready", desc: "Build a professional portfolio for hiring managers" },
  { icon: Clock, title: "Flexible Hours", desc: "Balance learning with your academic schedule" },
];

const CareersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="careers" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text font-semibold text-sm tracking-widest uppercase">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Careers & Internships</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              Join Evolve Technologies to gain real industry experience, work on live projects,
              and grow with mentorship from experienced developers. We're building the next generation
              of tech talent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Our internship program is designed for ambitious students and early-career professionals
              who want to accelerate their growth in the tech industry. Apply today and start your journey.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-block gradient-electric text-accent-foreground px-7 py-3 rounded-lg font-semibold transition-all hover:opacity-90 glow-electric text-sm"
              >
                Apply Now
              </a>
              <a
                href="#contact"
                className="inline-block border border-border text-foreground px-7 py-3 rounded-lg font-semibold transition-all hover:bg-muted text-sm"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="bg-card border border-border rounded-xl p-5 card-hover"
              >
                <perk.icon className="w-7 h-7 text-electric mb-2.5" />
                <h3 className="font-heading font-bold text-foreground text-sm mb-1">{perk.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
