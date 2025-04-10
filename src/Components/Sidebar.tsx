import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Wallet, 
  Package, 
  BarChart3, 
  Bell,
  LogOut 
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Partners', icon: Users, href: '/partners' },
  { name: 'Wallet', icon: Wallet, href: '/wallet' },
  { name: 'Orders', icon: Package, href: '/orders' },
  { name: 'Reports', icon: BarChart3, href: '/reports' },
  { name: 'Notifications', icon: Bell, href: '/notifications' },
];

export default function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between bg-gray-900 w-64 fixed left-0 top-0">
      <div>
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-white">MCP System</h2>
        </div>
        <nav className="space-y-1 px-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md group"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <button className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md w-full">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}