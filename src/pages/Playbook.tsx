import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

/**
 * ========================================
 * 📝 PLAYBOOK PAGE - MINIMAL BLOG LAYOUT
 * ========================================
 * 
 * Displays blog posts in a clean, minimal layout matching the Experience page style.
 * Features:
 * - Minimal alignment with separator lines like Experience page
 * - Clean typography with proper spacing
 * - Responsive design that works on all screen sizes
 * - Future-proof layout that never breaks with more posts
 * - Staggered animations for smooth loading
 * 
 * 🚀 HOW TO ADD NEW BLOG POSTS:
 * ========================================
 * 
 * 1. Open file: src/data/blogPosts.ts
 * 2. Copy this template:
 *    {
 *      id: [NEXT_NUMBER], // Use next sequential number
 *      title: "Your Blog Post Title",
 *      date: "2025-01-15", // Format: YYYY-MM-DD
 *      summary: "Brief description for preview",
 *      content: "Longer preview text if needed",
 *      tags: ["topic1", "topic2"],
 *      link: "https://your-substack-url.com/p/your-post"
 *    },
 * 3. Paste it at the BEGINNING of the blogPosts array (newest first)
 * 4. Update all fields with your content
 * 5. Save the file - changes appear immediately
 * 
 * 💡 BEST PRACTICES:
 * - Always add new posts at the top (beginning of array)
 * - Keep titles concise but descriptive
 * - Make summaries engaging (they hook readers)
 * - Use YYYY-MM-DD date format consistently
 * - Test your links before adding them
 * 
 * 🛡️ FUTURE-PROOFING:
 * - Layout automatically adapts to any number of posts
 * - No manual changes needed when adding content
 * - Responsive design works on all screen sizes
 * - Empty state shows helpful message if no posts exist
 */
export default function Playbook() {
  /**
   * Formats ISO date string to human-readable format
   * @param dateString - ISO date string (YYYY-MM-DD)
   * @returns Formatted date string (e.g., "December 15, 2024")
   */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#0A0A0A] overflow-y-scroll min-h-screen">
      {/* Main Container - Matches Experience page structure */}
      <main className="flex flex-col items-center w-full pt-16 sm:pt-20 md:pt-24">
        
        {/* Blog Posts Sections - Each post gets its own section like Experience page */}
        {blogPosts.map((post, index) => (
          <div key={post.id} className="flex flex-col items-center w-full">
            {/* Separator Line - Matches Experience page */}
            <div className="w-full h-px border-t border-[#333333]"></div>

            {/* Blog Post Container - Matches Experience page layout */}
            <div className="flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-10 w-full max-w-[1440px]">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row justify-between items-start w-full py-8 sm:py-12 md:py-16 lg:py-20 gap-4 sm:gap-6 lg:gap-48"
              >
                {/* Text Content - Left side */}
                <div className="flex flex-col items-start gap-2 sm:gap-3 w-full lg:w-auto lg:flex-1 order-2 lg:order-1">
                  {/* Blog Date - Small gray text above title */}
                  <div className="w-full h-[21px] flex items-center">
                    <time
                      className="text-[#888888] font-normal flex items-center"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(10px, 1vw, 12.25px)",
                        lineHeight: "21px",
                      }}
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>

                  {/* Blog Title - Main heading */}
                  <div className="w-full h-[45px] flex items-center">
                    <h2
                      className="text-[#EAEAEA] font-normal flex items-center"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(20px, 4vw, 36.75px)",
                        lineHeight: "45px",
                      }}
                    >
                      {post.title}
                    </h2>
                  </div>

                  {/* Blog Summary - Description */}
                  <div className="w-full">
                    <p
                      className="text-[#888888] font-normal"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.6",
                      }}
                    >
                      {post.summary}
                    </p>
                  </div>

                  {/* Read Full Article Button */}
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#0A0A0A] font-medium rounded-full hover:bg-gray-200 transition-colors text-sm sm:text-base whitespace-nowrap"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      }}
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>

                {/* Quote Box - Right side for larger content preview */}
                <div className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8 lg:max-w-md lg:min-w-[300px] lg:flex-shrink-0 order-1 lg:order-2 w-full lg:w-auto">
                  <blockquote 
                    className="text-[#888888] italic leading-relaxed"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontSize: "clamp(14px, 2vw, 16px)",
                      lineHeight: "1.6",
                    }}
                  >
                    "{post.content.length > 120 ? post.content.substring(0, 120) + '...' : post.content}"
                  </blockquote>
                  <div className="mt-4 pt-4 border-t border-[#333333]">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-[#333333] text-[#888888] rounded text-xs"
                          style={{
                            fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        ))}

        {/* Empty State - Shows when no blog posts exist */}
        {blogPosts.length === 0 && (
          <div className="flex flex-col items-center w-full">
            <div className="w-full h-px border-t border-[#333333]"></div>
            <div className="text-center py-16 sm:py-24 max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-10">
              <h2 className="text-[#EAEAEA] text-2xl md:text-3xl font-normal mb-4">
                No blog posts yet
              </h2>
              <p className="text-[#888888] text-base md:text-lg">
                Add your first post in <code className="bg-[#1A1A1A] px-2 py-1 rounded">src/data/blogPosts.ts</code>
              </p>
            </div>
          </div>
        )}

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
      </main>
    </div>
  );
}