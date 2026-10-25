import React, { useState } from 'react';

export const OpenLetter: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="container mx-auto px-16 sm:px-32 lg:px-64 my-128 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Handwritten Eyebrow */}
        <div className="font-architect text-20 text-[#8B8B8B] -rotate-2 mb-8">
          to those who shape the world
        </div>

        {/* Title */}
        <h2 className="font-f37 text-56 sm:text-72 lg:text-96 leading-1 text-black font-500 mb-48">
          An Open Letter
        </h2>

        {/* Envelope & Letter Container */}
        <div className="relative mx-auto max-w-2xl bg-[#EDE4CF] border border-[#C6BBA3] rounded-4 p-32 sm:p-48 shadow-lg text-left transition-all duration-300">
          <div className="border-b border-[#D5C9B3] pb-16 mb-24 flex items-center justify-between">
            <span className="font-architect text-16 text-[#5B5B5B]">Architectural Manifesto</span>
            <span className="font-symbols text-[#3B60C5] text-18">1</span>
          </div>

          <div className="space-y-20 font-graphik text-18 sm:text-20 text-[#373737] leading-1.6">
            <p className="font-500 text-22 text-black">To those who shape the world,</p>
            <p>
              Design was never meant to happen through buttons, commands, and rigid workflows.
            </p>
            <p>
              It begins more naturally than that, through sketches, markups, references,
              conversation, and iteration. Through the back-and-forth between instinct and judgment
              that gives architecture its life.
            </p>
            <p>
              But for too long, that flow has been interrupted, asking you to translate, redraw,
              rebuild, and re-explain instead of simply design.
            </p>

            {isExpanded && (
              <div className="space-y-20 pt-4 animate-in fade-in duration-300">
                <p>
                  We built PrompTedSite for the way this work actually happens: a place where
                  intent can be expressed more directly, and where the production burden fades into
                  the background.
                </p>
                <p>
                  So you can explore more freely, refine more quickly, and stay closer to the ideas
                  that matter most.
                </p>
                <p className="font-500 text-[#E76051]">This is for you.</p>
              </div>
            )}
          </div>

          <div className="mt-32 pt-16 border-t border-[#D5C9B3] flex justify-between items-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-14 font-geist font-500 text-[#3B60C5] hover:underline flex items-center gap-6"
            >
              {isExpanded ? 'Read less' : 'Read full letter'}
              <span className="text-12">{isExpanded ? '↑' : '↓'}</span>
            </button>
            <span className="font-architect text-14 text-[#8B8B8B]">— PrompTedSite Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};
