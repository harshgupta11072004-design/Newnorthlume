import React from "react";
import { CommenHeading, CommenSubheading } from "../commmencomponent/CommenHeading";

export default function FeaturesSection() {
  return (
    <section className="bg-black px-4 py-16 sm:py-20 lg:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
         <CommenHeading heading=" Features built for gold traders" />

        <CommenSubheading
          subheading="Everything you need to analyze gold markets, forecast trends, and trade with confidence.
"
        />

         
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:gap-3 lg:grid-cols-12">

          <div className="lg:col-span-8">
            <div className="group relative  w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0d0a] sm:rounded-[20px]">
              <div className="bgimagecss">
                    <h3 className="text-white text-[25px] mb-2"> Buy and Sell dashboard for gold traders</h3>
                    <p className="text-[#a5a5a5] text-[14px]">See real-time price trends and confident trading signals in one dashboard
</p>    

              <img
                src="/img/newpng.png"
                alt="Buy and Sell Dashboard"
                className="h-[409px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                </div>

            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="group relative">
              <div className="smallimagecss">

              <img
                src="/img/img15.jpg"
                alt="AI precision"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-4">

                 <h3 className="text-white text-[20px] mb-2">Precision Control for Your Trades.</h3>
                    <p className="text-[#a5a5a5] text-[14px]">Clear insights, forecasts, tools designed to support informed human decisions.</p>    
                </div>
                </div>

            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="group relative ">
              <div className="smallimagecss">
              
              <img
                src="/img/img14.png"
                alt="AI analysis comparison"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
               <div className="p-4">

                 <h3 className="text-white text-[20px] mb-2">Technical vs Fundamental Analysis</h3>
                    <p className="text-[#a5a5a5] text-[14px]">Compare pure technical setups with economic news impact on Gold in real time.
</p>    
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-8">

            
             <div className="group relative  w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0d0a] sm:rounded-[20px]">
              <div className="bgimagecss">
                    <h3 className="text-white text-[25px] mb-2">Buy and Sell dashboard for gold traders</h3>
                    <p className="text-[#a5a5a5] text-[14px]">See real-time price trends and confident trading signals in one dashboard
</p>    

              <img
                src="/img/newpng111.png"
                alt="Buy and Sell dashboard"
                className="h-[409px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}