import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-slate-100 py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            {/* <Sparkles size={14} /> */}
            <span>Restons en contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Contactez-moi
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Vous avez un projet ou une opportunité ? N'hésitez pas à m'en faire part.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Discutons de vos idées
              </h3>
              <p className="text-slate-400 mt-2 leading-relaxed">
                Je suis ouvert aux propositions de projets, stages ou collaborations. Envoyez-moi un message ou retrouvez-moi sur mes réseaux.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Email</span>
                  <a href={`mailto:${profile.email}`} className="font-medium text-white hover:text-blue-400 transition-colors">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Téléphone</span>
                  <a href={`tel:${profile.phone}`} className="font-medium text-white hover:text-blue-400 transition-colors">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Localisation</span>
                  <span className="font-medium text-white">{profile.location}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="block text-sm font-medium text-slate-400 mb-4">Profils professionnels</span>
              <div className="flex gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl relative"
          >
            {isSubmitted && (
              <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-6 z-20 animate-in fade-in duration-300">
                <CheckCircle2 size={56} className="text-emerald-400 mb-4 animate-bounce" />
                <h4 className="text-xl font-bold text-white">Message envoyé !</h4>
                <p className="text-slate-400 text-sm mt-2">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Votre nom</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Jean Dupont"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Votre email</label>
                <input
                  type="email"
                  required
                  placeholder="Ex: jean@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Votre message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all cursor-pointer"
              >
                <span>Envoyer le message</span>
                <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}