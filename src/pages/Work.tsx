import { motion } from "framer-motion";

/**
 * ========================================
 * 💼 THE WORK PAGE - CLIENT SHOWCASE
 * ========================================
 *
 * This page highlights global impact, ventures built, and client partnerships.
 */

export default function Work() {
    const stats = [
        { label: "Partners", value: "15+" },
        { label: "Countries Reached", value: "6+" },
        { label: "Value Created", value: "$1M+" },
    ];

    const projects = [
        {
            title: "Alphacen",
            description: "AI execution partner for a France-based company. Building robust and scalable AI solutions to drive business automation.",
            tags: ["AI", "France"],
            image: "/images/projects/alphacen.png",
            url: "https://alphacen.fr/",
            hasVideoPlaceholder: true,
        },
        {
            title: "Juzzt",
            description: "Product Strategy & Execution for a modern dating app focused on meaningful connections.",
            tags: ["Dating App", "Mobile"],
            image: "/images/experience/juzzt.png",
            url: "https://juzzt.com/",
        },
        {
            title: "Blessings Health Care",
            description: "Comprehensive digital presence and patient portal for a healthcare clinic based in Fall River, MA.",
            tags: ["Healthcare", "USA"],
            image: "/images/projects/blessings.png",
            url: "https://www.blessingshealth.org",
        },
        {
            title: "lyzn.ai & flow.lyzn.ai",
            description: "Building personal AI superintelligence. An AI companion that thinks, plans, and acts for users across various workflows.",
            tags: ["AI Agents", "Platform"],
            image: "/images/experience/lyzn-ai.png",
            url: "https://lyzn.ai",
        },
        {
            title: "Mjollnir",
            description: "Product Builder for an EV bike rental application, facilitating sustainable transportation solutions.",
            tags: ["EV", "Rental", "Mobile"],
            image: "/images/experience/mjollnir.png",
            url: "https://mjollnir.in",
        }
    ];

    return (
        <div className="flex flex-col items-center w-full bg-[#0A0A0A] overflow-y-scroll min-h-screen">
            <main className="flex flex-col items-center w-full pt-16 sm:pt-20 md:pt-24 pb-20">

                {/* HERO SECTION */}
                <section className="flex flex-col justify-center items-start w-full px-6 sm:px-8 md:px-10 lg:px-12 max-w-[1440px] mt-12 mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[#EAEAEA] font-normal leading-tight tracking-tight w-full"
                        style={{
                            fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                            fontSize: "clamp(2rem, 5vw, 64px)",
                            lineHeight: "1.1",
                            maxWidth: "800px",
                        }}
                    >
                        Ventures Built. <br />
                        <span className="text-[#888888]">Global impact through code.</span>
                    </motion.h1>

                    {/* STATS ROW */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-row flex-wrap gap-8 sm:gap-16 mt-12"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                    {stat.value}
                                </span>
                                <span className="text-[#888888] text-sm sm:text-base mt-2 uppercase tracking-widest font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* PROJECTS GRID */}
                <section className="w-full px-6 sm:px-8 md:px-10 lg:px-12 max-w-[1440px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {projects.map((project, index) => (
                            <motion.a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group flex flex-col bg-[#111111] border border-[#222222] hover:border-[#444444] rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                {/* Project Image Area */}
                                <div className="w-full h-48 sm:h-64 bg-gray-800 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent z-10 opacity-60"></div>

                                    {/* Video Placeholder for Alphacen */}
                                    {project.hasVideoPlaceholder ? (
                                        <div className="w-full h-full flex items-center justify-center bg-[#1A1A1A] group-hover:bg-[#222] transition-colors relative z-0">
                                            {/* Add actual video tag here when ready */}
                                            <div className="text-center">
                                                <svg className="w-12 h-12 text-[#666] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-xs text-[#666] uppercase tracking-wider font-medium">Client Review Video Placeholder</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    )}

                                    {/* Overlay Tags */}
                                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-medium text-[#EAEAEA] mb-3 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#888888] text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center text-[#EAEAEA] text-sm font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
                                        Visit Site
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}
