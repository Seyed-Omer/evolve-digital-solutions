import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="gradient-text font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 border border-border shadow-sm space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-electric focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-electric focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-electric focus:border-transparent outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-electric focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="gradient-electric text-accent-foreground px-8 py-3.5 rounded-lg font-semibold transition-all hover:opacity-90 glow-electric flex items-center gap-2 w-full justify-center"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg gradient-electric flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-1">Our Office</h3>
                <p className="text-muted-foreground">Evolve Technologies HQ, Tech Park, India</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg gradient-electric flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-1">Email Us</h3>
                <p className="text-muted-foreground">contact@evolvetech.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg gradient-electric flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-1">Call Us</h3>
                <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
