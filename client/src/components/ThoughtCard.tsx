import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ThoughtCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  index: number;
}

export default function ThoughtCard({ title, description, date, link, index }: ThoughtCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <time className="text-sm text-gray-400">{date}</time>
        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-4">
        {description}
      </p>
      
      <a
        href={link}
        className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors"
      >
        Read more
        <ArrowUpRight className="w-4 h-4 ml-1" />
      </a>
    </motion.article>
  );
}