import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-electric blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-electric-light blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="gradient-electric text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                🚀 Next-Gen IT Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Evolving Ideas Into{" "}
              <span className="gradient-text">Powerful Digital</span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed"
            >
              We build scalable web, AI, and software solutions that help
              businesses grow faster in the digital era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="gradient-electric text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:opacity-90 glow-electric animate-pulse-glow"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:bg-primary-foreground/10"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="animate-float">
              <img
                src={heroImage}
                alt="Futuristic digital workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-electric/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
