import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-4 hover:shadow-xl transition-shadow duration-200">
      {title && <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
