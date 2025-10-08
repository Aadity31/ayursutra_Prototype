export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
              🏆 Smart India Hackathon 2025 Project
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                AyurSutra
              </span>
              <br />
              AI-Powered Panchakarma Management
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionizing traditional Ayurvedic therapy with intelligent scheduling, 
              personalized treatment plans, and predictive healthcare analytics. 
              Bridging 5000-year-old wisdom with cutting-edge AI technology.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">$16B</div>
                <div className="text-sm text-gray-600">Ayurveda Market by 2026</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">40%</div>
                <div className="text-sm text-gray-600">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-sm text-gray-600">AI Models Integrated</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href='https://github.com/Aadity31/ayursutra_Prototype'>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all">
                  View Code
                </button>
              </a>
              <a
                href="/files/Ayursutra.pptx" 
                download
                className="inline-block border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                View Presentation
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Mock App Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Today's Panchakarma Schedule</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-100">
                    <div>
                      <p className="font-medium text-gray-900">Abhyanga Therapy</p>
                      <p className="text-sm text-gray-600">Patient: Rajesh Kumar • Vata Dosha</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-orange-600">9:00 AM</span>
                      <div className="text-xs text-gray-500">Room 1</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                    <div>
                      <p className="font-medium text-gray-900">Virechana</p>
                      <p className="text-sm text-gray-600">Patient: Priya Sharma • Pitta Dosha</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600">11:30 AM</span>
                      <div className="text-xs text-gray-500">Room 2</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <div>
                      <p className="font-medium text-gray-900">Shirodhara</p>
                      <p className="text-sm text-gray-600">Patient: Ankit Gupta • Kapha Dosha</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-blue-600">2:00 PM</span>
                      <div className="text-xs text-gray-500">Room 3</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">🤖 AI Recommendations</span>
                    <span className="text-green-600 font-medium">3 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
