import React from "react";
import { Link, useLocation } from "wouter";

/**
 * Main navigation component for the portfolio website
 * Features:
 * - Responsive design with mobile-friendly spacing
 * - Active route highlighting with underline
 * - Clean typography with SF Pro Display font
 * - Sticky positioning for persistent navigation
 */
export default function Navbar() {
  const [location] = useLocation();

  /**
   * Determines if a navigation link should be highlighted as active
   * @param path - The path to check against current location
   * @returns boolean indicating if the path is active
   */
  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 py-3 sm:py-4 md:py-6">
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <Link
              href="/"
              className={`text-xs sm:text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap ${
                isActive("/") ? "underline" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/experience"
              className={`text-xs sm:text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap ${
                isActive("/experience") ? "underline" : ""
              }`}
            >
              Experience
            </Link>
            <Link
              href="/interests"
              className={`text-xs sm:text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap ${
                isActive("/interests") ? "underline" : ""
              }`}
            >
              Interests
            </Link>
            <Link
              href="/playbook"
              className={`text-xs sm:text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap ${
                isActive("/playbook") ? "underline" : ""
              }`}
            >
              Playbook
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
