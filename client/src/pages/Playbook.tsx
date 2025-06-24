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
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title & Thesis Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Founder's Playbook
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Building a company is more than code. It's about navigating change.
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            My journey has been defined by key strategic decisions that have shaped our resilience, culture, and path to growth. This playbook highlights some of those moments.
          </p>
          
          <hr className="border-gray-300 max-w-xs mx-auto" />
        </motion.div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-lg p-8 mb-12 text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic mb-4">
            "Every great company is built on a series of small decisions that compound over time. The key is recognizing which moments matter most."
          </blockquote>
          <cite className="text-gray-600 font-medium">— Advait Paliwal</cite>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 text-gray-600 bg-gray-200 rounded-full">
              Loading latest insights...
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 text-gray-600 bg-gray-200 rounded-full">
              Showing curated insights
            </div>
          </div>
        )}

        {/* Posts Grid - Two columns on desktop, single column on mobile */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-lg p-8 border border-gray-200 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Get the Playbook
            </h3>
            <p className="text-gray-600 mb-6">
              Receive founder insights, strategic frameworks, and lessons learned from building technology ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}