import { Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/content';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 relative overflow-hidden z-20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#8A3428]/20 via-[#8A3428]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-[#8A3428]/30">
          <div className="w-2 h-2 bg-[#8A3428] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white/90">Available for opportunities</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-[#8A3428]/40 to-white bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <a
          href={`mailto:${personalInfo.contactEmail}`}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8A3428]/80 to-[#8A3428] text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:shadow-[#8A3428]/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 border border-[#8A3428]/40"
        >
          <Mail size={24} />
          <span>Get in Touch</span>
          <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};
