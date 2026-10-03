// components/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const mainPageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const innerPageLinks = [
  { label: "Contact", href: "/contact" },
];

const utilityPageLinks = [
  { label: "Terms & conditions", href: "/terms-conditions" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Cookie policy", href: "/cookies-policy" },
  { label: "Refund policy", href: "/refund-policy" },
  { label: "Financial education disclaimer", href: "/financial-education-disclaimer" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // apna subscribe logic yahan lagao (API call, etc.)
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left - Newsletter */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold leading-tight mb-4">
            Stay updated with the latest news
          </h2>
          <p className="text-gray-400 mb-6 max-w-sm">
            Delivering high-quality roofing solutions with strength, style,
            and reliability. We combine expert craftsmanship.
          </p>
          {/* <form
            onSubmit={handleSubscribe}
            className="flex items-center bg-neutral-900 rounded-full p-1.5 max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form> */}
        </div>

        {/* <div className="hidden md:block" /> */}

        {/* Main Page */}
        <div>
          <h3 className="text-gray-500 text-sm mb-4">Main Page</h3>
          <ul className="space-y-3">
            {mainPageLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    i === 0
                      ? "text-amber-500 hover:text-amber-400 text-sm"
                      : "text-white hover:text-gray-300 text-sm"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Inner Page */}
        <div>
          <h3 className="text-gray-500 text-sm mb-4">Inner Page</h3>
          <ul className="space-y-3">
            {innerPageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-300 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gray-500 text-sm mb-4">Legal</h3>
          <ul className="space-y-3">
            {utilityPageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-300 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-neutral-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
        <p>© 2026 Northloume. All rights reserved.</p>
        <p>
          Powered by <span className="font-semibold text-white">Northloume</span>.
        </p>
      </div>
    </footer>
  );
}