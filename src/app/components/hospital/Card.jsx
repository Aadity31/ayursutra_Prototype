import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      {title && <h3 className="font-semibold text-lg mb-3">{title}</h3>}
      {children}
    </div>
  );
}
