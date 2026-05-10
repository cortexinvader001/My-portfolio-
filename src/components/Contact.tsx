import { motion } from "motion/react";
import { Mail, Instagram, Facebook, Send } from "lucide-react";

const socialLinks = [
  { name: "Email", icon: <Mail className="w-6 h-6" />, href: "mailto:kolawolesuleiman716@gmail.com" },
  { name: "Instagram", icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/py_sman" },
  { name: "Facebook", icon: <Facebook className="w-6 h-6" />, href: "https://facebook.com/cortexinvader" },
  { name: "Telegram", icon: <Send className="w-6 h-6" />, href: "https://t.me/sman368" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="glass p-12 md:p-20 rounded-lg border-white/5 text-left mb-20"
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-mono mb-8">// CONNECTION_PORT</h2>
          <h3 className="text-4xl md:text-6xl font-sans font-bold mb-12 tracking-tighter">Let's build <br /><span className="text-zinc-600">the next version of the web.</span></h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-end">
             <div className="flex flex-col gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-1 h-1 bg-zinc-600 group-hover:w-4 group-hover:bg-cyan-400 transition-all duration-300"></div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-white uppercase">{social.name}: {social.href.replace('mailto:', '').replace('https://', '').replace('t.me/', '')}</span>
                  </motion.a>
                ))}
             </div>
             
             <div className="flex justify-end">
                 <div className="flex flex-col text-right">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-2">Designed for the Future</span>
                    <span className="text-[10px] font-mono text-cyan-400/50 uppercase tracking-[0.3em]">&copy; {new Date().getFullYear()} Kolawole Suleiman</span>
                 </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
