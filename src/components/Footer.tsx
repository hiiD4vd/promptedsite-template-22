import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer relative z-10 w-full min-h-[420px] bg-[#162758] text-white overflow-hidden flex flex-col justify-between p-32 sm:p-64 mt-160">
      {/* Giant Embossed Watermark in background */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-f37 text-[16vw] font-700 tracking-tighter text-white whitespace-nowrap">
          PrompTedSite
        </span>
      </div>

      {/* Top row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-32">
        <div className="md:col-span-6">
          <h2 className="font-graphik text-28 sm:text-36 font-500 max-w-md leading-1.2 text-[#F6EDDA]">
            Architectural design at the speed of thought, not software.
          </h2>
        </div>

        <div className="md:col-span-3">
          <div className="text-[#E76051] font-geist text-14 font-500 mb-16">Quick links</div>
          <ul className="space-y-8 font-geist text-14 text-[#C9D6F0]">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-white transition-colors">
                Legal & FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[#E76051] font-geist text-14 font-500 mb-16">Connect</div>
          <ul className="space-y-8 font-geist text-14 text-[#C9D6F0]">
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                X / Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:contact@promptedsite.com" className="hover:text-white transition-colors">
                contact@promptedsite.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 mt-32 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-16 font-geist text-12 text-[#9AB3E6]">
        <div>Copyright ©2026 PrompTedSite. All rights reserved.</div>
        <div className="flex gap-24">
          <a href="#terms" className="hover:underline">
            Terms
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};
