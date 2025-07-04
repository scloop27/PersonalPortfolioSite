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
      title: "Friday", // 📝 EDIT: Project name that appears as heading
      description: "AI assistant for email. Backed by Y Combinator.", // 📝 EDIT: Description text
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      title: "YouLearn", // 📝 EDIT: Project name
      description: "AI tutor for students. 1M+ users.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      title: "Iris", // 📝 EDIT: Project name
      description: "AI wearable that gives you infinite memory.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      title: "Commencement Speech", // 📝 EDIT: Project name
      description: "Spoke about chasing rejection to over 10,000 students at my graduation.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
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
                    /* 🎨 FRIDAY PROJECT MOCKUP - Email interface design */
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
                    /* 🎨 YOULEARN PROJECT MOCKUP - Dashboard interface design */
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
                    /* 🎨 IRIS PROJECT MOCKUP - Wearable device design */
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
                  ) : index === 3 ? (
                    /* 🎨 COMMENCEMENT SPEECH MOCKUP - Video player interface design */
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
                  ) : (
                    /* 🆕 DEFAULT FALLBACK - Shows for any additional projects beyond index 3
                       
                       TO ADD YOUR 5TH PROJECT MOCKUP:
                       1. Replace this section with: } : index === 4 ? (
                       2. Add your custom mockup design
                       3. Keep the same responsive structure
                    */
                    <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <h3 className="text-2xl font-bold mb-2">New Project</h3>
                        <p className="text-sm opacity-75">Add custom mockup design here</p>
                        <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-xs">
                          Index: {index}
                        </div>
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
