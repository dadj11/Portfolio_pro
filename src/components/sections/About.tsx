import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { User, MapPin, Mail, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-slate-100 py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            {/* <Sparkles size={14} /> */}
            <span>Découvrez mon parcours</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            À propos de moi
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            En route vers l'excellence en génie logiciel et développement web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-20 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20" />
              
              <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-inner">
                  <User size={64} />
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {profile.name}
                </h3>
                <p className="text-blue-400 text-sm font-medium mt-1">
                  {profile.role}
                </p>
                <div className="w-full grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-800/80 text-left">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <GraduationCap size={16} className="text-blue-400 shrink-0" />
                    <span>Génie Logiciel</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Code2 size={16} className="text-blue-400 shrink-0" />
                    <span>Full-Stack Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Développeur passionné & rigoureux
            </h3>

            <p className="text-slate-300 mt-6 leading-relaxed text-base sm:text-lg">
              {profile.about}
            </p>

            <div className="mt-8 space-y-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Localisation</span>
                  <span className="font-medium text-white">{profile.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Adresse Email</span>
                  <span className="font-medium text-white">{profile.email}</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}