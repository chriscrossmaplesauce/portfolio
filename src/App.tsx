import { motion, useScroll } from "motion/react";
import { 
  BookOpen, 
  Lightbulb, 
  Users, 
  Target, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github,
  ChevronRight,
  Layers,
  Cpu,
  PenTool
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "VR lessons for Social and Emotional Learning",
    category: "Corporate Training",
    description: "A gamified 4-week onboarding journey for a global tech firm, reducing time-to-productivity by 30%.",
    image: "https://picsum.photos/seed/learning1/800/600",
    tags: ["Gamification", "Articulate Storyline", "LMS Integration"]
  },
  {
    title: "Healthcare Compliance Sim",
    category: "Simulation",
    description: "Scenario-based training for medical professionals to navigate complex ethical dilemmas in real-time.",
    image: "https://picsum.photos/seed/learning2/800/600",
    tags: ["Scenario-Based", "Compliance", "Interactive Video"]
  },
  {
    title: "The Digital Literacy Project",
    category: "Non-Profit",
    description: "A mobile-first curriculum designed for underserved communities to bridge the digital divide.",
    image: "https://picsum.photos/seed/learning3/800/600",
    tags: ["Mobile Learning", "Accessibility", "Curriculum Design"]
  },
  {
    title: "Leadership Accelerator",
    category: "Executive Coaching",
    description: "A blended learning program combining synchronous workshops with asynchronous micro-learning.",
    image: "https://picsum.photos/seed/learning4/800/600",
    tags: ["Blended Learning", "Micro-learning", "Leadership"]
  }
];

const skills = [
  { name: "Instructional Design", icon: <BookOpen className="w-5 h-5" />, items: ["ADDIE", "SAM", "Backward Design"] },
  { name: "Authoring Tools", icon: <PenTool className="w-5 h-5" />, items: ["Articulate 360", "Adobe Captivate", "Camtasia"] },
  { name: "LMS & Tech", icon: <Cpu className="w-5 h-5" />, items: ["Canvas", "Moodle", "SCORM/xAPI"] },
  { name: "Visual Design", icon: <Layers className="w-5 h-5" />, items: ["Figma", "Canva", "UI/UX for Learning"] }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-serif font-bold tracking-tight"
          >
            Elena <span className="text-brand-accent italic">Vance</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            {['Work', 'Approach', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors">
                {item}
              </a>
            ))}
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-brand-ink text-white text-xs font-bold uppercase tracking-widest rounded-full"
          >
            Let's Talk
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-muted text-brand-ink text-xs font-bold uppercase tracking-widest mb-6">
              Instructional Designer & Learning Architect
            </span>
            <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8">
              Designing <span className="italic text-brand-accent">Experiences</span> That Stick.
            </h1>
            <p className="text-xl text-brand-ink/70 max-w-lg mb-10 leading-relaxed">
              I bridge the gap between complex information and human understanding through evidence-based learning strategies and creative storytelling.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-brand-ink text-white rounded-full font-bold flex items-center gap-2 group">
                View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-brand-muted rounded-[40px] rotate-3 -z-10" />
            <img 
              src="https://picsum.photos/seed/designer/1000/1000" 
              alt="Elena Vance" 
              className="w-full h-full object-cover rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-ink/5"
            >
              <div className="text-3xl font-serif font-bold text-brand-accent">95%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Learner Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="approach" className="py-32 bg-brand-ink text-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl mb-6">The Learning <span className="italic opacity-50">Philosophy</span></h2>
              <p className="text-lg opacity-70 leading-relaxed">
                Learning isn't just about content delivery; it's about behavioral change. My approach centers on the learner's journey, ensuring every interaction is purposeful and engaging.
              </p>
            </div>
            <div className="text-brand-accent font-serif italic text-2xl">
              "Clarity is the ultimate sophistication."
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Analyze", desc: "Deep diving into learner needs, business goals, and performance gaps before a single slide is built." },
              { icon: <Lightbulb className="w-8 h-8" />, title: "Ideate", desc: "Crafting creative narratives and interactive scenarios that transform dry data into memorable experiences." },
              { icon: <Users className="w-8 h-8" />, title: "Iterate", desc: "Continuous testing and refinement based on real learner feedback and performance data." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 border border-brand-cream/10 rounded-3xl hover:bg-brand-cream/5 transition-colors group"
              >
                <div className="mb-6 text-brand-accent group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p className="opacity-60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl md:text-7xl">Selected <span className="italic text-brand-accent">Cases</span></h2>
            <div className="hidden md:block h-px flex-grow mx-12 bg-brand-ink/10" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">2023—2026</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] mb-8">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">{project.category}</div>
                    <h3 className="text-3xl mb-4 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                    <p className="text-brand-ink/60 leading-relaxed max-w-md">{project.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section id="skills" className="py-32 bg-brand-muted/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-5xl mb-8 leading-tight">Equipped for <span className="italic">Impact</span></h2>
              <p className="text-brand-ink/60 leading-relaxed mb-8">
                I leverage a diverse toolkit to create accessible, scalable, and effective learning solutions across various industries.
              </p>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
                <Linkedin className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
                <Github className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {skills.map((skill, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-brand-ink/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-muted/50 rounded-xl text-brand-accent">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold">{skill.name}</h4>
                  </div>
                  <ul className="space-y-3">
                    {skill.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-brand-ink/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-brand-ink/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl mb-12">Ready to <span className="italic text-brand-accent">Collaborate?</span></h2>
          <motion.a 
            href="mailto:hello@elenavance.com"
            whileHover={{ scale: 1.02 }}
            className="inline-block text-3xl md:text-5xl font-serif border-b-2 border-brand-accent pb-2 mb-20 hover:text-brand-accent transition-colors"
          >
            hello@elenavance.com
          </motion.a>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-brand-ink/5">
            <div className="text-xs font-bold uppercase tracking-widest opacity-40">
              © 2026 Christine Tee — Instructional Design Portfolio
            </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-brand-accent">LinkedIn</a>
              <a href="#" className="hover:text-brand-accent">Resume</a>
              <a href="#" className="hover:text-brand-accent">Behance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
