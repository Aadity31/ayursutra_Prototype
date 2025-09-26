import React from "react";

interface AddHospitalsCardProps {
  text: string;
  link: string;
}

const AddHospitalsCard: React.FC<AddHospitalsCardProps> = ({ text, link }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
      <p className="text-gray-900 font-medium mb-4">{text}</p>
      <a href={link} className="mt-auto text-indigo-600 font-semibold hover:underline">
        Go to Docs
      </a>
    </div>
  );
};

export default AddHospitalsCard;
