import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('promptedsite_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('promptedsite_cookie_consent', accepted ? 'accepted' : 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 left-16 z-50 transition-opacity duration-300">
      <div className="bg-white/95 backdrop-blur-sm border border-[#9C9C9C] rounded-2 p-12 shadow-md flex items-center gap-16 font-geist text-12 text-[#414141]">
        <div>
          This website uses cookies.{' '}
          <a href="/#faqs" className="underline hover:text-[#3B60C5] transition-colors">
            Learn more.
          </a>
        </div>
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => handleConsent(true)}
            className="flex items-center gap-6 bg-[#3B60C5] text-white px-12 py-6 rounded-2 font-500 hover:bg-[#2F4FA8] transition-colors"
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 12 12" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6l3 3 5-5" />
            </svg>
            Accept
          </button>
          <button
            type="button"
            onClick={() => handleConsent(false)}
            className="flex items-center gap-6 bg-[#E76051] text-white px-12 py-6 rounded-2 font-500 hover:bg-[#D55042] transition-colors"
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 12 12" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l6 6m0-6l-6 6" />
            </svg>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};
