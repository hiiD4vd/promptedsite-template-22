import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing">
      <div className="-mx-24">
        <div className="origin-top-right -mx-24 lg:-mx-128 relative">
          <h2 className="absolute top-0 -translate-y-[calc(100%-2px)] left-48 lg:left-200 h-32 w-152 lg:h-56 lg:w-296 flex items-center justify-center">
            <svg className="tab absolute size-full inset-0" id="pricingTab" viewBox="0 0 296.86 55.23">
              <defs>
                <pattern id="pricingBg" patternUnits="userSpaceOnUse" width="296" height="55">
                  <image href="/images/pricing.jpg" width="296" height="300" preserveAspectRatio="xMidYMid slice" x="0" y="0" />
                </pattern>
              </defs>
              <path
                d="M.68,55.09c18,0,33.61-11.42,37.64-27.55h.01C42.39,11.43,58,0,75.98,0h145.6c18,0,33.61,11.42,37.64,27.55,4.05,16.12,19.66,27.55,37.64,27.55L0,55.23"
                fill="url(#pricingBg)"
              />
            </svg>
            <span className="relative z-1 font-geist tracking-5 uppercase font-500 text-12 lg:text-16">
              Pricing
            </span>
          </h2>

          <div className="content pt-80 lg:pt-148 relative z-2 flex flex-col items-center pb-160 lg:pb-580 px-48 lg:px-180">
            <h3 className="text-24 lg:text-32 text-center font-500 font-graphik leading-1 -tracking-2 mb-48 lg:mb-88 w-300 lg:w-auto">
              Get <span className="emph">1,000 starter credits</span> when you sign up today.
            </h3>

            <div className="lg:flex w-full justify-center items-start">
              {/* Card 1: Explore */}
              <div className="card card--white text-black origin-center border border-border/30 lg:w-446 lg:-mr-10 mb-20 lg:mb-0 relative">
                <h2 className="font-graphik text-32 font-500 leading-1 -tracking-2 text-center mb-12">Explore</h2>
                <h3 className="text-[#9A9393] text-center font-graphik font-500 leading-1.1 -tracking-2 mb-32">
                  $29.99 / person / month
                </h3>
                <ul className="list font-graphik font-500 leading-1.1 -tracking-2 mb-50 text-14 lg:text-16">
                  <li>Everything in Free</li>
                  <li>3,000 credits per month</li>
                  <li>More messages</li>
                  <li>More floor plan / building generation</li>
                  <li>More export quotas</li>
                  <li>Early access to new features</li>
                </ul>
                <div className="flex justify-center">
                  <a
                    className="js-modal-button button-paper h-48 inline-flex overflow-clip cursor-pointer bg-[#FDF8F0] text-[#212121] p-6 rounded-4 relative w-200 group"
                    href="https://app.promptedsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="h-full w-36 shrink-0 flex items-center justify-center z-1 relative">
                      <svg className="size-36" fill="none" height="37" viewBox="0 0 37 37" width="37">
                        <rect fill="#3B60C5" height="37" rx="2" width="37" />
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
                      <div className="w-full text-center">Sign up</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card 2: Team (Elevated Red Paper) */}
              <div className="card card--red text-[#FEF9F1] origin-center border border-border/30 lg:w-446 lg:-mt-48 relative z-2 mb-20 lg:mb-0">
                <h2 className="font-graphik text-32 font-500 leading-1 -tracking-2 text-center mb-12">Team</h2>
                <h3 className="text-[#DECFB2] text-center font-graphik font-500 leading-1.1 -tracking-2 mb-32">
                  $59.99+ / team / month
                </h3>
                <ul className="list list--light font-graphik font-500 leading-1.1 -tracking-2 mb-50 text-14 lg:text-16">
                  <li>Everything in Explore</li>
                  <li>Pooled team usage</li>
                  <li>Member, permissions and billing management</li>
                  <li>Multiplayer collaboration</li>
                  <li>Enhanced Support, SSO and license management</li>
                </ul>
                <div className="flex justify-center">
                  <a
                    className="js-modal-button button-paper h-48 inline-flex overflow-clip cursor-pointer bg-[#FDF8F0] text-[#212121] p-6 rounded-4 relative w-216 group"
                    href="https://tally.so/r/RGBXJ4"
                    target="_blank"
                    rel="noopener noreferrer"
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
                      <div className="w-full text-center">Join waitlist</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card 3: Enterprise (Blue Paper) */}
              <div className="card card--blue text-[#FEF9F1] origin-center border border-border/30 lg:w-446 lg:-ml-10">
                <h2 className="font-graphik text-32 font-500 leading-1 -tracking-2 text-center mb-12">Enterprise</h2>
                <h3 className="text-[#DECFB2] text-center font-graphik font-500 leading-1.1 -tracking-2 mb-32">
                  Custom pricing
                </h3>
                <ul className="list list--light font-graphik font-500 leading-1.1 -tracking-2 mb-50 text-14 lg:text-16">
                  <li>Everything in Team</li>
                  <li>Custom agents and enterprise features</li>
                  <li>Enterprise-level security and controls</li>
                  <li>Expanded usage based on different use cases</li>
                  <li>24/7 Priority Support, SLAs and custom legal terms</li>
                </ul>
                <div className="flex justify-center">
                  <a
                    className="js-modal-button button-paper h-48 inline-flex overflow-clip cursor-pointer bg-[#FDF8F0] text-[#212121] p-6 rounded-4 relative w-200 group"
                    href="mailto:contact@promptedsite.com"
                  >
                    <div className="h-full w-36 shrink-0 flex items-center justify-center z-1 relative">
                      <svg className="size-36" fill="none" height="37" viewBox="0 0 37 37" width="37">
                        <rect fill="#3B60C5" height="37" rx="2" width="37" />
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
                      <div className="w-full text-center">Contact us</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center text-12 lg:text-14 font-geist font-500 -tracking-2 text-[#9A9393] mt-64">
              Free plan includes 100 credits that refresh every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
