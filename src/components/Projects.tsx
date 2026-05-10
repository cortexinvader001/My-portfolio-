import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Roots Empowerment",
    description: "An organization-focused platform created to support and care for children.",
    link: "https://roots-empowerment-2.onrender.com/",
    tags: ["Web Dev", "Non-Profit"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Chess Kings",
    description: "A modern car rental management system with clean interface and responsive functionality.",
    link: "https://chess-kings.onrender.com/",
    tags: ["Management System", "React"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Facebook Automation Package",
    description: "Currently building a custom Facebook page automation package that follows Facebook legal standards and improves workflow automation.",
    tags: ["Python", "Automation"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Chat System",
    description: "Developing an AI-powered chat system for Windows with smart interaction capabilities.",
    tags: ["AI", "Python", "Windows"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-mono mb-4">Project_Vault</h2>
          <h3 className="text-3xl font-bold tracking-tighter uppercase">Selected Works</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.map((project, index) => {
            const isDeployed = !!project.link;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)" }}
                className="p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-lg flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex gap-2 mb-3">
                    {project.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 bg-white/10 text-white/50 rounded">{tag}</span>
                    ))}
                  </div>
                  <h4 className="text-sm font-bold mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                  <p className="text-[11px] text-zinc-500 mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  {isDeployed ? (
                    <>
                      <span className="text-[9px] font-mono text-cyan-600 uppercase tracking-widest font-bold">DEPLOYED</span>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase underline underline-offset-4 hover:text-cyan-400 transition-colors"
                      >
                        Launch
                      </a>
                    </>
                  ) : (
                    <>
                      <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">BUILDING</span>
                      <span className="text-[10px] uppercase text-zinc-600">Beta</span>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
