import React from "react";

interface BannerCardProps {
  image: string;
  title: string;
  description: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center">
    <img src="/Ayursutra.png" alt={title} className="w-full rounded-md mb-4" />
      <div className="text-gray-900 font-semibold text-lg">{title}</div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
};

export default BannerCard;
