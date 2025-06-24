import { Play, Mail, User, Circle } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="mt-20 mb-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-normal leading-tight text-charcoal">
            Hi, I'm Advait — a 21 year old founder. I am passionate about building technology that makes a meaningful impact on people's lives.
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-32">
        {/* Project 1: Friday - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold mb-4 text-charcoal">Friday</h2>
            <p className="text-medium-gray leading-relaxed mb-4">
              Automate your email, backed by AI automation
            </p>
            <a href="#" className="text-charcoal underline hover:no-underline transition-all duration-200">
              View
            </a>
          </div>
          <div className="order-first lg:order-last">
            <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center relative">
              <div className="text-center text-white px-8">
                <h3 className="text-3xl font-medium mb-2">Never check your email again</h3>
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mt-8 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: YouLearn - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg aspect-video">
              <div className="h-full p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white text-lg font-medium">YouLearn</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 h-20"></div>
                  <div className="bg-gray-800 rounded-lg p-4 h-20"></div>
                  <div className="bg-gray-700 rounded-lg p-4 h-16 col-span-2"></div>
                  <div className="bg-purple-600 rounded-lg p-4 h-12"></div>
                  <div className="bg-gray-800 rounded-lg p-4 h-12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <h2 className="text-2xl font-semibold mb-4 text-charcoal">YouLearn</h2>
            <p className="text-medium-gray leading-relaxed mb-4">
              AI-driven flashcards - like cards
            </p>
            <a href="#" className="text-charcoal underline hover:no-underline transition-all duration-200">
              View
            </a>
          </div>
        </div>

        {/* Project 3: Iris - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold mb-4 text-charcoal">Iris</h2>
            <p className="text-medium-gray leading-relaxed mb-4">
              Generative AI gives you infinite memory
            </p>
            <a href="#" className="text-charcoal underline hover:no-underline transition-all duration-200">
              View
            </a>
          </div>
          <div className="order-first lg:order-last">
            <div className="flex items-center justify-center space-x-8">
              <div className="w-48 h-48 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-charcoal rounded-full"></div>
              </div>
              <div className="relative">
                <div className="w-24 h-48 bg-white rounded-3xl border-2 border-gray-200 shadow-lg overflow-hidden">
                  <div className="bg-gray-900 h-6 rounded-t-2xl"></div>
                  <div className="p-2 space-y-2">
                    <div className="bg-gray-200 h-2 rounded"></div>
                    <div className="bg-gray-300 h-2 rounded w-3/4"></div>
                    <div className="bg-purple-200 h-4 rounded mt-4"></div>
                    <div className="bg-gray-200 h-2 rounded"></div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-8 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Smart reminder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: Commencement Speech - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">02:34</span>
                    <div className="flex-1 h-1 bg-white bg-opacity-30 rounded-full">
                      <div className="h-full w-1/3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">15:42</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 grid grid-cols-3 gap-1">
                <div className="w-8 h-6 bg-blue-600 rounded-sm"></div>
                <div className="w-8 h-6 bg-green-600 rounded-sm"></div>
                <div className="w-8 h-6 bg-purple-600 rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <h2 className="text-2xl font-semibold mb-4 text-charcoal">Commencement Speech</h2>
            <p className="text-medium-gray leading-relaxed mb-4">
              Spoke about chasing rejection to feel ADHD students of the National Academy as the youngest at Thacher School
            </p>
            <a href="#" className="text-charcoal underline hover:no-underline transition-all duration-200">
              View
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
