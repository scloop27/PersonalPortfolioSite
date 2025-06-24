import { motion } from "framer-motion";

interface PlaybookPostCardProps {
  title: string;
  contentSnippet: string;
  link: string;
  pubDate: string;
  index: number;
}

export default function PlaybookPostCard({ 
  title, 
  contentSnippet, 
  link, 
  pubDate, 
  index 
}: PlaybookPostCardProps) {
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
      className="mb-16"
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {contentSnippet}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-colors text-sm"
          >
            Read
          </a>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-8 max-w-sm">
          <blockquote className="text-gray-700 italic leading-relaxed">
            "{contentSnippet.substring(0, 150)}..."
          </blockquote>
        </div>
      </div>
    </motion.article>
  );
}