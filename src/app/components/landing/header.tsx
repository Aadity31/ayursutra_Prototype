'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simple navigation without smooth scroll
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'auto' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100' 
        : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 transform hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.svg"
                alt="AyurSutra Logo"
                width={88}
                height={88}
                className="rounded-lg object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                AyurSutra
              </span>
              <div className="text-xs text-gray-500 -mt-1">Smart India Hackathon 2025</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToSection('problem')}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium relative group"
            >
              Problem
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => navigateToSection('solution')}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium relative group"
            >
              Solution
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => navigateToSection('ai-features')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
            >
              AI Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => navigateToSection('impact')}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium relative group"
            >
              Impact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => navigateToSection('demo')}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium relative group"
            >
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <button 
                onClick={() => navigateToSection('demo')}
                className="bg-blue-500 px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium transform hover:scale-105 duration-200"
              >
                Login
              </button>
            </Link>
            <Link href="/signUp">
              <button 
                onClick={() => navigateToSection('demo')}
                className="bg-blue-500 px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium transform hover:scale-105 duration-200"
              >
                SignUp
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-6 flex flex-col justify-center space-y-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-90 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-90 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-orange-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateToSection('problem')}
                className="text-gray-600 hover:text-green-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-green-50 text-left"
              >
                Problem Statement
              </button>
              <button 
                onClick={() => navigateToSection('solution')}
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-orange-50 text-left"
              >
                Our Solution
              </button>
              <button 
                onClick={() => navigateToSection('ai-features')}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50 text-left"
              >
                AI Features
              </button>
              <button 
                onClick={() => navigateToSection('impact')}
                className="text-gray-600 hover:text-green-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-green-50 text-left"
              >
                Expected Impact
              </button>
              <button 
                onClick={() => navigateToSection('demo')}
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-orange-50 text-left"
              >
                Live Demo
              </button>
              <button 
                onClick={() => navigateToSection('demo')}
                className="w-full bg-gradient-to-r from-green-600 via-orange-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
