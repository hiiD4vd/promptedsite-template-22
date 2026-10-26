import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onLoaded?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.3,
        onComplete: () => {
          setIsDone(true);
          onLoaded?.();
        }
      });

      // 1. Subtle pulse of central geometric blocks
      tl.to(iconRef.current, {
        scale: 1.08,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      });

      // 2. Smoothly fade out logo and scale slightly
      tl.to(iconRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        ease: 'power2.inOut'
      }, '+=0.2');

      // 3. Smoothly fade out full background curtain
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        pointerEvents: 'none'
      }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F6EDDA] transition-opacity duration-300"
      style={{
        backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
      aria-hidden="true"
    >
      {/* Central 4-block geometric architectural logo */}
      <div
        ref={iconRef}
        className="grid grid-cols-2 gap-8 w-140 sm:w-164 pointer-events-none drop-shadow-md"
      >
        {/* Block 1: Horizontal Bars */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-full aspect-square"
        >
          <rect fill="#3b60c5" width="18.82" height="18.82" rx=".59" ry=".59" />
          <rect fill="#fff" x="1.18" y="12.94" width="16.47" height="4.71" rx=".59" ry=".59" />
          <rect fill="#fff" x="1.18" y="7.06" width="16.47" height="4.71" rx=".59" ry=".59" />
          <rect fill="#fff" x="1.18" y="1.18" width="16.47" height="4.71" rx=".59" ry=".59" />
        </svg>

        {/* Block 2: Up Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-full aspect-square"
        >
          <rect fill="#3b60c5" width="18.82" height="18.82" rx=".59" ry=".59" />
          <path
            fill="#fff"
            d="M9.78,1.54c-.2-.2-.53-.2-.73,0L1.33,9.26c-.1.1-.15.23-.15.36v6.78c0,.46.55.69.88.36l6.99-6.99c.2-.2.53-.2.73,0l6.99,6.99c.32.32.88.09.88-.36v-6.78c0-.14-.05-.27-.15-.36L9.78,1.54Z"
          />
        </svg>

        {/* Block 3: Donut Circle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-full aspect-square"
        >
          <rect fill="#3b60c5" width="18.82" height="18.82" rx=".59" ry=".59" />
          <circle fill="#fff" cx="9.41" cy="9.41" r="8.24" />
          <circle fill="#3b60c5" cx="9.41" cy="9.41" r="4.24" />
        </svg>

        {/* Block 4: Quarter Circle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-full aspect-square"
        >
          <rect fill="#3b60c5" width="18.82" height="18.82" rx=".59" ry=".59" />
          <path
            fill="#fff"
            d="M1.76,1.18c-.32,0-.59.26-.59.59v15.56c0,.18.14.32.32.32,8.92,0,16.15-7.23,16.15-16.15,0-.18-.14-.32-.32-.32H1.76Z"
          />
        </svg>
      </div>
    </div>
  );
};
