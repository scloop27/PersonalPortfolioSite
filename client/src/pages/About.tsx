import { Play, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-pure-white">
      {/* Main Container */}
      <main className="flex flex-col items-start pt-24 w-full">
        {/* Hero Section */}
        <section className="flex flex-row justify-center items-center w-full px-0 py-32 lg:py-[452px]">
          <div className="flex flex-col items-start px-6 lg:px-10 max-w-[1440px] w-full">
            <div className="flex flex-col items-start w-full max-w-[1357px]">
              <h1 className="hero-text text-charcoal w-full">
                Hi, I'm Advait — a 21 year old founder. I am passionate about building technology that makes a meaningful impact on people's lives.
              </h1>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <div className="flex flex-col items-center w-full">
          {/* Separator */}
          <div className="w-full h-px border-t border-gray"></div>
          
          {/* Project 1: Friday - Text Left, Image Right */}
          <div className="flex flex-col items-start px-6 lg:px-10 max-w-[1440px] w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start py-12 lg:py-20 gap-8 lg:gap-48 w-full">
              <div className="flex flex-col items-start gap-2 w-full lg:w-[480.94px] order-2 lg:order-1">
                <div className="flex flex-col items-start w-full">
                  <h2 className="project-title text-charcoal w-full">Friday</h2>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="project-description text-medium-gray w-full">
                    AI assistant for email. Backed by Y Combinator.
                  </p>
                </div>
                <div className="flex flex-col items-start pt-8 w-[85px]">
                  <button className="flex flex-row items-center px-6 py-[10px] bg-light-gray rounded-full w-[85px]">
                    <span className="button-text text-charcoal">View</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start pb-[7px] w-full lg:w-[687.06px] order-1 lg:order-2">
                <div className="w-full h-[250px] lg:h-[386.47px] bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative">
                  <div className="text-center text-white px-8">
                    <h3 className="text-2xl lg:text-3xl font-medium mb-2">Never check your<br />email again</h3>
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-600 rounded-full mx-auto mt-6 lg:mt-8 flex items-center justify-center">
                      <Mail className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px border-t border-gray"></div>

          {/* Project 2: YouLearn - Image Left, Text Right */}
          <div className="flex flex-col items-start px-6 lg:px-10 max-w-[1440px] w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start py-12 lg:py-20 gap-8 lg:gap-48 w-full">
              <div className="flex flex-col items-start pb-[7px] w-full lg:w-[687.06px] order-1">
                <div className="w-full h-[250px] lg:h-[386.47px] bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  <div className="h-full p-4 lg:p-6">
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <div className="text-white text-base lg:text-lg font-medium">YouLearn</div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <div className="bg-gray-800 rounded-lg p-3 lg:p-4 h-16 lg:h-20"></div>
                      <div className="bg-gray-800 rounded-lg p-3 lg:p-4 h-16 lg:h-20"></div>
                      <div className="bg-gray-700 rounded-lg p-3 lg:p-4 h-12 lg:h-16 col-span-2"></div>
                      <div className="bg-purple-600 rounded-lg p-3 lg:p-4 h-10 lg:h-12"></div>
                      <div className="bg-gray-800 rounded-lg p-3 lg:p-4 h-10 lg:h-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 w-full lg:w-[480.94px] order-2">
                <div className="flex flex-col items-start w-full">
                  <h2 className="project-title text-charcoal w-full">YouLearn</h2>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="project-description text-medium-gray w-full">
                    AI tutor for students. 1M+ users.
                  </p>
                </div>
                <div className="flex flex-col items-start pt-8 w-[85px]">
                  <button className="flex flex-row items-center px-6 py-[10px] bg-light-gray rounded-full w-[85px]">
                    <span className="button-text text-charcoal">View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px border-t border-gray"></div>

          {/* Project 3: Iris - Text Left, Image Right */}
          <div className="flex flex-col items-start px-6 lg:px-10 max-w-[1440px] w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start py-12 lg:py-20 gap-8 lg:gap-48 w-full">
              <div className="flex flex-col items-start gap-2 w-full lg:w-[480.94px] order-2 lg:order-1">
                <div className="flex flex-col items-start w-full">
                  <h2 className="project-title text-charcoal w-full">Iris</h2>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="project-description text-medium-gray w-full">
                    AI wearable that gives you infinite memory.
                  </p>
                </div>
                <div className="flex flex-col items-start pt-8 w-[85px]">
                  <button className="flex flex-row items-center px-6 py-[10px] bg-light-gray rounded-full w-[85px]">
                    <span className="button-text text-charcoal">View</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start pb-[7px] w-full lg:w-[687.06px] order-1 lg:order-2">
                <div className="w-full h-[250px] lg:h-[386.47px] flex items-center justify-center space-x-4 lg:space-x-8">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-charcoal rounded-full"></div>
                  </div>
                  <div className="relative">
                    <div className="w-20 h-40 lg:w-24 lg:h-48 bg-white rounded-3xl border-2 border-gray-200 shadow-lg overflow-hidden">
                      <div className="bg-gray-900 h-5 lg:h-6 rounded-t-2xl"></div>
                      <div className="p-1.5 lg:p-2 space-y-1.5 lg:space-y-2">
                        <div className="bg-gray-200 h-1.5 lg:h-2 rounded"></div>
                        <div className="bg-gray-300 h-1.5 lg:h-2 rounded w-3/4"></div>
                        <div className="bg-purple-200 h-3 lg:h-4 rounded mt-3 lg:mt-4"></div>
                        <div className="bg-gray-200 h-1.5 lg:h-2 rounded"></div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-6 lg:-right-8 bg-gray-800 text-white text-xs px-2 lg:px-3 py-1 lg:py-2 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-1 lg:space-x-2">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs">Smart reminder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px border-t border-gray"></div>

          {/* Project 4: Commencement Speech - Image Left, Text Right */}
          <div className="flex flex-col items-start px-6 lg:px-10 max-w-[1440px] w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start py-12 lg:py-20 gap-8 lg:gap-48 w-full">
              <div className="flex flex-col items-start pb-[7px] w-full lg:w-[687.06px] order-1">
                <div className="w-full h-[250px] lg:h-[386.47px] bg-gray-900 rounded-xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-5 h-5 lg:w-6 lg:h-6 text-white ml-0.5 lg:ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 lg:p-6">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <span className="text-xs lg:text-sm">02:34</span>
                        <div className="flex-1 h-1 bg-white bg-opacity-30 rounded-full">
                          <div className="h-full w-1/3 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xs lg:text-sm">15:42</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4 grid grid-cols-3 gap-0.5 lg:gap-1">
                    <div className="w-6 h-4 lg:w-8 lg:h-6 bg-blue-600 rounded-sm"></div>
                    <div className="w-6 h-4 lg:w-8 lg:h-6 bg-green-600 rounded-sm"></div>
                    <div className="w-6 h-4 lg:w-8 lg:h-6 bg-purple-600 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 w-full lg:w-[480.94px] order-2">
                <div className="flex flex-col items-start w-full">
                  <h2 className="project-title text-charcoal w-full">Commencement Speech</h2>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="project-description text-medium-gray w-full">
                    Spoke about chasing rejection to over 10,000 students at my graduation.
                  </p>
                </div>
                <div className="flex flex-col items-start pt-8 w-[85px]">
                  <button className="flex flex-row items-center px-6 py-[10px] bg-light-gray rounded-full w-[85px]">
                    <span className="button-text text-charcoal">View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
