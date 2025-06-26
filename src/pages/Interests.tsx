

/**
 * Interests page component - Personal and technical interests showcase
 * Currently displays placeholder content with plans for future expansion
 * Features:
 * - Responsive layout matching site design
 * - Placeholder for future content expansion
 * - Consistent typography and spacing
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
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
                  Shiva Charan
                  <br />
                  Mandhpauram
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-3">
                  <a
                    href="https://x.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    X
                  </a>
                  <a
                    href="https://linkedin.com/in/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    GitHub
                  </a>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Google Scholar
                  </a>
                  <a
                    href="https://shivacharan.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Substack
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
