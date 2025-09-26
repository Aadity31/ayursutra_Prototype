import React from "react";

interface ActiveUsersProps {
  users: number;
  clicks: number;
  sales: number;
  items: number;
}

const ActiveUsers: React.FC<ActiveUsersProps> = ({ users, clicks, sales, items }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-700 shadow-md rounded-xl p-6 text-white">
      <div className="grid grid-cols-2 gap-4">
        <div>Users: {users}</div>
        <div>Clicks: {clicks}</div>
        <div>Sales: {sales}</div>
        <div>Items: {items}</div>
      </div>
    </div>
  );
};

export default ActiveUsers;
