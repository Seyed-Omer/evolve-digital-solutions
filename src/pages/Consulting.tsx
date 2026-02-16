import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain, Lightbulb, LineChart, Target, Cloud, Cpu,
  Briefcase, FileText, RefreshCw, DollarSign,
  Heart, Landmark, ShoppingCart, Factory, GraduationCap, Truck, Radio, Building2,
  ChevronDown, Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const consultingServices = [
  { icon: Brain, emoji: "🧠", title: "IT Consulting", desc: "Align your IT strategy with business goals for scalable success." },
  { icon: Lightbulb, emoji: "💡", title: "Digital Transformation", desc: "Modernize legacy systems and embrace digital-first operations." },
  { icon: LineChart, emoji: "📈", title: "Business Strategy", desc: "Data-backed strategic planning for competitive advantage." },
  { icon: Target, emoji: "🎯", title: "Product/Market Fit", desc: "Validate your product with user research and market insight." },
  { icon: Cloud, emoji: "☁️", title: "Cloud Strategy", desc: "Drive efficiency and scale with the right cloud roadmap." },
  { icon: Cpu, emoji: "🤖", title: "Data & AI Consulting", desc: "Leverage data and AI to unlock automation and insights." },
];

const staffingServices = [
  { icon: Briefcase, emoji: "👔", title: "Permanent Employee Staffing", desc: "Reliable hiring solutions to build your long-term workforce." },
  { icon: FileText, emoji: "📑", title: "Contract Employee Staffing", desc: "Flexible staffing for short-term or project-based needs." },
  { icon: RefreshCw, emoji: "🔄", title: "Contract-to-Hire Employee", desc: "Test and evaluate employees before making permanent hires." },
  { icon: DollarSign, emoji: "💰", title: "Payroll", desc: "Streamlined payroll management to ensure timely, accurate payments." },
];

const openRoles = [
  { title: "DESKTOP SUPPORT", location: "As per client requirement", type: "Full-time", exp: "0-2 years", desc: "Hiring: Desk Support (Freshers & Experienced). Join a dynamic team and kick-start or elevate your IT career!" },
  { title: "Web Developer", location: "Tecci Park, Sholinganallur", type: "Full-time", exp: "1-2 Yrs", desc: "Required tech Knowledge – Front end: Bootstrap, Backend: Laravel, DB: MySQL. ReactJS and VueJS will be an added advantage." },
  { title: "Python Developer", location: "Chennai", type: "Part-time", exp: "8-10 years", desc: "We are looking for an experienced Python Developer to train our students on a part-time basis." },
  { title: "DevOps Engineering", location: "Bangalore (Whitefield)", type: "Full-time", exp: "7-9 years", desc: "Documentation Tools: Confluence, SharePoint, Markdown. CI/CD Pipeline Development with Jenkins." },
  { title: "Electrical Field Work Technician", location: "Visakhapatnam", type: "Contract", exp: "Fresher / Entry-Level", desc: "Urgently hiring 50 candidates for Electrical Field Work positions. No prior experience required." },
];

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: Landmark, name: "Fintech" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "EdTech" },
  { icon: Truck, name: "Logistics" },
  { icon: Radio, name: "Telecom" },
  { icon: Building2, name: "Government" },
];

const faqs = [
  { q: "How do you customize consulting strategies?", a: "We begin with a deep discovery phase, align to your goals, and adapt methodologies that suit your industry and scale." },
  { q: "Do you offer on-site and remote consulting?", a: "Yes, our team operates globally in both models based on project needs." },
  { q: "What industries do you specialize in?", a: "We have deep expertise in finance, healthcare, manufacturing, education, and tech startups." },
  { q: "How quickly can we start?", a: "We can initiate discovery within a week after project confirmation." },
];

