import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 60, suffix: "+", label: "Clients Served" },
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-14 md:py-16 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full bg-electric opacity-[0.08] blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-gold opacity-[0.06] blur-[80px]" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/60 mt-1 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
