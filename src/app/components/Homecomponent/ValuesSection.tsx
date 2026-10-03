import React from "react";
import { CommenHeading, CommenSubheading } from "../commmencomponent/CommenHeading";
// import { Lightbulb, Sparkles, Rocket, TrendingUp, Brain } from "lucide-react";

const values = [
  {
    title: "Accuracy first",
    description:
      "We prioritize reliable data and transparent analysis so every insight is grounded in real market behavior.",
    // icon: Lightbulb,
    icon: '/img/icon/icon6.svg'
  },
  {
    title: "Clarity over complexity",
    description:
      "Markets are complex. Our job is to simplify them without losing meaning or precision.",
    // icon: Sparkles,
    icon: '/img/icon/icon5.svg'
  },
  {
    title: "Transparency you can trust",
    description:
      "Every signal, forecast, and recommendation is explainable. No black boxes. No blind decisions.",
    // icon: Sparkles,
    icon: '/img/icon/icon4.svg'
  },
  {
    title: "Speed with purpose",
    description:
      "Fast insights matter, but only when they're meaningful. We deliver both without compromise.",
    // icon: Rocket,
    icon: '/img/icon/icon3.svg'
  },
  {
    title: "Built for traders",
    description:
      "Every feature is designed around how traders actually work, think, and make decisions.",
    // icon: TrendingUp,
    icon: '/img/icon/icon2.svg'
  },
  {
    title: "Continuous improvement",
    description:
      "Our strategy models evolve consistently to stay aligned with changing Gold markets..",
    // icon: Brain,
    icon: '/img/icon/icon1.svg'
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-black px-4 py-16 sm:py-20 lg:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
            <CommenHeading heading=" The principles behind our platform" />
            <CommenSubheading subheading="Everything we build is guided by clarity, accuracy, and trust in decision-making." />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => {
            // const Icon = item.icon;

            return (
              <div
                key={index}
                className="value-card group relative min-h-[240px] overflow-hidden rounded-[20px] border border-white/10 bg-[#050505] p-7"
              >
                <div className="value-bg absolute inset-0 z-0" />

                <div className="absolute inset-0 z-[1] bg-black/30" />

                <div className="relative z-10  h-full flex-col justify-between">

                 <div className="value-icon-wrap mb-6">
                    <img src={item.icon} alt="" />
            </div>

                  {/* Text */}
                  <div className="mt-3">
                    <h3 className="text-[18px] font-medium tracking-tight text-white sm:text-[20px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[380px] text-sm leading-5 text-white/55 sm:text-[14px]">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}