"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b py-4 px-6 sm:py-6 sm:px-12 md:px-16 lg:px-24">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-sans tracking-wide">
          GRANDVIEW
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 md:gap-8 text-sm">
          <Link href="/" className="hover:opacity-70">Artists</Link>
          <a href="#" className="hover:opacity-70">Exhibitions</a>
          <Link href="/about" className="hover:opacity-70">About</Link>
          <a href="#" className="hover:opacity-70">Store</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-black/5 transition-transform duration-300"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}>
            {menuOpen ? (
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.415 1.414L13.414 10.586l4.362 4.362a1 1 0 01-1.415 1.414L12 12l-4.361 4.362a1 1 0 01-1.414-1.414l4.361-4.362-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 5.25a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile inline dropdown (pushes content, seamless) */}
      <nav
        id="mobile-menu"
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col rounded-md border shadow-sm bg-white divide-y">
          <Link href="/" className="px-5 py-4 text-base hover:bg-black/5" onClick={() => setMenuOpen(false)}>
            Artists
          </Link>
          <a href="#" className="px-5 py-4 text-base hover:bg-black/5" onClick={() => setMenuOpen(false)}>
            Exhibitions
          </a>
          <Link href="/about" className="px-5 py-4 text-base hover:bg-black/5" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a href="#" className="px-5 py-4 text-base hover:bg-black/5" onClick={() => setMenuOpen(false)}>
            Store
          </a>
        </div>
      </nav>
    </header>
  );
}
