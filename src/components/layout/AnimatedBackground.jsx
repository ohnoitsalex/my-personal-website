export const AnimatedBackground = ({ scrollY }) => {
  return (
    <>
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        {/* Subtle grey gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-black opacity-60"></div>
        <div
          className="absolute inset-0 opacity-25"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, top: '-450%', height: '1000%' }}
        >
          {/* Center blobs */}
          <div className="absolute top-[10%] left-1/4 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-[10%] right-1/4 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-[80%] left-1/3 w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-[40%] left-1/2 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1000"></div>
          <div className="absolute top-[65%] right-1/3 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>
          <div className="absolute top-[25%] right-1/2 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-5000"></div>

          {/* Additional center blobs */}
          <div className="absolute top-[15%] left-[35%] w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-800"></div>
          <div className="absolute top-[30%] right-[40%] w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1800"></div>
          <div className="absolute top-[45%] left-[45%] w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2800"></div>
          <div className="absolute top-[60%] right-[25%] w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3800"></div>
          <div className="absolute top-[72%] left-[28%] w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4200"></div>
          <div className="absolute top-[85%] right-[35%] w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4800"></div>

          {/* Left edge blobs */}
          <div className="absolute top-[20%] left-0 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1500"></div>
          <div className="absolute top-[55%] left-0 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3500"></div>
          <div className="absolute top-[35%] left-0 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2200"></div>
          <div className="absolute top-[70%] left-0 w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

          {/* Right edge blobs */}
          <div className="absolute top-[50%] right-0 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2500"></div>
          <div className="absolute top-[75%] right-0 w-96 h-96 bg-sage-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4500"></div>
          <div className="absolute top-[15%] right-0 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1200"></div>
          <div className="absolute top-[38%] right-0 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2800"></div>
          <div className="absolute top-[62%] right-0 w-96 h-96 bg-sage-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3600"></div>
          <div className="absolute top-[88%] right-0 w-96 h-96 bg-sage-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-5200"></div>
        </div>
      </div>

      {/* Grain texture overlay */}
      <div className="fixed inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
    </>
  );
};
