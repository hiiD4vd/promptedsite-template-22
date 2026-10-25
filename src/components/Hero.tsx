import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between pt-128 pb-64 px-16 sm:px-32">
      {/* Background grid guide line */}
      <div className="bg-hole-border h-px z-[-1] top-333 sm:top-354 w-full absolute lg:hidden" />

      {/* Main Architectural Hero Heading */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Mobile handwritten note */}
        <span
          className="pagetitle-left-mob -rotate-4 font-architect leading-0.9 text-24 text-[#8B8B8B] inline-block lg:hidden ml-16 mb-8"
          aria-hidden="true"
        >
          architectural
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 5" className="w-160 h-4 mt-2">
            <path
              d="M323.81 1.93c-.93-.07-5.82-.05-13.08-.03-1.87-.03-6.24-.02-12.22 0H1.9C.5 1.9.5 2.8 1.9 2.8h320.91c1.4 0 1.9-.9.1-1.07z"
              fill="#5b5b5b"
            />
          </svg>
        </span>

        <h1 className="text-center text-56 sm:text-72 lg:text-148 font-f37 title text-black font-500 relative leading-0.9 mx-auto max-w-7xl no-kern select-none">
          {/* Layer 1: Background stroke */}
          <span
            className="pagetitle-bg block leading-0.9 text-transparent text-stroke-1 text-stroke-black"
            aria-hidden="true"
          >
            Design with PrompTedSite
          </span>

          {/* Layer 2: Main text */}
          <span className="pagetitle-fill block leading-0.9 text-black inset-0 size-full absolute">
            Design with PrompTedSite
          </span>

          {/* Handwritten badge left */}
          <span className="pagetitle-left absolute top-64 left-0 -rotate-4 font-architect leading-0.9 text-24 text-[#8B8B8B] hidden lg:block">
            architectural
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 5" className="w-180 h-5 mt-2">
              <path
                d="M323.81 1.93c-.93-.07-5.82-.05-13.08-.03-1.87-.03-6.24-.02-12.22 0H1.9C.5 1.9.5 2.8 1.9 2.8h320.91c1.4 0 1.9-.9.1-1.07z"
                fill="#5b5b5b"
              />
            </svg>
          </span>

          {/* Handwritten badge right */}
          <span className="pagetitle-right absolute -bottom-64 lg:bottom-32 -right-16 lg:-right-64 -rotate-4 font-architect leading-0.9 text-24 text-[#8B8B8B]">
            <span className="font-symbols inline-block -translate-y-6 absolute -left-4 top-2 rotate-210 lg:-rotate-2">
              K
            </span>
            <span className="inline-block">
              <div className="w-full h-px bg-[#5b5b5b] mb-4" />
              not
              <div className="w-full h-px bg-[#5b5b5b] mt-4" />
            </span>
            <div>software</div>
          </span>
        </h1>
      </div>

      {/* Floating Subheading Indicator */}
      <div className="fixed right-32 bottom-32 z-20 font-graphik text-14 lg:text-16 text-[#8B8B8B] font-500 leading-1 items-center gap-8 hidden lg:inline-flex bg-[#F6EDDA]/90 px-12 py-6 rounded-2 border border-[#CFC5B2]">
        <span>The intelligent canvas that thinks with you, not for you.</span>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20.47" height="19.53" rx="2" fill="#F2E5D0" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.87 17.38a.52.52 0 0 0 .73 0l7.72-7.72a.52.52 0 0 0 .15-.36V2.52c0-.46-.55-.69-.88-.36L10.6 9.15a.52.52 0 0 1-.73 0L2.88 2.16c-.32-.33-.88-.1-.88.36v6.78c0 .13.05.26.15.36l7.72 7.72z"
            fill="#E76051"
          />
        </svg>
      </div>
    </div>
  );
};
