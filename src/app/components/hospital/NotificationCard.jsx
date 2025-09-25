import React from "react";
import Card from "./Card";

export default function NotificationCard({ notification, onMarkRead }) {
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
      </div>
    </Card>
  );
}
