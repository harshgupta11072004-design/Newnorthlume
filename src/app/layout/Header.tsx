import React from "react";

export default function Header() {
  return (
    <header className="p-4 navbar-wrapper">
      <div className="navbar-left">
            <a href="#" className="text-white no-underline hover:underline">
            <img  src="/img/new_logo11.png" alt="Logo" className="h-14 w-36 object-contain" />
            </a>
      </div>
      <div className="navbar-center">
        <nav>
          <ul className="flex space-x-4 text-center text-white">
            <li>
              <a href="/" className="font-normal">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-right">
        <button className="bg-white rounded-full font-medium py-2 px-4 text-black hover:bg-gray-200 transition duration-300">
          Login
        </button>
      </div>
    </header>
  );
}