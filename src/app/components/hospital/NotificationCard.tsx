import React from "react";
import { Notification } from "../../pages/Notifications";

interface NotificationCardProps {
  notification: Notification;
  onMarkRead: (id: number) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notification, onMarkRead }) => {
  return (
    <div className={`border p-4 rounded shadow ${notification.read ? "bg-gray-100" : "bg-white"}`}>
      <h3 className="font-semibold">{notification.title}</h3>
      <p>{notification.message}</p>
      {!notification.read && (
        <button
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => onMarkRead(notification.id)}
        >
          Mark as Read
        </button>
      )}
    </div>
  );
};

export default NotificationCard;
