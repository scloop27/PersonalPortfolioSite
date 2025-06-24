export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <footer className="border-t border-gray-200 py-12 mt-32">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium mb-2 text-charcoal">Advait Paliwal</h3>
          </div>
          <div className="text-right">
            <div className="space-y-1 text-sm text-medium-gray">
              <div>
                <a href="#" className="hover:text-charcoal transition-colors duration-200">
                  Instagram
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-charcoal transition-colors duration-200">
                  LinkedIn
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-charcoal transition-colors duration-200">
                  Github
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-charcoal transition-colors duration-200">
                  Substack
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
