import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const manualLinks = [
  { name: "Form CRS March 2024", href: "/manuals/form-crs" },
  { name: "Privacy Policy", href: "/manuals/privacy-policy" },
  { name: "Disclosure", href: "/manuals/disclosure" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
const isManualsActive = router.pathname.includes("manuals");
  return (
    <nav
      suppressHydrationWarning={true}
      className="montserrat-regular bg-gray-950 bg-opacity-30 px-4 py-3 md:px-8 sticky top-0 z-50"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-xl font-bold text-[#63a6ca]">Sightline Wealth Advisors</div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none text-gray-300"
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

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
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
                        ? "text-[#63a6ca]"
                        : "text-gray-300 hover:text-[#63a6ca]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* Manual Dropdown - Fixed positioning and styling */}
            <li className="relative group">
              <button
                className={`px-3 py-2 text-lg rounded transition-colors font-medium ${isManualsActive? "text-[#63a6ca]" :"text-gray-300"} hover:text-[#63a6ca] focus:outline-none flex items-center`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Manuals
                <span className="ml-1 text-xs">▼</span>
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-gray-950 bg-opacity-95 rounded-md shadow-lg py-1 hidden group-hover:block">
                {manualLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#63a6ca]"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>

          {/* Login Button */}
          <Link
            href="/login"
            className="px-4 py-2 text-lg rounded-md bg-cyan-800 text-white hover:bg-cyan-950 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile menu - Updated styling */}
      {menuOpen && (
        <ul className="md:hidden mt-2 space-y-1 bg-gray-950 bg-opacity-95 border-t border-gray-800 px-2 pb-2">
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
                      ? "text-[#63a6ca]"
                      : "text-gray-300 hover:text-[#63a6ca]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* Manual Links in Mobile Menu */}
          <li className="border-t border-gray-800 pt-2">
            <p className="px-3 py-2 text-lg font-medium text-[#63a6ca]">
              Manuals
            </p>
            {manualLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-300 hover:text-[#63a6ca] pl-6"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </li>

          {/* Login Button in Mobile Menu */}
          <li className="pt-2">
            <Link
              href="/login"
              className="block w-full bg-cyan-800 text-center px-3 py-2 text-lg rounded-md  text-white hover:bg-cyan-950"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
