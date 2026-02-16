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
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {count}{suffix}
    </motion.span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-14 md:py-16 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-48 h-48 rounded-full bg-electric blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-gold blur-[80px]"
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <motion.p
                className="text-primary-foreground/60 mt-1 text-sm"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.12 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
