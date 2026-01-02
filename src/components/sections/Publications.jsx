import { BookOpen, Award, ExternalLink } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { publications, education } from '../../data/content';

export const Publications = () => {
  return (
    <section id="expertise" className="py-16 px-8 relative overflow-hidden z-20">
      {/* Background elements - dark blue tones */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-center gap-4 mb-4">
          <SectionIcon Icon={BookOpen} color="[#113F7C]" delay="1s" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
            Publications
          </span>
        </h2>
        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <div key={idx} className={`group relative bg-gradient-to-br ${idx === 0 ? 'from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20' : 'from-[#113F7C]/25 via-[#113F7C]/20 to-[#113F7C]/25'} backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${idx === 0 ? 'from-[#113F7C] to-[#113F7C]/80' : 'from-[#113F7C]/80 to-[#113F7C]'} rounded-l-3xl`}></div>

              <div className="absolute top-4 right-4 px-3 py-1 bg-[#113F7C]/20 text-white rounded-full text-xs font-semibold border border-[#113F7C]/30">
                {pub.type}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white pr-32 group-hover:text-white/90 transition-colors duration-300">
                {pub.title}
              </h3>
              <p className="text-slate-300 mb-4">
                <span className="font-semibold text-white">{pub.authors}</span>
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <span className="px-4 py-2 bg-white/5 border border-[#113F7C]/30 rounded-xl font-medium text-white">{pub.venue}</span>
                {pub.location && <span className="text-slate-400">{pub.location}</span>}
                <span className="text-slate-400">{pub.date}</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                {pub.description}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${idx === 0 ? 'from-[#113F7C] to-[#113F7C]/80' : 'from-[#113F7C]/80 to-[#113F7C]'} text-white font-semibold rounded-xl hover:gap-4 hover:shadow-lg hover:shadow-[#113F7C]/50 transition-all duration-300`}
              >
                {idx === 0 ? 'Read Thesis' : 'Read Paper'} <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-32">
          <div className="flex items-center justify-center gap-4 mb-4">
            <SectionIcon Icon={Award} color="[#8A3428]" delay="1.2s" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white via-[#8A3428]/40 to-white bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-slate-800/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border-l-4 border-[#8A3428] hover:bg-[#8A3428]/20 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-300 mt-2 font-medium">{edu.field}</p>
                {edu.school && <p className="text-slate-400 text-sm mt-2">{edu.school}</p>}
                {edu.honors && (
                  <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <Award size={16} className="text-yellow-400" />
                    <p className="text-slate-300 font-semibold text-sm">{edu.honors}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
