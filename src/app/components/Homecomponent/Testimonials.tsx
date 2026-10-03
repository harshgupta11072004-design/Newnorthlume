"use client";

import React from "react";
import { CommenHeading, CommenSubheading } from "../commmencomponent/CommenHeading";

const ROW_ONE = [
  {
    logo: "Logoipsum",
    quote:
      "Real time alerts and dashboards save hours of manual analysis while improving timing and overall trading performance.",
    name: "Michael Chen",
    role: "Technical Analyst",
    avatar: "",
  },
  {
    logo: "Logoipsum",
    quote:
      "The platform balances advanced analytics with simplicity, making it useful for both professionals and newer traders.",
    name: "Emma Roberts",
    role: "Investment Analyst",
    avatar: "",
  },
  {
    logo: "Logoipsum",
    quote:
      "Pattern recognition and sentiment analysis provide valuable context that improves trade confidence during uncertain market periods.",
    name: "Ryan Thompson",
    role: "Portfolio Manager",
    avatar: "",
  },
  {
    logo: "Logoipsum",
    quote:
      "This platform delivers faster gold insights, improving accuracy, confidence, and consistency throughout my daily trading workflow.",
    name: "Alex Morgan",
    role: "Senior Gold Analyst",
    avatar: "",
  },
];

const ROW_TWO = [
  {
    logo: "Logoipsum",
    quote:
      "AI driven forecasts helped me identify better entries and manage risk more effectively during volatile gold market conditions.",
    name: "Daniel Lee",
    role: "Commodity Trader",
    avatar: "",
  },
  {
    logo: "Logoipsum",
    quote:
      "This platform delivers faster gold insights, improving accuracy, confidence, and consistency throughout my daily trading workflow.",
    name: "Alex Morgan",
    role: "Senior Gold Analyst",
    avatar: "",
  },
  {
    logo: "Logoipsum",
    quote:
      "Pattern recognition and sentiment analysis provide valuable context that improves trade confidence during uncertain market periods.",
    name: "Ryan Thompson",
    role: "Portfolio Manager",
    avatar: "",
  },
  {
    logo: "Logoipsum",
    quote:
      "Clear explanations behind every signal make analysis easier and more reliable for everyday trading decisions.",
    name: "Brian Patel",
    role: "Independent Gold Trader",
    avatar: "",
  },
];

const initials = (name:any) =>
  name
    .split(" ")
    .map((n:any) => n[0])
    .join("")
    .slice(0, 2);

function LogoMark({ text }:any) {
  return (
    <div className="flex items-center gap-2 text-white/60">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">{text}</span>
    </div>
  );
}

function Card({ item }:any) {
  return (
    <figure className="mr-5 flex h-[262px] w-[430px] shrink-0 flex-col justify-between rounded-3xl border border-white/[0.06] bg-[#0d0d0d] p-6 sm:w-[430px] max-sm:w-[300px] max-sm:h-auto max-sm:gap-6">
      <div>
        <LogoMark text={item.logo} />
        <blockquote className="mt-6 text-[17px] leading-[26px] text-white/55">
          “{item.quote}”
        </blockquote>
      </div>

      <figcaption className="flex items-center gap-3">
        {item.avatar ? (
          <img
            src={item.avatar}
            alt={item.name}
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 text-sm font-medium text-white">
            {initials(item.name)}
          </div>
        )}
        <div>
          <div className="text-[16px] font-medium text-white">{item.name}</div>
          <div className="text-[15px] text-white/50">{item.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, direction = "left", duration = 45 }:any) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask group relative overflow-hidden">
      <div
        className={`marquee-track ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((item, i) => (
          <Card key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          TESTIMONIALS
        </span> */}
        <CommenHeading heading="What traders are saying" />
        {/* <h2 className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl">
          
        </h2> */}
        <CommenSubheading subheading="Feedback from analysts and traders across global gold markets." />
        {/* <p className="mt-4 text-sm text-white/70">
          Feedback from analysts and traders across global gold markets.
        </p> */}
      </div>

      <div className="mt-16 flex flex-col gap-5">
        {/* Row 1: right -> left */}
        <MarqueeRow items={ROW_ONE} direction="left" duration={50} />
        {/* Row 2: left -> right */}
        <MarqueeRow items={ROW_TWO} direction="right" duration={55} />
      </div>

      <style jsx global>{`
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-left {
          animation-name: marquee-left;
        }
        .marquee-right {
          animation-name: marquee-right;
        }
        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 8%,
            #000 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 8%,
            #000 92%,
            transparent
          );
        }
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}