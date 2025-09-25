import React, { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      {title && <h3 className="font-semibold text-lg mb-3">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
