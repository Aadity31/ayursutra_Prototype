import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                                src="/logo-no-name.svg"
                                alt="AyurSutra Logo"
                                width={88}
                                height={88}
                                className="rounded-lg object-contain"
                                priority
                              />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-orange-600  bg-clip-text text-transparent">
                  AyurSutra
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing Panchakarma therapy with AI-powered management and personalized healthcare solutions.
            </p>
            <div className="text-sm text-orange-400">
              🏆 Smart India Hackathon 2025 Project
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Project</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Problem Statement</li>
              <li>AI Features</li>
              <li>Technology Stack</li>
              <li>Implementation Plan</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Smart Scheduling</li>
              <li>AI Recommendations</li>
              <li>Progress Tracking</li>
              <li>Multilingual Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hackathon Team</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Team Members</li>
              <li>Project Repository</li>
              <li>Presentation Slides</li>
              <li>Demo Videos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AyurSutra Team • Smart India Hackathon 2025 • Bridging Ancient Wisdom with AI Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
