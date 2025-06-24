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
      className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="mb-4">
        <time className="text-sm text-gray-500 font-medium">
          {formatDate(pubDate)}
        </time>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
        {contentSnippet}
      </p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 transition-colors text-sm"
      >
        Read
      </a>
    </motion.article>
  );
}