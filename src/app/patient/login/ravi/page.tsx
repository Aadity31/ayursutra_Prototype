'use client'

import { useState } from 'react'
// import LoginComponent from '../../components/patient/LoginComponent'
// import SignupComponent from '../../components/patient/SignupComponent'

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center px-4 py-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl min-h-[700px] h-[85vh] relative overflow-hidden">
        {/* Sliding Container */}
        <div 
          className={`flex w-[200%] h-full transition-transform duration-700 ease-in-out ${
            isSignup ? '-translate-x-1/2' : 'translate-x-0'
          }`}
        >
          {/* Login Component */}
          
        </div>
      </div>
    </div>
  )
}
