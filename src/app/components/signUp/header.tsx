// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { lightColors } from "../../constants/colors";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const colors = lightColors;

  return (
    <header
      className="backdrop-blur-md shadow-sm sticky top-0 z-50"
      style={{
        backgroundColor: colors.bgLight,
        borderBottom: `1px solid ${colors.borderMuted}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <span className="font-bold text-xl" style={{ color: colors.highlight }}>
                आ
              </span>
            </div>
            <div>
              <span
                className="text-2xl font-bold"
                style={{ color: colors.primary }}
              >
                AyurSutra
              </span>
              <div
                className="text-xs -mt-1"
                style={{ color: colors.textMuted }}
              >
                Smart India Hackathon 2025
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <button
                className="px-6 py-2 rounded-lg font-medium cursor-pointer transition-all"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.highlight,
                }}
              >
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button
                className="px-6 py-2 rounded-lg font-medium cursor-pointer transition-all"
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.highlight,
                }}
              >
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className="w-6 h-0.5"
                style={{ backgroundColor: colors.text }}
              ></span>
              <span
                className="w-6 h-0.5"
                style={{ backgroundColor: colors.text }}
              ></span>
              <span
                className="w-6 h-0.5"
                style={{ backgroundColor: colors.text }}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4"
            style={{ borderTop: `1px solid ${colors.borderMuted}` }}
          >
            <div className="flex flex-col space-y-4">
              {["Problem", "Solution", "AI Features", "Impact", "Demo"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    style={{ color: colors.text }}
                  >
                    {item}
                  </Link>
                )
              )}
              <div className="flex space-x-2">
                <Link href="/login" className="flex-1">
                  <button
                    className="w-full py-2 rounded-lg"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.highlight,
                    }}
                  >
                    Login
                  </button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <button
                    className="w-full py-2 rounded-lg"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.highlight,
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
