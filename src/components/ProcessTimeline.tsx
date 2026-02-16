import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, PenTool, CheckSquare, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Requirement Gathering", description: "We collaborate closely with you to define project objectives, scope, and deliverables.", iconColor: "text-blue-400" },
  { icon: PenTool, title: "Designing", description: "We transform ideas into intuitive wireframes and interactive prototypes.", iconColor: "text-yellow-400" },
  { icon: CheckSquare, title: "Design Approval", description: "We present design concepts for client feedback and final approval.", iconColor: "text-green-400" },
  { icon: Code2, title: "Development", description: "We turn designs into reality using robust, scalable code and latest technologies.", iconColor: "text-purple-400" },
  { icon: TestTube, title: "Testing", description: "We conduct thorough quality assurance and user testing for flawless performance.", iconColor: "text-red-400" },
  { icon: Rocket, title: "Deployment", description: "We seamlessly launch your solution to production with post-launch support.", iconColor: "text-orange-400" },
];

const stepVariants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -50 : 50,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 70 },
  },
};

const ProcessTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 gradient-navy-deep relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Our Project <motion.span className="gradient-text" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>Timeline</motion.span>
          </h2>
          <motion.p
            className="text-primary-foreground/55 max-w-2xl mx-auto text-sm md:text-base mt-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Our process is designed to ensure seamless execution and complete alignment with your vision.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center line with animated glow */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-electric/40 md:-translate-x-px" />
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-electric/30 blur-sm md:-translate-x-px"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  custom={isLeft}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={stepVariants}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 pl-14 md:pl-0 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring" }}>
                        <step.icon className={`w-6 h-6 ${step.iconColor} shrink-0`} />
                      </motion.div>
                      <h3 className="font-heading font-bold text-primary-foreground text-lg">{step.title}</h3>
                    </div>
                    <p className="text-primary-foreground/55 text-sm leading-relaxed max-w-sm inline-block">{step.description}</p>
                  </div>

                  {/* Timeline dot with pulse */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 mt-1 z-10">
                    <motion.div
                      className="w-4 h-4 rounded-full gradient-electric border-2 border-navy-deep"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: "spring" }}
                    />
                    <motion.div
                      className="absolute inset-0 w-4 h-4 rounded-full bg-electric/30 blur-sm"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>

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
