import React from 'react';
import { FaDoorOpen, FaCheck, FaTimes } from 'react-icons/fa';

const RoomDetails = () => {
  const totalRooms = 100;
  const occupied = 78;
  const available = totalRooms - occupied;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-purple-800 font-semibold">Room Details</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <FaDoorOpen className="text-blue-500 text-2xl" />
          <div>
            <div className="text-blue-800 font-semibold">Total Rooms</div>
            <div className="text-purple-800 font-semibold">{totalRooms}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaTimes className="text-red-500 text-2xl" />
          <div>
            <div className="text-blue-800 font-semibold">Occupied</div>
            <div className="text-purple-800 font-semibold">{occupied}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaCheck className="text-green-500 text-2xl" />
          <div>
            <div className="text-blue-800 font-semibold">Available</div>
            <div className="text-purple-800 font-semibold">{available}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
