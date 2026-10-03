// import react from "react";
// import {
//   CommenHeading,
//   CommenSubheading,
// } from "../commmencomponent/CommenHeading";
// // import CommenHeading from "../commmencomponent/CommenHeading";

// export default function PurposeSection() {
//   return (
//     <>
//       <div className="lg:px-6 px-4 py-16 sm:py-20 ">
//         <div className="mx-auto max-w-6xl">
//           <CommenHeading heading="Why choose our platform" />
//           <CommenSubheading subheading="Built specifically for gold traders who need clarity, speed, and confidence." />
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="col-span-1">
//                     <div className="bg-[#f5be090d] "></div>
//                 </div>
//                 <div className="col-span-1"></div>
//                 <div className="col-span-1"></div>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }


import react from "react";
import {
  CommenHeading,
  CommenSubheading,
} from "../commmencomponent/CommenHeading";

export default function PurposeSection() {
  return (
    <section className="lg:px-6 px-4 py-16 sm:py-20 bg-black">
      <div className="mx-auto max-w-6xl">


        <div className="text-center">
        <CommenHeading heading="Why choose our platform" />
        <CommenSubheading
          subheading="Built specifically for gold traders who need clarity, speed, and confidence."
          />
          </div>

        {/* 3 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">

          {/* ================= LEFT GRID ================= */}
          <div className="flex flex-col gap-4">

            {/* Card 1 */}
            <div className="rounded-[28px] bg-[#f5be090d] border border-[#f5be0915] p-6 min-h-[184px] flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full bg-[#090a05] flex items-center justify-center text-white">
                  <span className="text-xl">◷</span>
                </div>
              </div>

              <div>
                <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight max-w-[260px]">
                  Real-time gold
                  <br />
                  market tracking
                </h3>

                <p className="text-white/50 text-sm sm:text-base mt-5 leading-relaxed">
                  Live prices and volatility updates so you always see what
                  the market is doing now.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-[28px] bg-[#f5be090d] border border-[#f5be0915] p-6 min-h-[184px] flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full bg-[#090a05] flex items-center justify-center text-white">
                  <span className="text-xl">▣</span>
                </div>
              </div>

              <div>
                <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight max-w-[280px]">
                  Automatic pattern
                  <br />
                  recognition
                </h3>

                <p className="text-white/50 text-sm sm:text-base mt-5 leading-relaxed">
                  Instantly identify breakouts, consolidations, and momentum
                  without manual analysis.
                </p>
              </div>
            </div>

          </div>


          {/* ================= CENTER GRID ================= */}
          <div className="rounded-[28px] bg-[#f5be090d] border border-[#f5be0915] p-2">

            {/* Summary */}
            <div className="rounded-[22px] bg-gradient-to-br from-[#fff15c] via-[#f6c20d] to-[#efb500] min-h-[300px] overflow-hidden relative">

              <h3 className="text-black text-2xl font-medium text-center pt-5">
                Summary
              </h3>

              <p className="text-black/50 text-sm text-center mt-6">
                NEUTRAL
              </p>

              {/* Gauge */}
              <div className="relative mt-3 mx-auto w-[260px] h-[145px] overflow-hidden">

                {/* Gauge background */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[260px] h-[260px] rounded-full border-[14px] border-black/30" />

                {/* Gauge active */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-0 w-[260px] h-[260px] rounded-full border-[14px] border-transparent border-t-black/80 border-r-black/80 rotate-[15deg]"
                />

                {/* Needle */}
                <div className="absolute left-1/2 bottom-0 w-[3px] h-[125px] bg-black origin-bottom rotate-[40deg]" />

                {/* Center */}
                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black" />

                {/* Buy label */}
                <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-2 rounded-full">
                  Buy
                </div>

                {/* Labels */}
                <span className="absolute left-[-10px] bottom-2 text-black/50 text-sm">
                  SELL
                </span>

                <span className="absolute right-[-10px] bottom-2 text-black/50 text-sm">
                  BUY
                </span>
              </div>

              <div className="absolute left-5 bottom-5 text-black/50 text-xs">
                STRONG
                <br />
                SELL
              </div>

              <div className="absolute right-5 bottom-5 text-black/50 text-xs">
                STRONG
                <br />
                BUY
              </div>
            </div>


            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-2 mt-2">

              {/* Balance */}
              <div className="bg-[#10110c] rounded-[18px] p-4 min-h-[150px]">
                <p className="text-white/40 text-xs">
                  Current Balance
                </p>

                <h4 className="text-white text-lg font-medium mt-1">
                  17,435
                  <span className="text-white/30 text-xs ml-1">
                    USDT
                  </span>
                </h4>

                <div className="mt-7">
                  <div className="flex justify-between text-[10px] text-white/30">
                    <span>Marketcap +13%</span>
                    <span>Volume +7%</span>
                  </div>

                  <div className="flex gap-[2px] mt-2">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-5 flex-1 ${
                          i < 8
                            ? "bg-[#f6c20d]"
                            : i < 15
                            ? "bg-green-500"
                            : "bg-pink-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>


              {/* Ethereum */}
              <div className="bg-[#10110c] rounded-[18px] p-4 min-h-[150px]">
                <div className="flex justify-between">
                  <div>
                    <p className="text-white/40 text-xs">
                      Ethereum
                    </p>

                    <p className="text-red-500 text-xs mt-1">
                      ↓ 7.8%
                    </p>
                  </div>

                  <span className="text-white/30 text-xs">
                    1M
                  </span>
                </div>

                {/* Fake chart */}
                <div className="relative h-16 mt-5">
                  <svg
                    viewBox="0 0 200 60"
                    className="w-full h-full"
                    fill="none"
                  >
                    <path
                      d="M0 15 C20 25, 25 12, 45 28 S70 20, 85 35 S110 22, 125 40 S150 35, 170 50 S190 42, 200 55"
                      stroke="#d7a900"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>


          {/* ================= RIGHT GRID ================= */}
          <div className="flex flex-col gap-4">

            {/* Card 1 */}
            <div className="rounded-[28px] bg-[#f5be090d] border border-[#f5be0915] p-6 min-h-[184px] flex flex-col justify-between">

              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full bg-[#090a05] flex items-center justify-center text-white">
                  <span className="text-xl">✧</span>
                </div>
              </div>

              <div>
                <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight max-w-[280px]">
                  Data-Backed Forecasting
                  <br />
                
                </h3>

                <p className="text-white/50 text-sm sm:text-base mt-5 leading-relaxed">
                  High-accuracy models trained specifically on gold price
                  behavior and market patterns.
                </p>
              </div>
            </div>


            {/* Card 2 */}
            <div className="rounded-[28px] bg-[#f5be090d] border border-[#f5be0915] p-6 min-h-[184px] flex flex-col justify-between">

              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full bg-[#090a05] flex items-center justify-center text-white">
                  <span className="text-xl">♧</span>
                </div>
              </div>

              <div>
                <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight max-w-[280px]">
                  Smart alerts and
                  <br />
                  dashboards
                </h3>

                <p className="text-white/50 text-sm sm:text-base mt-5 leading-relaxed">
                  Custom alerts and clear dashboards that help you act quickly
                  and confidently.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}