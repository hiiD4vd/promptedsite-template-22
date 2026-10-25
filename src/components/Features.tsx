import React from 'react';

interface FeaturesProps {
  onOpenDemo: (videoSrc: string, title: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenDemo }) => {
  const sections = [
    {
      num: '1',
      eyebrow: 'Intents, Translated!',
      title: 'Augmented Sketch',
      desc: 'Transform rough sketches, spatial diagrams, and existing plans into editable floor plans.',
      video: '/video/1.mp4',
      position: 'left',
      badge: 'explore features'
    },
    {
      num: '2',
      eyebrow: 'Ideas, Shaped!',
      title: 'Adaptive Massing',
      desc: 'Convert sketches, reference images, and loose descriptions into BIM-compatible 3D massing.',
      video: '/video/2.mp4',
      position: 'right'
    },
    {
      num: '3',
      eyebrow: 'Iteration, Orchestrated!',
      title: 'Prompted Plans',
      desc: 'Generate floor plan options or fill in unfinished areas with prompts.',
      video: '/video/3.mp4',
      position: 'left',
      interactivePrompt: true
    },
    {
      num: '4',
      eyebrow: 'Options, Multiplied!',
      title: 'Agentic Refinement',
      desc: 'Mark up your intent, and PrompTedSite’s agents execute the layout edits.',
      video: '/video/4.mp4',
      position: 'right'
    },
    {
      num: '5',
      eyebrow: 'Imagination, Realized!',
      title: 'Instant Facades',
      desc: 'Explore facade options without manual modeling or scripting.',
      video: '/video/5.mp4',
      position: 'left'
    }
  ];

  return (
    <div id="features" className="relative z-10 w-full space-y-96 lg:space-y-160 my-96">
      {sections.map((sec) => (
        <section
          key={sec.num}
          aria-label={sec.title}
          className={`container mx-auto px-16 sm:px-32 lg:px-64 flex ${
            sec.position === 'right' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div className="w-full max-w-xl bg-[#F6EDDA]/95 backdrop-blur-sm p-24 sm:p-36 rounded-4 border border-[#CFC5B2] shadow-sm">
            {/* Eyebrow with symbol and architectural line */}
            <div className="text-[#5B5B5B] text-20 sm:text-24 leading-0.9 -rotate-2 mb-12 flex items-center gap-8">
              <span className="font-symbols text-primary translate-y-2">{sec.num}</span>
              <span className="font-architect flex items-center gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4" className="w-32 h-3">
                  <path d="M0 2h40" stroke="#5b5b5b" strokeWidth="2" strokeDasharray="3 2" />
                </svg>
                {sec.eyebrow}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4" className="w-32 h-3">
                  <path d="M0 2h40" stroke="#5b5b5b" strokeWidth="2" strokeDasharray="3 2" />
                </svg>
              </span>
            </div>

            {/* Title with layered stroke */}
            <h2 className="font-f37 text-48 sm:text-64 lg:text-80 leading-1 no-kern mb-20 relative text-black">
              {sec.title}
            </h2>

            {/* Description */}
            <p className="font-graphik text-body text-18 sm:text-20 leading-1.4 text-[#555555] mb-24">
              {sec.desc}
            </p>

            {/* Interactive Prompt card if Section 3 */}
            {sec.interactivePrompt && (
              <div className="mb-24 p-16 bg-[#EDE3CE] border border-[#838383] rounded-2 flex flex-col sm:flex-row justify-between items-center gap-12 shadow-inner">
                <div className="text-[#373737] font-geist text-16 font-500">
                  Create an office layout
                </div>
                <button
                  type="button"
                  onClick={() => onOpenDemo(sec.video, 'Prompted Layout Generator')}
                  className="button-paper h-40 px-16 inline-flex items-center gap-8 bg-[#FDF8F0] text-[#212121] rounded-2 border border-[#A19D94] text-14 font-geist font-500 hover:bg-[#3B60C5] hover:text-white transition-all active:scale-95"
                >
                  <span className="w-6 h-6 rounded-full bg-[#E76051]" />
                  Generate
                </button>
              </div>
            )}

            {/* Action CTA */}
            <div className="flex items-center gap-24">
              <button
                type="button"
                onClick={() => onOpenDemo(sec.video, `${sec.title} Demo`)}
                className="button-modal h-48 rounded-2 inline-flex overflow-hidden cursor-pointer w-192 border border-[#A19D94] bg-white/60 hover:bg-white transition-colors group"
              >
                <div className="w-48 h-48 border-r border-[#A19D94] shrink-0 flex items-center justify-center bg-white group-hover:bg-[#E76051] text-[#E76051] group-hover:text-white transition-colors">
                  <svg className="size-18" fill="none" viewBox="0 0 19 19">
                    <use xlinkHref="/assets/spritemap.svg#sprite-arrow" />
                  </svg>
                </div>
                <div className="w-full h-48 font-geist text-14 font-500 text-[#414141] flex items-center justify-center">
                  Watch the demo
                </div>
              </button>

              {sec.badge && (
                <div className="text-[#8D8D8D] text-14 tracking-2 leading-0.9 hidden sm:flex items-center gap-6">
                  <span className="font-symbols -rotate-143 inline-block -translate-y-2">K</span>
                  <span className="font-architect">{sec.badge}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
