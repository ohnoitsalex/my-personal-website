export const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-black border-t border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © 2026 <span className="text-white font-semibold">Alexander Onofrei</span>. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sage-600 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
