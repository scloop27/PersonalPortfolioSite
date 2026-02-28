

/**
 * ========================================
 * 🎯 INTERESTS PAGE - HOBBIES & TECH SHOWCASE
 * ========================================
 * 
 * This page displays your personal interests, hobbies, and technical skills.
 * Similar layout structure to About and Experience pages.
 * 
 * 🖼️ TO ADD INTEREST IMAGES:
 * 1. Upload hobby photos or tech icons to public/images/interests/
 * 2. Add images to interests array with field: image: "/images/interests/hobby-name.jpg"
 * 3. Recommended sizes: Various based on content (photos ~400px, icons ~100px)
 * 
 * 📋 TO ADD INTERESTS:
 * 1. Create an interests array similar to projects/experiences
 * 2. Each interest can have: name, description, image, category
 * 3. Categories: Technology, Hobbies, Sports, Creative, etc.
 * 
 * 📱 RESPONSIVE DESIGN:
 * - Mobile: Single column grid
 * - Desktop: Multi-column layout 
 * - Consistent with site design patterns
 */
export default function Interests() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-[#EAEAEA] font-normal leading-tight mb-8 sm:mb-12 md:mb-16"
              style={{
                fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.2",
              }}
            >
              Interests
            </h1>
            <div className="flex items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
              <p
                className="text-[#888888] font-normal text-center"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: "1.6",
                }}
              >
                Adding soon...
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section - Social Links */}
        <footer className="py-16 border-t border-[#333333] w-full">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
                  Shiva Charan
                  <br />
                  Mandhapuram
                </h2>
                <p className="text-[#666] text-sm mt-3">Ready to build something extraordinary? <a href="/work" className="text-white hover:underline transition-all">Let's talk →</a></p>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div className="text-[#EAEAEA] font-medium mb-1">Socials</div>
                  <a href="https://x.com/shivacharanm7" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888888]">X</a>
                  <a href="https://www.linkedin.com/in/shiva-charan-mandhapuram/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888888]">LinkedIn</a>
                  <a href="https://www.instagram.com/shivacharanmandhapuram/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888888]">Instagram</a>
                  <a href="https://shivacharanmandhapuram.substack.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888888]">Substack</a>
                </div>
                <div className="space-y-4">
                  <div className="text-[#EAEAEA] font-medium mb-1">Contact</div>
                  <a href="https://forms.gle/Ncn648Sux1Tr9oJ16" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">Inquiry Form ↗</a>
                </div>
              </div>
            </div>
            {/* Subtle, extra-small, credit for build */}
            <div className="text-[10px] text-gray-600 text-center mt-12 tracking-tight opacity-80">
              Built with ⚡️
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
