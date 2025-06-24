import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ThoughtCard from "@/components/ThoughtCard";
import { useState } from "react";

interface SubstackPost {
  title: string;
  description: string;
  pubDate: string;
  link: string;
}

export default function Thoughts() {
  const [email, setEmail] = useState("");

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<SubstackPost[]>({
    queryKey: ["/api/substack-feed"],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Fallback thoughts if RSS feed fails
  const fallbackThoughts = [
    {
      title: "The Future of AI Hardware",
      description:
        "As we move beyond smartphones, the next frontier lies in seamless, wearable AI devices that understand context and emotion. The convergence of miniaturization and intelligence will create entirely new interaction paradigms...",
      date: "Dec 15, 2024",
      link: "#",
    },
    {
      title: "Building in Public: Lessons from Y Combinator",
      description:
        "Transparency in the startup journey creates unexpected opportunities. Here's what I learned about community building, customer feedback loops, and the power of authentic storytelling in the early stages...",
      date: "Dec 10, 2024",
      link: "#",
    },
    {
      title: "The Psychology of Product-Market Fit",
      description:
        "Finding product-market fit isn't just about metrics—it's about understanding the emotional resonance between your solution and your users' deepest frustrations. Here's how we discovered it at Noobsverse...",
      date: "Dec 5, 2024",
      link: "#",
    },
    {
      title: "Community as a Competitive Moat",
      description:
        "The most successful technology companies don't just build products—they build ecosystems. Our experience growing Noobslearning to 5,000+ members taught us that community is the ultimate moat...",
      date: "Nov 28, 2024",
      link: "#",
    },
    {
      title: "The Art of Technical Storytelling",
      description:
        "Complex technology needs simple stories. Whether pitching to investors or explaining to users, the ability to distill complex technical concepts into compelling narratives determines success...",
      date: "Nov 20, 2024",
      link: "#",
    },
    {
      title: "Scaling Without Losing Soul",
      description:
        "As startups grow, maintaining culture and core values becomes the ultimate challenge. Here are the frameworks and practices that helped us scale while preserving what made us special...",
      date: "Nov 15, 2024",
      link: "#",
    },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const thoughtsToDisplay =
    posts && posts.length > 0 ? posts : fallbackThoughts;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Thoughts
        </motion.h1>

        {isLoading && (
          <div className="text-center mb-16">
            <p className="text-gray-400">Loading latest thoughts...</p>
          </div>
        )}

        {error && (
          <div className="text-center mb-16">
            <p className="text-gray-400">Showing recent thoughts</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {thoughtsToDisplay.map((thought, index) => (
            <ThoughtCard
              key={index}
              title={thought.title}
              description={thought.description}
              date={thought.pubDate || thought.date}
              link={thought.link}
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
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get insights on building technology ventures, AI innovation, and
              entrepreneurship delivered to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-[#111111] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#111111] font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
