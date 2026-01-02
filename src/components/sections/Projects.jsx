import { Code, ExternalLink } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { projects } from '../../data/content';
import { useRef, useEffect, useState } from 'react';

export const Projects = () => {
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const boxRefs = useRef([]);

  useEffect(() => {
    const observers = boxRefs.current.map((box, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleBoxes((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (box) observer.observe(box);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
            <div
              key={idx}
              ref={(el) => (boxRefs.current[idx] = el)}
              className={`group bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#113F7C]/20 ${
                visibleBoxes.includes(idx)
                  ? 'opacity-100 translate-x-0'
                  : `opacity-0 ${idx % 2 === 0 ? '-translate-x-16' : 'translate-x-16'}`
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-16 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 rounded-full shadow-lg"></div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{project.title}</h3>
              </div>

              <div className="mb-4">
                <span className="px-4 py-1.5 bg-[#113F7C]/20 text-white rounded-full text-xs font-semibold border border-[#113F7C]/30">
                  {project.badge}
                </span>
              </div>

              {project.subtitle && (
                <p className="text-sm text-slate-300 mb-4 font-medium">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2">
                      {project.subtitle} <ExternalLink size={14} />
                    </a>
                  ) : (
                    project.subtitle
                  )}
                </p>
              )}

              <p className="text-slate-300 mb-6 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 bg-slate-700/50 rounded-xl text-sm font-medium text-slate-200 hover:bg-gradient-to-br hover:from-[#113F7C]/90 hover:to-[#113F7C]/70 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#113F7C]/50 border border-slate-600/40 hover:border-[#113F7C]/60 cursor-pointer backdrop-blur-sm"
                    style={{animationDelay: `${i * 50}ms`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
