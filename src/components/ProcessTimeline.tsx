import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, PenTool, CheckSquare, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Gathering",
    description: "We collaborate closely with you to define project objectives, scope, and deliverables—ensuring all requirements are clearly understood before moving forward.",
    iconColor: "text-blue-400",
  },
  {
    icon: PenTool,
    title: "Designing",
    description: "We transform ideas into intuitive wireframes and interactive prototypes, with a strong focus on user experience and visual appeal to create a standout digital presence.",
    iconColor: "text-yellow-400",
  },
  {
    icon: CheckSquare,
    title: "Design Approval",
    description: "We present design concepts for client feedback and final approval, refining them to ensure complete alignment with your vision.",
    iconColor: "text-green-400",
  },
  {
    icon: Code2,
    title: "Development",
    description: "We turn designs into reality using robust, scalable code and the latest technologies—maintaining close communication throughout.",
    iconColor: "text-purple-400",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "We conduct thorough quality assurance and user testing to ensure flawless performance, robust security, and seamless compatibility across all devices.",
    iconColor: "text-red-400",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "We seamlessly launch your solution to production, followed by post-launch support and monitoring to ensure a smooth transition and optimal performance.",
    iconColor: "text-orange-400",
  },
];

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
            Our Project <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-primary-foreground/55 max-w-2xl mx-auto text-sm md:text-base mt-3">
            Our process is designed to ensure seamless execution and complete alignment with your vision.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center line with glow */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-electric/40 md:-translate-x-px" />
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-electric/20 blur-sm md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 pl-14 md:pl-0 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <step.icon className={`w-6 h-6 ${step.iconColor} shrink-0`} />
                      <h3 className="font-heading font-bold text-primary-foreground text-lg">{step.title}</h3>
                    </div>
                    <p className="text-primary-foreground/55 text-sm leading-relaxed max-w-sm inline-block">{step.description}</p>
                  </div>

                  {/* Timeline dot with glow */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 mt-1 z-10">
                    <div className="w-4 h-4 rounded-full gradient-electric border-2 border-navy-deep" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-electric/30 blur-sm" />
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
