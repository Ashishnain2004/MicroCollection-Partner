import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardStats from './components/DashboardStats';
import NotificationPanel from './components/NotificationPanel';
import Partners from './pages/Partners';
import Orders from './pages/Orders';
import Wallet from './pages/Wallet';
import { useStore } from './store/useStore';

function Dashboard() {
  const { stats } = useStore();
  
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's your overview.</p>
      </div>
      
      <DashboardStats stats={stats} />
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Add New Partner
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Add Funds
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Assign Orders
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <div className="ml-64">
          <div className="p-4 border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-end">
              <NotificationPanel />
            </div>
          </div>
          <main className="p-8">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
