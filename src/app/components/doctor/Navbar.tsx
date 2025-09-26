// "use client"; // Must be the very first line

// import React from "react";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="h-16 bg-white shadow flex items-center px-6">
//       <h1 className="text-xl font-bold">Doctor Dashboard</h1>
//     </nav>
//   );
// };

// export default Navbar;
"use client"; // Must be the very first line

import React from "react";

interface NavbarProps {
  title?: string; // optional, defaults to "Doctor Dashboard"
}

const Navbar: React.FC<NavbarProps> = ({ title = "Doctor Dashboard" }) => {
  return (
    <nav className="h-16 bg-white shadow flex items-center px-6">
      <h1 className="text-xl font-bold">{title}</h1>
    </nav>
  );
};

export default Navbar;
