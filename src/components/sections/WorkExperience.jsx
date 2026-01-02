import { Briefcase } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { experiences } from '../../data/content';
import { useRef, useEffect, useState } from 'react';

export const WorkExperience = () => {
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
            <div
              key={idx}
              ref={(el) => (boxRefs.current[idx] = el)}
              className={`group bg-gradient-to-br from-[#8A3428]/25 via-[#8A3428]/30 to-[#8A3428]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#8A3428]/30 hover:border-[#8A3428]/50 hover:bg-[#8A3428]/30 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8A3428]/20 ${
                visibleBoxes.includes(idx)
                  ? 'opacity-100 translate-x-0'
                  : `opacity-0 ${idx % 2 === 0 ? '-translate-x-16' : 'translate-x-16'}`
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-16 bg-gradient-to-r from-[#8A3428] to-[#8A3428]/80 rounded-full shadow-lg"></div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{job.title}</h3>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <p className="text-lg text-slate-300 font-semibold flex items-center gap-2">
                    {job.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end gap-2">
                  <span className="text-sm font-medium text-slate-300">{job.period}</span>
                  <span className="text-xs text-slate-400">{job.location}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 group/item">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#8A3428] to-[#8A3428]/80 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-[#8A3428]/50 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed font-medium group-hover/item:text-white transition-colors duration-300">{point}</span>
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
