import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogs = [
  {
    id: 1,
    slug: "understanding-price-action-trading",
    title: "Understanding Price Action Trading",
    category: "Trading",
    date: "03 October 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Learn how price action helps traders understand market structure, momentum, support, resistance, and potential trading opportunities.",
    content: [
      "Price action is one of the fundamental approaches used by traders to study financial markets. Instead of relying entirely on indicators, price action focuses on how price behaves over time.",
      "Traders often examine swing highs, swing lows, trends, support, resistance, breakouts, and reactions around important market levels.",
      "Understanding price action does not mean predicting exactly what the market will do next. Instead, it can help traders create structured scenarios and define what conditions would support or invalidate an idea.",
      "A useful approach is to combine market structure with proper risk management. Before entering a trade, traders should understand where the setup becomes invalid and how much capital they are prepared to risk.",
    ],
    keyPoints: [
      "Understand market structure before looking for entries.",
      "Identify important support and resistance zones.",
      "Look for confirmation instead of reacting to every price movement.",
      "Define invalidation and risk before entering a trade.",
    ],
  },

  {
    id: 2,
    slug: "support-and-resistance-explained",
    title: "Support & Resistance Explained",
    category: "Technical Analysis",
    date: "30 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A practical guide to identifying important support and resistance zones and understanding how price reacts around them.",
    content: [
      "Support and resistance are commonly used concepts in technical analysis. They represent areas where price has historically shown a reaction.",
      "Support can be viewed as an area where buying interest has previously appeared, while resistance represents an area where selling pressure has previously emerged.",
      "These levels are not always exact lines. In many situations, they are better understood as zones where price may react.",
      "Traders can combine these zones with market structure, volume, candlestick behavior, and other analysis techniques to build a broader market view.",
    ],
    keyPoints: [
      "Support and resistance are generally better treated as zones.",
      "Previous price reactions can help identify important areas.",
      "Levels can change significance as market conditions change.",
      "Always consider risk before acting on a technical level.",
    ],
  },

  {
    id: 3,
    slug: "risk-management-for-traders",
    title: "Risk Management for Traders",
    category: "Risk Management",
    date: "27 September 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Understand why risk management matters and how position sizing, stop losses, and risk-reward planning can structure a trading approach.",
    content: [
      "Risk management is an important part of any trading methodology. A trading setup can fail even when the underlying analysis appears reasonable.",
      "Position sizing helps determine how much capital is exposed to a particular trade. Traders may define a maximum acceptable loss before entering a position.",
      "Stop-loss levels can be used to define a point where a trade idea is considered invalid. The appropriate level depends on the strategy and market conditions.",
      "Risk management cannot remove market risk, but it can help traders define their exposure before taking a position.",
    ],
    keyPoints: [
      "Define risk before entering a position.",
      "Use position sizing according to your risk framework.",
      "Understand where your trading idea becomes invalid.",
      "Avoid risking capital that you cannot afford to lose.",
    ],
  },

  {
    id: 4,
    slug: "how-to-read-candlestick-patterns",
    title: "How to Read Candlestick Patterns",
    category: "Technical Analysis",
    date: "24 September 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Explore the basics of candlestick charts and learn how open, high, low, and close prices form useful visual patterns.",
    content: [
      "Candlestick charts provide a visual representation of price movement during a selected period.",
      "Each candle generally contains four important pieces of information: open, high, low, and close. Together, these values show how price moved during the selected timeframe.",
      "Patterns such as engulfing candles, pin bars, and inside bars are commonly studied by technical traders. However, a candle pattern should generally be considered within the broader market context.",
      "The same candlestick can have different meanings depending on where it appears on a chart and what the surrounding price structure looks like.",
    ],
    keyPoints: [
      "Learn the meaning of open, high, low, and close.",
      "Study candles in the context of market structure.",
      "Avoid treating individual patterns as guaranteed signals.",
      "Combine candle analysis with a defined trading plan.",
    ],
  },

  {
    id: 5,
    slug: "trading-psychology-and-discipline",
    title: "Trading Psychology & Discipline",
    category: "Trading Psychology",
    date: "20 September 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Discover how emotions, discipline, patience, and consistency can influence the way traders approach financial markets.",
    content: [
      "Trading decisions can be influenced by emotions such as fear, excitement, frustration, and overconfidence.",
      "A defined trading plan can help reduce impulsive decision-making by establishing rules before a position is taken.",
      "Keeping a trading journal can also help traders review decisions and identify recurring behavioral patterns.",
      "Discipline does not guarantee profitable results, but having a consistent process can make it easier to evaluate what worked and what did not.",
    ],
    keyPoints: [
      "Create rules before entering trades.",
      "Avoid making decisions purely based on emotions.",
      "Maintain a trading journal.",
      "Review both winning and losing trades.",
    ],
  },

  {
    id: 6,
    slug: "understanding-market-volatility",
    title: "Understanding Market Volatility",
    category: "Markets",
    date: "16 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Learn what market volatility means, what can cause it, and why understanding changing price conditions matters.",
    content: [
      "Market volatility describes the degree to which prices move over a particular period. Some market environments are relatively calm while others can experience large and rapid movements.",
      "Economic releases, company announcements, geopolitical developments, liquidity conditions, and changes in market expectations can influence volatility.",
      "Higher volatility can create both opportunities and risks. Price can move quickly in either direction, making risk management particularly important.",
      "Understanding the current market environment can help traders determine whether their usual strategy is appropriate for the conditions.",
    ],
    keyPoints: [
      "Volatility describes the magnitude of price movement.",
      "News and market expectations can influence volatility.",
      "Higher volatility can increase both opportunity and risk.",
      "Adapt your risk framework to changing market conditions.",
    ],
  },

  {
    id: 7,
    slug: "building-a-trading-plan",
    title: "How to Build a Trading Plan",
    category: "Trading",
    date: "12 September 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A structured trading plan can help define entry rules, risk parameters, trade management, and review processes.",
    content: [
      "A trading plan is a written framework that describes how a trader intends to approach the market.",
      "A plan may include the markets being traded, preferred timeframes, setup criteria, entry conditions, stop-loss rules, position sizing, and exit conditions.",
      "A good plan should also describe what situations should be avoided. This can help reduce impulsive trades outside the trader's intended strategy.",
      "The plan can be reviewed periodically using historical and live trade data to understand whether the process is being followed consistently.",
    ],
    keyPoints: [
      "Define your preferred markets and timeframes.",
      "Write clear entry and exit conditions.",
      "Include a specific risk-management framework.",
      "Review your plan and trading journal regularly.",
    ],
  },

  {
    id: 8,
    slug: "technical-analysis-for-beginners",
    title: "Technical Analysis for Beginners",
    category: "Beginners",
    date: "08 September 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Start your technical analysis journey with market structure, charts, trends, indicators, and the basics of price movement.",
    content: [
      "Technical analysis is a method of studying historical price and volume information to understand market behavior.",
      "Beginners often start by learning chart types, trends, support and resistance, market structure, and basic indicators.",
      "Indicators such as moving averages, RSI, and MACD can provide additional information, but they should not be treated as guaranteed prediction tools.",
      "The most important part of learning technical analysis is developing a structured process for analyzing markets and managing risk.",
    ],
    keyPoints: [
      "Start with price charts and market structure.",
      "Learn trends, support, and resistance.",
      "Understand what indicators actually measure.",
      "Focus on process and risk management.",
    ],
  },
];

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black pb-20 pt-24 text-white mt-12">

      {/* Article Header */}
      <article className="mx-auto max-w-5xl px-5 sm:px-8">

      

        {/* Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-gray-300">
            {blog.category}
          </span>

          <span>•</span>

          <span>{blog.date}</span>

          <span>•</span>

          <span>{blog.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          {blog.excerpt}
        </p>

        {/* Hero Image */}
        <div className="relative mt-10 h-[280px] overflow-hidden rounded-3xl border border-white/10 sm:h-[420px] lg:h-[520px]">

          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        </div>

        {/* Article Content */}
        <div className="mx-auto mt-12 max-w-3xl">

          <div className="space-y-7">
            {blog.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-gray-300 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <h2 className="text-2xl font-semibold">
              Key Takeaways
            </h2>

            <ul className="mt-6 space-y-4">
              {blog.keyPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-gray-300"
                >
                  <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-gray-400" />

                  <span className="leading-7">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

            <p className="text-sm leading-7 text-gray-400">
              <span className="font-semibold text-gray-200">
                Educational Disclaimer:
              </span>{" "}
              This article is provided for educational and informational
              purposes only. It does not constitute financial, investment,
              legal, or tax advice. Financial markets involve risk, and past
              performance does not guarantee future results.
            </p>

          </div>

        </div>

      </article>

      {/* Related Blogs */}
      <section className="mx-auto mt-20 max-w-7xl border-t border-white/10 px-5 pt-16 sm:px-8 lg:px-10">

        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Continue Reading
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            More from NORTHLUME
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {blogs
            .filter((item) => item.slug !== blog.slug)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/20"
              >

                <div className="relative h-52 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                </div>

                <div className="p-5">

                  <p className="text-xs text-gray-600">
                    {item.category} • {item.readTime}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-7">
                    {item.title}
                  </h3>

                  <span className="mt-4 inline-block text-sm text-gray-400">
                    Read Article →
                  </span>

                </div>

              </Link>
            ))}

        </div>

      </section>

    </main>
  );
}