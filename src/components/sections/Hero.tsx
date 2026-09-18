import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-slate-100 flex items-center pt-20 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span> Bienvenue sur mon portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            {profile.name}
          </h1>

          <h2 className="text-xl sm:text-2xl mt-4 font-medium text-blue-400">
            {profile.role}
          </h2>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all"
            >
              <span>Voir mes projets</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#cv"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium px-6 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all"
            >
              <Download size={18} />
              <span>Télécharger CV</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl transform scale-110" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500/30 flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src="/image/profile.png"
                alt="Godwin - Développeur Full-Stack"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}