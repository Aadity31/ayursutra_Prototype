"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { lightColors, darkColors } from "../../constants/colors";
import { getTheme, setTheme } from "../../constants/themeSelect";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false); // <- for SSR hydration fix

  useEffect(() => {
    setMounted(true);
    setIsDark(getTheme() === darkColors);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  if (!mounted) return null; // <- prevents SSR/client mismatch

  const colors = getTheme();

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
              <Link href='/'>
              <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                AyurSutra
              </span>
              <div className="text-xs -mt-1" style={{ color: colors.textMuted }}>
                Smart India Hackathon 2025
              </div>
              </Link>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signup">
              <button
                className="px-6 py-2 rounded-lg font-medium cursor-pointer transition-all"
                style={{ backgroundColor: colors.secondary, color: colors.highlight }}
              >
                Sign Up
              </button>
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg font-medium transition-all"
              style={{ backgroundColor: colors.primary, color: colors.highlight }}
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* ... */}
        </div>
      </div>
    </header>
  );
}
