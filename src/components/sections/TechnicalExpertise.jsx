import { Wrench } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { skills } from '../../data/content';

export const TechnicalExpertise = () => {
  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks & Tools', items: skills.frameworks }
  ];

  return (
    <section id="about" className="py-16 px-8 relative overflow-hidden z-20">
      {/* Background elements - dark blue tones */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-center gap-4 mb-4">
          <SectionIcon Icon={Wrench} color="[#113F7C]" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>
        <div className="space-y-8">
          {categories.map((category, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#113F7C]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-16 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 rounded-full shadow-lg"></div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 bg-slate-700/50 rounded-xl text-sm font-medium text-slate-200 hover:bg-gradient-to-br hover:from-[#113F7C]/90 hover:to-[#113F7C]/70 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#113F7C]/50 border border-slate-600/40 hover:border-[#113F7C]/60 cursor-pointer backdrop-blur-sm"
                    style={{animationDelay: `${i * 50}ms`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="group bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#113F7C]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1.5 w-16 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 rounded-full shadow-lg"></div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Specializations</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {skills.specializations.map((spec, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#113F7C]/10 hover:to-[#113F7C]/5 transition-all duration-300 group/item border border-transparent hover:border-[#113F7C]/30">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-[#113F7C]/50 transition-all duration-300"></div>
                  <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors duration-300">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
