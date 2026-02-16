import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users, Award, Lightbulb, Heart, Shield, Globe, Cpu, Briefcase } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const whyChooseUs = [
  { icon: Shield, title: "Transparency", desc: "Open communication and honest practices at every step." },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions using the latest technologies." },
  { icon: Users, title: "Collaboration", desc: "We work with you, not just for you." },
  { icon: Award, title: "Excellence", desc: "Delivering high-quality results every single time." },
];

const partners = ["Google", "Microsoft", "AWS", "Salesforce", "HubSpot", "Adobe", "Oracle", "IBM"];

const directors = [
  { name: "Arun Patel", role: "CEO & Founder", desc: "15+ years in enterprise technology leadership." },
  { name: "Neha Sharma", role: "CTO", desc: "Expert in AI/ML and cloud architecture." },
  { name: "Vikram Singh", role: "COO", desc: "Operations strategist with global delivery experience." },
];

const drives = [
  { icon: Target, title: "Our Mission", desc: "To empower businesses and students through technology and innovation." },
  { icon: Eye, title: "Our Vision", desc: "To become a trusted global technology partner for digital transformation." },
  { icon: Heart, title: "Our Values", desc: "Integrity, innovation, collaboration, and relentless pursuit of excellence." },
];

const industries = [
  { icon: Briefcase, name: "Healthcare" },
  { icon: Globe, name: "Fintech" },
  { icon: Cpu, name: "EdTech" },
  { icon: Users, name: "Retail" },
  { icon: Shield, name: "Manufacturing" },
  { icon: Lightbulb, name: "Logistics" },
];

const About = () => {
  const whoRef = useRef(null);
  const whoInView = useInView(whoRef, { once: true, margin: "-50px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-50px" });
  const partnerRef = useRef(null);
  const partnerInView = useInView(partnerRef, { once: true, margin: "-50px" });
  const directorRef = useRef(null);
  const directorInView = useInView(directorRef, { once: true, margin: "-50px" });
  const driveRef = useRef(null);
  const driveInView = useInView(driveRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="About Evolve Technologies" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            At Evolve Technologies, we don't just build software — we engineer solutions that empower
            businesses to thrive in a digital-first world. With a commitment to innovation, transparency,
            and client success, our team combines cutting-edge technology with strategic thinking.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-electric/10 to-electric-light/5 relative" ref={whoRef}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-foreground mb-3">
                At <span className="text-electric font-semibold">Evolve Technologies</span>, we breathe{" "}
                <span className="text-gold font-bold italic">"Innovation with Purpose."</span>
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                We're not just a tech company. We're creators of change, turning bold ideas into powerful solutions.
                Collaboration, creativity, and impact are the DNA of everything we build.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4">
                {["Cross-Industry Expertise", "Data-Driven Thinking", "Collaborative Approach", "End-to-End Execution"].map((item, i) => (
                  <div key={item} className="p-4 rounded-xl bg-muted/50 border border-border">
                    <p className="font-heading font-bold text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background" ref={whyRef}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-electric flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-14 md:py-16 gradient-navy relative" ref={partnerRef}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={partnerInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10"
          >
            Our Trusted Partners
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={partnerInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center justify-center py-6 px-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5"
              >
                <span className="font-heading font-bold text-primary-foreground text-lg">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Directors */}
      <section className="py-16 md:py-20 bg-background" ref={directorRef}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={directorInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Our Directors
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {directors.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 25 }}
                animate={directorInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              >
                <div className="w-20 h-20 rounded-full gradient-electric flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-accent-foreground text-2xl">
                    {d.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg">{d.name}</h3>
                <p className="text-electric text-sm font-semibold mb-2">{d.role}</p>
                <p className="text-muted-foreground text-sm">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 md:py-20 gradient-navy-deep relative" ref={driveRef}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={driveInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12"
          >
            What Drives Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {drives.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 25 }}
                animate={driveInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-electric flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">{d.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Industries */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-primary-foreground text-center mb-8">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={driveInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex flex-col items-center gap-2 py-5 px-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5"
                >
                  <ind.icon className="w-6 h-6 text-electric" />
                  <span className="text-primary-foreground text-sm font-medium">{ind.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
