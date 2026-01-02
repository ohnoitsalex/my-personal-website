import { AnimatedBackground } from './AnimatedBackground';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout = ({ children, scrolled, activeSection, scrollY, scrollToSection }) => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <AnimatedBackground scrollY={scrollY} />
      <Navigation scrolled={scrolled} activeSection={activeSection} scrollToSection={scrollToSection} />
      {children}
      <Footer />
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
