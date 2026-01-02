export const Lightbox = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-[#113F7C] transition-colors duration-300 z-[101]"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="max-w-[95vw] max-h-[95vh] p-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageSrc}
          alt="Full size"
          className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};
