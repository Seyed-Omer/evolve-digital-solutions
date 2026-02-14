import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-lg">E</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Evolve<span className="gradient-text">Tech</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed">
              Building innovative digital products and empowering businesses through technology.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Services", "About", "Careers", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/60 hover:text-electric transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <div className="space-y-2">
              {["Web Development", "AI Solutions", "App Development", "UI/UX Design", "Internships"].map((s) => (
                <p key={s} className="text-primary-foreground/60">{s}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Evolve Technologies. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
