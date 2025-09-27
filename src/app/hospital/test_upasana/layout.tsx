"use client";

import Sidebar from "../../components/hospital/Sidebar";

export default function TestUpasanaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen p-6">
        {children}
      </main>
    </div>
  );
}
