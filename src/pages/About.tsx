import { motion } from "framer-motion";

/**
 * ========================================
 * 🏠 ABOUT PAGE - HOMEPAGE & PROJECT SHOWCASE
 * ========================================
 *
 * This is the main landing page that visitors see first.
 * Contains: Hero intro text + 4 project showcases + footer
 *
 * 🎯 TO UPDATE YOUR INTRO TEXT:
 * Find line ~62-64 and change the text inside the <motion.h1> tag
 *
 * 🚀 TO UPDATE PROJECTS:
 * Modify the 'projects' array below (lines ~47-75)
 * Each project has: title, description, and decorative image URL
 *
 * 🎨 PROJECT MOCKUPS:
 * Each project gets a custom visual mockup (not the image URL)
 * - Friday (index 0): Purple email interface
 * - YouLearn (index 1): Dark dashboard interface
 * - Iris (index 2): Light wearable device mockup
 * - Commencement Speech (index 3): Video player interface
 *
 * 📱 RESPONSIVE DESIGN:
 * - Mobile: Single column, stacked layout
 * - Desktop: Side-by-side text and mockup
 * - Typography scales automatically with clamp()
 */
export default function About() {
  /**
   * ========================================
   * 📋 PROJECT DATA - COMPREHENSIVE EDITING GUIDE
   * ========================================
   *
   * 🎯 QUICK REFERENCE - File: src/pages/About.tsx, Lines: 47-93
   *
   * ➕ TO ADD A NEW PROJECT:
   * 1. Copy this exact template:
   *    {
   *      title: "Your Project Name", // 📝 EDIT: Main project heading
   *      description: "Brief description of what your project does and its impact", // 📝 EDIT: Project summary
   *      image: "https://images.unsplash.com/photo-example", // Decorative only - not displayed
   *    },
   * 2. Paste it at the END of the projects array (line 92, before the closing ];)
   * 3. Update title and description with your project information
   * 4. Add a custom visual mockup (see mockup guide below)
   * 5. Save the file - changes appear immediately
   *
   * ❌ TO DELETE A PROJECT:
   * 1. Find the project object you want to remove in lines 65-92
   * 2. Delete the entire object (from { to }, including the comma)
   * 3. Remove the corresponding mockup design in lines 200-320
   * 4. Save the file
   *
   * ✏️ TO EDIT EXISTING PROJECT:
   * 1. Find the project in the array below
   * 2. Update title (line with title: "...")
   * 3. Update description (line with description: "...")
   * 4. Save the file
   *
   * 🎨 VISUAL MOCKUPS GUIDE:
   * Location: Lines 200-320 (the conditional rendering section)
   * Each project gets a custom visual design (not the image URL):
   * - Project 0 (Friday): Purple email interface mockup
   * - Project 1 (YouLearn): Dark dashboard interface mockup
   * - Project 2 (Iris): Light wearable device mockup
   * - Project 3 (Commencement): Video player interface mockup
   *
   * TO ADD MOCKUP FOR NEW PROJECT:
   * 1. Go to line ~320 (end of mockup conditionals)
   * 2. Add: } : index === 4 ? ( // For 5th project
   * 3. Create your custom mockup design using HTML/Tailwind CSS
   * 4. Use these responsive classes: min-h-[250px] sm:min-h-[300px] lg:min-h-[393px]
   * 5. Follow the same pattern as existing mockups
   *
   * 🛡️ RESPONSIVE DESIGN RULES:
   * - Always use responsive classes: w-full, min-h-[250px] sm:min-h-[300px]
   * - Keep consistent HTML structure pattern as existing projects
   * - Use same Tailwind CSS classes for consistency
   * - Test on mobile after adding content (use browser dev tools)
   *
   * 📝 FIELD EXPLANATIONS:
   * - title: Project name (appears as large heading in the card)
   * - description: Brief summary (appears as body text below title)
   * - image: Decorative URL only - not actually displayed (kept for future features)
   *
   * 🔄 ORDER MATTERS:
   * Projects appear in the same order as this array. First project = top of page.
   * To reorder: Cut and paste entire project objects to new positions.
   */
  const projects = [
    {
      title: "Avidia", // 📝 EDIT: Project name that appears as heading
      description:
        'Co-Founder (Jan 2023 - Dec 2024). AI-powered learning platform tackling "tutorial hell". Pitched in Shark Tank India Audition. Built to learn programming by building, not watching tutorials.', // 📝 EDIT: Description text
      image: "/attached_assets/avidia.png?v=" + Date.now(), // Decorative only
    },
    {
      title: "Coffeecodes", // 📝 EDIT: Project name
      description:
        "Co-Founder & Product Lead (Feb 2024 - Apr 2025) . A tech consultancy building MVPs and trust for fellow founders. Served 12+ founders, bridging technical execution and business strategy, doing 'dandha' that matters.", // 📝 EDIT: Description
      image: "/attached_assets/coffeecodes.png?v=" + Date.now(), // Decorative only
    },
    {
      title: "Noobslearning", // 📝 EDIT: Project name
      description:
        " Grew a community of 5,000+ students into a platform for networking, sharing notes, and learning. We hosted 15+ workshops and several hackathons, fostering a hands-on builder culture.", // 📝 EDIT: Description
      image: "/attached_assets/noobslearning.png?v=" + Date.now(), // Decorative only
    },
    {
      title: "lyzn.ai", // 📝 EDIT: Project name
      description:
        "Building an AI company from the ground up, applying lessons from previous ventures. Focusing on solving real problems with AI.", // 📝 EDIT: Description
      image: "", // Decorative only
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0A0A0A] overflow-y-scroll min-h-screen">
      {/* Main Container */}
      <main className="flex flex-col items-center w-full">
        {/* 
          🎯 HERO SECTION - MOBILE VIEWPORT LAYOUT
          ========================================
          
          This section fills the entire viewport on mobile, ensuring users see
          ONLY the intro text when they first open the site (before scrolling).
          
          Key mobile-first design features:
          - min-h-screen: Full viewport height
          - flex + justify-center + items-center: Perfect centering
          - px-6: Safe padding that prevents text from touching edges
          - Accounts for navigation bar height automatically
          
          📱 Mobile Experience:
          - Opens to show ONLY hero content (100vh)
          - Text is perfectly centered vertically and horizontally
          - Navigation stays at top, content centers below it
          - Responsive padding for all phone sizes (375px, 414px, etc.)
        */}
        <section className="min-h-screen flex flex-col justify-center items-start w-full px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="flex flex-col items-start text-left w-full max-w-[1440px] mt-8 sm:mt-12 md:mt-16">
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
              {/* 
                🎯 MAIN INTRO TEXT - TO UPDATE THIS:
                ===================================
                1. Replace this text with your own introduction
                2. Keep it concise (2-3 lines max for best responsive display)
                3. This text automatically scales across all devices
                4. Location: src/pages/About.tsx, lines 116-118
                
                Current: Hi, I'm Shiva — a 21 year old founder...
                Update: Replace with your personal introduction
              */}
              Hi, I'm Shiva — a 21 year old founder. I am passionate about
              building technology that makes a meaningful impact on people's
              lives.
            </motion.h1>
          </div>
        </section>

        {/* 
          ========================================
          🚀 PROJECTS SECTION
          ========================================
          
          This automatically creates a section for each project in the array above.
          Each project gets:
          - A horizontal separator line
          - Text content (title, description, View button)
          - Custom visual mockup (different for each project)
          
          The layout is responsive:
          - Mobile: Mockup on top, text below
          - Desktop: Text on left, mockup on right
        */}
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Separator Line - Visual divider between projects */}
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

                {/* 
                  ========================================
                  🎨 PROJECT MOCKUPS - CUSTOM DESIGNS
                  ========================================
                  
                  Each project gets a unique visual mockup based on its index:
                  - Index 0 (Friday): Email interface with purple gradients
                  - Index 1 (YouLearn): Dark dashboard interface
                  - Index 2 (Iris): Light wearable device mockup
                  - Index 3 (Speech): Video player interface
                  
                  🆕 TO ADD NEW PROJECT MOCKUP:
                  1. Add before the final ) : ( section:
                     } : index === 4 ? (
                  2. Copy this safe template:
                     <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center">
                       <div className="text-white text-center p-6">
                         <h3 className="text-2xl font-bold mb-2">Your Project</h3>
                         <p className="text-sm opacity-90">Custom mockup design here</p>
                       </div>
                     </div>
                  3. Customize the colors and content
                  4. Always keep the responsive min-h classes for mobile compatibility
                  
                  🔧 TO MODIFY EXISTING: Find the specific index section below and edit the JSX
                  🛡️ SAFETY: Always use min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] for consistent heights
                */}
                <div
                  className="flex flex-col items-start w-full lg:w-[687.06px] lg:h-[393.47px] order-1 lg:order-2"
                  style={{ paddingBottom: "7px" }}
                >
                  {index === 0 ? (
                    <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 1 ? (
                    // ========================================
                    // NEW MOCKUP FOR COFFEECODES
                    // ========================================
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between relative">
                      <div className="flex justify-between items-center">
                        <h3 className="text-white text-lg font-medium">
                          Client Dashboard
                        </h3>
                        <div className="flex items-center space-x-2 text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs">
                            5+ Production Level Projects
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                          <p className="text-2xl font-bold text-white">12+</p>
                          <p className="text-xs text-gray-300">
                            Founders Served
                          </p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                          <p className="text-2xl font-bold text-white">MVP</p>
                          <p className="text-xs text-gray-300">to Market</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white mb-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <p className="text-xs text-gray-300">On Time</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                        <span className="text-sm text-gray-200">
                          Building trust, one product at a time.
                        </span>
                        <svg
                          className="w-6 h-6 text-yellow-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-xl relative overflow-hidden">
                      <div className="text-center relative z-10">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">
                          5,000+ Students
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          A community for builders.
                        </p>
                        <div className="flex justify-center space-x-2">
                          <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                            15+ Workshops
                          </div>
                          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            Hackathons
                          </div>
                          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Networking
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // ========================================
                    //  NEW MOCKUP FOR LYZN.AI
                    // ========================================
                    <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-xl overflow-hidden shadow-2xl relative flex items-center justify-center p-6">
                      <div className="absolute inset-0 opacity-20">
                        {/* Abstract background representing neural pathways */}
                        <svg
                          width="100%"
                          height="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <pattern
                              id="neural"
                              patternUnits="userSpaceOnUse"
                              width="100"
                              height="100"
                            >
                              <path
                                d="M50 0 V100 M0 50 H100"
                                stroke="rgba(167, 139, 250, 0.2)"
                                strokeWidth="1"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="1.5"
                                fill="rgba(192, 132, 252, 0.5)"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill="url(#neural)"
                          />
                        </svg>
                      </div>
                      <div className="text-center text-white relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-purple-400/50">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                          lyzn.ai
                        </h3>
                        <p className="text-sm opacity-75">
                          Thinks. Plans. Acts.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* 
          ========================================
          👤 FOOTER SECTION - PERSONAL INFO & LINKS
          ========================================
          
          Contains: Your name + social media links
          
          📝 TO UPDATE YOUR NAME: Change the text in the <h2> tag below
          🔗 TO UPDATE SOCIAL LINKS: Change the URLs in the <a> tags below
          
          Current social platforms: X, LinkedIn, GitHub, Instagram, Google Scholar, Substack
        */}
        <footer className="py-16 border-t border-[#333333] w-full">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                {/* 📝 EDIT YOUR NAME HERE: */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
                  Shiva Charan
                  <br />
                  Mandhpauram
                </h2>
              </div>
              {/* 📝 SOCIAL MEDIA LINKS - UPDATE THE URLs BELOW */}
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-3">
                  {/* 🔗 EDIT: Replace with your X (Twitter) URL */}
                  <a
                    href="https://x.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    X
                  </a>
                  {/* 🔗 EDIT: Replace with your LinkedIn URL */}
                  <a
                    href="https://linkedin.com/in/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    LinkedIn
                  </a>
                  {/* 🔗 EDIT: Replace with your GitHub URL */}
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
                  {/* 🔗 EDIT: Replace with your Instagram URL */}
                  <a
                    href="https://instagram.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Instagram
                  </a>
                  {/* 🔗 EDIT: Replace with your Google Scholar URL */}
                  <a
                    href="https://scholar.google.com/citations?user=shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Google Scholar
                  </a>
                  {/* 🔗 EDIT: Replace with your Substack URL */}
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
