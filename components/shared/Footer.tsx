import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 montserrat-regular montserrat-regular text-gray-300 py-10 mt-12">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Locations */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#63a6ca]">Groton, CT</h3>
          <address className="not-italic text-md leading-relaxed">
            495 Gold Star Highway, Suite 100<br />
            Groton, CT 06340<br />
            <a href="tel:8604480611" className="block mt-2 hover:underline">p: 860.448.0611</a>
            <a href="tel:8604450269" className="hover:underline">f: 860.445.0269</a>
          </address>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#63a6ca]">Madison, CT</h3>
          <address className="not-italic text-md leading-relaxed">
            752 Boston Post Rd. 2nd Floor<br />
            Madison, CT 06443<br />
            <a href="tel:2034216950" className="block mt-2 hover:underline">p: 203.421.6950</a>
          </address>
        </div>
        {/* Policy Links */}
        <div className="flex flex-col items-start md:items-end space-y-2">
          <Link href="/manuals/disclosure" className="hover:underline text-gray-400 text-md">Disclosure</Link>
          <Link href="/manuals/privacy-policy" className="hover:underline text-gray-400 text-md">Privacy Policy</Link>
        </div>
      </div>
      <div className="border-t border-gray-800 my-8" />
      {/* Bottom Row */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-xs text-gray-500 text-center md:text-left">
          Sightline Wealth Advisors, LLC is an SEC Registered Investment Advisor.
        </span>
        <span className="text-xs text-gray-500 text-center md:text-right mt-2 md:mt-0">
          © {new Date().getFullYear()} Sightline Wealth Advisors. Website by{" "}
          <a
            href="http://www.coldspringdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Cold Spring
          </a>
        </span>
      </div>
    </footer>
  );
}