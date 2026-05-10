import { motion } from "motion/react";
import { Code2, Cpu, Globe, Database, Bot, Zap } from "lucide-react";

const skills = [
  { name: "Python", icon: <Bot className="w-6 h-6" />, desc: "Automation & AI" },
  { name: "C++", icon: <Cpu className="w-6 h-6" />, desc: "System Logic" },
  { name: "Web Development", icon: <Globe className="w-6 h-6" />, desc: "Modern Experiences" },
  { name: "AI Integration", icon: <Zap className="w-6 h-6" />, desc: "Smart Systems" },
  { name: "Web Scraping", icon: <Database className="w-6 h-6" />, desc: "Data Extraction" },
  { name: "Automation", icon: <Code2 className="w-6 h-6" />, desc: "Workflow Efficiency" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-mono mb-4">Core_Stack</h2>
          <h3 className="text-3xl font-bold tracking-tighter uppercase font-sans">Specialized Capabilities</h3>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: "rgba(34, 211, 238, 0.5)" }}
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-sm flex items-center gap-4 transition-all"
            >
              <div className="text-cyan-400">
                {skill.icon}
              </div>
              <div className="flex flex-col">
                 <span className="text-xs font-bold uppercase tracking-widest">{skill.name}</span>
                 <span className="text-[10px] text-zinc-500 font-mono italic">{skill.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
