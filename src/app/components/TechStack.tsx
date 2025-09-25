export default function TechStack() {
  const technologies = [
    { category: 'Frontend', items: ['React/Angular', 'Android (Java/Kotlin)', 'Responsive Web'] },
    { category: 'Backend', items: ['Node.js/Django', 'RESTful APIs', 'Real-time Processing'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis Cache'] },
    { category: 'AI/ML', items: ['Python/TensorFlow', 'PyTorch', 'OpenAI GPT'] },
    { category: 'Services', items: ['Twilio SMS', 'Firebase Push', 'Email Automation'] },
    { category: 'Cloud', items: ['AWS/Azure', 'Docker', 'Kubernetes'] }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            ⚡ Technology Stack
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built with Modern, Scalable Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade technology stack ensuring reliability, security, and scalability 
            for healthcare applications across multiple platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Phases */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Implementation Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">1</div>
              <h4 className="font-bold text-gray-900 mb-2">Phase 1</h4>
              <p className="text-sm text-gray-600">Core scheduling & notifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">2</div>
              <h4 className="font-bold text-gray-900 mb-2">Phase 2</h4>
              <p className="text-sm text-gray-600">Real-time tracking & feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">3</div>
              <h4 className="font-bold text-gray-900 mb-2">Phase 3</h4>
              <p className="text-sm text-gray-600">AI integration & analytics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">4</div>
              <h4 className="font-bold text-gray-900 mb-2">Phase 4</h4>
              <p className="text-sm text-gray-600">Multi-center scaling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
