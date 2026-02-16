import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

const featuredPost = {
  title: "The Future of AI in Enterprise: What Business Leaders Need to Know",
  excerpt: "Artificial Intelligence is no longer a futuristic concept — it's a present-day imperative. Discover how AI is reshaping enterprise operations, decision-making, and customer experiences across industries.",
  author: "Evolve Technologies",
  date: "Feb 12, 2026",
  readTime: "8 min read",
  category: "AI & Innovation",
};

const posts = [
  {
    title: "5 Cloud Migration Strategies for Modern Enterprises",
    excerpt: "Moving to the cloud isn't just about infrastructure — it's about business transformation. Learn the key strategies that ensure a smooth, cost-effective migration.",
    author: "Tech Team",
    date: "Feb 8, 2026",
    readTime: "6 min read",
    category: "Cloud",
  },
  {
    title: "UI/UX Design Trends Shaping 2026",
    excerpt: "From micro-interactions to AI-driven personalization, explore the design trends defining the next wave of digital experiences.",
    author: "Design Team",
    date: "Feb 3, 2026",
    readTime: "5 min read",
    category: "Design",
  },
  {
    title: "How Digital Marketing is Evolving with AI",
    excerpt: "AI-powered campaigns, predictive analytics, and hyper-personalization are changing how brands connect with audiences. Here's what you need to know.",
    author: "Marketing Team",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    category: "Digital Marketing",
  },
  {
    title: "DevOps Best Practices for Scalable Applications",
    excerpt: "Continuous integration, containerization, and infrastructure as code — essential DevOps practices for building resilient, scalable systems.",
    author: "Engineering Team",
    date: "Jan 22, 2026",
    readTime: "6 min read",
    category: "Engineering",
  },
  {
    title: "Why Internship Programs Drive Innovation",
    excerpt: "Investing in fresh talent isn't just about mentorship — it's about gaining new perspectives that challenge conventional thinking.",
    author: "HR Team",
    date: "Jan 15, 2026",
    readTime: "4 min read",
    category: "Careers",
  },
  {
    title: "Cybersecurity in the Age of Remote Work",
    excerpt: "With distributed teams becoming the norm, cybersecurity strategies must evolve. Learn how to protect your organization in a remote-first world.",
    author: "Security Team",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    category: "Security",
  },
];

const categories = ["All", "AI & Innovation", "Cloud", "Design", "Digital Marketing", "Engineering", "Careers", "Security"];

const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const Blog = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative gradient-hero pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-electric opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-gold opacity-[0.04] blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-16 bg-electric" />
            <span className="text-electric font-mono text-xs tracking-[0.3em] uppercase">Insights & Updates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5"
          >
            Our <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary-foreground/60 max-w-2xl text-sm md:text-base leading-relaxed"
          >
            Stay ahead with industry insights, technology trends, and expert perspectives from the Evolve Technologies team.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-background border-b border-border sticky top-[60px] z-30 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  cat === "All"
                    ? "gradient-electric text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden gradient-navy-deep p-8 md:p-12 border border-electric/20 group cursor-pointer"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-electric to-transparent" />
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className="px-3 py-1 rounded-full bg-electric/20 text-electric text-xs font-semibold">{featuredPost.category}</span>
            </div>
            <span className="text-electric font-mono text-xs tracking-widest uppercase mb-4 block">Featured Article</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 max-w-3xl group-hover:text-electric transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-primary-foreground/55 text-sm md:text-base leading-relaxed max-w-2xl mb-6">{featuredPost.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/40 text-xs">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {featuredPost.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-electric text-sm font-semibold mt-6 group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-muted/30" ref={gridRef}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                custom={i}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                variants={staggerChild}
                className="bg-card border border-border rounded-xl overflow-hidden card-hover group cursor-pointer"
              >
                {/* Color top bar */}
                <div className="h-1.5 gradient-electric" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-electric" />
                    <span className="text-xs font-semibold text-electric uppercase tracking-wider">{post.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-electric transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-muted-foreground text-xs mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-electric text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 gradient-navy-deep relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Stay in the Loop</h2>
            <p className="text-primary-foreground/55 max-w-xl mx-auto text-sm mb-8">
              Subscribe to our newsletter for the latest insights, articles, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm outline-none focus:border-electric transition-colors"
              />
              <button className="gradient-electric text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90 glow-electric whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
