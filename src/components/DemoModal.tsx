import React, { useEffect } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  videoSrc = '/video/1.mp4',
  title = 'PrompTedSite Workflow Demo'
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-16 sm:p-32">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-4xl bg-[#F6EDDA] border border-[#9C9C9C] rounded-4 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-16 border-b border-[#D5C9B3] bg-[#EFE4CF]">
          <div className="flex items-center gap-8">
            <span className="font-symbols text-[#3B60C5] text-18">1</span>
            <span className="font-geist text-14 font-500 text-[#212121]">{title}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-32 h-32 flex items-center justify-center text-[#5B5B5B] hover:text-[#212121] hover:bg-[#E3D7BF] rounded-2 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="aspect-video bg-black flex items-center justify-center">
          <video
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
