import React from "react";
import { motion } from "framer-motion";
import PlaybookPostCard from "../components/PlaybookPostCard";
import { blogPosts, BlogPost } from "../data/blogPosts";

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
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Posts - Single column layout with proper spacing */}
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
        </div>
      </div>
    </div>
  );
}