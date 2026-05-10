import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-12 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 tracking-tighter">
              Intelligence meets <br /> Technical Precision
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg"
          >
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-mono mb-4">Bio_Overview</h3>
            <p className="text-sm md:text-base leading-relaxed text-zinc-300 italic">
              Kolawole Suleiman is a developer passionate about programming, AI art, automation systems, and modern web technologies. 
              He works mainly with Python and C++, with experience in web development, Facebook page automation, web scraping, and AI integration. 
              Currently focused on growing and building advanced systems that merge automation with intelligent user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex flex-col gap-8"
          >
            <div className="p-8 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-lg">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-mono mb-6">Core_Philosophy</h3>
              <p className="text-xs text-zinc-400 leading-relaxed uppercase tracking-widest">
                Merging automation with intelligent user experiences to build the next generation of scalable systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
