/**
 * BLOG POSTS DATA - Easy to Edit!
 * 
 * To add a new blog post:
 * 1. Copy the structure below and paste it at the beginning of the array
 * 2. Update the id to be one higher than the highest existing id
 * 3. Fill in your title, date (YYYY-MM-DD format), summary, content preview, and tags
 * 4. Add your actual Substack URL in the 'link' field
 * 
 * The 'link' field should contain the full URL to your Substack post
 * Each post will have a "Read Full Article" button that opens this link in a new tab
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