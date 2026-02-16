import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="gradient-navy-deep text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo + Contact button */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-base">E</span>
              </div>
              <span className="font-heading font-bold text-lg">
                Evolve<span className="gradient-text">Tech</span>
              </span>
            </div>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 mt-2"
            >
              Contact Us
            </a>
            <div className="flex gap-3 mt-6">
              {["facebook", "instagram", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors text-primary-foreground/60 text-xs capitalize"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/60 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>contact@evolvetech.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Tech Park, Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-4">Company</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Blog", "Careers", "Contact", "Privacy"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="flex items-center gap-1.5 text-primary-foreground/50 hover:text-electric transition-colors text-sm"
                >
                  <ArrowRight className="w-3 h-3" /> {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-4">Services</h4>
            <div className="space-y-2">
              {["Web Development", "AI Solutions", "Digital Marketing", "App Development", "UI/UX Design"].map((s) => (
                <a key={s} href="#services" className="flex items-center gap-1.5 text-primary-foreground/50 hover:text-electric transition-colors text-sm">
                  <ArrowRight className="w-3 h-3" /> {s}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-4">Join Our Newsletter</h4>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm outline-none focus:border-electric transition-colors"
              />
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} | Evolve Technologies | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
