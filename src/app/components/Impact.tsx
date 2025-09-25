export default function Impact() {
  const outcomes = [
    {
      metric: '60%',
      label: 'Time Savings',
      description: 'Reduction in administrative workload for healthcare providers',
      icon: '⏰'
    },
    {
      metric: '85%',
      label: 'Patient Satisfaction',
      description: 'Improved therapy experience with personalized care',
      icon: '😊'
    },
    {
      metric: '40%',
      label: 'Cost Reduction',
      description: 'Lower operational costs through automation',
      icon: '💰'
    },
    {
      metric: '95%',
      label: 'Accuracy',
      description: 'Precise therapy scheduling and resource allocation',
      icon: '🎯'
    }
  ]

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            📈 Expected Impact
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transforming Panchakarma Practice Globally
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AyurSutra is designed to standardize Panchakarma therapy across centers, 
            improve patient satisfaction, and support Ayurveda's global expansion through digital adoption.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-4">{outcome.icon}</div>
              <div className="text-4xl font-bold text-green-600 mb-2">{outcome.metric}</div>
              <div className="text-lg font-semibold text-gray-900 mb-3">{outcome.label}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Scalability & Future Vision</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <div className="font-semibold text-gray-900">Standardized Care</div>
                  <div className="text-gray-600">Ensures consistent Panchakarma quality across all therapy centers</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <div className="font-semibold text-gray-900">Global Expansion</div>
                  <div className="text-gray-600">Supports Ayurveda's worldwide growth with digital-first approach</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <div className="font-semibold text-gray-900">Data-Driven Insights</div>
                  <div className="text-gray-600">Evidence-based improvements in traditional healing practices</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <div className="font-semibold text-gray-900">Healthcare Innovation</div>
                  <div className="text-gray-600">Bridges ancient wisdom with modern AI-driven healthcare solutions</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Market Opportunity</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Global Ayurveda Market (2026)</span>
                <span className="font-bold text-green-600">$16B</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Panchakarma Centers in India</span>
                <span className="font-bold text-blue-600">5,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Digital Adoption Rate</span>
                <span className="font-bold text-purple-600">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Potential Users</span>
                <span className="font-bold text-orange-600">100M+</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold">Huge untapped market</span> for digital Panchakarma solutions 
                with immense growth potential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
