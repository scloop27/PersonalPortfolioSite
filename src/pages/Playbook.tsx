import { motion } from "framer-motion";
import PlaybookPostCard from "../components/PlaybookPostCard";
import { blogPosts, BlogPost } from "../data/blogPosts";

/**
 * ========================================
 * 📝 PLAYBOOK PAGE - BLOG POSTS DISPLAY
 * ========================================
 * 
 * This page displays your blog posts in a clean, readable format.
 * Features:
 * - Navigation bar with glassy backdrop effect
 * - Static blog post display from data file
 * - Responsive design for all devices
 * - Direct links to Substack posts
 * - Clean, minimal layout with proper spacing
 * 
 * 📋 TO ADD A NEW BLOG POST:
 * Go to client/src/data/blogPosts.ts and follow the guide there
 * 
 * 🎨 TO UPDATE STYLING:
 * Modify the Tailwind classes below or in PlaybookPostCard component
 * 
 * 🛡️ FUTURE-PROOFING:
 * The layout automatically adjusts for any number of blog posts
 * No manual changes needed when adding new posts
 */
export default function Playbook() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
          {/* Blog posts list with future-proof layout */}
          <div className="space-y-8 sm:space-y-12">
            {blogPosts.map((post, index) => (
              <PlaybookPostCard
                key={post.id}
                title={post.title}
                contentSnippet={post.summary}
                link={post.link}
                pubDate={post.date}
                index={index}
              />
            ))}
            
            {/* Empty state fallback */}
            {blogPosts.length === 0 && (
              <div className="text-center py-16 sm:py-24">
                <div className="text-gray-400 text-lg mb-4">No blog posts yet</div>
                <div className="text-gray-600 text-sm">
                  Add your first post in src/data/blogPosts.ts
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}