import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  image?: string;       // Reste compatible si vous passez une seule image
  images?: string[];    // Nouveau : tableau d'images pour le défilement
  technologies: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  images = [],
  technologies,
  github,
  demo,
}: ProjectProps) {
  // Combine l'image unique et le tableau d'images pour unifier la logique
  const projectImages = images.length > 0 ? images : image ? [image] : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="group bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl flex flex-col h-full relative">
      
      {/* Conteneur du carrousel d'images */}
      <div className="relative overflow-hidden h-60 bg-slate-950">
        
        {/* Affichage de l'image active avec animation de transition */}
        {projectImages.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={projectImages[currentImageIndex]}
              alt={`${title} - image ${currentImageIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </AnimatePresence>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
            Aucune image disponible
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Flèches de défilement (visibles seulement s'il y a plus d'une image) */}
        {projectImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 border border-slate-700/60 text-white opacity-0 group-hover:opacity-100 hover:bg-blue-600 transition-all z-20 shadow-md"
              aria-label="Image précédente"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 border border-slate-700/60 text-white opacity-0 group-hover:opacity-100 hover:bg-blue-600 transition-all z-20 shadow-md"
              aria-label="Image suivante"
            >
              <ChevronRight size={16} />
            </button>

            {/* Indicateurs de points (dots) en bas de l'image */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              {projectImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? "w-5 bg-blue-500" : "w-1.5 bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Liens GitHub / Démo animés au survol de l'image */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3.5 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-2xl shadow-lg text-white hover:bg-blue-600 transition-colors pointer-events-auto"
              aria-label="Voir le code source"
            >
              <Github size={20} />
            </motion.a>
          )}
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3.5 bg-blue-600 rounded-2xl shadow-lg text-white hover:bg-blue-500 transition-colors pointer-events-auto"
              aria-label="Voir la démo en direct"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="p-8 flex flex-col grow justify-between relative z-10">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors tracking-tight">
            {title}
          </h3>

          <p className="text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Liste des technologies / Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 bg-slate-950 border border-slate-800/80 text-blue-400 rounded-xl text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}