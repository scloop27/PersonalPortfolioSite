/**
 * BLOG POSTS DATA - Easy to Edit!
 * 
 * ========================================
 * 📝 HOW TO ADD A NEW BLOG POST:
 * ========================================
 * 
 * 1. COPY this template and paste it at the BEGINNING of the blogPosts array:
 * 
 * {
 *   id: [NEXT_NUMBER], // Use the next sequential number (current highest + 1)
 *   title: "Your Blog Post Title Here",
 *   date: "2025-01-15", // Format: YYYY-MM-DD (year-month-day)
 *   summary: "Brief description that appears in the preview card",
 *   content: "Longer preview text if needed",
 *   tags: ["entrepreneurship", "ai", "startup"], // Relevant topic tags
 *   link: "https://your-substack-url.com/p/your-post" // Full URL to your Substack post
 * },
 * 
 * 2. SAVE the file - changes appear immediately!
 * 
 * ========================================
 * 📋 FIELD EXPLANATIONS:
 * ========================================
 * - id: Unique number for each post (increment from highest existing)
 * - title: Appears as the main heading on the blog card
 * - date: Used for chronological sorting (newest first)
 * - summary: Shows in both the main text and the quote box
 * - content: Currently same as summary, can be different preview text
 * - tags: Array of topic keywords (not currently displayed but ready for future use)
 * - link: When users click "Read Full Article", this is where they go
 * 
 * ========================================
 * 🎨 HOW IT APPEARS ON THE SITE:
 * ========================================
 * Each blog post creates a card with:
 * - Large title text
 * - Summary description
 * - "Read Full Article" button (links to your Substack)
 * - Quote box on the right with text preview
 * 
 * The posts automatically appear in date order (newest first)
 */

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 4,
    title: "The Future of AI-Powered Development",
    date: "2024-12-20",
    summary: "Exploring how artificial intelligence is reshaping the way we build software and what it means for developers...",
    content: "As AI tools become more sophisticated, the landscape of software development is evolving rapidly. From code generation to automated testing, we're witnessing a transformation that could redefine what it means to be a developer.",
    tags: ["AI", "Development", "Future", "Technology"],
    link: "https://advaitpaliwal.substack.com/p/future-of-ai-development"
  },
  {
    id: 3,
    title: "Building My First Startup at 21",
    date: "2024-12-10",
    summary: "Lessons learned from launching a company while still in college and the challenges of young entrepreneurship...",
    content: "Starting a company at 21 comes with unique challenges and opportunities. Here's what I've learned about building products, managing teams, and staying focused on what matters most.",
    tags: ["Entrepreneurship", "Startup", "Leadership", "Personal"],
    link: "https://advaitpaliwal.substack.com/p/building-startup-at-21"
  },
  {
    id: 2,
    title: "The Art of Product Design",
    date: "2024-11-28",
    summary: "How thoughtful design principles can make or break a product, with real examples from successful companies...",
    content: "Great product design isn't just about making things look pretty. It's about understanding user needs, solving real problems, and creating experiences that feel intuitive and delightful.",
    tags: ["Design", "Product", "UX", "Strategy"],
    link: "https://advaitpaliwal.substack.com/p/art-of-product-design"
  },
  {
    id: 1,
    title: "Building My First Full-Stack Application",
    date: "2024-11-15",
    summary: "Lessons learned while building a React and Express application from scratch, including common pitfalls and solutions...",
    content: "Building a full-stack application from the ground up taught me valuable lessons about architecture, deployment, and user experience. Here are the key insights that shaped my development approach.",
    tags: ["React", "Express", "Full-Stack", "Development"],
    link: "https://advaitpaliwal.substack.com/p/first-fullstack-app"
  }
];