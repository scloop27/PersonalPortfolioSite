/**
 * ========================================
 * 📝 BLOG POSTS DATA - EASY TO EDIT!
 * ========================================
 *
 * This file contains all your blog posts. Adding new posts is simple and safe.
 * The layout automatically adjusts for any number of posts - no manual changes needed.
 *
 * ➕ HOW TO ADD A NEW BLOG POST:
 * ========================================
 *
 * 1. **COPY this template:**
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
 * 2. **PASTE it at the BEGINNING** of the blogPosts array below (newest posts first)
 * 3. **UPDATE all the fields** with your blog post information
 * 4. **SAVE the file** - changes appear immediately on the site!
 *
 * ❌ HOW TO DELETE A BLOG POST:
 * ========================================
 *
 * 1. Find the blog post object you want to remove
 * 2. Delete the entire object (from { to }, including the comma)
 * 3. Save the file
 *
 * ✏️ HOW TO EDIT AN EXISTING BLOG POST:
 * ========================================
 *
 * 1. Find the blog post you want to edit in the array below
 * 2. Update any field: title, date, summary, content, tags, or link
 * 3. Save the file - changes appear immediately
 *
 * 🔄 EXAMPLE: Adding a New Blog Post
 * ========================================
 *
 * **BEFORE:**
 * export const blogPosts: BlogPost[] = [
 *   {
 *     id: 1,
 *     title: "Why I'm Building in Public",
 *     date: "2024-12-15",
 *     // ... rest of post
 *   },
 *   // ... other posts
 * ];
 *
 * **AFTER (with new post added):**
 * export const blogPosts: BlogPost[] = [
 *   {
 *     id: 2, // 👈 NEW POST ADDED HERE (newest first)
 *     title: "My Latest Thoughts on AI",
 *     date: "2025-01-20",
 *     summary: "Exploring the future of artificial intelligence and its impact on entrepreneurship.",
 *     content: "Exploring the future of artificial intelligence and its impact on entrepreneurship.",
 *     tags: ["ai", "entrepreneurship", "future"],
 *     link: "https://yoursubstack.com/p/ai-thoughts"
 *   },
 *   {
 *     id: 1,
 *     title: "Why I'm Building in Public",
 *     date: "2024-12-15",
 *     // ... rest of post
 *   },
 *   // ... other posts
 * ];
 *
 * ========================================
 * 📋 FIELD EXPLANATIONS:
 * ========================================
 * - **id**: Unique number for each post (increment from highest existing)
 * - **title**: Appears as the main heading on the blog card
 * - **date**: Used for chronological sorting (newest first) - Format: YYYY-MM-DD
 * - **summary**: Shows in both the main text and the quote box preview
 * - **content**: Currently same as summary, can be different preview text
 * - **tags**: Array of topic keywords (ready for future filtering features)
 * - **link**: When users click "Read Full Article", this is where they go
 *
 * ========================================
 * 🎨 HOW IT APPEARS ON THE SITE:
 * ========================================
 * Each blog post creates a responsive card with:
 * - Large title text (scales with screen size)
 * - Summary description with proper line spacing
 * - "Read Full Article" button (opens your Substack post)
 * - Quote box on the right with text preview (mobile: below main content)
 * - Staggered animation effects for smooth loading
 *
 * 🛡️ FUTURE-PROOFING:
 * ========================================
 * - Posts automatically appear in date order (newest first)
 * - Layout scales gracefully with any number of posts
 * - Responsive design works on all screen sizes
 * - Empty state shows helpful message if no posts exist
 * - No manual layout changes needed when adding content
 */

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  link: string;
  featuredImage?: string; // Optional field for blog post images
}

