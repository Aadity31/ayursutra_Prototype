'use client'

import { useState } from 'react'
import { Eye, EyeOff, Mountain, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface LoginComponentProps {
    onSwitchToSignup: () => void
}

export default function LoginComponent({ onSwitchToSignup }: LoginComponentProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('User login attempt:', { email, password, rememberMe })

        try {
            console.log('Processing user authentication...')
            // Handle login logic here
        } catch (error) {
            console.error('User login failed:', error)
        }
    }

    return (
        <div className="h-full flex flex-col justify-center p-12">
            {/* Logo Header */}
        
            <div className="flex justify-center flex items-center space-x-3">
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

            {/* Welcome Message */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-light text-teal-500 mb-2">
                    Login
                </h2>
                <p className="text-gray-600 text-sm">
                    Access your account to continue
                </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        id="login-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="login-password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            required
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
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

                {/* Remember Me & Forgot Password */}
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
                    Login
                </button>
            </form>

            {/* Switch to Signup */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                        onClick={onSwitchToSignup}
                        className="text-teal-500 hover:text-teal-600 transition-colors font-medium inline-flex items-center group"
                    >
                        Sign Up
                        <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </p>
            </div>
        </div>
    )
}
