import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className=" neuton-regular bg-gray-950 bg-opacity-30  px-4 py-3 md:px-8 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-xl font-bold text-[#63a6ca]">Business Firm</div>
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? router.pathname === "/"
                : router.pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-lg rounded transition-colors font-medium ${
                    isActive
                      ? " text-[#63a6ca]"
                      : "text-gray-300 hover:text-[#63a6ca]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden mt-2  space-y-1 bg-white border-t border-gray-200 px-2 pb-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? router.pathname === "/"
                : router.pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 text-lg py-2 rounded transition-colors font-medium ${
                    isActive
                      ? " text-[#63a6ca]"
                      : "text-gray-700 hover:text-[#63a6ca]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}