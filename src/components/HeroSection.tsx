import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const heroStats = [
  { label: "Workspace.", subtitle: "Automatic helpful\nfor Freelancer" },
  { label: "Coding becomes easier", subtitle: "Create development much\nfaster and easier" },
  { value: "500+", label: "Talent with Us Since 5+ Years" },
];

const Counter = ({ target }: { target: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(target);
  const suffix = target.replace(/\d/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(num / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(interval); }
      else setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [inView, num]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: 0.3 + i * 0.03, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const headlineWords = "Evolving Ideas Into".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex flex-col gradient-hero overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-electric blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-electric-light blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric opacity-[0.03] blur-[200px]"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 pt-28 pb-8 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Text - multi-stage entrance */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.div
                className="h-px bg-electric"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.span
                className="text-electric font-mono text-sm tracking-[0.3em] uppercase"
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                REDEFINING
              </motion.span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.15] mb-5">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}{" "}
              <motion.span
                className="gradient-text inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              >
                Powerful Digital
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Solutions
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-primary-foreground/65 mb-6 max-w-xl leading-relaxed"
            >
              We build scalable web, AI, and software solutions that help
              businesses grow faster in the digital era. Transform your vision into reality with us today!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="text-electric font-semibold text-sm tracking-wide mb-8"
            >
              {["Experience", "Expertise", "Excellence"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.15 }}
                  className="inline-block"
                >
                  {word}{i < 2 ? <span className="mx-2 text-primary-foreground/30">|</span> : ""}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="gradient-electric text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:opacity-90 glow-electric animate-pulse-glow"
              >
                Get Started
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:bg-primary-foreground/10"
              >
                Our Services
              </motion.a>
            </motion.div>
          </div>

          {/* Image with subtle float + parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroImage}
                alt="Futuristic digital workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
              <motion.div
                className="absolute inset-0 rounded-2xl ring-1 ring-electric/20"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border"
            >
              <div className="text-2xl font-heading font-bold gradient-text">120+</div>
              <p className="text-muted-foreground text-xs">Projects Delivered</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 border-t border-primary-foreground/10 bg-primary/20 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
            {heroStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                className="py-6 md:py-8 px-6 text-center md:text-left"
              >
                {stat.subtitle && (
                  <p className="text-primary-foreground/50 text-xs leading-snug mb-1 whitespace-pre-line">
                    {stat.subtitle}
                  </p>
                )}
                {stat.value ? (
                  <div>
                    <span className="text-3xl font-heading font-bold text-electric">
                      <Counter target={stat.value} />
                    </span>
                    <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
                  </div>
                ) : (
                  <p className="text-xl font-heading font-bold text-electric">{stat.label}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
