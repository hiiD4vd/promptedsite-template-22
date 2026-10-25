import React, { useState } from 'react';

export const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs">
      <div className="-mx-24 -mt-80 lg:-mt-320 relative z-2">
        <div className="origin-top-left -mb-128 -mx-128 relative">
          <h2 className="absolute top-0 -translate-y-[calc(100%-2px)] left-320 lg:left-512 h-32 w-152 lg:h-56 lg:w-296 flex items-center justify-center">
            <svg className="tab absolute size-full inset-0" id="faqsTab" viewBox="0 0 296.86 55.23">
              <defs>
                <pattern id="faqsBg" patternUnits="userSpaceOnUse" width="296" height="55">
                  <image href="/images/faqs.jpg" width="296" height="300" preserveAspectRatio="xMidYMid slice" x="0" y="0" />
                </pattern>
              </defs>
              <path
                d="M.68,55.09c18,0,33.61-11.42,37.64-27.55h.01C42.39,11.43,58,0,75.98,0h145.6c18,0,33.61,11.42,37.64,27.55,4.05,16.12,19.66,27.55,37.64,27.55L0,55.23"
                fill="url(#faqsBg)"
              />
            </svg>
            <span className="relative z-1 font-geist tracking-5 uppercase font-500 text-12 lg:text-16">
              FAQs
            </span>
          </h2>

          <div className="content pt-80 lg:pt-256 pb-148 lg:pb-256 px-48 lg:px-168 relative z-2 flex justify-center">
            <div className="flex-grid lg:w-10/12 xxlg:w-8/12">
              {/* Left Column */}
              <div className="w-full lg:w-4/10 mb-48 lg:mb-0">
                <div className="mb-16 -rotate-2">
                  <span className="font-architect text-24 leading-0.9 tracking-2 inline-block">
                    <div className="origin-center transform-gpu w-full h-px bg-[#5b5b5b]"></div>
                    need help?
                    <div className="origin-center transform-gpu w-full h-px bg-[#5b5b5b]"></div>
                  </span>
                </div>
                <h3 className="font-f37 text-56 lg:text-102 leading-0.9 mb-36">
                  Frequently Asked Questions
                </h3>
                <a
                  className="js-modal-button button-paper h-48 inline-flex overflow-clip cursor-pointer bg-[#FDF8F0] text-[#212121] p-6 rounded-4 relative w-244 group"
                  href="mailto:contact@promptedsite.com"
                >
                  <div className="h-full w-36 shrink-0 flex items-center justify-center z-1 relative">
                    <svg className="size-36" fill="none" height="37" viewBox="0 0 37 37" width="37">
                      <rect fill="#EC633D" height="37" rx="2" width="37" />
                      <path d="M21 25L27 19L21 13" stroke="#EADFC9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <g>
                        <circle cx="4" cy="19" fill="#D9D9D9" fillOpacity="0" r="1" />
                        <circle cx="8" cy="19" fill="#D9D9D9" fillOpacity="0.2" r="1" />
                        <circle cx="12" cy="19" fill="#D9D9D9" fillOpacity="0.4" r="1" />
                        <circle cx="16" cy="19" fill="#D9D9D9" fillOpacity="0.6" r="1" />
                        <circle cx="20" cy="19" fill="#D9D9D9" r="1" />
                      </g>
                    </svg>
                  </div>
                  <div className="font-geist text-16 font-500 -tracking-2 leading-1 flex w-full items-center justify-center relative z-1 h-full">
                    <div className="w-full text-center">contact@promptedsite.com</div>
                  </div>
                </a>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-6/10">
                {/* Item 0 */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(0)}
                  aria-expanded={openIndex === 0}
                  className="border-b border-dashed border-[#313131] py-10 lg:py-22 w-full font-graphik text-14 lg:text-24 -tracking-2 leading-1.2 font-500 flex justify-between gap-16 items-center text-left cursor-pointer"
                >
                  How does PrompTedSite differ from generic AI or conventional design tools?
                  <span className={`accordion-button rounded-2 transition-transform duration-500 ${openIndex === 0 ? 'rotate-180' : ''}`}>
                    <svg className="w-12 h-10" fill="none" viewBox="0 0 12 10">
                      <path d="M1 3L6 8L11 3" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {openIndex === 0 && (
                  <div className="text-16 font-graphik leading-1.4 -tracking-2 pt-16 lg:pt-22 pb-16 animate-in fade-in duration-200">
                    <p className="mb-16">
                      PrompTedSite is built natively for architectural workflows. Instead of producing flat 2D hallucinations, it generates coordinate-accurate, editable 2D floor plans, spatial diagrams, and BIM-ready 3D massing directly synced with architectural logic.
                    </p>
                    <ul className="list-disc list-outside ml-24 space-y-8">
                      <li>
                        <strong className="font-500">Spatial Intelligence</strong>: Generates geometry constrained by building codes, circulation rules, and structural logic.
                      </li>
                      <li>
                        <strong className="font-500">Enhancing Conventional Workflows</strong>: Accepts natural inputs—sketches, redlines, and texts—to generate design documentation in real time, ready for Autodesk Revit and Rhino export.
                      </li>
                    </ul>
                  </div>
                )}

                {/* Item 1 */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(1)}
                  aria-expanded={openIndex === 1}
                  className="border-b border-dashed border-[#313131] py-10 lg:py-22 w-full font-graphik text-14 lg:text-24 -tracking-2 leading-1.2 font-500 flex justify-between gap-16 items-center text-left cursor-pointer"
                >
                  How does it work with my BIM/CAD workflow?
                  <span className={`accordion-button rounded-2 transition-transform duration-500 ${openIndex === 1 ? 'rotate-180' : ''}`}>
                    <svg className="w-12 h-10" fill="none" viewBox="0 0 12 10">
                      <path d="M1 3L6 8L11 3" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {openIndex === 1 && (
                  <div className="text-16 font-graphik leading-1.4 -tracking-2 pt-16 lg:pt-22 pb-16 animate-in fade-in duration-200">
                    <p>
                      PrompTedSite is an intelligent canvas that replaces the traditional hundred-button toolset with a workflow that mirrors how design studios actually work: sketching, marking up, and pinning ideas.
                      <br /><br />
                      It supports two modes: <strong className="font-500">Ideate</strong>, where a rough sketch or verbal prompt becomes an immediate entry point for architectural drawings; and <strong className="font-500">Iterate</strong>, where you refine concepts through redlines and markups while the system updates geometry and documentation in real-time. Export high-fidelity work directly into Autodesk Revit once your design is set.
                    </p>
                  </div>
                )}

                {/* Item 2 */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(2)}
                  aria-expanded={openIndex === 2}
                  className="border-b border-dashed border-[#313131] py-10 lg:py-22 w-full font-graphik text-14 lg:text-24 -tracking-2 leading-1.2 font-500 flex justify-between gap-16 items-center text-left cursor-pointer"
                >
                  How accurate are the Agent's outputs, and do I need to learn complex AI prompting?
                  <span className={`accordion-button rounded-2 transition-transform duration-500 ${openIndex === 2 ? 'rotate-180' : ''}`}>
                    <svg className="w-12 h-10" fill="none" viewBox="0 0 12 10">
                      <path d="M1 3L6 8L11 3" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {openIndex === 2 && (
                  <div className="text-16 font-graphik leading-1.4 -tracking-2 pt-16 lg:pt-22 pb-16 animate-in fade-in duration-200">
                    <p>
                      PrompTedSite is built on a "Human-in-the-Loop" philosophy. You don't need to be a "prompt engineer"—if you know how to redline a drawing or describe a change to a colleague, you know how to use PrompTedSite. You have full control to navigate tradeoffs between aesthetics, function, and client needs, ensuring the output is always a precision reflection of your intent.
                    </p>
                  </div>
                )}

                {/* Item 3 */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(3)}
                  aria-expanded={openIndex === 3}
                  className="border-b border-dashed border-[#313131] py-10 lg:py-22 w-full font-graphik text-14 lg:text-24 -tracking-2 leading-1.2 font-500 flex justify-between gap-16 items-center text-left cursor-pointer"
                >
                  Who owns my design IP, and is my data used to train your models?
                  <span className={`accordion-button rounded-2 transition-transform duration-500 ${openIndex === 3 ? 'rotate-180' : ''}`}>
                    <svg className="w-12 h-10" fill="none" viewBox="0 0 12 10">
                      <path d="M1 3L6 8L11 3" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {openIndex === 3 && (
                  <div className="text-16 font-graphik leading-1.4 -tracking-2 pt-16 lg:pt-22 pb-16 animate-in fade-in duration-200">
                    <p>
                      You own your designs 100%. All outputs generated or refined within the platform are your intellectual property. We do not use your proprietary sketches, prompts, or project models to train our models. For Enterprise partners, we offer additional security protocols, custom-trained models, and zero-data retention.
                    </p>
                  </div>
                )}

                {/* Item 4 */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(4)}
                  aria-expanded={openIndex === 4}
                  className="border-b border-dashed border-[#313131] py-10 lg:py-22 w-full font-graphik text-14 lg:text-24 -tracking-2 leading-1.2 font-500 flex justify-between gap-16 items-center text-left cursor-pointer"
                >
                  How do credits work? Am I charged for every click?
                  <span className={`accordion-button rounded-2 transition-transform duration-500 ${openIndex === 4 ? 'rotate-180' : ''}`}>
                    <svg className="w-12 h-10" fill="none" viewBox="0 0 12 10">
                      <path d="M1 3L6 8L11 3" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {openIndex === 4 && (
                  <div className="text-16 font-graphik leading-1.4 -tracking-2 pt-16 lg:pt-22 pb-16 animate-in fade-in duration-200">
                    <p className="mb-16">
                      We believe in charging for professional output, not curiosity. You aren't charged for navigation, sketching, or using the interface; credits are only consumed when the Agent performs high-value tasks:
                    </p>
                    <ul className="list-disc list-outside ml-24 space-y-6">
                      <li><strong className="font-500">Image Generation:</strong> 10 credits per image</li>
                      <li><strong className="font-500">Agent Chats:</strong> 10 credits per turn</li>
                      <li><strong className="font-500">Agent Edits:</strong> 25 credits per turn</li>
                      <li><strong className="font-500">Floor Plan Generation:</strong> typically 15-150 credits, based on size and complexity</li>
                      <li><strong className="font-500">3D Massing Generation:</strong> typically 10-120 credits, based on size and complexity</li>
                      <li><strong className="font-500">Revit Exports:</strong> typically 20-240 credits, based on size and complexity</li>
                    </ul>
                    <p className="mt-16">
                      To get started, every new user receives <strong className="font-500">1,000 free starter credits</strong> to experience the power of PrompTedSite firsthand.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
