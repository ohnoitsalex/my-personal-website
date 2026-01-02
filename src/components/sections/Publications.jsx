import { BookOpen, Award, ExternalLink } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { publications, education } from '../../data/content';
import { useRef, useEffect, useState } from 'react';

export const Publications = () => {
  const [visiblePubs, setVisiblePubs] = useState([]);
  const [visibleEdu, setVisibleEdu] = useState([]);
  const pubRefs = useRef([]);
  const eduRefs = useRef([]);

  useEffect(() => {
    const pubObservers = pubRefs.current.map((box, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisiblePubs((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (box) observer.observe(box);
      return observer;
    });

    const eduObservers = eduRefs.current.map((box, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleEdu((prev) => [...new Set([...prev, index])]);
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
      pubObservers.forEach((observer) => observer.disconnect());
      eduObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
            <div
              key={idx}
              ref={(el) => (pubRefs.current[idx] = el)}
              className={`group bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/30 to-[#113F7C]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#113F7C]/30 hover:border-[#113F7C]/50 hover:bg-[#113F7C]/30 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#113F7C]/20 ${
                visiblePubs.includes(idx)
                  ? 'opacity-100 translate-x-0'
                  : `opacity-0 ${idx % 2 === 0 ? '-translate-x-16' : 'translate-x-16'}`
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-16 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 rounded-full shadow-lg"></div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{pub.title}</h3>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-[#113F7C]/20 text-white rounded-full text-xs font-semibold border border-[#113F7C]/30">
                    {pub.type}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-300 font-medium">{pub.authors}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-300">{pub.venue}</span>
                  {pub.location && (
                    <>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{pub.location}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="text-sm text-slate-400 mb-4">{pub.date}</div>

              <p className="text-slate-300 leading-relaxed mb-6 font-medium">
                {pub.description}
              </p>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#113F7C] to-[#113F7C]/80 text-white font-semibold rounded-xl hover:gap-4 hover:shadow-lg hover:shadow-[#113F7C]/50 transition-all duration-300 hover:scale-105"
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
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                ref={(el) => (eduRefs.current[idx] = el)}
                className={`group bg-gradient-to-br from-[#8A3428]/25 via-[#8A3428]/30 to-[#8A3428]/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#8A3428]/30 hover:border-[#8A3428]/50 hover:bg-[#8A3428]/30 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8A3428]/20 ${
                  visibleEdu.includes(idx)
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${idx % 2 === 0 ? '-translate-x-16' : 'translate-x-16'}`
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-[#8A3428] to-[#8A3428]/80 rounded-full shadow-lg"></div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{edu.degree}</h3>
                </div>
                <p className="text-slate-300 font-medium mb-2">{edu.field}</p>
                {edu.school && <p className="text-slate-400 text-sm mb-4">{edu.school}</p>}
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
