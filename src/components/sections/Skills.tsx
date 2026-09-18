import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import { Cpu } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-slate-100 py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            {/* <Sparkles size={14} /> */}
            <span>Expertise technique</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Mes Compétences
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Les langages, frameworks et outils que j'utilise au quotidien pour concevoir des applications robustes.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800/80 hover:border-blue-500/50 transition-all shadow-xl group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  {skill.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-8">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-900 border border-slate-800/80 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}