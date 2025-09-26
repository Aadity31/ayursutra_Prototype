import React from "react";
import { Feedback } from "../../types";

interface FeedbackSectionProps {
  feedbacks: Feedback[];
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ feedbacks }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      {feedbacks.map((f, idx) => (
        <div key={idx} className="mb-4">
          <div className="text-gray-900 font-medium">{f.hospital} - {f.date}</div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: `${f.completion}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackSection;
