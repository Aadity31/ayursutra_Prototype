'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">आ</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                AyurSutra
              </span>
              <div className="text-xs text-gray-500 -mt-1">Smart India Hackathon 2025</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-gray-600 hover:text-orange-600 transition-colors">
              Problem
            </Link>
            <Link href="#solution" className="text-gray-600 hover:text-orange-600 transition-colors">
              Solution
            </Link>
            <Link href="#ai-features" className="text-gray-600 hover:text-orange-600 transition-colors">
              AI Features
            </Link>
            <Link href="#impact" className="text-gray-600 hover:text-orange-600 transition-colors">
              Impact
            </Link>
            <Link href="#demo" className="text-gray-600 hover:text-orange-600 transition-colors">
              Demo
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium">
              View Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-6 h-0.5 bg-gray-600"></span>
              <span className="w-6 h-0.5 bg-gray-600"></span>
              <span className="w-6 h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100">
            <div className="flex flex-col space-y-4">
              <Link href="#problem" className="text-gray-600 hover:text-orange-600">Problem</Link>
              <Link href="#solution" className="text-gray-600 hover:text-orange-600">Solution</Link>
              <Link href="#ai-features" className="text-gray-600 hover:text-orange-600">AI Features</Link>
              <Link href="#impact" className="text-gray-600 hover:text-orange-600">Impact</Link>
              <Link href="#demo" className="text-gray-600 hover:text-orange-600">Demo</Link>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg">
                View Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
