import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, PenTool, CheckSquare, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Gathering",
    description: "We collaborate closely with you to define project objectives, scope, and deliverables—ensuring all requirements are clearly understood.",
  },
  {
    icon: PenTool,
    title: "Designing",
    description: "We transform ideas into intuitive wireframes and interactive prototypes with a strong focus on user experience and visual appeal.",
  },
  {
    icon: CheckSquare,
    title: "Design Approval",
    description: "We present design concepts for client feedback and final approval, refining them to ensure complete alignment with your vision.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "We turn designs into reality using robust, scalable code and the latest technologies—maintaining close communication throughout.",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "We conduct thorough quality assurance and user testing to ensure flawless performance, security, and compatibility across all devices.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "We seamlessly launch your solution to production, followed by post-launch support and monitoring for optimal performance.",
  },
];

const ProcessTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="gradient-text font-semibold text-sm tracking-widest uppercase">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">Our Project Timeline</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Our process is designed to ensure seamless execution and complete alignment with your vision.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`flex-1 pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card border border-border rounded-xl p-5 card-hover inline-block text-left max-w-md">
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center shrink-0">
                          <step.icon className="w-4.5 h-4.5 text-accent-foreground" />
                        </div>
                        <h3 className="font-heading font-bold text-foreground text-base">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full gradient-electric border-2 border-background mt-2 z-10" />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
