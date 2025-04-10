import React from 'react';
import { useStore } from '../store/useStore';
import { Bell } from 'lucide-react';

export default function NotificationPanel() {
  const { notifications, markNotificationAsRead } = useStore();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <button className="relative p-2 text-gray-400 hover:text-gray-500">
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
        )}
      </button>

      <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <p className="px-4 py-2 text-sm text-gray-500">No notifications</p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
                onClick={() => markNotificationAsRead(notification.id)}
              >
                <p className="text-sm text-gray-900">{notification.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
