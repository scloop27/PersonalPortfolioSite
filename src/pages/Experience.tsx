import { motion } from "framer-motion";

/**
 * ========================================
 * 💼 EXPERIENCE PAGE - PROFESSIONAL TIMELINE
 * ========================================
 * 
 * This page displays your professional experience in chronological order.
 * Similar layout to About page but focused on career timeline.
 * 
 * 📋 TO UPDATE EXPERIENCES:
 * Modify the 'experiences' array below - each entry creates a new timeline item
 * 
 * 🖼️ TO ADD COMPANY LOGOS/IMAGES:
 * 1. Upload company logo to public/images/experience/
 * 2. Add 'logo' field to experience: logo: "/images/experience/company-name.png"  
 * 3. Recommended size: 200px width, PNG format with transparency
 * 
 * 🔗 TO UPDATE VIEW BUTTON LINKS:
 * The "View" buttons cycle through a predefined list of URLs (lines ~126-133)
 * Replace those URLs with your actual project/company links
 * 
 * 📱 RESPONSIVE DESIGN:
 * - Mobile: Single column, stacked layout
 * - Desktop: Side-by-side text and image
 * - Same responsive patterns as About page
 */
export default function Experience() {
  /**
   * ========================================
   * 📋 EXPERIENCE DATA - COMPREHENSIVE EDITING GUIDE
   * ========================================
   * 
   * 🎯 QUICK REFERENCE - File: src/pages/Experience.tsx, Lines: 57-85
   * 
   * ➕ TO ADD A NEW EXPERIENCE:
   * 1. Copy this exact template:
   *    {
   *      year: "2025", // 📝 EDIT: Time period (e.g., "2024", "2023-2024", "Present")
   *      title: "Your Company/Role Name", // 📝 EDIT: Main heading text
   *      description: "Brief description of your role and achievements", // 📝 EDIT: Summary text
   *      image: "https://images.unsplash.com/photo-example", // Decorative only - not displayed
   *    },
   * 2. Paste it at the BEGINNING of the experiences array (line 57, newest first)
   * 3. Update year, title, and description with your information
   * 4. Update the View button links array (see line 149 guide below)
   * 5. Save the file - changes appear immediately
   * 
   * ❌ TO DELETE AN EXPERIENCE:
   * 1. Find the experience object you want to remove in lines 57-85
   * 2. Delete the entire object (from { to }, including the comma)
   * 3. Save the file
   * 
   * ✏️ TO EDIT EXISTING EXPERIENCE:
   * 1. Find the experience in the array below
   * 2. Update year (line with year: "...")
   * 3. Update title (line with title: "...")
   * 4. Update description (line with description: "...")
   * 5. Save the file
   * 
   * 🔗 VIEW BUTTON LINKS GUIDE:
   * Location: Lines 149-156 (the links array)
   * Each experience gets a clickable "View" button that opens a URL.
   * The buttons cycle through this array of links.
   * 
   * TO UPDATE VIEW BUTTON LINKS:
   * 1. Go to line ~149
   * 2. Replace URLs in the links array with your project/company URLs
   * 3. Add more URLs if you have more experiences
   * 4. Save the file
   * 
   * 📝 FIELD EXPLANATIONS:
   * - year: Time period (e.g., "2024", "2023-2024", "Present", "2022-2023")
   * - title: Company name, role title, or project name (appears as main heading)
   * - description: Brief summary of the experience (appears as body text)
   * - image: Decorative URL only - not actually displayed (kept for future features)
   * 
   * 🔄 ORDER MATTERS:
   * Experiences appear in the same order as this array. First experience = top of timeline.
   * Keep newest experiences first (chronological order: Present, 2024, 2023, etc.)
   * To reorder: Cut and paste entire experience objects to new positions.
   * 
   * 🎨 RESPONSIVE DESIGN:
   * The layout automatically adjusts:
   * - Mobile: Single column, stacked layout
   * - Desktop: Side-by-side text and decorative image
   * - Typography scales with screen size
   */
  const experiences = [
    {
      year: "Present", // 📝 EDIT: Time period (e.g., "2024", "2023-2024", "Present")
      title: "Friday", // 📝 EDIT: Company name, role title, or project name
      description: "AI assistant for email. Backed by Y Combinator.", // 📝 EDIT: Brief description
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      year: "Present", // 📝 EDIT: Time period
      title: "YouLearn", // 📝 EDIT: Company/project name
      description: "AI tutor for students. 1M+ users.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      year: "2024", // 📝 EDIT: Time period
      title: "Iris", // 📝 EDIT: Company/project name
      description: "AI wearable that gives you infinite memory.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      year: "2023", // 📝 EDIT: Time period
      title: "Commencement Speech", // 📝 EDIT: Event/achievement name
      description: "Spoke about chasing rejection to over 10,000 students at my graduation.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      year: "2022", // 📝 EDIT: Time period
      title: "Research Publication", // 📝 EDIT: Achievement name
      description: "Published research on machine learning applications in healthcare.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
    {
      year: "2021", // 📝 EDIT: Time period
      title: "Startup Accelerator", // 📝 EDIT: Program/experience name
      description: "Participated in leading tech accelerator program.", // 📝 EDIT: Description
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=386", // Decorative only
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0A0A0A] overflow-y-scroll min-h-screen">
      {/* Main Container */}
      <main className="flex flex-col items-center w-full pt-16 sm:pt-20 md:pt-24">
        {/* Experience Sections */}
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Separator Line */}
            <div className="w-full h-px border-t border-[#333333]"></div>

            {/* Experience Container */}
            <div className="flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-10 w-full max-w-[1440px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row justify-between items-start w-full py-8 sm:py-12 md:py-16 lg:py-20 gap-4 sm:gap-6 lg:gap-48"
              >
                {/* Text Content */}
                <div className="flex flex-col items-start gap-2 sm:gap-3 w-full lg:w-auto lg:flex-1 order-2 lg:order-1">
                  {/* Experience Year - Small gray text above title */}
                  <div className="w-full h-[21px] flex items-center">
                    <p
                      className="text-[#888888] font-normal flex items-center"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(10px, 1vw, 12.25px)", // Responsive sizing
                        lineHeight: "21px",
                      }}
                    >
                      {experience.year} {/* 📝 This pulls from the experiences array */}
                    </p>
                  </div>

                  {/* Experience Title - Main heading */}
                  <div className="w-full h-[45px] flex items-center">
                    <h2
                      className="text-[#EAEAEA] font-normal flex items-center"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(18px, 2vw, 26.6016px)", // Responsive sizing
                        lineHeight: "45px",
                      }}
                    >
                      {experience.title} {/* 📝 This pulls from the experiences array */}
                    </h2>
                  </div>

                  {/* Experience Description - Brief summary */}
                  <div className="w-full h-[30px] flex items-center">
                    <p
                      className="text-[#888888] font-normal flex items-center"
                      style={{
                        fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(14px, 1.5vw, 17.3438px)", // Responsive sizing
                        lineHeight: "30px",
                      }}
                    >
                      {experience.description} {/* 📝 This pulls from the experiences array */}
                    </p>
                  </div>

                  {/* 
                    🔗 VIEW BUTTON LINKS - EDIT THE URLs BELOW!
                    
                    Currently cycles through 6 placeholder URLs.
                    Replace these with your actual project/company links:
                    - Index 0: Google → Replace with your first experience link
                    - Index 1: GitHub → Replace with your second experience link
                    - etc.
                  */}
                  <div className="flex flex-col items-start pt-8 w-[85px] h-[79px]">
                    <a
                      href={[
                        "https://google.com", // 📝 EDIT: Replace with your first experience link
                        "https://github.com", // 📝 EDIT: Replace with your second experience link
                        "https://youtube.com", // 📝 EDIT: Replace with your third experience link
                        "https://twitter.com", // 📝 EDIT: Replace with your fourth experience link
                        "https://linkedin.com", // 📝 EDIT: Replace with your fifth experience link
                        "https://instagram.com" // 📝 EDIT: Replace with your sixth experience link
                      ][index % 6]} // Cycles through the array based on experience index
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center justify-center rounded-full bg-white w-[85px] h-[47px] hover:bg-gray-200 transition-colors"
                      style={{ padding: "10px 24px" }}
                    >
                      <span
                        className="text-[#0A0A0A] font-normal flex items-center justify-center"
                        style={{
                          fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                          fontSize: "clamp(14px, 1vw, 16.0312px)",
                          lineHeight: "27px",
                        }}
                      >
                        View
                      </span>
                    </a>
                  </div>
                </div>

                {/* Image Container */}
                <div
                  className="flex flex-col items-start w-full lg:w-[687.06px] lg:h-[393.47px]"
                  style={{ paddingBottom: "7px" }}
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                    style={{
                      width: "100%",
                      maxWidth: "687.06px",
                      height: "clamp(250px, 25vw, 386.47px)",
                    }}
                  />
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
