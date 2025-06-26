import React from "react";

/**
 * ========================================
 * 🔗 BOTTOM NAVIGATION - FOOTER COMPONENT
 * ========================================
 * 
 * Clean footer component matching the reference design:
 * - Name on the left side
 * - Social links on the right side
 * - Minimal, clean typography
 * - Responsive spacing
 * 
 * 📝 TO UPDATE SOCIAL LINKS:
 * Edit the socialLinks array below with your actual URLs
 * 
 * 🎨 STYLING:
 * - Matches reference image alignment
 * - Uses SF Pro Display font
 * - Gray text color for subtle appearance
 * - Responsive padding and spacing
 */

const socialLinks = [
  { name: "X", url: "https://x.com/yourhandle" },
  { name: "Instagram", url: "https://instagram.com/yourhandle" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
  { name: "Google Scholar", url: "https://scholar.google.com/yourprofile" },
  { name: "GitHub", url: "https://github.com/yourhandle" },
  { name: "Substack", url: "https://yoursubstack.substack.com" },
];

export default function BottomNavigation() {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-gray-800 py-6 sm:py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          {/* Name/Brand */}
          <div 
            className="text-[#EAEAEA] font-normal"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)",
              lineHeight: "1.4",
            }}
          >
            Shiva Charan
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#EAEAEA] transition-colors duration-200"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  lineHeight: "1.4",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}