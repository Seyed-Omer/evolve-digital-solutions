import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const serviceLinks = [
  "Web and App Development",
  "AI Solutions",
  "Technology Consulting",
  "Digital Marketing",
  "UI/UX Design",
  "Cloud",
  "Business Strategy",
  "Internship Programs",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-scrolled border-b border-border shadow-lg"
          : "bg-navy-deep/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <button onClick={() => scrollTo("/")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center">
            <span className="font-heading font-bold text-accent-foreground text-base">E</span>
          </div>
          <span className={`font-heading font-bold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Evolve<span className="gradient-text">Tech</span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`font-medium text-sm transition-colors hover:text-electric ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              className={`font-medium text-sm transition-colors hover:text-electric flex items-center gap-1 ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl py-2 z-50"
                >
                  {serviceLinks.map((s) => (
                    <button
                      key={s}
                      onClick={() => scrollTo("#services")}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-electric transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { label: "Consulting", href: "/consulting" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "#careers" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`font-medium text-sm transition-colors hover:text-electric ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </button>
          ))}

          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="gradient-electric text-accent-foreground px-5 py-2 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
          >
            Get In Touch ↗
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <div className="flex flex-col p-4 gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "#services" },
                { label: "Consulting", href: "/consulting" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "#careers" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-foreground font-medium py-2 text-left hover:text-electric transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="gradient-electric text-accent-foreground px-5 py-2.5 rounded-full font-semibold text-sm mt-2"
              >
                Get In Touch ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
