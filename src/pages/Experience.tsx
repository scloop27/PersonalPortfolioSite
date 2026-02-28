import { motion } from "framer-motion";

type ExperienceCategory = "FOUNDED" | "BUILT_FOR" | "MILESTONE";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  image: string;
  url: string;
  closed?: boolean;
}

const categoryConfig: Record<ExperienceCategory, { label: string; color: string; bg: string }> = {
  FOUNDED: { label: "Founded", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  BUILT_FOR: { label: "Built For", color: "text-blue-400", bg: "bg-blue-400/10" },
  MILESTONE: { label: "Milestone", color: "text-amber-400", bg: "bg-amber-400/10" },
};

export default function Experience() {
  const timeline: TimelineEntry[] = [
    // Present
    {
      year: "Present",
      title: "lyzn.ai",
      description: "Building personal AI superintelligence in beta. An AI companion that thinks, plans, and acts for users — starting with the Lyzn pendant and agentic flows.",
      category: "FOUNDED",
      image: "/images/experience/lyzn-ai.png",
      url: "https://lyzn.ai",
    },
    {
      year: "2024",
      title: "DOX",
      description: "AI co-pilot for administrative tasks. Built with a 3-agent architecture for robust document processing — perceive, reason, execute.",
      category: "BUILT_FOR",
      image: "/images/projects/dox.png",
      url: "https://doxpage.vercel.app/en",
    },
    {
      year: "2024",
      title: "GHMEV",
      description: "Shark Tank-backed EV company. Built their digital presence and product strategy for innovative e-bikes and wheelchairs.",
      category: "BUILT_FOR",
      image: "/images/projects/ghmev.png",
      url: "https://www.ghmev.in",
    },
    {
      year: "2024",
      title: "Alphacen",
      description: "AI execution partner for a France-based company. Built robust AI solutions to drive business automation.",
      category: "BUILT_FOR",
      image: "/images/projects/alphacen.png",
      url: "https://alphacen.fr/",
    },
    {
      year: "2024",
      title: "Juzzt",
      description: "Product Strategy & Execution for a dating app with rating-based compatibility. Defined the product roadmap and built the application.",
      category: "BUILT_FOR",
      image: "/images/experience/juzzt.png",
      url: "https://juzzt.com",
    },
    {
      year: "2024",
      title: "Mjollnir",
      description: "Product Builder for an EV bike rental application. Built the complete platform for Mjollnir's electric bike sharing service.",
      category: "BUILT_FOR",
      image: "/images/experience/mjollnir.png",
      url: "https://mjollnir.in",
    },
    {
      year: "2024",
      title: "Shark Tank India S4",
      description: "Pitched Avidia at the final round in Mumbai. Nearly an hour in the hot seat with Ritesh Agarwal, Aman Gupta, and Anupam Mittal.",
      category: "MILESTONE",
      image: "/images/personal/newsharktank.png",
      url: "https://shivacharanmandhapuram.substack.com/p/built-burnt-and-building-againmy",
    },
    {
      year: "2024",
      title: "Jagriti Yatra",
      description: "Alumnus of JY '24. 15-day entrepreneurial journey across 12 destinations, 8,000 km through India as one of 500+ founders.",
      category: "MILESTONE",
      image: "/images/personal/jagriti-yatra.png",
      url: "https://shivacharanmandhapuram.substack.com/p/built-burnt-and-building-againmy",
    },
    {
      year: "2024",
      title: "Certified Scrum Master",
      description: "Certified in agile methodologies and team dynamics for efficient product execution.",
      category: "MILESTONE",
      image: "/images/experience/scrum-master.png",
      url: "https://bcert.me/bc/html/show-badge.html?b=pygealnc",
    },
    {
      year: "2023",
      title: "CoffeeCodes",
      description: "Founded tech consultancy building MVPs for founders. Served 12+ clients, crossed 1M+ INR in revenue. Bridged technical execution and business strategy.",
      category: "FOUNDED",
      image: "/images/projects/coffeecodes.png",
      url: "#",
      closed: true,
    },
    {
      year: "2023",
      title: "Avidia",
      description: "Co-founded AI learning platform to combat 'tutorial hell'. Ran cohorts, brought in early revenue, and pitched at Shark Tank India.",
      category: "FOUNDED",
      image: "/images/projects/avidia.png",
      url: "#",
      closed: true,
    },
    {
      year: "2022",
      title: "NoobsLearning",
      description: "Founded and grew a 5,000+ member student community. Organized 15+ workshops and hackathons, fostering a hands-on builder culture.",
      category: "FOUNDED",
      image: "/images/experience/noobslearning.png",
      url: "#",
      closed: true,
    },
  ];

  // Group by year
  const years = Array.from(new Set(timeline.map(e => e.year)));

  return (
    <div className="flex flex-col items-center w-full bg-[#0A0A0A] min-h-screen">
      <main className="flex flex-col items-center w-full pt-24 sm:pt-28 md:pt-32">
        {/* Page Header */}
        <section className="w-full max-w-[900px] mx-auto px-5 sm:px-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-[#EAEAEA] font-semibold"
              style={{
                fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              }}
            >
              Experience
            </h1>
            <p className="text-[#666] mt-2 text-sm" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
              From founding ventures to shipping for clients across 5 countries.
            </p>
            {/* Category Legend */}
            <div className="flex flex-wrap gap-4 mt-6">
              {Object.entries(categoryConfig).map(([key, config]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className={`text-[10px] uppercase tracking-widest ${config.color} ${config.bg} px-2 py-0.5 rounded-full`}>
                    {config.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="w-full max-w-[900px] mx-auto px-5 sm:px-8 pb-16">
          {years.map((year, yearIdx) => {
            const entries = timeline.filter(e => e.year === year);
            return (
              <div key={year} className="relative">
                {/* Year marker */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div
                    className="text-white font-bold text-lg sm:text-xl px-4 py-1.5 bg-[#1a1a1a] border border-[#333] rounded-lg"
                    style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                  >
                    {year}
                  </div>
                  <div className="flex-1 h-px bg-[#222]" />
                </motion.div>

                {/* Entries for this year */}
                <div className="ml-0 sm:ml-4 border-l-2 border-[#222] pl-6 sm:pl-8 space-y-6 mb-12">
                  {entries.map((entry, entryIdx) => {
                    const cat = categoryConfig[entry.category];
                    const globalIdx = yearIdx * 10 + entryIdx;
                    return (
                      <motion.div
                        key={entry.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: entryIdx * 0.08 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Dot on timeline */}
                        <div className="absolute -left-[33px] sm:-left-[37px] top-2 w-3 h-3 rounded-full bg-[#333] border-2 border-[#0A0A0A]" />

                        {/* Entry card */}
                        <div className={`border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#444] transition-all duration-500 bg-[#0D0D0D] ${entry.closed ? 'opacity-60' : ''}`}>
                          <div className="flex flex-col sm:flex-row">
                            {/* Image */}
                            <div className="w-full sm:w-[240px] h-[160px] sm:h-auto flex-shrink-0 overflow-hidden">
                              <img
                                src={entry.image}
                                alt={entry.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              />
                            </div>
                            {/* Content */}
                            <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                              <div className="flex items-center gap-2 flex-wrap mb-2">
                                <h3
                                  className="text-[#EAEAEA] font-medium text-base sm:text-lg"
                                  style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                                >
                                  {entry.title}
                                </h3>
                                <span className={`text-[9px] uppercase tracking-widest ${cat.color} ${cat.bg} px-2 py-0.5 rounded-full`}>
                                  {cat.label}
                                </span>
                                {entry.closed && (
                                  <span className="text-[9px] uppercase tracking-widest text-[#666] bg-[#1a1a1a] px-2 py-0.5 rounded-full">
                                    Closed
                                  </span>
                                )}
                              </div>
                              <p className="text-[#888] text-sm leading-relaxed" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                                {entry.description}
                              </p>
                              {entry.url !== "#" && (
                                <a
                                  href={entry.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center mt-4 px-4 py-2 bg-white text-[#0A0A0A] rounded-full text-xs font-medium hover:bg-gray-200 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 self-start shadow"
                                >
                                  View
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 border-t border-[#222] w-full">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA]" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                  Shiva Charan
                  <br />
                  Mandhapuram
                </h2>
                <p className="text-[#666] text-sm mt-3">Have a project? <a href="/work" className="text-white hover:underline transition-all">Let's talk →</a></p>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div className="text-[#EAEAEA] font-medium mb-1">Socials</div>
                  <a href="https://x.com/shivacharanm7" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">X</a>
                  <a href="https://www.linkedin.com/in/shiva-charan-mandhapuram/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">LinkedIn</a>
                  <a href="https://www.instagram.com/shivacharanmandhapuram/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">Instagram</a>
                  <a href="https://shivacharanmandhapuram.substack.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">Substack</a>
                </div>
                <div className="space-y-4">
                  <div className="text-[#EAEAEA] font-medium mb-1">Contact</div>
                  <a href="https://forms.gle/Ncn648Sux1Tr9oJ16" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">Inquiry Form ↗</a>
                  <a href="tel:+917013154979" className="block hover:text-white transition-colors text-[#888]">+91 7013154979</a>
                </div>
              </div>
            </div>
            <div className="text-[10px] text-gray-600 text-center mt-12 tracking-tight opacity-80">
              Built with ⚡️
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
