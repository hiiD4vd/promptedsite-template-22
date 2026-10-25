import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onLoaded?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const holeLeftRef = useRef<HTMLDivElement>(null);
  const holeRightRef = useRef<HTMLDivElement>(null);
  const holeTopRef = useRef<HTMLDivElement>(null);
  const holeBottomRef = useRef<HTMLDivElement>(null);

  const block1Ref = useRef<SVGSVGElement>(null);
  const block2Ref = useRef<SVGSVGElement>(null);
  const block3Ref = useRef<SVGSVGElement>(null);
  const block4Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Initial entrance and opening sequence
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 0.5,
        onComplete: () => {
          setIsDone(true);
          onLoaded?.();
        }
      });

      // 1. Blocks slightly pulse / animate
      timeline
        .to(block1Ref.current, { scale: 1.05, duration: 0.4, yoyo: true, repeat: 1, ease: 'power1.inOut' })
        .to(block2Ref.current, { scale: 1.05, duration: 0.4, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 0.1)
        .to(block3Ref.current, { scale: 1.05, duration: 0.4, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 0.2)
        .to(block4Ref.current, { scale: 1.05, duration: 0.4, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 0.3);

      // 2. Explode blocks outward
      timeline.to(
        block1Ref.current,
        { x: '-120%', y: '-120%', opacity: 0, duration: 0.9, ease: 'power2.inOut' },
        '+=0.2'
      );
      timeline.to(
        block2Ref.current,
        { x: '120%', y: '-120%', opacity: 0, duration: 0.9, ease: 'power2.inOut' },
        '<0.05'
      );
      timeline.to(
        block3Ref.current,
        { x: '-120%', y: '120%', opacity: 0, duration: 0.9, ease: 'power2.inOut' },
        '<0.05'
      );
      timeline.to(
        block4Ref.current,
        { x: '120%', y: '120%', opacity: 0, duration: 0.9, ease: 'power2.inOut' },
        '<0.05'
      );

      // 3. Open grid curtains
      if (holeLeftRef.current && holeRightRef.current && holeTopRef.current && holeBottomRef.current) {
        timeline.to(
          holeLeftRef.current,
          { clipPath: 'inset(0 100vw 0 0)', duration: 1.2, ease: 'power3.inOut' },
          '<0.2'
        );
        timeline.to(
          holeRightRef.current,
          { clipPath: 'inset(0 0 0 100vw)', duration: 1.2, ease: 'power3.inOut' },
          '<'
        );
        timeline.to(
          holeTopRef.current,
          { clipPath: 'inset(0 0 100vh 0)', duration: 1.2, ease: 'power3.inOut' },
          '<'
        );
        timeline.to(
          holeBottomRef.current,
          { clipPath: 'inset(100vh 0 0 0)', duration: 1.2, ease: 'power3.inOut' },
          '<'
        );
      }

      // 4. Fade container out completely
      timeline.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: 'none'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-auto transition-opacity"
      aria-hidden="true"
    >
      {/* Grid Hole Cutout Curtains */}
      <div className="loader absolute inset-0 size-full">
        <div ref={holeLeftRef} className="js-hole-left fixed top-0 left-0 bg-grid bg-grid-left w-full h-dvh" />
        <div ref={holeRightRef} className="js-hole-right fixed top-0 left-0 bg-grid bg-grid-right w-full h-dvh" />
        <div ref={holeTopRef} className="js-hole-top fixed top-0 left-0 bg-grid bg-grid-top w-full h-dvh" />
        <div ref={holeBottomRef} className="js-hole-bottom fixed top-0 left-0 bg-grid bg-grid-bottom w-full h-dvh" />
      </div>

      {/* Central 4-block geometric architectural logo */}
      <div
        ref={iconContainerRef}
        className="fixed z-50 grid grid-cols-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 w-164 overflow-hidden pointer-events-none"
      >
        {/* Block 1: Horizontal Bars */}
        <svg
          ref={block1Ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-80 relative z-2"
        >
          <rect fill="#3b60c5" width="18.82" height="18.82" rx=".59" ry=".59" />
          <rect fill="#fff" x="1.18" y="12.94" width="16.47" height="4.71" rx=".59" ry=".59" />
          <rect fill="#fff" x="1.18" y="7.06" width="16.47" height="4.71" rx=".59" ry=".59" />
          <rect fill="#fff" x="1.18" y="1.18" width="16.47" height="4.71" rx=".59" ry=".59" />
        </svg>

        {/* Block 2: Up Chevron */}
        <svg
          ref={block2Ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-80"
        >
          <rect fill="#3b60c5" width="18.82" height="18.82" rx=".59" ry=".59" />
          <path
            fill="#fff"
            d="M9.78,1.54c-.2-.2-.53-.2-.73,0L1.33,9.26c-.1.1-.15.23-.15.36v6.78c0,.46.55.69.88.36l6.99-6.99c.2-.2.53-.2.73,0l6.99,6.99c.32.32.88.09.88-.36v-6.78c0-.14-.05-.27-.15-.36L9.78,1.54Z"
          />
        </svg>

        {/* Block 3: Donut Circle */}
        <svg
          ref={block3Ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-80"
        >
          <rect fill="#3b60c5" width="18.82" height="18.82" rx=".59" ry=".59" />
          <circle fill="#fff" cx="9.41" cy="9.41" r="8.24" />
          <circle fill="#3b60c5" cx="9.41" cy="9.41" r="4.24" />
        </svg>

        {/* Block 4: Quarter Circle */}
        <svg
          ref={block4Ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.82 18.82"
          className="w-80"
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
