import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-800 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium">
            Mon parcours
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Expérience & Formation
          </h2>

          <p className="text-gray-400 mt-4">
            Mon parcours académique et professionnel.
          </p>
        </div>

        <div className="relative border-l border-slate-600 ml-4">

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative pl-8 pb-12 last:pb-0"
            >

              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-800" />

              <span className="text-sm text-blue-400 font-medium">
                {experience.period}
              </span>

              <div className="mt-3 bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">

                <span className="text-sm text-gray-400">
                  {experience.type}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {experience.title}
                </h3>

                <p className="text-blue-400 mt-1">
                  {experience.company}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {experience.location}
                </p>

                <p className="text-gray-300 leading-7 mt-5">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-sm bg-slate-800 rounded-full text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}