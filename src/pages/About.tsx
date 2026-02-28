import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    { number: "19", label: "Founded First Company" },
    { number: "S4", label: "Shark Tank India Finalist" },
    { number: "12+", label: "Clients Globally" },
    { number: "5K+", label: "Community Members" },
    { number: "JY'24", label: "Jagriti Yatra Alumnus" },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0A0A0A] min-h-screen">
      <main className="flex flex-col items-center w-full">
        {/* ═══════════════════════════════════════
            HERO SECTION — Photo + Identity
        ═══════════════════════════════════════ */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-16 sm:pt-20 pb-10 sm:pb-16">
          <div className="max-w-[1100px] w-full flex flex-col items-center lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden border-2 border-[#333] shadow-2xl shadow-white/5 relative group">
                <img
                  src="/images/personal/headshot.jpg"
                  alt="Shiva Charan Mandhapuram"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <h1
                className="text-[#EAEAEA] font-semibold tracking-tight"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Shiva Charan
              </h1>
              <p
                className="text-[#888] mt-3 leading-relaxed"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: 1.6,
                  maxWidth: "540px",
                }}
              >
                I build tech ventures and ship products for founders — from AI platforms to full-stack builds. Currently working with clients across 5 countries.
              </p>
              <p
                className="text-[#555] mt-2 text-sm tracking-wide"
                style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}
              >
                India → Working globally
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 w-full sm:w-auto justify-center lg:justify-start">
                <a
                  href="/work"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A0A0A] rounded-full text-[15px] font-semibold hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center"
                >
                  View My Work
                </a>
                <a
                  href="https://shivacharanmandhapuram.substack.com/p/built-burnt-and-building-againmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 border border-[#444] text-[#EAEAEA] rounded-full text-[15px] font-medium hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center"
                >
                  Read My Story →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROOF STRIP — Milestones
        ═══════════════════════════════════════ */}
        <section className="w-full border-y border-[#1A1A1A] py-10 sm:py-14 bg-gradient-to-r from-[#050505] via-[#111] to-[#050505]">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 sm:gap-8 justify-items-center">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="text-center group flex flex-col items-center justify-center w-full"
                >
                  <div
                    className="text-white font-bold tracking-tight group-hover:scale-110 transition-transform origin-bottom duration-500"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      lineHeight: 1,
                    }}
                  >
                    {m.number}
                  </div>
                  <div className="text-[#666] text-[10px] sm:text-xs mt-3 tracking-[0.15em] uppercase font-medium group-hover:text-[#AAA] transition-colors duration-500">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STORY SECTION — From the Substack
        ═══════════════════════════════════════ */}
        <section className="w-full py-16 sm:py-20 md:py-24">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#EAEAEA] font-semibold mb-10"
              style={{
                fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
              }}
            >
              The Story So Far
            </motion.h2>

            <div className="space-y-12">
              {/* Chapter 1 — The Restless Start */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-1">
                  <div className="text-[#555] text-xs uppercase tracking-widest mb-2">The Spark</div>
                  <p
                    className="text-[#AAAAAA] leading-relaxed"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                      lineHeight: 1.75,
                    }}
                  >
                    At 19, I took a drop year yearning to do something different and big. Destiny landed me in engineering college anyway — but that became my launchpad. I quickly discovered that while writing code was interesting, my real kick was <em>building real stuff</em>. That restless energy led me to my partners, and together we launched <strong>NoobsLearning</strong> — a community I grew from zero to 5,000+ students by personally organizing events, hosting sessions, and engaging with every member.
                  </p>
                </div>
              </motion.div>

              {/* Chapter 2 — From Community to Company */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-1">
                  <div className="text-[#555] text-xs uppercase tracking-widest mb-2">The Hustle</div>
                  <p
                    className="text-[#AAAAAA] leading-relaxed"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                      lineHeight: 1.75,
                    }}
                  >
                    From the community, we launched <strong>our first startup</strong> and built <strong>Avidia</strong>, an AI-powered SaaS to help beginners learn code by building, not watching tutorials. I became "the sales guy" — running cohorts, pitching users, and bringing in early revenue. That momentum landed us at the <strong>Shark Tank India Season 4</strong> finals in Mumbai. We pitched for nearly an hour, presenting our vision for tech education in front of the show's senior producers. We didn't make the TV round, but the experience was a crash course no book could teach.
                  </p>
                </div>
              </motion.div>

              {/* Chapter 3 — Photo Row: Speaking + Jagriti */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="rounded-xl overflow-hidden border border-[#333] h-[250px] sm:h-[300px]">
                  <img
                    src="/images/personal/speaking.png"
                    alt="Shiva speaking on stage"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#333] h-[250px] sm:h-[300px]">
                  <img
                    src="/images/personal/jagriti-yatra.png"
                    alt="Shiva at Jagriti Yatra"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Chapter 4 — The Pivot & What's Next */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-1">
                  <div className="text-[#555] text-xs uppercase tracking-widest mb-2">The Pivot & Now</div>
                  <p
                    className="text-[#AAAAAA] leading-relaxed"
                    style={{
                      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
                      fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                      lineHeight: 1.75,
                    }}
                  >
                    As an alumnus of <strong>Jagriti Yatra '24</strong>, I travelled 8,000 kilometers across India — meeting founders, industry leaders like Aravind Sanka (co-founder of Rapido), and grassroots innovators. The journey crystallized my path. I left the startup and started shipping independently — building products for founders across the US, UK, France, and India. From dating apps to AI products, EV platforms to healthcare portals. Now I'm deep in building <strong>lyzn.ai</strong> — a personal AI companion that thinks, plans, and acts for you — while continuing to ship products for clients who value execution over talk.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section >

        {/* ═══════════════════════════════════════
            CURRENTLY BUILDING — lyzn.ai spotlight
        ═══════════════════════════════════════ */}
        < section className="w-full py-12 sm:py-16 border-t border-[#222]" >
          <div className="max-w-[900px] mx-auto px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-[#555] text-xs uppercase tracking-widest mb-6">Currently Building</div>
              <a
                href="https://lyzn.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="border border-[#222] rounded-3xl p-6 sm:p-8 hover:border-[#444] transition-all duration-700 bg-gradient-to-b from-[#0F0F0F] to-[#050505] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] group-hover:scale-[1.01]">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-full sm:w-[280px] h-[160px] rounded-lg overflow-hidden border border-[#333] flex-shrink-0">
                      <img
                        src="/images/projects/lyzn.png"
                        alt="lyzn.ai"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white text-xl font-semibold" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                          lyzn.ai
                        </h3>
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Active</span>
                      </div>
                      <p className="text-[#888] text-sm leading-relaxed" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                        Building personal AI superintelligence. An AI companion that thinks, plans, and acts for you — starting with the Lyzn pendant and agentic flows.
                      </p>
                      <span className="text-white text-sm mt-4 group-hover:underline">Visit lyzn.ai →</span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </section >

        {/* ═══════════════════════════════════════
            PAST VENTURES — Closed
        ═══════════════════════════════════════ */}
        < section className="w-full py-12 sm:py-16 border-t border-[#222]" >
          <div className="max-w-[900px] mx-auto px-6 sm:px-8">
            <div className="text-[#555] text-xs uppercase tracking-widest mb-6">Past Ventures</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Avidia",
                  desc: "AI learning platform. Pitched at Shark Tank India S4.",
                  period: "2023–2024",
                },
                {
                  name: "CoffeeCodes",
                  desc: "Tech consultancy that crossed 1M+ INR in revenue.",
                  period: "2023–2025",
                },
                {
                  name: "NoobsLearning",
                  desc: "5,000+ member student community. 15+ workshops & hackathons.",
                  period: "2022–2024",
                },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-[#222] rounded-2xl p-6 bg-gradient-to-b from-[#0F0F0F] to-[#050505] hover:border-[#444] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-[#EAEAEA] text-sm font-medium">{v.name}</h4>
                    <span className="text-[9px] uppercase tracking-widest text-[#666] bg-[#1a1a1a] px-2 py-0.5 rounded-full">Closed</span>
                  </div>
                  <p className="text-[#666] text-xs leading-relaxed mb-2">{v.desc}</p>
                  <p className="text-[#444] text-[10px] tracking-wide">{v.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* ═══════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════ */}
        < footer className="py-16 border-t border-[#222] w-full" >
          <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA]" style={{ fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                  Shiva Charan
                  <br />
                  Mandhapuram
                </h2>
                <p className="text-[#666] text-sm mt-3">Have a project? <a href="/work" className="text-white hover:underline transition-all">Let's talk →</a></p>
              </div>

              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div className="text-[#EAEAEA] font-medium mb-1">Socials</div>
                  <a href="https://x.com/shivacharanm7" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">X</a>
                  <a href="https://www.linkedin.com/in/shiva-charan-mandhapuram/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">LinkedIn</a>
                  <a href="https://www.instagram.com/shivacharanmandhapuram/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">Instagram</a>
                  <a href="https://shivacharanmandhapuram.substack.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">Substack</a>
                </div>
                <div className="space-y-4">
                  <div className="text-[#EAEAEA] font-medium mb-1">Contact</div>
                  <a href="https://forms.gle/Ncn648Sux1Tr9oJ16" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-[#888]">Inquiry Form ↗</a>
                </div>
              </div>
            </div>
            <div className="text-[10px] text-gray-600 text-center mt-12 tracking-tight opacity-80">
              Built with ⚡️
            </div>
          </div>
        </footer >
      </main >
    </div >
  );
}
