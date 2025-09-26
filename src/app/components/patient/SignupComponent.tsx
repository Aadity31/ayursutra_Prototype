'use client'

import { useState } from 'react'
import { Eye, EyeOff, Mountain, UserPlus, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface SignupComponentProps {
    onSwitchToLogin: () => void
}

export default function SignupComponent({ onSwitchToLogin }: SignupComponentProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreeToTerms, setAgreeToTerms] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        if (!agreeToTerms) {
            alert('Please agree to the terms and conditions')
            return
        }

        console.log('User signup attempt:', formData)

        try {
            console.log('Processing user registration...')
            // Handle signup logic here
        } catch (error) {
            console.error('User signup failed:', error)
        }
    }

    return (
        <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-blue-50 to-blue-100">
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
            <div className="text-center mb-6">
                <h2 className="text-3xl font-light text-blue-500 mb-2">
                    Join Us
                </h2>
                <p className="text-gray-600 text-sm">
                    Create your account to get started
                </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        id="signup-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="signup-password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                required
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                required
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                placeholder="Confirm"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        required
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            Terms & Privacy Policy
                        </a>
                    </label>
                </div>

                {/* Signup Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create Account
                </button>
            </form>

            {/* Switch to Login */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                        onClick={onSwitchToLogin}
                        className="text-blue-500 hover:text-blue-600 transition-colors font-medium inline-flex items-center group"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    )
}
