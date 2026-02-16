import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Evolve helped us turn our product vision into reality with professionalism and speed.",
    name: "Ravi Kumar",
    role: "CTO at FinNova",
  },
  {
    quote: "Their engineering depth and creative UI team were game changers for us.",
    name: "Priya Mehta",
    role: "CEO at MedSync",
  },
  {
    quote: "Impressive agility, smart problem-solvers. We found a real partner in Evolve.",
    name: "Arjun Desai",
    role: "VP Product at EduNow",
  },
  {
    quote: "Evolve helped us turn our product vision into reality with professionalism and speed.",
    name: "Ravi Kumar",
    role: "CTO at FinNova",
  },
  {
    quote: "Their engineering depth and creative UI team were game changers for us.",
    name: "Priya Mehta",
    role: "CEO at MedSync",
  },
  {
    quote: "Impressive agility, smart problem-solvers. We found a real partner in Evolve.",
    name: "Arjun Desai",
    role: "VP Product at EduNow",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-20 gradient-navy-deep relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/3 w-64 h-64 rounded-full bg-electric opacity-[0.04] blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(220_65%_10%)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(220_65%_10%)] to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="inline-flex flex-col mx-4 p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm min-w-[320px] max-w-[360px] whitespace-normal shrink-0"
              >
                <Quote className="w-5 h-5 text-electric mb-3 opacity-60" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div className="mt-auto">
                  <p className="text-primary-foreground font-heading font-bold text-sm">{t.name}</p>
                  <p className="text-primary-foreground/50 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
