import { ArrowDown, Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/content';

export const Hero = ({ scrollToSection }) => {
  const socialLinks = [
    { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', external: false },
    { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', external: true }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-8 relative overflow-hidden z-20">
      {/* Full-page background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/willian-justen-de-vasconcellos-lDtPi8I-6TE-unsplash.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      <div className="text-center max-w-4xl relative z-10 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-sage-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-gradient bg-[length:200%_auto]">
            {personalInfo.title}
          </span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
          <p className="text-2xl md:text-3xl font-light text-sage-100">{personalInfo.degrees}</p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
        </div>

        <p className="text-lg md:text-xl font-light text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex gap-4 justify-center">
          {socialLinks.map(({ Icon, href, label, external }, idx) => (
            <a
              key={idx}
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="group relative p-4 bg-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-white/20 hover:border-sage-400/50 shadow-lg hover:shadow-sage-500/50"
            >
              <Icon size={24} className="text-white group-hover:text-sage-300 transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 text-white/80 hover:text-white transition-all duration-500 hover:scale-125 animate-bounce group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-sage-500/30 blur-xl rounded-full group-hover:bg-sage-500/50 transition-all duration-300"></div>
          <ArrowDown size={32} className="relative" />
        </div>
      </button>

      {/* Elegant separator at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-400/60 to-transparent blur-sm"></div>
      </div>
    </section>
  );
};
