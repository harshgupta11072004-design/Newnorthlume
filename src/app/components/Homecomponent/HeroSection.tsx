import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[800px] w-full object-cover videocss !rounded-[0px]"
        >
          <source src="/img/hero_bg_mp4.mp4" type="video/mp4" />
        </video>
        <div className="hero-cover_header !rounded-[0px]"></div>
        <div className="hero-cover-two !rounded-[0px]"></div>
        <div className="hero-video-shadow !rounded-[0px]"></div>
        <div className="absolute inset-0 z-50">
          <div className="mx-auto flex max-w-[850px] flex-col items-center pt-[245px] text-center">
            <div className="mb-7 flex items-center gap-2 rounded-md border border-white/40 bg-black/30 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <span className="text-yellow-400">★</span>
              <span>WE ANALYZE YOUR DATA</span>
            </div>

            <h1 className="max-w-[780px] text-5xl font-medium leading-[1.05] tracking-[-2px] sm:text-6xl md:text-[50px]">
              Smarter gold analysis for

              <br />
              faster, confident decisions
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] font-normal leading-7 text-white/60">
              Harness data-driven insights to analyze XAUUSD market trends, demand sentiment, and optimize your trading strategy all in one powerful platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="" className="text-tg linkctncommen  text-black">
                <span className="text-lg text-black ">✧</span>
                Start Today
              </a>
              <button className="flex min-w-[250px] items-center justify-center gap-3 rounded-full border border-yellow-500/30 bg-black/40 px-8 py-5 text-lg font-semibold backdrop-blur-md transition hover:border-yellow-400 hover:bg-yellow-500/10">
                Explore Features
                <span className="text-xl">↗</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-main-wrap z-[4] relative">
          <div className="w-[1200px] mx-auto -mt-24 ">
            <img src="/img/herocenter_img.png" alt="" className="hero-main" />
          </div>
        </div>

        <div className="hero-bg-shadow"></div>
        <div className="hero-bg-cover"></div>


        <div className="leftimgherosection">
          <img src="/img/leftimgdollerimg1.png" alt="" className="mt-8 w-80 h-80" />
        </div>
        <div className="rightimg">
          <img src="/img/leftimgdollerimg2.png" alt="" className="mt-8 w-80 h-80" />
        </div>
      </div>
    </section>
  );
}
