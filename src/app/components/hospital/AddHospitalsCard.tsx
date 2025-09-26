

import React from "react";

interface AddHospitalsCardProps {
  text: string;
  link: string;
  image?: string;
}

const AddHospitalsCard: React.FC<AddHospitalsCardProps> = ({ text, link, image }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
      {image && (
        <img
          src={image}
          alt="Add Hospital"
          className="mb-4 rounded-lg object-cover w-full h-32"
        />
      )}
      <p className="text-gray-700 mb-4 text-center">{text}</p>
      <a
        href={link}
        className="text-indigo-600 hover:text-indigo-800 font-semibold"
      >
        Add Hospital
      </a>
    </div>
  );
};

export default AddHospitalsCard;
