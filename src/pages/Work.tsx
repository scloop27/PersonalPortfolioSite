import { motion } from "framer-motion";

export default function Work() {
    const stats = [
        { label: "Clients Served", value: "12+" },
        { label: "Countries", value: "5" },
        { label: "Projects Shipped", value: "13+" },
    ];

    const services = [
        "AI Products",
        "Full-Stack Development",
        "MVP Building",
        "Product Strategy",
        "Digital Presence",
    ];

    const socials = [
        { label: "X", url: "https://x.com/shivacharanm7" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/shiva-charan-mandhapuram/" },
        { label: "Instagram", url: "https://www.instagram.com/shivacharanmandhapuram/" },
        { label: "Substack", url: "https://shivacharanmandhapuram.substack.com" },
    ];

    const myVentures = [
        {
            title: "lyzn.ai",
            description: "Personal AI superintelligence in beta. An AI companion that thinks, plans, and acts for you.",
            tags: ["AI", "Platform"],
            image: "/images/projects/lyzn.png",
            url: "https://lyzn.ai",
            active: true,
        },
        {
            title: "flow.lyzn.ai",
            description: "Visual workflow builder for AI agents. Design, test, and deploy intelligent automations.",
            tags: ["AI Agents", "Workflows"],
            image: "/images/projects/flow-lyzn.png",
            url: "https://flow.lyzn.ai",
            active: true,
        },
        {
            title: "DOX",
            description: "AI co-pilot for administrative tasks — perceive, reason, execute. 3-agent architecture for robust document processing.",
            tags: ["AI", "SaaS"],
            image: "/images/projects/dox.png",
            url: "https://doxpage.vercel.app/en",
            active: true,
        },
    ];

    const clientWork = [
        {
            title: "GHMEV",
            description: "Shark Tank-backed EV company. Built digital presence and product strategy for innovative e-bikes and wheelchairs.",
            tags: ["EV", "Shark Tank"],
            image: "/images/projects/ghmev.png",
            url: "https://www.ghmev.in",
        },
        {
            title: "Alphacen",
            description: "AI execution partner for a France-based company. Building robust AI solutions to drive business automation.",
            tags: ["AI", "France"],
            image: "/images/projects/alphacen.png",
            url: "https://alphacen.fr/",
        },
        {
            title: "Juzzt",
            description: "Product strategy & execution for a dating app with rating-based compatibility.",
            tags: ["Dating App", "Mobile"],
            image: "/images/projects/juzzt.png",
            url: "https://juzzt.com",
        },
        {
            title: "Blessings Health Care",
            description: "USA-based healthcare portal providing accessible medical services and streamlined patient experience.",
            tags: ["Healthcare", "USA"],
            image: "/images/projects/blessings.png",
            url: "https://blessingshealthcarellc.com",
        },
        {
            title: "Salon Vinlie",
            description: "Full digital presence for a premium salon — booking system, team showcase, and portfolio.",
            tags: ["Salon", "USA"],
            image: "/images/projects/salonvinlie.png",
            url: "https://salonvinlie.com",
        },
        {
            title: "Boost Education",
            description: "Ofsted-registered UK tuition centre empowering thousands of students (ages 4–16) across London.",
            tags: ["EdTech", "UK"],
            image: "/images/projects/boosteducation.png",
            url: "https://boosteducation.co.uk",
        },
        {
            title: "Mjollnir",
            description: "Product Builder for an EV bike rental application. Facilitating sustainable transportation solutions.",
            tags: ["EV", "Rental"],
            image: "/images/projects/mjollnir.png",
            url: "https://mjollnir.in",
        },
        {
            title: "Begin Cafe",
            description: "Designed the digital experience for a thoughtful coffee & eatery in Uptown Westerville.",
            tags: ["Cafe", "USA"],
            image: "/images/projects/begincafe.png",
            url: "https://www.begin-cafe.com",
        },
    ];

    const ProjectCard = ({ project, index }: { project: { title: string; description: string; tags: string[]; image: string; url: string; active?: boolean }; index: number }) => (
        <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-50px" }}
            className="group block h-full focus:outline-none"
        >
            <div className="flex flex-col h-full border border-[#1A1A1A] rounded-2xl overflow-hidden hover:border-[#333] transition-all duration-500 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <div className="h-[220px] sm:h-[240px] overflow-hidden relative bg-[#111]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <h3
                                    className="text-[#EAEAEA] font-medium text-lg lg:text-xl group-hover:text-white transition-colors duration-300"
                                    style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                                >
                                    {project.title}
                                </h3>
                                {project.active && (
                                    <span className="text-[9px] uppercase tracking-widest text-[#FFF] bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-md">
                                        Live
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-[#444] group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-[#888] text-sm sm:text-base leading-relaxed mb-8 flex-grow group-hover:text-[#AAA] transition-colors duration-300" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] tracking-wider text-[#999] bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-[#222]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.a>
    );

    return (
        <div className="flex flex-col items-center w-full bg-[#0A0A0A] min-h-screen">
            <main className="flex flex-col items-center w-full">
                {/* ═══════════════════════════════════════
                    STICKY SOCIAL BAR
                ═══════════════════════════════════════ */}
                <div className="fixed top-[52px] sm:top-[60px] left-0 right-0 z-40 bg-gradient-to-b from-[#0A0A0A]/95 to-transparent backdrop-blur-md pt-4 pb-6 transition-all duration-300">
                    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">
                        <div className="flex items-center gap-5 sm:gap-8">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#888] font-medium hover:text-white text-xs sm:text-sm transition-colors duration-300"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="text-xs sm:text-sm text-black bg-white hover:bg-gray-200 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                        >
                            Let's Talk →
                        </a>
                    </div>
                </div>

                {/* ═══════════════════════════════════════
                    HERO SECTION
                ═══════════════════════════════════════ */}
                <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 w-full">
                    <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1
                                className="text-[#EAEAEA] font-semibold tracking-tight"
                                style={{
                                    fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                                    fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                                    lineHeight: 1.15,
                                }}
                            >
                                From AI Products to Full-Stack Builds
                                <br />
                                <span className="text-[#555]">— I Ship It.</span>
                            </h1>
                            <p className="text-[#888] mt-4 text-sm sm:text-base max-w-[600px] leading-relaxed" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                                Working with founders and companies across India, USA, UK, France, and more.
                                Here's everything I've built — my own ventures and client projects.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap gap-8 sm:gap-12 mt-8"
                        >
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <div className="text-white font-bold text-2xl sm:text-3xl" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                                        {s.value}
                                    </div>
                                    <div className="text-[#666] text-xs mt-1 uppercase tracking-wide">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Services Strip */}
                <section className="w-full border-t border-b border-[#222] py-4 bg-[#0D0D0D]">
                    <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            {services.map((s, i) => (
                                <span key={i} className="text-[#666] text-xs uppercase tracking-wider">
                                    {s}
                                    {i < services.length - 1 && <span className="ml-3 sm:ml-4 text-[#333]">·</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    MY VENTURES
                ═══════════════════════════════════════ */}
                <section className="w-full py-12 sm:py-16">
                    <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <h2
                                className="text-white font-semibold text-lg sm:text-xl"
                                style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                            >
                                ⚡ My Ventures
                            </h2>
                            <div className="flex-1 h-px bg-[#222]" />
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {myVentures.map((project, i) => (
                                <ProjectCard key={project.title} project={project} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    CLIENT WORK
                ═══════════════════════════════════════ */}
                <section className="w-full py-12 sm:py-16 border-t border-[#222]">
                    <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <h2
                                className="text-white font-semibold text-lg sm:text-xl"
                                style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                            >
                                🤝 Client Work
                            </h2>
                            <div className="flex-1 h-px bg-[#222]" />
                            <span className="text-[#555] text-xs tracking-wide">India · USA · UK · France</span>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                            {clientWork.map((project, i) => (
                                <ProjectCard key={project.title} project={project} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
                    CONTACT SECTION
                ═══════════════════════════════════════ */}
                <section id="contact" className="w-full py-16 sm:py-20 border-t border-[#222]">
                    <div className="max-w-[700px] mx-auto px-6 sm:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                className="text-[#EAEAEA] font-semibold mb-4"
                                style={{
                                    fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                }}
                            >
                                Have a project in mind?
                            </h2>
                            <p className="text-[#888] text-sm mb-8 max-w-[500px] mx-auto leading-relaxed" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                                I work with founders and companies who value execution over talk. Let's discuss what you need built.
                            </p>

                            <div className="mt-8 text-left">
                                <form
                                    action="https://docs.google.com/forms/d/e/1FAIpQLSe8sU0QdTqM_7oVQXXb7YnZiPGP9hCJ5b7nbVfGg7oAybZAfQ/formResponse"
                                    method="POST"
                                    target="hidden_iframe"
                                    onSubmit={() => {
                                        const form = document.getElementById('contact-form') as HTMLFormElement;
                                        const btn = document.getElementById('submit-btn');
                                        if (btn) btn.innerHTML = 'Sent Successfully! ✓';
                                        setTimeout(() => form?.reset(), 500);
                                    }}
                                    id="contact-form"
                                    className="space-y-4 max-w-[500px] mx-auto"
                                >
                                    <input
                                        type="text"
                                        name="entry.561086832"
                                        placeholder="Your Full Name *"
                                        required
                                        className="w-full px-5 py-3.5 bg-[#111] border border-[#333] rounded-xl text-[#EAEAEA] placeholder-[#666] focus:outline-none focus:border-[#666] transition-colors text-sm"
                                        style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                                    />
                                    <input
                                        type="text"
                                        name="entry.1170177458"
                                        placeholder="Company Name"
                                        className="w-full px-5 py-3.5 bg-[#111] border border-[#333] rounded-xl text-[#EAEAEA] placeholder-[#666] focus:outline-none focus:border-[#666] transition-colors text-sm"
                                        style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                                    />
                                    <input
                                        type="email"
                                        name="entry.342121589"
                                        placeholder="Business Email Address *"
                                        required
                                        className="w-full px-5 py-3.5 bg-[#111] border border-[#333] rounded-xl text-[#EAEAEA] placeholder-[#666] focus:outline-none focus:border-[#666] transition-colors text-sm"
                                        style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                                    />
                                    <input
                                        type="tel"
                                        name="entry.978577989"
                                        placeholder="Phone Number *"
                                        required
                                        className="w-full px-5 py-3.5 bg-[#111] border border-[#333] rounded-xl text-[#EAEAEA] placeholder-[#666] focus:outline-none focus:border-[#666] transition-colors text-sm"
                                        style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                                    />

                                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                        <button
                                            type="submit"
                                            id="submit-btn"
                                            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0A0A0A] rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg"
                                        >
                                            Submit Inquiry →
                                        </button>
                                        <span className="text-[#555] text-xs">or</span>
                                        <a
                                            href="tel:+917013154979"
                                            className="w-full sm:w-auto px-8 py-3.5 border border-[#444] text-[#EAEAEA] rounded-full text-sm font-medium hover:border-white transition-all duration-300 text-center"
                                        >
                                            📞 Call Directly
                                        </a>
                                    </div>
                                </form>
                                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-6 mt-10">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#666] hover:text-white text-sm transition-colors duration-300"
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-10 sm:py-12 border-t border-[#222] w-full">
                    <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p
                                className="text-[#EAEAEA] font-medium text-lg"
                                style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
                            >
                                Shiva Charan Mandhapuram
                            </p>
                            <div className="text-[10px] text-gray-600 tracking-tight opacity-80">
                                Built with ⚡️
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
