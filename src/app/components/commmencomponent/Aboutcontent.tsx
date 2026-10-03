import React from "react";
import { CommenHeading, CommenSubheading } from "./CommenHeading";

/* ---------- DATA (yahan se text edit kar sakte ho) ---------- */

const steps = [
  {
    no: "01",
    title: "Learn Market Structure",
    text: "Understand how markets move, why trends form, and how professional traders analyze price action before making decisions.",
  },
  {
    no: "02",
    title: "Build A Trading System",
    text: "Create clear rules, risk management frameworks, and repeatable processes that remove emotional decision-making.",
  },
  {
    no: "03",
    title: "Execute With Discipline",
    text: "Follow your strategy consistently, manage risk effectively, and focus on long-term performance instead of short-term outcomes.",
  },
];

const missionVision = [
  {
    label: "Our Mission",
    title: "Bring Structure and Discipline to Trading",
    paras: [
      "Our mission is to help traders move away from randomness, emotional decision-making, and shortcut-driven behavior. We focus on teaching structured thinking, risk awareness, and rule-based execution across markets.",
      "Every product, system, and educational program at Northloume. is built to reinforce consistency, accountability, and long-term survival in the markets.",
    ],
  },
  {
    label: "Our Vision",
    title: "Build a Professional Trading Ecosystem",
    paras: [
      "Our vision is to create a comprehensive ecosystem where traders can learn, build, test, and execute systems with clarity and confidence regardless of market conditions.",
      "We aim to raise the standard of retail trading by promoting professional frameworks, responsible risk-taking, and a mindset focused on longevity rather than short-term outcomes.",
    ],
  },
];

const icons = {
  chart: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 11l5-4 4 2 4-2 5 4-5 6-3 1-2-1-3 1-5-7Z" />
    </svg>
  ),
};

const values = [
  {
    title: "Learn Market Structure",
    description:
      "Understand how markets move, why trends form, and how professional traders analyze price action before making decisions.",
    icon: "/img/icon/icon6.svg",
  },
  {
    title: "Build A Trading System",
    description:
      "Create clear rules, risk management frameworks, and repeatable processes that remove emotional decision-making.",
    icon: "/img/icon/icon5.svg",
  },
  {
    title: "Execute With Discipline",
    description:
      "Follow your strategy consistently, manage risk effectively, and focus on long-term performance instead of short-term outcomes.",
    icon: "/img/icon/icon4.svg",
  },
//   {
//     title: "Trader Responsibility",
//     description:
//       "We empower traders to take ownership of their decisions, discipline, and performance.",
//     icon: "/img/icon/icon3.svg",
//   },
];

/* ---------- COMPONENT ---------- */

export default function AboutContent() {
  return (
    <div className="bg-black text-white">
      <section className="border-y border-white/5 bg-[#050505] px-4 py-2">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
          
          <CommenHeading heading="Our Mission & Vision" />
          
            <p className="mt-3 text-sm text-white/60 md:text-base">
              Northloume. is built with a long-term perspective — focused on creating disciplined traders and sustainable
              trading practices.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {missionVision.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8">
                <p className="text-xs font-medium tracking-[0.25em] text-white/50">{item.label.toUpperCase()}</p>
                <h3 className="mt-4 text-xl font-semibold md:text-xl">{item.title}</h3>
                {item.paras.map((p, i) => (
                  <p key={i} className="mt-4 text-sm leading-relaxed text-white/55 md:text-[14px]">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>




     <section className="bg-black px-4 py-16 sm:py-20 lg:px-6">
          <div className="mx-auto max-w-7xl">
    
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
                <CommenHeading heading="What We Stand For" />
                <CommenSubheading subheading="Our foundation is built on discipline, integrity, and long-term performance — not shortcuts." />
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

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-14 text-center md:px-12">
         
<CommenHeading heading="Responsibility & Transparency" />

         
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Northloume. provides education, tools, and trading frameworks only. We do not provide investment advice,
            guarantees, portfolio management, or brokerage services.
          </p>
          <div className="mx-auto my-8 h-px w-24 bg-[#5fbf4a]" />
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500">
            Trading involves substantial risk. Outcomes depend on individual decisions, market conditions, risk
            management, and execution. Past performance should never be considered a guarantee of future results.
          </p>
        </div>
      </section>
    </div>
  );
}