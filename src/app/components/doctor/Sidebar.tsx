"use client"; // Must be first line

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Graphs", href: "/doctor/graphs" },
    { name: "Notifications", href: "/doctor/notifications" },
  ];

  return (
    <aside className="w-64 bg-white shadow flex flex-col">
      <div className="p-6 font-bold text-lg border-b">Menu</div>
      <ul className="flex-1">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`p-4 cursor-pointer hover:bg-gray-100 ${
              pathname === item.href ? "bg-gray-200 font-bold" : ""
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
