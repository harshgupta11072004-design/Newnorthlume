"use client";

import React, { useState } from "react";
import { CommenHeading } from "../commmencomponent/CommenHeading";

const FAQS = [
  {
    q: "What makes NORTHLUME different?",
    a: " Our technical models and educational material are built specifically for Gold (XAUUSD) market behavior, focusing on key liquidity zones, session timings, and volatility drivers.",
  },
  {
    q: "Is the data real-time?",
    a: "Yes. Prices, alerts, and dashboards update live, so you always see the latest movement in the gold market without refreshing.",
  },
  {
    q: "Do I need trading experience?",
    a: "No. The platform explains every signal in plain language, so newer traders can follow along while professionals still get the depth they need.",
  },
  {
    q: "Can I export data?",
    a: "Yes. You can export price history, signals, and reports as CSV or PDF for your own analysis or record keeping.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is encrypted in transit and at rest, and we never share your personal or trading information with third parties.",
  },
];

function FAQItem({ item, open, onToggle, id }:any) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-colors duration-300 ${
        open
          ? "border border-white/40 bg-[#0d0d0d]"
          : "border border-transparent bg-[#0f0f0f] hover:bg-[#141414]"
      }`}
    >
      {/* gold glow (sirf open item pe) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 70% 120% at 100% 0%, rgba(250,204,21,0.16), transparent 65%)",
        }}
      />

      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          id={`faq-btn-${id}`}
          className="relative flex w-full items-center justify-between gap-6 px-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400/70 focus-visible:-outline-offset-2"
        >
          <span
            className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
              open ? "text-yellow-400" : "text-white"
            }`}
          >
            {item.q}
          </span>

          {/* plus -> minus */}
          <span className="relative h-4 w-4 shrink-0 text-white/80" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                open ? "scale-y-0" : "scale-y-100"
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`relative grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[640px] px-6 pb-6 text-[15px] leading-6 text-white/60">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-black px-6 sm:py-20 text-white">
      {/* <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          FAQs
        </span>
        <h2 className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl">
          Need more details?
        </h2>
        <p className="mt-4 text-sm text-white/70">
          Learn how the platform works and what you can expect.
        </p>
      </div> */}


<div className="text-center">

      <CommenHeading heading="Frequently Asked Questions" />
</div>

      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            id={i}
            item={item}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}