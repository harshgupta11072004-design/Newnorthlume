import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    slug: "understanding-price-action-trading",
    title: "Understanding Price Action Trading",
    excerpt:
      "Learn how price action helps traders understand market structure, momentum, support, resistance, and potential trading opportunities.",
    category: "Trading",
    date: "03 October 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    slug: "support-and-resistance-explained",
    title: "Support & Resistance Explained",
    excerpt:
      "A practical guide to identifying important support and resistance zones and understanding how price reacts around them.",
    category: "Technical Analysis",
    date: "30 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    slug: "risk-management-for-traders",
    title: "Risk Management for Traders",
    excerpt:
      "Understand why risk management matters and how position sizing, stop losses, and risk-reward planning can structure a trading approach.",
    category: "Risk Management",
    date: "27 September 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    slug: "how-to-read-candlestick-patterns",
    title: "How to Read Candlestick Patterns",
    excerpt:
      "Explore the basics of candlestick charts and learn how open, high, low, and close prices form useful visual patterns.",
    category: "Technical Analysis",
    date: "24 September 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    slug: "trading-psychology-and-discipline",
    title: "Trading Psychology & Discipline",
    excerpt:
      "Discover how emotions, discipline, patience, and consistency can influence the way traders approach financial markets.",
    category: "Trading Psychology",
    date: "20 September 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    slug: "understanding-market-volatility",
    title: "Understanding Market Volatility",
    excerpt:
      "Learn what market volatility means, what can cause it, and why understanding changing price conditions matters.",
    category: "Markets",
    date: "16 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    slug: "building-a-trading-plan",
    title: "How to Build a Trading Plan",
    excerpt:
      "A structured trading plan can help define entry rules, risk parameters, trade management, and review processes.",
    category: "Trading",
    date: "12 September 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    slug: "technical-analysis-for-beginners",
    title: "Technical Analysis for Beginners",
    excerpt:
      "Start your technical analysis journey with market structure, charts, trends, indicators, and the basics of price movement.",
    category: "Beginners",
    date: "08 September 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-black pb-20 pt-24 text-white mt-12">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 text-center">

          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            NORTHLUME Journal
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Insights for{" "}
            <span className="text-gray-500">
              Better Market Understanding
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Explore educational articles covering price action, technical
            analysis, risk management, market behavior, and trading
            psychology.
          </p>

        </div>

        {/* Featured Blog */}
        <Link
          href={`/blog/${blogs[0].slug}`}
          className="group mb-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2"
        >
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px]">

            <Image
              src={blogs[0].image}
              alt={blogs[0].title}
              fill
              unoptimized
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                Featured
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="text-white">
                {blogs[0].category}
              </span>

              <span>•</span>

              <span>{blogs[0].date}</span>

              <span>•</span>

              <span>{blogs[0].readTime}</span>
            </div>

            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              {blogs[0].title}
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              {blogs[0].excerpt}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white">
              Read Article

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

          </div>
        </Link>

        {/* Blog Grid */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
              Latest Articles
            </p>

            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Explore Our Blogs
            </h2>
          </div>

          <span className="hidden text-sm text-gray-600 sm:block">
            {blogs.length} Articles
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {blogs.slice(1).map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-gray-200 backdrop-blur-md">
                    {blog.category}
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="mb-3 flex items-center gap-2 text-xs text-gray-600">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold leading-7 text-white transition group-hover:text-gray-300">
                  {blog.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                  {blog.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-300">
                  Read More

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}