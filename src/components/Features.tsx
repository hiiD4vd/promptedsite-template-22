import React, { useState } from 'react';

interface FeaturesProps {
  onOpenDemo: (videoSrc: string, title: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenDemo }) => {
  const [promptText, setPromptText] = useState('Create an office layout');
  const [isGenerating, setIsGenerating] = useState(false);

  const sections = [
    {
      num: '1',
      eyebrow: 'Intents, Translated!',
      title: 'Augmented Sketch',
      desc: 'Transform rough sketches, spatial diagrams, and existing plans into editable floor plans.',
      video: '/video/1.mp4',
      badge: 'explore features'
    },
    {
      num: '2',
      eyebrow: 'Ideas, Shaped!',
      title: 'Adaptive Massing',
      desc: 'Convert sketches, reference images, and loose descriptions into BIM-compatible 3D massing.',
      video: '/video/2.mp4'
    },
    {
      num: '3',
      eyebrow: 'Iteration, Orchestrated!',
      title: 'Prompted Plans',
      desc: 'Generate floor plan options or fill in unfinished areas with prompts.',
      video: '/video/3.mp4',
      interactivePrompt: true
    },
    {
      num: '4',
      eyebrow: 'Options, Multiplied!',
      title: 'Agentic Refinement',
      desc: 'Mark up your intent, and PrompTedSite’s agents execute the layout edits.',
      video: '/video/4.mp4'
    },
    {
      num: '5',
      eyebrow: 'Imagination, Realized!',
      title: 'Instant Facades',
      desc: 'Explore facade options without manual modeling or scripting.',
      video: '/video/5.mp4'
    }
  ];

  const handleGenerateClick = (video: string) => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onOpenDemo(video, 'Prompted Layout Generator Demo');
    }, 400);
  };

  return (
    <div id="features" className="relative z-10 w-full">
      {sections.map((sec, idx) => (
        <section
          key={sec.num}
          aria-label={sec.title}
          className="min-h-screen flex items-center px-16 sm:px-32 lg:px-64 py-96"
        >
          {/* Card positioned on the LEFT so 3D model is visible on the center/right */}
          <div
            className="w-full bg-[#F6EDDA]/95 backdrop-blur-md p-24 sm:p-36 rounded-4 border border-[#CFC5B2] shadow-md transition-transform duration-300 hover:shadow-lg"
            style={{ maxWidth: '480px' }}
          >
            {/* Eyebrow with symbol and architectural line */}
            <div className="text-[#5B5B5B] text-18 sm:text-22 leading-0.9 -rotate-2 mb-12 flex items-center gap-8">
              <span className="font-symbols text-[#3B60C5] text-20 translate-y-2">{sec.num}</span>
              <span className="font-architect flex items-center gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4" className="w-28 h-3">
                  <path d="M0 2h40" stroke="#5b5b5b" strokeWidth="2" strokeDasharray="3 2" />
                </svg>
                {sec.eyebrow}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4" className="w-28 h-3">
                  <path d="M0 2h40" stroke="#5b5b5b" strokeWidth="2" strokeDasharray="3 2" />
                </svg>
              </span>
            </div>

            {/* Title with layered stroke */}
            <h2 className="font-f37 text-44 sm:text-56 lg:text-72 leading-1 no-kern mb-16 relative text-black">
              {sec.title}
            </h2>

            {/* Description */}
            <p className="font-graphik text-body text-16 sm:text-18 leading-1.5 text-[#555555] mb-24">
              {sec.desc}
            </p>

            {/* Interactive Prompt card if Section 3 */}
            {sec.interactivePrompt && (
              <div className="mb-24 p-16 bg-[#EDE3CE] border border-[#838383] rounded-2 flex flex-col sm:flex-row justify-between items-center gap-12 shadow-inner">
                <input
                  type="text"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  className="bg-transparent border-none text-[#373737] font-geist text-16 font-500 w-full focus:outline-none"
                  aria-label="Architectural prompt input"
                />
                <button
                  type="button"
                  onClick={() => handleGenerateClick(sec.video)}
                  disabled={isGenerating}
                  className="button-paper shrink-0 h-40 px-16 inline-flex items-center gap-8 bg-[#FDF8F0] text-[#212121] rounded-2 border border-[#A19D94] text-14 font-geist font-500 hover:bg-[#3B60C5] hover:text-white transition-all active:scale-95 cursor-pointer"
                >
                  <span className={`w-6 h-6 rounded-full ${isGenerating ? 'bg-[#3B60C5] animate-ping' : 'bg-[#E76051]'}`} />
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>
            )}

            {/* Action CTA */}
            <div className="flex items-center gap-20">
              <button
                type="button"
                onClick={() => onOpenDemo(sec.video, `${sec.title} Demo`)}
                className="button-modal h-48 rounded-2 inline-flex overflow-hidden cursor-pointer w-192 border border-[#A19D94] bg-white/70 hover:bg-white transition-all group"
              >
                <div className="w-48 h-48 border-r border-[#A19D94] shrink-0 flex items-center justify-center bg-white group-hover:bg-[#E76051] text-[#E76051] group-hover:text-white transition-colors">
                  <svg className="size-18" fill="none" viewBox="0 0 19 19">
                    <use xlinkHref="/assets/spritemap.svg#sprite-arrow" />
                  </svg>
                </div>
                <div className="w-full h-48 font-geist text-14 font-500 text-[#414141] flex items-center justify-center group-hover:text-black">
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
