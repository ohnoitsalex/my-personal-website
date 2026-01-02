import { Code, ExternalLink } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { projects } from '../../data/content';

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 relative overflow-hidden z-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center gap-4 mb-4">
          <SectionIcon Icon={Code} color="[#113F7C]" delay="1.5s" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className={`group relative bg-gradient-to-br ${idx % 2 === 0 ? 'from-[#113F7C]/25 via-[#113F7C]/20 to-[#113F7C]/30' : 'from-[#113F7C]/20 via-[#113F7C]/25 to-[#113F7C]/30'} backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#113F7C]/10 to-[#113F7C]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative">
                <div className="inline-block px-4 py-1.5 bg-[#113F7C]/20 text-white rounded-full text-xs font-bold mb-4 border border-[#113F7C]/30">
                  {project.badge}
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-white mb-4 font-semibold">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#113F7C] transition-colors duration-300 inline-flex items-center gap-2">
                        {project.subtitle} <ExternalLink size={14} />
                      </a>
                    ) : (
                      project.subtitle
                    )}
                  </p>
                )}
                <p className="text-slate-400 mb-6 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-white border border-[#113F7C]/20 hover:bg-gradient-to-br ${idx % 2 === 0 ? 'hover:from-[#113F7C] hover:to-[#113F7C]/80' : 'hover:from-[#113F7C]/80 hover:to-[#113F7C]'} hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}
                      style={{animationDelay: `${i * 100}ms`}}
                    >
                      {tech}
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
};
