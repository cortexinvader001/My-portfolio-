import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI-powered tools, and modern web experiences.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-start pt-32 md:pt-40 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-5xl w-full text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-cyan-400 font-mono text-xs mb-3 tracking-[0.3em] uppercase">
            // INITIALIZING PORTFOLIO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-sans font-bold tracking-tighter mb-6 leading-[0.9]"
        >
          Kolawole <br />
          Suleiman
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-6 mb-8"
        >
          <div className="h-[1px] w-12 bg-cyan-500 hidden md:block"></div>
          <p className="text-lg md:text-xl font-light tracking-wide text-zinc-300 italic">
            Web Developer • Python & C++ Programmer • AI Enthusiast
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed"
        >
          Passionate about building automation systems, AI-powered tools, and modern web experiences.
          Merging technical precision with creative AI integration.
        </motion.p>
      </div>
    </section>
  );
}
