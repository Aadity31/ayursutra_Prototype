import React from "react";
import Card from "./Card";
import { Notification } from "../../types/notification";

interface Props {
  notification: Notification;
  onMarkRead: (id: number) => void;
}

const NotificationCard: React.FC<Props> = ({ notification, onMarkRead }) => {
  return (
    <Card title={notification.title}>
      <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
      <div className="flex justify-end">
        {!notification.read && (
          <button
            onClick={() => onMarkRead(notification.id)}
            className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            Mark as Read
          </button>
        )}
        {notification.read && <span className="text-green-600 text-sm font-semibold">Read</span>}
      </div>
    </Card>
  );
};

export default NotificationCard;
