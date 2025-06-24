import { motion } from "framer-motion";

export default function Playbook() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Title & Thesis Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Founder's Playbook
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 text-center">
            Building a company is more than code. It's about navigating change.
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            My journey has been defined by key strategic decisions that have shaped our resilience, culture, and path to growth. This playbook highlights some of those moments.
          </p>
          
          <hr className="border-gray-300" />
        </motion.div>

        {/* Key Play 01 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
            Key Play 01
          </h3>
          
          <h2 className="text-2xl font-bold mt-2 mb-8">
            Building Community Before Product
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>The Challenge:</strong> Starting Noobsverse with no audience, no product, and limited resources. Traditional wisdom says build first, then find customers.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>The Decision:</strong> We chose to build our community first through Noobslearning, creating value through educational content and workshops before launching any product.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>The Outcome:</strong> Grew to 5,000+ engaged members who became our first customers, advisors, and advocates. Product-market fit became clearer through constant community feedback.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">5,000+</div>
              <div className="text-gray-600 mb-4">Community Members</div>
              <div className="text-sm text-gray-500">Built before product launch</div>
            </div>
          </div>
        </motion.div>

        <hr className="border-gray-300" />

        {/* Key Play 02 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
            Key Play 02
          </h3>
          
          <h2 className="text-2xl font-bold mt-2 mb-8">
            Pivoting Through Y Combinator Feedback
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>The Challenge:</strong> Our initial product wasn't gaining the traction we expected despite having a strong community foundation. Customer acquisition was slower than projected.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>The Decision:</strong> Applied to Y Combinator and used their structured feedback process to identify the core problem. Pivoted our approach based on real user behavior patterns and pain points.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>The Outcome:</strong> Found a more focused market fit, streamlined our value proposition, and built stronger product-market alignment through iterative testing and customer interviews.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 text-center">
              <div className="text-2xl font-bold text-gray-800 mb-2">Y Combinator</div>
              <div className="text-gray-600 mb-4">Structured Pivoting</div>
              <div className="text-sm text-gray-500">Data-driven decision making</div>
            </div>
          </div>
        </motion.div>

        <hr className="border-gray-300" />

        {/* Key Play 03 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
            Key Play 03
          </h3>
          
          <h2 className="text-2xl font-bold mt-2 mb-8">
            Scaling Culture Through Remote-First Design
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>The Challenge:</strong> As we grew, maintaining our startup culture and effective communication became increasingly difficult. Traditional office-based approaches weren't scalable for our distributed team.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>The Decision:</strong> Implemented a remote-first culture with documented processes, asynchronous communication principles, and regular virtual team building. Invested heavily in tooling and clear communication protocols.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <strong>The Outcome:</strong> Maintained strong team cohesion while scaling to multiple time zones. Improved productivity through better documentation and clearer decision-making processes.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 text-center">
              <div className="text-2xl font-bold text-gray-800 mb-2">Remote-First</div>
              <div className="text-gray-600 mb-4">Culture Design</div>
              <div className="text-sm text-gray-500">Scalable team operations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}