const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const Consulting = () => {
  const servRef = useRef(null);
  const servInView = useInView(servRef, { once: true, margin: "-60px" });
  const staffRef = useRef(null);
  const staffInView = useInView(staffRef, { once: true, margin: "-60px" });
  const rolesRef = useRef(null);
  const rolesInView = useInView(rolesRef, { once: true, margin: "-60px" });
  const indRef = useRef(null);
  const indInView = useInView(indRef, { once: true, margin: "-60px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });
  const applyRef = useRef(null);
  const applyInView = useInView(applyRef, { once: true, margin: "-60px" });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "We'll review your profile and get back to you." });
    setForm({ name: "", email: "", phone: "", role: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-electric opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold opacity-[0.05] blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="text-electric font-mono text-xs tracking-[0.3em] uppercase">Welcome!</span>
            <span className="text-primary-foreground/50 text-sm">Let's Talk Strategy</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5"
          >
            Strategic Business{" "}
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Consulting
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-primary-foreground/60 max-w-2xl text-sm md:text-base leading-relaxed mb-8"
          >
            Transform challenges into growth opportunities with data-driven strategies and hands-on expert consulting.
          </motion.p>
          <motion.a
            href="#apply"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="inline-block gradient-electric text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:opacity-90 glow-electric animate-pulse-glow"
          >
            Get a Free Consultation
          </motion.a>
        </div>
      </section>

      {/* Who We Are - Consulting */}
      <section className="py-16 md:py-20 bg-background relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-8">
              At Evolve Technologies, we are more than consultants — we are your strategic partners in digital evolution.
              Our global team combines deep industry experience with a passion for innovation, helping you navigate complexity with confidence and clarity.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Cross-Industry Expertise", desc: "Our specialists bring insights from finance, healthcare, retail, logistics, and tech." },
                { title: "Data-Driven Thinking", desc: "Every recommendation is backed by research, insights, and measurable outcomes." },
                { title: "Collaborative Approach", desc: "Your team becomes our team — aligned, responsive, and committed." },
                { title: "End-to-End Execution", desc: "From strategy to implementation, we support the full lifecycle of transformation." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-5 card-hover"
                >
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 md:py-20 gradient-navy-deep relative overflow-hidden" ref={servRef}>
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-electric font-semibold text-xs tracking-widest uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-3">Services We Offer</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {consultingServices.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                animate={servInView ? "visible" : "hidden"}
                variants={staggerChild}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 card-hover group"
              >
                <span className="text-3xl mb-3 block">{s.emoji}</span>
                <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-16 md:py-20 bg-background relative" ref={staffRef}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={staffInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="gradient-text font-semibold text-xs tracking-widest uppercase">Talent Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Staffing Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {staffingServices.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                animate={staffInView ? "visible" : "hidden"}
                variants={staggerChild}
                className="bg-card border border-border rounded-xl p-6 card-hover text-center"
              >
                <span className="text-3xl mb-3 block">{s.emoji}</span>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 md:py-20 gradient-navy relative overflow-hidden" ref={rolesRef}>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Open Roles</h2>
          </motion.div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                custom={i}
                initial="hidden"
                animate={rolesInView ? "visible" : "hidden"}
                variants={staggerChild}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-heading font-bold text-primary-foreground text-lg">{role.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-electric/20 text-electric font-medium">{role.type}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-gold/20 text-gold font-medium">{role.exp}</span>
                  </div>
                </div>
                <p className="text-primary-foreground/40 text-xs mb-2">{role.location}</p>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-background relative" ref={indRef}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={indInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Industries We Serve</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={indInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center gap-3 py-6 px-4 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl gradient-electric flex items-center justify-center">
                  <ind.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="font-heading font-bold text-foreground text-sm">{ind.name}</span>
                <p className="text-muted-foreground text-xs text-center">Tailored consulting and compliance-ready strategies for {ind.name.toLowerCase()} leaders.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-16 md:py-20 gradient-navy-deep relative overflow-hidden" ref={applyRef}>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={applyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Apply Now</h2>
            <p className="text-primary-foreground/50 text-sm mt-2">Send your resume to contact@evolvetech.com</p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={applyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleApply}
            className="max-w-2xl mx-auto bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" required placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm outline-none focus:border-electric transition-colors" />
              <input type="email" required placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm outline-none focus:border-electric transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm outline-none focus:border-electric transition-colors" />
              <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm outline-none focus:border-electric transition-colors">
                <option value="">Select a Role</option>
                {openRoles.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
              </select>
            </div>
            <textarea rows={4} placeholder="Write a short message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm outline-none focus:border-electric transition-colors resize-none" />
            <button type="submit" className="gradient-electric text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-90 glow-electric flex items-center gap-2 w-full justify-center text-sm">
              <Send className="w-4 h-4" /> Submit Application
            </button>
          </motion.form>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-background" ref={faqRef}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">FAQs</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={faqInView ? "visible" : "hidden"}
                variants={staggerChild}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="font-heading font-bold text-foreground text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
