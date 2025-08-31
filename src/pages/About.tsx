import { motion } from "framer-motion";

/**
 * ========================================
 * 🏠 ABOUT PAGE — HOMEPAGE & PROJECT SHOWCASE
 * ========================================
 *
 * This is the main landing page that visitors see first.
 * Contains: Hero intro + 4 project showcases + footer.
 *
 * HOW TO EDIT:
 * ----------------------------------------
 * To update intro text:
 *   - Scroll to <motion.h1> (line ~56).
 *   - Change the text inside the tag.
 *
 * To add/modify projects:
 *   - See the 'projects' array (below).
 *   - Each project has: title, description, image path, and button (label+url).
 *   - See inline comments for details.
 *
 * To add a new project:
 *   1. Copy the template object below:
 *        {
 *          title: "Project Name",
 *          description: "What it is, what makes it special.",
 *          image: "/images/projects/yourimage.png",
 *          button: {
 *            label: "Button Text",
 *            url: "/playbook#anchor" // or full URL
 *          },
 *        }
 *   2. Paste as the last element in the 'projects' array.
 *   3. Upload your project image to public/images/projects/ folder.
 *   4. For project images, put the file in /public/images/projects/.
 *      Use format: /images/projects/yourimage.png
 *      Recommended size: 687x393px (16:9 aspect ratio)
 *
 * To change the visual design per project:
 *   - See inside {projects.map(...)} and the index-based mocks (lines ~107+).
 *   - Each project's visual section can be customized.
 *
 * To add social links or credits:
 *   - Scroll to the <footer> at the end of the file.
 *   - Update name, add or remove links as needed.
 *
 * TECHNICAL NOTES:
 * ----------------------------------------
 * - Responsive: uses Tailwind classes and clamp() for scalable typography.
 * - Project frame: Desktop card is ~687x393px.
 * - Images are cache-busted with ?v=Date.now() to force updates.
 * - The footer credit uses extra-small (10px), subtle text and no outgoing link.
 *
 * Any questions? Comment your intent above the section you edit.
 */

export default function About() {
  /**
   * PROJECTS ARRAY
   * ------------------------------------
   * Edit or add projects here. The 'image' field is a path to /public/images/projects/.
   * For live links, use full URLs; for internal anchors, use hash routes.
   */
  const projects = [
    {
      title: "Avidia",
      description:
        'Co-Founder (Jan 2023 - Dec 2024). AI-powered learning platform tackling "tutorial hell". Pitched in Shark Tank India Audition. Built to learn programming by building, not watching tutorials.',
      image: "/images/projects/avidia.png",
      button: {
        label: "Read Story",
        url: "/playbook#avidia", // Link to your Playbook story or section
      },
    },
    {
      title: "Coffeecodes",
      description:
        "Co-Founder & Business Head (Dec 2023 - Apr 2025). A tech consultancy building MVPs and trust for fellow founders. Served 12+ founders, bridging technical execution and business strategy.",
      image: "/images/projects/coffeecodes.png",
      button: {
        label: "Read Story",
        url: "/playbook#coffeecodes", // Link to Playbook story for Coffeecodes
      },
    },
    {
      title: "Noobslearning",
      description:
        "Grew a community of 5,000+ students into a platform for networking, sharing notes, and learning. We hosted 15+ workshops and several hackathons, fostering a hands-on builder culture.",
      image: "/images/projects/noobslearning-placeholder.png",
      button: {
        label: "Read Story",
        url: "/playbook#noobslearning", // Link to Playbook story for Noobslearning
      },
    },
    {
      title: "lyzn.ai",
      description:
        "The First AI Companion That Thinks, Plans, and Acts For You. Building a next-gen AI co-presence infrastructure, starting with our Lyzn pendant and agentic flows.",
      image: "/images/projects/lyzn-placeholder.png",
      button: {
        label: "Visit lyzn.ai",
        url: "https://lyzn.ai"
      },
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0A0A0A] overflow-y-scroll min-h-screen">
      <main className="flex flex-col items-center w-full">
        {/* HERO SECTION */}
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
              Shiva. Entrepreneur at 21. I build products that turn challenges into solutions—leading tech, teams, and ideas that move people forward.
            </motion.h1>
          </div>
        </section>

        {/* PROJECT SHOWCASE SECTION */}
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Divider line */}
            <div className="w-full h-px border-t border-[#333333]"></div>
            <div className="flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-10 w-full max-w-[1440px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row justify-between items-start w-full py-8 sm:py-12 md:py-16 lg:py-20 gap-4 sm:gap-6 md:gap-8 lg:gap-48"
              >
                {/* --- Text Column --- */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1 order-2 lg:order-1">
                  <h2
                    className="text-[#EAEAEA] font-normal"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontSize: "clamp(20px, 3vw, 26.6016px)",
                      lineHeight: "1.2",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="text-[#888888] font-normal leading-relaxed"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontSize: "clamp(14px, 2vw, 17.3438px)",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-col items-start pt-4 sm:pt-6 md:pt-8">
                    {/* BUTTON: External if URL starts with "http", else internal */}
                    {project.button.url.startsWith("/") ? (
                      <a
                        href={project.button.url}
                        className="flex flex-row items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors px-6 py-3 min-w-[120px] h-[47px] shadow"
                      >
                        <span
                          className="text-[#0A0A0A] font-normal flex items-center justify-center"
                          style={{
                            fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                            fontSize: "clamp(14px, 1vw, 16.0312px)",
                            lineHeight: "27px",
                          }}
                        >
                          {project.button.label}
                        </span>
                      </a>
                    ) : (
                      <a
                        href={project.button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors px-6 py-3 min-w-[120px] h-[47px] shadow"
                      >
                        <span
                          className="text-[#0A0A0A] font-normal flex items-center justify-center"
                          style={{
                            fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                            fontSize: "clamp(14px, 1vw, 16.0312px)",
                            lineHeight: "27px",
                          }}
                        >
                          {project.button.label}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
                {/* --- Visual/Mockup Column --- */}
                {/* 
                  🖼️ PROJECT IMAGES GUIDE:
                  ========================
                  This section displays project images for each project in the array.
                  All projects now use actual images instead of hardcoded CSS mockups.
                  
                  📁 TO UPDATE PROJECT IMAGES:
                  1. Upload your project image to: public/images/projects/
                  2. Update the project.image field in the projects array above
                  3. Use format: "/images/projects/your-image-name.png"
                  4. Recommended size: 687x393px (16:9 aspect ratio)
                  
                  📋 SUPPORTED FORMATS: PNG, JPG, JPEG, WebP
                  📏 RESPONSIVE BEHAVIOR: Images automatically scale on mobile
                  🎨 FALLBACK: Gray background shows if image fails to load
                */}
                <div
                  className="flex flex-col items-start w-full lg:w-[687.06px] lg:h-[393.47px] order-1 lg:order-2"
                  style={{ paddingBottom: "7px" }}
                >
                  <div className="w-full h-full min-h-[200px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[393px] rounded-xl overflow-hidden shadow-lg bg-gray-800">
                    {/* 
                      📝 IMAGE DISPLAY LOGIC:
                      - Shows actual project image from /images/projects/ folder
                      - Uses object-cover to maintain aspect ratio
                      - Includes alt text for accessibility
                      - Gray background appears if image is missing
                    */}
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        // Fallback styling if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* FOOTER SECTION */}
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
            {/* Subtle, extra-small, credit for build and design inspiration */}
            <div className="text-[10px] text-gray-600 text-center mt-6 tracking-tight opacity-80">
              Built with ⚡️ | Design inspired by Advait Paliwal
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
