export default function AIFeatures() {
  const aiModels = [
    {
      name: 'Chatbot Assistant',
      icon: '🤖',
      description: 'NLP-powered virtual assistant for FAQs and guidance',
      tech: 'GPT-based, Multilingual',
      color: 'blue'
    },
    {
      name: 'Smart Scheduler',
      icon: '📅',
      description: 'Optimization AI for efficient resource allocation',
      tech: 'ML Optimization',
      color: 'green'
    },
    {
      name: 'Personalization Engine',
      icon: '🎯',
      description: 'Recommendation system for customized therapy plans',
      tech: 'Collaborative Filtering',
      color: 'purple'
    },
    {
      name: 'Sentiment Analysis',
      icon: '📊',
      description: 'Feedback analysis for patient satisfaction monitoring',
      tech: 'NLP Classification',
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800'
    }
    return colorMap[color] ?? colorMap.blue
  }

  return (
    <section id="ai-features" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900 text-purple-300 text-sm font-medium mb-4">
            🧠 AI Innovation
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Four Powerful AI Models Working Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our intelligent system leverages multiple AI models to deliver personalized, 
            predictive, and adaptive Panchakarma therapy management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiModels.map((model, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 h-full hover:shadow-lg">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {model.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{model.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{model.description}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(model.color)}`}>
                  {model.tech}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Workflow */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">AI-Driven Patient Journey</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
              <div className="text-sm">
                <div className="font-semibold mb-1">Assessment</div>
                <div className="text-gray-400">AI analyzes Prakriti & symptoms</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
              <div className="text-sm">
                <div className="font-semibold mb-1">Planning</div>
                <div className="text-gray-400">Personalized therapy recommendation</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
              <div className="text-sm">
                <div className="font-semibold mb-1">Scheduling</div>
                <div className="text-gray-400">Optimal time slot allocation</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
              <div className="text-sm">
                <div className="font-semibold mb-1">Monitoring</div>
                <div className="text-gray-400">Real-time progress tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
