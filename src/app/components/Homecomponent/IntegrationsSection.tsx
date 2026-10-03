import React from "react";
import { CommenHeading, CommenSubheading } from "../commmencomponent/CommenHeading";

const tools = [
  "/img/testimonail_icon/icon1.svg",
  "/img/testimonail_icon/icon2.svg",
  "/img/testimonail_icon/icon3.svg",
  "/img/testimonail_icon/icon4.svg",
  "/img/testimonail_icon/icon5.svg",
  "/img/testimonail_icon/icon6.svg",
  "/img/testimonail_icon/icon1.svg",
  "/img/testimonail_icon/icon7.svg",
  "/img/testimonail_icon/icon1.svg",
  "/img/testimonail_icon/icon9.svg",
];

const rowOne = [...tools, ...tools, ...tools];
const rowTwo = [...tools.slice().reverse(), ...tools, ...tools];

export default function IntegrationsSection() {
  return (
    <section className="overflow-hidden bg-black px-4 py-20 sm:py-24 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <CommenHeading  heading="Connect your tools" />
            <CommenSubheading subheading="Connect your trading tools, data sources, alerts without changing
            your workflow." />
        </div>
        <div className="relative mt-4 h-[300px] sm:h-[330px]">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent sm:w-32" />
          <div className="absolute left-0 top-[45px] z-[1] w-full overflow-hidden">
            <div className="marquee marquee-left flex w-max items-center gap-5">

              {rowOne.map((tool, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center justify-center "
                >
                  <img
                    src={tool}
                    alt="Integration tool"
                    className="h-20 w-20 object-contain"
                  />
                </div>
              ))}

            </div>
          </div>


          <div className="absolute left-0 top-[145px] z-[1] w-full overflow-hidden">
            <div className="marquee marquee-right flex w-max items-center gap-5">

              {rowTwo.map((tool, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center justify-center  sm:h-20 sm:w-20"
                >
                  <img
                    src={tool}
                    alt="Integration tool"
                    className="h-20 w-20 object-contain"
                  />
                </div>
              ))}

            </div>
          </div>


          {/* ================= CENTER LOGO ================= */}
          <div className="absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2">

            <div className="absolute inset-[-35px] rounded-full bg-[#ffd21a]/20 blur-3xl" />

            <div className="relative flex h-48 w-48 -mt-28">

              {/* <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,210,26,0.15),transparent_60%)]" /> */}

              <img
                src="/img/centerimg111.png"
                alt="Goldify"
                className="relative z-10 h-40 w-40 object-contain sm:h-56 sm:w-56"
              />

            </div>
          </div>

        </div>


        {/* Bottom Label */}
        {/* <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-white/20" />

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
            Trusted by leading platforms
          </span>

          <span className="h-px w-10 bg-white/20" />
        </div> */}

      </div>
    </section>
  );
}