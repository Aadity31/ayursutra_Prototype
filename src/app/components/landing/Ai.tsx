'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Ayuu() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState<{role: string, content: string}[]>([])
  const [userInput, setUserInput] = useState('')

  const introMessages = [
    "Hi there! 👋 I'm Ayuu, your AI-powered healthcare assistant!",
    "I'm here to make your Panchakarma journey smoother and more personalized.",
    "I can help you schedule appointments, get basic prescription suggestions, and much more!",
    "For hospitals, I can manage therapy schedules, analyze feedback, and coordinate doctor appointments.",
    "Ready to experience the future of Ayurvedic healthcare? Let's chat! 💬"
  ]

  const capabilities = [
    {
      icon: "📅",
      title: "Smart Scheduling",
      description: "Book appointments and manage therapy sessions"
    },
    {
      icon: "💊",
      title: "Basic Prescriptions",
      description: "Get personalized Ayurvedic suggestions"
    },
    {
      icon: "📊",
      title: "Feedback Analysis",
      description: "Analyze treatment progress and outcomes"
    },
    {
      icon: "🏥",
      title: "Hospital Management",
      description: "Coordinate staff, rooms, and patient flow"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleStartChat = () => {
    setShowChat(true)
    setChatMessages([
      { role: 'bot', content: "Hello! I'm Ayuu 👋 How can I assist you with your Panchakarma therapy today?" }
    ])
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    const newMessages = [...chatMessages, { role: 'user', content: userInput }]
    setChatMessages(newMessages)

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "I understand your query. Let me help you with that!"
      
      if (userInput.toLowerCase().includes('appointment') || userInput.toLowerCase().includes('schedule')) {
        botResponse = "I can help you schedule an appointment! What type of therapy are you looking for? Abhyanga, Virechana, or Shirodhara? 📅"
      } else if (userInput.toLowerCase().includes('prescription') || userInput.toLowerCase().includes('medicine')) {
        botResponse = "Based on your symptoms, I can suggest some basic Ayurvedic remedies. However, please consult with a qualified Ayurvedic doctor for proper prescription. Would you like me to book a consultation? 💊"
      } else if (userInput.toLowerCase().includes('feedback') || userInput.toLowerCase().includes('review')) {
        botResponse = "I'd love to hear about your therapy experience! Your feedback helps us improve our services. How was your recent session? ⭐"
      }

      setChatMessages(prev => [...prev, { role: 'bot', content: botResponse }])
    }, 1500)

    setUserInput('')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-4">
            🤖 Meet Ayuu - Your AI Assistant
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Intelligent Healthcare Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by advanced AI technology, Ayuu brings personalized Ayurvedic care 
            to your fingertips with smart scheduling, recommendations, and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated Bot Character */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main Bot Character */}
              <div className={`relative w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-green-400 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-1000 ${
                isAnimating ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
              }`}>
                
                {/* Bot Face */}
                <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-inner">
                  {/* Eyes */}
                  <div className="absolute top-20 left-16 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse">
                    <div className="w-6 h-6 bg-white rounded-full mt-3 ml-3 animate-bounce"></div>
                  </div>
                  <div className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse">
                    <div className="w-6 h-6 bg-white rounded-full mt-3 mr-3 animate-bounce"></div>
                  </div>
                  
                  {/* Smile */}
                  <div className="absolute bottom-20 w-20 h-10 border-4 border-gray-700 rounded-full border-t-transparent"></div>
                  
                  {/* Ayuu Text */}
                  <div className="absolute bottom-8 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Ayuu
                  </div>
                </div>

                {/* Waving Hand */}
                <div className={`absolute -right-8 top-12 text-6xl transform transition-all duration-500 ${
                  isAnimating ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                }`}>
                  👋
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 text-3xl animate-bounce">💊</div>
                <div className="absolute -bottom-4 -right-4 text-3xl animate-pulse">📅</div>
                <div className="absolute top-8 -right-12 text-3xl animate-ping">⭐</div>
              </div>

              {/* Speech Bubble */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-lg border-2 border-blue-200 max-w-sm">
                <div className="text-center">
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    {introMessages[currentMessage]}
                  </p>
                  <div className="flex justify-center space-x-1">
                    {introMessages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentMessage ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {/* Speech Bubble Pointer */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>

              {/* Message Cycling */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => setCurrentMessage((prev) => (prev + 1) % introMessages.length)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Next Message →
                </button>
              </div>
            </div>
          </div>

          {/* Capabilities & Chat Interface */}
          <div className="space-y-8">
            {/* Capabilities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Can Do For You</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">{capability.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1">{capability.title}</h4>
                    <p className="text-gray-600 text-sm">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Interface */}
            {!showChat ? (
              <div className="text-center">
                <button
                  onClick={handleStartChat}
                  className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                >
                  💬 Start Chatting with Ayuu
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Ayuu AI Assistant</h4>
                    <p className="text-blue-100 text-sm">Online • Ready to help</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask me anything about Panchakarma therapy..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Ayuu?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Intelligence</h4>
              <p className="text-gray-600">Advanced machine learning algorithms understand your unique health needs</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600">Get instant support and guidance whenever you need it, day or night</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">HIPAA Compliant</h4>
              <p className="text-gray-600">Your health data is protected with enterprise-grade security measures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
