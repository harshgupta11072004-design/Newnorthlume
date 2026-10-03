import Image from "next/image";
import React from "react";
import Commenbutton from "../commmencomponent/Commenbutton";
import { CommenHeading, CommenSubheading } from "../commmencomponent/CommenHeading";

const steps = [
  {
    number: "1.",
    title: "Connect your data",
    description:
      "Import live gold prices, market charts, and historical datasets with one click.",
    image: "/img/stikyimg1.jpeg",
  },
  {
    number: "2.",
    title: "Analyze The Gold Market",
    description:
      "Track price trends, volatility shifts, momentum, and key support/resistance zones.",
    image: "/img/stikyimg2.jpeg",
  },
  {
    number: "3.",
    title: "Connect seamlessly with your trading tools",
    description:
      "Integrate your existing platforms, data sources, and alerts without disrupting your workflow.",
    image: "/img/stikyimg3.jpeg",
  },
  
];

export default function Processsection() {
  return (
    <section className="bg-black px-4 py-16 sm:py-20 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8 lg:px-12">
              <div className="relative rounded-md">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[400px] w-full object-cover videocss"
                >
                  <source src="/img/hero_bg_mp4.mp4" type="video/mp4" />
                </video>
                <div className="hero-cover"></div>
                <div className="hero-cover-two"></div>
                <div className="hero-video-shadow"></div>

                <div className="textvideo">
                  <h2 className="mb-2 text-[18px]">Ready to get started?</h2>
                  <p className="text-[12px] font-normal">
                    Turn gold market data into clear insights and confident
                    trading decisions.
                  </p>

                  <img src="/img/bullimg.png" alt="" className="mt-8" />

                  <div className="mt-8">
                    <Commenbutton />
                  </div>
                </div>
              </div>
            </div>
          </div>


           <div className="lg:col-span-1"></div>
          <div className="lg:col-span-7">
            <div className="px-16">
            <div className="mb-12">
              <CommenHeading heading="How the platform works" />
              <CommenSubheading subheading="From raw gold market data to clear, actionable insights in
                minutes." />
             
            </div>
            <div className="space-y-20 sm:space-y-24">
              {steps.map((step, index) => (
                <div key={index}>
                  {/* Step Heading */}
                  <div className="mb-6">
                    <h3 className="
                    text-2xl font-normal mb-1 text-white
                    ">
                      {step.number} {step.title}
                    </h3>

                    <p className="mt-1 max-w-3xl text-sm leading-6 text-[#a5a5a5] text-[14px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#080807]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>





          </div>
        </div>
      </div>
    </section>
  );
}
