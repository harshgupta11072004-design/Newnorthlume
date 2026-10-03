import Image from "next/image";
import React from "react";
import { CommenHeading } from "../commmencomponent/CommenHeading";

const blogs = [
  {
    title: "Gold market outlook and price forecast for this month",
    description:
      "A breakdown of current price drivers, sentiment trends, possible scenarios traders should watch.",
    tag: "Market Outlook",
    date: "12 February 2026",
    image: "/img/blog/blogimg1.jpg",
    // link: "img/blog/gold-market-outlook-and-price-forecast-for-this-month",
  },
  {
    title: "Technical Precision + Disciplined Control.",
    description:
      "Leverage advanced price action and market structure to analyze gold markets, uncover key trends, and surface high-probability setups, while you stay fully in control of every decision. Just clear insights, transparent logic, and disciplined strategy where it matters most.",
    tag: "Market Analysis",
    date: "13 February 2026",
    image: "/img/blog/blogimg2.jpg",
    link: "/blog/how-ai-is-transforming-modern-commodity-trading",
  },
  {
    title: "Trend patterns to watch in gold markets",
    description:
      "Key trend structures supported by historical behavior and current market conditions.",
    tag: "Trends",
    date: "14 February 2026",
    image: "/img/blog/blogimg3.jpg",
    link: "/blog/trend-patterns-to-watch-in-gold-markets",
  },
];

export default function BlogComponent() {
  return (
    <section className="bg-black px-4 py-16 sm:py-20 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left sticky section */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8 lg:px-12">
              <div className="relative rounded-md text-white">
                <CommenHeading heading="Gold market Insights" />
                <p className="mb-8 mt-1 max-w-3xl text-sm leading-6 text-[#a5a5a5] text-[14px]">
                  Articles covering price action, volatility, and trading insights.
                </p>
                <a className="text-tg linkctncommen text-black" href="">
                  Explore all blogs
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* Right section - Blog cards */}
          <div className="lg:col-span-7">
            <div className="px-16">
              <div className="space-y-6">
                {blogs.map((blog, index) => (
                  <a
                    key={index}
                    href={blog.link}
                    className="group flex flex-col sm:flex-row items-stretch gap-5 rounded-[20px] border border-white/10 bg-[#0d0d0c] p-5 transition-colors hover:bg-[#131311]"
                  >
                    {/* Text content */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-normal mb-2 text-white leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-sm leading-6 text-[#a5a5a5]">
                          {blog.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-3">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                          {blog.tag}
                        </span>
                        <span className="text-xs text-[#a5a5a5]">{blog.date}</span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full sm:w-[240px] shrink-0 overflow-hidden rounded-[16px]">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}