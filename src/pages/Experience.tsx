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
 * 🖼️ TO REPLACE EXPERIENCE IMAGES:
 * ========================================
 * 
 * 📁 CURRENT IMAGE LOCATIONS:
 * All experience images are stored in: public/images/experience/
 * 
 * 🎯 TO UPDATE AN IMAGE:
 * 1. Replace the image file in public/images/experience/ (keep same filename)
 * OR
 * 2. Upload new image with different name and update the path in the experience array
 * 
 * 📋 CURRENT IMAGE FILES:
 * - lyzn-ai.png (lyzn.ai experience)
 * - scrum-master.png (Scrum Master certification)
 * - juzzt.png (Juzzt dating app)
 * - mjollnir.png (Mjollnir EV booking)
 * - jagriti-yatra.png (Jagriti Yatra journey)
 * - avidia.png (Avidia AI platform)
 * - coffeecodes.png (Coffeecodes consultancy)
 * - noobslearning.png (Noobslearning community)
 * 
 * 💡 QUICK IMAGE REPLACEMENT:
 * 1. Go to public/images/experience/ in file manager
 * 2. Replace any image with your new image (use same name)
 * 3. Refresh browser - changes appear immediately!
 * 
 * 📐 RECOMMENDED IMAGE SPECS:
 * - Size: 687px width x 386px height (or similar ratio)
 * - Format: PNG, JPG, or WebP
 * - Quality: High resolution for retina displays
 * 
 * 🖼️ TO ADD COMPANY LOGOS:
 * 1. Upload company logo to public/images/experience/
 * 2. Add 'logo' field to experience: logo: "/images/experience/company-name.png"
 * 3. Recommended size: 200px width, PNG format with transparency
 *
 * 🔗 TO UPDATE VIEW BUTTON LINKS:
 * The "View" buttons cycle through a predefined list of URLs (lines ~175-185)
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
   * 🎯 QUICK REFERENCE - File: src/pages/Experience.tsx, Lines: 57-110
   *
   * ➕ TO ADD A NEW EXPERIENCE:
   * 1. Copy this exact template:
   *    {
   *      year: "2025", // 📝 EDIT: Time period (e.g., "2024", "2023-2024", "Present")
   *      title: "Your Company/Role Name", // 📝 EDIT: Main heading text
   *      description: "Brief description of your role and achievements", // 📝 EDIT: Summary text
   *      logo: "/images/experience/company-logo.png", // 📝 EDIT: Company logo path (optional)
   *      image: "https://images.unsplash.com/photo-example", // Background only - not displayed
   *    },
   * 2. Paste it at the BEGINNING of the experiences array (line 57, newest first)
   * 3. Update year, title, and description with your information
   * 4. Update the View button links array (see line 175 guide below)
   * 5. Save the file - changes appear immediately
   *
   * ❌ TO DELETE AN EXPERIENCE:
   * 1. Find the experience object you want to remove in lines 57-110
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
   * Location: Lines 175-185 (the links array)
   * Each experience gets a clickable "View" button that opens a URL.
   * The buttons cycle through this array of links.
   *
   * TO UPDATE VIEW BUTTON LINKS:
   * 1. Go to line ~175
   * 2. Replace URLs in the links array with your project/company URLs
   * 3. Add more URLs if you have more experiences
   * 4. Save the file
   *
   * 📝 FIELD EXPLANATIONS:
   * - year: Time period (e.g., "2024", "2023-2024", "Present", "2022-2023")
   * - title: Company name, role title, or project name (appears as main heading)
   * - description: Brief summary of the experience (appears as body text)
   * - logo: Optional company logo path (/images/experience/logo.png)
   * - image: Background URL only - not actually displayed (kept for future features)
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
  /**
   * 🖼️ EXPERIENCE IMAGES GUIDE:
   * ===========================
   * You can now add company logos to each experience!
   *
   * 📁 TO ADD COMPANY LOGOS:
   * 1. Upload logo to: public/images/experience/
   * 2. Add 'logo' field to experience: logo: "/images/experience/company-name.png"
   * 3. Recommended: PNG format with transparency, ~200px width
   * 4. The logo appears next to the company name
   *
   * 📋 EXAMPLE WITH LOGO:
   * {
   *   year: "2024",
   *   title: "Google",
   *   description: "Software Engineer at Google...",
   *   logo: "/images/experience/google-logo.png", // ADD THIS LINE
   *   image: "https://background-url.com" // Keep this for backgrounds
   * }
   */
  const experiences = [
    {
      year: "Present", // 📝 EDIT: Time period (e.g., "2024", "2023-2024", "Present")
      title: "lyzn.ai", // 📝 EDIT: Company name, role title, or project name
      description:
        "Building personal AI superintelligence in beta. Creating an AI companion that thinks, plans, and acts for users.", // 📝 EDIT: Brief description
      logo: "", // 📝 EDIT: Add company logo: "/images/experience/lyzn-logo.png"
      image:
        "/images/experience/lyzn-ai.png", // 📝 EDIT: Replace with your lyzn.ai company image
    },
    {
      year: "Present", // 📝 EDIT: Time period
      title: "Certified Scrum Master", // 📝 EDIT: Company/project name
      description:
        "Certified Scrum Master with expertise in agile methodologies and team dynamics for efficient product execution.", // 📝 EDIT: Description
      logo: "", // 📝 EDIT: Add company logo: "/images/experience/csm-logo.png"
      image:
        "/images/experience/scrum-master.png", // 📝 EDIT: Replace with your Scrum Master certificate image
    },
    {
      year: "2024", // 📝 EDIT: Time period
      title: "Juzzt", // 📝 EDIT: Company/project name
      description:
        "Product Strategy & Execution for dating app with rating-based compatibility. Building the application and defining product roadmap.", // 📝 EDIT: Description
      logo: "", // 📝 EDIT: Add company logo: "/images/experience/juzzt-logo.png"
      image:
        "/images/experience/juzzt.png", // 📝 EDIT: Replace with your Juzzt app screenshot or mockup
    },
    {
      year: "2024", // 📝 EDIT: Time period
      title: "Mjollnir", // 📝 EDIT: Event/achievement name
      description:
        "Product Builder for EV bike rental application. Building the complete application for Mjollnir's electric bike sharing platform.", // 📝 EDIT: Description
      logo: "", // 📝 EDIT: Add event logo: "/images/experience/mjollnir-logo.png"
      image:
        "/images/experience/mjollnir.png", // 📝 EDIT: Replace with your Mjollnir EV app image
    },
    {
      year: "2023", // 📝 EDIT: Time period
      title: "Jagriti Yatra", // 📝 EDIT: Achievement name
      description:
        "Alumnus of Jagriti Yatra and one of 500+ founders in JY '24. 15-day entrepreneurial journey across India connecting with grassroots innovators.", // 📝 EDIT: Description
      logo: "", // 📝 EDIT: Add institution logo: "/images/experience/jagriti-logo.png"
      image:
        "/images/experience/jagriti-yatra.png", // 📝 EDIT: Replace with your Jagriti Yatra journey image
    },
    {
      year: "2023", // 📝 EDIT: Time period
      title: "Avidia", // 📝 EDIT: Program/experience name
      description:
        "Co-founded AI learning platform to combat 'tutorial hell.' Pitched at Shark Tank India auditions.", // 📝 EDIT: Description
      logo: "", // 📝 EDIT: Add accelerator logo: "/images/experience/avidia-logo.png"
      image:
        "/images/experience/avidia.png", // 📝 EDIT: Replace with your Avidia platform image
    },
    {
      year: "2023", // 📝 EDIT: Time period
      title: "Coffeecodes", // 📝 EDIT: Program/experience name
      description:
        "Founded tech consultancy building MVPs for founders. Served 12+ clients bridging ideas to market-ready products.", // 📝 EDIT: Description
      logo: "", // 📝 EDIT: Add accelerator logo: "/images/experience/coffeecodes-logo.png"
      image:
        "/images/experience/coffeecodes.png", // 📝 EDIT: Replace with your Coffeecodes consultancy image
    },
    {
      year: "2022", // 📝 EDIT: Time period
      title: "Noobslearning", // 📝 EDIT: Program/experience name
      description:
        "Founded and grew 5,000+ member student community. Organized 15+ workshops and hackathons fostering builder culture.", // 📝 EDIT: Description
      logo: "", // 📝 EDIT: Add accelerator logo: "/images/experience/noobs-logo.png"
      image:
        "/images/experience/noobslearning.png", // 📝 EDIT: Replace with your Noobslearning community image
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
                className="flex flex-col lg:flex-row justify-between items-start w-full py-6 sm:py-8 md:py-12 lg:py-16 gap-4 sm:gap-6 md:gap-8 lg:gap-48"
              >
                {/* Text Content */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1 order-2 lg:order-1">
                  {/* Experience Year - Small gray text above title */}
                  <div className="w-full flex items-center">
                    <p
                      className="text-[#888888] font-normal flex items-center"
                      style={{
                        fontFamily:
                          "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(10px, 1vw, 12.25px)", // Responsive sizing
                        lineHeight: "21px",
                      }}
                    >
                      {experience.year}{" "}
                      {/* 📝 This pulls from the experiences array */}
                    </p>
                  </div>

                  {/* Experience Title - Main heading with optional logo */}
                  <div className="w-full flex items-center gap-3">
                    {/* 
                      🖼️ COMPANY LOGO DISPLAY:
                      Shows company logo if available in experience.logo field
                      Automatically hides if no logo specified
                    */}
                    {experience.logo && (
                      <img
                        src={experience.logo}
                        alt={`${experience.title} logo`}
                        className="h-8 w-auto object-contain"
                        onError={(e) => {
                          // Hide logo if image fails to load
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <h2
                      className="text-[#EAEAEA] font-normal flex items-center"
                      style={{
                        fontFamily:
                          "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(18px, 2vw, 26.6016px)", // Responsive sizing
                        lineHeight: "45px",
                      }}
                    >
                      {experience.title}{" "}
                      {/* 📝 This pulls from the experiences array */}
                    </h2>
                  </div>

                  {/* Experience Description - Brief summary with proper text wrapping */}
                  <div className="w-full flex items-start">
                    <p
                      className="text-[#888888] font-normal leading-relaxed"
                      style={{
                        fontFamily:
                          "'SF Pro Display', -apple-system, system-ui, sans-serif",
                        fontSize: "clamp(14px, 1.5vw, 17.3438px)", // Responsive sizing
                        lineHeight: "1.6", // Better line spacing for readability
                      }}
                    >
                      {experience.description}{" "}
                      {/* 📝 This pulls from the experiences array */}
                    </p>
                  </div>

                  {/* 
                    🔗 VIEW BUTTON LINKS - EDIT THE URLs BELOW!

                    Currently cycles through your actual project/company links.
                    Replace these with your updated project URLs:
                    - Index 0: lyzn.ai → lyzn.ai/beta
                    - Index 1: CSM → Your CSM certificate or profile
                    - Index 2: Juzzt → juzzt.com
                    - Index 3: Mjollnir → mjollnir.in
                    - etc.
                  */}
                  <div className="flex flex-col items-start pt-6">
                    <a
                      href={
                        [
                          "https://lyzn.ai/beta", // 📝 EDIT: lyzn.ai beta link
                          "https://bcert.me/bc/html/show-badge.html?b=pygealnc", // 📝 EDIT: Replace with your CSM certificate link
                          "https://juzzt.com", // 📝 EDIT: Juzzt dating app link
                          "https://mjollnir.in", // 📝 EDIT: Mjollnir EV booking app link
                          "#", // 📝 EDIT: Replace with Jagriti Yatra experience link
                          "/playbook#avidia", // 📝 EDIT: Link to Avidia story in playbook
                          "/playbook#coffeecodes", // 📝 EDIT: Link to Coffeecodes story in playbook
                          "/playbook#noobslearning", // 📝 EDIT: Link to Noobslearning story in playbook
                        ][index % 8]
                      } // Cycles through the array based on experience index
                      target={
                        [
                          "https://lyzn.ai/beta",
                          "https://bcert.me/bc/html/show-badge.html?b=pygealnc",
                          "https://juzzt.com",
                          "https://mjollnir.in",
                          "#",
                          "/playbook#avidia",
                          "/playbook#coffeecodes",
                          "/playbook#noobslearning",
                        ][index % 8].startsWith("http")
                          ? "_blank"
                          : "_self"
                      }
                      rel="noopener noreferrer"
                      className="flex flex-row items-center justify-center rounded-full bg-white w-[85px] h-[47px] hover:bg-gray-200 transition-colors"
                      style={{ padding: "10px 24px" }}
                    >
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
                    </a>
                  </div>
                </div>

                {/* Image Container */}
                <div
                  className="flex flex-col items-start w-full lg:w-[687.06px] lg:h-[393.47px]"
                  style={{ paddingBottom: "7px" }}
                >
                  <div className="w-full h-full min-h-[200px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[393px] rounded-xl overflow-hidden shadow-lg bg-gray-800">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover object-center"
                      style={{
                        width: "100%",
                        maxWidth: "687.06px"
                      }}
                    />
                  </div>
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
                  Mandhapuram
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-3">
                  <a
                    href="https://x.com/shivacharanm7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    X
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shiva-charan-mandhapuram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/shivacharanmandhapuram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Instagram
                  </a>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://shivacharanmandhapuram.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors text-[#888888]"
                  >
                    Substack
                  </a>
                </div>
              </div>
            </div>
            {/* Built with credit */}
            <div className="text-[10px] text-gray-600 text-center mt-6 tracking-tight opacity-80">
              Built with ⚡️ | Design inspired by Advait Paliwal
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
