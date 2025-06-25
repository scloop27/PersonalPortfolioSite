import React from "react";
import { motion } from "framer-motion";

/**
 * Props interface for the PlaybookPostCard component
 */
interface PlaybookPostCardProps {
  title: string;        // Blog post title
  contentSnippet: string; // Excerpt or summary of the post
  link: string;         // URL to the full blog post
  pubDate: string;      // Publication date in ISO format
  index: number;        // Used for staggered animations
}

/**
 * Individual blog post card component for the Playbook page
 * Features:
 * - Responsive layout (mobile stacks, desktop side-by-side)
 * - Framer Motion animations with staggered reveals
 * - Visual separators between posts
 * - Quote box with content preview
 * - External link handling with proper security attributes
 */
export default function PlaybookPostCard({ 
  title, 
  contentSnippet, 
  link, 
  pubDate, 
  index 
}: PlaybookPostCardProps) {
  /**
   * Formats ISO date string to human-readable format
   * @param dateString - ISO date string
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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 lg:gap-12">
        <div className="flex-1 min-w-0 lg:pr-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#EAEAEA] leading-tight break-words">
            {title}
          </h2>
          <p className="text-[#888888] leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg break-words">
            {contentSnippet}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#0A0A0A] font-medium rounded-full hover:bg-gray-200 transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            Read Full Article
          </a>
        </div>
        
        <div className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8 lg:max-w-md lg:min-w-[300px] lg:flex-shrink-0">
          <blockquote className="text-[#888888] italic leading-relaxed text-base sm:text-lg">
            "{contentSnippet.length > 120 ? contentSnippet.substring(0, 120) + '...' : contentSnippet}"
          </blockquote>
          <div className="mt-4 pt-4 border-t border-[#333333]">
            <time className="text-[#666666] text-sm">
              {formatDate(pubDate)}
            </time>
          </div>
        </div>
      </div>
    </motion.article>
  );
}