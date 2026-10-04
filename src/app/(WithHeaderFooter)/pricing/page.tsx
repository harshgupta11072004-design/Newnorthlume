"use client";

import React from "react";
import {
  CheckCircle2,
  Users,
  MessageCircle,
  LineChart,
  Crown,
  Trophy,
  Star,
} from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Live Learning Sessions",
  },
  {
    icon: CheckCircle2,
    title: "Market Insights & Analysis",
  },
  {
    icon: MessageCircle,
    title: "Q&A Sessions",
  },
  {
    icon: Users,
    title: "Learning Community Access",
  },
];

const oneOnOneFeatures = [
  {
    icon: LineChart,
    title: "Personalized Learning Guidance",
  },
  {
    icon: CheckCircle2,
    title: "One-on-One Strategy Discussion",
  },
  {
    icon: MessageCircle,
    title: "Personalized Q&A Session",
  },
  {
    icon: Users,
    title: "Individual Market Analysis",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-black px-4 py-16 sm:py-20 lg:px-6 mt-12">
        <div className="mx-auto max-w-5xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">
              Choose Your Plan
            </h3>

            <p className="mt-3 text-sm text-white/50">
              Select the plan that suits your Learning journey.
            </p>
          </div>

          {/* TOP 3 PLANS */}
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3">

            {/* ================= 1 MONTH ================= */}
            <div className="pricing-card rounded-[22px] border border-[#f5c20b18] bg-[#0a0a05] transition-all duration-500 hover:border-[#f5c20b40]">

              <div className="flex items-center gap-3 p-5 sm:p-6">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
                  <Trophy className="h-5 w-5 text-black" />
                </div>

                <h3 className="text-lg font-medium text-white sm:text-xl">
                  1 Month Telegram Access
                </h3>

              </div>

              <div className="px-6 pb-6">

                <div className="flex items-end gap-1">
                  <span className="text-4xl font-medium tracking-tight text-white">
                    ₹ 1999
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/45">
                  1 Month • Full Access
                </p>

              </div>

              {/* FEATURES - ALWAYS OPEN */}
              <div className="border-t border-white/5 px-6 py-5">

                <div className="space-y-3">

                  {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
                          <Icon
                            size={16}
                            className="text-[#f5c20b]"
                          />
                        </div>

                        <p className="text-xs font-medium text-white">
                          {feature.title}
                        </p>
                      </div>
                    );
                  })}

                </div>

                <a
                  href="https://rzp.io/rzp/1jWe8mub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-center text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
                >
                  Get Started
                </a>

              </div>
            </div>


            {/* ================= 3 MONTH ================= */}
            <div className="relative overflow-hidden rounded-[24px] border border-[#f5c20b25] bg-[#0c0c06]">

              <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-[#f5c20b]/20 blur-3xl" />

              <div className="relative z-10 p-5 sm:p-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
                    <Star className="h-5 w-5 text-black" />
                  </div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-xl font-medium text-white">
                      3 Month Telegram Access
                    </h3>

                    <span className="rounded-md bg-[#f5c20b]/15 px-2 py-1 text-[9px] font-medium uppercase text-[#f5c20b]">
                      Most Popular
                    </span>

                  </div>

                </div>

                <div className="mt-5">

                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-medium text-white">
                      ₹ 4999
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-white/45">
                    3 Months • Full Access
                  </p>

                </div>

                {/* FEATURES - ALWAYS OPEN */}
                <div className="mt-8 space-y-3">

                  {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
                          <Icon
                            size={16}
                            className="text-[#f5c20b]"
                          />
                        </div>

                        <p className="text-xs font-medium text-white">
                          {feature.title}
                        </p>

                      </div>
                    );
                  })}

                </div>

                <a
                  href="https://rzp.io/rzp/KaAGjjGg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-center text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
                >
                  Get Started
                </a>

              </div>
            </div>


            {/* ================= 6 MONTH ================= */}
            <div className="rounded-[22px] border border-[#f5c20b18] bg-[#0a0a05] transition-all duration-500 hover:border-[#f5c20b40]">

              <div className="flex items-center gap-3 p-5 sm:p-6">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
                  <Crown className="h-5 w-5 text-black" />
                </div>

                <h3 className="text-lg font-medium text-white sm:text-xl">
                  6 Month Telegram Access
                </h3>

              </div>

              <div className="px-6 pb-6">

                <div className="flex items-end gap-1">
                  <span className="text-4xl font-medium tracking-tight text-white">
                    ₹ 5999
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/45">
                  6 Months • Full Access
                </p>

              </div>

              {/* FEATURES - ALWAYS OPEN */}
              <div className="border-t border-white/5 px-6 py-5">

                <div className="space-y-3">

                  {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
                          <Icon
                            size={16}
                            className="text-[#f5c20b]"
                          />
                        </div>

                        <p className="text-xs font-medium text-white">
                          {feature.title}
                        </p>

                      </div>
                    );
                  })}

                </div>

                <a
                  href="https://rzp.io/rzp/7gxIbZ0v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-center text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
                >
                  Get Started
                </a>

              </div>
            </div>

          </div>


                    {/* <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3"> */}



          {/* ================= ONE ON ONE ================= */}
          <div className="relative mt-5 overflow-hidden rounded-[24px] border border-[#f5c20b30] bg-[#0c0c06]">

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[500px] -translate-x-1/2 rounded-full bg-[#f5c20b]/15 blur-3xl" />

            <div className="relative z-10 p-6 sm:p-8">

              {/* Header */}
              <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
                    <MessageCircle className="h-6 w-6 text-black" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="text-2xl font-medium text-white">
                        One on One Session Mentorship Session
                      </h3>

                      <span className="rounded-md bg-[#f5c20b]/15 px-2 py-1 text-[9px] font-medium uppercase text-[#f5c20b]">
                        Personalized
                      </span>

                    </div>

                    <p className="mt-1 text-sm text-white/45">
                      Get personalized guidance based on your Learning goals.
                    </p>
                  </div>

                </div>


                {/* Price */}
                <div className="text-left md:text-right">

                  <div className="flex items-end gap-1">

                    <span className="text-4xl font-medium text-white">
                      ₹ 19999
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-white/45">
                    One Session • Personal Access
                  </p>

                </div>

              </div>


              {/* One on One Features */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

                {oneOnOneFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#111108] p-3"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
                        <Icon
                          size={16}
                          className="text-[#f5c20b]"
                        />
                      </div>

                      <p className="text-xs font-medium text-white">
                        {feature.title}
                      </p>

                    </div>
                  );
                })}

              </div>


              {/* Button */}
              <a
                href="https://rzp.io/rzp/jZvzHHa"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-7 block w-full max-w-md rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-center text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                Book One on One Session
              </a>

            </div>
          </div>

                    {/* </div> */}

        </div>
      </section>
    </>
  );
}