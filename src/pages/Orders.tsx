import React from 'react';
import OrdersList from '../components/OrdersList';
import { useStore } from '../store/useStore';
import { Plus } from 'lucide-react';

export default function Orders() {
  const { addOrder } = useStore();

  const handleAddOrder = () => {
    const newOrder = {
      id: Date.now().toString(),
      status: 'pending' as const,
      amount: Math.floor(Math.random() * 1000) + 100,
      location: 'New Location',
      timestamp: new Date().toISOString(),
    };
    addOrder(newOrder);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Order Management</h1>
        <button
          onClick={handleAddOrder}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create New Order
        </button>
      </div>
      <OrdersList />
    </div>
  );
}
