// "use client";

// import React from "react";

// // Define props interface
// interface GraphCardProps {
//   title: string;
//   value: number;
//   color?: string; // optional gradient color
// }

// const GraphCard: React.FC<GraphCardProps> = ({ title, value, color = "from-green-400 to-green-600" }) => {
//   return (
//     <div
//       className={`bg-gradient-to-r ${color} text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all`}
//     >
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-3xl font-bold">{value}</p>
//     </div>
//   );
// };

// export default GraphCard;
// "use client";

// import React from "react";

// // Props interface
// interface GraphCardProps {
//   title: string;
//   value: number | string; // support string or number
//   color?: string;          // optional gradient color
//   className?: string;      // optional extra classes
// }

// const GraphCard: React.FC<GraphCardProps> = ({
//   title,
//   value,
//   color = "from-green-400 to-green-600",
//   className = "",
// }) => {
//   return (
//     <div
//       className={`bg-gradient-to-r ${color} text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all ${className}`}
//     >
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-3xl font-bold">{value}</p>
//     </div>
//   );
// };

// export default GraphCard;
"use client";

import React from "react";

interface GraphCardProps {
  title: string;
  value: number | string;
  color?: string;        // Tailwind gradient color classes
  className?: string;    // Additional optional classes
  icon?: React.ReactNode; // Optional icon to display in card
}

const GraphCard: React.FC<GraphCardProps> = ({
  title,
  value,
  color = "from-green-400 to-green-600",
  className = "",
  icon,
}) => {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-between ${className}`}
    >
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      {icon && <div className="ml-4">{icon}</div>}
    </div>
  );
};

export default GraphCard;
