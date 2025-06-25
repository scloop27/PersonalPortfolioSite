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
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 lg:gap-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 leading-tight break-words">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base break-words">
            {contentSnippet}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-colors text-xs sm:text-sm whitespace-nowrap"
          >
            Read Full Article
          </a>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4 sm:p-6 lg:p-8 lg:max-w-sm">
          <blockquote className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
            "{contentSnippet.substring(0, 150)}..."
          </blockquote>
        </div>
      </div>
    </motion.article>
  );
}