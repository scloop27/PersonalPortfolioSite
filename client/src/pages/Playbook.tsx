import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import PlaybookPostCard from "@/components/PlaybookPostCard";

interface PlaybookPost {
  title: string;
  contentSnippet: string;
  link: string;
  pubDate: string;
}

export default function Playbook() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<PlaybookPost[]>({
    queryKey: ["/api/playbook-feed"],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Fallback posts if RSS feed fails
  const fallbackPosts = [
    {
      title: "The Art of Product-Market Fit",
      contentSnippet:
        "Finding product-market fit isn't just about building features—it's about understanding the emotional connection between your solution and your users' deepest needs. Here's how we discovered it through community feedback...",
      link: "#",
      pubDate: "2024-12-15",
    },
    {
      title: "Building Communities That Scale",
      contentSnippet:
        "Growing Noobslearning to 5,000+ members taught us that community isn't just about numbers—it's about creating genuine value and fostering meaningful connections. Here are the key principles...",
      link: "#",
      pubDate: "2024-12-10",
    },
    {
      title: "Navigating Y Combinator: Lessons Learned",
      contentSnippet:
        "Y Combinator taught us that successful startups aren't just about great ideas—they're about execution, timing, and relentless focus on customer needs. Here's what we learned...",
      link: "#",
      pubDate: "2024-12-05",
    },
    {
      title: "The Psychology of User Engagement",
      contentSnippet:
        "Understanding why users engage with your product goes beyond features and functionality. It's about creating experiences that resonate on a deeper level...",
      link: "#",
      pubDate: "2024-11-28",
    },
    {
      title: "Remote-First Culture Design",
      contentSnippet:
        "Building a strong remote culture requires intentional design and clear communication protocols. Here's how we scaled our team across multiple time zones...",
      link: "#",
      pubDate: "2024-11-20",
    },
    {
      title: "Technical Storytelling for Founders",
      contentSnippet:
        "Complex technology needs simple stories. Whether pitching to investors or explaining to users, storytelling determines success. Here's our framework...",
      link: "#",
      pubDate: "2024-11-15",
    },
  ];

  const postsToDisplay = posts && posts.length > 0 ? posts : fallbackPosts;

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Loading State */}
        {isLoading && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-full">
              Loading latest posts...
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-full">
              Showing recent posts
            </div>
          </div>
        )}

        {/* Posts - Single column layout matching the design */}
        <div className="space-y-0">
          {postsToDisplay.map((post, index) => (
            <PlaybookPostCard
              key={index}
              title={post.title}
              contentSnippet={post.contentSnippet}
              link={post.link}
              pubDate={post.pubDate}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}