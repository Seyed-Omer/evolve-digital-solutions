import { ArrowUp, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="gradient-navy-deep text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-base">E</span>
              </div>
              <span className="font-heading font-bold text-lg">
                Evolve<span className="gradient-text">Tech</span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-4">
              Building innovative digital products and empowering businesses through technology.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/60" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-3">Quick Links</h4>
            <div className="space-y-1.5">
              {["Home", "Services", "About", "Careers", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/50 hover:text-electric transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-3">Services</h4>
            <div className="space-y-1.5">
              {["Web Development", "AI Solutions", "App Development", "UI/UX Design", "Internships"].map((s) => (
                <p key={s} className="text-primary-foreground/50 text-sm">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-3">Contact</h4>
            <div className="space-y-1.5 text-primary-foreground/50 text-sm">
              <p>contact@evolvetech.com</p>
              <p>+91 XXXXX XXXXX</p>
              <p>Tech Park, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Evolve Technologies. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
