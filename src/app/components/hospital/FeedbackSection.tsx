import React from "react";
import { feedbackData } from "./feedbackData";
import { IconType } from "react-icons";

const FeedbackSection: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Feedback</h2>
      <p className="text-green-600 text-sm font-medium mb-6">+30% this month</p>

      <div className="space-y-6">
        {feedbackData.map((item, index) => {
          const Icon: IconType = item.icon;
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="mt-1">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.color + "20" }}
                >
                  <Icon className="text-sm" style={{ color: item.color }} />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-gray-700">
                    {item.hospital}
                  </h3>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{
                      width: `${item.completion}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>

                <div className="text-xs text-gray-500 mt-1">
                  {item.completion}% Completed
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackSection;
