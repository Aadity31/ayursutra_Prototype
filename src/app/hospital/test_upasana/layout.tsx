"use client";

import Sidebar from "../../components/hospital/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function TestUpasanaLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
