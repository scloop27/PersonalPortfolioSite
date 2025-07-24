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
 *          image: "/attached_assets/yourimage.png?v=" + Date.now(),
 *          button: {
 *            label: "Button Text",
 *            url: "/playbook#anchor" // or full URL
 *          },
 *        }
 *   2. Paste as the last element in the 'projects' array.
 *   3. Add a new block in the JSX (see mockup instructions below).
 *   4. For static images, put the file in /public/attached_assets.
 *      Use a leading slash, e.g. /attached_assets/yourimage.png.
 *      Do NOT include 'public' in the path.
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
   * Edit or add projects here. The 'image' field is a path to /public/attached_assets.
   * For live links, use full URLs; for internal anchors, use hash routes.
   */
  const projects = [
    {
      title: "Avidia",
      description:
        'Co-Founder (Jan 2023 - Dec 2024). AI-powered learning platform tackling "tutorial hell". Pitched in Shark Tank India Audition. Built to learn programming by building, not watching tutorials.',
      image: "/attached_assets/avidia.png?v=" + Date.now(),
      button: {
        label: "Read Story",
        url: "/playbook#avidia", // Link to your Playbook story or section
      },
    },
    {
      title: "Coffeecodes",
      description:
        "Co-Founder & Business Head (Dec 2023 - Apr 2025). A tech consultancy building MVPs and trust for fellow founders. Served 12+ founders, bridging technical execution and business strategy.",
      image: "/attached_assets/coffeecodes.png?v=" + Date.now(),
      button: {
        label: "Read Story",
        url: "/playbook#coffeecodes", // Link to Playbook story for Coffeecodes
      },
    },
    {
      title: "Noobslearning",
      description:
        "Grew a community of 5,000+ students into a platform for networking, sharing notes, and learning. We hosted 15+ workshops and several hackathons, fostering a hands-on builder culture.",
      image: "/attached_assets/noobslearning.png?v=" + Date.now(),
      button: {
        label: "Read Story",
        url: "/playbook#noobslearning", // Link to Playbook story for Noobslearning
      },
    },
    {
      title: "lyzn.ai",
      description:
        "The First AI Companion That Thinks, Plans, and Acts For You. Building a next-gen AI co-presence infrastructure, starting with our Lyzn pendant and agentic flows.",
      image: "",
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
            <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-[1440px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row justify-between items-start w-full py-12 sm:py-16 md:py-20 gap-6 sm:gap-8 lg:gap-48"
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
                <div
                  className="flex flex-col items-start w-full lg:w-[687.06px] lg:h-[393.47px] order-1 lg:order-2"
                  style={{ paddingBottom: "7px" }}
                >
                  {index === 0 ? (
                    // Avidia: use logo image
                    <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 1 ? (
                    // Coffeecodes: dark dashboard-style visual
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between relative">
                      <div className="flex justify-between items-center">
                        <h3 className="text-white text-lg font-medium">Client Dashboard</h3>
                        <div className="flex items-center space-x-2 text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs">5+ Live Production Projects </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                          <p className="text-2xl font-bold text-white">12+</p>
                          <p className="text-xs text-gray-300">Founders Served</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                          <p className="text-2xl font-bold text-white">MVP</p>
                          <p className="text-xs text-gray-300">to Market</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center">
                          <svg className="w-6 h-6 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <p className="text-xs text-gray-300">On Time</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                        <span className="text-sm text-gray-200">Building trust, one product at a time.</span>
                        <svg className="w-6 h-6 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    // Noobslearning: pastel community badges
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-xl relative overflow-hidden">
                      <div className="text-center relative z-10">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">5,000+ Students</h3>
                        <p className="text-sm text-gray-600 mb-4">A community for builders.</p>
                        <div className="flex justify-center space-x-2">
                          <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">15+ Workshops</div>
                          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Hackathons</div>
                          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Networking</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // lyzn.ai: neural/AI theme
                    <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] bg-gradient-to-br from-green-200 via-green-100 to-green-300 rounded-xl overflow-hidden shadow-2xl relative flex items-center justify-center p-6">
            <div className="absolute inset-0 opacity-25">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
              <pattern id="neural" patternUnits="userSpaceOnUse" width="100" height="100">
                <path d="M50 0 V100 M0 50 H100" stroke="rgba(16, 185, 129, 0.16)" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="2" fill="rgba(45, 212, 191, 0.4)"/>
              </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural)" />
            </svg>
            </div>
            <div className="text-center text-black relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-green-300/60">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 drop-shadow-lg text-black">lyzn.ai</h3>
            <p className="text-sm opacity-80 text-black">Thinks. Plans. Acts.</p>
            </div>
          </div>

                  )}
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
