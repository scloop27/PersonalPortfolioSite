export default function Interests() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="mt-20 mb-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-normal leading-tight text-charcoal mb-16">
            Interests
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Technology</h3>
              <ul className="space-y-4 text-medium-gray">
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Product Development & Design</li>
                <li>Automation & Productivity Tools</li>
                <li>Web Technologies & APIs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Personal</h3>
              <ul className="space-y-4 text-medium-gray">
                <li>Public Speaking & Education</li>
                <li>Entrepreneurship & Innovation</li>
                <li>Mental Health & ADHD Advocacy</li>
                <li>Community Building</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Learning</h3>
              <ul className="space-y-4 text-medium-gray">
                <li>Cognitive Science & Memory</li>
                <li>User Experience Design</li>
                <li>Leadership & Management</li>
                <li>Psychology & Behavior</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Creative</h3>
              <ul className="space-y-4 text-medium-gray">
                <li>Content Creation & Writing</li>
                <li>Video Production</li>
                <li>Digital Art & Animation</li>
                <li>Music & Audio Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
