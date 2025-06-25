import React from "react";
import { motion } from "framer-motion";

/**
 * About page component - Homepage with hero section and project showcase
 * Features:
 * - Responsive hero section with dynamic typography
 * - Project grid with hover effects and animations
 * - Mobile-optimized layout and spacing
 * - SF Pro Display typography for native feel
 */
export default function About() {
  // Static project data - could be moved to API in future
  const projects = [
    {
      title: "Friday",
      description: "AI assistant for email. Backed by Y Combinator.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386",
    },
    {
      title: "YouLearn",
      description: "AI tutor for students. 1M+ users.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386",
    },
    {
      title: "Iris",
      description: "AI wearable that gives you infinite memory.",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386",
    },
    {
      title: "Commencement Speech",
      description:
        "Spoke about chasing rejection to over 10,000 students at my graduation.",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0A0A0A] overflow-y-scroll min-h-screen">
      {/* Main Container */}
      <main className="flex flex-col items-center w-full pt-16 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="flex flex-row justify-center items-center w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen -mt-9">
          <div className="flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-[1440px]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#EAEAEA] font-normal leading-tight tracking-tight w-full"
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, system-ui, sans-serif",
                fontSize: "clamp(1.6rem, 5.5vw, 60px)",
                lineHeight: "clamp(2rem, 6.5vw, 80px)",
                letterSpacing: "clamp(-0.3px, -0.1vw, -1.28px)",
                maxWidth: "100%",
              }}
            >
              Hi, I'm Shiva — a 21 year old founder. I am passionate about
              building technology that makes a meaningful impact on people's
              lives.
            </motion.h1>
          </div>
        </section>

        {/* Projects Sections */}
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Separator Line */}
            <div className="w-full h-px border-t border-[#333333]"></div>

            {/* Project Container */}
            <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-[1440px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row justify-between items-start w-full py-12 sm:py-16 md:py-20 gap-6 sm:gap-8 lg:gap-48"
              >
                {/* Text Content */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1 order-2 lg:order-1">
                  {/* Title */}
                  <div className="w-full flex items-center">
                    <h2
                      className="text-[#EAEAEA] font-normal"
                      style={{
                        fontFamily:
                          "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(20px, 3vw, 26.6016px)",
                        lineHeight: "1.2",
                      }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="w-full flex items-start">
                    <p
                      className="text-[#888888] font-normal leading-relaxed"
                      style={{
                        fontFamily:
                          "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(14px, 2vw, 17.3438px)",
                        lineHeight: "1.6",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Button Container */}
                  <div className="flex flex-col items-start pt-4 sm:pt-6 md:pt-8">
                    <button className="flex flex-row items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors px-6 py-3 min-w-[85px] h-[47px]">
                      <span
                        className="text-[#0A0A0A] font-normal flex items-center justify-center"
                        style={{
                          fontFamily:
                            "'SF Pro Display', -apple-system, system-ui, sans-serif",
                          fontSize: "clamp(14px, 1vw, 16.0312px)",
                          lineHeight: "27px",
                        }}
                      >
                        View
                      </span>
                    </button>
                  </div>
                </div>

                {/* Image Container */}
                <div
                  className="flex flex-col items-start w-full lg:w-[687.06px] lg:h-[393.47px] order-1 lg:order-2"
                  style={{ paddingBottom: "7px" }}
                >
                  {index === 0 ? (
                    // Friday project - Purple gradient with email icon
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                      <div className="text-center text-white px-8 relative z-10">
                        <h3 className="text-3xl font-medium mb-2 drop-shadow-lg">
                          Never check your
                          <br />
                          email again
                        </h3>
                        <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mt-8 flex items-center justify-center shadow-lg">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    // YouLearn project - Dark interface mockup
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl overflow-hidden shadow-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/30"></div>
                      <div className="h-full p-6 relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-white text-lg font-medium drop-shadow-md">
                            YouLearn
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-800/80 rounded-lg p-4 h-20 backdrop-blur-sm"></div>
                          <div className="bg-gray-800/80 rounded-lg p-4 h-20 backdrop-blur-sm"></div>
                          <div className="bg-gray-700/80 rounded-lg p-4 h-16 col-span-2 backdrop-blur-sm"></div>
                          <div className="bg-purple-600/90 rounded-lg p-4 h-12 shadow-lg"></div>
                          <div className="bg-gray-800/80 rounded-lg p-4 h-12 backdrop-blur-sm"></div>
                        </div>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    // Iris project - Wearable device mockup
                    <div className="w-full h-full flex items-center justify-center space-x-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                      <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border border-gray-300 flex items-center justify-center shadow-xl relative z-10">
                        <div className="w-4 h-4 bg-black rounded-full shadow-sm"></div>
                      </div>
                      <div className="relative z-10">
                        <div className="w-24 h-48 bg-gradient-to-b from-white to-gray-50 rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden">
                          <div className="bg-gradient-to-r from-gray-900 to-black h-6 rounded-t-2xl"></div>
                          <div className="p-2 space-y-2">
                            <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-2 rounded"></div>
                            <div className="bg-gradient-to-r from-gray-300 to-gray-400 h-2 rounded w-3/4"></div>
                            <div className="bg-gradient-to-r from-purple-200 to-purple-300 h-4 rounded mt-4"></div>
                            <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-2 rounded"></div>
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full shadow-sm"></div>
                            <span>Smart reminder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Commencement Speech - Video player mockup
                    <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-xl overflow-hidden shadow-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl border border-white/10">
                          <svg
                            className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-1 drop-shadow-lg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-6 z-10">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-2 sm:space-x-4 w-full">
                            <span className="text-xs sm:text-sm drop-shadow-md">02:34</span>
                            <div className="flex-1 h-1 bg-white/30 rounded-full backdrop-blur-sm">
                              <div className="h-full w-1/3 bg-white rounded-full shadow-sm"></div>
                            </div>
                            <span className="text-xs sm:text-sm drop-shadow-md">15:42</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 grid grid-cols-3 gap-1 z-10">
                        <div className="w-6 h-4 sm:w-8 sm:h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-sm shadow-lg"></div>
                        <div className="w-6 h-4 sm:w-8 sm:h-6 bg-gradient-to-r from-green-600 to-green-700 rounded-sm shadow-lg"></div>
                        <div className="w-6 h-4 sm:w-8 sm:h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-sm shadow-lg"></div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Footer Section */}
        <footer className="py-16 border-t border-[#333333] w-full">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
                  Shiva Charan
                  <br />
                  Mandhpauram
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-3">
                  <a
                    href="https://x.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    X
                  </a>
                  <a
                    href="https://linkedin.com/in/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    GitHub
                  </a>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Google Scholar
                  </a>
                  <a
                    href="https://shivacharan.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Substack
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
