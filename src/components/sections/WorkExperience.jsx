import { Briefcase } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { experiences } from '../../data/content';

export const WorkExperience = () => {
  return (
    <section id="experience" className="py-16 px-8 relative overflow-hidden z-20">
      {/* Decorative elements - red-brown tones */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-center gap-4 mb-4">
          <SectionIcon Icon={Briefcase} color="[#8A3428]" delay="0.5s" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-white via-[#8A3428]/40 to-white bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((job, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#8A3428]/25 hover:border-[#8A3428]/40 hover:bg-[#8A3428]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8A3428]/15">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8A3428]/80 to-[#8A3428]/60 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/90 transition-all duration-300">{job.title}</h3>
                  <p className="text-lg text-slate-300 font-semibold mt-1 flex items-center gap-2">
                    {job.company}
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-[#8A3428] to-[#8A3428]/80 rounded-full shadow-lg shadow-[#8A3428]/50"></span>
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end gap-2">
                  <span className="text-sm font-medium text-white px-4 py-2 bg-[#8A3428]/10 rounded-xl border border-[#8A3428]/30">{job.period}</span>
                  <span className="text-xs text-slate-400">{job.location}</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 group/item">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8A3428] to-[#8A3428]/80 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-[#8A3428]/50 transition-all duration-300 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors duration-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
