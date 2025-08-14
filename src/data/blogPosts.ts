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
 * 📝 SHIVA'S AUTHENTIC CONTENT LEVERAGE STRATEGY
 * ========================================
 *
 * Building specific knowledge through documented execution.
 * Each post should answer: "What do I know that others don't?"
 *
 * As Naval teaches: "Specific knowledge is knowledge you cannot be trained for."
 * As Paul Graham writes: "Write about what you've learned, not what you think you should write about."
 *
 * Your blog posts become leverage assets that:
 * - Attract aligned opportunities
 * - Build reputation through authenticity
 * - Create compound content that works while you sleep
 * - Document your unique journey and insights
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
      "entrepreneurship",
      "failure",
      "execution",
      "early-stage",
      "learning",
    ],
    link: "https://substack.com/@shivacharanmandhapuram/p-170364005",
  },
  // 📝 ADD YOUR NEXT POSTS HERE:
  //
  // Leverage-building content ideas for your next posts:
  // - "How I Pitched at Shark Tank India: What They Don't Tell You"
  // - "Building Products vs Building Features: Lessons from Client Work"
  // - "The Real Cost of Tutorial Hell (And How Avidia Solved It)"
  // - "From Community Building to Product Building: The Noobslearning Journey"
  // - "What 12+ Client Projects Taught Me About Product-Market Fit"
  // - "The Jagriti Yatra Experience: Learning from India's Grassroots Entrepreneurs"
  //
  // Template for your next post:
  // {
  //   id: 2, // Always increment from highest existing ID
  //   title: "Your Next Post Title",
  //   date: "2025-08-XX", // Use actual publication date
  //   summary: "Hook that makes people want to read more...",
  //   content: "Expanded preview that shows your specific insights...",
  //   tags: ["relevant", "keywords", "for", "your", "content"],
  //   link: "https://substack.com/@shivacharanmandhapuram/p-[your-next-post]",
  // },
];
