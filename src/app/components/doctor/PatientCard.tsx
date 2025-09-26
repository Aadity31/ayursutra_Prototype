"use client";

import React from "react";

interface PatientCardProps {
  name: string;
  age: number;
  gender: string;
  condition: string;
  lastVisit?: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  age,
  gender,
  condition,
  lastVisit,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Age:</span> {age}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Gender:</span> {gender}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Condition:</span> {condition}
      </p>
      {lastVisit && (
        <p className="text-gray-500 text-sm">
          <span className="font-medium">Last Visit:</span> {lastVisit}
        </p>
      )}
    </div>
  );
};

export default PatientCard;
