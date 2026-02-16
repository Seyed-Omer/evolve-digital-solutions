import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Enterprise ERP Platform", category: "Web Development", description: "Full-stack business management solution with real-time analytics." },
  { title: "AI Customer Support Bot", category: "AI Solutions", description: "Intelligent chatbot handling 10K+ queries daily with 95% accuracy." },
  { title: "E-Commerce Mobile App", category: "App Development", description: "Cross-platform shopping app with seamless payment integration." },
  { title: "Healthcare Dashboard", category: "UI/UX Design", description: "Patient management interface for a leading hospital network." },
  { title: "Logistics Automation", category: "AI Solutions", description: "Route optimization and fleet management powered by ML algorithms." },
  { title: "EdTech Learning Portal", category: "Web Development", description: "Interactive online learning platform serving 50K+ students." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, type: "spring" as const, stiffness: 80 },
  }),
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-background relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            className="gradient-text font-semibold text-sm tracking-widest uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A selection of projects that showcase our expertise across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
            >
              <motion.div
                className="h-1.5 gradient-electric"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{ transformOrigin: "left" }}
              />
              
              <div className="p-6">
                <span className="text-xs font-semibold text-electric uppercase tracking-wider">{project.category}</span>
                <h3 className="font-heading font-bold text-foreground text-lg mt-2 mb-2 group-hover:text-electric transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center gap-1.5 text-electric text-sm font-semibold group-hover:gap-2.5 transition-all">
                  View Project <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
