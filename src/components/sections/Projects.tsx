import { FolderGit2 } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Mes Projets
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Quelques projets sur lesquels j'ai travaillé.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://github.com/dadj11"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 font-medium transition-all shadow-sm"
          >
            <FolderGit2 size={18} className="text-blue-400" />
            <span>Voir plus de projets sur GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}