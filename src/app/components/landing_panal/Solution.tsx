export default function Solution() {
  const features = [
    {
      icon: '🤖',
      title: 'Automated Scheduling',
      description: 'AI-powered appointment management with conflict prevention and optimal resource allocation'
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Pre & post-procedure alerts via in-app, SMS, and email with personalized guidance'
    },
    {
      icon: '📊',
      title: 'Real-time Tracking',
      description: 'Live therapy monitoring with progress visualization and outcome prediction'
    },
    {
      icon: '💡',
      title: 'AI Recommendations',
      description: 'Personalized therapy plans based on Prakriti analysis and treatment history'
    },
    {
      icon: '🎯',
      title: 'Predictive Analytics',
      description: 'Early recovery alerts and adaptive treatment modifications using ML algorithms'
    },
    {
      icon: '🌐',
      title: 'Multilingual Assistant',
      description: 'Voice and text-based AI support in multiple Indian languages'
    }
  ]

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            ✨ Our Solution
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AyurSutra: Where Ancient Wisdom Meets AI Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive digital ecosystem that transforms traditional Panchakarma practice 
            through intelligent automation, personalized care, and predictive insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-300 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Architecture */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Three-Platform Architecture</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Admin Panel</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Hospital management</li>
                <li>• Staff scheduling</li>
                <li>• Resource optimization</li>
                <li>• Analytics dashboard</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Doctor Panel</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Patient management</li>
                <li>• Treatment planning</li>
                <li>• Progress monitoring</li>
                <li>• AI recommendations</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Patient App</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Appointment booking</li>
                <li>• Therapy tracking</li>
                <li>• Progress visualization</li>
                <li>• AI assistant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
