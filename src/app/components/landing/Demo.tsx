import Link from "next/link"
export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900 text-purple-300 text-sm font-medium mb-4">
            🎬 Live Demo
          </div>
          <h2 className="text-4xl font-bold mb-6">
            See AyurSutra in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our AI-powered Panchakarma management system through interactive demos 
            showcasing real-world scenarios and intelligent features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Admin Dashboard Demo */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🖥️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Admin Dashboard</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Hospital management, staff scheduling, and real-time analytics dashboard with AI insights.
            </p>
            <Link href="/admin/login">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                Login as admin
              </button>
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👩‍⚕️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Doctor Interface</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Patient management, treatment planning, and AI-generated therapy recommendations.
            </p>
            <Link href="/hospital/login"></Link>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
              Login as a Doctor
            </button>
          </div>

          {/* Patient App Demo */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Patient Mobile App</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Appointment booking, progress tracking, and personalized AI assistance for patients.
            </p>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
              Download App Demo
            </button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future of Panchakarma?</h3>
          <p className="text-purple-100 mb-6">
            Join our Smart India Hackathon presentation and see how AyurSutra can transform healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📊 View Full Presentation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              🎥 Watch Demo Video
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
