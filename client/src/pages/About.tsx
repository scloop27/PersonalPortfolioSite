import { motion } from "framer-motion";

export default function About() {
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
    <div className="flex flex-col items-center w-full bg-white overflow-y-scroll min-h-screen">
      {/* Main Container */}
      <main className="flex flex-col items-center w-full pt-24">
        {/* Hero Section */}
        <section
          className="flex flex-row justify-center items-center w-full"
          style={{ padding: "200px 0px" }}
        >
          <div className="flex flex-col items-start px-10 w-full max-w-[1440px]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-black font-normal leading-tight tracking-tight"
              style={{
                fontFamily: "Inter",
                fontSize: "clamp(2rem, 4vw, 55.75px)",
                lineHeight: "clamp(2.5rem, 5vw, 77px)",
                letterSpacing: "clamp(-0.5px, -0.1vw, -1.28px)",
                maxWidth: "1357px",
              }}
            >
              Hi, I'm Shivacharan Mandhapuram — a 21 year old founder. I am
              passionate about building technology that makes a meaningful
              impact on people's lives.
            </motion.h1>
          </div>
        </section>

        {/* Projects Sections */}
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Separator Line */}
            <div className="w-full h-px border-t border-[#E5E7EB]"></div>

            {/* Project Container */}
            <div className="flex flex-col items-center px-10 w-full max-w-[1440px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row justify-between items-start w-full py-20 gap-8 lg:gap-48"
              >
                {/* Text Content */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-[480.94px]">
                  {/* Title */}
                  <div className="w-full h-[45px] flex items-center">
                    <h2
                      className="text-black font-normal flex items-center"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "clamp(18px, 2vw, 26.6016px)",
                        lineHeight: "45px",
                      }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="w-full h-[30px] flex items-center">
                    <p
                      className="text-[#707070] font-normal flex items-center"
                      style={{
                        fontFamily: "Inter",
                        fontSize: "clamp(14px, 1.5vw, 17.3438px)",
                        lineHeight: "30px",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Button Container */}
                  <div className="flex flex-col items-start pt-8 w-[85px] h-[79px]">
                    <button
                      className="flex flex-row items-center justify-center rounded-full bg-[#F5F5F5] w-[85px] h-[47px]"
                      style={{ padding: "10px 24px" }}
                    >
                      <span
                        className="text-black font-normal flex items-center justify-center"
                        style={{
                          fontFamily: "Inter",
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
                  className="flex flex-col items-start w-full lg:w-[687.06px] lg:h-[393.47px]"
                  style={{ paddingBottom: "7px" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
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
        <footer className="py-16 border-t border-gray-200 w-full">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
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
                    className="block hover:text-gray-600 transition-colors text-gray-900"
                  >
                    X
                  </a>
                  <a
                    href="https://linkedin.com/in/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-gray-600 transition-colors text-gray-900"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-gray-600 transition-colors text-gray-900"
                  >
                    GitHub
                  </a>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-gray-600 transition-colors text-gray-900"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=shivacharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-gray-600 transition-colors text-gray-900"
                  >
                    Google Scholar
                  </a>
                  <a
                    href="https://shivacharan.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-gray-600 transition-colors text-gray-900"
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
