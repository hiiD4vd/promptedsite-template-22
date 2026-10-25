import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coords, setCoords] = useState({ x: '0.00', y: '0.00' });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = (event.clientX / window.innerWidth).toFixed(2);
      const normalizedY = (event.clientY / window.innerHeight).toFixed(2);
      setCoords({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#faqs' }
  ];

  return (
    <>
      {/* Mobile Top Header */}
      <div className="container fixed top-0 left-0 pt-16 w-full px-16 z-30 lg:hidden sm:px-48">
        <div className="shadow bg-white/90 backdrop-blur-sm border border-[#9C9C9C] rounded-2 p-6 pl-8">
          <div className="flex justify-between items-center">
            <a href="/" className="inline-flex items-center">
              <svg className="h-26 w-160">
                <use xlinkHref="/assets/spritemap.svg#sprite-illoca" />
              </svg>
            </a>
            <div className="flex items-center gap-12">
              <a
                href="https://app.promptedsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-12 text-12 sm:text-10 font-400 font-geist bg-primary text-white leading-1 rounded-4 transition-transform active:scale-95"
              >
                Try for free
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center gap-8 relative h-20 px-4 text-[#212121]"
                aria-label="Toggle mobile menu"
              >
                <span className="font-geist text-12 font-500 leading-1 -tracking-2">
                  {isMobileMenuOpen ? 'Close' : 'Menu'}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-20 relative z-2"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.375 0C19.72 0 20 .28 20 .625V19.375C20 19.72 19.72 20 19.375 20H.625C.28 20 0 19.72 0 19.375V.625C0 .28.28 0 .625 0H19.375ZM1.875 13.75C1.53 13.75 1.25 14.03 1.25 14.375V18.125C1.25 18.47 1.53 18.75 1.875 18.75H18.125C18.47 18.75 18.75 18.47 18.75 18.125V14.375C18.75 14.03 18.47 13.75 18.125 13.75H1.875ZM1.875 7.5C1.53 7.5 1.25 7.78 1.25 8.125V11.875C1.25 12.22 1.53 12.5 1.875 12.5H18.125C18.47 12.5 18.75 12.22 18.75 11.875V8.125C18.75 7.78 18.47 7.5 18.125 7.5H1.875ZM1.875 1.25C1.53 1.25 1.25 1.53 1.25 1.875V5.625C1.25 5.97 1.53 6.25 1.875 6.25H18.125C18.47 6.25 18.75 5.97 18.75 5.625V1.875C18.75 1.53 18.47 1.25 18.125 1.25H1.875Z"
                    fill="#3B60C5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Drawer Links */}
          {isMobileMenuOpen && (
            <div className="pt-24 pb-16 flex flex-col items-center">
              <ul className="flex flex-col gap-16 font-graphik text-[#373737] text-24 font-500 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:text-[#3B60C5] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Centered Navbar */}
      <nav className="hidden lg:block z-30 fixed top-16 left-1/2 -translate-x-1/2 w-706 h-64 rounded-2">
        <svg
          className="absolute inset-0 z-10 pointer-events-none"
          viewBox="0 0 706 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="705" height="63" rx="2" stroke="#9C9C9C" className="svg" />
        </svg>
        <div className="absolute size-full inset-0 bg-white rounded-2 flex items-center justify-between pr-8 pl-12 shadow-sm">
          <a href="/" className="flex gap-12 items-center" aria-label="PrompTedSite Home">
            <svg className="size-40">
              <use xlinkHref="/assets/spritemap.svg#sprite-logo" />
            </svg>
            <svg className="h-26 w-160">
              <use xlinkHref="/assets/spritemap.svg#sprite-illoca" />
            </svg>
          </a>

          <ul className="flex gap-24 font-geist font-500 leading-1 -tracking-2 text-[#414141]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className="relative inline-block transform-gpu translate-y-2 group py-4"
                  href={link.href}
                >
                  <span className="inline-block overflow-hidden">
                    <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-full">
                      <span>{link.name}</span>
                      <span className="absolute size-full inset-0 top-full text-[#3B60C5]">
                        {link.name}
                      </span>
                    </span>
                  </span>
                  <span className="clip opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="underline" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            className="button-modal | h-48 inline-flex overflow-clip cursor-pointer bg-primary text-[#FFFBF3] p-6 rounded-4 relative w-184 transition-transform active:scale-95"
            href="https://app.promptedsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-full w-36 shrink-0 flex items-center justify-center z-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                className="size-36"
                viewBox="0 0 37 37"
                fill="none"
              >
                <rect width="37" height="37" rx="2" fill="#EC633D" />
                <rect
                  x="9.5"
                  y="8"
                  width="20"
                  height="1"
                  rx="0.2"
                  transform="rotate(90 9.5 8)"
                  fill="white"
                  fillOpacity="0.4"
                />
                <path
                  d="M28 28C28 18.06 19.94 10 10 10"
                  stroke="white"
                  strokeOpacity="0.4"
                  strokeDasharray="1 1"
                />
                <path
                  d="M32 28.8c0 .11-.09.2-.2.2L9 29l0-2 22.8 0c.11 0 .2.09.2.2v1.6z"
                  fill="#F6EDDA"
                />
              </svg>
            </div>
            <div className="font-geist text-16 font-500 -tracking-2 leading-1 flex w-full items-center justify-center relative z-1 h-full">
              <span className="w-full text-center">Try for free</span>
            </div>
          </a>
        </div>
      </nav>

      {/* Floating Mouse Coordinates */}
      <div className="coords | fixed top-37 left-32 z-30 font-architect text-12 leading-1 hidden lg:block tabular-nums transition-colors duration-200">
        <div>
          <span>X</span> {coords.x}
        </div>
        <div>
          <span>Y</span> {coords.y}
        </div>
      </div>

      {/* Direct Contact Email */}
      <div className="email | fixed top-42 right-32 z-30 font-architect text-18 leading-1 hidden lg:block transition-colors duration-200">
        <a href="mailto:contact@promptedsite.com" className="hover:underline">
          contact@promptedsite.com
        </a>
      </div>
    </>
  );
};
