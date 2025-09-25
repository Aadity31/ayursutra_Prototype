export default function ProblemStatement() {
  const problems = [
    {
      icon: '📋',
      title: 'Manual Scheduling',
      description: 'Traditional paper-based appointment systems lead to conflicts and inefficiency',
      impact: 'Loss of 2-3 hours daily'
    },
    {
      icon: '⚖️',
      title: 'Inconsistent Therapy Quality',
      description: 'Lack of standardized procedures across different Panchakarma centers',
      impact: 'Variable patient outcomes'
    },
    {
      icon: '👥',
      title: 'Poor Patient Management',
      description: 'No systematic tracking of patient progress and therapy effectiveness',
      impact: '30% patient dropouts'
    },
    {
      icon: '🔍',
      title: 'Limited Data Insights',
      description: 'Absence of analytics to optimize treatments and predict outcomes',
      impact: 'Missed opportunities'
    }
  ]

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4">
            🎯 Problem Statement
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Challenges in Traditional Panchakarma Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Despite Panchakarma gaining global recognition and the Ayurveda market projected to reach 
            <span className="font-bold text-orange-600"> $16 billion by 2026</span>, 
            traditional practices face significant operational challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="relative group">
              <div className="p-8 rounded-xl border-2 border-gray-100 hover:border-red-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
                <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                  Impact: {problem.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Statistics */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">500M+</div>
              <div className="text-gray-700">People practice Ayurveda globally</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">75%</div>
              <div className="text-gray-700">Ayurveda centers lack digital systems</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-700">Time wasted on manual processes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