/**
 * ========================================
 * 📝 BLOG POSTS DATA - COMPREHENSIVE EDITING GUIDE
 * ========================================
 *
 * 🎯 QUICK REFERENCE - File: src/data/blogPosts.ts, Lines: 150+
 *
 * This array contains all your blog posts. The Playbook page automatically
 * displays them in a clean, responsive layout. Changes appear immediately.
 *
 * ➕ TO ADD A NEW BLOG POST:
 * 1. Copy this exact template:
 *    {
 *      id: [NEXT_NUMBER], // 📝 EDIT: Use next sequential number (current highest + 1)
 *      title: "Your Blog Post Title Here", // 📝 EDIT: Main heading
 *      date: "2025-01-15", // 📝 EDIT: Format YYYY-MM-DD (newest date first)
 *      summary: "Brief description for the preview card", // 📝 EDIT: Card preview text
 *      content: "Longer preview text for the quote box", // 📝 EDIT: Quote box text
 *      tags: ["topic1", "topic2"], // 📝 EDIT: Relevant keywords
 *      link: "https://your-substack-url.com/p/your-post", // 📝 EDIT: Full URL to your post
 *      featuredImage: "/images/blog/your-blog-image.png" // 📝 OPTIONAL: Blog featured image
 *    },
 * 2. Paste it at the BEGINNING of the blogPosts array (newest first)
 * 3. Update ALL fields with your blog post information
 * 4. Make sure the ID is the next number in sequence
 * 5. Save the file - changes appear immediately on the site
 *
 * ❌ TO DELETE A BLOG POST:
 * 1. Find the blog post object you want to remove
 * 2. Delete the entire object (from { to }, including the comma)
 * 3. Save the file
 *
 * ✏️ TO EDIT EXISTING BLOG POST:
 * 1. Find the blog post in the array below
 * 2. Update any field: title, date, summary, content, tags, or link
 * 3. Save the file - changes appear immediately
 *
 * 📝 FIELD EXPLANATIONS:
 * - id: Unique number for each post (always increment from highest existing)
 * - title: Blog post title (appears as main heading on the card)
 * - date: Publication date in YYYY-MM-DD format (used for sorting, newest first)
 * - summary: Brief description that appears in the main card text
 * - content: Text that appears in the quote box preview (can be same as summary)
 * - tags: Array of topic keywords (ready for future filtering features)
 * - link: Full URL where users go when they click "Read Full Article"
 *
 * 🔄 ORDER & SORTING:
 * Posts automatically appear in date order (newest first).
 * Always add new posts at the BEGINNING of the array.
 * The layout automatically adjusts for any number of posts.
 *
 * 🎨 HOW IT APPEARS ON THE SITE:
 * Each blog post creates a responsive card with:
 * - Large title text (scales with screen size)
 * - Summary description with proper line spacing
 * - "Read Full Article" button (opens your link)
 * - Quote box on the right with content preview (mobile: below main content)
 * - Staggered animation effects for smooth loading
 *
 * 🛡️ FUTURE-PROOFING:
 * - Posts automatically appear in chronological order
 * - Layout scales gracefully with any number of posts
 * - Responsive design works on all screen sizes
 * - Empty state shows helpful message if no posts exist
 * - No manual layout changes needed when adding content
 *
 * 💡 BEST PRACTICES:
 * - Keep titles concise but descriptive
 * - Make summaries engaging (they're the preview that hooks readers)
 * - Use relevant tags (future filtering feature)
 * - Always test your links before adding them
 * - Keep consistent date format: YYYY-MM-DD
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Built, Burnt, and Building Again–My Startup Story at 19",
    date: "2025-08-14",
    summary:
      "How starting my first company at 19 taught me the difference between building features and building businesses—and why failing fast became my competitive advantage.",
    content:
      "At 19, I thought passion and code were enough to build a startup. Two years and one failed venture later, I learned that execution beats ideas, user validation beats assumptions, and building something people pay for beats building something people praise.",
    tags: [
      "Entrepreneurship",
      "Failure",
      "Execution",
      "Early-Stage",
      "Learning",
    ],
    link: "https://substack.com/@shivacharanmandhapuram/p-170364005",
  },
];
