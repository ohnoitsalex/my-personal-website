import { useState } from 'react';
import { Camera } from 'lucide-react';
import { SectionIcon } from '../ui/SectionIcon';
import { photographyImages } from '../../data/content';

export const Photography = ({ openLightbox }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % photographyImages.carousel.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + photographyImages.carousel.length) % photographyImages.carousel.length);

  return (
    <section id="photography" className="py-16 px-8 relative overflow-hidden z-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#113F7C]/25 via-[#113F7C]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#113F7C]/20 via-[#113F7C]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-center gap-4 mb-4">
          <SectionIcon Icon={Camera} color="[#113F7C]" delay="2s" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-white via-[#113F7C]/40 to-white bg-clip-text text-transparent">
            Photography
          </span>
        </h2>

        {/* Magazine Layout with varied sizes */}
        <div className="space-y-6">
          {/* Row 1: Large featured + vertical */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photographyImages.featured[0])}>
              <img src={photographyImages.featured[0]} alt="Photography" className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
            </div>
            <div className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photographyImages.featured[1])}>
              <img src={photographyImages.featured[1]} alt="Photography" className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
            </div>
          </div>

          {/* Row 2: Three equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photographyImages.grid.map((photo, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photo)}>
                <img src={photo} alt="Photography" className="w-full h-96 object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
              </div>
            ))}
          </div>

          {/* Row 3: Asymmetric layout */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photographyImages.asymmetric[0])}>
              <img src={photographyImages.asymmetric[0]} alt="Photography" className="w-full h-[500px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
            </div>
            <div className="col-span-12 md:col-span-7 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-700 hover:scale-[1.01] border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photographyImages.asymmetric[1])}>
              <img src={photographyImages.asymmetric[1]} alt="Photography" className="w-full h-[500px] object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
            </div>
          </div>

          {/* Row 4: Small squares grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {photographyImages.squares.map((photo, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#113F7C]/20 transition-all duration-500 hover:scale-110 hover:z-10 hover:rotate-2 border border-[#113F7C]/20 hover:border-[#113F7C]/30 cursor-pointer" onClick={() => openLightbox(photo)}>
                <img src={photo} alt="Photography" className="w-full aspect-square object-cover transition-all duration-700 group-hover:scale-125" />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Carousel */}
        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 cursor-pointer" onClick={() => openLightbox(photographyImages.carousel[currentSlide])}>
            <img src={photographyImages.carousel[currentSlide]} alt="Slide" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
            <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-x-1 opacity-0 group-hover:opacity-100 border border-white/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:translate-x-1 opacity-0 group-hover:opacity-100 border border-white/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="flex gap-3 mt-8 justify-center overflow-x-auto pb-4 px-4">
            {photographyImages.carousel.map((img, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-500 border ${currentSlide === idx ? 'ring-4 ring-[#113F7C] scale-110 shadow-2xl border-[#113F7C]/40' : 'opacity-50 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0 border-[#113F7C]/20'}`}>
                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
