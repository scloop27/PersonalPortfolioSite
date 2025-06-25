import { motion } from "framer-motion";
import PlaybookPostCard from "@/components/PlaybookPostCard";
import { blogPosts, BlogPost } from "@/data/blogPosts";

/**
 * Playbook page component - displays blog posts from static data
 * Features:
 * - Static blog post display
 * - Responsive design for all devices
 * - Direct links to Substack posts
 * - Clean, minimal layout
 */
export default function Playbook() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Posts - Single column layout with proper spacing */}
        <div className="divide-y-0">
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
        </div>
      </div>
    </div>
  );
}