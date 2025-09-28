'use client'

import { useState } from 'react'
import { Eye, EyeOff, Mountain, User, UserCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type UserRole = 'admin' | 'doctor'

export default function LoginPage() {
  const router = useRouter();
  const [activeRole, setActiveRole] = useState<UserRole>('admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const loginData = { activeRole, email, password, rememberMe };

  try {
    const res = await fetch("/api/doctor-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    const result = await res.json();
    if (result.success) {
      console.log("Login attempt logged successfully!");

      // Redirect based on role
      if (activeRole === "admin") {
        router.push("/hospital/dashboard"); // your admin page
      } else {
        router.push("/doctor/dashboard"); // your doctor page
      }

    } else {
      console.error("Failed to log login attempt");
    }
  } catch (error) {
    console.error("Error logging login attempt:", error);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Logo Header */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center space-x-3">
            <div className="relative w-12 h-12 transform hover:scale-105 transition-transform duration-200">
                <Image
                    src="/logo-no-name.svg"
                    alt="AyurSutra Logo"
                    width={48}
                    height={48}
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
        </div>

        {/* Role Switcher */}
        <div className="mb-8">
          <div className="relative bg-gray-100 rounded-xl p-1">
            {/* Sliding Background */}
            <div 
              className={`absolute top-1 bottom-1 w-1/2 bg-teal-500 rounded-lg transition-all duration-300 ease-in-out transform ${
                activeRole === 'doctor' ? 'translate-x-full' : 'translate-x-0'
              }`}
            />
            
            {/* Role Buttons */}
            <div className="relative flex">
              <button
                type="button"
                onClick={() => setActiveRole('admin')}
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ease-in-out ${
                  activeRole === 'admin' 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <UserCheck className="w-4 h-4 mr-2" />
                Admin
              </button>
              
              <button
                type="button"
                onClick={() => setActiveRole('doctor')}
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ease-in-out ${
                  activeRole === 'doctor' 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <User className="w-4 h-4 mr-2" />
                Doctor
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Welcome Message */}
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl font-light text-teal-500 mb-2">
            Welcome Back
          </h2> */}
          <p className="text-gray-600 text-sm">
            Sign in as {activeRole === 'admin' ? 'Administrator' : 'Doctor'}
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              placeholder={`Enter your ${activeRole} email`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 pr-12 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded transition-colors"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <a href="#" className="text-sm text-teal-500 hover:text-teal-600 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Sign in as {activeRole === 'admin' ? 'Admin' : 'Doctor'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <a href="#" className="text-teal-500 hover:text-teal-600 transition-colors font-medium">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
